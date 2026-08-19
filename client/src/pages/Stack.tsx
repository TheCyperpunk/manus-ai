/** Proof in Motion — preserve the Source Atlas language instrument; use the Stack ledger only for public code, manifest, and README-backed project evidence. */
import { ArrowUpRight, Braces, BrainCircuit, CloudCog, Code2, Database, GitBranch, TerminalSquare, Waypoints } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { useGithubMetrics, useGithubSource } from "@/lib/github-source";

const profileStackTopology = [
  {
    index: "01",
    title: "Interface systems",
    source: "PROFILE README / FRONTEND",
    icon: Code2,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "Tailwind CSS", "ShadCN", "Vite"],
  },
  {
    index: "02",
    title: "Services + data",
    source: "PROFILE README / BACKEND",
    icon: Database,
    technologies: ["Node.js", "Express", "NestJS", "Fastify", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    index: "03",
    title: "AI + vision",
    source: "PROFILE README / AI · ML",
    icon: BrainCircuit,
    technologies: ["LangChain", "OpenAI", "Mistral 7B", "LLaVA 1.6", "PyTorch", "TensorFlow", "Hugging Face", "OpenCV"],
  },
  {
    index: "04",
    title: "Web3 + delivery",
    source: "PROFILE README / WEB3 · DEVOPS",
    icon: CloudCog,
    technologies: ["Solidity", "Rust", "Ethers.js", "Hardhat", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
];

const projectStackLedger = [
  { code: "P.01", title: "Onchain SIP", source: "CODE + MANIFEST / collegeproject", technologies: ["Next.js", "React", "TypeScript", "Solidity", "Hardhat", "Wagmi", "RainbowKit", "Ethers.js", "Viem", "OpenZeppelin", "Tailwind CSS", "Recharts"] },
  { code: "P.02", title: "XMO Messenger", source: "CODE + MANIFEST / award-experiment", technologies: ["Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS", "Netlify", "Android App Links"] },
  { code: "P.03", title: "SorobanVault", source: "CODE + README / SorobanVault-", technologies: ["Rust", "Soroban SDK", "Soroban CLI", "Stellar", "Solidity", "Foundry", "Forge", "EVM", "WASM"] },
  { code: "P.04", title: "Smart Energy Monitoring", source: "CODE + README / smart-energy-monitoring", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Radix UI", "React Hook Form", "Zod", "Lucide"] },
  { code: "P.05", title: "Video Search", source: "CODE + README / multi-api-video-search", technologies: ["TypeScript", "Node.js", "Express", "Axios", "Cheerio", "React", "Vite", "REST API"] },
  { code: "P.06", title: "TeleCloneChat", source: "CODE + MANIFEST / TeleCloneChat", technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM", "Neon", "TanStack Query", "Framer Motion", "Tailwind CSS", "Radix UI", "Zod"] },
];

// Public repository snapshot captured 19 Aug 2026. It only renders when the browser-side GitHub request is unavailable.
const stackInstrumentSnapshot = {
  originalCount: 60,
  languages: [
    { language: "TypeScript", repositories: 32 }, { language: "JavaScript", repositories: 6 },
    { language: "HTML", repositories: 3 }, { language: "Python", repositories: 3 },
    { language: "CSS", repositories: 1 }, { language: "Rust", repositories: 1 },
  ],
  recent: [
    { id: 1, name: "manus-ai", html_url: "https://github.com/TheCyperpunk/manus-ai", language: "TypeScript", pushed_at: "2026-08-19T06:12:33Z", updated_at: "2026-08-19T06:12:33Z" },
    { id: 2, name: "award-experiment", html_url: "https://github.com/TheCyperpunk/award-experiment", language: "TypeScript", pushed_at: "2026-08-15T15:38:33Z", updated_at: "2026-08-15T15:38:33Z" },
    { id: 3, name: "Midnight-Aurora", html_url: "https://github.com/TheCyperpunk/Midnight-Aurora", language: "TypeScript", pushed_at: "2026-08-12T06:50:21Z", updated_at: "2026-08-12T06:50:21Z" },
    { id: 4, name: "portfolio", html_url: "https://github.com/TheCyperpunk/portfolio", language: "TypeScript", pushed_at: "2026-07-26T18:24:07Z", updated_at: "2026-07-26T18:24:16Z" },
    { id: 5, name: "collegeproject", html_url: "https://github.com/TheCyperpunk/collegeproject", language: "TypeScript", pushed_at: "2026-07-25T18:34:34Z", updated_at: "2026-07-25T18:34:38Z" },
    { id: 6, name: "wifi-wps-tester", html_url: "https://github.com/TheCyperpunk/wifi-wps-tester", language: "Python", pushed_at: "2026-05-26T14:43:16Z", updated_at: "2026-05-26T14:43:16Z" },
  ],
};

export default function Stack() {
  const source = useGithubSource();
  const metrics = useGithubMetrics(source);
  const hasLiveRepositories = source.repos.length > 0;
  const visibleLanguages = hasLiveRepositories ? metrics.languages : stackInstrumentSnapshot.languages;
  const visibleOriginalCount = hasLiveRepositories ? metrics.original.length : stackInstrumentSnapshot.originalCount;
  const visibleLanguageCount = hasLiveRepositories ? metrics.languages.length : stackInstrumentSnapshot.languages.length;
  const maximum = Math.max(...visibleLanguages.map((entry) => entry.repositories), 1);
  const recentlyPushed = hasLiveRepositories ? [...source.repos].sort((a, b) => new Date(b.pushed_at || b.updated_at).getTime() - new Date(a.pushed_at || a.updated_at).getTime()).slice(0, 6) : stackInstrumentSnapshot.recent;
  const sourceMode = hasLiveRepositories ? "LIVE SOURCE" : "SNAPSHOT · 19 AUG 2026";
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="04" eyebrow="S// STACK · LANGUAGE INSTRUMENT" title={<>The codebase<br /><em>has a profile.</em></>} copy="A repository-derived view of primary languages and current build surfaces. It intentionally replaces static technology claims with signals visible in public source metadata." aside={<SourceStatus status={source.status} />} />
    <section className="stack-instrument"><div className="stack-instrument__frame"><span>S// LANGUAGE INSTRUMENT</span><i /><b>MEASURED FROM PUBLIC METADATA</b></div><div className="stack-instrument__meta"><Code2 size={22} /><p>PRIMARY LANGUAGE DISTRIBUTION</p><strong>{visibleOriginalCount}</strong><span>original, non-archived repositories with public metadata</span></div><div className="language-bars"><div className="language-bars__stamp"><span>API // REPOSITORY INVENTORY</span><b>{sourceMode}</b></div>{visibleLanguages.map((entry, index) => <article key={entry.language}><div><span>{String(index + 1).padStart(2, "0")}</span><b>{entry.language}</b><em>{entry.repositories} repos</em></div><i><u style={{ width: `${(entry.repositories / maximum) * 100}%` }} /></i></article>)}</div></section>
    <section className="stack-cues"><article><Braces size={21} /><p>Source inventory</p><strong>{source.profile.public_repos}</strong><span>public repositories in the profile</span></article><article><GitBranch size={21} /><p>Original codebases</p><strong>{visibleOriginalCount}</strong><span>non-forked, non-archived repositories from public source</span></article><article><TerminalSquare size={21} /><p>Reported language signals</p><strong>{visibleLanguageCount}</strong><span>primary languages across original active repositories</span></article></section>
    <section className="stack-topology" aria-labelledby="stack-topology-title">
      <header className="stack-topology__head"><div><p className="atlas-kicker"><i />PROFILE-DECLARED TOOLING</p><h2 id="stack-topology-title">The practical<br /><em>surface area.</em></h2></div><p>Expanded from the public GitHub profile README. This is a declared tool map, kept distinct from the repository-language instrument above.</p></header>
      <div className="stack-topology__grid">{profileStackTopology.map((group) => { const Icon = group.icon; return <article className="stack-topology__node" key={group.index}><div className="stack-topology__node-top"><span>{group.index}</span><Icon size={18} /></div><p>{group.source}</p><h3>{group.title}</h3><div className="stack-topology__chips">{group.technologies.map((technology) => <span key={technology}><b>{"</>"}</b>{technology}</span>)}</div></article>; })}</div>
      <a className="stack-topology__source" href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><Waypoints size={15} /><span>VERIFIED INPUT</span><b>Public profile README · technical skills matrix</b><ArrowUpRight size={15} /></a>
    </section>
    <section className="stack-ledger" aria-labelledby="stack-ledger-title">
      <header className="stack-ledger__head"><div><p className="atlas-kicker"><i />PROJECT STACK LEDGER</p><h2 id="stack-ledger-title">Stack use,<br /><em>by project.</em></h2></div><p>Each row is grounded in a public repository’s code, declared dependencies, build configuration, or README. The public-organization audit returned no membership, so no organization-owned work is inferred here.</p></header>
      <div className="stack-ledger__list">{projectStackLedger.map((project) => <article key={project.code}><span>{project.code}</span><div><p>{project.source}</p><h3>{project.title}</h3></div><div className="stack-ledger__chips">{project.technologies.map((technology) => <span key={technology}><b>{"</>"}</b>{technology}</span>)}</div></article>)}</div>
      <a className="stack-ledger__source" href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><Waypoints size={15} /><span>GITHUB SOURCE</span><b>Six audited project repositories · 60 original public repositories · no public organization membership</b><ArrowUpRight size={15} /></a>
    </section>
    <section className="recent-surface"><div className="recent-surface__head"><div><p className="atlas-kicker">S// 03 · RECENT BUILD SURFACES</p><h2>What moved<br /><em>most recently.</em></h2></div><span>public repository trace · sorted by latest push / update</span></div><div className="recent-surface__list">{recentlyPushed.map((repo, index) => <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}><span className="recent-surface__index">R// {String(index + 1).padStart(2, "0")}</span><span>{repo.language || "Unclassified"}</span><b>{repo.name}</b><time>{new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</time><ArrowUpRight size={15} /></a>)}</div></section>
    <AtlasFooter />
  </main>;
}
