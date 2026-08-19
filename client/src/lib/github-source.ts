/** Proof in Motion — public GitHub source adapter; labels identify live API data versus dated snapshots. */
import { useEffect, useMemo, useState } from "react";

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

const emptySource: GithubSource = { profile: fallbackProfile, repos: [], events: [], orgs: [], starred: 55, status: "loading" };

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

async function loadSource(): Promise<GithubSource> {
  const [profile, repos, events, orgs, starred] = await Promise.all([
    getJson<GithubProfile>(`/users/${HANDLE}`),
    getAllRepos(),
    getJson<GithubEvent[]>(`/users/${HANDLE}/events/public?per_page=100`),
    getJson<GithubOrg[]>(`/users/${HANDLE}/orgs`),
    getJson<GithubRepo[]>(`/users/${HANDLE}/starred?per_page=100`),
  ]);
  return { profile, repos, events, orgs, starred: starred.length, status: "ready" };
}

export function useGithubSource() {
  const [source, setSource] = useState<GithubSource>(emptySource);

  useEffect(() => {
    let mounted = true;
    loadSource()
      .then((next) => mounted && setSource(next))
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
export const contributionSnapshot = {
  total: 264,
  captured: "19 Aug 2026",
  weeks: [14, 13, 4, 6, 0, 15, 2, 2, 1, 3, 16, 10, 4, 8, 3, 14, 5, 0, 9, 2, 0, 2, 1, 1, 12, 4, 3, 11, 5, 14, 4, 14, 26, 10, 4, 6, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 1],
};

