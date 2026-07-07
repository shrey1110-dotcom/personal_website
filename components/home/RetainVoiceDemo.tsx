"use client";

import { CallScopePlayer } from "@/components/home/CallScopePlayer";

export default function RetainVoiceDemo() {
  return (
    <div className="live-demo-shell live-demo-retain">
      <div className="live-demo-frame">
        <div className="live-demo-header">
          <div className="flex items-center gap-2.5">
            <span className="live-demo-dot bg-zinc-500/85" />
            <span className="live-demo-dot bg-zinc-400/85" />
            <span className="live-demo-dot bg-zinc-300/85" />
            <span className="mono-label ml-2">RETAINvoice</span>
          </div>
          <span className="live-demo-badge">
            <span className="live-demo-badge-dot" />
            Live
          </span>
        </div>

        <div className="live-demo-url-bar">
          <span className="truncate">inbound call · Cedar Dental Studio · native Gemini voice agent</span>
        </div>

        <div className="live-demo-viewport retain-voice-viewport p-3 sm:p-4">
          <CallScopePlayer embedded />
        </div>
      </div>
    </div>
  );
}
