"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroProfilePanel from "@/components/home/HeroProfilePanel";
import InfoRails from "@/components/home/InfoRails";
import ProjectBand from "@/components/home/ProjectBand";
import SectionHeading from "@/components/home/SectionHeading";
import SkillMatrix from "@/components/home/SkillMatrix";
import {
  aboutBlocks,
  contactLinks,
  heroChips,
  navItems,
  projects,
  skillGroups,
} from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

const aboutSignals = [
  {
    label: "End-to-end ownership",
    value: "Interface, back end, integrations, and the product details that make the system hold together.",
  },
  {
    label: "Real operating logic",
    value: "The work gets stronger when product behavior depends on APIs, workflows, and data moving cleanly.",
  },
  {
    label: "Proof over polish",
    value: "Strong UI matters, but it only counts when the underlying workflow feels usable and technically sound.",
  },
] as const;

const featuredHighlights = [
  {
    label: "Workflow logic",
    value: "Lead intake, routing, and AI-assisted follow-up structured around real operator use.",
  },
  {
    label: "Operator surface",
    value: "A dashboard that behaves like a product workspace instead of a one-off demo shell.",
  },
  {
    label: "System behavior",
    value: "Messaging, transcript context, and QA support working together as one product loop.",
  },
] as const;

export default function HomePage() {
  const featuredProject = projects[0];
  const secondaryContactLinks = contactLinks.filter((link) => link.label !== "Email");

  return (
    <div className="home-page-shell relative min-h-screen bg-[#070b14] text-[#eef2ff]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="page-glow-layer" />
        <div className="page-grid-layer" />
        <div className="page-vignette-layer" />
      </div>

      <header className="header-shell sticky top-0 z-40 border-b border-white/8 bg-[rgba(7,11,20,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold">
              SS
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[-0.03em]">Shreyansh Sharma</span>
              <span className="block text-xs text-slate-400">Software engineer</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={withBasePath("/resume.pdf")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07]"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="section-shell pb-16 pt-16 md:pb-20 md:pt-24">
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
                  className="max-w-[760px]"
                >
                  <motion.p
                    className="section-label"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    Software engineer building full-stack products and ML systems
                  </motion.p>
                  <motion.h1
                    className="hero-title mt-5"
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    Shreyansh Sharma
                  </motion.h1>
                  <motion.p
                    className="hero-support mt-6"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    I build production-minded software across product, infrastructure, and applied
                    machine learning.
                  </motion.p>
                  <motion.p
                    className="hero-body mt-6"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    I design and ship software with real moving parts: front-end systems, back-end
                    workflows, data models, and third-party integrations that have to work together
                    cleanly. My focus is building products that feel polished on the surface and
                    technically sound underneath.
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-wrap gap-2.5"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          delayChildren: 0.12,
                          staggerChildren: 0.04,
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
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <a href="#projects" className="primary-button">
                      View Projects
                    </a>
                    <a href="#contact" className="secondary-button">
                      Contact
                    </a>
                    <a
                      href={withBasePath("/resume.pdf")}
                      target="_blank"
                      rel="noreferrer"
                      className="tertiary-button"
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
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              >
                <InfoRails className="mt-10 md:mt-12" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell pt-8 md:pt-10">
          <div className="section-frame">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionHeading
                label="About"
                title="I like building software where product quality and system quality both matter."
                body="The work that interests me most sits between interface and infrastructure: products people actually use, systems that support them reliably, and workflows that make the software useful in practice. I’m especially drawn to projects that require both technical depth and product judgment."
              />

              <motion.div
                initial={{ opacity: 0.68, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                className="about-signal-panel"
              >
                <div className="grid gap-4">
                  {aboutSignals.map((item) => (
                    <div key={item.label} className="proof-card">
                      <p className="mono-label">{item.label}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {aboutBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0.72, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.62,
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

        <section id="projects" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="Projects"
              title="Selected work"
              body="These are the projects that best represent how I build: user-facing software, real integrations, and systems with enough complexity to require thoughtful execution."
            />

            <div className="mt-12">
              {projects.map((project, index) => (
                <ProjectBand key={project.name} index={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="featured-project" className="section-shell pt-10 md:pt-12">
          <div className="section-frame">
            <SectionHeading
              label="Featured Project"
              title="Retain AI is the clearest example of how I like to build."
              body="It brings together the parts of software work I care most about: product design, workflow logic, third-party integrations, and back-end behavior that supports real usage. The goal was not just to make it look polished, but to make it operate like a real product."
            />

            <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.04fr_0.96fr]">
              <motion.div
                initial={{ opacity: 0.68, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                className="content-panel overflow-hidden p-0"
              >
                <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                  <span className="mono-label">Retain AI dashboard</span>
                  <span className="mono-label">operator workflow</span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={withBasePath("/retain-screenshot.png")}
                    alt="Retain AI dashboard"
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0.72, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.68,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-4"
              >
                <div className="content-panel">
                  <ul className="space-y-4">
                    <li className="feature-bullet">
                      Integrated Gemini and Twilio into a usable messaging workflow.
                    </li>
                    <li className="feature-bullet">
                      Built an operator-facing dashboard instead of a demo-only admin shell.
                    </li>
                    <li className="feature-bullet">
                      Focused on product behavior, not just surface-level UI polish.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {featuredHighlights.map((item) => (
                    <div key={item.label} className="proof-card h-full">
                      <p className="mono-label">{item.label}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="content-panel">
                  <p className="section-label">Core signals</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="skill-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="Skills"
              title="Tools I use to build and ship"
              body="Most of my work lives around web products, APIs, databases, ML tooling, and deployment. These are the technologies I reach for most often when building end-to-end systems."
            />

            <div className="mt-12">
              <SkillMatrix groups={skillGroups} />
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pt-10 md:pt-12">
          <div className="section-frame">
            <motion.div
              initial={{ opacity: 0.68, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="contact-panel lg:grid-cols-[1.14fr_0.86fr]"
            >
              <div>
                <SectionHeading
                  label="Contact"
                  title="Let’s talk"
                  body="I’m interested in software engineering opportunities, collaborations, and conversations around product, full-stack systems, and ML-adjacent work. Reach out if any of the work here is relevant to what you’re building."
                />

                <a
                  href="mailto:shreyansh.sharma01@student.csulb.edu"
                  className="mt-10 inline-flex flex-col text-left"
                >
                  <span className="mono-label">Email</span>
                  <span className="mt-3 text-[clamp(1.55rem,2.7vw,2.9rem)] font-semibold tracking-[-0.05em] text-white">
                    <span className="block">shreyansh.sharma01</span>
                    <span className="block">@student.csulb.edu</span>
                  </span>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {secondaryContactLinks.map((link) => {
                  const href = link.href.startsWith("/") ? withBasePath(link.href) : link.href;

                  return (
                    <a
                      key={link.label}
                      href={href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
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
            Built with Next.js, TypeScript, Tailwind, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
