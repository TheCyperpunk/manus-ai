/** Proof in Motion — preserve the stable dark canvas while deferring non-Overview routes from the initial download. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PortfolioShell from "./components/PortfolioShell";

const Projects = lazy(() => import("./pages/Projects"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Participation = lazy(() => import("./pages/Participation"));
const Network = lazy(() => import("./pages/Network"));
const Stack = lazy(() => import("./pages/Stack"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteLoading() {
  return <div aria-busy="true" aria-label="Loading page" style={{ minHeight: "100vh", background: "#0a0a0b" }} />;
}

function Router() {
  return <PortfolioShell><Suspense fallback={<RouteLoading />}><Switch><Route path="/" component={Home} /><Route path="/projects" component={Projects} /><Route path="/case-studies/:slug" component={CaseStudy} /><Route path="/participation" component={Participation} /><Route path="/network" component={Network} /><Route path="/stack" component={Stack} /><Route path="/contact" component={Contact} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></Suspense></PortfolioShell>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
