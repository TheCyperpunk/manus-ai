/** Proof in Motion — technical case studies are source-led evidence tapes: explicit topology, traceable files, and motion reserved for system state. */
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, GitBranch, Layers3, ShieldCheck, Terminal } from "lucide-react";
import { Link, useRoute } from "wouter";
import { AtlasFooter, AtlasPageHeader } from "@/components/AtlasPage";
import { caseStudyBySlug, type CaseStudy as CaseStudyData } from "@/lib/case-studies";

function ProofInstrument({ study }: { study: CaseStudyData }) {
  if (study.slug === "onchain-sip") {
    return <section className="case-instrument case-instrument--sip" aria-label="Onchain SIP contract-state lifecycle"><header><span>S//{study.index} / PRIMARY PROOF INSTRUMENT</span><b>CONTRACT STATE / PLAN LIFECYCLE</b><i>LIVE TESTNET MODEL</i></header><div className="case-instrument__sip-grid"><div className="sip-state sip-state--open"><small>01 / PLAN OPEN</small><strong>FUNDED</strong><code>active = true</code></div><div className="sip-connector"><i /><span>INTERVAL<br />ELIGIBLE</span><i /></div><div className="sip-state sip-state--execute"><small>02 / EXECUTE</small><strong>TRANSFER</strong><code>lastExecutedAt</code></div><div className="sip-connector"><i /><span>MATURITY<br />REACHED</span><i /></div><div className="sip-state sip-state--final"><small>03 / FINALIZE</small><strong>SETTLED</strong><code>active = false</code></div></div><footer><span>CREATE PLAN</span><i /> <span>READ CONTRACT</span><i /> <span>EXECUTE SIP</span><i /> <b>FINALIZE SIP</b></footer></section>;
  }

  if (study.slug === "xmo-messenger") {
    return <section className="case-instrument case-instrument--xmo" aria-label="XMO browser to native application handoff"><header><span>S//{study.index} / PRIMARY PROOF INSTRUMENT</span><b>ROUTE → PREVIEW → NATIVE HANDOFF</b><i>APP-LINK SURFACE</i></header><div className="case-instrument__xmo-grid"><div className="xmo-browser"><small>BROWSER / JOIN ROUTE</small><code>/{"join"}/:token</code><p>TOKEN PATTERN<br /><b>VALIDATE</b></p></div><div className="xmo-trace"><span>GET</span><i /><strong>INVITE PREVIEW</strong><i /><span>PARSE</span><em>no-store · omit credentials</em></div><div className="xmo-phone"><small>NATIVE CLIENT</small><div className="xmo-phone__screen"><i>GROUP / CHANNEL</i><b>xmo://join/:token</b><span>OPEN IN XMO</span></div><em>DEEP-LINK HANDOFF</em></div></div><footer><span>ROUTE TOKEN</span><i /> <span>PREVIEW STATE</span><i /> <span>UNAVAILABLE FALLBACK</span><i /> <b>NATIVE JOIN</b></footer></section>;
  }

  return <section className="case-instrument case-instrument--soroban" aria-label="SorobanVault controlled token transfer policy"><header><span>S//{study.index} / PRIMARY PROOF INSTRUMENT</span><b>CONTROLLED TOKEN TRANSFER / POLICY MANIFOLD</b><i>CONTRACT BOUNDARY</i></header><div className="case-instrument__soroban-grid"><div className="soroban-token"><small>INPUT / TOKEN CALL</small><strong>TRANSFER</strong><code>token::Interface</code></div><div className="soroban-policy"><span>PASS KYC</span><i /><span>CHECKPOINT REWARD</span><i /><span>CHECK BLACKLIST</span><i /><span>MOVE BALANCE</span></div><div className="soroban-ledger"><small>OUTPUT / STATE</small><div><span>ALLOWANCE</span><b>↗</b></div><div><span>REWARD</span><b>↗</b></div><div><span>BALANCE</span><b>↗</b></div><em>TTL EXTENDED</em></div></div><footer><span>POLICY GATE</span><i /> <span>REWARD ACCOUNTING</span><i /> <span>AMM CONTEXT</span><i /> <b>TRANSFER RESULT</b></footer></section>;
}

