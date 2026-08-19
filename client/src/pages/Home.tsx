/**
 * Proof in Motion / Overview: portrait-led personal dossier, Signal Lime accents,
 * kinetic typography, and component-first evidence rather than project imagery.
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Github,
  GraduationCap,
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
  },
  {
    number: "02",
    title: "Auradesk",
    copy: "A local-first assistant for vision and chat workflows, bringing RAG, speech, and web-aware tools into one private interface.",
    icon: Sparkles,
    route: "/projects",
    mode: "PROJECT / LOCAL-FIRST AI WORKFLOWS",
    tags: ["Svelte", "Ollama", "Docker", "TypeScript", "Python", "RAG"],
    sourceHref: "https://github.com/TheCyperpunk?tab=repositories",
  },
  {
    number: "03",
    title: "ZeroHour",
    copy: "A command-line workflow for rapid incident reporting and retrieval, designed to make coordination faster when time matters.",
    icon: Orbit,
    route: "/projects",
    mode: "PROJECT / INCIDENT OPERATIONS",
    tags: ["Python", "Shell", "CLI automation", "REST APIs"],
    sourceHref: "https://github.com/TheCyperpunk?tab=repositories",
  },
];

const overviewStack = [
  "Shadcn/UI", "Vite", "JavaScript", "TypeScript", "React", "Next.js", "Svelte", "Redux", "Tailwind",
  "MongoDB", "Firebase", "Azure", "Docker", "Kubernetes", "Git", "Node.js", "Express",
  "OpenAI API", "LangChain", "Ollama", "FAISS", "ChromaDB", "Solidity", "Hardhat", "Ethers.js",
];

const timeline = [
  ["2022—2026", "B.Tech, Computer Science & Engineering", "APJ Abdul Kalam Technological University, Kerala"],
  ["8 months", "MERN Stack Developer Intern", "Ziuke — full-stack feature development and optimization"],
  ["5 months", "Full Stack Developer Intern", "Zecser LLP — scalable applications, APIs, and databases"],
  ["30 days", "Frontend Developer Intern", "Edunet Foundation — responsive application components"],
];

const recognitions = [
  ["01", "First Prize", "Data Innovate X Ideathon · St. Thomas College", "VENUE / ST. THOMAS COLLEGE"],
  ["02", "First Prize", "LastBot Hackathon · IIIT Kottayam", "VENUE / IIIT KOTTAYAM"],
];

export default function Home() {
  const source = useGithubSource();
  const profile = source.profile;

  return (
    <main className="overview-main">
      <section className="overview-hero">
        <div className="overview-hero__grid" aria-hidden="true" />
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
            Sangeeth Karunakaran is a full-stack developer from Kerala building web products across interface engineering, applied AI, and Web3. The work prioritizes clear systems, dependable implementation, and interactions that make complex workflows usable.
          </p>
          <div className="overview-actions">
            <Link href="/contact" className="overview-button">Start a conversation <ArrowDownRight size={17} /></Link>
            <a href={`https://github.com/${githubHandle}`} target="_blank" rel="noreferrer" className="overview-link">Read the public trail <ArrowUpRight size={15} /></a>
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
            <img src="/manus-storage/sangeeth-portrait_dc922177.png" alt="Portrait of Sangeeth Karunakaran" />
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
          <Link href="/contact"><b>04</b> Contact</Link>
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
                <Link href={discipline.route} aria-label={`Open ${discipline.title} evidence`}>↗</Link>
              </motion.article>
            );
          })}
        </div>
        <Link href="/projects" className="discipline-grid__more">
          <span><i /> VIEW MORE PROJECTS</span><ArrowUpRight size={18} />
        </Link>
      </section>

      <section className="pathway-section">
        <div className="pathway-section__lane" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="pathway-section__intro">
          <p className="overview-kicker"><i /> 03 / EXPERIENCE TRACE</p>
          <h2>Learning in public.<br /><em>Shipping with care.</em></h2>
          <p>Academic grounding, three focused internship experiences, and competitive recognition provide the context behind the interface.</p>
        </div>
        <ol className="pathway-list">
          {timeline.map(([date, role, detail], index) => (
            <motion.li key={role} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.42 }}>
              <time>{date}</time><div><strong>{role}</strong><p>{detail}</p></div><span>{String(index + 1).padStart(2, "0")}</span>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="recognition-console">
        <div className="recognition-console__light" aria-hidden="true" />
        <div className="recognition-console__headline">
          <p className="overview-kicker"><i /> 04 / RECOGNITION</p>
          <h2>Two moments of<br /><em>external signal.</em></h2>
        </div>
        <div className="recognition-console__records">
          {recognitions.map(([number, award, detail, sourceNote], index) => (
            <motion.article key={number} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.42 }}>
              <span>{number}</span><Award size={18} /><strong>{award}</strong><p>{detail}</p><small>{sourceNote}</small>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="overview-outro overview-outro--rail-only" aria-label="Section boundary">
        <div className="overview-outro__rail" aria-hidden="true"><span>S//</span><i /><i /><i /><i /></div>
      </section>

      <section className="contact-switchboard overview-switchboard" aria-labelledby="contact-switchboard-title">
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
