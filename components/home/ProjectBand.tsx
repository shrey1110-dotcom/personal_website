"use client";

import { motion } from "framer-motion";
import ProjectVisual from "@/components/home/ProjectVisual";
import type { ProjectEntry } from "@/lib/portfolio-content";

type ProjectBandProps = {
  index: number;
  project: ProjectEntry;
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function ProjectBand({ index, project }: ProjectBandProps) {
  const reversed = index % 2 === 1;

  return (
    <article className="project-band-shell border-t border-white/8 py-12 first:border-t-0 md:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}
          initial={{ opacity: 0.62, x: reversed ? 28 : -28, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.74, ease: revealEase }}
        >
          <ProjectVisual project={project} />
        </motion.div>

        <motion.div
          className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}
          initial={{ opacity: 0.66, x: reversed ? -28 : 28, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: revealEase, delay: 0.06 }}
        >
          <div className="space-y-6">
            <p className="section-label">{project.type}</p>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-copy">{project.blurb}</p>

            <div>
              <p className="mono-label">Features</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0.7, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{
                      duration: 0.5,
                      delay: featureIndex * 0.05,
                      ease: revealEase,
                    }}
                    className="feature-card"
                  >
                    <span className="feature-index">
                      {String(featureIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="feature-copy">{feature}</p>
                  </motion.div>
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
        </motion.div>
      </div>
    </article>
  );
}
