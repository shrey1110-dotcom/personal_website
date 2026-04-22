"use client";

import { motion } from "framer-motion";
import type { SkillGroupEntry } from "@/lib/portfolio-content";

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
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M8 6 3 12l5 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="m16 6 5 6-5 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="m13 4-2 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        </svg>
      );
    case "frontend":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="12.5" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="6.6" cy="7.1" r=".8" fill="currentColor" />
          <circle cx="9.3" cy="7.1" r=".8" fill="currentColor" />
          <path d="M9 20h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 6.5V12c0 1.55 2.9 2.8 6.5 2.8s6.5-1.25 6.5-2.8V6.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 12v5.4c0 1.55 2.9 2.8 6.5 2.8s6.5-1.25 6.5-2.8V12" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "ml":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="18" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="18" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7.8 7.2 10.4 15" stroke="currentColor" strokeWidth="1.7" />
          <path d="M16.2 8.2 13.5 15.1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 6.5h7.8" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M13.8 4.5a4.5 4.5 0 0 0 4.7 5.9l-7.8 7.8a2.1 2.1 0 1 1-3-3l7.8-7.8a4.5 4.5 0 0 0-5.9-4.7L12 5l1.8-.5Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SkillTile({
  icon,
  label,
}: {
  icon: SkillGroupEntry["icon"];
  label: string;
}) {
  return (
    <div className="skill-tile">
      <div className={`skill-tile-icon ${accentClass(icon)}`}>
        <GroupIcon type={icon} />
      </div>
      <span className="text-sm font-medium text-slate-100">{label}</span>
    </div>
  );
}

type SkillMatrixProps = {
  groups: readonly SkillGroupEntry[];
};

export default function SkillMatrix({ groups }: SkillMatrixProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => (
        <motion.section
          key={group.label}
          initial={{ opacity: 0.95, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
          className="skill-group-card"
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
              <SkillTile key={`${group.label}-${item}`} icon={group.icon} label={item} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
