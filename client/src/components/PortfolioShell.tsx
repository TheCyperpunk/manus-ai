/** Proof in Motion — fixed source-atlas navigation uses the existing responsive sidebar primitive. */
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Boxes, Github, GitPullRequest, Mail, Menu, Network, Radar, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigation = [
  { href: "/", label: "Overview", index: "00", icon: Radar },
  { href: "/projects", label: "Projects", index: "01", icon: Boxes },
  { href: "/activity", label: "Activity", index: "02", icon: GitPullRequest },
  { href: "/network", label: "Network", index: "03", icon: Network },
  { href: "/stack", label: "Stack", index: "04", icon: Sparkles },
  { href: "/open", label: "Open channel", index: "05", icon: Mail },
];

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return (
    <SidebarProvider defaultOpen>
      <div className="atlas-shell">
        <Sidebar collapsible="offcanvas" className="atlas-sidebar">
          <SidebarHeader className="atlas-sidebar__header">
            <Link href="/" className="atlas-brand">
              <img src="/manus-storage/sangeeth-signal-mark_5302d470.png" alt="Sangeeth K signal mark" />
              <span>SANGEETH<span>//</span>K</span>
            </Link>
            <p>PERSONAL SOURCE ATLAS</p>
          </SidebarHeader>
          <SidebarContent className="atlas-sidebar__content">
            <SidebarGroup>
              <SidebarGroupLabel className="atlas-sidebar__label">Navigate evidence</SidebarGroupLabel>
              <SidebarMenu className="atlas-sidebar__menu">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={active} className="atlas-sidebar__link">
                        <Link href={item.href}><span className="atlas-sidebar__index">{item.index}</span><Icon size={15} /><span>{item.label}</span></Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="atlas-sidebar__footer">
            <a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer"><Github size={15} /> @TheCyperpunk <ArrowUpRight size={13} /></a>
            <span><i /> API-backed public evidence</span>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="atlas-inset">
          <header className="atlas-mobilebar">
            <SidebarTrigger className="atlas-mobilebar__trigger"><Menu size={18} /></SidebarTrigger>
            <Link href="/" className="atlas-mobilebar__brand"><img src="/manus-storage/sangeeth-signal-mark_5302d470.png" alt="" /> SANGEETH<span>//</span>K</Link>
            <a href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><Github size={17} /></a>
          </header>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

