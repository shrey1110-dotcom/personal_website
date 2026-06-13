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

function ScopeKitVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-scopekit"
      chromeLabel="ScopeKit run"
      rightLabel="local CLI"
    >
      <div className="grid min-h-[32rem] grid-rows-[auto_1fr_auto] gap-4 px-5 py-5">
        <div className="grid gap-3 rounded-[1.35rem] border border-emerald-300/15 bg-[#07120f] p-4 font-mono text-[0.76rem] leading-6 text-[#9be7c4] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <p>
            <span className="text-[#d4a017]">$</span> scopekit pack &quot;trace auth/session
            impact&quot;
          </p>
          <p className="text-slate-500">indexed ./src ./app ./tests</p>
          <p className="text-slate-500">resolved imports, symbols, risks, commands</p>
          <p className="text-emerald-200">wrote .scopekit/context-pack.md</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Files", "8 selected"],
            ["Symbols", "call graph included"],
            ["Tests", "commands attached"],
            ["Routing", "No LLM routing"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.05rem] border border-white/8 bg-black/18 px-4 py-3"
            >
              <p className="mono-label">{label}</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.35rem] border border-[#d4a017]/20 bg-[#d4a017]/8 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-medium text-[#f7dfa1]">Agent receives a bounded pack.</p>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#d4a017]">
              ~1,280x smaller context target
            </p>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function ResilientVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-resilient"
      chromeLabel="Aid workflow"
      rightLabel="donor -> vendor"
    >
      <div className="grid min-h-[32rem] grid-rows-[auto_1fr_auto] gap-4 px-5 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.35rem] border border-white/8 bg-black/20 px-4 py-3">
          <div>
            <p className="text-lg font-semibold tracking-[-0.04em] text-white">ResilientAid</p>
            <p className="text-xs text-slate-400">Aid that actually reaches people.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Admin", "Donor", "Beneficiary", "Vendor"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-300/12 bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.45rem] border border-white/8 bg-[radial-gradient(circle_at_45%_42%,rgba(45,212,191,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-5">
          <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-200/42 to-transparent" />
          <div className="relative grid h-full grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["Donor wallet", "$2,500 locked", "connect"],
              ["Smart contract", "0% platform fee", "settle"],
              ["Beneficiary", "credits issued", "receive"],
              ["Vendor POS", "<2s redeem", "close"],
            ].map(([title, detail, status]) => (
              <div
                key={title}
                className="flex min-h-[11rem] flex-col justify-between rounded-[1.25rem] border border-white/8 bg-black/32 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.48)]" />
                <div>
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{detail}</p>
                </div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-cyan-200">
                  {status}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Network", "425 tx/s"],
            ["Settlement", "<2s"],
            ["Chain", "Polygon Amoy"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1rem] border border-white/8 bg-black/20 px-4 py-3">
              <p className="mono-label">{label}</p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

function KalaVisual() {
  return (
    <VisualShell
      accentClassName="project-visual-kala"
      chromeLabel="Marketplace demo"
      rightLabel="AI origin scan"
    >
      <div className="grid min-h-[32rem] gap-4 px-5 py-5 lg:grid-cols-[0.74fr_1fr]">
        <div className="flex flex-col rounded-[1.55rem] border border-amber-200/15 bg-black/26 p-4">
          <div className="rounded-[1.15rem] border border-white/8 bg-[linear-gradient(145deg,rgba(250,204,21,0.18),rgba(168,85,247,0.12)),rgba(255,255,255,0.035)] p-4">
            <p className="text-xl font-semibold tracking-[-0.04em] text-amber-100">KalaAI</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              artisan commerce
            </p>
          </div>
          <div className="mt-4 grid flex-1 gap-3">
            {["Home", "Shorts", "Market", "Trends", "Account"].map((item, index) => (
              <div
                key={item}
                className={`flex items-center justify-between rounded-[1rem] border px-3 py-3 text-sm ${
                  index === 1
                    ? "border-amber-200/24 bg-amber-200/10 text-amber-100"
                    : "border-white/8 bg-white/[0.035] text-slate-300"
                }`}
              >
                <span>{item}</span>
                <span className="text-xs text-slate-500">{index === 1 ? "live" : "view"}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.55rem] border border-white/8 bg-black/24 p-5">
            <p className="mono-label">Product image scan</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-[0.86fr_1fr]">
              <div className="rounded-[1.2rem] border border-white/8 bg-[radial-gradient(circle_at_44%_38%,rgba(250,204,21,0.34),transparent_28%),radial-gradient(circle_at_62%_66%,rgba(168,85,247,0.2),transparent_32%),rgba(255,255,255,0.035)] p-4">
                <div className="h-32 rounded-[1rem] border border-white/10 bg-black/24" />
              </div>
              <div className="space-y-3">
                {[
                  ["Likely origin", "Rajasthan textile craft"],
                  ["Category match", "Handwoven decor"],
                  ["Confidence", "87%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3">
                    <p className="mono-label">{label}</p>
                    <p className="mt-2 text-sm font-medium text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["120+", "craft categories"],
              ["5", "product surfaces"],
              ["Live", "Vercel deploy"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1rem] border border-white/8 bg-black/20 px-4 py-3">
                <p className="text-lg font-semibold tracking-[-0.04em] text-white">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-400">{label}</p>
              </div>
            ))}
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
      chromeLabel="Verification flow"
      rightLabel="mainnet status"
    >
      <div className="grid min-h-[32rem] grid-rows-[auto_1fr_auto] gap-4 px-5 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.35rem] border border-white/8 bg-black/24 px-4 py-3">
          <div>
            <p className="text-lg font-semibold tracking-[0.06em] text-white">VERIDEGREE</p>
            <p className="text-xs text-slate-400">School-issued records, employer verification.</p>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-200">
            verified
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.88fr]">
          <div className="rounded-[1.45rem] border border-yellow-200/18 bg-[radial-gradient(circle_at_18%_18%,rgba(250,204,21,0.16),transparent_28%),rgba(255,255,255,0.035)] p-5">
            <p className="mono-label">Credential packet</p>
            <div className="mt-5 rounded-[1.2rem] border border-yellow-200/16 bg-black/32 p-5">
              <p className="text-2xl font-semibold tracking-[-0.05em] text-yellow-100">
                B.S. Computer Science
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  ["Issuer", "University registrar"],
                  ["Record type", "Soulbound credential"],
                  ["Disclosure", "Private fields hidden"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-[0.9rem] border border-white/8 bg-white/[0.035] px-3 py-2.5 text-sm">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-right font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {[
              ["Chain", "Algorand mainnet"],
              ["Employer check", "Instant status"],
              ["Fraud path", "No PDF forwarding"],
              ["Privacy", "Selective disclosure"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1rem] border border-white/8 bg-black/24 px-4 py-3">
                <p className="mono-label">{label}</p>
                <p className="mt-2 text-sm font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.2rem] border border-white/8 bg-black/24 px-4 py-3 font-mono text-xs text-slate-300">
          tx: ALGO-mainnet / issuer-signature / credential-status: active
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
        src={project.embedHref ?? project.href}
        title={`${project.name} live product preview`}
        urlLabel={project.browserMeta}
      />
    );
  }

  switch (project.visual) {
    case "scopekit":
      return <ScopeKitVisual />;
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
      return (
        <VisualShell accentClassName="project-visual-fallback" compact={compact} chromeLabel="Product surface" rightLabel="Preview">
          <div className="flex min-h-[15rem] items-center justify-center px-5 py-5 text-sm text-slate-300">
            Preview unavailable
          </div>
        </VisualShell>
      );
  }
}
