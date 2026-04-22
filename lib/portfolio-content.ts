export type ProjectEntry = {
  blurb: string;
  href: string;
  name: string;
  tags: string[];
  trustNote: string;
  type: string;
  visual: "retain" | "motion" | "cervical" | "flashloan" | "aura";
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#current-focus", label: "Current Focus" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroChips = [
  "CS @ CSULB",
  "May 2027",
  "Full-stack systems",
  "ML workflows",
  "Long Beach, CA",
] as const;

export const ambientRails = [
  [
    "Full-stack engineering",
    "Applied machine learning",
    "Operator-facing software",
    "Next.js • TypeScript • Python",
    "APIs • Databases • Integrations",
  ],
  [
    "Production-minded systems",
    "Product + infrastructure",
    "Built beyond the demo",
    "Long Beach, California",
    "CSULB Computer Science",
  ],
  [
    "Multi-tenant SaaS",
    "Workflow orchestration",
    "User-facing systems",
    "Real integrations",
    "System design",
  ],
] as const;

export const aboutBlocks = [
  {
    copy:
      "Web products, ML workflows, and systems that combine clean interfaces with real operating logic underneath.",
    title: "What I build",
  },
  {
    copy:
      "I like owning things end to end: interface, back end, integrations, and the details that make software reliable once people start using it.",
    title: "How I work",
  },
  {
    copy:
      "Strong product behavior, clear system design, and execution quality that holds up outside a portfolio environment.",
    title: "What I care about",
  },
] as const;

export const projects: ProjectEntry[] = [
  {
    name: "Retain AI",
    href: "https://retain-ai-eight.vercel.app",
    type: "Multi-tenant SaaS",
    blurb:
      "Built an SMS operations platform for lead intake, message routing, and AI-assisted follow-up. Integrated Twilio and Gemini into an operator workflow and designed the system to feel usable beyond a demo environment.",
    trustNote:
      "Why it matters: this is serious solo systems work across multi-tenant product behavior, workflow design, integrations, and applied AI in context.",
    tags: [
      "Next.js",
      "TypeScript",
      "Twilio",
      "Supabase",
      "Gemini",
      "Multi-tenant workflows",
      "Transcript / QA loop",
    ],
    visual: "retain",
  },
  {
    name: "AI Motion Analysis",
    href: "https://github.com/shrey1110-dotcom",
    type: "Computer Vision",
    blurb:
      "Built a pose-analysis pipeline that uses keypoint data to evaluate movement quality and generate biomechanical feedback. Focused on turning model output into something structured, interpretable, and useful.",
    trustNote:
      "Why it matters: it turns raw model output into structured feedback instead of stopping at inference alone.",
    tags: ["Python", "Pose estimation", "Computer vision", "Movement scoring"],
    visual: "motion",
  },
  {
    name: "Cervical Cell CNN",
    href: "https://github.com/shrey1110-dotcom/cervical-cancer-detection",
    type: "Medical ML",
    blurb:
      "Built a transfer-learning image classification pipeline for Pap smear analysis across five classes, with emphasis on preprocessing, training flow, and model evaluation on a medical dataset.",
    trustNote:
      "Why it matters: it shows comfort with preprocessing, training flow, and evaluation on a constrained medical image dataset.",
    tags: ["Python", "TensorFlow", "Transfer learning", "5-class classification"],
    visual: "cervical",
  },
  {
    name: "Flashloan Arbitrage Bot",
    href: "https://gist.github.com/shrey1110-dotcom/ef53904ed184311d8a8dd5587ef11716",
    type: "Web3 Systems",
    blurb:
      "Built a route-scanning arbitrage bot for EVM-based DeFi that evaluates token-pair opportunities and coordinates execution logic under strict timing constraints.",
    trustNote:
      "Why it matters: the work is about route evaluation, execution logic, and system timing under real constraints.",
    tags: ["Solidity / EVM", "DeFi", "Route scanning", "Automation"],
    visual: "flashloan",
  },
  {
    name: "Aura Lifestyle",
    href: "https://theauralifestyle.org",
    type: "Brand Website",
    blurb:
      "Built and launched a public-facing brand site focused on clean presentation, storytelling, and conversion flow for a real business presence.",
    trustNote:
      "Why it matters: it proves range. I can move from systems-heavy work to a polished public launch without losing execution quality.",
    tags: ["Next.js", "Frontend", "Brand design", "Launch"],
    visual: "aura",
  },
];

export const skillGroups = [
  {
    items: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion"],
    label: "Frontend",
  },
  {
    items: ["Python", "Node.js", "FastAPI", "Express", "Supabase", "PostgreSQL"],
    label: "Backend",
  },
  {
    items: ["TensorFlow", "Transfer learning", "Pose estimation", "Model evaluation"],
    label: "ML tooling",
  },
  {
    items: ["Twilio", "Gemini", "APIs", "Databases", "Deployment", "GitHub Pages"],
    label: "Infrastructure and integrations",
  },
] as const;

export const currentFocusCards = [
  {
    copy:
      "Making my strongest work communicate architecture, ownership, and engineering decisions more clearly.",
    title: "Project depth",
  },
  {
    copy:
      "Getting better at the parts of software that sit behind the interface: APIs, integrations, data flow, and reliability.",
    title: "Systems thinking",
  },
  {
    copy:
      "Making the site itself feel simpler, sharper, and more reflective of real engineering maturity.",
    title: "Presentation quality",
  },
] as const;

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
] as const;
