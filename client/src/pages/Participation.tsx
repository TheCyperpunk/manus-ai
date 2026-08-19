/** Proof in Motion — dedicated participation route; all event records link to user-supplied public LinkedIn sources. */
import { ArrowUpRight, CalendarDays, Flag, Handshake, Link2, MapPin, RadioTower, ScanLine } from "lucide-react";
import { AtlasFooter, AtlasPageHeader } from "@/components/AtlasPage";

type ParticipationEvent = {
  date: string;
  year: "2026" | "2025" | "2024" | "2023";
  event: string;
  place: string;
  type: string;
  detail: string;
  href: string;
};

const participationEvents: ParticipationEvent[] = [
  { date: "21–22 FEB", year: "2026", event: "Make-A-Ton 8.0", place: "CUSAT", type: "24H UNIVERSITY HACKATHON", detail: "Fast prototyping and product-oriented solution work at the CITTIC-organized university sprint.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_makeaton-makeaton8-cusat-activity-7438864089642274816-4Uvy" },
  { date: "27–28 FEB", year: "2026", event: "Build for India", place: "Kochi", type: "AGENTIC AI HACKATHON", detail: "KSUM's 24-hour build sprint focused on autonomous, decision-making AI agents.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_buildforindia-agenticai-aihackathon-activity-7434959672606085121-d574" },
  { date: "30 JAN–01 FEB", year: "2026", event: "BeachHack Season 7", place: "Chavakkad Beach", type: "36H NATIONAL HACKATHON", detail: "National-level beachside hackathon organized by CODe with Christ College of Engineering.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_hackathon-beachhack-beachhackseason7-activity-7425396199123345408-OmCF" },
  { date: "18–19 JAN", year: "2026", event: "CodeKalari", place: "IIIT Kottayam", type: "HACKATHON", detail: "Real-world problem statements, team dynamics, and rapid prototyping at the IIIT Kottayam event.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_codekalari-hackathon-iiitkottayam-activity-7419790811216769024-a8fC" },
  { date: "2025", year: "2025", event: "Think-Her Hack 3.0", place: "LEAD College, Palakkad", type: "MENTORSHIP / WOMEN IN TECH", detail: "Mentorship for women innovators across ideation, problem-solving, and execution.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_thinkherhack-mentorshipmatters-womenintech-activity-7347282559678017536-csi2" },
  { date: "22 MAY", year: "2025", event: "Bitcoin Pizza Day", place: "W3K Kerala", type: "WEB3 COMMUNITY", detail: "Community exchange on DAOs, NFTs, on-chain art, privacy, scalability, and digital identity.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_bitcoinpizzaday-web3-cryptocommunity-activity-7340357683603980288-HXry" },
  { date: "2025", year: "2025", event: "Namaste Jupiverse", place: "Kozhikode", type: "SOLANA / WEB3 COMMUNITY", detail: "Jupiter and Solana community learning around DAO participation, security, scam prevention, and community building.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_web3-cryptoindia-solana-activity-7339933010042998785-aGRd" },
  { date: "2025", year: "2025", event: "HackAthena ’25", place: "Jyothi Engineering College", type: "48H HACKATHON", detail: "Ideation, coding, and collaboration across blockchain, AI in health, cybersecurity, and open innovation.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_hackathena25-hackathonexperience-blockchain-activity-7338980878565392384-PONO" },
  { date: "17 MAY", year: "2025", event: "Build Responsible AI", place: "TinkerSpace", type: "RESPONSIBLE AI BOOTCAMP", detail: "A TinkerHub session on the intersection of AI development, governance, ethics, and public policy.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_artificialintelligence-responsibleai-techpolicy-activity-7337529891443134464-vhL8" },
  { date: "31 MAY", year: "2025", event: "Monad Blitz", place: "Bengaluru", type: "EVM L1 / WEB3 HACKATHON", detail: "Monad Testnet consumer-dApp building, parallel-execution workshops, live demos, and peer voting.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_monadblitz-hackathon-web3-activity-7335331936992669696-rZP4" },
  { date: "05 MAY", year: "2025", event: "Proof of Community", place: "IES College, Thrissur", type: "SHARDEUM WEB3 MEETUP", detail: "Facilitated a community session on Web3 foundations, Shardeum architecture, Q&A, and builder networking.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_proofofcommunity-web3-shardeum-activity-7326638395374428162-a823" },
  { date: "2025", year: "2025", event: "DesignQuest 2025", place: "Irinjalakuda", type: "UI/UX DESIGN SPRINT", detail: "Design-led innovation and UI/UX practice at Christ College of Engineering's design sprint.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_designquest-designsprint-uiux-activity-7426697378256019457-HoQG" },
  { date: "2025", year: "2025", event: "TAKEDOWN", place: "Thrissur", type: "24H NATIONAL HACKATHON", detail: "RACE and IEDC's national-level 24-hour hackathon at Universal Engineering College.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_hackathon-takedown-race-activity-7419422025733103616-Dwta" },
  { date: "05–08 SEP", year: "2025", event: "Stacks Hacker House", place: "Goa", type: "BITCOIN L2 / WEB3", detail: "Three-day builder retreat with build sessions, mentor exchanges, collaboration, and Demo Day.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_stacks-bitcoin-web3-activity-7379175868285485056-jimK" },
  { date: "2025", year: "2025", event: "TinkHack 2.0", place: "MEC", type: "TINKERHUB HACKATHON", detail: "Hands-on learning, rapid prototyping, and mentoring exchanges at the TinkerHub MEC hackathon.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_hackathon-tinkhack-tinkerhub-activity-7376695556296986624-tM94" },
  { date: "30–31 AUG", year: "2025", event: "Team1 Hackathon", place: "Bengaluru", type: "AVALANCHE WEB3", detail: "Avalanche Team1 India event with workshops spanning Avalanche, Interchain Messaging, and EERC.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_web3-hackathon-avalanche-activity-7369745118733565955-E9ge" },
  { date: "25 AUG", year: "2025", event: "PayFi Mini Hackathon", place: "Farook College", type: "SHARDEUM WEB3", detail: "Ten-hour dApp-building sprint with workshops, mentoring, and pitching.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_web3-hackathon-shardeum-activity-7366180911576485890-CoQL" },
  { date: "23 AUG", year: "2025", event: "ETHGlobal Happy Hour", place: "Kochi", type: "ETHEREUM COMMUNITY", detail: "Community gathering with Ethereum enthusiasts, builders, and crypto innovators in Kerala.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_ethglobal-ethereum-web3-activity-7365361700461613058-dkMP" },
  { date: "2025", year: "2025", event: "Debian Day", place: "Thrissur", type: "OPEN SOURCE COMMUNITY", detail: "FSUG Thrissur's community celebration of Debian and open-source collaboration.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_debianday-opensource-thrissur-activity-7362791881342115842-YGUr" },
  { date: "2025", year: "2025", event: "Indic Wikimedia Hackathon", place: "Kochi", type: "OPEN SOURCE", detail: "Contributor participation around Wikimedia projects and regional-language accessibility.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_wikimedia-hackathon-opensource-activity-7360020549609144320-UjyG" },
  { date: "2025", year: "2025", event: "BNBHack", place: "Kochi", type: "BNB CHAIN / WEB3", detail: "24-hour Web3 sprint across DeSoc, DeSci, and DePIN, including sessions and mentor exchanges.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_bnbhack-bnbhack-bnbchain-activity-7353375858054582274-xJ7T" },
  { date: "05–06 APR", year: "2024", event: "PERCEPTION", place: "MITS, Varikoli", type: "24H AI HACKATHON", detail: "A 24-hour sprint addressing intelligent waste management and AI-driven transportation and traffic challenges.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_hackathon-innovation-ai-activity-7341469255500013568-Ipn1" },
  { date: "28–29 FEB", year: "2024", event: "The Belfort of Wall Street 2.0", place: "Christ College of Engineering", type: "30H BUSINESSATHON", detail: "High-energy businessathon participation at Techletics ’24, organized by IEDC and CCE.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_innovation-entrepreneurship-businessathon-activity-7335645278097592320-K-Rd" },
  { date: "2023", year: "2023", event: "NASA Space Apps Challenge", place: "Thrissur", type: "GLOBAL HACKATHON", detail: "Team participation in the local challenge, organized by Unique World Robotics with Kerala Start-up Mission.", href: "https://www.linkedin.com/posts/sangeeth-karunakaran-a60984293_thrilled-to-announce-that-i-got-a-chance-activity-7315371944856408064-EB9n" },
];

