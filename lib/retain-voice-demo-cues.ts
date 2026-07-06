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
