// Central content registry for the site. Edit here — nothing else.

export type Status = 'operational' | 'active' | 'archived';

export const statusMeta: Record<Status, { label: string; colorVar: string }> = {
  operational: { label: 'SHIPPED', colorVar: 'sig-ok' },
  active: { label: 'IN PROGRESS', colorVar: 'sig-warn' },
  archived: { label: 'ARCHIVED', colorVar: 'sig-crit' },
};

export interface Project {
  id: string; // SVC-01 style
  name: string;
  tagline: string;
  description: string;
  pipeline?: string[]; // e.g. PLAN -> GATHER -> VERIFY
  stack: string[];
  status: Status;
  flagship?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  metric?: string; // one standout fact
}

export const projects: Project[] = [
  {
    id: 'SVC-01',
    name: 'SentinelOps',
    tagline: 'Multi-agent cloud incident response system',
    description:
      'Agents plan, gather diagnostics, verify hypotheses, act, and document — with a human approval gate before anything touches production. Built on MCP so each agent calls real infrastructure tools instead of guessing.',
    pipeline: ['PLAN', 'GATHER', 'VERIFY', 'ACT', 'DOCUMENT'],
    stack: ['MCP', 'AWS', 'Terraform', 'Ollama', 'Python'],
    status: 'active',
    flagship: true,
    metric: 'Human approval gate before every write action',
  },
  {
    id: 'SVC-02',
    name: 'Lily',
    tagline: 'Voice-first maternal health triage agent',
    description:
      "Built at HackDavis. Callers talk to Lily over the phone; a deterministic rules engine — not the LLM — makes the actual clinical escalation call, so triage stays predictable even when the model isn't. Voice in, voice out, real-time.",
    pipeline: ['CALL', 'TRANSCRIBE', 'TRIAGE', 'ESCALATE', 'RESPOND'],
    stack: ['Twilio', 'Deepgram', 'ElevenLabs', 'Claude API', 'Rules Engine'],
    status: 'operational',
    flagship: true,
    metric: 'Escalation logic is deterministic, not model-inferred',
  },
  {
    id: 'SVC-03',
    name: 'KV Store',
    tagline: 'Raft-based distributed key-value store',
    description:
      'A key-value store that survives node failure. Raft consensus for leader election and log replication, write-ahead log for crash recovery, and TTL/LRU eviction under memory pressure.',
    pipeline: ['WAL', 'RAFT CONSENSUS', 'REPLICATE', 'EVICT'],
    stack: ['C++', 'Python', 'Raft', 'WAL'],
    status: 'operational',
    flagship: true,
    metric: 'Crash-recoverable via write-ahead log',
  },
  {
    id: 'SVC-04',
    name: 'CodeBox',
    tagline: 'Docker-sandboxed multi-language code execution engine',
    description:
      'Runs untrusted code across multiple languages in isolated, ephemeral containers — the kind of primitive that sits underneath online judges, coding assessments, and AI code-execution tools.',
    stack: ['Docker', 'Python', 'Sandboxing'],
    status: 'operational',
    metric: 'Isolated, ephemeral execution per submission',
  },
  {
    id: 'SVC-05',
    name: 'Helix',
    tagline: 'LLM observability platform',
    description:
      'Traces, logs, and evaluates local LLM calls end to end — built to answer the question every agent project eventually asks: what did the model actually see, and why did it do that.',
    stack: ['Ollama', 'PostgreSQL', 'Python'],
    status: 'active',
    metric: 'Full request/response tracing for local models',
  },
  {
    id: 'SVC-06',
    name: 'Prometheus',
    tagline: 'Multi-modal AI content generation platform',
    description:
      'Text, code, music, image, and video generation behind one interface, integrating OpenAI and LangChain. Reached 100+ active users in testing — the project that got me hooked on shipping AI products end to end.',
    stack: ['Next.js', 'LangChain', 'Prisma', 'Stripe', 'NLP'],
    status: 'archived',
    metric: '100+ active users in testing',
    githubUrl: 'https://github.com/Krishi1211/Prometheus',
  },
];

