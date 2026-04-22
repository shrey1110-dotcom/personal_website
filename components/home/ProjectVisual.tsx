"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/site";
import type { ProjectEntry } from "@/lib/portfolio-content";

type ProjectVisualProps = {
  project: ProjectEntry;
};

function Shell({
  accentClassName,
  children,
}: {
  accentClassName: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={`project-visual ${accentClassName}`}
    >
      {children}
    </motion.div>
  );
}

function RetainVisual() {
  return (
    <Shell accentClassName="project-visual-retain">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/85" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/85" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-300/85" />
        <span className="ml-2">Retain AI operator workflow</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={withBasePath("/retain-screenshot.png")}
          alt="Retain AI dashboard screenshot"
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </Shell>
  );
}

function MotionVisual() {
  return (
    <Shell accentClassName="project-visual-motion">
      <div className="flex items-center justify-between px-6 py-5 text-xs text-slate-400">
        <span className="mono-label">Keypoints</span>
        <span className="mono-label">Scoring</span>
        <span className="mono-label">Feedback</span>
      </div>
      <div className="relative flex min-h-[22rem] items-center justify-center px-8 pb-8 pt-2">
        <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300/45 to-transparent" />
        <div className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-sky-300/90 shadow-[0_0_16px_rgba(125,211,252,0.45)]" />
        <div className="absolute left-[29%] top-[42%] h-2.5 w-2.5 rounded-full bg-indigo-300/85" />
        <div className="absolute left-[42%] top-[34%] h-3 w-3 rounded-full bg-violet-300/90" />
        <div className="absolute left-[55%] top-[54%] h-2.5 w-2.5 rounded-full bg-cyan-300/85" />
        <div className="absolute left-[68%] top-[31%] h-3 w-3 rounded-full bg-sky-200/90" />
        <div className="absolute left-[21%] top-[44%] h-16 w-px rotate-[34deg] bg-indigo-200/35" />
        <div className="absolute left-[37%] top-[40%] h-20 w-px -rotate-[42deg] bg-violet-200/30" />
        <div className="absolute left-[58%] top-[36%] h-24 w-px rotate-[28deg] bg-cyan-200/30" />
        <div className="relative grid w-full gap-4 md:grid-cols-3">
          {["Pose extraction", "Movement scoring", "Readable output"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function CervicalVisual() {
  return (
    <Shell accentClassName="project-visual-cervical">
      <div className="flex items-center justify-between px-6 py-5 text-xs text-slate-400">
        <span className="mono-label">Medical image workflow</span>
        <span className="mono-label">5 classes</span>
      </div>
      <div className="grid min-h-[22rem] grid-cols-2 gap-4 px-6 pb-6">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="rounded-[1.4rem] border border-white/8 bg-white/[0.035] p-4"
          >
            <div className="h-full rounded-[1.05rem] border border-white/6 bg-[radial-gradient(circle_at_35%_30%,rgba(248,113,113,0.22),transparent_35%),radial-gradient(circle_at_60%_65%,rgba(96,165,250,0.16),transparent_40%),radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
          </div>
        ))}
      </div>
    </Shell>
  );
}

function FlashloanVisual() {
  return (
    <Shell accentClassName="project-visual-flashloan">
      <div className="flex items-center justify-between px-6 py-5 text-xs text-slate-400">
        <span className="mono-label">Route scanning</span>
        <span className="mono-label">Execution timing</span>
      </div>
      <div className="grid min-h-[22rem] gap-4 px-6 pb-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-5">
          <div className="relative h-full overflow-hidden rounded-[1rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
            <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.38)]" />
            <div className="absolute left-[46%] top-[46%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.36)]" />
            <div className="absolute left-[74%] top-[28%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.36)]" />
            <div className="absolute left-[30%] top-[34%] h-px w-[18%] rotate-[18deg] bg-white/25" />
            <div className="absolute left-[53%] top-[38%] h-px w-[17%] -rotate-[24deg] bg-white/25" />
            <div className="absolute left-[32%] top-[58%] h-px w-[20%] rotate-[12deg] bg-white/15" />
          </div>
        </div>
        <div className="space-y-3">
          {["Pair discovery", "Route evaluation", "Execution guards"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function AuraVisual() {
  return (
    <Shell accentClassName="project-visual-aura">
      <div className="flex items-center justify-between px-6 py-5 text-xs text-slate-400">
        <span className="mono-label">Brand site launch</span>
        <span className="mono-label">Story + conversion</span>
      </div>
      <div className="grid min-h-[22rem] gap-4 px-6 pb-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
          <div className="flex h-full flex-col justify-between rounded-[1rem] border border-white/6 bg-black/10 p-5">
            <div className="space-y-3">
              <div className="h-3 w-24 rounded-full bg-white/30" />
              <div className="h-12 w-[78%] rounded-2xl bg-white/10" />
              <div className="h-3 w-[58%] rounded-full bg-white/20" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-14 rounded-2xl bg-white/8" />
              <div className="h-14 rounded-2xl bg-white/8" />
              <div className="h-14 rounded-2xl bg-white/8" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {["Brand clarity", "Conversion flow", "Launch-ready UI"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  switch (project.visual) {
    case "retain":
      return <RetainVisual />;
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
