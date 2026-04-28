"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LiveDemoWindow from "@/components/home/LiveDemoWindow";
import MetricCounter from "@/components/home/MetricCounter";
import { retainProduct } from "@/lib/portfolio-content";

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function RetainProductSection() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, {
    amount: 0.28,
    once: true,
  });

  return (
    <section id="retain" className="section-shell pt-8 md:pt-10">
      <div className="section-frame">
        <div className="retain-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0.78, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.72, ease: revealEase }}
              className="max-w-[43rem]"
            >
              <p className="section-label retain-label">Featured work</p>
              <p className="retain-role-line mt-4">{retainProduct.roleLine}</p>
              <h2 className="retain-title mt-4">{retainProduct.name}</h2>
              <p className="retain-support mt-5">{retainProduct.subtitle}</p>
              <p className="section-body mt-6 max-w-[39rem]">{retainProduct.blurb}</p>

              <div className="mt-7">
                <p className="mono-label">Tech stack</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {retainProduct.tags.map((tag) => (
                    <span key={`retain-tag-${tag}`} className="project-stack-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={retainProduct.href}
                target="_blank"
                rel="noreferrer"
                className="primary-button mt-8"
              >
                {retainProduct.ctaLabel}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.76, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.76, delay: 0.06, ease: revealEase }}
            >
              <div className="space-y-4">
                <LiveDemoWindow
                  accentClassName="live-demo-retain"
                  chromeLabel="Live platform"
                  src={retainProduct.href}
                  title="Retain AI live platform preview"
                  urlLabel={retainProduct.liveMeta}
                />
                <p className="retain-window-note">
                  Live product window. Open the platform to inspect the full messaging flow.
                </p>
              </div>
            </motion.div>
          </div>

            <motion.div
              initial={{ opacity: 0.78, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{ duration: 0.72, ease: revealEase }}
            className="mt-8"
          >
            <div ref={statsRef} className="retain-stat-grid">
              {retainProduct.stats.map((metric) => (
                <div key={metric.label} className="retain-stat-card">
                  <MetricCounter active={statsInView} metric={metric} />
                  <p className="retain-stat-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.78, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.72, ease: revealEase, delay: 0.04 }}
            className="mt-6 retain-feature-grid"
          >
            {retainProduct.featureCards.map((featureCard) => (
              <div key={featureCard.title} className="retain-feature-card">
                <p className="mono-label">{featureCard.title}</p>
                <p className="feature-copy mt-4">{featureCard.copy}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0.78, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.72, ease: revealEase, delay: 0.08 }}
            className="mt-6 retain-integrations-row"
          >
            <p className="mono-label">Integrations</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {retainProduct.integrations.map((integration) => (
                <span key={`retain-integration-${integration}`} className="retain-integration-chip">
                  {integration}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
