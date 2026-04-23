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

function AuraVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-aura"
      chromeLabel="Launch-ready brand site"
      rightLabel="Presentation + conversion"
    >
      <div className="grid min-h-[26rem] gap-4 px-5 py-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
          <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,28,0.64),rgba(8,12,20,0.82))] p-5">
            <div>
              <p className="mono-label">Landing view</p>
              <div className="mt-4 h-3 w-24 rounded-full bg-white/25" />
              <div className="mt-4 h-16 w-[78%] rounded-[1.3rem] bg-white/10" />
              <div className="mt-4 h-3 w-[58%] rounded-full bg-white/20" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="h-28 rounded-[1.2rem] bg-white/[0.08]" />
              <div className="h-28 rounded-[1.2rem] bg-white/[0.08]" />
              <div className="h-20 rounded-[1.2rem] bg-white/[0.08] sm:col-span-2" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            "Clear story and brand framing",
            "Launch-focused conversion flow",
            "Polished front-end surface for a live public site",
          ].map((item) => (
            <div key={item} className="rounded-[1.45rem] border border-white/8 bg-white/[0.04] px-5 py-5 text-sm leading-7 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  switch (project.visual) {
    case "motion":
      return <MotionVisual />;
    case "cervical":
      return <CervicalVisual />;
    case "flashloan":
      return <FlashloanVisual />;
    case "aura":
      return <AuraVisual />;
    default:
      return null;
  }
}
