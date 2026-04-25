"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MetricCounter from "@/components/home/MetricCounter";
import { retainProduct } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function RetainProductSection() {
  return (
    <section id="retain" className="section-shell pt-8 md:pt-10">
      <div className="section-frame">
        <div className="retain-shell">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0.78, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.72, ease: revealEase }}
              className="max-w-[46rem]"
            >
              <p className="section-label retain-label">Live infrastructure</p>
              <h2 className="retain-title mt-4">{retainProduct.name}</h2>
              <p className="retain-support mt-5">{retainProduct.subtitle}</p>
              <p className="section-body mt-6 max-w-[43rem]">{retainProduct.blurb}</p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {retainProduct.tags.map((tag) => (
                  <span key={tag} className="retain-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={retainProduct.href}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Open →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.76, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.72, delay: 0.06, ease: revealEase }}
              className="min-w-0"
            >
              <div className="retain-shot-panel">
                <div className="retain-shot-head">
                  <div>
                    <p className="mono-label">Product surface</p>
                    <p className="mt-2 text-lg font-medium tracking-[-0.03em] text-white">
                      Live communications workspace for customer messaging
                    </p>
                  </div>
                  <div className="retain-browser-live">deployed</div>
                </div>

                <div className="retain-shot-stage">
                  <div className="retain-shot-aura retain-shot-aura-a" />
                  <div className="retain-shot-aura retain-shot-aura-b" />

                  <div className="retain-browser-shell">
                    <div className="retain-browser-bar">
                      <div className="flex items-center gap-2">
                        <span className="retain-browser-dot bg-rose-300/85" />
                        <span className="retain-browser-dot bg-amber-200/85" />
                        <span className="retain-browser-dot bg-emerald-300/85" />
                      </div>
                      <div className="retain-browser-url">retain-ai-eight.vercel.app</div>
                      <div className="retain-browser-chip">communications runtime</div>
                    </div>

                    <div className="retain-browser-view">
                      <Image
                        src={withBasePath("/retain-screenshot.png")}
                        alt="Retain AI operator dashboard"
                        fill
                        sizes="(min-width: 1024px) 80vw, 100vw"
                        className="object-cover object-top"
                        priority
                      />
                      <div className="retain-image-sheen" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0.8, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.82, ease: revealEase }}
            className="mt-12"
          >
            <div className="space-y-6">
              <div className="retain-stat-grid">
                {retainProduct.stats.map((item) => (
                  <div key={item.label} className="retain-stat-card">
                    <MetricCounter metric={item} />
                    <p className="retain-stat-label">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="retain-feature-grid">
                {retainProduct.featureCards.map((item) => (
                  <div key={item.title} className="retain-feature-card">
                    <p className="mono-label">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{item.copy}</p>
                  </div>
                ))}
              </div>

              <div className="retain-integrations-row">
                <p className="mono-label">Integrations</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {retainProduct.integrations.map((item) => (
                    <span key={item} className="retain-integration-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
