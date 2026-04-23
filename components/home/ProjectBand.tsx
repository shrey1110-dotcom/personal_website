"use client";

import { motion } from "framer-motion";
import ProjectVisual from "@/components/home/ProjectVisual";
import type { ProjectEntry } from "@/lib/portfolio-content";

type ProjectBandProps = {
  index: number;
  project: ProjectEntry;
};

export default function ProjectBand({ index, project }: ProjectBandProps) {
  const reversed = index % 2 === 1;

  return (
    <article className="border-t border-white/8 py-12 first:border-t-0 md:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}
          initial={{ opacity: 0.6, x: reversed ? 28 : -28, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectVisual project={project} />
        </motion.div>

        <motion.div
          className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}
          initial={{ opacity: 0.64, x: reversed ? -28 : 28, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          <div className="space-y-6">
            <p className="section-label">{project.type}</p>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-copy">{project.blurb}</p>
            <p className="project-trust">{project.trustNote}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.proofPoints.map((item) => (
                <div key={item} className="proof-card">
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-chip">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              View project
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
