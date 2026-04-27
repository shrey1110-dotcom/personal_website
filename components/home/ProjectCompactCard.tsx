"use client";

import { motion } from "framer-motion";
import ProjectVisual from "@/components/home/ProjectVisual";
import type { ProjectEntry } from "@/lib/portfolio-content";

type ProjectCompactCardProps = {
  index: number;
  project: ProjectEntry;
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function ProjectCompactCard({ index, project }: ProjectCompactCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0.72, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.64, delay: index * 0.04, ease: revealEase }}
      className="compact-project-card"
    >
      <ProjectVisual project={project} compact />

      <div className="mt-6 space-y-4">
        <div className="space-y-3">
          <p className="section-label">{project.type}</p>
          <h3 className="compact-project-title">{project.name}</h3>
          <p className="compact-project-copy">{project.blurb}</p>
        </div>

        <div>
          <p className="mono-label">Features</p>
          <div className="mt-3 space-y-2.5">
            {project.features.map((feature, featureIndex) => (
              <div key={feature} className="compact-feature-row">
                <span className="compact-feature-index">
                  {String(featureIndex + 1).padStart(2, "0")}
                </span>
                <p className="compact-feature-copy">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="project-cta"
          data-cursor="interactive"
        >
          {project.ctaLabel ?? "Open →"}
        </a>
      </div>
    </motion.article>
  );
}
