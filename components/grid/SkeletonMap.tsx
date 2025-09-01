import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function SkeletonMap() {
  return (
    <div className="relative h-full w-full rounded-2xl bg-white/5 backdrop-blur-md shadow-inner border border-white/10 overflow-hidden animate-pulse">
      <svg
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-32 text-gray-700/40"
        fill="currentColor"
      >
        <path d="M0,100 L20,60 L35,70 L50,40 L70,65 L85,30 L100,50 L120,20 L140,60 L160,35 L180,75 L200,30 L200,100 Z" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-800/50 to-transparent pointer-events-none" />

      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
        <div className="h-10 w-10 rounded-full bg-gray-700/70 flex items-center justify-center">
          <FaMinus className="text-gray-400" />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-700/70 flex items-center justify-center">
          <FaPlus className="text-gray-400" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs uppercase tracking-wide z-0">
        Loading map...
      </div>
    </div>
  );
}
