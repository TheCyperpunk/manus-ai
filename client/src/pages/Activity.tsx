/** Proof in Motion — activity ledger distinguishes a dated contribution snapshot from the live public-event feed. */
import { Activity as ActivityIcon, ArrowUpRight, GitCommitHorizontal, GitPullRequest, PlusSquare } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { contributionSnapshot, useGithubSource } from "@/lib/github-source";

const eventMeta: Record<string, { label: string; icon: typeof GitCommitHorizontal }> = { PushEvent: { label: "Pushed commits", icon: GitCommitHorizontal }, PullRequestEvent: { label: "Pull request", icon: GitPullRequest }, CreateEvent: { label: "Created source", icon: PlusSquare } };

export default function Activity() {
  const source = useGithubSource();
  const maxWeek = Math.max(...contributionSnapshot.weeks);
  const distinctRepos = new Set(source.events.map((event) => event.repo.name)).size;
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="02" eyebrow="Contribution ledger" title={<>The trail is<br /><em>part of the work.</em></>} copy="Two sources, explicitly separated: a dated contribution-calendar capture and a live stream of GitHub public events. Nothing is extrapolated beyond the returned evidence." aside={<SourceStatus status={source.status} />} />
    <section className="contribution-instrument"><div className="contribution-instrument__copy"><p className="atlas-kicker">12-MONTH CALENDAR SNAPSHOT</p><strong>{contributionSnapshot.total}</strong><span>contributions</span><p>Captured from GitHub’s contribution calendar on {contributionSnapshot.captured}. The weekly bars retain the returned signal while the live event ledger below updates on visit.</p></div><div className="contribution-bars" aria-label={`${contributionSnapshot.total} contributions in dated 12-month snapshot`}>{contributionSnapshot.weeks.map((value, index) => <i key={index} style={{ height: `${Math.max(5, (value / maxWeek) * 100)}%`, opacity: value === 0 ? 0.22 : 0.35 + (value / maxWeek) * 0.65 }} title={`${value} contributions`} />)}</div></section>
    <section className="activity-statline"><div><strong>{source.events.filter((event) => event.type === "PushEvent").length}</strong><span>public pushes in returned feed</span></div><div><strong>{distinctRepos || "…"}</strong><span>repositories in returned feed</span></div><div><strong>{source.events.filter((event) => event.type === "PullRequestEvent").length}</strong><span>public pull-request events</span></div></section>
    <section className="activity-ledger"><div className="activity-ledger__head"><span>LIVE PUBLIC EVENT FEED</span><span>GitHub Events API / recent events</span></div>{source.events.slice(0, 24).map((event) => { const meta = eventMeta[event.type] || { label: event.type.replace(/Event$/, ""), icon: ActivityIcon }; const Icon = meta.icon; return <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="activity-row" key={event.id}><span className="activity-row__icon"><Icon size={16} /></span><div><b>{meta.label}</b><p>{event.repo.name}</p></div><time>{new Date(event.created_at).toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric" })}</time><ArrowUpRight size={15} /></a>; })}{source.status === "loading" && <p className="atlas-empty">Loading public event ledger…</p>}</section>
    <AtlasFooter />
  </main>;
}

