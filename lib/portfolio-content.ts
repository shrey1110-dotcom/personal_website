export type RetainProductEntry = {
  blurb: string;
  ctaLabel: string;
  featureCards: { copy: string; title: string }[];
  features: string[];
  href: string;
  integrations: string[];
  liveMeta: string;
  name: string;
  proofMetrics: { label: string; value: string }[];
  roleLine: string;
  stats: {
    animation:
      | { kind: "int"; end: number; suffix?: string }
      | { decimals: number; end: number; kind: "decimal"; suffix?: string }
      | { end: number; kind: "range"; start: number; suffix?: string }
      | { kind: "text" };
    label: string;
    value: string;
  }[];
  subtitle: string;
  tags: string[];
};

export type ProjectEntry = {
  blurb: string;
  browserMeta?: string;
  browserLabel?: string;
  context?: string;
  ctaLabel?: string;
  embedHref?: string;
  featureCards?: { copy: string; title: string }[];
  features: string[];
  href: string;
  integrations?: string[];
  interfaceCards?: { href: string; label: string }[];
  metrics?: { label: string; value: string }[];
  name: string;
  proofPoints?: string[];
  surfaces?: string[];
  tags: string[];
  tagline?: string;
  type: string;
  visual:
    | "resilient"
    | "kala"
    | "veridegree"
    | "motion"
    | "cervical"
    | "flashloan";
};

export type SkillGroupEntry = {
  description: string;
  icon: "languages" | "frontend" | "backend" | "ml" | "tools";
  items: string[];
  label: string;
};

