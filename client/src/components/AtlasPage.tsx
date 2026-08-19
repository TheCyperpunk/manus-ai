/** Proof in Motion — shared routed-page framing for distinct public-evidence dossiers. */
import type { ReactNode } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "wouter";

export function AtlasPageHeader({ index, eyebrow, title, copy, aside }: { index: string; eyebrow: string; title: ReactNode; copy: string; aside?: ReactNode }) {
  return <section className="atlas-page-header"><div><p className="atlas-kicker">{index} / {eyebrow}</p><h1>{title}</h1></div><div className="atlas-page-header__side"><p>{copy}</p>{aside}</div></section>;
}

export function AtlasFooter() {
  return <footer className="atlas-footer"><span>PUBLIC SOURCE ATLAS · SANGEETH KARUNAKARAN</span><div><Link href="/">Overview</Link><a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a></div></footer>;
}

export function SourceStatus({ status }: { status: "loading" | "ready" | "degraded" }) {
  const label = status === "ready" ? "Live public API" : status === "loading" ? "Verified snapshot · refreshing" : "Dated fallback snapshot";
  return <span className={`source-status source-status--${status}`}><i /> {label}</span>;
}