const sourcePostCount = participationEvents.length;
const years: ParticipationEvent["year"][] = ["2026", "2025", "2024", "2023"];
const intervalArtifact: Record<ParticipationEvent["year"], { title: string; note: string; tags: string[] }> = {
  "2026": { title: "Build sprint interval", note: "Four source-linked public posts trace a short, dense cycle of rapid prototyping across AI, product, and university hackathon rooms.", tags: ["24H BUILDS", "AGENTIC AI", "PRODUCT SPRINT", "TEAM PROTOTYPING"] },
  "2025": { title: "Field & community interval", note: "Seventeen source-linked records connect the Web3 builder circuit with mentorship, open-source gatherings, AI governance, and design-led participation.", tags: ["WEB3 FIELDWORK", "OPEN SOURCE", "AI GOVERNANCE", "COMMUNITY EXCHANGE"] },
  "2024": { title: "Early build interval", note: "Two source-linked records trace an AI challenge sprint and a high-intensity businessathon across technical and venture-building contexts.", tags: ["AI CHALLENGE", "30H BUSINESSATHON", "IDEATION", "TEAM EXECUTION"] },
  "2023": { title: "Open-science starting point", note: "The earliest supplied record traces team participation in a local NASA Space Apps Challenge built around open-science exploration.", tags: ["OPEN SCIENCE", "GLOBAL CHALLENGE", "TEAM BUILD", "30 PROMPTS"] },
};

