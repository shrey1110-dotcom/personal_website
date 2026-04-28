"use client";

import type { ReactNode } from "react";
import LiveDemoWindow from "@/components/home/LiveDemoWindow";
import TiltPanel from "@/components/home/TiltPanel";
import type { ProjectEntry } from "@/lib/portfolio-content";

type ProjectVisualProps = {
  compact?: boolean;
  project: ProjectEntry;
};

function VisualShell({
  accentClassName,
  children,
  chromeLabel,
  compact = false,
  rightLabel,
}: {
  accentClassName: string;
  children: ReactNode;
  chromeLabel: string;
  compact?: boolean;
  rightLabel: string;
}) {
  return (
    <TiltPanel
      className={`project-visual ${compact ? "project-visual-compact" : ""} ${accentClassName}`}
      intensity={compact ? 4.2 : 5.8}
      lift={compact ? 3.5 : 5}
    >
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
      chromeLabel="Form scoring demo"
      compact
      rightLabel="Pose → feedback"
    >
      <div className="grid min-h-[15rem] gap-4 px-5 py-5">
        <div className="grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_24%,rgba(112,138,255,0.16),transparent_28%),radial-gradient(circle_at_74%_18%,rgba(114,216,210,0.14),transparent_24%)]" />
            <svg
              viewBox="0 0 220 240"
              className="relative z-10 mx-auto h-[11rem] w-full max-w-[10rem]"
              fill="none"
            >
              <circle cx="110" cy="28" r="16" fill="#c7d2fe" fillOpacity="0.72" />
              <path d="M110 44v58" stroke="#90a6ff" strokeLinecap="round" strokeWidth="5" />
              <path d="M110 62 66 86" stroke="#7bd6d0" strokeLinecap="round" strokeWidth="4" />
              <path d="M66 86 54 122" stroke="#d2daff" strokeLinecap="round" strokeWidth="3.5" />
              <path d="M110 62 154 86" stroke="#7bd6d0" strokeLinecap="round" strokeWidth="4" />
              <path d="M154 86 166 122" stroke="#d2daff" strokeLinecap="round" strokeWidth="3.5" />
              <path d="M110 102 84 154" stroke="#90a6ff" strokeLinecap="round" strokeWidth="4" />
              <path d="M84 154 72 198" stroke="#d2daff" strokeLinecap="round" strokeWidth="3.5" />
              <path d="M110 102 136 154" stroke="#90a6ff" strokeLinecap="round" strokeWidth="4" />
              <path d="M136 154 148 198" stroke="#d2daff" strokeLinecap="round" strokeWidth="3.5" />
            </svg>
          </div>

          <div className="rounded-[1.35rem] border border-white/8 bg-black/18 p-5">
            <div className="flex items-center justify-between">
              <p className="mono-label">Coaching output</p>
              <span className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">
                live score
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Depth", "82"],
                ["Alignment", "77"],
                ["Tempo", "88"],
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
        </div>
      </div>
    </VisualShell>
  );
}

function CervicalVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-cervical"
      chromeLabel="Classifier review"
      compact
      rightLabel="5 classes"
    >
      <div className="grid min-h-[15rem] gap-4 px-5 py-5">
        <div className="grid grid-cols-2 gap-3">
          {[
            "project-visual-cell-a",
            "project-visual-cell-b",
            "project-visual-cell-c",
            "project-visual-cell-d",
          ].map((className, index) => (
            <div
              key={className}
              className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-3"
            >
              <div
                className={`h-[5.3rem] rounded-[0.9rem] border border-white/8 ${className}`}
              />
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-300">
                <span>Sample {index + 1}</span>
                <span>Ready</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[1.35rem] border border-white/8 bg-black/18 p-5">
          <div className="flex items-center justify-between">
            <p className="mono-label">Model output</p>
            <span className="text-xs uppercase tracking-[0.16em] text-slate-300">eval run</span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              ["Superficial", "91%"],
              ["Parabasal", "82%"],
              ["Metaplastic", "88%"],
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
      </div>
    </VisualShell>
  );
}

function FlashloanVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-flashloan"
      chromeLabel="Route monitor"
      compact
      rightLabel="scan window 240ms"
    >
      <div className="grid min-h-[15rem] gap-4 px-5 py-5">
        <div className="relative h-[9rem] overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
          <div className="absolute left-[10%] top-[16%] token-node bg-amber-200 text-black">WETH</div>
          <div className="absolute left-[42%] top-[38%] token-node bg-violet-200 text-black">USDC</div>
          <div className="absolute right-[12%] top-[18%] token-node bg-cyan-200 text-black">ARB</div>
          <div className="absolute left-[24%] bottom-[14%] token-node bg-slate-200 text-black">WBTC</div>
          <div className="absolute right-[18%] bottom-[12%] token-node bg-emerald-200 text-black">DAI</div>
          <div className="route-line left-[18%] top-[28%] w-[24%] rotate-[18deg]" />
          <div className="route-line left-[50%] top-[32%] w-[18%] -rotate-[16deg]" />
          <div className="route-line left-[30%] top-[58%] w-[18%] -rotate-[22deg]" />
          <div className="route-line left-[48%] top-[58%] w-[20%] rotate-[18deg]" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Pairs checked", "13,240+"],
            ["Spread filter", "pass"],
            ["Slippage guard", "on"],
            ["Route", "DEX A → B → C"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[1.05rem] border border-white/8 bg-black/18 px-4 py-3 text-sm text-slate-200"
            >
              <span>{label}</span>
              <span className="text-slate-300">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

export default function ProjectVisual({ compact = false, project }: ProjectVisualProps) {
  if (!compact && project.embedHref && project.browserLabel && project.browserMeta) {
    return (
      <LiveDemoWindow
        accentClassName={`live-demo-feature live-demo-${project.visual}`}
        chromeLabel={project.browserLabel}
        src={project.embedHref}
        title={`${project.name} live demo`}
        urlLabel={project.browserMeta}
      />
    );
  }

  switch (project.visual) {
    case "motion":
      return <MotionVisual />;
    case "cervical":
      return <CervicalVisual />;
    case "flashloan":
      return <FlashloanVisual />;
    default:
      return (
        <VisualShell accentClassName="project-visual-fallback" compact={compact} chromeLabel="Product surface" rightLabel="Preview">
          <div className="flex min-h-[15rem] items-center justify-center px-5 py-5 text-sm text-slate-300">
            Preview unavailable
          </div>
        </VisualShell>
      );
  }
}
