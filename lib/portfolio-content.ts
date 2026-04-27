export type RetainProductEntry = {
  blurb: string;
  ctaLabel: string;
  featureCards: { copy: string; title: string }[];
  features: string[];
  href: string;
  integrations: string[];
  name: string;
  proofMetrics: { label: string; value: string }[];
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
  context?: string;
  ctaLabel?: string;
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
    "Live communications product",
    "Full-stack engineering",
    "Applied machine learning",
    "Product + infrastructure",
    "Long Beach, California",
  ],
  [
    "Multi-tenant runtime",
    "On-chain aid protocol",
    "AI marketplace",
    "Credential verification",
    "Built to be used",
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
  subtitle: "AI communications infrastructure for customer-facing businesses.",
  blurb:
    "Handles inbound customer messaging for local service businesses and responds with business-specific routing, AI assistance, and conversation memory instead of generic chatbot behavior.",
  features: [
    "Tenant-specific business rules, FAQs, tone, and availability managed at runtime",
    "Hybrid response flow that routes deterministically before handing off to Gemini",
    "Conversation memory and QA loops designed for repeat use, not one-off demos",
    "Voice assistant in progress on top of the same orchestration pipeline",
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
    ctaLabel: "Open →",
    type: "Aid protocol",
    blurb:
      "Moves aid from donors to beneficiaries through a tracked on-chain flow with separate interfaces for admins, donors, beneficiaries, and vendors.",
    features: [
      "Four role-specific product surfaces built on one shared protocol",
      "Sub-two-second settlement on Polygon Amoy with zero platform fees",
      "Every transfer stays transparent and traceable on-chain",
      "Distribution flow designed for real-world disbursement, not token theater",
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
    ctaLabel: "Open →",
    type: "AI marketplace",
    blurb:
      "Helps shoppers discover handcrafted goods through a marketplace that recognizes cultural origin from product images and turns that into a stronger buying experience.",
    features: [
      "AI origin detection across 120+ craft categories",
      "Shorts-style discovery feed built around artisan stories and products",
      "Live marketplace flows for browsing, listings, accounts, and trends",
      "Consumer product surface that makes the model output useful in context",
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
    ctaLabel: "Open →",
    type: "Credential verification",
    blurb:
      "Issues tamper-resistant academic credentials and lets institutions or employers verify them without relying on manual document review.",
    features: [
      "On-chain credential issuance instead of PDF-heavy manual workflows",
      "Soulbound records that stay attached to the holder",
      "Verification flow designed for fast trust checks",
      "Privacy-aware credential logic built for real institutional use",
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
      "Turns pose keypoints into movement scores and readable coaching feedback for exercises that need more than raw model output.",
    features: [
      "17-point MoveNet keypoints processed across frame sequences",
      "Biomechanical scoring logic on top of raw pose estimation",
      "Readable feedback designed for a person, not a notebook",
      "Post-inference pipeline that makes the model output usable",
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
      "Classifies Pap smear images across five cell types with a training pipeline built for repeatable preprocessing, transfer learning, and evaluation.",
    features: [
      "4,000 medical images across five clinically relevant classes",
      "Preprocessing pipeline built for consistency before training",
      "Transfer-learning workflow tuned for image classification",
      "Evaluation flow focused on understanding model behavior, not just accuracy",
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
      "Scans EVM markets for arbitrage routes, filters the opportunities, and keeps execution guarded under tight timing constraints.",
    features: [
      "Scans 13,240+ token pairs for viable route combinations",
      "Separates discovery, validation, and execution into distinct steps",
      "Guards against slippage and timing failures before execution",
      "Built for automated decision-making instead of manual market watching",
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
