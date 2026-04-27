"use client";

import HeroHeadshot from "@/components/home/HeroHeadshot";

const proofSignals = [
  {
    label: "Live work",
    value: "5 products in production",
  },
  {
    label: "Scale tested",
    value: "4M+ messages through RETAIN AI",
  },
  {
    label: "On-chain throughput",
    value: "425 tx/s on ResilientAid",
  },
] as const;

export default function HeroProfilePanel() {
  return (
    <aside className="lg:pt-4">
      <div className="hero-profile-panel">
        <div className="hero-profile-topbar">
          <div>
            <p className="mono-label">Quick read</p>
            <p className="mt-2 text-base font-medium tracking-[-0.03em] text-slate-100">
              I build software that looks clear on the surface and holds up once real usage starts.
            </p>
          </div>
        </div>

        <div className="hero-portrait-stack">
          <div className="hero-portrait-orbit">
            <HeroHeadshot size="hero" />
          </div>

          <div className="space-y-3 text-center">
            <p className="hero-portrait-title">Live products, real integrations, and applied ML.</p>
            <p className="hero-portrait-subtitle">CS @ CSULB · Long Beach, California</p>
          </div>
        </div>

        <div className="hero-proof-list">
          {proofSignals.map((signal) => (
            <div key={signal.label} className="hero-proof-row">
              <span className="hero-proof-label">{signal.label}</span>
              <span className="hero-proof-value">{signal.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
