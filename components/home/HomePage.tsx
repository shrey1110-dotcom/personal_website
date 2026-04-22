"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InfoRails from "@/components/home/InfoRails";
import ProjectBand from "@/components/home/ProjectBand";
import SectionHeading from "@/components/home/SectionHeading";
import {
  aboutBlocks,
  contactLinks,
  currentFocusCards,
  heroChips,
  navItems,
  projects,
  skillGroups,
} from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

export default function HomePage() {
  const featuredProject = projects[0];

  return (
    <div className="relative min-h-screen bg-[#070b14] text-[#eef2ff]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,123,255,0.16),transparent_26%),radial-gradient(circle_at_78%_14%,rgba(72,211,190,0.1),transparent_22%),linear-gradient(180deg,#070b14_0%,#0b1020_56%,#070b14_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] opacity-30" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(7,11,20,0.76)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-4 md:px-8">
          <a
            href="#home"
            className="text-base font-semibold tracking-[-0.03em] text-white"
          >
            Shreyansh Sharma
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
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-[1320px] px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
          <motion.div
            initial={{ opacity: 0.94, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="max-w-[860px]"
          >
            <p className="section-label">
              Software engineer building full-stack products and ML systems
            </p>
            <h1 className="hero-title mt-5">Shreyansh Sharma</h1>
            <p className="hero-support mt-6">
              I build production-minded software across product, infrastructure, and applied
              machine learning.
            </p>
            <p className="hero-body mt-6">
              I design and ship software with real moving parts: front-end systems, back-end
              workflows, data models, and third-party integrations that have to work together
              cleanly. My focus is building products that feel polished on the surface and
              technically sound underneath.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroChips.map((chip) => (
                <span key={chip} className="hero-chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
            </div>
          </motion.div>
        </section>

        <InfoRails />

        <section id="about" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="About"
              title="I like building software where product quality and system quality both matter."
              body="The work that interests me most sits between interface and infrastructure: products people actually use, systems that support them reliably, and workflows that make the software useful in practice. I’m especially drawn to projects that require both technical depth and product judgment."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {aboutBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.34, delay: index * 0.04, ease: "easeOut" }}
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

        <section id="featured-project" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="Featured Project"
              title="Retain AI is the clearest example of how I like to build."
              body="It brings together the parts of software work I care most about: product design, workflow logic, third-party integrations, and back-end behavior that supports real usage. The goal was not just to make it look polished, but to make it operate like a real product."
            />

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={{ opacity: 0.92, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.34, ease: "easeOut" }}
                className="content-panel overflow-hidden p-0"
              >
                <div className="border-b border-white/8 px-5 py-4 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  Retain AI dashboard
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
                initial={{ opacity: 0.92, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.34, ease: "easeOut", delay: 0.04 }}
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

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
                  className="content-panel"
                >
                  <p className="section-label">{group.label}</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span key={item} className="skill-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="current-focus" className="section-shell">
          <div className="section-frame">
            <SectionHeading
              label="Current Focus"
              title="What I’m sharpening right now"
              body="Right now I’m focused on building stronger project depth: clearer architecture, better technical storytelling, and sharper proof of what I can build across the stack."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {currentFocusCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
                  className="content-panel"
                >
                  <p className="section-label">{card.title}</p>
                  <p className="mt-4 text-base leading-8 text-slate-300">{card.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pb-16 md:pb-20">
          <div className="section-frame">
            <SectionHeading
              label="Contact"
              title="Let’s talk"
              body="I’m interested in software engineering opportunities, collaborations, and conversations around product, full-stack systems, and ML-adjacent work. Reach out if any of the work here is relevant to what you’re building."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0.92, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="content-panel"
              >
                <p className="section-label">Primary contact</p>
                <a
                  href="mailto:shreyansh.sharma01@student.csulb.edu"
                  className="mt-4 block max-w-[16ch] text-[clamp(1.45rem,7vw,2.1rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white transition-colors duration-200 [overflow-wrap:anywhere] hover:text-sky-100 md:max-w-[20ch] md:text-[clamp(1.85rem,3.25vw,3.35rem)] md:leading-[0.96] md:tracking-[-0.06em]"
                >
                  <span className="block">shreyansh.sharma01</span>
                  <span className="block">@student.csulb.edu</span>
                </a>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:shreyansh.sharma01@student.csulb.edu" className="primary-button">
                    Email
                  </a>
                  <a
                    href={withBasePath("/resume.pdf")}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>

              <div className="grid gap-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    initial={{ opacity: 0.9, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
                    className="content-panel transition-all duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.05]"
                  >
                    <p className="section-label">{link.label}</p>
                    <div className="mt-3 flex items-center justify-between gap-6">
                      <p className="text-[0.98rem] leading-7 text-white [overflow-wrap:anywhere]">
                        {link.value}
                      </p>
                      <span className="text-slate-500" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                  </motion.a>
                ))}
                <motion.a
                  href={withBasePath("/resume.pdf")}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: 0.12, ease: "easeOut" }}
                  className="content-panel transition-all duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.05]"
                >
                  <p className="section-label">Resume</p>
                  <div className="mt-3 flex items-center justify-between gap-6">
                    <p className="text-base text-white">Open PDF</p>
                    <span className="text-slate-500" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-4 py-6 md:px-8">
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
