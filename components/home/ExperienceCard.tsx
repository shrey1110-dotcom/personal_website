"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

type ExperienceCardProps = {
  compact?: boolean;
  entry: ExperienceEntry;
  index: number;
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function ExperienceCard({
  compact = false,
  entry,
  index,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0.72, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.66, delay: index * 0.05, ease: revealEase }}
      className={`experience-card ${compact ? "experience-card-compact" : ""}`}
    >
      <div className="experience-logo-shell">
        <div className="experience-logo">
          <Image
            src={withBasePath(entry.logoSrc)}
            alt={entry.logoAlt}
            fill
            sizes="(min-width: 768px) 88px, 68px"
            className="experience-logo-image"
          />
        </div>
      </div>

      <div className="experience-body">
        <div className="experience-header">
          <div>
            <h3 className="experience-company">{entry.company}</h3>
            <p className="experience-role-line">
              <span>{entry.role}</span>
              <span className="experience-role-separator">·</span>
              <span>{entry.date}</span>
            </p>
          </div>

          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className="experience-link"
              data-cursor="interactive"
            >
              Visit
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        <div className="experience-meta-row">
          {entry.meta.map((item) => (
            <span key={`${entry.company}-${item.label}`} className="experience-meta-pill">
              <span className="experience-meta-label">{item.label}</span>
              <span className="experience-meta-value">{item.value}</span>
            </span>
          ))}
        </div>

        <p className="experience-copy">{entry.description}</p>

        <div className="experience-bullet-list">
          {entry.bullets.map((bullet) => (
            <div key={`${entry.company}-${bullet}`} className="experience-bullet-row">
              <span className="experience-bullet-dot" />
              <p className="experience-bullet-copy">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="experience-tech-row">
          {entry.tags.map((tag) => (
            <span key={`${entry.company}-${tag}`} className="project-stack-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
