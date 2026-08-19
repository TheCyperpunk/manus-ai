/** Proof in Motion — concise overview routes visitors into distinct GitHub-backed evidence pages. */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Boxes, Github, GitPullRequest, Network, Sparkles } from "lucide-react";
import { githubHandle, useGithubMetrics, useGithubSource } from "@/lib/github-source";

const destinations = [
  { href: "/projects", index: "01", label: "Repository registry", title: "Browse every public build.", icon: Boxes, copy: "A filterable index of public repositories, languages, source links, forks, stars, and recency." },
  { href: "/activity", index: "02", label: "Contribution ledger", title: "Read the public trail.", icon: GitPullRequest, copy: "Contribution snapshots and the current public event stream, clearly labelled by source." },
  { href: "/network", index: "03", label: "Collaboration dossier", title: "Separate ownership from contribution.", icon: Network, copy: "Public organization membership and cross-repository activity shown without inference." },
  { href: "/stack", index: "04", label: "Language instrument", title: "See the codebase profile.", icon: Sparkles, copy: "Repository-derived language distribution and live build surfaces rather than a static skills wall." },
];

export default function Home() {
  const source = useGithubSource();
  const metrics = useGithubMetrics(source);
  const profile = source.profile;
  return (
    <main className="atlas-main">
      <section className="atlas-hero">
        <div className="atlas-hero__noise" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}>
          <p className="atlas-kicker"><i /> SOURCE ATLAS / PUBLIC GITHUB</p>
          <h1>Builds, not<br /><em>biography.</em></h1>
          <p className="atlas-hero__copy">A multi-page index of Sangeeth Karunakaran’s public engineering work. Follow the repositories, contribution signals, and collaboration trail directly to their source.</p>
          <div className="atlas-hero__actions"><Link href="/projects" className="atlas-button">Browse all repositories <ArrowDownRight size={17} /></Link><a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer" className="atlas-text-link">Open GitHub profile <ArrowUpRight size={15} /></a></div>
        </motion.div>
        <motion.aside className="identity-module" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}>
          <div className="identity-module__top"><img src={profile.avatar_url} alt="Sangeeth Karunakaran GitHub avatar" /><span>LIVE PROFILE</span></div>
          <strong>{profile.name || "SANGEETH KARUNAKARAN"}</strong>
          <a href={profile.html_url} target="_blank" rel="noreferrer">@{profile.login} <ArrowUpRight size={14} /></a>
          <dl><div><dt>Repos</dt><dd>{profile.public_repos}</dd></div><div><dt>Starred</dt><dd>{source.starred}</dd></div><div><dt>Followers</dt><dd>{profile.followers}</dd></div></dl>
          <p>{source.status === "ready" ? "Public profile data refreshed on this visit." : "Showing a dated public-profile snapshot while GitHub data loads."}</p>
        </motion.aside>
      </section>

      <section className="atlas-scanline"><span>PUBLIC GITHUB / {profile.public_repos} REPOSITORIES / {metrics.original.length || "…"} ORIGINAL ACTIVE CODEBASES / {profile.followers} FOLLOWERS</span><span>TRACE THE SOURCE →</span></section>

      <section className="atlas-destination-grid" aria-label="GitHub evidence pages">
        {destinations.map((destination, index) => {
          const Icon = destination.icon;
          return <motion.div key={destination.href} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: index * 0.05, duration: 0.45 }}><Link href={destination.href} className="destination-card"><span className="destination-card__index">{destination.index}</span><Icon size={21} /><p>{destination.label}</p><h2>{destination.title}</h2><span className="destination-card__copy">{destination.copy}</span><b>Open dossier <ArrowUpRight size={16} /></b></Link></motion.div>;
        })}
      </section>

      <section className="atlas-method">
        <div><p className="atlas-kicker">METHOD / 00</p><h2>Every tab points<br />back to <em>evidence.</em></h2></div>
        <div className="atlas-method__copy"><p>Repository information, public events, organization membership, and language distribution are pulled from GitHub’s public endpoints. A compact contribution instrument is a dated snapshot, labelled as such.</p><a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer"><Github size={16} /> Verify at github.com/{githubHandle} <ArrowUpRight size={15} /></a></div>
      </section>
    </main>
  );
}
