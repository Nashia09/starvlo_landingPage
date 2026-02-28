"use client";

import React from "react";
import { motion } from "motion/react";
import Footer from "@/components/ui/footer";
import AnimatedTestimonialsDemo from "@/components/ui/animated-testimonials-demo";

export default function AboutPage() {
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
              About Starvlo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-400"
            >
              Starvlo is your creator store. Build and sell digital products, services, and memberships—without code.
            </motion.p>
          </div>
          <div className="mx-auto mt-6 max-w-prose text-gray-500 dark:text-gray-400">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              Founded in 2023, Starvlo simplifies selling online for businessesand small businesses. Our mission is to give you an all‑in‑one store—fast setup, beautiful offers, and frictionless checkout.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              Unlike complex stacks, Starvlo brings storefront, checkout, delivery, and automations together—no more juggling multiple tools.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              From 1‑Tap Checkout to Instagram integrations, Starvlo helps you turn attention into sales with automated DMs, comment replies, and simple forms.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              We believe selling should be simple. Starvlo is an all‑in‑one platform to run your business and deliver value to your audience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              Join businessesand teams using Starvlo to launch offers, grow audiences, and sell—without the complexity.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Trusted by teams worldwide</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Hear what our customers have to say about LeadCapture
            </p>
          </div>

          <AnimatedTestimonialsDemo />
        </div>
      </div>

      <Footer />
    </div>
  );
} 
