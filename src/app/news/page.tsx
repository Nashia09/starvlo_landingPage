"use client";

import React from "react";
import { motion } from "motion/react";
import Footer from "@/components/ui/footer";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              News
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-400 text-center"
            >
              Company updates, product releases, and announcements.
            </motion.p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Visitor Insights 2.0 launches",
                date: "Dec 2025",
                summary:
                  "A faster, richer company identification engine with improved enrichment.",
              },
              {
                title: "Starvlo partners with leading ABM platforms",
                date: "Nov 2025",
                summary:
                  "Native integrations help revenue teams activate intent across channels.",
              },
              {
                title: "Security and privacy enhancements",
                date: "Oct 2025",
                summary:
                  "Expanded compliance measures and auditing to keep data protected.",
              },
              {
                title: "Q3 product roadmap updates",
                date: "Sep 2025",
                summary:
                  "Performance improvements, new dashboards, and better team workflows.",
              },
            ].map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                </div>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
