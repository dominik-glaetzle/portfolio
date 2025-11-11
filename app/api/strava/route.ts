import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.STRAVA_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Missing STRAVA_ACCESS_TOKEN" },
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
    return NextResponse.json(
      { error: "Failed to fetch from Strava" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data[0]);
}
