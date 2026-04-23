export type RetainProductEntry = {
  blurb: string;
  href: string;
  name: string;
  pillars: { copy: string; title: string }[];
  stats: { label: string; value: string }[];
  subtitle: string;
  tags: string[];
};

export type ProjectEntry = {
  blurb: string;
  context: string;
  href: string;
  name: string;
  proofPoints: string[];
  tags: string[];
  type: string;
  visual: "motion" | "cervical" | "flashloan" | "aura";
};

export type SkillGroupEntry = {
  description: string;
  icon: "languages" | "frontend" | "backend" | "ml" | "tools";
  items: string[];
  label: string;
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#retain", label: "Retain AI" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroChips = [
  "Retain AI live",
  "Operator software",
  "Applied ML",
  "CSULB Computer Science",
  "Long Beach, CA",
] as const;

export const ambientRails = [
  [
    "Retain AI • live product",
    "Operator-facing software",
    "Full-stack engineering",
    "Twilio • Gemini • Supabase",
    "Workflow orchestration",
  ],
  [
    "Applied machine learning",
    "Messaging systems",
    "APIs • Databases • Integrations",
    "Long Beach, California",
    "Product + infrastructure",
  ],
  [
    "Real businesses, not demo traffic",
    "Multi-tenant SaaS",
    "Next.js • TypeScript • Python",
    "Readable system design",
    "Built to ship",
  ],
] as const;

export const aboutBlocks = [
  {
    copy:
      "Interfaces that stay sharp once real usage, operational edge cases, and product constraints start showing up.",
    title: "Product surfaces",
  },
  {
    copy:
      "APIs, auth, data flow, messaging, and the integration work that makes the surface trustworthy.",
    title: "System layers",
  },
  {
    copy:
      "Clear ownership, fast iteration, and a bias toward shipping work that still reads well after launch.",
    title: "Execution",
  },
] as const;

export const retainProduct: RetainProductEntry = {
  name: "Retain AI",
  href: "https://retain-ai-eight.vercel.app",
  subtitle: "Live operator software for tenant-aware lead intake, routing, and follow-up.",
  blurb:
    "Retain AI is a deployed business product. It runs SMS intake and follow-up workflows for real operators, with messaging, tenant context, Gemini-assisted replies, transcripts, and review all working inside one product surface.",
  pillars: [
    {
      title: "Operator desk",
      copy:
        "Lead state, recent conversations, routing, and follow-up live in one screen built for the person actually doing the work.",
    },
    {
      title: "Integration stack",
      copy:
        "Tenant context, messaging state, transcript history, and AI reply generation behave like one system instead of separate features.",
    },
    {
      title: "Live surface",
      copy:
        "The product is already deployed, so clarity matters as much as functionality. It has to stay usable while the integrations do real work underneath.",
    },
  ],
  stats: [
    { label: "Tenancy", value: "Workspace-aware auth, context, and routing" },
    { label: "Messaging", value: "Twilio intake, send, and status handling" },
    { label: "AI layer", value: "Gemini-generated replies inside the operator flow" },
    { label: "Review", value: "Transcript context and QA around every conversation" },
  ],
  tags: [
    "Next.js",
    "TypeScript",
    "Twilio",
    "Supabase",
    "Gemini",
    "Multi-tenant SaaS",
    "Transcript / QA",
  ],
};

export const projects: ProjectEntry[] = [
  {
    name: "AI Motion Analysis",
    href: "https://github.com/shrey1110-dotcom",
    type: "Computer Vision",
    blurb:
      "Pose-analysis pipeline that turns keypoint streams into movement scoring and readable biomechanical feedback.",
    context:
      "The useful work is in the layer after inference: post-processing noisy output into a scoring system a person can actually use.",
    proofPoints: [
      "17-point pose extraction",
      "Movement scoring logic",
      "Readable coaching output",
    ],
    tags: ["Python", "Pose estimation", "Computer vision", "Movement scoring"],
    visual: "motion",
  },
  {
    name: "Cervical Cell CNN",
    href: "https://github.com/shrey1110-dotcom/cervical-cancer-detection",
    type: "Medical ML",
    blurb:
      "Transfer-learning pipeline for five-class Pap smear classification with disciplined preprocessing, training flow, and evaluation.",
    context:
      "Built around repeatable preprocessing, transfer learning, and evaluation against a medical dataset instead of a one-off notebook run.",
    proofPoints: [
      "Five-class medical image workflow",
      "Reproducible preprocessing pipeline",
      "F1 and confusion-matrix evaluation",
    ],
    tags: ["Python", "TensorFlow", "Transfer learning", "Medical imaging"],
    visual: "cervical",
  },
  {
    name: "Flashloan Arbitrage Bot",
    href: "https://gist.github.com/shrey1110-dotcom/ef53904ed184311d8a8dd5587ef11716",
    type: "Web3 Systems",
    blurb:
      "Route-scanning bot for EVM markets that evaluates token-pair opportunities and coordinates guarded execution under tight timing constraints.",
    context:
      "Discovery, validation, and execution are separated so the system can move fast without turning execution into guesswork.",
    proofPoints: [
      "High-volume route scanning",
      "Execution guards for timing and slippage",
      "Separated discovery and execution paths",
    ],
    tags: ["Solidity / EVM", "DeFi", "Route scanning", "Automation"],
    visual: "flashloan",
  },
  {
    name: "Aura Lifestyle",
    href: "https://theauralifestyle.org",
    type: "Brand Website",
    blurb:
      "Public-facing site shipped for a real company, with clean storytelling, conversion flow, and launch-ready front-end polish.",
    context:
      "This is the front-end range piece: tighter visual execution, cleaner narrative flow, and a live launch for a real business.",
    proofPoints: [
      "Live business-facing launch",
      "Clear brand and conversion structure",
      "Front-end polish at shipping quality",
    ],
    tags: ["Next.js", "Frontend", "Brand design", "Launch"],
    visual: "aura",
  },
];

export const skillGroups: readonly SkillGroupEntry[] = [
  {
    label: "Languages",
    description: "Core languages for product logic, automation, services, and data handling.",
    icon: "languages",
    items: ["TypeScript", "Python", "SQL", "Go", "C/C++"],
  },
  {
    label: "Frontend",
    description: "UI tooling for product surfaces that need to feel fast, legible, and deliberate.",
    icon: "frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    label: "Backend / Data",
    description: "Service behavior, data storage, auth, and the layers behind the interface.",
    icon: "backend",
    items: ["Node.js", "FastAPI", "Express", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    label: "ML / Infra",
    description: "Model workflows, deployment, and system glue when the product needs more than CRUD.",
    icon: "ml",
    items: ["TensorFlow", "scikit-learn", "Docker", "AWS", "Gemini", "Twilio"],
  },
  {
    label: "Tools / Platforms",
    description: "Deployment, collaboration, auth, payments, and practical platform work around shipping.",
    icon: "tools",
    items: ["Vercel", "GitHub", "Stripe", "Clerk", "REST APIs", "Cloudflare Workers"],
  },
];

export const contactLinks = [
  {
    href: "mailto:shreyansh.sharma01@student.csulb.edu",
    label: "Email",
    value: "shreyansh.sharma01@student.csulb.edu",
  },
  {
    href: "https://github.com/shrey1110-dotcom",
    label: "GitHub",
    value: "github.com/shrey1110-dotcom",
  },
  {
    href: "https://linkedin.com/in/sharmasshrey",
    label: "LinkedIn",
    value: "linkedin.com/in/sharmasshrey",
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    value: "Open PDF",
  },
] as const;
