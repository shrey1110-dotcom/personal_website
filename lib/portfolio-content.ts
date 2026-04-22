export type ProjectEntry = {
  blurb: string;
  href: string;
  name: string;
  proofPoints: string[];
  tags: string[];
  trustNote: string;
  type: string;
  visual: "retain" | "motion" | "cervical" | "flashloan" | "aura";
};

export type SkillGroupEntry = {
  description: string;
  icon: "languages" | "frontend" | "backend" | "ml" | "tools";
  items: string[];
  label: string;
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
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
    "Multi-tenant SaaS",
    "APIs • Databases • Integrations",
    "Operator-facing software",
  ],
  [
    "Product + infrastructure",
    "Built beyond the demo",
    "Long Beach, California",
    "CSULB Computer Science",
    "Workflow orchestration",
  ],
  [
    "Production-minded systems",
    "User-facing systems",
    "Next.js • TypeScript • Python",
    "System design",
    "Real integrations",
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
    proofPoints: [
      "Twilio lead intake and messaging workflow",
      "Gemini-assisted follow-up inside an operator dashboard",
      "Business switching, transcript context, and QA support",
    ],
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
    proofPoints: [
      "17-point keypoint sequences from uploaded or live movement",
      "Joint-angle and technique scoring logic for two movement types",
      "Structured coaching feedback instead of raw model output",
    ],
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
    proofPoints: [
      "Transfer-learning pipeline on roughly 4,000 SIPaKMeD images",
      "Five-class classification workflow with reproducible preprocessing",
      "Evaluation using accuracy, F1-score, and confusion matrices",
    ],
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
    proofPoints: [
      "Python scanners evaluating thousands of token-pair routes",
      "Execution logic built around EVM timing constraints",
      "Route discovery, opportunity checks, and automation guards",
    ],
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
    proofPoints: [
      "Live public-facing launch for a real business presence",
      "Clean storytelling, product presentation, and conversion flow",
      "Maintained shipping workflows across storefront content and UI",
    ],
    tags: ["Next.js", "Frontend", "Brand design", "Launch"],
    visual: "aura",
  },
];

export const skillGroups: readonly SkillGroupEntry[] = [
  {
    label: "Languages",
    description: "The languages I write most when building products, automation, and ML workflows.",
    icon: "languages",
    items: ["TypeScript", "Python", "SQL", "Go", "C/C++"],
  },
  {
    label: "Frontend",
    description: "Interface tools for product surfaces that need to feel polished and reliable.",
    icon: "frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    label: "Backend / Data",
    description: "API, database, and auth layers for systems with real application behavior.",
    icon: "backend",
    items: ["Node.js", "FastAPI", "Express", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    label: "ML / Infra",
    description: "The tooling I use when projects need model pipelines, deployment, or systems glue.",
    icon: "ml",
    items: ["TensorFlow", "scikit-learn", "Docker", "AWS", "Gemini", "Twilio"],
  },
  {
    label: "Tools / Platforms",
    description: "Practical tooling for shipping, deployment, payments, and collaborative workflows.",
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
