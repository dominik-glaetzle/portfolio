export async function fetchLatestActivities() {
  const response = await fetch("/api/strava");
  if (!response.ok) {
    throw new Error("Failed to fetch Strava activity");
  }
  return await response.json();
}