export default function CaseStudy() {
  const [, params] = useRoute("/case-studies/:slug");
  const study = caseStudyBySlug[params?.slug || ""];

  if (!study) {
    return <main className="atlas-main atlas-page case-study case-study--missing"><p className="atlas-kicker">SOURCE NOT FOUND</p><h1>That dossier<br /><em>is not indexed.</em></h1><Link className="case-study__back" href="/projects"><ArrowLeft size={14} /> Return to registry</Link></main>;
  }

  return <main className="atlas-main atlas-page case-study">
    <nav className="case-study__crumbs" aria-label="Case study breadcrumb"><Link href="/projects"><ArrowLeft size={14} /> Repository registry</Link><span>/</span><b>{study.index} · {study.name}</b></nav>
    <section className="case-study__hero">
      <div className={`case-study__signal-field case-study__signal-field--${study.slug}`} aria-hidden="true">
        <span className="case-study__signal-field-index">S//{study.index} / EVIDENCE FIELD</span>
        <span className="case-study__signal-field-glyph">0{study.index}</span>
        <i className="case-study__signal-field-axis case-study__signal-field-axis--vertical" />
        <i className="case-study__signal-field-axis case-study__signal-field-axis--horizontal" />
        <span className="case-study__signal-field-cut case-study__signal-field-cut--one" />
        <span className="case-study__signal-field-cut case-study__signal-field-cut--two" />
      </div>
      <div className="case-study__hero-rail" aria-hidden="true"><span>S//{study.index}</span><i /><i /><i /></div>
      <AtlasPageHeader index={study.index} eyebrow={study.mode} title={<> {study.headline.split("\n").map((line, index) => <span className="case-study__headline-line" key={line}>{line}{index === 0 && <br />}</span>)}</>} copy={study.summary} aside={<span className="case-study__status"><i /> {study.status}</span>} />
      <div className="case-study__hero-bottom"><div className="case-study__artifact"><span>PRIMARY ARTIFACT</span><strong>{study.artifact}</strong></div><div className="case-study__links"><a href={study.repositoryUrl} target="_blank" rel="noreferrer"><Github size={15} /> SOURCE <ArrowUpRight size={13} /></a>{study.liveUrl && <a href={study.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> {study.liveLabel || "OPEN SURFACE"} <ArrowUpRight size={13} /></a>}</div></div>
    </section>

    <ProofInstrument study={study} />

    <section className="case-study__topology" aria-labelledby="topology-title">
      <header className="case-study__section-head"><div><span className="case-study__marker"><Layers3 size={15} /> {study.topologyLabel}</span><h2 id="topology-title">The system<br /><em>in motion.</em></h2></div><p>{study.topologyIntro}</p></header>
      <div className="case-study__flow" role="list">{study.steps.map((step, index) => <article className="case-study__flow-node" role="listitem" key={step.label}><div className="case-study__flow-index"><span>{step.label}</span>{index < study.steps.length - 1 && <i aria-hidden="true" />}</div><h3>{step.title}</h3><p>{step.copy}</p><code>{step.trace}</code></article>)}</div>
      <div className="case-study__tracebar" aria-label="Architecture trace"><Terminal size={15} /><span>TRACE / {study.steps.map((step) => step.trace).join("  →  ")}</span><b>PUBLIC SOURCE</b></div>
    </section>

    <section className="case-study__decisions" aria-labelledby="decisions-title"><div className="case-study__decisions-title"><span className="case-study__marker"><GitBranch size={15} /> IMPLEMENTATION CHOICES</span><h2 id="decisions-title">Architecture<br /><em>with receipts.</em></h2></div><div className="case-study__decision-grid">{study.decisions.map((decision, index) => <article key={decision.label} className="case-study__decision"><span>{String(index + 1).padStart(2, "0")} / {decision.label}</span><strong>{decision.value}</strong><p>{decision.copy}</p></article>)}</div></section>

    <section className="case-study__evidence" aria-labelledby="evidence-title"><header><div><span className="case-study__marker"><ShieldCheck size={15} /> INSPECTED PUBLIC EVIDENCE</span><h2 id="evidence-title">Nothing here<br /><em>is ornamental.</em></h2></div><p>{study.result}</p></header><div className="case-study__evidence-list">{study.evidence.map((entry, index) => <a href={entry.url} target="_blank" rel="noreferrer" key={entry.path}><span>S//{study.index}/{String(index + 1).padStart(2, "0")}</span><div><b>{entry.path}</b><p>{entry.claim}</p></div><ArrowUpRight size={17} /></a>)}</div></section>

    <section className="case-study__closing"><p>SEE THE REST OF THE PUBLIC SOURCE ATLAS</p><div><Link href="/projects">Return to repository registry <ArrowUpRight size={15} /></Link><a href={study.repositoryUrl} target="_blank" rel="noreferrer">Open {study.repository} <Github size={15} /></a></div></section>
    <AtlasFooter />
  </main>;
}
