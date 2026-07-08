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
    value: "Best way to reach me",
  },
  {
    href: "https://linkedin.com/in/sharmasshrey",
    label: "LinkedIn",
    value: "Work and background",
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
    "Running products",
    "Long Beach, California",
  ],
  [
    "Customer messaging",
    "Aid distribution",
    "Credential verification",
    "AI marketplace",
    "Actual product screens",
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
  { value: "7", label: "Projects built" },
  { value: "5", label: "Production links" },
  { value: "4M+", label: "Messages stress-tested" },
  { value: "500+", label: "Concurrent users tested" },
] as const;

export const retainProduct: RetainProductEntry = {
  name: "RETAIN AI",
  href: "https://retain-ai-eight.vercel.app",
  ctaLabel: "Open platform →",
  liveMeta: "retain-ai-eight.vercel.app",
  roleLine: "RETAIN AI · Founder & Solo Engineer · 2025–Present",
  subtitle: "Messaging and callback assistant for local service businesses.",
  blurb:
    "RETAIN AI helps local businesses answer missed texts and calls. RETAINchat handles SMS and web messages. RETAINvoice answers calls, places callbacks, checks business rules, responds out loud, logs the transcript, and hands off messy calls to the owner.",
  featureCards: [
    {
      title: "RETAINchat",
      copy:
        "SMS and web messages use business FAQs, hours, tone, memory, and escalation rules before Gemini writes a reply.",
    },
    {
      title: "RETAINvoice",
      copy:
        "Answers inbound calls and callbacks, listens to the caller, runs the same business rules as chat, speaks responses out loud, and flags owner handoff when booking or pricing needs a person.",
    },
    {
      title: "Owner handoff",
      copy:
        "Messy conversations are logged with a summary and routed back to the business instead of pretending the AI can finish everything.",
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
  integrations: ["Supabase", "Gemini", "Twilio", "Stripe", "Vercel"],
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Gemini",
    "Twilio",
    "Stripe",
    "AWS",
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
      "ScopeKit gives coding agents a small repo pack before they start searching through everything.",
    features: [
      "Picks the files, symbols, tests, risks, and commands for one task.",
      "Writes local setup notes for Claude, Codex, Cursor, and MCP.",
      "Runs locally. No API key. No LLM routing.",
      "Reduces the context agents see before they spend tokens.",
    ],
    context:
      "I built the CLI to index a repo, choose the useful files, and write a context pack an agent can use immediately.",
    metrics: [
      { value: "~1,280×", label: "Less context in the auth task" },
      { value: "18×", label: "Smaller than Graphify best-effort" },
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
    tags: ["TypeScript", "Node.js", "CLI", "MCP Server", "Zod", "MCP SDK", "Vercel"],
    visual: "scopekit",
  },
  {
    name: "ResilientAid",
    href: "https://resilient-aid.vercel.app",
    embedHref: "https://resilient-aid.vercel.app",
    browserLabel: "Aid flow",
    browserMeta: "resilient-aid.vercel.app",
    ctaLabel: "Open demo",
    type: "Aid protocol",
    blurb:
      "ResilientAid lets donors fund aid, vendors fulfill it, and beneficiaries receive help without the money disappearing in the middle.",
    features: [
      "Separate screens for admins, donors, beneficiaries, and vendors.",
      "Donors can see where funds move instead of trusting a dashboard total.",
      "Vendors can redeem credits quickly at checkout.",
      "Polygon Amoy records each transfer in the aid flow.",
    ],
    context:
      "I built the role-based app, wallet connection, vendor redemption path, and transaction trail.",
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
    tags: ["Polygon", "Smart contracts", "Aid payments", "Vendor POS", "Stablecoin settlement"],
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
      "KalaAI is a marketplace for handmade goods where shoppers can browse products and get an AI guess at the craft origin from a photo.",
    features: [
      "Shorts-style feed for artisan stories and products.",
      "Listings, trends, seller context, and account pages live in one app.",
      "Photo analysis maps products to 120+ craft categories.",
      "AI results appear inside shopping instead of a separate demo page.",
    ],
    context:
      "I built the feed, marketplace pages, trend view, account flow, and image-analysis path as one product.",
    metrics: [
      { value: "120+", label: "Cultural detection categories" },
      { value: "5", label: "Product surfaces" },
      { value: "AI", label: "Origin detection from imagery" },
      { value: "Live", label: "Deployed on Vercel" },
    ],
    surfaces: ["Home", "Shorts Feed", "Marketplace", "Trends", "Account"],
    featureCards: [
      {
        title: "Image origin check",
        copy:
          "Estimates cultural origin from product photos across 120+ craft categories.",
      },
      {
        title: "Shorts feed",
        copy:
          "Swipeable product stories make discovery feel closer to a shopping feed than a catalog.",
      },
      {
        title: "Marketplace flow",
        copy:
          "Listings, account views, seller context, and trend pages are wired into the same app.",
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
      "VeriDegree lets a school issue a credential and lets an employer check that it is real without seeing more student data than necessary.",
    features: [
      "Schools issue records once instead of emailing PDFs again and again.",
      "Students keep wallet-based academic records they can present later.",
      "Employers check credential status from a public verification page.",
      "Private fields stay hidden unless they are needed.",
    ],
    context:
      "I built the issuer, student, and employer paths around Algorand credential state.",
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
      "Selective disclosure",
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
      "AI Motion Analysis reads pose keypoints from workout video and turns them into form scores a person can understand.",
    features: [
      "Tracks 17 body keypoints across video frames.",
      "Scores depth, balance, tempo, and alignment.",
      "Turns pose output into short coaching notes.",
      "Flags the form issues instead of dumping raw keypoints.",
    ],
    context:
      "I focused on the step after inference: cleaning noisy keypoints and turning them into useful feedback.",
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
      "Cervical Cell CNN classifies Pap smear images into five cell types and keeps the training path repeatable.",
    features: [
      "Trained on 4,000 labeled images across five classes.",
      "Preprocessing stays consistent before training and evaluation.",
      "Transfer learning makes the model train faster on the image set.",
      "Class confidence makes model mistakes easier to inspect.",
    ],
    context:
      "I built the preprocessing, transfer-learning setup, and evaluation flow around the medical dataset.",
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
    type: "Web3 automation",
    blurb:
      "Scans DeFi routes and filters out trades that are too risky or too slow to execute.",
    features: [
      "Checks 13,240+ token pairs for route opportunities.",
      "Separates scanning, validation, and execution into clear stages.",
      "Filters by spread, gas cost, and slippage before acting.",
      "Designed for automated checks instead of manual market watching.",
    ],
    context:
      "I separated discovery, validation, and execution so bad routes can be rejected before the bot acts.",
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
      "Worked on early Rezolve VoiceIQ work for inbound IT and HR support calls. The assistant listens, finds the right internal answer, creates tickets when needed, and escalates messy cases.",
    bullets: [
      "Helped build call-flow logic for intent recognition and call handling",
      "Worked on the ITSM integration path for ticket creation and escalation",
      "Contributed before the product moved into larger enterprise deployments",
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
      "Founded and built RETAIN AI for local service businesses that miss leads by phone or SMS. I am the sole engineer across product, backend, AI flow, and deployment.",
    bullets: [
      "Built tenant settings for business-specific tone, FAQs, hours, and escalation rules",
      "Combined rule-based routing, Gemini, and conversation memory in the reply flow",
      "Stress tested to 500+ concurrent users with 4M+ message exchanges, 150–250ms p95, and <0.4% error rate",
      "Added RETAINvoice call handling with live transcript, tool calls, call summary, and owner handoff",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini", "Twilio", "Stripe", "AWS"],
  },
] as const;

export const skillGroups: readonly SkillGroupEntry[] = [
  {
    label: "core/",
    items: ["TypeScript", "Python", "SQL"],
  },
  {
    label: "product/",
    items: ["React", "Next.js", "Tailwind"],
  },
  {
    label: "services/",
    items: ["Node.js", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    label: "ai-voice/",
    items: ["Gemini", "Twilio"],
  },
  {
    label: "ship/",
    items: ["Docker", "Vercel", "GitHub"],
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
