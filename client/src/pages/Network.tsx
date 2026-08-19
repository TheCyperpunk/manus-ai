/** Proof in Motion — collaboration dossier distinguishes public organization membership from activity in other repositories. */
import { ArrowUpRight, Building2, Github, Network as NetworkIcon, UsersRound } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { useGithubMetrics, useGithubSource } from "@/lib/github-source";

export default function Network() {
  const source = useGithubSource();
  const metrics = useGithubMetrics(source);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="03" eyebrow="Network dossier" title={<>Context over<br /><em>assumption.</em></>} copy="Public organization membership and cross-repository activity are different signals. This page presents both separately so a visitor can inspect collaboration evidence without mistaking activity for affiliation." aside={<SourceStatus status={source.status} />} />
    <section className="network-dossier"><article className="network-primary"><div className="network-primary__top"><Building2 size={22} /><span>PUBLIC ORGANIZATIONS</span></div>{source.status === "ready" && source.orgs.length === 0 ? <><strong>0</strong><h2>No public memberships<br />returned by GitHub.</h2><p>This result only describes public organization membership exposed by the profile API. It does not make a statement about private teams or other affiliations.</p></> : <div className="org-list">{source.orgs.map((org) => <a href={org.html_url} target="_blank" rel="noreferrer" key={org.login}><img src={org.avatar_url} alt="" /><span><b>{org.login}</b><small>{org.description || "Public GitHub organization"}</small></span><ArrowUpRight size={15} /></a>)}{source.status === "loading" && <p>Reading public organization data…</p>}</div>}</article><article className="network-secondary"><div className="network-primary__top"><NetworkIcon size={22} /><span>CROSS-REPOSITORY ACTIVITY</span></div><h2>Public contribution<br />targets in recent events.</h2><p>Derived from returned public GitHub events where the repository owner is not @TheCyperpunk. These are activity targets, not asserted memberships.</p><div className="external-list">{metrics.external.slice(0, 5).map((item, index) => <a href={`https://github.com/${item.owner}`} target="_blank" rel="noreferrer" key={item.owner}><span>0{index + 1}</span><b>{item.owner}</b><small>{item.events} returned events</small><ArrowUpRight size={14} /></a>)}{source.status === "ready" && metrics.external.length === 0 && <p>No external-owner events were returned in the current public feed.</p>}</div></article></section>
    <section className="collaboration-readout"><div><UsersRound size={19} /><p>HOW TO READ THIS PAGE</p></div><p>Official GitHub organizations come from the profile’s public organization endpoint. Collaboration targets come only from public events in repositories outside the profile owner. Both sections link back to their source.</p><a href="https://github.com/TheCyperpunk?tab=overview" target="_blank" rel="noreferrer"><Github size={16} /> Inspect profile overview <ArrowUpRight size={15} /></a></section>
    <AtlasFooter />
  </main>;
}

