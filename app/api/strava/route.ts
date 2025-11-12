import { NextResponse } from "next/server";

let cachedToken: string | null = null;

async function getAccessToken() {
  if (cachedToken) return cachedToken;

  const res = await fetch("https://www.strava.com/api/v3/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_ACCESS_TOKEN,
      grant_type: "refresh_token",
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    console.error("⚠️ Failed to refresh token", await res.text());
    return null;
  }

  const data = await res.json();
  cachedToken = data.access_token;
  return cachedToken;
}

export async function GET() {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json(
      { error: "Could not obtain Strava access token" },
      { status: 500 },
    );
  }

  const res = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    console.error("❌ Strava API failed", await res.text());
    return NextResponse.json(
      { error: "Failed to fetch from Strava" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data[0]);
}
