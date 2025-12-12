"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const metrics = [
  {
    id: "visitors",
    label: "Daily Visitors",
    value: "2,500+",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    id: "leads",
    label: "Leads Generated",
    value: "150+",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: "6.5%",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "customers",
    label: "Happy Customers",
    value: "500+",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
];

export default function KeyMetricsBar() {
  const [activeId, setActiveId] = useState("visitors");

  return (
    <section className="w-full flex items-center justify-center py-12 md:py-24">
      <div className="relative mx-auto flex w-full max-w-md flex-row items-center justify-center rounded-full border border-gray-200 bg-white/50 p-2 backdrop-blur-sm dark:border-gray-800 dark:bg-black/50 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="absolute inset-0 gradient-pulse rounded-full opacity-20 blur-xl" />
        
        {metrics.map((metric) => (
          <button
            key={metric.id}
            onClick={() => setActiveId(metric.id)}
            className={cn(
              "relative mx-1 flex h-12 flex-1 cursor-pointer flex-col items-center justify-center rounded-full px-2 text-xs transition-all hover:bg-gray-100 dark:hover:bg-gray-900 sm:mx-2 md:text-sm",
              activeId === metric.id && "bg-gray-100 dark:bg-gray-900"
            )}
          >
            <span className="flex items-center justify-center gap-1">
              {metric.icon}
              <span className={cn(
                "font-semibold",
                activeId === metric.id ? "opacity-100" : "opacity-70"
              )}>
                {metric.value}
              </span>
            </span>
            <span className={cn(
              "mt-0.5 text-[10px] md:text-xs",
              activeId === metric.id ? "opacity-80" : "opacity-50"
            )}>
              {metric.label}
            </span>
            {activeId === metric.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full border border-gray-200 bg-gray-100 ring-1 ring-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:ring-gray-800"
                transition={{ duration: 0.2, type: "spring" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

// Add keyframe animation for gradient pulse
const styles = `
@keyframes gradient-pulse {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-pulse {
  background: linear-gradient(-45deg, #7CBECE, #A1D1D8, #5A9BA5, #7CBECE);
  background-size: 400% 400%;
  animation: gradient-pulse 15s ease infinite;
}
`;

// Add styles to the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
} 