export default function Participation() {
  return <main className="atlas-main atlas-page participation-page">
    <AtlasPageHeader index="03" eyebrow="Participation ledger" title={<>Show up.<br /><em>Build in public.</em></>} copy="A source-linked record of hackathons, design sprints, open-source gatherings, and Web3 builder events. Every entry is grounded in a supplied public LinkedIn post—not inferred affiliation or outcome claims." aside={<div className="participation-source"><RadioTower size={16} /><div><span>SOURCE SET / {sourcePostCount} POSTS</span><b>USER-SUPPLIED PUBLIC LINKEDIN EVIDENCE</b></div></div>} />

    <section className="participation-instrument participation-instrument--framed" aria-label="Participation overview">
      <div className="participation-instrument__lead"><div className="participation-kicker"><Flag size={19} /> EVENT PARTICIPATION</div><strong>{sourcePostCount}</strong><p>documented public event records across 2023–26.</p><span>Not a claims wall. A linked record of where the work happened.</span></div>
      <div className="participation-instrument__axes"><article><CalendarDays size={18} /><b>2026 / BUILD SPRINTS</b><p>Make-A-Ton, Build for India, BeachHack, and CodeKalari create a recent rapid-build interval.</p></article><article><RadioTower size={18} /><b>2025 / WEB3 FIELDWORK</b><p>Stacks, Avalanche, Shardeum, ETHGlobal, and BNB Chain events form the onchain participation trail.</p></article><article><Handshake size={18} /><b>COMMUNITY / OPEN SOURCE</b><p>DesignQuest, Debian Day, Indic Wikimedia, and TinkHack widen the record beyond hackathons.</p></article></div>
    </section>

    <section className="participation-ledger">
      <div className="participation-ledger__head"><div><p>PUBLIC POST INTERVALS</p><h2>Where the work<br /><em>met the room.</em></h2></div><p>Each record keeps the original event context concise and exposes its post as the primary proof artifact.</p></div>
      {years.map((year) => {
        const interval = intervalArtifact[year];
        const records = participationEvents.filter((entry) => entry.year === year);
        return <div className="participation-year" key={year}><div className="participation-year__rail"><span>S// {year}</span><i /><small>{records.length} PUBLIC RECORDS</small></div><aside className="participation-interval" aria-label={`${year} evidence interval`}><div className="participation-interval__signal"><ScanLine size={16} /><span>PROOF CLUSTER / {year}</span></div><div><h3>{interval.title}</h3><p>{interval.note}</p></div><div className="participation-interval__tags">{interval.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><b>{sourcePostCount} → {records.length} POSTS</b></aside><div className="participation-events">{records.map((entry, index) => <article className="participation-event" key={entry.event}><div className="participation-event__date"><b>{entry.date}</b><span>{entry.year}</span></div><div className="participation-event__signal"><i /><span>{String(index + 1).padStart(2, "0")}</span></div><div className="participation-event__body"><div className="participation-event__meta"><span>{entry.type}</span><span><MapPin size={11} /> {entry.place}</span></div><h3>{entry.event}</h3><p>{entry.detail}</p></div><a href={entry.href} target="_blank" rel="noreferrer" aria-label={`View source post for ${entry.event}`}><Link2 size={15} /><span>POST</span><ArrowUpRight size={14} /></a></article>)}</div></div>;
      })}
    </section>
    <AtlasFooter />
  </main>;
}
