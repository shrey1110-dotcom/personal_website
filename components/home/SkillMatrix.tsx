"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  SiClerk,
  SiCloudflare,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGithub,
  SiGo,
  SiGooglegemini,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTwilio,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBinaryTree2, TbBracketsAngle, TbCpu2, TbStack2, TbWorldWww } from "react-icons/tb";
import type { SkillGroupEntry } from "@/lib/portfolio-content";

type SkillTone = {
  color: string;
  glow: string;
  icon: IconType;
  surface: string;
};

const revealEase = [0.22, 1, 0.36, 1] as const;

function accentClass(type: SkillGroupEntry["icon"]) {
  switch (type) {
    case "languages":
      return "skill-accent-languages";
    case "frontend":
      return "skill-accent-frontend";
    case "backend":
      return "skill-accent-backend";
    case "ml":
      return "skill-accent-ml";
    case "tools":
      return "skill-accent-tools";
    default:
      return "";
  }
}

function GroupIcon({ type }: { type: SkillGroupEntry["icon"] }) {
  const className = "h-5 w-5";

  switch (type) {
    case "languages":
      return <TbBracketsAngle className={className} aria-hidden="true" />;
    case "frontend":
      return <TbWorldWww className={className} aria-hidden="true" />;
    case "backend":
      return <TbStack2 className={className} aria-hidden="true" />;
    case "ml":
      return <TbCpu2 className={className} aria-hidden="true" />;
    case "tools":
      return <TbBinaryTree2 className={className} aria-hidden="true" />;
    default:
      return null;
  }
}

const skillTones: Record<string, SkillTone> = {
  TypeScript: {
    icon: SiTypescript,
    color: "#3b82f6",
    surface: "rgba(59,130,246,0.16)",
    glow: "rgba(59,130,246,0.24)",
  },
  Python: {
    icon: SiPython,
    color: "#facc15",
    surface: "rgba(59,130,246,0.14)",
    glow: "rgba(250,204,21,0.2)",
  },
  SQL: {
    icon: SiMysql,
    color: "#67e8f9",
    surface: "rgba(103,232,249,0.12)",
    glow: "rgba(103,232,249,0.18)",
  },
  Go: {
    icon: SiGo,
    color: "#22d3ee",
    surface: "rgba(34,211,238,0.14)",
    glow: "rgba(34,211,238,0.2)",
  },
  "C/C++": {
    icon: SiCplusplus,
    color: "#a78bfa",
    surface: "rgba(167,139,250,0.16)",
    glow: "rgba(167,139,250,0.22)",
  },
  React: {
    icon: SiReact,
    color: "#67e8f9",
    surface: "rgba(103,232,249,0.14)",
    glow: "rgba(103,232,249,0.18)",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#f8fafc",
    surface: "rgba(248,250,252,0.12)",
    glow: "rgba(248,250,252,0.16)",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#22d3ee",
    surface: "rgba(34,211,238,0.14)",
    glow: "rgba(34,211,238,0.2)",
  },
  "Framer Motion": {
    icon: SiFramer,
    color: "#9f7aea",
    surface: "rgba(159,122,234,0.16)",
    glow: "rgba(159,122,234,0.22)",
  },
  "HTML/CSS": {
    icon: SiHtml5,
    color: "#fb7185",
    surface: "rgba(251,113,133,0.16)",
    glow: "rgba(251,113,133,0.22)",
  },
  "Node.js": {
    icon: SiNodedotjs,
    color: "#4ade80",
    surface: "rgba(74,222,128,0.16)",
    glow: "rgba(74,222,128,0.2)",
  },
  FastAPI: {
    icon: SiFastapi,
    color: "#2dd4bf",
    surface: "rgba(45,212,191,0.16)",
    glow: "rgba(45,212,191,0.22)",
  },
  Express: {
    icon: SiExpress,
    color: "#cbd5e1",
    surface: "rgba(203,213,225,0.12)",
    glow: "rgba(203,213,225,0.16)",
  },
  PostgreSQL: {
    icon: SiPostgresql,
    color: "#60a5fa",
    surface: "rgba(96,165,250,0.16)",
    glow: "rgba(96,165,250,0.22)",
  },
  Supabase: {
    icon: SiSupabase,
    color: "#34d399",
    surface: "rgba(52,211,153,0.16)",
    glow: "rgba(52,211,153,0.2)",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "#4ade80",
    surface: "rgba(74,222,128,0.14)",
    glow: "rgba(74,222,128,0.18)",
  },
  TensorFlow: {
    icon: SiTensorflow,
    color: "#fb923c",
    surface: "rgba(251,146,60,0.16)",
    glow: "rgba(251,146,60,0.22)",
  },
  "scikit-learn": {
    icon: SiScikitlearn,
    color: "#38bdf8",
    surface: "rgba(56,189,248,0.16)",
    glow: "rgba(56,189,248,0.2)",
  },
  Docker: {
    icon: SiDocker,
    color: "#60a5fa",
    surface: "rgba(96,165,250,0.16)",
    glow: "rgba(96,165,250,0.22)",
  },
  AWS: {
    icon: FaAws,
    color: "#f59e0b",
    surface: "rgba(245,158,11,0.16)",
    glow: "rgba(245,158,11,0.22)",
  },
  Gemini: {
    icon: SiGooglegemini,
    color: "#a78bfa",
    surface: "rgba(167,139,250,0.16)",
    glow: "rgba(167,139,250,0.22)",
  },
  Twilio: {
    icon: SiTwilio,
    color: "#fb7185",
    surface: "rgba(251,113,133,0.16)",
    glow: "rgba(251,113,133,0.22)",
  },
  Vercel: {
    icon: SiVercel,
    color: "#f8fafc",
    surface: "rgba(248,250,252,0.12)",
    glow: "rgba(248,250,252,0.16)",
  },
  GitHub: {
    icon: SiGithub,
    color: "#e2e8f0",
    surface: "rgba(226,232,240,0.12)",
    glow: "rgba(226,232,240,0.16)",
  },
  Stripe: {
    icon: SiStripe,
    color: "#a78bfa",
    surface: "rgba(167,139,250,0.16)",
    glow: "rgba(167,139,250,0.22)",
  },
  Clerk: {
    icon: SiClerk,
    color: "#c4b5fd",
    surface: "rgba(196,181,253,0.16)",
    glow: "rgba(196,181,253,0.22)",
  },
  "REST APIs": {
    icon: TbApi,
    color: "#67e8f9",
    surface: "rgba(103,232,249,0.12)",
    glow: "rgba(103,232,249,0.18)",
  },
  "Cloudflare Workers": {
    icon: SiCloudflare,
    color: "#fb923c",
    surface: "rgba(251,146,60,0.16)",
    glow: "rgba(251,146,60,0.22)",
  },
};

