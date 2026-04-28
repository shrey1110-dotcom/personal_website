"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/home/SectionHeading";
import { experienceEntries } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = experienceEntries[activeIndex];

  const moveSelection = (direction: "next" | "prev") => {
    setActiveIndex((current) => {
      if (direction === "next") {
        return (current + 1) % experienceEntries.length;
      }

      return (current - 1 + experienceEntries.length) % experienceEntries.length;
    });
  };

  return (
    <section id="experience" className="section-shell pt-8 md:pt-10">
      <div className="section-frame">
        <SectionHeading
          label="Experience"
          title="Work experience"
          body="The two roles that best show my range: enterprise voice AI work at Rezolve.ai and founder-led product engineering on RETAIN AI."
        />

        <div className="experience-showcase-grid mt-10">
          <motion.div
            initial={{ opacity: 0.74, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.76, ease: revealEase }}
            className="experience-showcase-main"
          >
            <div className="experience-showcase-toolbar">
              <button
                type="button"
                onClick={() => moveSelection("prev")}
                className="experience-nav-button"
                aria-label="Show previous experience"
                data-cursor="interactive"
              >
                ←
              </button>
              <span className="experience-nav-count">
                {activeIndex + 1} / {experienceEntries.length}
              </span>
              <button
                type="button"
                onClick={() => moveSelection("next")}
                className="experience-nav-button"
                aria-label="Show next experience"
                data-cursor="interactive"
              >
                →
              </button>
            </div>

            <div className="experience-selector-row">
              {experienceEntries.map((entry, index) => (
                <button
                  key={entry.company}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`experience-selector-button ${
                    activeIndex === index ? "experience-selector-button-active" : ""
                  }`}
                  data-cursor="interactive"
                >
                  <div className="experience-selector-logo">
                    <Image
                      src={withBasePath(entry.logoSrc)}
                      alt={entry.logoAlt}
                      fill
                      sizes="(min-width: 1024px) 84px, 64px"
                      className="experience-logo-image"
                    />
                  </div>
                  <div className="experience-selector-copy">
                    <span className="experience-selector-company">{entry.company}</span>
                    <span className="experience-selector-role">{entry.role}</span>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEntry.company}
                initial={{ opacity: 0.68, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.42, y: -12 }}
                transition={{ duration: 0.42, ease: revealEase }}
                className="experience-spotlight"
              >
                <div className="experience-spotlight-brand">
                  <div className="experience-spotlight-logo">
                    <Image
                      src={withBasePath(activeEntry.logoSrc)}
                      alt={activeEntry.logoAlt}
                      fill
                      sizes="144px"
                      className="experience-logo-image"
                    />
                  </div>
                  <div className="experience-spotlight-copy">
                    <h3 className="experience-company">{activeEntry.company}</h3>
                    <p className="experience-role-line">
                      <span>{activeEntry.role}</span>
                      <span className="experience-role-separator">·</span>
                      <span>{activeEntry.date}</span>
                    </p>
                  </div>
                </div>

                <div className="experience-spotlight-body">
                  <div className="experience-bullet-list">
                    {activeEntry.bullets.map((bullet) => (
                      <div key={`${activeEntry.company}-${bullet}`} className="experience-bullet-row">
                        <span className="experience-bullet-dot" />
                        <p className="experience-bullet-copy">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  <div className="experience-tech-row">
                    {activeEntry.tags.map((tag) => (
                      <span key={`${activeEntry.company}-${tag}`} className="project-stack-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0.74, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.06, ease: revealEase }}
            className="experience-showcase-side"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeEntry.company}-about`}
                initial={{ opacity: 0.64, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.38, y: -10 }}
                transition={{ duration: 0.4, ease: revealEase }}
              >
                <p className="experience-side-title">About the company</p>

                <div className="experience-about-grid">
                  {activeEntry.meta.map((item) => (
                    <div key={`${activeEntry.company}-${item.label}`} className="experience-about-stat">
                      <p className="experience-about-label">{item.label}</p>
                      <p className="experience-about-value">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="experience-about-copy-block">
                  <p className="experience-about-label">Description</p>
                  <p className="experience-about-copy">{activeEntry.description}</p>
                </div>

                {activeEntry.href ? (
                  <a
                    href={activeEntry.href}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-link mt-6"
                    data-cursor="interactive"
                  >
                    Visit company
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
