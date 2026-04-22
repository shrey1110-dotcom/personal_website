"use client";

import { motion } from "framer-motion";

function PortraitIllustration() {
  return (
    <svg viewBox="0 0 420 520" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="portraitBg" x1="64" y1="46" x2="346" y2="472" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.18)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>
        <linearGradient id="portraitStroke" x1="118" y1="124" x2="306" y2="402" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cfd8ff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#72d8d2" stopOpacity="0.34" />
        </linearGradient>
        <radialGradient id="portraitGlow" cx="0" cy="0" r="1" gradientTransform="translate(132 92) rotate(51.1749) scale(280.297 292.96)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94a8ff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#94a8ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="30" y="24" width="360" height="470" rx="38" fill="url(#portraitGlow)" />
      <rect x="54" y="42" width="312" height="434" rx="34" fill="url(#portraitBg)" fillOpacity="0.24" />
      <rect x="76" y="64" width="268" height="390" rx="28" fill="rgba(8, 12, 20, 0.22)" stroke="rgba(255,255,255,0.08)" />
      <path
        d="M103 430c12-78 53-127 107-127s95 49 107 127"
        fill="rgba(5, 9, 18, 0.82)"
        stroke="url(#portraitStroke)"
        strokeWidth="2.2"
      />
      <path
        d="M166 339c13 15 28 22 44 22 18 0 34-8 48-24"
        stroke="rgba(255,255,255,0.16)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M162 355c-4 27-18 47-40 62"
        stroke="rgba(255,255,255,0.12)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M258 353c4 28 18 49 40 64"
        stroke="rgba(255,255,255,0.12)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="210" cy="172" r="66" fill="rgba(8, 12, 20, 0.84)" stroke="url(#portraitStroke)" strokeWidth="2.2" />
      <path
        d="M150 173c11-38 35-59 76-59 31 0 58 15 76 43-22-8-45-11-70-11-34 0-59 9-82 27Z"
        fill="rgba(9, 13, 22, 0.92)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.6"
      />
      <path d="M178 208c9 7 19 10 31 10 12 0 23-4 33-11" stroke="rgba(255,255,255,0.12)" strokeLinecap="round" strokeWidth="2" />
      <path d="M206 186v28" stroke="rgba(255,255,255,0.08)" strokeLinecap="round" strokeWidth="2" />
      <path d="M186 234c8 6 16 9 24 9 10 0 19-3 28-10" stroke="rgba(255,255,255,0.1)" strokeLinecap="round" strokeWidth="2" />
      <path d="M141 290c18 23 41 34 69 34 31 0 56-12 76-36" stroke="rgba(255,255,255,0.12)" strokeLinecap="round" strokeWidth="2" />
      <path d="M86 118H334" stroke="rgba(255,255,255,0.06)" strokeDasharray="5 10" />
      <path d="M86 370H334" stroke="rgba(255,255,255,0.06)" strokeDasharray="5 10" />
      <path d="M118 94V426" stroke="rgba(255,255,255,0.05)" />
      <path d="M302 94V426" stroke="rgba(255,255,255,0.05)" />
    </svg>
  );
}

const profileMeta = [
  {
    label: "Current work",
    value: "Lead developer at Aura Lifestyle",
  },
  {
    label: "Education",
    value: "CSULB Computer Science · May 2027",
  },
  {
    label: "Location",
    value: "Long Beach, California",
  },
  {
    label: "Focus",
    value: "Full-stack systems and applied ML",
  },
] as const;

export default function HeroProfilePanel() {
  return (
    <motion.aside
      initial={{ opacity: 0.96, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
      className="hero-profile-panel"
    >
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div>
          <p className="mono-label">Profile</p>
          <p className="mt-1 text-sm text-slate-300">Engineering-first, product-aware</p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
          SS
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="hero-portrait-surface">
          <PortraitIllustration />
          <div className="hero-portrait-overlay">
            <span className="mono-label">Software engineer</span>
            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
              Shreyansh Sharma
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 px-5 py-5 sm:grid-cols-2">
        {profileMeta.map((item) => (
          <div key={item.label} className="hero-meta-card">
            <p className="mono-label">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.value}</p>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
