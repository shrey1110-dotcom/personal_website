"use client";

import { useEffect, useRef, useState } from "react";
import {
  formatVoiceTime,
  plivoWaveformHeights,
  voiceDemoAudioSrc,
  voiceDemoMetrics,
  voiceDemoPlaceholderDuration,
  voiceDemoScenario,
  voiceDemoTurns,
  type VoiceTurn,
} from "@/lib/retain-voice-demo-cues";
import "./plivo-voice-recording-card.css";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="pvr-play-icon pvr-play-icon-play">
      <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="pvr-play-icon">
      <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
    </svg>
  );
}

function GapChip({ value }: { value: number }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 620;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(value * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div className="pvr-gap" role="note">
      <span className="pvr-gap-line" />
      <span className="pvr-gap-chip">
        <span className="pvr-gap-pulse" aria-hidden="true" />
        turn gap
        <strong>{shown} ms</strong>
      </span>
      <span className="pvr-gap-line" />
    </div>
  );
}

function TurnRow({ turn, active }: { turn: VoiceTurn; active: boolean }) {
  const isAgent = turn.speaker === "agent";

  return (
    <div className={`pvr-turn pvr-turn-${turn.speaker}${active ? " pvr-turn-active" : ""}`}>
      <div className="pvr-turn-meta">
        <span className="pvr-turn-who">{isAgent ? "agent" : "caller"}</span>
        {turn.tool ? <span className="pvr-turn-tool">{turn.tool}</span> : null}
      </div>
      <p className="pvr-turn-text">
        {turn.text}
        {active ? <span className="pvr-caret" aria-hidden="true" /> : null}
      </p>
    </div>
  );
}

export default function RetainVoiceDemo() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const onLoadedMetadata = () => {
      if (audio.duration && !Number.isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !Number.isNaN(audio.duration)) {
        setProgressPercent((audio.currentTime / audio.duration) * 100);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgressPercent(0);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    audio.load();

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const visibleTurns = voiceDemoTurns.filter((turn) => currentTime >= turn.at);
  const activeTurn = [...voiceDemoTurns]
    .reverse()
    .find((turn) => currentTime >= turn.at && currentTime < turn.end);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [visibleTurns.length]);

  const durationLabel = duration > 0 ? formatVoiceTime(duration) : voiceDemoPlaceholderDuration;
  const elapsedLabel = currentTime > 0 ? formatVoiceTime(currentTime) : durationLabel;

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      void audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const statusLabel = activeTurn
    ? activeTurn.speaker === "agent"
      ? "agent speaking"
      : "listening"
    : isPlaying
      ? "connecting"
      : "ready";

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
          <span className="truncate">outbound callback · native Gemini voice agent</span>
        </div>

        <div className="live-demo-viewport retain-voice-viewport">
          <div className="pvr-scope">
            <div className="pvr-card">
              <div className="pvr-card-header">
                <div className="pvr-call-label">
                  <span className="pvr-live-dot" aria-hidden="true">
                    <span className="pvr-live-ping" />
                    <span className="pvr-live-core" />
                  </span>
                  <span>{voiceDemoScenario.callLabel}</span>
                </div>
                <span className="pvr-mono pvr-tabular">{elapsedLabel}</span>
                <span className="pvr-mono pvr-scenario">{voiceDemoScenario.scenario}</span>
              </div>

              <div className="pvr-pill-row">
                <span className="pvr-pill">{voiceDemoScenario.vertical}</span>
                <span className="pvr-pill">{voiceDemoScenario.locale}</span>
                <span className="pvr-pill-spacer" />
                <span className="pvr-mono pvr-session">{voiceDemoScenario.session}</span>
              </div>

              <div className="pvr-player">
                <div className="pvr-player-grid" aria-hidden="true" />
                <div className="pvr-player-main">
                  <button
                    type="button"
                    className="pvr-play-button"
                    aria-label={isPlaying ? "Pause" : "Play"}
                    onClick={togglePlayback}
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>

                  <div className="pvr-waveform" aria-hidden="true">
                    {plivoWaveformHeights.map((height, index) => {
                      const barPct = (index / plivoWaveformHeights.length) * 100;
                      const filled = barPct < progressPercent;
                      const isHead =
                        isPlaying && filled && barPct > progressPercent - (100 / plivoWaveformHeights.length) * 1.5;

                      return (
                        <div
                          key={`wave-${index}`}
                          className={`pvr-bar${filled ? " pvr-bar-filled" : ""}${isHead ? " pvr-bar-head" : ""}`}
                          style={{ height: `${Math.round(height * 100)}%` }}
                        />
                      );
                    })}
                  </div>

                  <span className="pvr-mono pvr-tabular pvr-elapsed">{durationLabel}</span>
                </div>
              </div>

              <div className="pvr-transcript-head">
                <span className="pvr-mono pvr-transcript-title">live transcript</span>
                <span className={`pvr-status pvr-status-${statusLabel.replace(" ", "-")}`}>
                  <span className="pvr-status-dot" aria-hidden="true" />
                  {statusLabel}
                </span>
              </div>

              <div className="pvr-transcript" ref={scrollRef}>
                {visibleTurns.length === 0 ? (
                  <p className="pvr-transcript-empty">
                    Press play to run a real call. Transcript and turn-gap timing stream in live.
                  </p>
                ) : (
                  visibleTurns.map((turn) => (
                    <div key={turn.id}>
                      {turn.gapMs ? <GapChip value={turn.gapMs} /> : null}
                      <TurnRow turn={turn} active={activeTurn?.id === turn.id} />
                    </div>
                  ))
                )}
              </div>

              <div className="pvr-metrics">
                {voiceDemoMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`pvr-metric${index < voiceDemoMetrics.length - 1 ? " pvr-metric-divider" : ""}`}
                  >
                    <span className="pvr-metric-label">{metric.label}</span>
                    <div className="pvr-metric-value-row">
                      <span className="pvr-metric-value">{metric.value}</span>
                      {metric.unit ? <span className="pvr-metric-unit">{metric.unit}</span> : null}
                    </div>
                    <span className="pvr-metric-meta">{metric.meta}</span>
                  </div>
                ))}
              </div>

              <div className="pvr-footer">
                <span className="pvr-footer-status">
                  <span className="pvr-footer-dot" aria-hidden="true" />
                  resolved · no handoff
                </span>
                <span className="pvr-footer-agent">agent_id = ag_01HA</span>
              </div>
            </div>

            <audio ref={audioRef} src={voiceDemoAudioSrc} preload="metadata" />
          </div>
        </div>
      </div>
    </div>
  );
}
