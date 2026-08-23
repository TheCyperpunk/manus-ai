import type { IncomingMessage, ServerResponse } from "node:http";

/** Server-only GitHub contribution proxy. Never expose GH_CONTRIBUTIONS_TOKEN to the browser. */
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_LOGIN = "TheCyperpunk";
const CALENDAR_WEEKS = 53;
const DAYS_PER_WEEK = 7;

type GithubContributionDay = {
  contributionCount: number;
  date: string;
  weekday: number;
};

type GithubGraphqlResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: Array<{ contributionDays: GithubContributionDay[] }>;
        };
      };
    };
  };
  errors?: Array<{ message?: string }>;
};

const CONTRIBUTION_QUERY = `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

function writeJson(response: ServerResponse, statusCode: number, payload: unknown, cacheControl: string) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", cacheControl);
  response.end(JSON.stringify(payload));
}

function contributionWindow() {
  const displayTo = new Date();
  displayTo.setUTCHours(23, 59, 59, 999);

  const latestSunday = new Date(displayTo);
  latestSunday.setUTCHours(0, 0, 0, 0);
  latestSunday.setUTCDate(latestSunday.getUTCDate() - latestSunday.getUTCDay());

  const from = new Date(latestSunday);
  from.setUTCDate(from.getUTCDate() - CALENDAR_WEEKS * DAYS_PER_WEEK);

  // GitHub's date range is inclusive in the visible profile calendar, so the
  // GraphQL request ends at the following UTC midnight while the client shows
  // today's calendar date in its existing header.
  const queryTo = new Date(displayTo);
  queryTo.setUTCDate(queryTo.getUTCDate() + 1);
  queryTo.setUTCHours(0, 0, 0, 0);

  return {
    from: from.toISOString(),
    queryTo: queryTo.toISOString(),
    displayTo: displayTo.toISOString(),
  };
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    writeJson(response, 405, { error: "Method not allowed." }, "no-store");
    return;
  }

  // A client-generated query token intentionally produces an uncached response for
  // the manual calendar refresh button. It changes neither the GitHub query nor
  // the server-only credential exposure model.
  const requestUrl = new URL(request.url ?? "/", "https://source-atlas.local");
  const forceRefresh = requestUrl.searchParams.has("refresh");

  const token = process.env.GH_CONTRIBUTIONS_TOKEN ?? process.env.GITHUB_CONTRIBUTIONS_TOKEN;
  if (!token) {
    writeJson(response, 503, { error: "Contribution service is not configured." }, "no-store");
    return;
  }

  const { from, queryTo, displayTo } = contributionWindow();

  try {
    const upstream = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIBUTION_QUERY,
        variables: { login: GITHUB_LOGIN, from, to: queryTo },
      }),
      cache: "no-store",
    });

    if (!upstream.ok) {
      console.error("GitHub contribution request failed", { status: upstream.status });
      writeJson(response, 502, { error: "Contribution data is temporarily unavailable." }, "no-store");
      return;
    }

    const payload = (await upstream.json()) as GithubGraphqlResponse;
    const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar || payload.errors?.length) {
      console.error("GitHub contribution query returned an invalid response");
      writeJson(response, 502, { error: "Contribution data is temporarily unavailable." }, "no-store");
      return;
    }

    writeJson(
      response,
      200,
      {
        source: "github-graphql",
        fetchedAt: new Date().toISOString(),
        login: GITHUB_LOGIN,
        from,
        to: displayTo,
        totalContributions: calendar.totalContributions,
        weeks: calendar.weeks.map((week) => week.contributionDays),
      },
      forceRefresh ? "no-store" : "public, max-age=300, s-maxage=900, stale-while-revalidate=3600",
    );
  } catch (error) {
    console.error("GitHub contribution request failed unexpectedly", error instanceof Error ? error.message : "unknown error");
    writeJson(response, 502, { error: "Contribution data is temporarily unavailable." }, "no-store");
  }
}
