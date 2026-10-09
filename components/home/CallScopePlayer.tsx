"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  activeTurnIndex,
  alignSegmentsToTurns,
  buildTurns,
  buildTurnsFromTimings,
  computePeaks,
  detectSegments,
  hasBakedTimings,
  type CallScopeDoc,
  type CallTurn,
} from "@/lib/call-scope-analysis";

type LoadState = "loading" | "ready" | "error";

const WINDOW_MS = 4000;
const PAD = { left: 16, right: 16, top: 20, bottom: 22 };
const BAR_TARGET = 3600;
/** Surface at most this many turn-gap markers so the waveform stays readable. */
const MAX_GAP_MARKERS = 3;

const COLORS = {
  grid: "rgba(255,255,255,0.06)",
  laneLabel: "rgba(255,255,255,0.28)",
  callerPlayed: "#4f6bff",
  callerIdle: "rgba(79,107,255,0.42)",
  agentPlayed: "#e6eaf7",
  agentIdle: "rgba(230,234,247,0.40)",
  playhead: "#4f6bff",
  accent: "#6b83ff",
};

type Analysis = {
  peaks: number[];
  durationMs: number;
  turns: CallTurn[];
  /** Indices of the (few) turns whose gap we surface. */
  gapSet: Set<number>;
};

type CallScopePlayerProps = {
  docUrl?: string;
  /** When true, fills the parent container (used inside the voice demo shell). */
  embedded?: boolean;
};

