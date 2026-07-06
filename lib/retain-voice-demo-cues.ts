/** Plivo public demo audio: https://www.plivo.com/audio/us-voice-demo.mp3 */
export const voiceDemoAudioSrc = "/plivo-us-voice-demo.mp3";

export const voiceDemoPlaceholderDuration = "0:46";

export const voiceDemoScenario = {
  callLabel: "outbound support call",
  scenario: "order_status",
  vertical: "ecommerce · retail",
  locale: "🇺🇸 en-US",
  session: "[01]",
} as const;

export const voiceDemoMetrics = [
  { label: "latency", value: "420", unit: "ms", meta: "average" },
  { label: "resolution", value: "first", unit: "call", meta: "no handoff" },
  { label: "cost", value: "$0.04", unit: "", meta: "vs $5.50 human" },
] as const;

export type VoiceTurn = {
  id: string;
  speaker: "agent" | "caller";
  /** Playback time (s) when this turn starts being spoken. */
  at: number;
  /** Playback time (s) when this turn finishes. */
  end: number;
  text: string;
  /** Perceived turn-gap latency (ms) before an agent turn — the native turn-detection speed. */
  gapMs?: number;
  /** Tool the agent ran to produce this turn. */
  tool?: string;
};

/** Turns matched to Plivo us-voice-demo.mp3 (Horizon Insurance auto-claim, ~46s). */
export const voiceDemoTurns: VoiceTurn[] = [
  {
    id: "agent-1",
    speaker: "agent",
    at: 0.5,
    end: 12.2,
    text: "Hi Emily, this is the AI agent from Horizon Insurance. I'm calling about the auto claim you submitted recently — I just need a quick clarification to keep processing it.",
  },
  {
    id: "caller-1",
    speaker: "caller",
    at: 12.6,
    end: 13.4,
    text: "Sure, what do you need?",
  },
  {
    id: "agent-2",
    speaker: "agent",
    at: 16.4,
    end: 27.8,
    gapMs: 15,
    tool: "lookupClaim()",
    text: "In your claim form the incident date is January 12th, but the repair is dated January 10th. Can you confirm the actual date of the accident?",
  },
  {
    id: "caller-2",
    speaker: "caller",
    at: 28.3,
    end: 39.6,
    text: "Oh right — the accident did happen on January 10th. I submitted the form two days later and entered the wrong date. Sorry about that.",
  },
  {
    id: "agent-3",
    speaker: "agent",
    at: 40.2,
    end: 45.6,
    gapMs: 15,
    tool: "updateClaimRecord()",
    text: "Thanks for confirming. I'll update the incident date to January 10th so the review can proceed.",
  },
];

export function formatVoiceTime(seconds: number): string {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const remainder = Math.floor(safe % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

/** Snapshot of Plivo hero waveform bar heights (52 bars, 0–1 scale). */
export const plivoWaveformHeights = [
  0.66, 0.75, 0.99, 0.83, 0.98, 1, 1, 1, 0.92, 0.89, 0.81, 0.56, 0.53, 0.66, 0.49, 0.28, 0.2, 0.57,
  0.4, 0.51, 0.57, 0.6, 0.86, 0.97, 1, 0.83, 1, 0.82, 0.99, 0.98, 0.78, 0.55, 0.77, 0.73, 0.6, 0.45,
  0.29, 0.46, 0.25, 0.66, 0.44, 0.59, 0.56, 0.81, 0.8, 0.83, 0.98, 1, 1, 1, 1, 0.63,
] as const;
