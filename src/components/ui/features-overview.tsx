"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
// import FeatureCardScroll from "../FeatureCardScroll";

export default function FeaturesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    margin: "-40% 0px -40% 0px",
    once: false
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Improved scroll transforms with smoother transitions
  // Adjust transformations for mobile to avoid clipping
  // On mobile (very small scroll range), we reduce the Y shift even further or eliminate it
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["0%", "0%", "0%", "0%"], { clamp: true });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 1]);

  // Use a media query hook or just CSS for mobile-specific behavior if possible, 
  // but here we can just simplify the motion values to be safer across all devices.

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      y: 10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-20 md:mt-40 py-20 md:py-24 overflow-visible"
      aria-labelledby="features-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-primary-light)]/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          opacity: contentOpacity,
        }}
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        initial="hidden"
      >
        <motion.div className="text-center py-6 md:py-12 lg:py-16">
          <motion.h2
            id="features-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent px-2"
            variants={itemVariants}
          >
            Stop Losing Leads to Slow Follow‑ups
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mx-auto max-w-[700px] text-base md:text-lg lg:text-xl leading-relaxed px-4"
            variants={itemVariants}
          >
            Starvlo runs your first touch, qualification, and nurturing — automatically — across chat, forms, and email.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="py-8">
          {/* <FeatureCardScroll /> */}
        </motion.div>

      </motion.div>
    </section>
  );
}
