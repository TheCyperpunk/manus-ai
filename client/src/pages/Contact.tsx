/** Proof in Motion — direct contact channel completes the source atlas without adding unverified personal claims. */
import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";
import { AtlasFooter, AtlasPageHeader } from "@/components/AtlasPage";

export default function Contact() {
  return <main className="atlas-main atlas-page">
    <AtlasPageHeader index="06" eyebrow="Contact channel" title={<>Have a system<br />worth <em>making real?</em></>} copy="For product interfaces, AI-enabled workflows, on-chain applications, and practical engineering problems. Send a clear first signal; the source atlas is there for technical context." />
    <section className="contact-dossier"><a href="mailto:sangeethkarunakaran16@gmail.com"><Mail size={20} /><span>Email</span><b>sangeethkarunakaran16@gmail.com</b><ArrowUpRight size={16} /></a><a href="tel:+919539432154"><Phone size={20} /><span>Phone</span><b>+91 95394 32154</b><ArrowUpRight size={16} /></a><a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><Github size={20} /><span>Public source</span><b>github.com/TheCyperpunk</b><ArrowUpRight size={16} /></a><div><MapPin size={20} /><span>Location</span><b>Sulthan Bathery, Wayanad, Kerala</b></div></section>
    <AtlasFooter />
  </main>;
}
