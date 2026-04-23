"use client";

import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { motion } from "framer-motion";
import { RiShieldKeyholeLine } from "react-icons/ri";
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
import TiltPanel from "@/components/home/TiltPanel";
import type { SkillGroupEntry } from "@/lib/portfolio-content";

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

const skillIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  Python: SiPython,
  SQL: SiMysql,
  Go: SiGo,
  "C/C++": SiCplusplus,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML/CSS": SiHtml5,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  TensorFlow: SiTensorflow,
  "scikit-learn": SiScikitlearn,
  Docker: SiDocker,
  AWS: FaAws,
  Gemini: SiGooglegemini,
  Twilio: SiTwilio,
  Vercel: SiVercel,
  GitHub: SiGithub,
  Stripe: SiStripe,
  Clerk: SiClerk,
  "REST APIs": TbApi,
  "Cloudflare Workers": SiCloudflare,
};

function SkillTile({
  icon: GroupType,
  item,
}: {
  icon: SkillGroupEntry["icon"];
  item: string;
}) {
  const Icon = skillIcons[item] ?? TbApi;

  return (
    <div className="skill-tech-tile" data-cursor="interactive">
      <div className={`skill-tech-icon ${accentClass(GroupType)}`}>
        <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
      </div>
      <span className="text-sm font-medium tracking-[-0.02em] text-slate-100">{item}</span>
    </div>
  );
}

type SkillMatrixProps = {
  groups: readonly SkillGroupEntry[];
};

export default function SkillMatrix({ groups }: SkillMatrixProps) {
  return (
    <motion.div
      initial={{ opacity: 0.68, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, ease: revealEase }}
    >
      <TiltPanel className="skill-palette-panel" intensity={5.5} lift={4}>
        <div className="skill-palette-header">
          <div className="max-w-[38rem]">
            <p className="section-label">Working palette</p>
            <p className="mt-4 text-lg font-medium tracking-[-0.035em] text-white md:text-[1.45rem]">
              One surface for the stack I use most when building and shipping full products.
            </p>
          </div>
          <div className="skill-palette-summary">
            <span>Web products</span>
            <span>APIs</span>
            <span>Databases</span>
            <span>ML tooling</span>
            <span>Deployment</span>
          </div>
        </div>

        <div className="skill-palette-grid">
          {groups.map((group, index) => (
            <motion.section
              key={group.label}
              initial={{ opacity: 0.7, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.05,
                duration: 0.58,
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

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <SkillTile key={`${group.label}-${item}`} icon={group.icon} item={item} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <div className="skill-palette-footer">
          <div className="skill-palette-note">
            <span className="mono-label">Stack characteristic</span>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The common thread is end-to-end delivery: interface work, operating logic, external
              integrations, data storage, and deployment in the same workflow.
            </p>
          </div>
          <div className="skill-palette-note">
            <span className="mono-label">Tooling posture</span>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              I default to practical tools that shorten the gap between prototype and real product
              behavior.
            </p>
          </div>
          <div className="skill-palette-note">
            <span className="mono-label">Working style</span>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Build the product surface, wire the behavior behind it, and make the system hold up
              once people start using it.
            </p>
          </div>
        </div>
      </TiltPanel>
    </motion.div>
  );
}
