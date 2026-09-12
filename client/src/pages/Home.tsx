/**
 * Proof in Motion / Overview: portrait-led personal dossier, Signal Lime accents,
 * kinetic typography, and component-first evidence rather than project imagery.
 * Hero constraint: preserve its copy, portrait, actions, and layout; use edge-to-edge mirrored SK/ fields without label rails or vertical guide axes, and retain pointer parallax. The one-time initialization is handled globally before React mounts.
 */
import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Orbit,
  Phone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { githubHandle, useGithubSource } from "@/lib/github-source";
import "./overview.css";
import "./overview-project-action.css";
import "./overview-hero-links.css";
import "./overview-hero-monogram.css";

const disciplines = [
  {
    number: "01",
    title: "Onchain SIP",
    copy: "An on-chain Systematic Investment Plan that turns recurring investment logic into transparent smart-contract execution.",
    icon: Workflow,
    route: "/case-studies/onchain-sip",
    mode: "PROJECT / SMART-CONTRACT EXECUTION",
    tags: ["Solidity", "Hardhat", "React", "Node.js", "Ethers.js", "Web3.js"],
    sourceHref: "https://github.com/TheCyperpunk/collegeproject",
    liveHref: "https://onchainsip.vercel.app/",
  },
  {
    number: "02",
    title: "videoplatform",
    copy: "A full-stack video platform that pairs a Next.js experience with a Fastify API, MongoDB data services, and container-ready delivery.",
    icon: Sparkles,
    route: "/projects",
    mode: "PROJECT / FULL-STACK VIDEO PLATFORM",
    tags: ["TypeScript", "Axios", "Fastify", "MongoDB", "Radix UI", "TanStack Query", "Framer Motion", "Next.js", "Zod", "Zustand", "Tailwind CSS", "Docker"],
    sourceHref: "https://github.com/TheCyperpunk/videoplatform",
  },
  {
    number: "03",
    title: "ZeroHour",
    copy: "A command-line workflow for rapid incident reporting and retrieval, designed to make coordination faster when time matters.",
    icon: Orbit,
    route: "/projects",
    mode: "PROJECT / INCIDENT OPERATIONS",
    tags: ["Python", "Shell", "CLI automation", "REST APIs"],
    sourceHref: "https://github.com/make-a-ton-samurai",
    liveHref: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_beachhack-hackathon-devtools-activity-7487383690126184448--JQV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcoROgBxO6xXvLRBoBAu3SegRiDIEfNDdo",
  },
];

const overviewStack = [
  "Shadcn/UI", "Vite", "JavaScript", "TypeScript", "React", "Next.js", "Svelte", "Redux", "Tailwind",
  "MongoDB", "Firebase", "Azure", "Docker", "Kubernetes", "Git", "Node.js", "Express",
  "OpenAI API", "LangChain", "Ollama", "FAISS", "ChromaDB", "Solidity", "Hardhat", "Ethers.js",
];

const timeline = [
  ["Present", "Full Stack Developer", "AX ventures — full-stack product development for a Gym application"],
  ["2022—2026", "B.Tech, Computer Science & Engineering", "APJ Abdul Kalam Technological University, Kerala"],
  ["8 months", "MERN Stack Developer Intern", "Ziuke — full-stack feature development and optimization"],
  ["5 months", "Full Stack Developer Intern", "Zecser LLP — scalable applications, APIs, and databases"],
  ["30 days", "Frontend Developer Intern", "Edunet Foundation — responsive application components"],
];

const recognitions = [
  { index: "01", award: "First Prize", event: "Data Innovate X Ideathon", venue: "St. Thomas College", note: "VENUE / ST. THOMAS COLLEGE" },
  { index: "02", award: "First Prize", event: "LastBot Hackathon", venue: "IIIT Kottayam", note: "VENUE / IIIT KOTTAYAM" },
  { index: "03", award: "Winner", event: "BNB Hack Kerala", venue: "The Hosteller Fort Kochi, Ocean Edge", note: "VENUE / FORT KOCHI · OCEAN EDGE" },
  { index: "04", award: "First Prize", event: "Hack Europa 2.0", venue: "School of Engineering, Cochin University of Science and Technology (CUSAT)", note: "VENUE / CUSAT" },
];

