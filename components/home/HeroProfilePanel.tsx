"use client";

import HeroHeadshot from "@/components/home/HeroHeadshot";

const profileSignals = [
  "Founder of RETAIN AI",
  "CSULB CS · May 2027",
  "Long Beach",
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
              Applied ML at Rezolve.ai. Building RETAIN AI on the side.
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
