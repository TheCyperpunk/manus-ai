/** Proof in Motion — language instrument is derived from the public repository inventory rather than a resume skill list. */
import { ArrowUpRight, Braces, Code2, GitBranch, TerminalSquare } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { useGithubMetrics, useGithubSource } from "@/lib/github-source";

export default function Stack() {
  const source = useGithubSource();
  const metrics = useGithubMetrics(source);
  const maximum = Math.max(...metrics.languages.map((entry) => entry.repositories), 1);
  const recentlyPushed = [...source.repos].sort((a, b) => new Date(b.pushed_at || b.updated_at).getTime() - new Date(a.pushed_at || a.updated_at).getTime()).slice(0, 6);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="04" eyebrow="Language instrument" title={<>The codebase<br /><em>has a profile.</em></>} copy="A repository-derived view of primary languages and current build surfaces. It intentionally replaces static technology claims with signals visible in public source metadata." aside={<SourceStatus status={source.status} />} />
    <section className="stack-instrument"><div className="stack-instrument__meta"><Code2 size={22} /><p>PRIMARY LANGUAGE DISTRIBUTION</p><strong>{metrics.original.length || "…"}</strong><span>original, non-archived repositories with public metadata</span></div><div className="language-bars">{metrics.languages.map((entry, index) => <article key={entry.language}><div><span>{String(index + 1).padStart(2, "0")}</span><b>{entry.language}</b><em>{entry.repositories} repos</em></div><i><u style={{ width: `${(entry.repositories / maximum) * 100}%` }} /></i></article>)}{source.status === "loading" && <p className="atlas-empty">Reading repository languages…</p>}</div></section>
    <section className="stack-cues"><article><Braces size={21} /><p>Source inventory</p><strong>{source.profile.public_repos}</strong><span>public repositories in the profile</span></article><article><GitBranch size={21} /><p>Original codebases</p><strong>{metrics.original.length || "…"}</strong><span>non-forked, non-archived repositories returned by API</span></article><article><TerminalSquare size={21} /><p>Reported language signals</p><strong>{metrics.languages.length || "…"}</strong><span>primary languages across original active repositories</span></article></section>
    <section className="recent-surface"><div className="recent-surface__head"><div><p className="atlas-kicker">RECENT BUILD SURFACES</p><h2>What moved<br /><em>most recently.</em></h2></div><span>sorted by latest push / update</span></div><div className="recent-surface__list">{recentlyPushed.map((repo) => <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}><span>{repo.language || "Unclassified"}</span><b>{repo.name}</b><time>{new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</time><ArrowUpRight size={15} /></a>)}</div></section>
    <AtlasFooter />
  </main>;
}

