"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/card";
import { fetchLatestActivities } from "@/lib/strava";
import Image from "next/image";
import stravaOrange from "@/public/images/strava-orange.svg";
import stravaWhite from "@/public/images/strava-white.svg";

export default function LastStravaActivityCard() {
  const [activity, setActivity] = useState<any>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const latest = await fetchLatestActivities();
        setActivity(latest);
      } catch (error) {
        console.error("❌ Error fetching Strava activity:", error);
      }
    };
    fetchActivity();
  }, []);

  if (!activity) {
    return (
      <Card className="flex items-center justify-center p-6 bg-[#0D1117] text-white dark:bg-white dark:text-black rounded-2xl shadow-md">
        <p className="text-sm text-gray-400 dark:text-gray-600 animate-pulse">
          Loading latest Strava activity...
        </p>
      </Card>
    );
  }

  const distanceKm = (activity.distance / 1000).toFixed(2);
  const durationMin = Math.round(activity.moving_time / 60);
  const date = new Date(activity.start_date).toLocaleDateString("de-AT", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="relative flex flex-col gap-4 p-6 bg-[#0D1117] text-white dark:bg-white dark:text-black rounded-2xl shadow-md">
      <div className="absolute top-4 right-4">
        <Image
          src={stravaWhite}
          alt="Strava"
          width={100}
          height={100}
          className="dark:hidden w-30 sm:w-14 md:w-16 lg:w-30"
        />
        <Image
          src={stravaOrange}
          alt="Strava"
          width={100}
          height={100}
          className="hidden dark:block w-30 sm:w-14 md:w-16 lg:w-30"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="hidden lg:block text-xl font-bold">{activity.name}</h2>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {activity.type}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-sm sm:gap-1.5">
        <div className="bg-white/10 dark:bg-black/10 px-3 py-1 rounded-full">
          {distanceKm} km
        </div>
        <div className="bg-white/10 dark:bg-black/10 px-3 py-1 rounded-full">
          {durationMin} min
        </div>
        <div className="bg-white/10 dark:bg-black/10 px-3 py-1 rounded-full">
          {date}
        </div>
      </div>

      {activity.device_name && (
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-2 sm:block">
          recorded with {activity.device_name}
        </p>
      )}
    </Card>
  );
}
