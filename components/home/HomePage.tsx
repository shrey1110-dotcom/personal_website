"use client";

import { motion } from "framer-motion";
import HeroProfilePanel from "@/components/home/HeroProfilePanel";
import InfoRails from "@/components/home/InfoRails";
import ProjectBand from "@/components/home/ProjectBand";
import RetainProductSection from "@/components/home/RetainProductSection";
import SectionHeading from "@/components/home/SectionHeading";
import SkillMatrix from "@/components/home/SkillMatrix";
import {
  aboutBlocks,
  aboutBuildLines,
  contactLinks,
  heroChips,
  navItems,
  projects,
  skillGroups,
} from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="home-page-shell relative min-h-screen bg-[#070b14] text-[#eef2ff]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="page-aurora page-aurora-a" />
        <div className="page-aurora page-aurora-b" />
        <div className="page-aurora page-aurora-c" />
        <div className="page-light-beam page-light-beam-a" />
        <div className="page-light-beam page-light-beam-b" />
        <div className="page-glow-layer" />
        <div className="page-grid-layer" />
        <div className="page-vignette-layer" />
      </div>

      <header className="header-shell sticky top-0 z-40 border-b border-white/8 bg-[rgba(5,8,16,0.62)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="header-mark" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-[-0.03em] text-white">
                Shreyansh Sharma
              </span>
              <span className="block text-xs text-slate-400">
                Software engineer · full-stack products
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                data-cursor="interactive"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={withBasePath("/resume.pdf")}
            target="_blank"
            rel="noreferrer"
            className="header-resume rounded-full border border-[rgba(146,169,255,0.24)] bg-[rgba(146,169,255,0.08)] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-[rgba(112,224,215,0.42)] hover:bg-[rgba(112,224,215,0.12)]"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="section-shell pb-14 pt-16 md:pb-18 md:pt-24">
          <div className="section-frame">
            <div className="hero-stage-panel">
              <div className="hero-grid">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  className="max-w-[780px]"
                >
                  <motion.p
                    className="section-label"
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    Software engineer · product systems · applied ML
                  </motion.p>

                  <motion.h1
                    className="hero-title mt-5"
                    variants={{
                      hidden: { opacity: 0, y: 28 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    Shreyansh Sharma
                  </motion.h1>

                  <motion.p
                    className="hero-support mt-6"
                    variants={{
                      hidden: { opacity: 0, y: 22 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    Production-minded products, operator software, and applied machine learning.
                  </motion.p>

                  <motion.p
                    className="hero-body mt-6"
                    variants={{
                      hidden: { opacity: 0, y: 22 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    I build software with real moving parts: interfaces, APIs, messaging flows,
                    data models, and third-party integrations that need to work together cleanly.
                    The goal is simple: polished product behavior backed by sound system design.
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-wrap gap-2.5"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          delayChildren: 0.12,
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {heroChips.map((chip) => (
                      <motion.span
                        key={chip}
                        className="hero-chip"
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-10 flex flex-wrap items-center gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <a href="#retain" className="primary-button" data-cursor="interactive">
                      Retain AI
                    </a>
                    <a href="#work" className="secondary-button" data-cursor="interactive">
                      Selected work
                    </a>
                    <a
                      href={withBasePath("/resume.pdf")}
                      target="_blank"
                      rel="noreferrer"
                      className="tertiary-button"
                      data-cursor="interactive"
                    >
                      Resume
                    </a>
                  </motion.div>
                </motion.div>

                <HeroProfilePanel />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              >
                <InfoRails className="mt-10 md:mt-12" />
              </motion.div>
            </div>
          </div>
        </section>

        <RetainProductSection />

        <section id="about" className="section-shell pt-8 md:pt-12">
          <div className="section-frame">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <SectionHeading
                label="About"
                title="I care about the surface and the system underneath it."
                body="Good products need both. The interface has to read clearly, and the system behind it has to behave cleanly once auth, messaging, integrations, data flow, and real usage start showing up."
              />

              <motion.div
                initial={{ opacity: 0.74, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="about-signal-panel"
              >
                <div className="space-y-4">
                  <div>
                    <p className="mono-label">What I build</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Recent shipped work across communications infrastructure, marketplaces,
                      on-chain systems, and applied machine learning.
                    </p>
                  </div>

                  {aboutBuildLines.map((item, index) => (
                    <motion.div
                      key={item.index}
                      initial={{ opacity: 0.68, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.56,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="about-build-row"
                    >
                      <span className="about-build-index">{item.index}</span>
                      <p className="text-sm leading-7 text-slate-200">{item.copy}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {aboutBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0.74, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.64,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="content-panel"
                >
                  <p className="section-label">{block.title}</p>
                  <p className="mt-4 text-base leading-8 text-slate-300">{block.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="Projects"
              title="Selected work"
              body="Deployed products, on-chain protocols, applied ML systems, and workflow-heavy software built to do real work once people start using them."
            />

            <div className="mt-12">
              {projects.map((project, index) => (
                <ProjectBand key={project.name} index={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="Stack"
              title="Tools I reach for when the work needs to ship"
              body="Languages, frameworks, infra, and platform tools that show up repeatedly in the products and systems I build."
            />

            <div className="mt-12">
              <SkillMatrix groups={skillGroups} />
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pt-10 md:pt-12">
          <div className="section-frame">
            <motion.div
              initial={{ opacity: 0.74, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
              className="contact-panel lg:grid-cols-[1.14fr_0.86fr]"
            >
              <div>
                <SectionHeading
                  label="Contact"
                  title="Let’s talk"
                  body="I’m interested in software engineering roles and conversations around product systems, operator software, and applied ML. If the work here maps to what your team is building, reach out."
                />

                <a
                  href="mailto:shreyansh.sharma01@student.csulb.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex flex-col text-left"
                  data-cursor="interactive"
                >
                  <span className="mono-label">Email</span>
                  <span className="mt-3 text-[clamp(1.55rem,2.7vw,2.9rem)] font-semibold tracking-[-0.05em] text-white">
                    <span className="block">shreyansh.sharma01</span>
                    <span className="block">@student.csulb.edu</span>
                  </span>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactLinks.map((link) => {
                  const href = link.href.startsWith("/") ? withBasePath(link.href) : link.href;

                  return (
                    <a
                      key={link.label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link-card"
                      data-cursor="interactive"
                    >
                      <span className="mono-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
                        Open
                        <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-[1320px] space-y-2">
          <p className="text-sm text-slate-300">
            Shreyansh Sharma · Long Beach, CA · CSULB · Open to internships
          </p>
          <p className="text-sm text-slate-500">
            Built with Next.js, TypeScript, Tailwind, Framer Motion, and Lenis.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            {contactLinks.map((link) => {
              const href = link.href.startsWith("/") ? withBasePath(link.href) : link.href;

              return (
                <a
                  key={link.label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
