"use client";

import { motion } from "framer-motion";
import type { SkillGroupEntry } from "@/lib/portfolio-content";

type SkillMatrixProps = {
  groups: readonly SkillGroupEntry[];
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function SkillMatrix({ groups }: SkillMatrixProps) {
  return (
    <motion.div
      initial={{ opacity: 0.74, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: revealEase }}
      className="toolkit-panel"
    >
      <div className="toolkit-topbar">
        <span className="toolkit-dot" />
        <span className="toolkit-path">~/shreyansh/toolkit</span>
      </div>

      <div className="toolkit-command">
        <span className="toolkit-prompt">$</span>
        <span>cat stack.json</span>
      </div>

      <div className="toolkit-list">
        {groups.map((group) => (
          <div key={group.label} className="toolkit-row">
            <span className="toolkit-key">{group.label}</span>
            <span className="toolkit-value">{group.items.join(" · ")}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
