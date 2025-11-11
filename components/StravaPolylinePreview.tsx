"use client";
import React from "react";
import polyline from "@mapbox/polyline";

interface StravaPolylinePreviewProps {
  summaryPolyline: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export default function StravaPolylinePreview({
  summaryPolyline,
  strokeColor = "#fc4c02",
  strokeWidth = 4,
}: StravaPolylinePreviewProps) {
  if (!summaryPolyline) return null;

  const coords = polyline.decode(summaryPolyline);

  let minLat = Infinity,
    maxLat = -Infinity,
    minLng = Infinity,
    maxLng = -Infinity;

  for (const [lat, lng] of coords) {
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
  }

  const scale = 10000;
  const padding = 5;

  const width = (maxLng - minLng) * scale + padding * 2;
  const height = (maxLat - minLat) * scale + padding * 2;

  const pathData = coords
    .map(([lat, lng], i) => {
      const x = (lng - minLng) * scale + padding;
      const y = height - (lat - minLat) * scale - padding;
      return `${i === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");

  return (
    <div className="w-full h-40 overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={pathData}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
