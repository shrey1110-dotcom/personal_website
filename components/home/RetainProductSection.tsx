"use client";

import { motion } from "framer-motion";
import LiveDemoWindow from "@/components/home/LiveDemoWindow";
import { retainProduct } from "@/lib/portfolio-content";

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function RetainProductSection() {
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

              <div className="mt-8">
                <p className="mono-label">Features</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {retainProduct.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0.7, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{
                        duration: 0.48,
                        delay: index * 0.04,
                        ease: revealEase,
                      }}
                      className="feature-card"
                    >
                      <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
                      <p className="feature-copy">{feature}</p>
                    </motion.div>
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
            className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {retainProduct.proofMetrics.map((metric) => (
              <div key={metric.label} className="retain-proof-card">
                <p className="retain-proof-value">{metric.value}</p>
                <p className="retain-proof-label">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
