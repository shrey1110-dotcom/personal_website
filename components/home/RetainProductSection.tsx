"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { retainProduct } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function RetainProductSection() {
  return (
    <section id="retain" className="section-shell pt-8 md:pt-10">
      <div className="section-frame">
        <div className="retain-shell">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0.78, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.72, ease: revealEase }}
              className="max-w-[42rem]"
            >
              <p className="section-label retain-label">Featured work</p>
              <h2 className="retain-title mt-4">{retainProduct.name}</h2>
              <p className="retain-support mt-5">{retainProduct.subtitle}</p>
              <p className="section-body mt-6 max-w-[38rem]">{retainProduct.blurb}</p>

              <div className="mt-8">
                <p className="mono-label">Features</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {retainProduct.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0.66, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{
                        duration: 0.54,
                        delay: index * 0.05,
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
              <div className="retain-shot-panel">
                <div className="retain-shot-head">
                  <div>
                    <p className="mono-label">Live product</p>
                    <p className="mt-2 text-lg font-medium tracking-[-0.03em] text-white">
                      Message routing, business context, and AI-assisted response handling
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
                      <div className="retain-browser-chip">operator workspace</div>
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
