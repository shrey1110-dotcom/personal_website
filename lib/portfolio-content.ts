export type RetainProductEntry = {
  blurb: string;
  ctaLabel: string;
  featureCards: { copy: string; title: string }[];
  href: string;
  integrations: string[];
  name: string;
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
  context: string;
  ctaLabel?: string;
  featureCards?: { copy: string; title: string }[];
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
  { href: "#home", label: "Home" },
  { href: "#retain", label: "Retain AI" },
  { href: "#work", label: "Projects" },
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
    "Retain AI • live communications infrastructure",
    "4M+ messages stress-tested",
    "Multi-tenant runtime",
    "Gemini • Twilio • Supabase",
    "500 concurrent users tested",
  ],
  [
    "ResilientAid • 425 tx/s",
    "0% platform fees",
    "KalaAI • 120+ craft categories",
    "VeriDegree • on-chain credentials",
    "Long Beach, California",
  ],
  [
    "17-point pose scoring",
    "4,000 Pap smear images",
    "13,240+ token pairs scanned",
    "CSULB Computer Science",
    "Built to ship",
  ],
] as const;

export const heroStats = [
  { value: "7", label: "Projects shipped" },
  { value: "5", label: "Live in production" },
  { value: "4M+", label: "Messages stress-tested" },
  { value: "500", label: "Concurrent users tested" },
] as const;

export const aboutBuildLines = [
  {
    index: "01",
    copy:
      "Built AI communications infrastructure handling 4M+ stress-tested message exchanges across multi-tenant business deployments",
  },
  {
    index: "02",
    copy:
      "Shipped a decentralized aid protocol processing 425 tx/s with 0% platform fees on Polygon — four live stakeholder interfaces",
  },
  {
    index: "03",
    copy:
      "Built a global artisan marketplace with AI cultural origin detection across 120+ categories",
  },
  {
    index: "04",
    copy:
      "Trained a medical classifier on 4,000 Pap smear images across 5 cell classes with transfer learning",
  },
  {
    index: "05",
    copy:
      "Built a multi-DEX EVM scanner evaluating 13,240+ token pairs for real-time arbitrage routing",
  },
  {
    index: "06",
    copy:
      "Engineered biomechanical scoring from 17-point MoveNet pose keypoint sequences",
  },
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
  name: "RETAIN AI",
  href: "https://retain-ai-eight.vercel.app",
  ctaLabel: "Open platform →",
  subtitle: "AI communications infrastructure for customer-facing businesses.",
  blurb:
    "Built and deployed a multi-tenant AI communications platform that handles inbound customer messaging for local service businesses. Hybrid orchestration pipeline combines deterministic routing, Gemini LLM, and conversation memory to respond like a trained front-desk operator — not a chatbot. Voice assistant in progress.",
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
    ctaLabel: "Open →",
    type: "Aid Protocol",
    tagline: "Aid that actually reaches people.",
    blurb:
      "Built a decentralized aid distribution protocol with donor, admin, beneficiary, and vendor flows coordinated across one on-chain system.",
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
    ctaLabel: "Open →",
    type: "AI MARKETPLACE",
    tagline: "Discover stories behind every craft.",
    blurb:
      "Built a full-stack global artisan marketplace with AI-powered cultural origin detection. Shoppers discover handcrafted goods through a shorts-style feed, browse live market listings, and track cultural trends — while AI identifies provenance and origin from product imagery across 120+ craft categories.",
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
    ctaLabel: "Open →",
    type: "Credential Verification",
    tagline: "Trust, mathematically proven.",
    blurb:
      "Built a decentralized academic credential platform that issues tamper-resistant records and verifies qualifications without relying on manual document review.",
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
    type: "Computer Vision",
    blurb:
      "Pose-analysis pipeline that turns keypoint streams into movement scoring and readable biomechanical feedback.",
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
    type: "Medical ML",
    blurb:
      "Transfer-learning pipeline for five-class Pap smear classification with disciplined preprocessing, training flow, and evaluation.",
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
    type: "Web3 Systems",
    blurb:
      "Route-scanning bot for EVM markets that evaluates token-pair opportunities and coordinates guarded execution under tight timing constraints.",
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
