"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Heart, ShieldCheck, Users } from "lucide-react";
import Footer from "@/components/shared/Footer";

export default function OurMissionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] px-4 py-2 text-white text-xs font-bold"
              >
                Our Mission
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              >
                Capture Leads. Automate Follow-Up. Close More Sales.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                We help teams reveal the companies behind every visit, capture qualified leads, and automate timely follow-up. Marketing focuses on engaged accounts, sales starts conversations sooner, and revenue grows with consistency.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <ShieldCheck className="h-5 w-5 text-[#7CBECE]" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Privacy-first</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Company-level insights that respect people and comply with global standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <Users className="h-5 w-5 text-[#7CBECE]" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Aligned teams</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Marketing, sales, and success operate on the same high-intent signal.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Happy team collaborating"
                width={1200}
                height={900}
                className="rounded-2xl shadow-xl ring-1 ring-gray-200 object-cover"
                priority
              />
              <div className="absolute -bottom-5 left-6 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur dark:bg-gray-900/80 dark:text-gray-300">
                Building together with heart
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              Why this matters
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              Teams deserve clarity. Knowing which companies are exploring your site unlocks smarter campaigns, faster follow-up, and more human conversations.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Heart className="h-6 w-6 text-[#7CBECE]" />
              <p className="mt-3 font-semibold text-gray-900 dark:text-white">Customer-first</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Insights that make outreach timely, relevant, and genuinely helpful.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <ShieldCheck className="h-6 w-6 text-[#7CBECE]" />
              <p className="mt-3 font-semibold text-gray-900 dark:text-white">Secure by design</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Built with compliance and data protection at the core.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Users className="h-6 w-6 text-[#7CBECE]" />
              <p className="mt-3 font-semibold text-gray-900 dark:text-white">Shared momentum</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Marketing and sales move together on verified account interest.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
