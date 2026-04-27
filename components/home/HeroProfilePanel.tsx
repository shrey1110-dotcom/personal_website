"use client";

import HeroHeadshot from "@/components/home/HeroHeadshot";

const profileSignals = [
  {
    label: "Current work",
    value: "Founder & Solo Engineer, RETAIN AI",
  },
  {
    label: "School",
    value: "CS @ CSULB · May 2027",
  },
] as const;

export default function HeroProfilePanel() {
  return (
    <aside className="lg:pt-4">
      <div className="hero-profile-panel">
        <div className="hero-portrait-stack">
          <div className="hero-portrait-orbit">
            <HeroHeadshot size="hero" />
          </div>

          <div className="space-y-3 text-center">
            <p className="hero-portrait-name">Shreyansh Sharma</p>
            <p className="hero-portrait-title">Full-stack products, live integrations, and ML-backed features.</p>
          </div>

          <div className="hero-proof-list hero-proof-list-compact">
            {profileSignals.map((signal) => (
              <div key={signal.label} className="hero-proof-row">
                <span className="hero-proof-label">{signal.label}</span>
                <span className="hero-proof-value">{signal.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
