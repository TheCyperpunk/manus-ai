/** Proof in Motion — activity ledger distinguishes a dated contribution snapshot from the live public-event feed. */
import { Activity as ActivityIcon, ArrowUpRight, GitCommitHorizontal, GitPullRequest, PlusSquare } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { calendarDays, contributionSnapshot, useGithubSource } from "@/lib/github-source";

/** Proof in Motion activity page — source-led calendar instrumentation, compact mono metadata, and Signal Lime reserved for verified activity. */
const eventMeta: Record<string, { label: string; icon: typeof GitCommitHorizontal }> = { PushEvent: { label: "Pushed commits", icon: GitCommitHorizontal }, PullRequestEvent: { label: "Pull request", icon: GitPullRequest }, CreateEvent: { label: "Created source", icon: PlusSquare } };
const monthMarkers = Array.from({ length: 53 }, (_, index) => {
  const current = new Date(`${calendarDays[index * 7].date}T00:00:00Z`);
  const prior = index ? new Date(`${calendarDays[(index - 1) * 7].date}T00:00:00Z`) : null;
  return index === 0 || current.getUTCMonth() !== prior?.getUTCMonth()
    ? { index, label: current.toLocaleString("en", { month: "short", timeZone: "UTC" }) }
    : null;
}).filter((marker): marker is { index: number; label: string } => marker !== null);
const calendarYears = [{ label: "2025", start: 1, end: 20 }, { label: "2026", start: 20, end: 54 }];

export default function Activity() {
  const source = useGithubSource();
  const distinctRepos = new Set(source.events.map((event) => event.repo.name)).size;
  const eventClusters = source.events.slice(0, 24).reduce<Array<{ day: string; events: typeof source.events }>>((clusters, event) => {
    const day = new Date(event.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    const latest = clusters[clusters.length - 1];
    if (!latest || latest.day !== day) clusters.push({ day, events: [event] });
    else latest.events.push(event);
    return clusters;
  }, []);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="02" eyebrow="Contribution ledger" title={<>The trail is<br /><em>part of the work.</em></>} copy="Two sources, explicitly separated: a dated contribution-calendar capture and a live stream of GitHub public events. Nothing is extrapolated beyond the returned evidence." aside={<SourceStatus status={source.status} />} />
    <section className="activity-calendar" aria-label={`${contributionSnapshot.total} public GitHub contributions in the last year`}>
      <div className="activity-calendar__top"><div><p className="atlas-kicker"><b>S// 02A</b> PUBLIC CONTRIBUTION CALENDAR</p><strong>{contributionSnapshot.total} contributions in the last year</strong></div><span>17 Aug 2025 → 19 Aug 2026<br />Snapshot / {contributionSnapshot.captured}</span></div>
      <div className="activity-calendar__frame"><div className="activity-calendar__scroll"><div className="activity-calendar__inner"><div className="activity-calendar__years" aria-label="Contribution calendar year sections">{calendarYears.map((year) => <span className={`activity-calendar__year activity-calendar__year--${year.label}`} key={year.label} style={{ gridColumn: `${year.start} / ${year.end}` }}>{year.label}</span>)}</div><div className="activity-calendar__months">{monthMarkers.map((month) => <span key={`${month.label}-${month.index}`} style={{ gridColumn: month.index + 1 }}>{month.label}</span>)}</div><i className="activity-calendar__year-divider" aria-hidden="true" /><div className="activity-calendar__body"><div className="activity-calendar__days"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="activity-calendar__grid">{calendarDays.map((day) => <i key={day.date} className={`activity-calendar__cell activity-calendar__cell--${day.level}`} aria-label={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`} title={`${day.date} · ${day.count} contribution${day.count === 1 ? "" : "s"}`} />)}</div></div></div></div><div className="activity-calendar__foot"><span>Public contribution detail from a dated GitHub calendar capture.</span><div aria-label="Contribution activity legend"><small>Less</small><i className="activity-calendar__cell--0" /><i className="activity-calendar__cell--1" /><i className="activity-calendar__cell--2" /><i className="activity-calendar__cell--3" /><i className="activity-calendar__cell--4" /><small>More</small></div></div></div>
      <div className="activity-calendar__sources"><a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><b>S//</b> @TheCyperpunk / public profile <ArrowUpRight size={13} /></a><span>DAY-LEVEL SNAPSHOT</span><span>LIVE EVENT LEDGER BELOW</span></div>
    </section>
    <section className="activity-statline"><div><small>S// PUSH</small><strong>{source.events.filter((event) => event.type === "PushEvent").length}</strong><span>public pushes in returned feed</span></div><div><small>S// REPO</small><strong>{distinctRepos || "…"}</strong><span>repositories in returned feed</span></div><div><small>S// PR</small><strong>{source.events.filter((event) => event.type === "PullRequestEvent").length}</strong><span>public pull-request events</span></div></section>
    <section className="activity-ledger"><div className="activity-ledger__head"><span><b>S// 02B</b> LIVE PUBLIC EVENT FEED</span><span>GitHub Events API / recent events</span></div>{eventClusters.map((cluster, clusterIndex) => <div className="activity-ledger__cluster" key={cluster.day}><div className="activity-ledger__break"><span>S// {String(clusterIndex + 1).padStart(2, "0")}</span><b>{cluster.day}</b><i /></div>{cluster.events.map((event) => { const meta = eventMeta[event.type] || { label: event.type.replace(/Event$/, ""), icon: ActivityIcon }; const Icon = meta.icon; return <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="activity-row" key={event.id}><span className="activity-row__icon"><Icon size={16} /></span><div><b>{meta.label}</b><p>{event.repo.name}</p></div><time>{new Date(event.created_at).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}</time><ArrowUpRight size={15} /></a>; })}</div>)}{source.status === "loading" && <p className="atlas-empty">Loading public event ledger…</p>}</section>
    <AtlasFooter />
  </main>;
}
