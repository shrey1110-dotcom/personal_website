"use client";

import { motion } from "framer-motion";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroProfilePanel from "@/components/home/HeroProfilePanel";
import InfoRails from "@/components/home/InfoRails";
import ProjectBand from "@/components/home/ProjectBand";
import ProjectCompactCard from "@/components/home/ProjectCompactCard";
import RetainProductSection from "@/components/home/RetainProductSection";
import SectionHeading from "@/components/home/SectionHeading";
import SkillMatrix from "@/components/home/SkillMatrix";
import {
  archiveProjects,
  contactLinks,
  featuredProjects,
  heroActions,
  navItems,
  skillGroups,
} from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site";

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const getLinkBehavior = (href: string) =>
    href.startsWith("mailto:") ? {} : { rel: "noreferrer", target: "_blank" as const };

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
                Software engineer · full-stack products · applied ML
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

          <div className="flex items-center gap-2.5">
            <span className="header-status-pill hidden md:inline-flex">
              <span className="header-status-dot" />
              Open to internships
            </span>
            <a
              href="mailto:shreyansh.sharma01@student.csulb.edu"
              className="header-hire-cta"
              data-cursor="interactive"
            >
              Email
            </a>
            <a
              href={withBasePath("/resume.pdf")}
              target="_blank"
              rel="noreferrer"
              className="header-resume rounded-full border border-[rgba(146,169,255,0.24)] bg-[rgba(146,169,255,0.08)] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-[rgba(112,224,215,0.42)] hover:bg-[rgba(112,224,215,0.12)]"
              data-cursor="interactive"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="section-shell pb-14 pt-16 md:pb-18 md:pt-24">
          <div className="section-frame">
            <div className="hero-stage-panel">
              <div className="hero-grid">
                <div className="max-w-[720px]">
                  <p className="section-label">Software engineer · full-stack products · applied ML</p>

                  <h1 className="hero-title hero-title-expanded mt-5">
                    <span className="hero-title-line">Shreyansh</span>
                    <span className="hero-title-line hero-title-gradient">Sharma</span>
                  </h1>

                  <p className="hero-support mt-6">
                    I build software products and ML-backed features.
                  </p>

                  <p className="hero-body mt-5">
                    From customer messaging to on-chain flows and verification tools, I focus on
                    products that feel clear to use and reliable underneath.
                  </p>

                  <div className="hero-action-grid mt-9">
                    {heroActions.map((action) => {
                      const href = action.href.startsWith("/") ? withBasePath(action.href) : action.href;

                      return (
                        <a
                          key={action.label}
                          href={href}
                          {...getLinkBehavior(href)}
                          className="hero-action-card hero-action-card-primary"
                          data-cursor="interactive"
                        >
                          <div>
                            <span className="hero-action-label">{action.label}</span>
                            <span className="hero-action-support">{action.value}</span>
                          </div>
                          <span aria-hidden="true" className="hero-action-arrow">
                            ↗
                          </span>
                        </a>
                      );
                    })}
                  </div>

                  <a href="#retain" className="hero-scroll-cue mt-10" data-cursor="interactive">
                    <span>Scroll to explore</span>
                    <span aria-hidden="true" className="hero-scroll-arrow">
                      ↓
                    </span>
                  </a>
                </div>

                <HeroProfilePanel />
              </div>

              <InfoRails className="mt-12 md:mt-14" />
            </div>
          </div>
        </section>

        <RetainProductSection />

        <section id="work" className="section-shell pt-10">
          <div className="section-frame">
            <SectionHeading
              label="Selected Work"
              title="Flagship work"
              body="The clearest examples of how I build products people can actually use."
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
              title="More shipped work"
              body="Smaller builds that still show range, judgment, and execution."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {archiveProjects.map((project, index) => (
                <ProjectCompactCard key={project.name} index={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-shell pt-6 md:pt-8">
          <div className="section-frame">
            <SectionHeading
              label="Stack"
              title="Core tools behind the work"
              body="Languages, frameworks, infra, and platforms that show up repeatedly across shipped products."
            />

            <div className="mt-10">
              <SkillMatrix groups={skillGroups} />
            </div>
          </div>
        </section>

        <ExperienceSection />

        <section id="contact" className="section-shell pt-10 md:pt-12">
          <div className="section-frame">
            <motion.div
              initial={{ opacity: 0.74, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.76, ease: revealEase }}
              className="contact-panel contact-panel-compact"
            >
              <div className="max-w-[38rem]">
                <SectionHeading
                  label="Contact"
                  title="Let’s talk"
                  body="If the work here lines up with what your team is building, send a note. Email is best. LinkedIn, GitHub, and my resume are right here."
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks.map((link) => {
                  const href = link.href.startsWith("/") ? withBasePath(link.href) : link.href;

                  return (
                    <a
                      key={link.label}
                      href={href}
                      {...getLinkBehavior(href)}
                      className="contact-link-card"
                      data-cursor="interactive"
                    >
                      <span className="mono-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300">
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
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {contactLinks.map((link) => {
              const href = link.href.startsWith("/") ? withBasePath(link.href) : link.href;

              return (
                <a
                  key={link.label}
                  href={href}
                  {...getLinkBehavior(href)}
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
