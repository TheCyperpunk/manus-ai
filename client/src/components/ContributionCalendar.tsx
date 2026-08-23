/** Proof in Motion — reusable contribution evidence instrument; retain the compact source-led visual calendar while allowing its data to refresh securely. */
import { ArrowUpRight } from "lucide-react";
import { ContributionDay, useContributionCalendar } from "@/lib/github-source";

function formatDateRange(from: string, to: string) {
  const format = (value: string) => new Date(`${value}T00:00:00Z`).toLocaleDateString("en", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
  return `${format(from)} → ${format(to)}`;
}

function getCalendarMarkers(days: ContributionDay[]) {
  const weekCount = Math.ceil(days.length / 7);
  const months = Array.from({ length: weekCount }, (_, index) => {
    const current = new Date(`${days[index * 7].date}T00:00:00Z`);
    const prior = index ? new Date(`${days[(index - 1) * 7].date}T00:00:00Z`) : null;
    return index === 0 || current.getUTCMonth() !== prior?.getUTCMonth()
      ? { index, label: current.toLocaleString("en", { month: "short", timeZone: "UTC" }) }
      : null;
  }).filter((marker): marker is { index: number; label: string } => marker !== null);

  const starts = Array.from({ length: weekCount }, (_, index) => ({
    index,
    year: new Date(`${days[index * 7].date}T00:00:00Z`).getUTCFullYear().toString(),
  })).filter((entry, index, entries) => index === 0 || entry.year !== entries[index - 1].year);

  return {
    months,
    years: starts.map((entry, index) => ({
      label: entry.year,
      start: entry.index + 1,
      end: (starts[index + 1]?.index ?? weekCount) + 1,
    })),
  };
}

export function ContributionCalendar() {
  const calendar = useContributionCalendar();
  const { months, years } = getCalendarMarkers(calendar.days);
  const sourceLabel = calendar.status === "live" ? "LIVE GITHUB DATA" : "DAY-LEVEL SNAPSHOT";
  const freshnessLabel = calendar.status === "live" && calendar.fetchedAt
    ? `Live / ${new Date(calendar.fetchedAt).toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit", timeZone: "UTC", timeZoneName: "short" })}`
    : "Snapshot / 19 Aug 2026";

  return <section className="activity-calendar" aria-label={`${calendar.total} public GitHub contributions in the last year`}>
    <div className="activity-calendar__top"><div><p className="atlas-kicker"><b>S// 02A</b> PUBLIC CONTRIBUTION CALENDAR</p><strong>{calendar.total} contributions in the last year</strong></div><span>{formatDateRange(calendar.from, calendar.to)}<br />{freshnessLabel}</span></div>
    <div className="activity-calendar__frame"><div className="activity-calendar__scroll"><div className="activity-calendar__inner"><div className="activity-calendar__years" aria-label="Contribution calendar year sections">{years.map((year) => <span className={`activity-calendar__year activity-calendar__year--${year.label}`} key={year.label} style={{ gridColumn: `${year.start} / ${year.end}` }}>{year.label}</span>)}</div><div className="activity-calendar__months">{months.map((month) => <span key={`${month.label}-${month.index}`} style={{ gridColumn: month.index + 1 }}>{month.label}</span>)}</div><i className="activity-calendar__year-divider" aria-hidden="true" /><div className="activity-calendar__body"><div className="activity-calendar__days"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="activity-calendar__grid">{calendar.days.map((day) => <i key={day.date} className={`activity-calendar__cell activity-calendar__cell--${day.level}`} aria-label={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`} title={`${day.date} · ${day.count} contribution${day.count === 1 ? "" : "s"}`} />)}</div></div></div></div><div className="activity-calendar__foot"><span>{calendar.status === "live" ? "Live public contribution detail from GitHub." : "Public contribution detail from a dated GitHub calendar capture."}</span><div aria-label="Contribution activity legend"><small>Less</small><i className="activity-calendar__cell--0" /><i className="activity-calendar__cell--1" /><i className="activity-calendar__cell--2" /><i className="activity-calendar__cell--3" /><i className="activity-calendar__cell--4" /><small>More</small></div></div></div>
    <div className="activity-calendar__sources"><a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><b>S//</b> @TheCyperpunk / public profile <ArrowUpRight size={13} /></a><span>{sourceLabel}</span><span>LIVE EVENT LEDGER BELOW</span></div>
  </section>;
}
