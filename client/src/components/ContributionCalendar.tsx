/** Proof in Motion — reusable contribution evidence instrument; preserve its compact source-led calendar presentation wherever it appears. */
import { ArrowUpRight } from "lucide-react";
import { calendarDays, contributionSnapshot } from "@/lib/github-source";

const monthMarkers = Array.from({ length: 53 }, (_, index) => {
  const current = new Date(`${calendarDays[index * 7].date}T00:00:00Z`);
  const prior = index ? new Date(`${calendarDays[(index - 1) * 7].date}T00:00:00Z`) : null;
  return index === 0 || current.getUTCMonth() !== prior?.getUTCMonth()
    ? { index, label: current.toLocaleString("en", { month: "short", timeZone: "UTC" }) }
    : null;
}).filter((marker): marker is { index: number; label: string } => marker !== null);

const calendarYears = [{ label: "2025", start: 1, end: 20 }, { label: "2026", start: 20, end: 54 }];

export function ContributionCalendar() {
  return <section className="activity-calendar" aria-label={`${contributionSnapshot.total} public GitHub contributions in the last year`}>
    <div className="activity-calendar__top"><div><p className="atlas-kicker"><b>S// 02A</b> PUBLIC CONTRIBUTION CALENDAR</p><strong>{contributionSnapshot.total} contributions in the last year</strong></div><span>17 Aug 2025 → 19 Aug 2026<br />Snapshot / {contributionSnapshot.captured}</span></div>
    <div className="activity-calendar__frame"><div className="activity-calendar__scroll"><div className="activity-calendar__inner"><div className="activity-calendar__years" aria-label="Contribution calendar year sections">{calendarYears.map((year) => <span className={`activity-calendar__year activity-calendar__year--${year.label}`} key={year.label} style={{ gridColumn: `${year.start} / ${year.end}` }}>{year.label}</span>)}</div><div className="activity-calendar__months">{monthMarkers.map((month) => <span key={`${month.label}-${month.index}`} style={{ gridColumn: month.index + 1 }}>{month.label}</span>)}</div><i className="activity-calendar__year-divider" aria-hidden="true" /><div className="activity-calendar__body"><div className="activity-calendar__days"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="activity-calendar__grid">{calendarDays.map((day) => <i key={day.date} className={`activity-calendar__cell activity-calendar__cell--${day.level}`} aria-label={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`} title={`${day.date} · ${day.count} contribution${day.count === 1 ? "" : "s"}`} />)}</div></div></div></div><div className="activity-calendar__foot"><span>Public contribution detail from a dated GitHub calendar capture.</span><div aria-label="Contribution activity legend"><small>Less</small><i className="activity-calendar__cell--0" /><i className="activity-calendar__cell--1" /><i className="activity-calendar__cell--2" /><i className="activity-calendar__cell--3" /><i className="activity-calendar__cell--4" /><small>More</small></div></div></div>
    <div className="activity-calendar__sources"><a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><b>S//</b> @TheCyperpunk / public profile <ArrowUpRight size={13} /></a><span>DAY-LEVEL SNAPSHOT</span><span>LIVE EVENT LEDGER BELOW</span></div>
  </section>;
}
