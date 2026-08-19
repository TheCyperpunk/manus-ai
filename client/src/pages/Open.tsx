/** Proof in Motion — open channel is a dedicated collaboration page anchored in public-source evidence. */
import { ArrowUpRight, Github, Mail, Radio, Sparkles } from "lucide-react";
import { AtlasFooter, AtlasPageHeader, SourceStatus } from "@/components/AtlasPage";
import { githubHandle, useGithubMetrics, useGithubSource } from "@/lib/github-source";

export default function Open() {
  const source = useGithubSource();
  const metrics = useGithubMetrics(source);
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="05" eyebrow="Open channel" title={<>The next useful<br /><em>thing can start here.</em></>} copy="A collaboration entry point for full-stack, AI, and on-chain product work—grounded in the public source trail rather than a generic availability statement." aside={<SourceStatus status={source.status} />} />
    <section className="open-console"><div className="open-console__signal"><span><i /> CHANNEL / OPEN</span><Radio size={22} /></div><h2>Bring the real<br />constraint.</h2><p>I’m most useful where a product needs equal attention across its interface, system logic, and proof that it can survive beyond the first demo.</p><a className="atlas-button" href="mailto:sangeethkarunakaran16@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></section>
    <section className="open-evidence"><article><Github size={20} /><strong>{source.profile.public_repos}</strong><span>public repositories to inspect</span><a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer">Open source atlas <ArrowUpRight size={14} /></a></article><article><Sparkles size={20} /><strong>{metrics.languages.length || "…"}</strong><span>repository-derived language signals</span><a href="/stack">Read the stack <ArrowUpRight size={14} /></a></article><article><Radio size={20} /><strong>{source.status === "ready" ? "LIVE" : "SYNC"}</strong><span>public GitHub profile evidence</span><a href="/activity">Trace activity <ArrowUpRight size={14} /></a></article></section>
    <AtlasFooter />
  </main>;
}

