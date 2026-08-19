/** Proof in Motion — activity ledger distinguishes a dated contribution snapshot from the live public-event feed. */
import { Activity as ActivityIcon, ArrowUpRight, GitCommitHorizontal, GitPullRequest, PlusSquare } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { useGithubSource } from "@/lib/github-source";
import { ContributionCalendar } from "@/components/ContributionCalendar";

/** Proof in Motion activity page — source-led calendar instrumentation, compact mono metadata, and Signal Lime reserved for verified activity. */
const eventMeta: Record<string, { label: string; icon: typeof GitCommitHorizontal }> = { PushEvent: { label: "Pushed commits", icon: GitCommitHorizontal }, PullRequestEvent: { label: "Pull request", icon: GitPullRequest }, CreateEvent: { label: "Created source", icon: PlusSquare } };
export default function Activity() {
  const source = useGithubSource();
  const eventClusters = source.events.slice(0, 24).reduce<Array<{ day: string; events: typeof source.events }>>((clusters, event) => {
    const day = new Date(event.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    const latest = clusters[clusters.length - 1];
    if (!latest || latest.day !== day) clusters.push({ day, events: [event] });
    else latest.events.push(event);
    return clusters;
  }, []);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="02" eyebrow="Contribution ledger" title={<>The trail is<br /><em>part of the work.</em></>} copy="Two sources, explicitly separated: a dated contribution-calendar capture and a live stream of GitHub public events. Nothing is extrapolated beyond the returned evidence." aside={<SourceStatus status={source.status} />} />
    <section className="activity-ledger"><div className="activity-ledger__head"><span><b>S// 02B</b> LIVE PUBLIC EVENT FEED</span><span>GitHub Events API / recent events</span></div>{eventClusters.map((cluster, clusterIndex) => <div className="activity-ledger__cluster" key={cluster.day}><div className="activity-ledger__break"><span>S// {String(clusterIndex + 1).padStart(2, "0")}</span><b>{cluster.day}</b><i /></div>{cluster.events.map((event) => { const meta = eventMeta[event.type] || { label: event.type.replace(/Event$/, ""), icon: ActivityIcon }; const Icon = meta.icon; return <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="activity-row" key={event.id}><span className="activity-row__icon"><Icon size={16} /></span><div><b>{meta.label}</b><p>{event.repo.name}</p></div><time>{new Date(event.created_at).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}</time><ArrowUpRight size={15} /></a>; })}</div>)}{source.status === "loading" && <p className="atlas-empty">Loading public event ledger…</p>}</section>
    <AtlasFooter />
  </main>;
}
