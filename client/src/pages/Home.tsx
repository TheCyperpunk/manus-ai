/**
 * Proof in Motion — near-black technical editorialism with Signal Lime evidence accents.
 * Built around staggered proof bands, small purposeful interactions, and distinct project artifacts.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  GitPullRequest,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Terminal,
  Trophy,
  X,
} from "lucide-react";

const githubUrl = "https://github.com/TheCyperpunk";

const featuredProjects = [
  {
    index: "01",
    title: "Onchain SIP",
    type: "Decentralized investment platform",
    description:
      "An on-chain Systematic Investment Plan that turns recurring investment logic into transparent smart-contract execution.",
    stack: ["Solidity", "Hardhat", "React", "Node.js", "Ethers.js", "Web3.js"],
    image: "/manus-storage/onchain-sip-art_0f164b8b.jpg",
    hue: "lime",
  },
  {
    index: "02",
    title: "Auradesk",
    type: "Private multimodal AI desktop UI",
    description:
      "A local-first assistant for vision and chat workflows, bringing RAG, speech, and web-aware tools into one private interface.",
    stack: ["Svelte", "Ollama", "Docker", "TypeScript", "Python", "RAG"],
    image: "/manus-storage/auradesk-art_9fb620ca.jpg",
    hue: "teal",
  },
  {
    index: "03",
    title: "ZeroHour",
    type: "Emergency response CLI tool",
    description:
      "A command-line workflow for rapid incident reporting and retrieval, designed to make coordination faster when time matters.",
    stack: ["Python", "Shell", "CLI automation", "REST APIs"],
    image: "/manus-storage/zerohour-art_2949fce7.jpg",
    hue: "ember",
  },
];

const skillRows = [
  {
    label: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Svelte", "Redux", "Tailwind", "Shadcn/UI", "Vite"],
  },
  {
    label: "Backend + infra",
    items: ["Node.js", "Express", "MongoDB", "Firebase", "Azure", "Docker", "Kubernetes", "Git"],
  },
  {
    label: "AI + Web3",
    items: ["OpenAI API", "LangChain", "Ollama", "FAISS", "ChromaDB", "Solidity", "Hardhat", "Ethers.js"],
  },
];

const experiences = [
  { role: "Full Stack Developer Intern", company: "Zecser LLP", duration: "5 months", note: "Shipped scalable application features, APIs, and optimized data flows." },
  { role: "MERN Stack Developer Intern", company: "Ziuke", duration: "8 months", note: "Built and refined end-to-end product experiences across the MERN stack." },
  { role: "Frontend Developer Intern", company: "Edunet Foundation", duration: "30 days", note: "Developed responsive UI components for production-style web applications." },
];

type GithubProfile = { public_repos: number; followers: number; following: number };
type RepoEvidence = { name: string; url: string; language: string; updatedAt: string; stars: number };

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const started = performance.now();
    const duration = 960;
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

function TiltProjectCard({ project, delay }: { project: (typeof featuredProjects)[number]; delay: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 18 });

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Reveal delay={delay}>
      <motion.article
        className={`project-card project-card--${project.hue}`}
        onMouseMove={onMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="project-card__glow" aria-hidden="true" />
        <div className="project-card__image-wrap" style={{ transform: "translateZ(22px)" }}>
          <img src={project.image} alt={`Abstract technical artwork for ${project.title}`} className="project-card__image" />
          <div className="project-card__image-shade" />
          <span className="project-card__index">{project.index}</span>
        </div>
        <div className="project-card__body" style={{ transform: "translateZ(34px)" }}>
          <p className="eyebrow">{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <div className="chip-row">
            {project.stack.map((item) => <span className="stack-chip" key={item}>{item}</span>)}
          </div>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="source-link">
            View source on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [github, setGithub] = useState({ repos: 114, stars: 55, followers: 11, following: 15 });
  const [proofRepos, setProofRepos] = useState<RepoEvidence[]>([
    { name: "avax-onchain", url: githubUrl, language: "Solidity", updatedAt: "Open source", stars: 0 },
    { name: "automated-firewall", url: githubUrl, language: "Python", updatedAt: "Open source", stars: 0 },
    { name: "job-portal-backend", url: githubUrl, language: "Node.js", updatedAt: "Open source", stars: 0 },
    { name: "SorobanVault", url: githubUrl, language: "Rust", updatedAt: "Open source", stars: 0 },
  ]);

  useEffect(() => {
    const syncScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncScroll);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function loadGithub() {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch("https://api.github.com/users/TheCyperpunk", { signal: controller.signal }),
          fetch("https://api.github.com/users/TheCyperpunk/repos?per_page=100&sort=updated", { signal: controller.signal }),
        ]);
        if (!profileResponse.ok || !reposResponse.ok) return;
        const profile = (await profileResponse.json()) as GithubProfile;
        const repos = (await reposResponse.json()) as Array<{ name: string; html_url: string; language: string | null; updated_at: string; stargazers_count: number }>;
        setGithub({
          repos: profile.public_repos,
          followers: profile.followers,
          following: profile.following,
          stars: repos.reduce((total, repo) => total + repo.stargazers_count, 0),
        });
        setProofRepos(repos.slice(0, 4).map((repo) => ({
          name: repo.name,
          url: repo.html_url,
          language: repo.language || "Source code",
          updatedAt: new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(repo.updated_at)),
          stars: repo.stargazers_count,
        })));
      } catch {
        // The resume-backed values remain visible if public GitHub rate limits are reached.
      }
    }
    loadGithub();
    return () => controller.abort();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["Work", "#work"],
    ["Skills", "#skills"],
    ["Proof", "#proof"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <a href="#top" className="brand" aria-label="Sangeeth Karunakaran home" onClick={closeMenu}>
          <img src="/manus-storage/sangeeth-signal-mark_5302d470.png" alt="" className="brand__mark" />
          <span className="brand__wordmark">SANGEETH<span>//</span>K</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, link]) => <a href={link} key={label}>{label}</a>)}
        </nav>
        <a className="nav-github" href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        <button className="nav-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(([label, link]) => <a href={link} key={label} onClick={closeMenu}>{label}</a>)}
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-rail" aria-labelledby="hero-title">
          <img className="hero__art" src="/manus-storage/sangeeth-hero-atmosphere_7ded53a2.jpg" alt="" aria-hidden="true" />
          <div className="hero__mesh" aria-hidden="true" />
          <div className="hero__content">
            <Reveal className="hero__meta" delay={0.05}>
              <span className="status-dot" />
              CS undergrad · Kerala, India · Available for new builds
            </Reveal>
            <motion.h1 id="hero-title" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.075, delayChildren: 0.14 } } }}>
              {["I build practical", "AI systems and", "Web3 platforms."].map((line) => (
                <span className="hero__line" key={line}>
                  <motion.span variants={{ hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.78, ease: [0.23, 1, 0.32, 1] } } }}>{line}</motion.span>
                </span>
              ))}
            </motion.h1>
            <Reveal delay={0.48} className="hero__bottom">
              <p className="hero__intro">Full-stack developer making scalable products at the intersection of modern frontend systems, LLM tooling, and on-chain infrastructure.</p>
              <div className="hero__actions">
                <a href="#work" className="button button--primary">Trace the build <ArrowDownRight size={18} /></a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="text-action">Explore GitHub <ArrowUpRight size={16} /></a>
              </div>
            </Reveal>
          </div>
          <div className="hero__terminal terminal-card" aria-label="Terminal excerpt">
            <div className="terminal-card__bar"><span /><span /><span /><p>build.log</p></div>
            <div className="terminal-card__content">
              <p><span className="terminal-prompt">$</span> whoami</p>
              <p className="terminal-output">full-stack / AI / Web3 builder</p>
              <p><span className="terminal-prompt">$</span> focus --now</p>
              <p className="terminal-output">useful systems, shipped cleanly.</p>
              <span className="terminal-cursor" />
            </div>
          </div>
          <a href="#work" className="hero__scroll-cue"><span /> Scroll to proof</a>
        </section>

        <section id="work" className="work-section section-rail">
          <Reveal className="section-heading">
            <div><p className="section-number">01 / SELECTED WORK</p><h2>Made to survive<br /><em>the demo.</em></h2></div>
            <p className="section-heading__copy">Systems with a point of view: decentralised money flows, private local intelligence, and tools built for high-stakes coordination.</p>
          </Reveal>
          <div className="project-grid">
            {featuredProjects.map((project, index) => <TiltProjectCard project={project} delay={index * 0.1} key={project.title} />)}
          </div>
          <Reveal className="repo-strip" delay={0.1}>
            <div className="repo-strip__heading"><Github size={18} /> More signals from the lab</div>
            <div className="repo-strip__links">
              {["avax-onchain", "automated-firewall", "job-portal-backend", "SorobanVault", "XlmAssetKit"].map((repo) => <a href={githubUrl} target="_blank" rel="noreferrer" key={repo}>{repo}<ArrowUpRight size={13} /></a>)}
            </div>
          </Reveal>
        </section>

        <section id="proof" className="proof-section section-rail">
          <div className="proof-section__wash" aria-hidden="true" />
          <Reveal className="proof-section__inner">
            <p className="section-number">02 / RECOGNITION</p>
            <div className="proof-section__headline"><h2>Built under<br />real <em>pressure.</em></h2><p>Two first-place finishes. Every win is a reminder that the best technical work begins with a constraint worth solving.</p></div>
            <div className="award-grid">
              <article className="award-card"><Trophy size={22} /><p className="award-card__label">First Prize</p><h3>Data Innovate X Ideathon</h3><p>St. Thomas College</p><span>01</span></article>
              <article className="award-card"><Trophy size={22} /><p className="award-card__label">First Prize</p><h3>LastBot Hackathon</h3><p>IIIT Kottayam</p><span>02</span></article>
              <div className="proof-statement"><strong>02</strong><span>first-prize<br />hackathon wins</span></div>
            </div>
          </Reveal>
        </section>

        <section className="github-section section-rail" aria-labelledby="github-title">
          <Reveal className="github-section__top">
            <div><p className="section-number">03 / OPEN SOURCE, LIVE</p><h2 id="github-title">Evidence,<br /><em>not adjectives.</em></h2></div>
            <div className="github-section__note"><GitPullRequest size={20} /><p>Public activity from <a href={githubUrl} target="_blank" rel="noreferrer">@TheCyperpunk</a>. The counter refreshes against GitHub on each visit.</p></div>
          </Reveal>
          <Reveal className="stat-grid" delay={0.05}>
            <div className="stat-card"><strong><CountUp value={github.repos} /></strong><span>public repositories</span><i>01</i></div>
            <div className="stat-card"><strong><CountUp value={github.stars} /></strong><span>stars earned</span><i>02</i></div>
            <div className="stat-card"><strong><CountUp value={github.followers} /></strong><span>followers</span><i>03</i></div>
            <div className="stat-card"><strong><CountUp value={github.following} /></strong><span>following</span><i>04</i></div>
          </Reveal>
          <Reveal className="github-visuals" delay={0.12}>
            <div className="github-visuals__copy"><span className="pill"><GitPullRequest size={14} /> Pull Shark</span><h3>Working in public.<br />Learning in the open.</h3><a href={githubUrl} target="_blank" rel="noreferrer" className="source-link">Visit the profile <ArrowUpRight size={15} /></a></div>
            <div className="commit-field" aria-label="Recent public GitHub repository evidence">
              <div className="commit-field__bar"><span>RECENT SOURCE SIGNALS</span><span>GitHub API / live</span></div>
              <div className="proof-feed">
                {proofRepos.map((repo, index) => <a href={repo.url} target="_blank" rel="noreferrer" className="proof-feed__item" key={repo.name}>
                  <span className="proof-feed__index">0{index + 1}</span><strong>{repo.name}</strong><span>{repo.language}</span><time>{repo.updatedAt}</time><ArrowUpRight size={14} />
                </a>)}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="skills-section section-rail">
          <Reveal className="skills-section__heading"><p className="section-number">04 / THE WORKBENCH</p><h2>A stack for<br /><em>making things real.</em></h2></Reveal>
          <div className="skills-rows">
            {skillRows.map((row, index) => (
              <Reveal className="skill-row" delay={index * 0.07} key={row.label}>
                <span className="skill-row__label">{row.label}</span>
                <div className="marquee-mask"><div className="skill-marquee">
                  {[...row.items, ...row.items].map((skill, skillIndex) => <span className="skill-pill" key={`${skill}-${skillIndex}`}><Code2 size={14} /> {skill}</span>)}
                </div></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="method-section section-rail">
          <Reveal className="method-aside"><span className="method-aside__line" /><p className="section-number">05 / HOW I WORK</p><p className="method-aside__quote">“Build close to real users. Keep the stack pragmatic.”</p></Reveal>
          <Reveal className="method-copy" delay={0.08}><h2>The useful version<br />is the <em>finished one.</em></h2><p>I like working close to the actual problem: tracing a workflow, choosing the smallest sensible stack, and making a system clear enough that someone else can trust it. New frameworks are useful only when they earn their place.</p><p>That means thinking past the demo. I care about error states, deployment, the messy data paths, and what happens when a real person returns to a tool next week. Every project is both a product and a way to get better at the next one.</p></Reveal>
        </section>

        <section className="experience-section section-rail">
          <Reveal className="experience-section__heading"><div><p className="section-number">06 / FIELD NOTES</p><h2>Hands-on<br /><em>by default.</em></h2></div><p>Three internships across full-stack and frontend product work, running alongside a B.Tech in Computer Science.</p></Reveal>
          <div className="experience-list">
            {experiences.map((experience, index) => <Reveal delay={index * 0.08} className="experience-item" key={experience.company}><span className="experience-item__index">0{index + 1}</span><div><h3>{experience.role}</h3><p>{experience.company} · {experience.duration}</p></div><p className="experience-item__note">{experience.note}</p><ArrowUpRight size={19} /></Reveal>)}
          </div>
          <Reveal className="education-card" delay={0.12}><Layers3 size={20} /><div><p className="eyebrow">Education</p><h3>B.Tech, Computer Science & Engineering</h3><p>APJ Abdul Kalam Technological University · 2022–2026</p></div><span>KERALA / IN</span></Reveal>
        </section>

        <section id="contact" className="contact-section section-rail">
          <div className="contact-section__orb" aria-hidden="true" />
          <Reveal className="contact-section__content"><p className="section-number">07 / CONTACT</p><h2>Have a problem<br />worth <em>building?</em></h2><p className="contact-section__intro">Have a project in mind, or just want to say hi? I read everything and reply fast.</p><a href="mailto:sangeethkarunakaran16@gmail.com" className="button button--primary button--large">Start a conversation <ArrowRight size={21} /></a></Reveal>
          <Reveal className="contact-section__details" delay={0.1}><a href="mailto:sangeethkarunakaran16@gmail.com"><Mail size={18} />sangeethkarunakaran16@gmail.com<ArrowUpRight size={15} /></a><a href="tel:+919539432154"><Phone size={18} />+91 95394 32154<ArrowUpRight size={15} /></a><span><MapPin size={18} />Sulthan Bathery, Wayanad, Kerala</span><a href={githubUrl} target="_blank" rel="noreferrer"><Github size={18} />github.com/TheCyperpunk<ArrowUpRight size={15} /></a></Reveal>
        </section>
      </main>

      <footer className="site-footer"><div><img src="/manus-storage/sangeeth-signal-mark_5302d470.png" alt="" /><span>SANGEETH<span>//</span>K</span></div><p>© 2026 Sangeeth Karunakaran. Built with React, motion, and intent.</p><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
