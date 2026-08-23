/** Proof in Motion — public GitHub source adapter; labels identify live API data versus dated snapshots. */
import { useEffect, useMemo, useState } from "react";
import { fallbackRepos } from "./github-snapshot";

const HANDLE = "TheCyperpunk";
const API_ROOT = "https://api.github.com";

export type GithubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string | null;
  updated_at: string;
  created_at: string;
  archived: boolean;
  fork: boolean;
  visibility: string;
  topics: string[];
  owner: { login: string; avatar_url: string; html_url: string };
};

export type GithubEvent = {
  id: string;
  type: string;
  repo: { name: string; url: string };
  created_at: string;
  payload: { commits?: Array<{ message: string }>; action?: string };
};

export type GithubOrg = {
  login: string;
  avatar_url: string;
  description?: string | null;
  html_url: string;
};

export type FeaturedDossier = {
  index: string;
  mode: string;
  name: string;
  repository: string;
  artifact: string;
  summary: string;
  proof: string;
  tags: string[];
  repositoryUrl: string;
  liveUrl?: string;
  caseStudyHref?: string;
};

export type GithubSource = {
  profile: GithubProfile;
  repos: GithubRepo[];
  events: GithubEvent[];
  orgs: GithubOrg[];
  starred: number;
  status: "loading" | "ready" | "degraded";
};

const fallbackProfile: GithubProfile = {
  login: HANDLE,
  name: "SANGEETH KARUNAKARAN",
  avatar_url: "https://avatars.githubusercontent.com/u/197233485?v=4",
  html_url: `https://github.com/${HANDLE}`,
  public_repos: 115,
  followers: 11,
  following: 15,
  created_at: "2025-01-31T08:12:33Z",
  updated_at: "2026-07-31T20:49:38Z",
};