export const sideProjects: Project[] = [
  {
    id: 'SVC-07',
    name: 'Finance Guru',
    tagline: 'Personal finance tracker with real-time analytics',
    description:
      'Tracks income, expense, and budget with visual breakdowns to make the numbers legible instead of a spreadsheet.',
    stack: ['React', 'FastAPI', 'MongoDB', 'Recharts', 'Zustand'],
    status: 'archived',
    githubUrl: 'https://github.com/Krishi1211/Finance-guru/tree/main',
    demoUrl: 'https://finance-guru.onrender.com/',
  },
  {
    id: 'SVC-08',
    name: 'Melo',
    tagline: 'Music distribution platform',
    description: 'A distribution-focused platform for independent artists, built end to end on Angular.',
    stack: ['Angular', 'TypeScript', 'Tailwind'],
    status: 'archived',
    githubUrl: 'https://github.com/Krishi1211/Melo',
    demoUrl: 'https://melo-gamma.vercel.app/',
  },
  {
    id: 'SVC-09',
    name: 'E-Learning Platform',
    tagline: 'MERN course delivery and instructor tooling',
    description:
      'Course delivery, user management, and instructor-student communication on the MERN stack with a GraphQL layer.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    status: 'archived',
    githubUrl: 'https://github.com/Krishi1211/SRM--A-E-Learning-MERN-platform',
    demoUrl: 'https://srm-a-elearning-mern-platform.vercel.app/',
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'Java', 'C#', 'SQL'],
  },
  {
    category: 'Systems & Infra',
    items: ['Docker', 'Terraform', 'AWS', 'Kubernetes (AMD Instinct)', 'Raft', 'Distributed Systems', 'Linux'],
  },
  {
    category: 'AI / ML',
    items: ['MCP', 'LangChain', 'LangGraph', 'RAG', 'Ollama', 'PyTorch', 'TensorFlow', 'MLflow', 'DVC'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Django', 'GraphQL', 'REST', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Practice',
    items: ['Competitive Programming (ICPC)', 'System Design', 'DevOps', 'CI/CD'],
  },
];

export interface TimelineItem {
  id: number;
  period: string;
  title: string;
  org: string;
  description: string;
  type: 'education' | 'experience';
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    period: 'Aug 2025 — Mar 2027 (expected)',
    title: 'MS in Computer Science',
    org: 'University of California, Davis · GPA 3.8',
    description:
      'Distributed systems, machine learning, cloud computing, database systems, computer networks. Research under Dr. Jean-Xavier Guinard on ML-based sensory quality prediction, alongside food-science lab work on deep-learning bacterial detection.',
    type: 'education',
  },
  {
    id: 2,
    period: 'Aug 2023 — Jun 2024',
    title: 'Junior Next.js Developer',
    org: 'Kenmark Itan Solutions',
    description:
      'Built a Next.js application serving 5+ backend APIs, shipped 2 new features in the first 3 months, and deployed 3+ travel partner sites on Next.js, React, Node.js and MongoDB. CI/CD pipelines cut deployment time by 40%.',
    type: 'experience',
  },
  {
    id: 3,
    period: 'Apr 2023 — May 2024',
    title: 'Student Trainee',
    org: 'JPMorgan Chase & Co.',
    description:
      'Built AI/ML predictive models and automation workflows that improved efficiency in financial services by 15%, working Agile. Analyzed 5+ React/Python applications with cross-functional teams.',
    type: 'experience',
  },
  {
    id: 4,
    period: '2021 — 2025',
    title: 'BE in Computer Engineering',
    org: 'Dwarkadas J. Sanghvi College of Engineering',
    description:
      'Data structures & algorithms, operating systems, DBMS, computer networks, AI, web development. Competitive programming background (ICPC).',
    type: 'education',
  },
];

export interface Publication {
  title: string;
  venue: string;
  note: string;
}

export const publications: Publication[] = [
  {
    title: 'ML-based prediction of wine sensory quality',
    venue: 'Research w/ Dr. Jean-Xavier Guinard, UC Davis',
    note: 'CATA, JAR, DA and chemistry data with leave-one-out cross-validation across 36 wines.',
  },
  {
    title: 'Deep learning for bacterial detection',
    venue: 'Food science / microbiology lab, UC Davis',
    note: 'Evaluated DeepBacs, Misic and phase-contrast datasets; proposed MinIO/DVC/MLflow/CVAT infrastructure.',
  },
  {
    title: 'News authenticity detection via the HITS algorithm',
    venue: 'Undergraduate publication',
    note: 'Ranked source credibility using hub-and-authority scoring over a citation graph.',
  },
  {
    title: 'Cotton leaf disease classification',
    venue: 'Undergraduate publication',
    note: 'CNN-based classifier for early detection of crop disease from leaf imagery.',
  },
];

export const profile = {
  name: 'Krishi Shah',
  role: 'Systems & AI Engineer',
  location: 'Davis, California',
  email: 'krishishah1211@gmail.com',
  github: 'https://github.com/Krishi1211',
  linkedin: 'https://www.linkedin.com/in/krishishah1211/',
  twitter: 'https://x.com/KrishiS13923223',
  resumeUrl: '/Krishi.pdf',
  availability: 'CPT ELIGIBLE — OPEN TO SWE ROLES',
};
