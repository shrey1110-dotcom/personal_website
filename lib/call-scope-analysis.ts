export type RawSegment = { startMs: number; endMs: number };

export type TurnSpeaker = "agent" | "caller";

export type CallTurnInput = {
  speaker: TurnSpeaker;
  text: string;
  tools?: { name: string }[];
  /** Optional pre-baked speech start/end (ms). When present these are authoritative. */
  startMs?: number;
  endMs?: number;
};

export type CallTurn = CallTurnInput & {
  index: number;
  startMs: number;
  endMs: number;
  /** Silence gap (ms) between the end of the previous turn and the start of this turn. */
  gapMs: number;
};

export type CallScopeDoc = {
  source?: string;
  channel?: string;
  business?: string;
  audio: string;
  note?: string;
  durationMs?: number;
  turns: CallTurnInput[];
};

/** True when every turn carries pre-baked timestamps (offline forced-alignment). */
export function hasBakedTimings(turns: CallTurnInput[]): boolean {
  return turns.length > 0 && turns.every((t) => typeof t.startMs === "number" && typeof t.endMs === "number");
}

/** Build turns directly from authoritative baked timestamps in the transcript. */
export function buildTurnsFromTimings(turns: CallTurnInput[]): CallTurn[] {
  return turns.map((turn, index) => {
    const startMs = turn.startMs ?? 0;
    const endMs = turn.endMs ?? startMs;
    const prevEnd = index > 0 ? turns[index - 1].endMs ?? 0 : 0;
    const gapMs = index > 0 ? Math.max(0, startMs - prevEnd) : 0;
    return { ...turn, index, startMs, endMs, gapMs: Math.round(gapMs) };
  });
}

/** Return the turn whose speech window [startMs, endMs] contains the given time, or null. */
export function speakingTurnAt(turns: CallTurn[], timeMs: number): CallTurn | null {
  for (let i = 0; i < turns.length; i++) {
    if (timeMs >= turns[i].startMs && timeMs <= turns[i].endMs) return turns[i];
  }
  return null;
}

/**
 * Downsample raw PCM into a normalized peak-per-bar array in [0, 1].
 * Used to draw the static waveform.
 */
export function computePeaks(channelData: Float32Array, barCount: number): number[] {
  const peaks: number[] = new Array(barCount).fill(0);
  if (channelData.length === 0 || barCount <= 0) return peaks;
  const samplesPerBar = channelData.length / barCount;
  let globalMax = 0;
  for (let bar = 0; bar < barCount; bar++) {
    const start = Math.floor(bar * samplesPerBar);
    const end = Math.min(channelData.length, Math.floor((bar + 1) * samplesPerBar));
    let max = 0;
    for (let i = start; i < end; i++) {
      const v = Math.abs(channelData[i] ?? 0);
      if (v > max) max = v;
    }
    peaks[bar] = max;
    if (max > globalMax) globalMax = max;
  }
  if (globalMax > 0) {
    for (let i = 0; i < peaks.length; i++) peaks[i] = peaks[i] / globalMax;
  }
  return peaks;
}

type DetectOptions = {
  frameMs?: number;
  minSilenceMs?: number;
  minSpeechMs?: number;
  thresholdFactor?: number;
};

/**
 * Energy-based voice-activity detection. Returns speech segments in milliseconds.
 * Silence gaps between segments are what we later report as turn gaps / response latency.
 */
