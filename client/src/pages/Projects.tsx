/** Proof in Motion — repository registry exposes the full public GitHub inventory as filterable source evidence. */
import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Radio, Search, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { ContributionCalendar } from "@/components/ContributionCalendar";
import { featuredDossiers, githubHandle, useGithubMetrics, useGithubSource } from "@/lib/github-source";

const archiveIntervals = [
  { id: "application", marker: "S//01", title: "Application surfaces", copy: "Product-facing repositories: interaction flows, client systems, and web delivery." },
  { id: "protocol", marker: "S//02", title: "Protocol & contract work", copy: "Onchain systems, contract prototypes, and the source that carries value or state." },
  { id: "utility", marker: "S//03", title: "Tools & experiments", copy: "Supporting utilities, focused explorations, and lower-level build surfaces." },
] as const;

function getArchiveInterval(repository: { name: string; language: string | null }) {
  if (["collegeproject", "SorobanVault-"].includes(repository.name) || repository.language === "Rust") return "protocol";
  if (["TypeScript", "JavaScript", "HTML", "CSS"].includes(repository.language || "")) return "application";
  return "utility";
}

export default function Projects() {
  const source = useGithubSource();
  const metrics = useGithubMetrics(source);
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<"all" | "original" | "forked">("all");
  const [language, setLanguage] = useState("All languages");
  const languages = useMemo(() => ["All languages", ...Array.from(new Set(source.repos.map((repo) => repo.language).filter(Boolean) as string[])).sort()], [source.repos]);
  const visible = useMemo(() => source.repos.filter((repo) => {
    const haystack = `${repo.name} ${repo.description || ""} ${repo.topics.join(" ")}`.toLowerCase();
    return (scope === "all" || (scope === "original" ? !repo.fork : repo.fork)) && (language === "All languages" || repo.language === language) && haystack.includes(query.toLowerCase());
  }).sort((a, b) => new Date(b.pushed_at || b.updated_at).getTime() - new Date(a.pushed_at || a.updated_at).getTime()), [language, query, scope, source.repos]);
  const intervalGroups = useMemo(() => archiveIntervals.map((interval) => ({ ...interval, repos: visible.filter((repo) => getArchiveInterval(repo) === interval.id) })).filter((interval) => interval.repos.length > 0), [visible]);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="01" eyebrow="Repository registry" title={<>The whole<br /><em>build surface.</em></>} copy="Every public repository in the profile, queryable by name, topic, source type, and primary language. A verified 60-source original-repository snapshot renders first; GitHub then refreshes the complete inventory in the background." aside={<SourceStatus status={source.status} />} />
    <section className="featured-dossiers"><div className="featured-dossiers__intro"><p className="atlas-kicker">CURATED SOURCE DOSSIERS</p><h2>Three build surfaces<br />to <em>enter first.</em></h2><p>Selected from a public audit of 115 repositories for documented scope, inspectable architecture, deployment or test evidence, visible ownership, and product relevance. The complete archive remains below.</p></div><div className="featured-dossiers__grid">{featuredDossiers.map((dossier) => <article className="featured-dossier featured-dossier--audited" key={dossier.repository}><div className="featured-dossier__head"><span>{dossier.index} / {dossier.mode}</span><b>{dossier.repository}</b></div><h3>{dossier.name}</h3><div className="featured-dossier__artifact"><i>TRACE</i><strong>{dossier.artifact}</strong></div><p>{dossier.summary}</p><div className="featured-dossier__proof"><i>PROOF</i><strong>{dossier.proof}</strong></div><div className="featured-dossier__tags">{dossier.tags.map((tag) => <i key={tag}>{tag}</i>)}</div><div className="featured-dossier__actions">{dossier.caseStudyHref && <Link href={dossier.caseStudyHref}><span>CASE STUDY</span> <ArrowUpRight size={13} /></Link>}<a href={dossier.repositoryUrl} target="_blank" rel="noreferrer"><Github size={13} /> SOURCE <ArrowUpRight size={13} /></a>{dossier.liveUrl && <a href={dossier.liveUrl} target="_blank" rel="noreferrer"><span>LIVE</span> <ArrowUpRight size={13} /></a>}</div></article>)}</div></section>
    <ContributionCalendar />
    <section className="repo-controlbar" aria-label="Repository filters"><div className="repo-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search repositories, topics, or description" aria-label="Search public repositories" /></div><div className="repo-scope">{(["all", "original", "forked"] as const).map((item) => <button type="button" onClick={() => setScope(item)} className={scope === item ? "is-active" : ""} key={item}>{item === "all" ? "All" : item === "original" ? "Original" : "Forks"}</button>)}</div><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Filter repositories by language">{languages.map((item) => <option key={item}>{item}</option>)}</select></section>
    <section className="repo-registry-meta"><span>{source.status === "ready" ? `${visible.length} of ${source.repos.length} public repositories` : source.status === "loading" ? `${visible.length} verified original repositories loaded · refreshing the live registry…` : `${visible.length} verified original repositories · live refresh unavailable`}</span><a href="https://github.com/TheCyperpunk?tab=repositories" target="_blank" rel="noreferrer"><Github size={15} /> Verify the registry <ArrowUpRight size={14} /></a></section>
    <section className="repo-archive" aria-label="Public source archive">{intervalGroups.map((interval) => <section className="repo-interval" key={interval.id}><header className="repo-interval__head"><div><span>{interval.marker}</span><h2>{interval.title}</h2></div><p>{interval.copy}</p><b>{String(interval.repos.length).padStart(2, "0")} SOURCES</b></header><div className="repo-registry">{interval.repos.map((repo, index) => <article className="repo-record" key={repo.id}><div className="repo-record__head"><span>{interval.marker}/{String(index + 1).padStart(2, "0")}</span><div><p>{repo.fork ? "Forked source" : "Original repository"}{repo.archived ? " · archived" : ""}</p><h2>{repo.name}</h2></div><a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}><ArrowUpRight size={18} /></a></div><p className="repo-record__description">{repo.description || "No public description provided in the repository metadata."}</p><div className="repo-record__tags">{repo.language && <span className="language-tag">{repo.language}</span>}{repo.topics.slice(0, 4).map((topic) => <span key={topic}>{topic}</span>)}</div><div className="repo-record__foot"><span>{repo.stargazers_count > 0 && <><Star size={13} /> {repo.stargazers_count}</>}</span><span>{repo.forks_count} forks</span><time>pushed {new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}</time></div></article>)}</div></section>)}</section>
    <section className="open-evidence" aria-label="Public source evidence"><article><Github size={20} /><strong>{source.profile.public_repos}</strong><span>public repositories to inspect</span><a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer">Open source atlas <ArrowUpRight size={14} /></a></article><article><Sparkles size={20} /><strong>{metrics.languages.length || "…"}</strong><span>repository-derived language signals</span><a href="/stack">Read the stack <ArrowUpRight size={14} /></a></article><article><Radio size={20} /><strong>{source.status === "ready" ? "LIVE" : "SYNC"}</strong><span>public GitHub profile evidence</span><a href="/activity">Trace activity <ArrowUpRight size={14} /></a></article></section>
    {source.status === "ready" && visible.length === 0 && <p className="atlas-empty">No public repositories match these filters. Clear the query or choose another source type.</p>}
    <AtlasFooter />
  </main>;
}
