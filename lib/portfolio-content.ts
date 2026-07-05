export type RetainProductEntry = {
  blurb: string;
  ctaLabel: string;
  featureCards: { copy: string; title: string }[];
  href: string;
  integrations: string[];
  liveMeta: string;
  name: string;
  roleLine: string;
  stats: {
    animation:
      | { compact?: boolean; kind: "int"; end: number; suffix?: string }
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
  resourceLinks?: { href: string; label: string }[];
  surfaces?: string[];
  tags: string[];
  tagline?: string;
  type: string;
  visual:
    | "resilient"
    | "kala"
    | "veridegree"
    | "scopekit"
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

export type ExperienceEntry = {
  bullets: string[];
  company: string;
  date: string;
  description: string;
  featured?: boolean;
  href?: string;
  logoAlt: string;
  logoSrc: string;
  meta: { label: string; value: string }[];
  role: string;
  tags: string[];
};

export const navItems = [
  { href: "#retain", label: "Work" },
  { href: "#experience", label: "Work Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroActions = [
  {
    href: "mailto:shreyansh.sharma01@student.csulb.edu",
    label: "Email",
    value: "Direct outreach",
  },
  {
    href: "https://linkedin.com/in/sharmasshrey",
    label: "LinkedIn",
    value: "Professional profile",
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    value: "Latest PDF",
  },
  {
    href: "https://github.com/shrey1110-dotcom",
    label: "GitHub",
    value: "Code and repos",
  },
] as const;

export const ambientRails = [
  [
    "Founder-built product",
    "Full-stack engineering",
    "Applied ML",
    "Live systems",
    "Long Beach, California",
  ],
  [
    "Customer messaging",
    "Aid distribution",
    "Credential verification",
    "AI marketplace",
    "Live product windows",
  ],
  [
    "APIs • data flow • integrations",
    "Computer vision",
    "Medical ML",
    "EVM automation",
    "CSULB computer science",
  ],
] as const;

export const heroStats = [
  { value: "7", label: "Projects shipped" },
  { value: "5", label: "Live in production" },
  { value: "4M+", label: "Messages stress-tested" },
  { value: "500+", label: "Concurrent users tested" },
] as const;

export const retainProduct: RetainProductEntry = {
  name: "RETAIN AI",
  href: "https://retain-ai-eight.vercel.app",
  ctaLabel: "Open platform →",
  liveMeta: "retain-ai-eight.vercel.app",
  roleLine: "RETAIN AI · Founder & Solo Engineer · 2025–Present",
  subtitle: "AI communications infrastructure for customer-facing businesses.",
  blurb:
    "I built and run the full product: onboarding, dashboard, tenant settings, SMS flow, memory, and AI response logic for local service businesses.",
  featureCards: [
    {
      title: "Hybrid orchestration",
      copy:
        "Deterministic rules + Gemini LLM + memory-driven context. Falls back gracefully at every layer.",
    },
    {
      title: "Multi-tenant runtime",
      copy:
        "Business identity, tone, FAQs, hours, and workflows are all runtime-configurable. Zero redeploys per tenant.",
    },
    {
      title: "Voice in progress",
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
      animation: { kind: "int", end: 4000000, compact: true, suffix: "+" },
    },
    {
      label: "p95 response time under load",
      value: "150–250ms",
      animation: { kind: "range", start: 150, end: 250, suffix: "ms" },
    },
    {
      label: "Concurrent users stress-tested",
      value: "500+",
      animation: { kind: "int", end: 500, suffix: "+" },
    },
    {
      label: "Error rate under heavy load",
      value: "<0.4%",
      animation: { kind: "text" },
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
    name: "ScopeKit",
    href: "https://scopekit-sandy.vercel.app",
    embedHref: "https://scopekit-sandy.vercel.app",
    browserLabel: "Developer tool",
    browserMeta: "scopekit-sandy.vercel.app",
    ctaLabel: "Open demo",
    type: "Developer Tool",
    tagline: "The right files, not a graph to wander.",
    blurb:
      "Gives Claude, Codex, and Cursor task-ready context packs before they search.",
    features: [
      "Packs the files, symbols, tests, risks, and commands needed for one job.",
      "Writes repo-local setup instructions for Claude, Codex, Cursor, and MCP.",
      "Indexes locally with no API key and no LLM routing.",
      "Cuts supplied context before agents spend tokens searching.",
    ],
    context:
      "Built as a local CLI: index the repo, resolve the useful files, then write a compact pack an agent can act on.",
    metrics: [
      { value: "~1,280×", label: "Baseline-equivalent context compression" },
      { value: "18×", label: "Scoped task-context reduction vs Graphify best-effort" },
      { value: "No", label: "LLM routing" },
      { value: "npm", label: "Published package" },
    ],
    proofPoints: [
      "Measured auth-discovery task",
      "8 files / 7 concepts recovered",
      "Codex usage parsed",
      "No LLM routing",
    ],
    resourceLinks: [
      { label: "Website", href: "https://scopekit-sandy.vercel.app" },
      { label: "GitHub", href: "https://github.com/shrey1110-dotcom/CLAUDE_API_SAVER" },
      { label: "npm", href: "https://www.npmjs.com/package/scopekit" },
    ],
    tags: ["CLI", "Claude", "Codex", "Cursor", "MCP", "npm", "Context Packs"],
    visual: "scopekit",
  },
  {
    name: "ResilientAid",
    href: "https://resilient-aid.vercel.app",
    embedHref: "https://resilient-aid.vercel.app",
    browserLabel: "Aid workflow",
    browserMeta: "resilient-aid.vercel.app",
    ctaLabel: "Open demo",
    type: "Aid protocol",
    blurb:
      "Moves aid money from donors to beneficiaries and vendors with full on-chain tracking.",
    features: [
      "Four role-specific surfaces: admin, donor, beneficiary, and vendor POS.",
      "Donor flow shows fund movement instead of hiding it behind a dashboard total.",
      "Vendor settlement is designed around fast redemption and low-friction checkout.",
      "Polygon Amoy transactions make transfer history inspectable end to end.",
    ],
    context:
      "I built the role flow, wallet connection, vendor redemption path, and on-chain transaction trail.",
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
    embedHref: "https://artisian.vercel.app/trends",
    browserLabel: "Marketplace demo",
    browserMeta: "artisian.vercel.app/trends",
    ctaLabel: "Open demo",
    type: "AI marketplace",
    blurb:
      "A marketplace prototype for discovering handmade goods and estimating cultural origin from product photos.",
    features: [
      "Swipe feed combines artisan stories, products, and discovery in one surface.",
      "Marketplace flow includes listings, trends, seller context, and account views.",
      "Image analysis maps product photos to 120+ cultural craft categories.",
      "AI output appears inside the shopping flow, not as a detached model demo.",
    ],
    context:
      "The hard part was keeping browsing, feed discovery, and image analysis in one product flow instead of separate demos.",
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
    ctaLabel: "Open demo",
    type: "Credential verification",
    blurb:
      "Lets schools issue digital credentials once and gives employers a fast verification path.",
    features: [
      "Institutions issue credentials once instead of re-sending PDFs.",
      "Students hold wallet-based academic records they can present later.",
      "Employers verify credential status from a public verification flow.",
      "Selective disclosure reduces fraud without adding manual review.",
    ],
    context:
      "Built around Algorand assets, issuer-controlled records, and selective disclosure for employer checks.",
    metrics: [
      { value: "Mainnet", label: "Algorand deployment" },
      { value: "Soulbound", label: "Academic records" },
      { value: "Instant", label: "Employer verification" },
      { value: "Private", label: "Selective disclosure" },
    ],
    proofPoints: [
      "Algorand credential issuance",
      "Issuer / student / employer flow",
      "Wallet-based credential state",
      "Selective disclosure workflow",
    ],
    tags: ["Algorand", "Soulbound credentials", "Zero-knowledge privacy", "Academic verification"],
    visual: "veridegree",
  },
  {
    name: "AI Motion Analysis",
    href: "https://github.com/shrey1110-dotcom",
    ctaLabel: "View GitHub",
    type: "Computer vision",
    blurb:
      "Turns pose keypoints into exercise-form scores and readable coaching feedback.",
    features: [
      "Tracks 17 body keypoints across video frames.",
      "Scores depth, balance, tempo, and alignment.",
      "Turns pose output into readable coaching notes.",
      "Highlights the mistakes that matter instead of dumping raw keypoints.",
    ],
    context:
      "The useful work is after inference: cleaning noisy keypoints and turning them into a scoring system.",
    proofPoints: [
      "17-point MoveNet pose sequences",
      "PyTorch scoring pipeline",
      "Readable coaching output",
    ],
    tags: ["Python", "PyTorch", "MoveNet", "OpenCV"],
    visual: "motion",
  },
  {
    name: "Cervical Cell CNN",
    href: "https://github.com/shrey1110-dotcom/cervical-cancer-detection",
    ctaLabel: "View GitHub",
    type: "Medical ML",
    blurb:
      "Classifies Pap smear images across five cell types with a repeatable training and evaluation flow.",
    features: [
      "Trained on 4,000 labeled images across five classes.",
      "Preprocessing stays consistent before training and evaluation.",
      "Transfer learning speeds up training and improves performance.",
      "Class confidence makes model mistakes easier to inspect.",
    ],
    context:
      "Built around consistent preprocessing, transfer learning, and evaluation against a medical dataset.",
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
    ctaLabel: "View gist",
    type: "Web3 systems",
    blurb:
      "Scans DeFi routes and filters out trades that are too risky or too slow to execute.",
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

export const featuredProjects = projects.slice(0, 4);
export const archiveProjects = projects.slice(4);

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    company: "Rezolve.ai",
    role: "AI Voice Engineer · Contract",
    date: "2025",
    href: "https://rezolve.ai",
    logoSrc: "/rezolve-ai-logo.png",
    logoAlt: "Rezolve.ai logo",
    meta: [
      { label: "Employees", value: "300–350" },
      { label: "Valuation", value: "Undisclosed · VC-backed" },
      { label: "Backed by", value: "SIG Venture Capital · Exfinity Ventures" },
      { label: "Recognition", value: "Forrester 2026 Landscape Report" },
      { label: "Listed", value: "NASDAQ (RZLV)" },
    ],
    description:
      "Contributed to the early-stage development of Rezolve VoiceIQ — an enterprise AI voice assistant that handles inbound IT and HR support calls with human-like conversation, real-time knowledge retrieval, and intelligent escalation.",
    bullets: [
      "Helped build conversational flow logic for the voice assistant's intent recognition and call handling pipeline",
      "Worked on integrating the voice layer with enterprise ITSM systems for real-time ticket creation and escalation",
      "Contributed during early startup phase before the product scaled to Fortune 500 deployments",
    ],
    tags: ["Voice AI", "NLP", "ITSM Integration", "Conversational AI", "LLM Orchestration"],
  },
  {
    company: "RETAIN AI",
    role: "Founder & Solo Engineer",
    date: "May 2026 – Present",
    href: "https://retain-ai-eight.vercel.app",
    logoSrc: "/retain-ai-wordmark.svg",
    logoAlt: "RETAIN AI logo",
    meta: [
      { label: "Employees", value: "1–10" },
      { label: "Launch", value: "May 1, 2026" },
      { label: "Status", value: "Live · Self-funded" },
      { label: "Stack", value: "Next.js · Supabase · Gemini · Twilio" },
    ],
    description:
      "Founded and built RETAIN AI — live AI communications infrastructure for local service businesses. Sole engineer across product, infrastructure, and AI integration.",
    bullets: [
      "Architected multi-tenant runtime with business-specific rules, tone, FAQs, and escalation logic per tenant",
      "Built hybrid AI orchestration combining deterministic routing, Gemini LLM, and conversation memory",
      "Stress tested to 500+ concurrent users — 4M+ message exchanges, 150–250ms p95, <0.4% error rate under load",
      "Voice assistant extension currently in progress",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Gemini", "Twilio", "Vercel", "Multi-tenant SaaS"],
  },
] as const;

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
