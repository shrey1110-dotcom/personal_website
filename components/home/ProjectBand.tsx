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
  const specItems =
    project.proofPoints?.length ? project.proofPoints : project.surfaces?.length ? project.surfaces : [];

  return (
    <article className="project-band-shell border-t border-white/8 py-10 first:border-t-0 md:py-14">
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
          <div className="space-y-5">
            <p className="section-label">{project.type}</p>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-copy">{project.blurb}</p>

            {project.metrics?.length ? (
              <div>
                <p className="mono-label">Proof</p>
                <div className="project-metric-grid mt-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={`${project.name}-${metric.label}`}
                      initial={{ opacity: 0.72, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{
                        duration: 0.48,
                        delay: metricIndex * 0.04,
                        ease: revealEase,
                      }}
                      className="metric-card"
                    >
                      <p className="metric-value">{metric.value}</p>
                      <p className="metric-label">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : null}

            {project.integrations?.length ? (
              <div className="project-trust-row">
                {project.integrations.map((integration) => (
                  <span key={`${project.name}-${integration}`} className="project-trust-pill">
                    {integration}
                  </span>
                ))}
              </div>
            ) : null}

            {(specItems.length || project.tags.length) ? (
              <div className="project-detail-grid">
                {specItems.length ? (
                  <div className="project-detail-panel project-detail-panel-specs">
                    <p className="mono-label">Specs</p>
                    <div className="mt-4 grid gap-2.5">
                      {specItems.map((item) => (
                        <div key={`${project.name}-${item}`} className="project-spec-row">
                          <span className="project-spec-dot" />
                          <span className="project-spec-copy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {project.tags.length ? (
                  <div className="project-detail-panel project-detail-panel-stack">
                    <p className="mono-label">Tech stack</p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {project.tags.map((tag) => (
                        <span key={`${project.name}-${tag}`} className="project-stack-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}

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

            {project.interfaceCards?.length ? (
              <div>
                <p className="mono-label">Interfaces</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.interfaceCards.map((card) => (
                    <a
                      key={`${project.name}-${card.label}`}
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="interface-card"
                      data-cursor="interactive"
                    >
                      <span className="block text-sm font-medium tracking-[-0.02em] text-white">
                        {card.label}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300">
                        Open
                        <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

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
