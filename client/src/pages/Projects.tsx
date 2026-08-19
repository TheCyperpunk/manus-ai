/** Proof in Motion — repository registry exposes the full public GitHub inventory as filterable source evidence. */
import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Search, Star } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { useGithubSource } from "@/lib/github-source";

export default function Projects() {
  const source = useGithubSource();
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<"all" | "original" | "forked">("all");
  const [language, setLanguage] = useState("All languages");
  const languages = useMemo(() => ["All languages", ...Array.from(new Set(source.repos.map((repo) => repo.language).filter(Boolean) as string[])).sort()], [source.repos]);
  const featured = useMemo(() => source.repos.filter((repo) => !repo.fork && !repo.archived && repo.description).sort((a, b) => (b.stargazers_count - a.stargazers_count) || new Date(b.pushed_at || b.updated_at).getTime() - new Date(a.pushed_at || a.updated_at).getTime()).slice(0, 3), [source.repos]);
  const visible = useMemo(() => source.repos.filter((repo) => {
    const haystack = `${repo.name} ${repo.description || ""} ${repo.topics.join(" ")}`.toLowerCase();
    return (scope === "all" || (scope === "original" ? !repo.fork : repo.fork)) && (language === "All languages" || repo.language === language) && haystack.includes(query.toLowerCase());
  }).sort((a, b) => new Date(b.pushed_at || b.updated_at).getTime() - new Date(a.pushed_at || a.updated_at).getTime()), [language, query, scope, source.repos]);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="01" eyebrow="Repository registry" title={<>The whole<br /><em>build surface.</em></>} copy="Every public repository in the profile, queryable by name, topic, source type, and primary language. This is a live inventory—not a hand-picked highlight reel." aside={<SourceStatus status={source.status} />} />
    <section className="featured-dossiers"><div className="featured-dossiers__intro"><p className="atlas-kicker">CURATED SOURCE DOSSIERS</p><h2>Three build surfaces<br />to <em>enter first.</em></h2><p>These repositories are selected from the live public inventory by non-forked source, available description, repository stars, and recency. The complete archive remains below.</p></div><div className="featured-dossiers__grid">{featured.map((repo, index) => <a href={repo.html_url} target="_blank" rel="noreferrer" className="featured-dossier" key={repo.id}><span>0{index + 1} / {repo.language || "SOURCE"}</span><h3>{repo.name}</h3><p>{repo.description}</p><div>{repo.topics.slice(0, 3).map((topic) => <i key={topic}>{topic}</i>)}<b><Star size={13} /> {repo.stargazers_count} <ArrowUpRight size={15} /></b></div></a>)}{source.status === "loading" && <p className="atlas-empty">Selecting public build surfaces…</p>}</div></section>
    <section className="repo-controlbar" aria-label="Repository filters"><div className="repo-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search repositories, topics, or description" aria-label="Search public repositories" /></div><div className="repo-scope">{(["all", "original", "forked"] as const).map((item) => <button type="button" onClick={() => setScope(item)} className={scope === item ? "is-active" : ""} key={item}>{item === "all" ? "All" : item === "original" ? "Original" : "Forks"}</button>)}</div><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Filter repositories by language">{languages.map((item) => <option key={item}>{item}</option>)}</select></section>
    <section className="repo-registry-meta"><span>{source.status === "ready" ? `${visible.length} of ${source.repos.length} public repositories` : "Connecting to live repository inventory…"}</span><a href="https://github.com/TheCyperpunk?tab=repositories" target="_blank" rel="noreferrer"><Github size={15} /> Verify the registry <ArrowUpRight size={14} /></a></section>
    <section className="repo-registry">{visible.map((repo, index) => <article className="repo-record" key={repo.id}><div className="repo-record__head"><span>{String(index + 1).padStart(3, "0")}</span><div><p>{repo.fork ? "Forked source" : "Original repository"}{repo.archived ? " · archived" : ""}</p><h2>{repo.name}</h2></div><a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}><ArrowUpRight size={18} /></a></div><p className="repo-record__description">{repo.description || "No public description provided in the repository metadata."}</p><div className="repo-record__tags">{repo.language && <span className="language-tag">{repo.language}</span>}{repo.topics.slice(0, 4).map((topic) => <span key={topic}>{topic}</span>)}</div><div className="repo-record__foot"><span>{repo.stargazers_count > 0 && <><Star size={13} /> {repo.stargazers_count}</>}</span><span>{repo.forks_count} forks</span><time>pushed {new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}</time></div></article>)}</section>
    {source.status === "ready" && visible.length === 0 && <p className="atlas-empty">No public repositories match these filters. Clear the query or choose another source type.</p>}
    <AtlasFooter />
  </main>;
}
