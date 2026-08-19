/** Proof in Motion navigation — compact route indexing with participation isolated as its own evidence destination. */
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Overview", index: "00" },
  { href: "/projects", label: "Projects", index: "01" },
  { href: "/participation", label: "Participation", index: "02" },
  { href: "/stack", label: "Stack", index: "03" },
  { href: "/contact", label: "Contact", index: "04" },
];

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeFor = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="atlas-shell topnav-shell">
      <header className="atlas-topbar">
        <div className="atlas-topbar__inner">
          <Link href="/" className="atlas-topbar__brand" aria-label="Sangeeth Karunakaran portfolio home">
            <img src="/manus-storage/sangeeth-signal-mark_5302d470.png" alt="" />
            <span>SANGEETH<span>//</span>K</span><i />
          </Link>
          <nav className="atlas-topbar__links" aria-label="Portfolio navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href} className={activeFor(item.href) ? "is-active" : ""}><small>{item.index}</small>{item.label}</Link>)}
          </nav>
          <div className="atlas-topbar__actions">
            <Link href="/contact" className="atlas-topbar__status"><i />Open to collaboration</Link>
            <a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer" className="atlas-topbar__github" aria-label="Open GitHub profile"><Github size={15} /><ArrowUpRight size={12} /></a>
            <button type="button" className="atlas-topbar__menu" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="atlas-mobile-navigation" aria-label="Toggle portfolio navigation">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {menuOpen && <nav id="atlas-mobile-navigation" className="atlas-topbar__drawer" aria-label="Portfolio navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={activeFor(item.href) ? "is-active" : ""}><span>{item.index}</span>{item.label}<ArrowUpRight size={14} /></Link>)}
          <a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><Github size={15} /> @TheCyperpunk <ArrowUpRight size={14} /></a>
        </nav>}
      </header>
      <div className="atlas-inset topnav-inset">{children}</div>
    </div>
  );
}
