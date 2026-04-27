"use client";

import { motion } from "framer-motion";
import HeroProfilePanel from "@/components/home/HeroProfilePanel";
import InfoRails from "@/components/home/InfoRails";
import ProjectBand from "@/components/home/ProjectBand";
import RetainProductSection from "@/components/home/RetainProductSection";
import SectionHeading from "@/components/home/SectionHeading";
import {
  archiveProjects,
  contactLinks,
  featuredProjects,
  heroActions,
  navItems,
} from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

const revealEase = [0.22, 1, 0.36, 1] as const;

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
                Software engineer · product-minded full-stack
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
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
                <div className="max-w-[720px]">
                  <p className="section-label">
                    Full-stack software engineer building products and ML-backed features
                  </p>

                  <h1 className="hero-title hero-title-expanded mt-5">
                    <span className="hero-title-line">Shreyansh</span>
                    <span className="hero-title-line hero-title-gradient">Sharma</span>
                  </h1>

                  <p className="hero-support mt-6">
                    I build full-stack products and ML-backed features that solve real workflow
                    problems.
                  </p>

                  <p className="hero-body mt-5">
                    Recent work spans a live communications platform, an on-chain aid protocol, a
                    marketplace with AI in the loop, and applied ML tools built to produce clear,
                    usable output.
                  </p>

                  <div className="hero-action-grid mt-8">
                    {heroActions.map((action, index) => {
                      const href = action.href.startsWith("/") ? withBasePath(action.href) : action.href;
                      const prominent = index < 3;

                      return (
                        <a
                          key={action.label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className={prominent ? "hero-action-card" : "hero-action-card hero-action-card-muted"}
                          data-cursor="interactive"
                        >
                          <span className="hero-action-label">{action.label}</span>
                          <span aria-hidden="true" className="hero-action-arrow">
                            ↗
                          </span>
                        </a>
                        );
                    })}
                  </div>

                  <a
                    href="#retain"
                    className="hero-scroll-cue mt-10"
                    data-cursor="interactive"
                  >
                    <span>Scroll to explore</span>
                    <span aria-hidden="true" className="hero-scroll-arrow">
                      ↓
                    </span>
                  </a>
                </div>

                <HeroProfilePanel />
              </div>

              <InfoRails className="mt-10 md:mt-12" />
            </div>
          </div>
        </section>

        <RetainProductSection />

        <section id="work" className="section-shell pt-10">
          <div className="section-frame">
            <SectionHeading
              label="Selected Work"
              title="Clear products, real interfaces, and technical depth you can see quickly"
              body="The goal here is simple: show what each product does, why it matters, and what makes it technically credible without making you decode the page."
            />

            <div className="mt-12">
              {featuredProjects.map((project, index) => (
                <ProjectBand key={project.name} index={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="archive" className="section-shell pt-4">
          <div className="section-frame">
            <SectionHeading
              label="More Work"
              title="Additional systems and applied ML work"
              body="These are smaller in scope than the featured work above, but they still show the same pattern: clear product behavior, careful implementation, and useful output."
            />

            <div className="mt-12">
              {archiveProjects.map((project, index) => (
                <ProjectBand key={project.name} index={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pt-10 md:pt-14">
          <div className="section-frame">
            <motion.div
              initial={{ opacity: 0.74, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.76, ease: revealEase }}
              className="contact-panel lg:grid-cols-[1.08fr_0.92fr]"
            >
              <div>
                <SectionHeading
                  label="Contact"
                  title="Reach out if the work here maps to what your team is building"
                  body="I’m looking for software engineering internships and product-minded teams where full-stack work, systems thinking, and applied ML can all show up in real product work."
                />

                <a
                  href="mailto:shreyansh.sharma01@student.csulb.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex flex-col text-left"
                  data-cursor="interactive"
                >
                  <span className="mono-label">Email</span>
                  <span className="mt-3 text-[clamp(1.4rem,2.5vw,2.7rem)] font-semibold tracking-[-0.05em] text-white">
                    shreyansh.sharma01@student.csulb.edu
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
        </div>
      </footer>
    </div>
  );
}
