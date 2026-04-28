"use client";

import HeroHeadshot from "@/components/home/HeroHeadshot";

const profileSignals = [
  "Founder, RETAIN AI",
  "CS @ CSULB · 2027",
  "Long Beach, CA",
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
            <p className="hero-portrait-title">
              Messaging products, on-chain workflows, and ML-backed tools.
            </p>
          </div>

          <div className="hero-profile-facts">
            {profileSignals.map((signal) => (
              <span key={signal} className="hero-profile-chip">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
