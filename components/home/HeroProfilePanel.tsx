"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/lib/portfolio-content";

const lanes = [
  {
    title: "Operator software",
    copy: "Workflow-heavy product surfaces built to stay clear once real usage starts pushing on them.",
    marker: "Live",
  },
  {
    title: "System layers",
    copy: "Auth, APIs, messaging, data flow, and the integration work that makes the surface trustworthy.",
    marker: "Core",
  },
  {
    title: "Applied ML",
    copy: "Model output turned into readable product behavior instead of isolated notebook output.",
    marker: "Applied",
  },
] as const;

export default function HeroProfilePanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      className="lg:pt-6"
    >
      <div className="hero-profile-panel">
        <div className="hero-profile-topbar">
          <div>
            <p className="mono-label">Operating surface</p>
            <p className="mt-2 text-base font-medium tracking-[-0.03em] text-slate-100">
              Products, integrations, and system behavior
            </p>
          </div>
          <div className="hero-status-pill">
            <span className="hero-status-dot" />
            Shipping
          </div>
        </div>

        <div className="hero-runtime-surface">
          <div className="hero-runtime-header">
            <div>
              <p className="mono-label">How I work</p>
              <p className="mt-3 text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
                Clean surfaces. Real systems underneath.
              </p>
            </div>
            <div className="hero-runtime-badge">Full-stack</div>
          </div>

          <div className="mt-5 space-y-3">
            {lanes.map((lane, index) => (
              <motion.div
                key={lane.title}
                initial={{ opacity: 0.72, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.16 + index * 0.06,
                  duration: 0.54,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hero-lane-card"
              >
                <div className="hero-lane-stripe" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium tracking-[-0.02em] text-white">
                      {lane.title}
                    </p>
                    <span className="mono-label text-[0.66rem]">{lane.marker}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lane.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hero-meta-grid">
          {heroStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0.74, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.24 + index * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-stat-card"
            >
              <p className="hero-stat-value">{item.value}</p>
              <p className="hero-stat-label">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
