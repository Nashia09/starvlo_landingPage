"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
import FeatureCardScroll from "../FeatureCardScroll";

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
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["20%", "0%", "0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-40 min-h-screen"
      style={{ overflow: 'hidden' }}
      aria-labelledby="features-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale
        }}
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        initial="hidden"
      >
        <motion.div className="text-center py-12 lg:py-16">
          <motion.h2
            id="features-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Everything You Need To Generate Leads
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mx-auto max-w-[700px] md:text-lg lg:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Starvlo reveals the companies behind your traffic, captures qualified leads, and automates follow‑up to drive conversions.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeatureCardScroll />
        </motion.div>

      </motion.div>
    </section>
  );
}