export default function Home() {
  const source = useGithubSource();
  const profile = source.profile;
  const heroRef = useRef<HTMLElement>(null);
  const parallaxFrame = useRef<number | null>(null);
  const pendingParallax = useRef({ x: 0, y: 0 });
  useEffect(() => () => {
    if (parallaxFrame.current !== null) cancelAnimationFrame(parallaxFrame.current);
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#contact-switchboard") return;

    const scrollFrame = window.requestAnimationFrame(() => {
      const contactSwitchboard = document.getElementById("contact-switchboard");
      contactSwitchboard?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(scrollFrame);
  }, []);

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pendingParallax.current = {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 13,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 9,
    };

    if (parallaxFrame.current !== null) return;
    parallaxFrame.current = requestAnimationFrame(() => {
      const hero = heroRef.current;
      if (hero) {
        hero.style.setProperty("--signal-parallax-x", `${pendingParallax.current.x.toFixed(2)}px`);
        hero.style.setProperty("--signal-parallax-y", `${pendingParallax.current.y.toFixed(2)}px`);
        hero.style.setProperty("--signal-parallax-x-opposite", `${(-pendingParallax.current.x * 0.72).toFixed(2)}px`);
        hero.style.setProperty("--signal-parallax-y-opposite", `${(-pendingParallax.current.y * 0.72).toFixed(2)}px`);
      }
      parallaxFrame.current = null;
    });
  };

  const resetHeroParallax = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--signal-parallax-x", "0px");
    hero.style.setProperty("--signal-parallax-y", "0px");
    hero.style.setProperty("--signal-parallax-x-opposite", "0px");
    hero.style.setProperty("--signal-parallax-y-opposite", "0px");
  };

  return (
    <main className="overview-main">
      <section ref={heroRef} className="overview-hero" onPointerMove={handleHeroPointerMove} onPointerLeave={resetHeroParallax}>
        <div className="overview-hero__grid" aria-hidden="true" />
          <div className="signal-monogram-field" aria-hidden="true">
            <div className="signal-monogram-field__glow" />
            <div className="signal-monogram-field__glyph"><span>K</span><i>/</i></div>
            <div className="signal-monogram-field__axis signal-monogram-field__axis--horizontal" />
            <div className="signal-monogram-field__cuts"><i /><i /><i /></div>
          </div>
          <div className="signal-monogram-field signal-monogram-field--right" aria-hidden="true">
            <div className="signal-monogram-field__glow" />
            <div className="signal-monogram-field__glyph"><span>S</span><span>K</span><i>/</i></div>
            <div className="signal-monogram-field__axis signal-monogram-field__axis--horizontal" />
            <div className="signal-monogram-field__cuts"><i /><i /><i /></div>
          </div>
        <div className="overview-hero__orbits" aria-hidden="true">
          <motion.i animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />
          <motion.i animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
          <motion.b animate={{ y: [0, -12, 0], opacity: [0.45, 1, 0.45] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div
          className="overview-hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="overview-kicker"><i /> 01 / ABOUT THE PRACTICE</p>
          <h1 className="sr-only">Sangeeth Karunakaran — Full-Stack Developer</h1>
          <p className="overview-role">FULL-STACK DEVELOPER <span>·</span> AI SYSTEMS <span>·</span> WEB3</p>
          <p className="overview-lede">
            Based in Kerala, I build web products across interface engineering, applied AI, and Web3. I focus on clear systems, dependable implementation, and interactions that make complex workflows usable.
          </p>
          <div className="overview-actions">
              <a href="mailto:sangeethkarunakaran16@gmail.com" className="overview-button">Start a conversation <ArrowDownRight size={17} /></a>
              <a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer" className="overview-link">Read the public trail <ArrowUpRight size={15} /></a>
            </div>
            <div className="overview-profile-links" aria-label="Professional links">
              <span>FIND ME ON</span>
              <div>
                <a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><Github size={16} /></a>
                <a href="https://www.linkedin.com/in/sangeeth-karunakaran-a60984293/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Linkedin size={15} /></a>
                <a href="https://devfolio.co/@sangeethkarun" target="_blank" rel="noreferrer" aria-label="Devfolio profile" title="Devfolio"><img className="overview-profile-links__mark overview-profile-links__mark--devfolio" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/ieGvcSDjqXCVPSYy.svg" alt="" decoding="async" /></a>
                <a href="https://unstop.com/u/sangekar4788" target="_blank" rel="noreferrer" aria-label="Unstop profile" title="Unstop"><img className="overview-profile-links__mark overview-profile-links__mark--unstop" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/TOhXqiCHDYslvYio.svg" alt="" decoding="async" /></a>
                <a className="overview-profile-links__resume" href="https://sangeethkarunakaran.vercel.app/newone.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF" title="Resume"><FileText size={14} /><span>RESUME</span></a>
              </div>
            </div>
          </motion.div>

        <motion.aside
          className="persona-engine"
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="persona-engine__bar"><span>PERSONA / VERIFIED</span><span>001</span></div>
          <div className="persona-engine__portrait">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663887738612/rCAjccQntCyRZUup.png" alt="Portrait of Sangeeth Karunakaran" decoding="async" fetchPriority="high" />
            <span className="persona-engine__scan" aria-hidden="true" />
            <span className="persona-engine__corner persona-engine__corner--one" aria-hidden="true" />
            <span className="persona-engine__corner persona-engine__corner--two" aria-hidden="true" />
          </div>
          <div className="persona-engine__identity">
            <p>FULL-STACK DEVELOPER</p>
            <strong>SANGEETH<br />KARUNAKARAN</strong>
            <span>KERALA, INDIA · EST. 2022</span>
          </div>
          <div className="persona-engine__signal"><i /> Available for thoughtful product work</div>
        </motion.aside>
      </section>

      <section className="overview-stack-strip" aria-label="Technology stack">
        <div className="overview-stack-strip__inner">
          <span className="overview-stack-strip__label">STACK / FULL-SPECTRUM BUILD</span>
          <div className="overview-stack-strip__viewport">
            <div className="overview-stack-strip__track">
              {[0, 1].map((pass) => (
                <div className="overview-stack-strip__group" aria-hidden={pass === 1} key={pass}>
                  {overviewStack.map((technology) => <span key={`${pass}-${technology}`}>{technology}</span>)}
                </div>
              ))}
            </div>
          </div>
          <Link href="/stack" className="overview-stack-strip__link">FULL STACK <ArrowUpRight size={12} /></Link>
        </div>
      </section>

      <section className="about-dossier">
        <header className="about-dossier__header">
          <div>
            <p className="overview-kicker"><i /> 02 / BIOGRAPHY IN MOTION</p>
            <h2>A practice built<br />to <em>connect layers.</em></h2>
          </div>
          <p>From interaction architecture to backend services, local intelligence, and on-chain logic, the focus is on joining the right technical layers into products that remain coherent under real use.</p>
        </header>

        <nav className="atlas-gateway" aria-label="Source atlas proof modes">
          <span>ATLAS / PROOF MODES</span>
          <Link href="/projects"><b>01</b> Registry</Link>
          <Link href="/network"><b>02</b> Network</Link>
          <Link href="/stack"><b>03</b> Stack</Link>
          <a href="/#contact-switchboard"><b>04</b> Contact</a>
        </nav>

        <div className="discipline-grid">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <motion.article
                key={discipline.number}
                className="discipline-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                <div><span>{discipline.number}</span><Icon size={19} /></div>
                <h3>{discipline.title}</h3>
                <p>{discipline.copy}</p>
                <ul className="discipline-card__tags" aria-label={`${discipline.title} technologies`}>
                  {discipline.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="discipline-card__source" href={discipline.sourceHref} target="_blank" rel="noreferrer">
                  View source on GitHub <ArrowUpRight size={14} />
                </a>
                {discipline.liveHref && (
                  <a className="discipline-card__live" href={discipline.liveHref} target="_blank" rel="noreferrer">
                    Live <ArrowUpRight size={12} />
                  </a>
                )}
                <Link href={discipline.route} aria-label={`Open ${discipline.title} evidence`}>↗</Link>
              </motion.article>
            );
          })}
        </div>
        <Link href="/projects" className="discipline-grid__more">
          <span>MORE PROJECTS</span><ArrowUpRight size={14} />
        </Link>
      </section>

      <section className="pathway-section">
        <div className="pathway-section__lane" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="pathway-section__intro">
          <p className="overview-kicker"><i /> 03 / EXPERIENCE TRACE</p>
          <h2>Learning in public.<br /><em>Shipping with care.</em></h2>
          <p>Current product work, academic grounding, three focused internship experiences, and competitive recognition provide the context behind the interface.</p>
        </div>
        <ol className="pathway-list">
          {timeline.map(([date, role, detail], index) => (
            <motion.li key={role} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.42 }}>
              <time>{date}</time><div><strong>{role}</strong><p>{detail}</p></div><span>{String(index + 1).padStart(2, "0")}</span>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="recognition-console" aria-labelledby="recognition-title">
        <div className="recognition-console__field" aria-hidden="true" />
        <header className="recognition-console__head">
          <div>
            <p className="overview-kicker"><i /> 04 / RECOGNITION LEDGER</p>
            <h2 id="recognition-title">Wins, <em>recorded.</em><br />Signals, retained.</h2>
          </div>
          <div className="recognition-console__count" aria-label="Four external recognitions">
            <b>04</b>
            <span>EXTERNAL<br />SIGNALS</span>
          </div>
        </header>

        <div className="recognition-console__manifest" aria-label="Recognition records">
          <div className="recognition-console__manifest-label" aria-hidden="true"><span>S// FIELD<br />LOG</span></div>
          {recognitions.map((recognition, index) => (
            <motion.article
              key={recognition.index}
              className="recognition-record"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: index * 0.07, duration: 0.48, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="recognition-record__index"><span>{recognition.index}</span><i /><small>SIGNAL</small></div>
              <div className="recognition-record__body">
                <div className="recognition-record__meta"><span>{recognition.award}</span><small>AWARD RECORD</small></div>
                <h3>{recognition.event}</h3>
                <p>{recognition.venue}</p>
              </div>
              <div className="recognition-record__proof"><Award size={18} /><small>{recognition.note}</small></div>
            </motion.article>
          ))}
        </div>
        <Link href="/participation" className="discipline-grid__more recognition-console__more">
          <span>MORE ACHIEVEMENTS</span><ArrowUpRight size={14} />
        </Link>
      </section>

      <section className="overview-outro overview-outro--rail-only" aria-label="Section boundary">
        <div className="overview-outro__rail" aria-hidden="true"><span>S//</span><i /><i /><i /><i /></div>
      </section>

      <section id="contact-switchboard" className="contact-switchboard overview-switchboard" aria-labelledby="contact-switchboard-title">
        <div className="overview-switchboard__background" aria-hidden="true">
          <i className="overview-switchboard__orbit" />
          <span className="overview-switchboard__watermark">S//</span>
        </div>
        <header className="contact-switchboard__head">
          <div>
            <p className="atlas-kicker"><i /> CHANNEL SWITCHBOARD</p>
            <h2 id="contact-switchboard-title">Choose the <em>right line.</em></h2>
          </div>
          <p>Four verified paths, arranged for a direct first signal rather than a generic form.</p>
        </header>

        <div className="contact-switchboard__grid">
          <a className="contact-channel contact-channel--email" href="mailto:sangeethkarunakaran16@gmail.com">
            <span className="contact-channel__index">01 / PRIMARY</span>
            <Mail size={22} />
            <strong>Email</strong>
            <b>sangeethkarunakaran16@gmail.com</b>
            <ArrowUpRight className="contact-channel__arrow" size={18} />
          </a>
          <a className="contact-channel contact-channel--phone" href="tel:+919539432154">
            <span className="contact-channel__index">02 / DIRECT</span>
            <Phone size={20} />
            <strong>Phone</strong>
            <b>+91 95394 32154</b>
            <ArrowUpRight className="contact-channel__arrow" size={17} />
          </a>
          <a className="contact-channel contact-channel--github" href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer">
            <span className="contact-channel__index">03 / SOURCE</span>
            <Github size={20} />
            <strong>GitHub</strong>
            <b>TheCyperpunk</b>
            <ArrowUpRight className="contact-channel__arrow" size={17} />
          </a>
          <div className="contact-channel contact-channel--location">
            <span className="contact-channel__index">04 / BASE</span>
            <MapPin size={20} />
            <strong>Location</strong>
            <b>Sulthan Bathery<br />Wayanad, Kerala</b>
          </div>
        </div>
      </section>

      <footer className="overview-footer"><span>SANGEETH KARUNAKARAN / ABOUT DOSSIER</span><a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer"><Github size={14} /> @{profile.login || githubHandle}</a></footer>
    </main>
  );
}