export function detectSegments(
  channelData: Float32Array,
  sampleRate: number,
  options: DetectOptions = {}
): RawSegment[] {
  const frameMs = options.frameMs ?? 20;
  const minSilenceMs = options.minSilenceMs ?? 200;
  const minSpeechMs = options.minSpeechMs ?? 140;
  const thresholdFactor = options.thresholdFactor ?? 2.4;

  const frameSize = Math.max(1, Math.floor((sampleRate * frameMs) / 1000));
  const frameCount = Math.floor(channelData.length / frameSize);
  if (frameCount === 0) return [];

  const rms: number[] = new Array(frameCount).fill(0);
  for (let f = 0; f < frameCount; f++) {
    const start = f * frameSize;
    let sum = 0;
    for (let i = 0; i < frameSize; i++) {
      const v = channelData[start + i] ?? 0;
      sum += v * v;
    }
    rms[f] = Math.sqrt(sum / frameSize);
  }

  const sorted = [...rms].sort((a, b) => a - b);
  const noiseFloor = sorted[Math.floor(sorted.length * 0.5)] || 0;
  const peak = sorted[sorted.length - 1] || 0;
  const threshold = Math.max(noiseFloor * thresholdFactor, noiseFloor + (peak - noiseFloor) * 0.06, 1e-4);

  const speech: boolean[] = rms.map((v) => v > threshold);

  const rawSegments: RawSegment[] = [];
  let segStart = -1;
  for (let f = 0; f < frameCount; f++) {
    if (speech[f] && segStart < 0) {
      segStart = f;
    } else if (!speech[f] && segStart >= 0) {
      rawSegments.push({ startMs: segStart * frameMs, endMs: f * frameMs });
      segStart = -1;
    }
  }
  if (segStart >= 0) rawSegments.push({ startMs: segStart * frameMs, endMs: frameCount * frameMs });

  const bridged: RawSegment[] = [];
  for (const seg of rawSegments) {
    const last = bridged[bridged.length - 1];
    if (last && seg.startMs - last.endMs < minSilenceMs) {
      last.endMs = seg.endMs;
    } else {
      bridged.push({ ...seg });
    }
  }

  return bridged.filter((s) => s.endMs - s.startMs >= minSpeechMs);
}

/**
 * Force the detected segment count to equal the transcript turn count so text
 * lines up 1:1 with measured audio. Merges the smallest gaps or splits the
 * longest segments as needed.
 */
export function alignSegmentsToTurns(segments: RawSegment[], turnCount: number, durationMs: number): RawSegment[] {
  if (turnCount <= 0) return [];
  let segs = segments.map((s) => ({ ...s }));

  if (segs.length === 0) {
    const step = durationMs / turnCount;
    return Array.from({ length: turnCount }, (_, i) => ({
      startMs: i * step,
      endMs: (i + 1) * step,
    }));
  }

  while (segs.length > turnCount) {
    let mergeIndex = 0;
    let smallestGap = Infinity;
    for (let i = 1; i < segs.length; i++) {
      const gap = segs[i].startMs - segs[i - 1].endMs;
      if (gap < smallestGap) {
        smallestGap = gap;
        mergeIndex = i;
      }
    }
    segs[mergeIndex - 1] = {
      startMs: segs[mergeIndex - 1].startMs,
      endMs: segs[mergeIndex].endMs,
    };
    segs.splice(mergeIndex, 1);
  }

  while (segs.length < turnCount) {
    let splitIndex = 0;
    let longest = -1;
    for (let i = 0; i < segs.length; i++) {
      const len = segs[i].endMs - segs[i].startMs;
      if (len > longest) {
        longest = len;
        splitIndex = i;
      }
    }
    const seg = segs[splitIndex];
    const mid = (seg.startMs + seg.endMs) / 2;
    segs.splice(splitIndex, 1, { startMs: seg.startMs, endMs: mid }, { startMs: mid, endMs: seg.endMs });
  }

  return segs;
}

/** Combine transcript turns with aligned audio segments and compute measured gaps. */
export function buildTurns(turns: CallTurnInput[], segments: RawSegment[]): CallTurn[] {
  return turns.map((turn, index) => {
    const seg = segments[index] ?? { startMs: 0, endMs: 0 };
    const prev = index > 0 ? segments[index - 1] : null;
    const gapMs = prev ? Math.max(0, seg.startMs - prev.endMs) : 0;
    return {
      ...turn,
      index,
      startMs: seg.startMs,
      endMs: seg.endMs,
      gapMs: Math.round(gapMs),
    };
  });
}

export function activeTurnIndex(turns: CallTurn[], timeMs: number): number {
  let active = -1;
  for (let i = 0; i < turns.length; i++) {
    if (timeMs >= turns[i].startMs) active = i;
    else break;
  }
  return active;
}

export function formatMs(ms: number): string {
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.round(ms)}ms`;
}