export const navItems = [
  { href: "#retain", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroActions = [
  {
    href: "mailto:shreyansh.sharma01@student.csulb.edu",
    label: "Email",
    value: "shreyansh.sharma01@student.csulb.edu",
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
  {
    href: "https://github.com/shrey1110-dotcom",
    label: "GitHub",
    value: "github.com/shrey1110-dotcom",
  },
] as const;

export const ambientRails = [
  [
    "Real products in production",
    "Full-stack engineering",
    "ML-backed features",
    "Built for real use",
    "Long Beach, California",
  ],
  [
    "Customer messaging",
    "Aid distribution",
    "Credential verification",
    "AI marketplace",
    "Clear product demos",
  ],
  [
    "APIs • data flow • integrations",
    "Computer vision",
    "Medical ML",
    "EVM automation",
    "CSULB Computer Science",
  ],
] as const;

export const heroStats = [
  { value: "7", label: "Projects shipped" },
  { value: "5", label: "Live in production" },
  { value: "4M+", label: "Messages stress-tested" },
  { value: "500", label: "Concurrent users tested" },
] as const;

export const retainProduct: RetainProductEntry = {
  name: "RETAIN AI",
  href: "https://retain-ai-eight.vercel.app",
  ctaLabel: "Open platform →",
  liveMeta: "retain-ai-eight.vercel.app",
  roleLine: "RETAIN AI · Founder & Solo Engineer · 2025–Present",
  subtitle: "AI communications infrastructure for customer-facing businesses.",
  blurb:
    "Built and operate live AI communications infrastructure. It handles inbound customer messages for local service businesses with business-specific rules, memory, and AI assistance instead of generic chatbot replies.",
  features: [
    "Each business gets its own reply rules, FAQs, tone, and escalation logic.",
    "The system decides when to answer directly and when to bring in Gemini.",
    "Conversation memory keeps follow-ups consistent instead of starting cold each time.",
    "The same backend is now being extended into a voice assistant for phone calls.",
  ],
  proofMetrics: [
    { value: "4M+", label: "Messages stress-tested" },
    { value: "10,000+", label: "Scenario variations" },
    { value: "150–250ms", label: "p95 under load" },
    { value: "500", label: "Concurrent users tested" },
  ],
  featureCards: [
    {
      title: "HYBRID ORCHESTRATION",
      copy:
        "Deterministic rules + Gemini LLM + memory-driven context. Falls back gracefully at every layer.",
    },
    {
      title: "MULTI-TENANT RUNTIME",
      copy:
        "Business identity, tone, FAQs, hours, and workflows are all runtime-configurable. Zero redeploys per tenant.",
    },
    {
      title: "VOICE — IN PROGRESS",
      copy:
        "Phone-answering assistant extending the same orchestration pipeline to inbound calls.",
    },
  ],
  stats: [
    {
      label: "Scenario variations analyzed",
      value: "10,000+",
      animation: { kind: "int", end: 10000, suffix: "+" },
    },
    {
      label: "Message exchanges stress-tested",
      value: "4M+",
      animation: { kind: "int", end: 4, suffix: "M+" },
    },
    {
      label: "p95 response time under load",
      value: "150–250ms",
      animation: { kind: "range", start: 150, end: 250, suffix: "ms" },
    },
    {
      label: "Concurrent users stress-tested",
      value: "500",
      animation: { kind: "int", end: 500 },
    },
    {
      label: "Error rate under heavy load",
      value: "0.4%",
      animation: { kind: "decimal", end: 0.4, decimals: 1, suffix: "%" },
    },
    {
      label: "Runtime-configurable per business",
      value: "Multi-tenant",
      animation: { kind: "text" },
    },
  ],
  integrations: ["Supabase", "Gemini", "Twilio", "Playwright", "Vercel"],
  tags: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Gemini",
    "Twilio",
    "Vercel",
    "Playwright",
    "Vitest",
  ],
};

export const projects: ProjectEntry[] = [
  {
    name: "ResilientAid",
    href: "https://resilient-aid.vercel.app",
    embedHref: "https://resilient-aid.vercel.app",
    browserLabel: "Aid workflow",
    browserMeta: "resilient-aid.vercel.app",
    ctaLabel: "Open →",
    type: "Aid protocol",
    blurb:
      "Tracks how donated funds move from donors to beneficiaries and vendors through a transparent on-chain aid flow.",
    features: [
      "Separate dashboards handle admin, donor, beneficiary, and vendor work.",
      "Donors can see where funds go instead of sending money into a black box.",
      "Beneficiaries receive credits quickly and vendors settle in under two seconds.",
      "Every transfer is recorded on-chain with zero platform fees.",
    ],
    context:
      "Offline-capable distribution, zero platform fees, sub-two-second settlement, and complete on-chain traceability are all designed into the runtime instead of added as separate features.",
    metrics: [
      { value: "425 tx/s", label: "Network throughput" },
      { value: "0%", label: "Platform fees" },
      { value: "<2s", label: "Settlement time" },
      { value: "100%", label: "On-chain transparency" },
      { value: "4", label: "Stakeholder interfaces" },
      { value: "Live", label: "On Polygon Amoy" },
    ],
    integrations: ["Polygon", "Chainlink", "The Graph", "Bybit", "Alchemy"],
    interfaceCards: [
      { label: "Admin Portal", href: "https://resilient-aid.vercel.app/admin" },
      { label: "Donor Platform", href: "https://resilient-aid.vercel.app/donor" },
      { label: "Beneficiary App", href: "https://resilient-aid.vercel.app/beneficiary" },
      { label: "Vendor POS", href: "https://resilient-aid.vercel.app/vendor" },
    ],
    tags: ["Polygon", "Smart contracts", "Aid distribution", "Offline-capable", "Stablecoin settlement"],
    visual: "resilient",
  },
  {
    name: "KalaAI",
    href: "https://artisian.vercel.app",
    embedHref: "https://artisian.vercel.app",
    browserLabel: "Marketplace demo",
    browserMeta: "artisian.vercel.app",
    ctaLabel: "Open →",
    type: "AI marketplace",
    blurb:
      "Helps people discover and buy handmade goods while AI identifies the likely craft origin from product photos.",
    features: [
      "A swipeable feed surfaces artisans, products, and short stories quickly.",
      "Buyers can browse live listings, trends, and seller pages in one place.",
      "Image analysis suggests the craft origin across 120+ categories.",
      "The AI result shows up inside the shopping flow instead of as a separate tool.",
    ],
    context:
      "The product combines discovery, marketplace behavior, and computer vision into one consumer-facing surface instead of isolating AI as a separate demo.",
    metrics: [
      { value: "120+", label: "Cultural detection categories" },
      { value: "5", label: "Product surfaces" },
      { value: "AI", label: "Origin detection from imagery" },
      { value: "Live", label: "Deployed on Vercel" },
    ],
    surfaces: ["Home", "Shorts Feed", "Marketplace", "Trends", "Account"],
    featureCards: [
      {
        title: "AI CULTURAL DETECTION",
        copy:
          "Identifies cultural origin and provenance from product imagery across 120+ craft categories.",
      },
      {
        title: "SHORTS-STYLE DISCOVERY",
        copy:
          "Swipeable discovery feed for artisan stories and handcrafted goods — built for engagement.",
      },
      {
        title: "LIVE MARKETPLACE",
        copy:
          "Full buyer/seller infrastructure with listings, accounts, and trend tracking.",
      },
    ],
    tags: ["AI", "Computer Vision", "Full-stack", "Marketplace", "Next.js", "Vercel"],
    visual: "kala",
  },
  {
    name: "VeriDegree",
    href: "https://veri-degree.vercel.app",
    embedHref: "https://veri-degree.vercel.app",
    browserLabel: "Verification flow",
    browserMeta: "veri-degree.vercel.app",
    ctaLabel: "Open →",
    type: "Credential verification",
    blurb:
      "Issues digital credentials that schools can publish once and employers can verify in seconds.",
    features: [
      "Schools issue tamper-resistant records instead of sending PDFs around.",
      "Students keep the credential in a wallet they control.",
      "Employers can verify status immediately from a simple public check.",
      "The verification flow is built to reduce fraud without adding manual review.",
    ],
    context:
      "The protocol uses Algorand soulbound assets and privacy-preserving verification flows so institutions can issue once and verifiers can trust the credential state immediately.",
    proofPoints: [
      "Mainnet credential protocol",
      "Soulbound academic records",
      "Private verification workflow",
    ],
    tags: ["Algorand", "Soulbound credentials", "Zero-knowledge privacy", "Academic verification"],
    visual: "veridegree",
  },
  {
    name: "AI Motion Analysis",
    href: "https://github.com/shrey1110-dotcom",
    ctaLabel: "Open →",
    type: "Computer vision",
    blurb:
      "Scores exercise form from pose data and turns it into coaching feedback someone can actually use.",
    features: [
      "Tracks 17 body keypoints across video frames.",
      "Scores depth, balance, tempo, and alignment.",
      "Turns raw pose output into readable coaching notes.",
      "Built to make model output useful outside a notebook.",
    ],
    context:
      "The useful work is in the layer after inference: post-processing noisy output into a scoring system a person can actually use.",
    proofPoints: [
      "17-point MoveNet sequences",
      "Movement scoring logic",
      "Readable coaching output",
    ],
    tags: ["Python", "Pose estimation", "Computer vision", "Movement scoring"],
    visual: "motion",
  },
  {
    name: "Cervical Cell CNN",
    href: "https://github.com/shrey1110-dotcom/cervical-cancer-detection",
    ctaLabel: "Open →",
    type: "Medical ML",
    blurb:
      "Classifies Pap smear images across five cell types in a medical imaging workflow that is easier to train, inspect, and evaluate.",
    features: [
      "Trained on 4,000 labeled images across five classes.",
      "Preprocessing stays consistent before training and evaluation.",
      "Transfer learning speeds up training and improves performance.",
      "Class confidence makes model mistakes easier to inspect.",
    ],
    context:
      "Built around repeatable preprocessing, transfer learning, and evaluation against a medical dataset instead of a one-off notebook run.",
    proofPoints: [
      "4,000 Pap smear images",
      "Five-class medical image workflow",
      "Reproducible preprocessing pipeline",
      "Transfer-learning evaluation",
    ],
    tags: ["Python", "TensorFlow", "Transfer learning", "Medical imaging"],
    visual: "cervical",
  },
  {
    name: "Flashloan Bot",
    href: "https://gist.github.com/shrey1110-dotcom/ef53904ed184311d8a8dd5587ef11716",
    ctaLabel: "Open →",
    type: "Web3 systems",
    blurb:
      "Scans DeFi markets for arbitrage routes and filters out trades that are too risky or too slow to execute.",
    features: [
      "Checks 13,240+ token pairs for route opportunities.",
      "Separates scanning, validation, and execution into clear stages.",
      "Filters by spread, gas cost, and slippage before acting.",
      "Built for automated decisions instead of manual market watching.",
    ],
    context:
      "Discovery, validation, and execution are separated so the system can move fast without turning execution into guesswork.",
    proofPoints: [
      "13,240+ token pairs evaluated",
      "Execution guards for timing and slippage",
      "Separated discovery and execution paths",
    ],
    tags: ["Solidity / EVM", "DeFi", "Route scanning", "Automation"],
    visual: "flashloan",
  },
];

export const featuredProjects = projects.slice(0, 3);
export const archiveProjects = projects.slice(3);

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
