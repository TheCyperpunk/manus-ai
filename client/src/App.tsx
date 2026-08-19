/** Proof in Motion — root uses a stable dark canvas so the editorial contrast never shifts with theme state. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activity from "./pages/Activity";
import Network from "./pages/Network";
import Participation from "./pages/Participation";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import PortfolioShell from "./components/PortfolioShell";

function Router() {
  return <PortfolioShell><Switch><Route path="/" component={Home} /><Route path="/projects" component={Projects} /><Route path="/case-studies/:slug" component={CaseStudy} /><Route path="/activity" component={Activity} /><Route path="/participation" component={Participation} /><Route path="/network" component={Network} /><Route path="/stack" component={Stack} /><Route path="/contact" component={Contact} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></PortfolioShell>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
