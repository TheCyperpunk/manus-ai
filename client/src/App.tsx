/** Proof in Motion — first-visit boot signal precedes the stable dark canvas; non-Overview routes remain deferred from the initial download. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PortfolioShell from "./components/PortfolioShell";
import RouteLoading from "./components/RouteLoading";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Participation = lazy(() => import("./pages/Participation"));
const Network = lazy(() => import("./pages/Network"));
const Stack = lazy(() => import("./pages/Stack"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppBootController() {
  useEffect(() => {
    const loader = document.getElementById("app-boot-loader");
    if (!loader) return;

    const storageKey = "sangeeth-atlas-app-loader-seen";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;

    try {
      seen = window.localStorage.getItem(storageKey) === "1";
    } catch {
      seen = false;
    }

    const removeLoader = () => loader.remove();
    if (seen || prefersReducedMotion) {
      window.requestAnimationFrame(removeLoader);
      return;
    }

    const releaseTimer = window.setTimeout(() => {
      loader.classList.add("is-releasing");
      try {
        window.localStorage.setItem(storageKey, "1");
      } catch {}
    }, 560);
    const removeTimer = window.setTimeout(removeLoader, 1040);

    return () => {
      window.clearTimeout(releaseTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return null;
}

function Router() {
  return (
    <PortfolioShell>
      <Suspense fallback={<RouteLoading />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/case-studies/:slug" component={CaseStudy} />
          <Route path="/participation" component={Participation} />
          <Route path="/network" component={Network} />
          <Route path="/stack" component={Stack} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </PortfolioShell>
  );
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><AppBootController /><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
