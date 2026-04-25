"use client";

import type { ReactNode } from "react";
import TiltPanel from "@/components/home/TiltPanel";
import type { ProjectEntry } from "@/lib/portfolio-content";

type ProjectVisualProps = {
  project: ProjectEntry;
};

function VisualShell({
  accentClassName,
  chromeLabel,
  children,
  rightLabel,
}: {
  accentClassName: string;
  chromeLabel: string;
  children: ReactNode;
  rightLabel: string;
}) {
  return (
    <TiltPanel className={`project-visual ${accentClassName}`} intensity={5.8} lift={5}>
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-200/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300/85" />
          <span className="mono-label ml-2">{chromeLabel}</span>
        </div>
        <span className="mono-label">{rightLabel}</span>
      </div>
      {children}
    </TiltPanel>
  );
}

function ResilientVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-resilient"
      chromeLabel="Aid protocol runtime"
      rightLabel="Polygon Amoy"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-6">
          <div className="flex items-center justify-between">
            <p className="mono-label">Distribution flow</p>
            <span className="mono-label">4 interfaces</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Donor", "Campaign funding"],
              ["Admin", "Identity issuance"],
              ["Beneficiary", "Offline wallet credits"],
              ["Vendor POS", "Stablecoin settlement"],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] px-4 py-4"
              >
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 h-24 rounded-[1.35rem] border border-white/8 bg-[linear-gradient(135deg,rgba(168,85,247,0.18),rgba(45,212,191,0.08),rgba(255,255,255,0.02))] p-4">
            <p className="mono-label">Settlement path</p>
            <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-200">
              <span>Donate</span>
              <span>→</span>
              <span>Verify</span>
              <span>→</span>
              <span>Disburse</span>
              <span>→</span>
              <span>Redeem</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">Network state</p>
              <span className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">
                live
              </span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["425 tx/s", "throughput"],
                ["0%", "fees"],
                ["<2s", "settlement"],
                ["100%", "transparency"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.25rem] border border-white/8 bg-black/18 px-4 py-4"
                >
                  <p className="text-xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-5">
            <p className="mono-label">Trust row</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Polygon", "Chainlink", "The Graph", "Bybit", "Alchemy"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.14em] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function KalaVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-kala"
      chromeLabel="Global artisan marketplace"
      rightLabel="AI origin detection"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[1.7rem] border border-white/8 bg-black/18 p-5">
          <div className="flex items-center justify-between">
            <p className="mono-label">Shorts feed</p>
            <span className="mono-label">5 surfaces</span>
          </div>
          <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
            <div className="h-40 rounded-[1.2rem] bg-[radial-gradient(circle_at_30%_24%,rgba(245,158,11,0.36),transparent_20%),radial-gradient(circle_at_74%_32%,rgba(168,85,247,0.3),transparent_22%),linear-gradient(180deg,rgba(35,22,12,0.66),rgba(12,10,22,0.92))]" />
            <p className="mt-4 text-sm font-medium text-white">Discover stories behind every craft.</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Swipeable discovery built around artisan narratives, not static category pages.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Home", "Shorts", "Market", "Trends", "Account"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.14em] text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">AI detection output</p>
              <span className="text-xs uppercase tracking-[0.16em] text-amber-200">120+ classes</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Origin", "Rajasthan · block print"],
                ["Material", "Handwoven cotton"],
                ["Confidence", "94%"],
                ["Surface", "Marketplace listing"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[1.2rem] border border-white/8 bg-black/18 px-4 py-3 text-sm text-slate-200"
                >
                  <span>{label}</span>
                  <span className="text-slate-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-5">
            <p className="mono-label">Marketplace pulse</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Shorts feed", "Live listings", "Trend tracking"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.15rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function VeriDegreeVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-veridegree"
      chromeLabel="Credential verification protocol"
      rightLabel="Algorand mainnet"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[1.6rem] border border-white/8 bg-black/18 p-6">
          <div className="flex items-center justify-between">
            <p className="mono-label">Issued credential</p>
            <span className="mono-label">Protocol v2.0</span>
          </div>
          <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
            <p className="text-lg font-semibold tracking-[-0.04em] text-white">
              B.S. Computer Science
            </p>
            <p className="mt-2 text-sm text-slate-300">Issued as a non-transferable academic credential.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Soulbound asset", "Issuer signed", "Revocation status", "Proof ready"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.15rem] border border-white/8 bg-black/18 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">Verification flow</p>
              <span className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">
                private
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Issue", "Institution mints credential"],
                ["Hold", "Student keeps ownership"],
                ["Verify", "Verifier checks validity"],
                ["Trust", "State is on-chain"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[1.2rem] border border-white/8 bg-black/18 px-4 py-3 text-sm text-slate-200"
                >
                  <span>{label}</span>
                  <span className="text-slate-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Algorand", "Soulbound", "Zero-knowledge"].map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function MotionVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-motion"
      chromeLabel="Movement analysis pipeline"
      rightLabel="Pose → score → feedback"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(112,138,255,0.18),transparent_28%),radial-gradient(circle_at_76%_18%,rgba(114,216,210,0.14),transparent_24%)]" />
          <div className="absolute inset-x-8 top-8 flex items-center justify-between">
            <span className="mono-label">17 keypoints</span>
            <span className="mono-label">session frames</span>
          </div>
          <svg viewBox="0 0 300 320" className="relative z-10 mx-auto mt-12 h-[18rem] w-full max-w-[16rem]" fill="none">
            <circle cx="150" cy="42" r="22" fill="#c7d2fe" fillOpacity="0.72" />
            <path d="M150 66v82" stroke="#90a6ff" strokeLinecap="round" strokeWidth="6" />
            <path d="M150 92 92 126" stroke="#7bd6d0" strokeLinecap="round" strokeWidth="5" />
            <path d="M92 126 76 176" stroke="#d2daff" strokeLinecap="round" strokeWidth="4" />
            <path d="M150 92 208 126" stroke="#7bd6d0" strokeLinecap="round" strokeWidth="5" />
            <path d="M208 126 224 176" stroke="#d2daff" strokeLinecap="round" strokeWidth="4" />
            <path d="M150 148 116 218" stroke="#90a6ff" strokeLinecap="round" strokeWidth="5" />
            <path d="M116 218 102 276" stroke="#d2daff" strokeLinecap="round" strokeWidth="4" />
            <path d="M150 148 184 218" stroke="#90a6ff" strokeLinecap="round" strokeWidth="5" />
            <path d="M184 218 198 276" stroke="#d2daff" strokeLinecap="round" strokeWidth="4" />
            <circle cx="92" cy="126" r="10" fill="#a5b4fc" />
            <circle cx="208" cy="126" r="10" fill="#67e8f9" />
            <circle cx="116" cy="218" r="9" fill="#a5b4fc" />
            <circle cx="184" cy="218" r="9" fill="#67e8f9" />
          </svg>
          <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-3">
            {["Pose extraction", "Angle logic", "Coaching output"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-black/18 px-3 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/8 bg-black/18 p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">Readable output</p>
              <span className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">structured</span>
            </div>
            <div className="mt-4 space-y-4">
              {[
                ["Squat depth", "82"],
                ["Hip alignment", "77"],
                ["Tempo control", "88"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/8">
                    <div
                      className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(144,166,255,0.94),rgba(114,216,210,0.88))]"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5">
            <p className="mono-label">Coaching note</p>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Good stability through descent. Hip drive is consistent. Knee travel is slightly
              early, but still within the target band for controlled reps.
            </p>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function CervicalVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-cervical"
      chromeLabel="Medical image classification"
      rightLabel="5-class pipeline"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid grid-cols-2 gap-4">
          {[
            "project-visual-cell-a",
            "project-visual-cell-b",
            "project-visual-cell-c",
            "project-visual-cell-d",
          ].map((className, index) => (
            <div key={className} className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-4">
              <div className={`h-full min-h-[9.8rem] rounded-[1.15rem] border border-white/8 ${className}`} />
              <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                <span className="mono-label">Sample {index + 1}</span>
                <span>Augmented</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/8 bg-black/18 p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">Class confidence</p>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-300">eval run</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Superficial-intermediate", "91%"],
                ["Parabasal", "82%"],
                ["Koilocytotic", "76%"],
                ["Metaplastic", "88%"],
                ["Dyskeratotic", "79%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/8">
                    <div
                      className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(250,204,21,0.84),rgba(147,197,253,0.88))]"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Preprocess", "Transfer train", "Evaluate"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function FlashloanVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-flashloan"
      chromeLabel="Route-scanning system"
      rightLabel="EVM opportunity monitor"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.6rem] border border-white/8 bg-black/22 p-6">
          <div className="flex items-center justify-between">
            <p className="mono-label">Execution path</p>
            <span className="mono-label">scan window 240ms</span>
          </div>
          <div className="relative mt-6 h-[16.5rem] overflow-hidden rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
            <div className="absolute left-[12%] top-[18%] token-node bg-amber-200 text-black">WETH</div>
            <div className="absolute left-[41%] top-[42%] token-node bg-violet-200 text-black">USDC</div>
            <div className="absolute right-[12%] top-[20%] token-node bg-cyan-200 text-black">ARB</div>
            <div className="absolute left-[24%] bottom-[16%] token-node bg-slate-200 text-black">WBTC</div>
            <div className="absolute right-[18%] bottom-[14%] token-node bg-emerald-200 text-black">DAI</div>
            <div className="route-line left-[19%] top-[30%] w-[24%] rotate-[18deg]" />
            <div className="route-line left-[50%] top-[34%] w-[20%] -rotate-[16deg]" />
            <div className="route-line left-[31%] top-[58%] w-[18%] -rotate-[22deg]" />
            <div className="route-line left-[48%] top-[60%] w-[22%] rotate-[18deg]" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">Route decisions</p>
              <span className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">guarded</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Pair discovery", "13,240 checked"],
                ["Spread threshold", "pass"],
                ["Gas + slippage", "guarded"],
                ["Execution route", "DEX A → B → C"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm text-slate-200">
                  <span>{label}</span>
                  <span className="text-slate-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-5">
            <p className="mono-label">Automation logic</p>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Route discovery, validation, and execution checks are separated so the system can
              scan aggressively without turning the execution path into guesswork.
            </p>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  switch (project.visual) {
    case "resilient":
      return <ResilientVisual />;
    case "kala":
      return <KalaVisual />;
    case "veridegree":
      return <VeriDegreeVisual />;
    case "motion":
      return <MotionVisual />;
    case "cervical":
      return <CervicalVisual />;
    case "flashloan":
      return <FlashloanVisual />;
    default:
      return null;
  }
}