function fmtClock(ms: number): string {
  const safe = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function fmtGap(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

export function CallScopePlayer({
  docUrl = "/demo/latest_demo_call.json",
  embedded = false,
}: CallScopePlayerProps) {
  const [state, setState] = useState<LoadState>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [doc, setDoc] = useState<CallScopeDoc | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMs, setCurrentMs] = useState(0);
  /** True once the visitor has asked for sound. Before that, the call plays muted. */
  const [hasUnmuted, setHasUnmuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const currentMsRef = useRef(0);
  const analysisRef = useRef<Analysis | null>(null);

  const waveformHeight = embedded ? "h-[168px]" : "h-[300px]";

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setState("loading");
        const docRes = await fetch(docUrl);
        if (!docRes.ok) throw new Error(`transcript ${docRes.status}`);
        const parsed = (await docRes.json()) as CallScopeDoc;
        if (cancelled) return;
        setDoc(parsed);

        const audioRes = await fetch(parsed.audio);
        if (!audioRes.ok) throw new Error(`audio ${audioRes.status}`);
        const arrayBuffer = await audioRes.arrayBuffer();

        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer.slice(0));
        void ctx.close();
        if (cancelled) return;

        const channel = audioBuffer.getChannelData(0);
        const durationMs = audioBuffer.duration * 1000;
        const barCount = Math.min(BAR_TARGET, Math.max(600, Math.floor(audioBuffer.duration * 55)));
        const peaks = computePeaks(channel, barCount);

        const turns = hasBakedTimings(parsed.turns)
          ? buildTurnsFromTimings(parsed.turns)
          : buildTurns(
              parsed.turns,
              alignSegmentsToTurns(detectSegments(channel, audioBuffer.sampleRate), parsed.turns.length, durationMs)
            );

        // Prefer agent tool turns, then the first agent response. Cap markers.
        const agentTurns = turns.filter((t) => t.speaker === "agent" && t.index > 0);
        const chosen: number[] = [];
        for (const t of agentTurns) {
          if (t.tools && t.tools.length > 0) chosen.push(t.index);
        }
        const firstAgent = agentTurns[0];
        if (firstAgent && !chosen.includes(firstAgent.index)) chosen.unshift(firstAgent.index);
        const gapSet = new Set(chosen.slice(0, MAX_GAP_MARKERS));

        const result: Analysis = { peaks, durationMs, turns, gapSet };
        analysisRef.current = result;
        setAnalysis(result);
        setState("ready");
      } catch (err) {
        if (cancelled) return;
        setErrorMsg(err instanceof Error ? err.message : "failed to load demo");
        setState("error");
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [docUrl]);

  // Autoplay muted once ready so the waveform progresses; click unmutes.
  useEffect(() => {
    if (state !== "ready") return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.muted = true;
    const attempt = audio.play();
    if (attempt) {
      attempt.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [state]);

  const activeIndex = useMemo(() => {
    if (!analysis) return -1;
    return activeTurnIndex(analysis.turns, currentMs);
  }, [analysis, currentMs]);

  const activeTurn = activeIndex >= 0 && analysis ? analysis.turns[activeIndex] : null;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const data = analysisRef.current;
    if (!canvas || !data) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    if (canvas.width !== Math.floor(cssWidth * dpr) || canvas.height !== Math.floor(cssHeight * dpr)) {
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const plotX = PAD.left;
    const plotY = PAD.top;
    const plotW = cssWidth - PAD.left - PAD.right;
    const plotH = cssHeight - PAD.top - PAD.bottom;

    const { durationMs, peaks, turns } = data;
    const nowMs = currentMsRef.current;

    const maxStart = Math.max(0, durationMs - WINDOW_MS);
    const desiredStart = nowMs - WINDOW_MS * 0.42;
    const viewStart = durationMs <= WINDOW_MS ? 0 : Math.min(maxStart, Math.max(0, desiredStart));
    const viewSpan = durationMs <= WINDOW_MS ? durationMs : WINDOW_MS;
    const msToX = (ms: number) => plotX + ((ms - viewStart) / viewSpan) * plotW;

    const agentBase = plotY + plotH * 0.3;
    const callerBase = plotY + plotH * 0.74;
    const laneMax = plotH * 0.24;

    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    for (const base of [agentBase, callerBase]) {
      ctx.beginPath();
      ctx.moveTo(plotX, base);
      ctx.lineTo(plotX + plotW, base);
      ctx.stroke();
    }

    ctx.font = "9px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = COLORS.laneLabel;
    ctx.fillText("agent", plotX + 2, agentBase - laneMax - 5);
    ctx.fillText("caller", plotX + 2, callerBase + laneMax + 6);

    const msPerBar = durationMs / peaks.length;
    const barPixelWidth = Math.max(1.2, (msPerBar / viewSpan) * plotW);
    const barW = Math.max(1, barPixelWidth * 0.62);

    let cursor = 0;
    for (let b = 0; b < peaks.length; b++) {
      const barMs = (b + 0.5) * msPerBar;
      while (cursor < turns.length - 1 && barMs >= turns[cursor + 1].startMs) cursor++;
      if (barMs < viewStart - msPerBar) continue;
      if (barMs > viewStart + viewSpan + msPerBar) break;

      const turn = turns[cursor];
      if (!turn || barMs < turn.startMs || barMs > turn.endMs) continue;

      const isAgent = turn.speaker === "agent";
      const base = isAgent ? agentBase : callerBase;
      const played = barMs <= nowMs;
      const color = isAgent
        ? played
          ? COLORS.agentPlayed
          : COLORS.agentIdle
        : played
          ? COLORS.callerPlayed
          : COLORS.callerIdle;

      const h = Math.max(1.5, peaks[b] * laneMax);
      const x = msToX(barMs) - barW / 2;
      ctx.fillStyle = color;
      roundRect(ctx, x, base - h, barW, h * 2, Math.min(barW / 2, 1.5));
      ctx.fill();
    }

    // Honest turn-gap markers from measured silence between speakers.
    const active = activeTurnIndex(turns, nowMs);
    if (active > 0 && data.gapSet.has(active)) {
      const cur = turns[active];
      const prev = turns[active - 1];
      const gapStart = prev.endMs;
      const gapEnd = cur.startMs;
      if (gapEnd > viewStart && gapStart < viewStart + viewSpan) {
        const x1 = msToX(gapStart);
        const x2 = msToX(gapEnd);
        const y = (agentBase + callerBase) / 2;
        ctx.strokeStyle = COLORS.accent;
        ctx.fillStyle = COLORS.accent;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();
        drawArrowHead(ctx, x1, y, 1);
        drawArrowHead(ctx, x2, y, -1);
        ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.fillStyle = COLORS.accent;
        ctx.fillText(`gap ${fmtGap(cur.gapMs)}`, (x1 + x2) / 2, y - 5);
      }
    }

    const px = msToX(nowMs);
    if (px >= plotX - 2 && px <= plotX + plotW + 2) {
      ctx.strokeStyle = COLORS.playhead;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px, plotY - 4);
      ctx.lineTo(px, plotY + plotH);
      ctx.stroke();
      ctx.fillStyle = COLORS.playhead;
      ctx.fillRect(px - 3, plotY - 7, 6, 6);
    }
  }, []);

  useEffect(() => {
    const tick = () => {
      const audio = audioRef.current;
      if (audio) {
        currentMsRef.current = audio.currentTime * 1000;
        setCurrentMs(currentMsRef.current);
      }
      draw();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  useEffect(() => {
    const onResize = () => draw();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [draw]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.muted) {
      audio.muted = false;
      setHasUnmuted(true);
      if (audio.paused) void audio.play();
      setIsPlaying(true);
      return;
    }
    if (audio.paused) {
      void audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleSeek = useCallback((clientX: number) => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    const data = analysisRef.current;
    if (!canvas || !audio || !data) return;
    const rect = canvas.getBoundingClientRect();
    const plotW = rect.width - PAD.left - PAD.right;
    const relX = clientX - rect.left - PAD.left;
    const nowMs = currentMsRef.current;
    const maxStart = Math.max(0, data.durationMs - WINDOW_MS);
    const viewStart = data.durationMs <= WINDOW_MS ? 0 : Math.min(maxStart, Math.max(0, nowMs - WINDOW_MS * 0.42));
    const viewSpan = data.durationMs <= WINDOW_MS ? data.durationMs : WINDOW_MS;
    const targetMs = viewStart + (relX / plotW) * viewSpan;
    audio.currentTime = Math.min(data.durationMs, Math.max(0, targetMs)) / 1000;
  }, []);

  const durationMs = analysis?.durationMs ?? 0;
  const turnCount = analysis?.turns.length ?? 0;
  const toolTurns =
    analysis?.turns.filter((t) => t.tools && t.tools.length > 0).length ?? 0;

  return (
    <div className={embedded ? "w-full" : "w-full max-w-3xl"}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0b0f]">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2 font-mono text-[11px]">
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate text-white/80">frontline/call-scope</span>
            <span className="text-white/35">[recorded call]</span>
          </div>
          <span className="flex-shrink-0 tabular-nums text-white/50">
            {fmtClock(currentMs)} / {fmtClock(durationMs)}
          </span>
        </div>

        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/45">
          <span>dental · scheduling</span>
          <span className="text-white/25">·</span>
          <span>en-US</span>
          <span className="text-white/25">·</span>
          <span>appointment booking</span>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            className={`block w-full ${waveformHeight} cursor-pointer`}
            onClick={(e) => handleSeek(e.clientX)}
          />

          {state === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white/40">
              loading waveform…
            </div>
          )}
          {state === "error" && (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-red-400/80">
              failed to load demo: {errorMsg}
            </div>
          )}

          <AnimatePresence>
            {activeTurn && activeTurn.tools && activeTurn.tools.length > 0 && (
              <motion.div
                key={`fn-${activeIndex}`}
                initial={{ opacity: 0, y: -8, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.94 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-1/2 top-2 z-10 flex -translate-x-1/2 flex-col items-center gap-1"
              >
                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#4f6bff]/70">
                  tool
                </span>
                <div className="flex items-center gap-1.5">
                  {activeTurn.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-1 rounded-md border border-[#4f6bff]/40 bg-[#4f6bff]/15 px-2 py-1 font-mono text-[11px] font-medium text-[#dfe5ff]"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              disabled={state !== "ready"}
              aria-label={hasUnmuted ? (isPlaying ? "Pause" : "Play") : "Play with sound"}
              className={`pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-[#4f6bff] text-white transition-opacity duration-300 hover:bg-[#3f5bff] disabled:opacity-40 ${
                hasUnmuted
                  ? `cs-heartbeat-slow ${isPlaying ? "opacity-35 hover:opacity-100" : "opacity-100"}`
                  : "cs-heartbeat-slow opacity-100"
              }`}
            >
              {hasUnmuted && isPlaying ? (
                <span className="flex gap-1.5">
                  <span className="block h-4 w-1.5 rounded-sm bg-white" />
                  <span className="block h-4 w-1.5 rounded-sm bg-white" />
                </span>
              ) : (
                <span className="ml-1 block h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
              )}
            </button>
            {!hasUnmuted && state === "ready" && (
              <span className="pointer-events-none rounded bg-black/50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/70">
                tap to hear the real call
              </span>
            )}
          </div>
        </div>

        <div className="min-h-[52px] border-t border-white/10 px-3 py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTurn ? (
                <p className="text-[13px] leading-snug">
                  <span
                    className={`mr-1.5 font-mono text-[11px] ${
                      activeTurn.speaker === "agent" ? "text-[#4f6bff]" : "text-white/45"
                    }`}
                  >
                    {activeTurn.speaker} ›
                  </span>
                  <span className="text-white/90">{activeTurn.text}</span>
                </p>
              ) : (
                <p className="font-mono text-xs text-white/40">waiting for audio…</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 border-t border-white/10 font-mono">
          <div className="flex flex-col gap-0.5 border-r border-white/10 px-3 py-2">
            <span className="text-[9px] uppercase tracking-[0.1em] text-white/45">duration</span>
            <span className="text-sm font-semibold tabular-nums tracking-tight text-white/90">
              {fmtClock(durationMs)}
            </span>
          </div>
          <div className="flex flex-col gap-0.5 border-r border-white/10 px-3 py-2">
            <span className="text-[9px] uppercase tracking-[0.1em] text-white/45">turns</span>
            <span className="text-sm font-semibold tabular-nums tracking-tight text-white/90">{turnCount}</span>
          </div>
          <div className="flex flex-col gap-0.5 px-3 py-2">
            <span className="text-[9px] uppercase tracking-[0.1em] text-white/45">tools used</span>
            <span className="text-sm font-semibold tabular-nums tracking-tight text-white/90">{toolTurns}</span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={doc?.audio} loop preload="auto" className="hidden" />
    </div>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawArrowHead(ctx: CanvasRenderingContext2D, x: number, y: number, dir: 1 | -1) {
  const size = 5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + dir * size, y - size * 0.7);
  ctx.lineTo(x + dir * size, y + size * 0.7);
  ctx.closePath();
  ctx.fill();
}
