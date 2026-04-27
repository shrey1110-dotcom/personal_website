"use client";

import HeroHeadshot from "@/components/home/HeroHeadshot";
import { heroStats } from "@/lib/portfolio-content";

const facts = [
  "CS @ CSULB · May 2027",
  "Long Beach, California",
  "Full-stack products + ML-backed features",
] as const;

export default function HeroProfilePanel() {
  return (
    <aside className="lg:pt-4">
      <div className="hero-profile-panel">
        <div className="hero-profile-topbar">
          <div>
            <p className="mono-label">Quick read</p>
            <p className="mt-2 text-base font-medium tracking-[-0.03em] text-slate-100">
              Product-minded engineer with shipped systems work
            </p>
          </div>
          <div className="hero-status-pill">
            <span className="hero-status-dot" />
            Open to internships
          </div>
        </div>

        <div className="hero-portrait-stack">
          <div className="hero-portrait-orbit">
            <span className="hero-portrait-ring hero-portrait-ring-a" />
            <span className="hero-portrait-ring hero-portrait-ring-b" />
            <HeroHeadshot size="hero" />
          </div>

          <div className="text-center">
            <p className="hero-portrait-title">Building products that read clearly and hold up technically.</p>
            <div className="hero-fact-list">
              {facts.map((fact) => (
                <span key={fact} className="hero-fact-chip">
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-meta-grid">
          {heroStats.map((item, index) => (
            <div
              key={item.label}
              className="hero-stat-card"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <p className="hero-stat-value">{item.value}</p>
              <p className="hero-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