const emptySource: GithubSource = { profile: fallbackProfile, repos: fallbackRepos, events: [], orgs: [], starred: 55, status: "loading" };

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_ROOT}${path}`, { headers: { Accept: "application/vnd.github+json" } });
  if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

async function getAllRepos() {
  const batches = await Promise.all(
    [1, 2].map((page) => getJson<GithubRepo[]>(`/users/${HANDLE}/repos?per_page=100&page=${page}&sort=updated&direction=desc&type=owner`))
  );
  return batches.flat();
}

async function loadPrimarySource() {
  const [profile, repos] = await Promise.all([
    getJson<GithubProfile>(`/users/${HANDLE}`),
    getAllRepos(),
  ]);
  return { profile, repos };
}

async function loadSupplementarySource() {
  const [events, orgs, starred] = await Promise.all([
    getJson<GithubEvent[]>(`/users/${HANDLE}/events/public?per_page=100`),
    getJson<GithubOrg[]>(`/users/${HANDLE}/orgs`),
    getJson<GithubRepo[]>(`/users/${HANDLE}/starred?per_page=100`),
  ]);
  return { events, orgs, starred: starred.length };
}

export function useGithubSource() {
  const [source, setSource] = useState<GithubSource>(emptySource);

  useEffect(() => {
    let mounted = true;
    loadPrimarySource()
      .then((primary) => {
        if (mounted) setSource((previous) => ({ ...previous, ...primary, status: "ready" }));
        return loadSupplementarySource();
      })
      .then((supplementary) => mounted && setSource((previous) => ({ ...previous, ...supplementary })))
      .catch(() => mounted && setSource((previous) => ({ ...previous, status: "degraded" })));
    return () => { mounted = false; };
  }, []);

  return source;
}

export function useGithubMetrics(source: GithubSource) {
  return useMemo(() => {
    const original = source.repos.filter((repo) => !repo.fork && !repo.archived);
    const languages = original.reduce<Record<string, number>>((accumulator, repo) => {
      if (repo.language) accumulator[repo.language] = (accumulator[repo.language] || 0) + 1;
      return accumulator;
    }, {});
    const external = source.events.reduce<Record<string, number>>((accumulator, event) => {
      const owner = event.repo.name.split("/")[0];
      if (owner && owner !== HANDLE) accumulator[owner] = (accumulator[owner] || 0) + 1;
      return accumulator;
    }, {});
    return {
      original,
      languages: Object.entries(languages).map(([language, repositories]) => ({ language, repositories })).sort((a, b) => b.repositories - a.repositories),
      external: Object.entries(external).map(([owner, events]) => ({ owner, events })).sort((a, b) => b.events - a.events),
    };
  }, [source.events, source.repos]);
}

export const githubHandle = HANDLE;

// Curated after a public-source audit captured 19 Aug 2026. These entries are
// intentionally not inferred from stars or descriptions, which are sparse in the profile.
export const featuredDossiers: FeaturedDossier[] = [
  {
    index: "01",
    mode: "LIVE / AVALANCHE FUJI",
    name: "Onchain SIP",
    repository: "collegeproject",
    artifact: "WALLET CONNECT → TOKEN PICKER → EXECUTION HISTORY",
    summary: "A systematic crypto-investment product with a deployed wallet flow, token selection, transaction-based display, and execution tracking surface.",
    proof: "LIVE TESTNET · 3 FORKS · 3 CONTRIBUTORS",
    tags: ["TypeScript", "Solidity", "Wagmi"],
    repositoryUrl: "https://github.com/TheCyperpunk/collegeproject",
    liveUrl: "https://onchainsip.vercel.app",
    caseStudyHref: "/case-studies/onchain-sip",
  },
  {
    index: "02",
    mode: "PRODUCT / NEXT.JS",
    name: "XMO Messenger",
    repository: "award-experiment",
    artifact: "APP-LINK CALLBACKS → INVITES → ACCOUNT LIFECYCLE",
    summary: "An application surface with wallet and app-link callbacks, invitation paths, account-lifecycle pages, legal routes, and deployment-aware maintenance.",
    proof: "47 COMMITS · MAINTAINED 15 AUG 2026",
    tags: ["TypeScript", "Next.js", "GSAP"],
    repositoryUrl: "https://github.com/TheCyperpunk/award-experiment",
    caseStudyHref: "/case-studies/xmo-messenger",
  },
  {
    index: "03",
    mode: "CONTRACT / STELLAR",
    name: "SorobanVault",
    repository: "SorobanVault-",
    artifact: "TOKEN / REWARDS / KYC MODULES → CARGO TEST",
    summary: "A documented lending and tokenization contract prototype for Stellar, spanning Soroban modules, an EVM companion, tests, and deployment make targets.",
    proof: "RUST 80.8% · SOLIDITY 15.3% · CARGO TEST",
    tags: ["Rust", "Soroban", "Solidity"],
    repositoryUrl: "https://github.com/TheCyperpunk/SorobanVault-",
    caseStudyHref: "/case-studies/soroban-vault",
  },
];

export const contributionSnapshot = {
  total: 264,
  captured: "19 Aug 2026",
  weeks: [14, 13, 4, 6, 0, 15, 2, 2, 1, 3, 16, 10, 4, 8, 3, 14, 5, 0, 9, 2, 0, 2, 1, 1, 12, 4, 3, 11, 5, 14, 4, 14, 26, 10, 4, 6, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 1],
};

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

export type ContributionCalendarSource = {
  total: number;
  days: ContributionDay[];
  from: string;
  to: string;
  fetchedAt?: string;
  status: "live" | "snapshot";
};

// Verified GitHub GraphQL calendar capture: 17 Aug 2025–19 Aug 2026, collected 19 Aug 2026.
const calendarIntensity = "00320000410001100000102000010000000004000000010000001100000000100001004200001101110010111000002200000110010400010011100000000000000030010000000000000100011000000000001000002300000002000100110000220001100000010400011000001122001142110300000000101011000110000000000000000000000000000010000000001000000000000000000000000000000000000000000000000002000011000000000010000001";
const calendarCountEntries = "2:8,3:6,8:10,9:1,13:2,14:3,20:1,22:5,27:1,37:15,45:2,52:1,53:1,62:1,67:3,70:11,71:4,76:1,77:3,79:1,80:3,81:3,84:1,86:1,87:1,88:1,94:4,95:4,101:1,102:2,105:3,107:10,111:1,114:1,115:3,116:1,132:9,135:2,149:1,153:1,154:1,166:1,172:5,173:7,181:4,185:2,188:1,189:3,194:4,195:4,199:2,200:3,207:2,209:12,213:2,214:2,220:2,221:2,222:4,223:6,226:2,227:2,228:15,229:5,230:2,231:1,233:9,242:2,244:2,246:1,247:2,251:3,252:2,282:3,292:1,343:6,348:1,349:1,360:1,367:1";
const calendarCounts = calendarCountEntries.split(",").reduce<Record<number, number>>((counts, entry) => {
  const [index, value] = entry.split(":").map(Number);
  counts[index] = value;
  return counts;
}, {});

export const calendarDays: ContributionDay[] = calendarIntensity.split("").map((rawLevel, index) => ({
  date: new Date(Date.UTC(2025, 7, 17 + index)).toISOString().slice(0, 10),
  count: calendarCounts[index] ?? 0,
  level: Number(rawLevel) as ContributionDay["level"],
}));

const snapshotContributionCalendar: ContributionCalendarSource = {
  total: contributionSnapshot.total,
  days: calendarDays,
  from: calendarDays[0].date,
  to: calendarDays.at(-1)?.date ?? calendarDays[0].date,
  status: "snapshot",
};

type LiveContributionCalendarResponse = {
  source: "github-graphql";
  fetchedAt: string;
  from: string;
  to: string;
  totalContributions: number;
  weeks: Array<Array<{ contributionCount: number; date: string }>>;
};

function normalizeContributionLevel(count: number, maximum: number): ContributionDay["level"] {
  if (count <= 0) return 0;
  if (maximum <= 1) return 4;
  return Math.max(1, Math.min(4, Math.ceil((count / maximum) * 4))) as ContributionDay["level"];
}

function toLiveContributionCalendar(payload: LiveContributionCalendarResponse): ContributionCalendarSource {
  const rawDays = payload.weeks.flat();
  const maximum = rawDays.reduce((highest, day) => Math.max(highest, day.contributionCount), 0);

  return {
    total: payload.totalContributions,
    days: rawDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: normalizeContributionLevel(day.contributionCount, maximum),
    })),
    from: payload.from.slice(0, 10),
    to: payload.to.slice(0, 10),
    fetchedAt: payload.fetchedAt,
    status: "live",
  };
}

export function useContributionCalendar() {
  const [calendar, setCalendar] = useState<ContributionCalendarSource>(snapshotContributionCalendar);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github-contributions", {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Contribution request failed: ${response.status}`);
        return toLiveContributionCalendar((await response.json()) as LiveContributionCalendarResponse);
      })
      .then((liveCalendar) => {
        if (liveCalendar.days.length >= 350) setCalendar(liveCalendar);
      })
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setCalendar(snapshotContributionCalendar);
        }
      });

    return () => controller.abort();
  }, []);

  return calendar;
}
