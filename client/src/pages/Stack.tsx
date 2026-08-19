/** Proof in Motion — preserve the Source Atlas language instrument; add profile-README stack topology only as labeled GitHub-declared evidence. */
import { ArrowUpRight, Braces, BrainCircuit, CloudCog, Code2, Database, GitBranch, Layers3, TerminalSquare, Waypoints } from "lucide-react";
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

const establishedPortfolioStack = ["Shadcn/UI", "Vite", "JavaScript", "TypeScript", "React", "Next.js", "Svelte", "Redux", "Tailwind", "MongoDB", "Firebase", "Azure", "Docker", "Kubernetes", "Git", "Node.js", "Express", "OpenAI API", "LangChain", "Ollama", "FAISS", "ChromaDB", "Solidity", "Hardhat", "Ethers.js"];

const profileCoverageLedger = [
  { code: "F.01", title: "Client foundations", source: "README / FRONTEND", technologies: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Dart", "Sass", "SCSS"] },
  { code: "F.02", title: "State + cross-platform", source: "README / FRONTEND", technologies: ["Redux", "Zustand", "Recoil", "Vuex", "Pinia", "React Native", "Flutter", "Expo"] },
  { code: "F.03", title: "UI + quality toolchain", source: "README / FRONTEND", technologies: ["Material UI", "Ant Design", "Chakra UI", "Bootstrap", "Webpack", "Babel", "ESLint", "Lighthouse"] },
  { code: "B.01", title: "Backend languages", source: "README / BACKEND", technologies: ["Python", "Go", "Java", "PHP", "C#", "Ruby", "C", "C++"] },
  { code: "B.02", title: "Service frameworks", source: "README / BACKEND", technologies: ["Django", "Flask", "FastAPI", "Gin", "Fiber", "Echo", "Spring Boot", "Micronaut", "Laravel", "CodeIgniter", "ASP.NET Core", "Blazor"] },
  { code: "B.03", title: "Data, security + events", source: "README / BACKEND", technologies: ["MySQL", "Firebase", "SQLite", "Cassandra", "JWT", "OAuth 2.0", "Keycloak", "RabbitMQ", "Kafka", "NATS", "Redis Pub/Sub"] },
  { code: "B.04", title: "API protocols", source: "README / BACKEND", technologies: ["REST", "Apollo", "Hasura", "gRPC", "WebSockets", "Postman"] },
  { code: "A.01", title: "AI data + optimization", source: "README / AI · ML", technologies: ["Keras", "YOLO", "GANs", "MediaPipe", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Reinforcement Learning", "Genetic Algorithms"] },
  { code: "W.01", title: "Networks + decentralized storage", source: "README / WEB3", technologies: ["Vyper", "Ethereum", "Polygon", "Solana", "Binance Smart Chain", "Web3.js", "IPFS", "Moralis"] },
  { code: "D.01", title: "Cloud + infrastructure", source: "README / DEVOPS", technologies: ["GitLab CI", "AWS", "Firebase", "Vercel", "Netlify", "DigitalOcean", "Ansible", "Pulumi"] },
  { code: "D.02", title: "Observability", source: "README / DEVOPS", technologies: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"] },
  { code: "T.01", title: "Collaboration + testing", source: "README / WORKFLOW", technologies: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Trello", "Notion", "Asana", "Jest", "Mocha", "Chai", "Cypress", "Selenium"] },
];

const profileCoverageIntervals = [
  { index: "S// 01", label: "Interface field", note: "Frontend systems + delivery surfaces", groups: profileCoverageLedger.slice(0, 3) },
  { index: "S// 02", label: "Service field", note: "Backend systems + communication layers", groups: profileCoverageLedger.slice(3, 7) },
  { index: "S// 03", label: "Intelligence field", note: "AI, optimization + decentralized protocols", groups: profileCoverageLedger.slice(7, 9) },
  { index: "S// 04", label: "Operations field", note: "Cloud, observability + team workflow", groups: profileCoverageLedger.slice(9) },
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
      <header className="stack-ledger__head"><div><p className="atlas-kicker"><i />COMPLETE COVERAGE LEDGER</p><h2 id="stack-ledger-title">Everything<br /><em>declared.</em></h2></div><p>The original practical surface is intentionally compact. This ledger closes the audit gap by carrying every additional, explicitly declared profile category in the same evidence system.</p></header>
      <article className="stack-ledger__carry"><div><Layers3 size={19} /><span>PORTFOLIO / CARRIED FORWARD</span></div><strong>Previously established stack</strong><div className="stack-ledger__chips">{establishedPortfolioStack.map((technology) => <span key={technology}><b>{"</>"}</b>{technology}</span>)}</div></article>
      <div className="stack-ledger__intervals">{profileCoverageIntervals.map((interval) => <section className="stack-ledger__interval" key={interval.index}><header><span>{interval.index}</span><div><p>PROFILE DECLARATION / SOURCE INTERVAL</p><h3>{interval.label}</h3></div><b>{interval.note}</b><i /></header><div className="stack-ledger__list">{interval.groups.map((group) => <article key={group.code}><span>{group.code}</span><div><p>{group.source}</p><h3>{group.title}</h3></div><div className="stack-ledger__chips">{group.technologies.map((technology) => <span key={technology}><b>{"</>"}</b>{technology}</span>)}</div></article>)}</div></section>)}</div>
      <a className="stack-ledger__source" href="https://github.com/TheCyperpunk/TheCyperpunk/blob/main/ReadMe.md" target="_blank" rel="noreferrer"><Waypoints size={15} /><span>GITHUB SOURCE</span><b>Technical Skills &amp; Expertise · full public matrix</b><ArrowUpRight size={15} /></a>
    </section>
    <section className="recent-surface"><div className="recent-surface__head"><div><p className="atlas-kicker">S// 03 · RECENT BUILD SURFACES</p><h2>What moved<br /><em>most recently.</em></h2></div><span>public repository trace · sorted by latest push / update</span></div><div className="recent-surface__list">{recentlyPushed.map((repo, index) => <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}><span className="recent-surface__index">R// {String(index + 1).padStart(2, "0")}</span><span>{repo.language || "Unclassified"}</span><b>{repo.name}</b><time>{new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</time><ArrowUpRight size={15} /></a>)}</div></section>
    <AtlasFooter />
  </main>;
}