function SkillTile({
  icon: groupIcon,
  item,
}: {
  icon: SkillGroupEntry["icon"];
  item: string;
}) {
  const tone = skillTones[item];
  const Icon = tone?.icon ?? TbApi;
  const tileStyle = tone
    ? ({
        "--skill-icon-color": tone.color,
        "--skill-icon-surface": tone.surface,
        "--skill-icon-glow": tone.glow,
        "--skill-tile-tint": tone.surface,
      } as CSSProperties)
    : undefined;

  return (
    <div className="skill-tech-tile" data-cursor="interactive" style={tileStyle}>
      <div className={`skill-tech-icon ${accentClass(groupIcon)}`}>
        <Icon className="h-[1.48rem] w-[1.48rem]" aria-hidden="true" />
      </div>
      <span className="text-[0.97rem] font-medium tracking-[-0.02em] text-slate-100">{item}</span>
    </div>
  );
}

type SkillMatrixProps = {
  groups: readonly SkillGroupEntry[];
};

export default function SkillMatrix({ groups }: SkillMatrixProps) {
  return (
    <motion.div
      initial={{ opacity: 0.74, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.76, ease: revealEase }}
    >
      <div className="skill-palette-panel">
        <div className="skill-palette-header">
          <div className="max-w-[42rem]">
            <p className="section-label">Working palette</p>
            <p className="mt-4 text-lg font-medium tracking-[-0.035em] text-white md:text-[1.45rem]">
              One surface, split by function. Languages, frameworks, infra, and platforms that
              repeatedly show up in shipped work.
            </p>
          </div>
          <div className="skill-palette-summary">
            <span>Interface</span>
            <span>Services</span>
            <span>Data</span>
            <span>ML</span>
            <span>Deployment</span>
          </div>
        </div>

        <div className="skill-palette-grid">
          {groups.map((group, index) => (
            <motion.section
              key={group.label}
              initial={{ opacity: 0.72, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.06,
                duration: 0.62,
                ease: revealEase,
              }}
              className="skill-group-segment"
            >
              <div className="flex items-start gap-4">
                <div className={`skill-group-icon ${accentClass(group.icon)}`}>
                  <GroupIcon type={group.icon} />
                </div>
                <div>
                  <p className="section-label">{group.label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{group.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {group.items.map((item) => (
                  <SkillTile key={`${group.label}-${item}`} icon={group.icon} item={item} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
