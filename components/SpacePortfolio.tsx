"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import CustomCursor from "@/components/CustomCursor";
import { withBasePath } from "@/lib/site";

type Project = {
  name: string;
  href: string;
  type: string;
  blurb: string;
  metric: string;
  glow: string;
  accent: string;
};

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#identity", label: "Identity" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#trajectory", label: "Trajectory" },
  { href: "#contact", label: "Contact" },
];

const projects: Project[] = [
  {
    name: "RETAIN AI",
    href: "https://retain-ai-eight.vercel.app",
    type: "Live SaaS",
    blurb: "Multi-tenant SMS operations, lead handling, and Gemini + Twilio orchestration.",
    metric: "Live product",
    glow: "from-[#5ba2ff]/30 via-[#35e6d3]/16 to-transparent",
    accent: "text-[#8ce6ff]",
  },
  {
    name: "AI Motion Analysis",
    href: "https://github.com/shrey1110-dotcom",
    type: "Computer Vision",
    blurb: "Pose-keypoint analysis with biomechanical scoring and ML-backed feedback loops.",
    metric: "17-point pose flow",
    glow: "from-[#6d8cff]/28 via-[#2a3c92]/18 to-transparent",
    accent: "text-[#9caeff]",
  },
  {
    name: "Cervical Cell CNN",
    href: "https://github.com/shrey1110-dotcom/cervical-cancer-detection",
    type: "Medical ML",
    blurb: "Transfer-learning pipeline for five-class Pap smear image classification.",
    metric: "5 classes",
    glow: "from-[#b26bff]/28 via-[#ff7ad9]/14 to-transparent",
    accent: "text-[#f0b7ff]",
  },
  {
    name: "Flashloan Arbitrage Bot",
    href: "https://gist.github.com/shrey1110-dotcom/ef53904ed184311d8a8dd5587ef11716",
    type: "Web3 Systems",
    blurb: "Route scanning, token pair search, and EVM DeFi automation under tight timing.",
    metric: "Multi-DEX engine",
    glow: "from-[#35e6d3]/28 via-[#0ea5e9]/16 to-transparent",
    accent: "text-[#7df7ea]",
  },
  {
    name: "Aura Lifestyle",
    href: "https://theauralifestyle.org",
    type: "Brand Platform",
    blurb: "Full web presence for a living brand with product storytelling and conversion flow.",
    metric: "Live commerce presence",
    glow: "from-[#ffb86b]/24 via-[#b26bff]/14 to-transparent",
    accent: "text-[#ffd2a0]",
  },
];

const builderCards = [
  {
    title: "Systems First",
    copy: "I prefer products with moving parts: auth, payments, ML, databases, and the shipping details that make them real.",
  },
  {
    title: "Cinematic Execution",
    copy: "The interface is not the whole story. The architecture, deployment path, and performance profile matter just as much.",
  },
  {
    title: "Internship Ready",
    copy: "Open to internships now, based in Long Beach, and actively looking for teams that value ownership and momentum.",
  },
];

const skillColumns = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "C/C++", "Go", "SQL"],
  },
  {
    label: "Product Stack",
    items: ["Next.js", "React", "FastAPI", "Express", "Node.js", "PostgreSQL"],
  },
  {
    label: "ML + Infra",
    items: ["TensorFlow", "scikit-learn", "Docker", "AWS", "Vercel", "Supabase"],
  },
  {
    label: "Shipping Tools",
    items: ["Stripe", "Clerk", "MongoDB", "Twilio", "Gemini", "GitHub Pages"],
  },
];

const trajectory = [
  {
    year: "Now",
    title: "CSULB junior building outside the classroom",
    copy: "Shipping deployed products, improving the depth of every stack I touch, and looking for the next team to learn from.",
  },
  {
    year: "2026",
    title: "Internship window fully open",
    copy: "Targeting product, platform, and ML-adjacent engineering roles where I can own user-facing systems end to end.",
  },
  {
    year: "May 2027",
    title: "Graduation target",
    copy: "B.S. in Computer Science from CSULB with GPA 3.5 and a portfolio built around shipped work, not class demos.",
  },
];

const stars = Array.from({ length: 84 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  size: (index % 3) + 1,
  opacity: 0.24 + (index % 6) * 0.08,
  duration: 2.4 + (index % 5) * 1.2,
  delay: (index % 9) * 0.37,
}));

function StarBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 cosmic-grid opacity-45" />
      <motion.div
        className="aurora-float absolute left-[-8%] top-[3%] h-[420px] w-[420px] rounded-full bg-[#205bff]/30 blur-[120px]"
        animate={{ opacity: [0.48, 0.72, 0.48] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-float absolute bottom-[18%] right-[-8%] h-[380px] w-[380px] rounded-full bg-[#b26bff]/24 blur-[120px]"
        animate={{ opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-float absolute bottom-[30%] left-[34%] h-[320px] w-[320px] rounded-full bg-[#35e6d3]/18 blur-[110px]"
        animate={{ opacity: [0.32, 0.58, 0.32] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <span
            key={`${star.left}-${star.top}-${index}`}
            className="star absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectStackCard({
  index,
  progress,
  project,
}: {
  index: number;
  progress: MotionValue<number>;
  project: Project;
}) {
  const y = useTransform(progress, [0, 1], [index * 110, index * -30]);
  const scale = useTransform(progress, [0, 1], [1 - index * 0.06, 0.98 - index * 0.015]);
  const rotate = useTransform(progress, [0, 1], [index % 2 === 0 ? -5 : 5, 0]);
  const opacity = useTransform(progress, [0, 0.12 + index * 0.06, 1], [0.22, 1, 1]);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="panel-sheen noise-overlay absolute inset-x-0 rounded-[32px] border border-white/12 bg-[rgba(8,13,28,0.76)] p-7 shadow-[0_40px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      style={{
        y,
        scale,
        rotateZ: rotate,
        opacity,
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      data-cursor="link"
    >
      <div
        className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${project.glow} opacity-100`}
      />
      <div className="relative flex min-h-[430px] flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="glow-pill rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[#9db1de]">
              {project.type}
            </span>
            <span className={`text-sm font-medium ${project.accent}`}>{project.metric}</span>
          </div>
          <div>
            <h3 className="max-w-[10ch] text-4xl font-medium tracking-[-0.05em] text-white">
              {project.name}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#9aa8cd]">{project.blurb}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/18 to-white/0" />
          <div className="flex items-center justify-between text-sm text-[#c8d5ff]">
            <span>Open project</span>
            <span className="text-lg">↗</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function SpacePortfolio() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const retainRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();
  const pageProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.22,
  });
  const heroY = useTransform(pageProgress, [0, 0.18], [0, -90]);
  const heroOpacity = useTransform(pageProgress, [0, 0.2], [1, 0.48]);
  const haloRotate = useTransform(pageProgress, [0, 1], [0, 180]);

  const { scrollYProgress: projectProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: retainProgress } = useScroll({
    target: retainRef,
    offset: ["start end", "end start"],
  });
  const retainScale = useTransform(retainProgress, [0, 0.5, 1], [0.92, 1, 1.04]);
  const retainRotate = useTransform(retainProgress, [0, 1], [-5, 5]);
  const retainGlow = useTransform(retainProgress, [0, 0.5, 1], [0.28, 0.52, 0.34]);

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-transparent text-[#eef2ff]">
      <CustomCursor />
      <StarBackdrop />

      <motion.div
        className="fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-[linear-gradient(90deg,#35e6d3_0%,#5ba2ff_35%,#b26bff_100%)]"
        style={{ scaleX: pageProgress }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full border border-white/10 bg-[rgba(6,10,22,0.68)] px-5 py-3 backdrop-blur-xl md:px-6">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm tracking-[0.14em] text-[#cfd9ff]"
            data-cursor="link"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(91,162,255,0.5),rgba(178,107,255,0.45),rgba(53,230,211,0.4))] text-xs font-bold text-white shadow-[0_0_28px_rgba(91,162,255,0.35)]">
              SS
            </span>
            <span className="hidden text-[12px] uppercase tracking-[0.34em] text-[#9fb0d7] sm:inline">
              Shreyansh Sharma
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#93a5cd] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-300 hover:text-white"
                data-cursor="link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="glow-pill rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(91,162,255,0.22),rgba(178,107,255,0.18),rgba(53,230,211,0.16))] px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            data-cursor="link"
          >
            Let&apos;s build ↗
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center px-4 pb-16 pt-32 md:px-8 md:pt-36">
          <div className="mx-auto w-full max-w-[1320px]">
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <div className="glow-pill inline-flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(9,15,31,0.64)] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9ab0da]">
                <span className="beam-pulse h-2 w-2 rounded-full bg-[#35e6d3]" />
                Open to internships
                <span className="hidden text-[#7083ab] sm:inline">• Long Beach, CA</span>
              </div>

              <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-[760px]">
                  <motion.p
                    className="text-sm uppercase tracking-[0.46em] text-[#7f92bc]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                  >
                    Cinematic product engineer
                  </motion.p>
                  <motion.h1
                    className="mt-5 text-[clamp(3.7rem,11vw,8.4rem)] font-medium leading-[0.92] tracking-[-0.08em]"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.62 }}
                  >
                    <span className="block text-white">Shreyansh</span>
                    <span className="text-violet block">Sharma</span>
                  </motion.h1>
                  <motion.p
                    className="mt-8 max-w-[720px] text-lg leading-9 text-[#a7b4d6] md:text-[22px]"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.62 }}
                  >
                    I build products that feel like they arrived early: full-stack systems,
                    machine learning workflows, and polished launches that move beyond class
                    demos and into the real world.
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24, duration: 0.52 }}
                  >
                    {["CS junior @ CSULB", "GPA 3.5", "May 2027", "Full-stack • ML • Web3"].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#c9d6fb]"
                        >
                          {chip}
                        </span>
                      ),
                    )}
                  </motion.div>

                  <motion.div
                    className="mt-10 flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.52 }}
                  >
                    <a
                      href="#projects"
                      className="glow-pill rounded-full bg-[linear-gradient(135deg,rgba(91,162,255,0.92),rgba(53,230,211,0.86),rgba(178,107,255,0.86))] px-6 py-3 text-sm font-medium text-[#07101f] transition-transform duration-300 hover:-translate-y-1"
                      data-cursor="link"
                    >
                      View Project Signals
                    </a>
                    <a
                      href="mailto:shreyansh.sharma01@student.csulb.edu"
                      className="rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/[0.09]"
                      data-cursor="link"
                    >
                      Contact Me
                    </a>
                    <a
                      href={withBasePath("/resume.pdf")}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/12 bg-transparent px-6 py-3 text-sm font-medium text-[#9fb5e0] transition-colors duration-300 hover:border-white/20 hover:text-white"
                      data-cursor="link"
                    >
                      Open Resume
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  className="relative flex min-h-[580px] items-center justify-center lg:justify-end"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.18, duration: 0.72 }}
                >
                  <motion.div
                    className="absolute inset-auto h-[460px] w-[460px] rounded-full border border-white/10"
                    style={{ rotate: haloRotate }}
                  >
                    <div className="absolute left-1/2 top-[-12px] h-6 w-6 -translate-x-1/2 rounded-full bg-[#35e6d3] shadow-[0_0_22px_rgba(53,230,211,0.75)]" />
                    <div className="absolute bottom-10 left-[-10px] h-5 w-5 rounded-full bg-[#b26bff] shadow-[0_0_18px_rgba(178,107,255,0.72)]" />
                    <div className="absolute right-8 top-20 h-4 w-4 rounded-full bg-[#5ba2ff] shadow-[0_0_18px_rgba(91,162,255,0.72)]" />
                  </motion.div>

                  <div className="panel-sheen noise-overlay deep-shadow relative w-full max-w-[520px] overflow-hidden rounded-[34px] border border-white/12 bg-[rgba(7,11,24,0.76)] p-5 md:p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,162,255,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(178,107,255,0.22),transparent_32%),radial-gradient(circle_at_center,rgba(53,230,211,0.14),transparent_42%)]" />
                    <div className="relative space-y-5">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.34em] text-[#8ea3d4]">
                        <span>Current signal</span>
                        <span>Live build</span>
                      </div>

                      <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#07101f]">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#f6c44f]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#35e6d3]" />
                          <span className="ml-3 text-[11px] tracking-[0.28em] text-[#7f95bf]">
                            retain-ai-eight.vercel.app
                          </span>
                        </div>
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={withBasePath("/retain-screenshot.png")}
                            alt="RETAIN AI dashboard screenshot"
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {[
                          { label: "Primary mode", value: "Ship real systems" },
                          { label: "Focus", value: "SaaS + ML + Web3" },
                          { label: "Status", value: "Ready for internships" },
                        ].map((signal) => (
                          <div
                            key={signal.label}
                            className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4"
                          >
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[#7284ad]">
                              {signal.label}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-[#e3ebff]">{signal.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.7 }}
            >
              {projects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="panel-sheen relative overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(8,13,28,0.72)] p-5 backdrop-blur-xl"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  data-cursor="link"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.glow}`} />
                  <div className="relative flex min-h-[210px] flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-[#8ea2cf]">
                        <span>{project.type}</span>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="mt-6 text-2xl font-medium tracking-[-0.05em] text-white">
                        {project.name}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#9daed5]">{project.blurb}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#d3defc]">
                      <span>{project.metric}</span>
                      <span>↗</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="identity"
          className="relative min-h-[120vh] px-4 py-24 md:px-8 md:py-32"
        >
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_center,rgba(178,107,255,0.14),transparent_65%)] blur-3xl" />
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              className="lg:sticky lg:top-28 lg:h-fit"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm uppercase tracking-[0.44em] text-[#7d90be]">Identity</p>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
                Built to ship beyond the portfolio.
              </h2>
              <p className="mt-8 max-w-[34rem] text-lg leading-9 text-[#9dadcf]">
                I want the site to feel like a signal from the kind of engineer I already am:
                product-minded, technical, and unafraid of dense systems. The aesthetics matter,
                but the work underneath matters more.
              </p>
            </motion.div>

            <div className="space-y-6">
              {builderCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="panel-sheen relative overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(8,13,28,0.72)] p-7 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      index === 0
                        ? "from-[#5ba2ff]/20 via-transparent to-transparent"
                        : index === 1
                          ? "from-[#35e6d3]/16 via-transparent to-transparent"
                          : "from-[#b26bff]/18 via-transparent to-transparent"
                    }`}
                  />
                  <div className="relative grid gap-6 md:grid-cols-[0.32fr_1fr]">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.36em] text-[#7486b0]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 text-2xl font-medium tracking-[-0.05em] text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="max-w-[48rem] text-base leading-8 text-[#a9b6d8]">
                      {card.copy}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="grid gap-5 md:grid-cols-3"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: 0.16 }}
              >
                {[
                  { label: "Base", value: "Long Beach, California" },
                  { label: "Academic", value: "CSULB • GPA 3.5" },
                  { label: "Graduation", value: "May 2027" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#7589b4]">
                      {fact.label}
                    </p>
                    <p className="mt-4 text-lg text-white">{fact.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={projectRef}
          className="relative h-[340vh] px-4 md:px-8"
        >
          <div className="sticky top-24 mx-auto flex min-h-screen max-w-[1320px] items-center">
            <div className="grid w-full gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <motion.div
                className="space-y-7 lg:pr-8"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm uppercase tracking-[0.46em] text-[#7f92bc]">Project signal corridor</p>
                <h2 className="max-w-[11ch] text-[clamp(2.6rem,5.2vw,5rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white">
                  Scroll through the products at the center of my orbit.
                </h2>
                <p className="max-w-[34rem] text-lg leading-9 text-[#9eadd0]">
                  Every card here is clickable. The stack compresses and sharpens as you move,
                  like you are flying through the portfolio instead of paging through static tiles.
                </p>
                <div className="space-y-4 rounded-[30px] border border-white/10 bg-[rgba(8,13,28,0.6)] p-6 backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[#7183ab]">
                    Signal readout
                  </p>
                  <div className="grid gap-3 text-sm text-[#d7e1ff]">
                    <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
                      <span>Visible on first scroll</span>
                      <span>5 projects</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
                      <span>Deployed product</span>
                      <span>RETAIN AI</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
                      <span>Front-end energy</span>
                      <span>Full cinematic mode</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="relative hidden min-h-[540px] lg:block">
                {projects.map((project, index) => (
                  <ProjectStackCard
                    key={project.name}
                    index={index}
                    progress={projectProgress}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={retainRef} className="relative px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              className="relative"
              style={{ scale: retainScale, rotate: retainRotate }}
            >
              <motion.div
                className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(91,162,255,0.38),transparent_34%),radial-gradient(circle_at_bottom,rgba(178,107,255,0.3),transparent_36%),radial-gradient(circle_at_top_right,rgba(53,230,211,0.22),transparent_28%)] blur-[90px]"
                style={{ opacity: retainGlow }}
              />
              <div className="panel-sheen noise-overlay deep-shadow relative overflow-hidden rounded-[38px] border border-white/12 bg-[rgba(7,11,24,0.82)] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 text-xs uppercase tracking-[0.28em] text-[#8aa0cf]">
                  <span>RETAIN AI</span>
                  <span>Featured launch</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10">
                  <Image
                    src={withBasePath("/retain-screenshot.png")}
                    alt="RETAIN AI dashboard"
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.72 }}
            >
              <p className="text-sm uppercase tracking-[0.44em] text-[#7f92bc]">Spotlight</p>
              <h2 className="mt-5 max-w-[10ch] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
                RETAIN AI is the clearest window into how I build.
              </h2>
              <p className="mt-7 max-w-[36rem] text-lg leading-9 text-[#a4b1d2]">
                It is a real product, not a concept frame. Multi-tenant SaaS, AI response logic,
                customer messaging, and the operational details that make software useful once it
                leaves the demo environment.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  "Gemini + Twilio orchestration wired into real product behavior.",
                  "A polished operator-facing dashboard instead of a throwaway admin shell.",
                  "A shipping mindset: infrastructure, product feel, and user value moving together.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-base leading-8 text-[#d7e2ff]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="relative px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1320px]">
            <motion.div
              className="max-w-[820px]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm uppercase tracking-[0.44em] text-[#7e92bc]">Skills nebula</p>
              <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
                The stack I reach for when something needs to actually launch.
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                className="panel-sheen relative overflow-hidden rounded-[34px] border border-white/10 bg-[rgba(8,13,28,0.72)] p-8 md:p-10"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,230,211,0.18),transparent_22%),radial-gradient(circle_at_left,rgba(91,162,255,0.14),transparent_24%),radial-gradient(circle_at_right,rgba(178,107,255,0.16),transparent_26%)]" />
                <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[30px] border border-white/8 bg-[rgba(5,9,20,0.74)]">
                  <div className="beam-pulse absolute h-[420px] w-[420px] rounded-full border border-white/10" />
                  <div className="absolute h-[300px] w-[300px] rounded-full border border-[#35e6d3]/30" />
                  <div className="absolute h-[180px] w-[180px] rounded-full border border-[#b26bff]/35" />
                  <div className="absolute h-[2px] w-[380px] bg-[linear-gradient(90deg,transparent,rgba(91,162,255,0.8),transparent)]" />
                  <div className="absolute h-[380px] w-[2px] bg-[linear-gradient(180deg,transparent,rgba(178,107,255,0.72),transparent)]" />
                  <div className="relative flex max-w-[460px] flex-wrap items-center justify-center gap-3">
                    {[
                      "Next.js",
                      "Python",
                      "FastAPI",
                      "Docker",
                      "TensorFlow",
                      "PostgreSQL",
                      "TypeScript",
                      "AWS",
                      "Stripe",
                      "Clerk",
                      "React",
                      "Go",
                      "scikit-learn",
                      "Node.js",
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-[#dce5ff]"
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.03 }}
                        whileHover={{
                          scale: 1.06,
                          borderColor: "rgba(53,230,211,0.46)",
                          backgroundColor: "rgba(178,107,255,0.16)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-5">
                {skillColumns.map((column, index) => (
                  <motion.div
                    key={column.label}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.64, delay: index * 0.08 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[#7689b5]">
                      {column.label}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {column.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-[rgba(10,16,35,0.72)] px-4 py-2 text-sm text-[#e0e8ff]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="trajectory"
          className="relative min-h-[125vh] px-4 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <motion.div
              className="lg:sticky lg:top-28 lg:h-fit"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm uppercase tracking-[0.44em] text-[#8093bf]">Trajectory</p>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
                Where I am, where I&apos;m headed, and how fast I move.
              </h2>
              <p className="mt-8 max-w-[34rem] text-lg leading-9 text-[#a4b0d2]">
                I am still early, which is exactly why the ceiling matters more than the label.
                The goal is simple: join a team, earn trust fast, and contribute to products with
                real weight.
              </p>
            </motion.div>

            <div className="relative space-y-6">
              <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-[linear-gradient(180deg,rgba(53,230,211,0.24),rgba(91,162,255,0.34),rgba(178,107,255,0.22))] lg:block" />
              {trajectory.map((step, index) => (
                <motion.div
                  key={step.year}
                  className="relative rounded-[30px] border border-white/10 bg-[rgba(8,13,28,0.72)] p-7 pl-8 backdrop-blur-xl lg:ml-10"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.14 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                >
                  <div className="absolute left-[-2.65rem] top-8 hidden h-5 w-5 rounded-full border border-white/20 bg-[linear-gradient(135deg,#35e6d3,#5ba2ff,#b26bff)] shadow-[0_0_22px_rgba(91,162,255,0.45)] lg:block" />
                  <p className="text-sm uppercase tracking-[0.34em] text-[#7d90ba]">{step.year}</p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.05em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[48rem] text-base leading-8 text-[#a6b3d3]">
                    {step.copy}
                  </p>
                </motion.div>
              ))}

              <motion.a
                href="https://theauralifestyle.org"
                target="_blank"
                rel="noreferrer"
                className="panel-sheen relative block overflow-hidden rounded-[34px] border border-white/10 bg-[rgba(8,13,28,0.78)] p-8 backdrop-blur-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72 }}
                whileHover={{ y: -8 }}
                data-cursor="link"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,184,107,0.18),transparent_30%,transparent_65%,rgba(178,107,255,0.14))]" />
                <div className="relative grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.34em] text-[#8a9dca]">
                      Live side mission
                    </p>
                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-white">
                      Aura Lifestyle
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base leading-8 text-[#dbe4ff]">
                      A brand-facing launch that proves I can switch modes: from operational SaaS
                      tooling to a polished public commerce presence without losing the sense of
                      craft.
                    </p>
                    <div className="flex items-center justify-between text-sm text-[#f6d1a6]">
                      <span>Open live site</span>
                      <span>↗</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative min-h-screen px-4 pb-20 pt-24 md:px-8 md:pb-24 md:pt-32"
        >
          <div className="mx-auto flex min-h-[80vh] max-w-[1320px] items-center">
            <div className="panel-sheen deep-shadow relative w-full overflow-hidden rounded-[40px] border border-white/10 bg-[rgba(7,11,24,0.82)] px-6 py-10 md:px-10 md:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,162,255,0.28),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(178,107,255,0.26),transparent_30%),radial-gradient(circle_at_center,rgba(53,230,211,0.14),transparent_38%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.46em] text-[#8095c2]">Contact</p>
                  <h2 className="mt-6 max-w-[12ch] text-[clamp(3rem,6vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.07em] text-white">
                    Let&apos;s build something people remember.
                  </h2>
                  <p className="mt-8 max-w-[40rem] text-lg leading-9 text-[#aab7d9]">
                    If you need an intern who can contribute to real product work, learn fast,
                    and care deeply about how software feels and functions, I&apos;m ready.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="mailto:shreyansh.sharma01@student.csulb.edu"
                      className="glow-pill rounded-full bg-[linear-gradient(135deg,rgba(91,162,255,0.92),rgba(53,230,211,0.9),rgba(178,107,255,0.92))] px-6 py-3 text-sm font-medium text-[#07101f]"
                      data-cursor="link"
                    >
                      Email Me
                    </a>
                    <a
                      href="https://github.com/shrey1110-dotcom"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white"
                      data-cursor="link"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href="https://linkedin.com/in/sharmasshrey"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white"
                      data-cursor="link"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href={withBasePath("/resume.pdf")}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/12 bg-transparent px-6 py-3 text-sm font-medium text-[#9eb2dd]"
                      data-cursor="link"
                    >
                      Resume ↗
                    </a>
                  </div>
                </div>

                <div className="grid gap-5 self-end">
                  {[
                    {
                      label: "Email",
                      value: "shreyansh.sharma01@student.csulb.edu",
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin.com/in/sharmasshrey",
                    },
                    {
                      label: "GitHub",
                      value: "github.com/shrey1110-dotcom",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5"
                    >
                      <p className="text-[11px] uppercase tracking-[0.34em] text-[#758ab4]">
                        {item.label}
                      </p>
                      <p className="mt-4 break-all text-base leading-8 text-[#e4ecff]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <footer className="mx-auto mt-12 flex max-w-[1320px] flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#6f83ad] md:flex-row md:items-center md:justify-between">
            <p>Shreyansh Sharma · Long Beach, CA · CSULB · Open to internships</p>
            <p>Designed as a cinematic space signal, rebuilt entirely from scratch.</p>
          </footer>
        </section>
      </main>
    </div>
  );
}
