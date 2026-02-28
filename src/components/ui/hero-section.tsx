"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LeadRevenueEngineHero } from "./lead-revenue-engine-hero";

// ─── Animated word-by-word hero text ────────────────────────────
interface HeroTextProps {
  text: string;
  className?: string;
}

// No blur — only transform + opacity (GPU-composited, zero jank)
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween" as const,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // custom ease-out expo
      duration: 0.55,
      delay: 0.25 + i * 0.055,
    },
  }),
};

const HeroText = ({ text, className }: HeroTextProps) => {
  const words = text.split(" ");

  return (
    <div className={cn("text-center", className)}>
      {words.map((word, index) => {
        // Special logic to wrap "every DM" in an inline block with an SVG doodle
        if (word === "every" && words[index + 1] === "DM") {
          return null; // Skip "every", we render it in the "DM" block
        }

        if (word === "DM" && words[index - 1] === "every") {
          return (
            <motion.span
              key={index}
              custom={index - 1} // use the index of "every" for timing
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="relative inline-block mr-[0.3em] font-primary text-white will-change-transform z-10"
            >
              <span className="relative z-10">every DM</span>
              {/* Doodle highlight SVG positioned behind the text */}
              <svg
                className="absolute -bottom-2 -left-2 w-[120%] h-[110%] z-[-1] text-[var(--color-primary)] opacity-80"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M10,50 C60,55 140,55 190,45 C195,43 185,38 170,38 C120,38 80,45 20,55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                />
              </svg>
            </motion.span>
          );
        }

        return (
          <motion.span
            key={index}
            custom={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="inline-block mr-[0.3em] font-primary text-white will-change-transform"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

// ─── Main Hero Section ──────────────────────────────────────────
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState("hero1.mp4");

  const handleScenarioChange = (index: number) => {
    const videos = ["hero1.mp4", "hero2.mp4", "hero3.mp4"];
    setActiveVideo(videos[index] || "hero1.mp4");
  };

  return (
    <div className="p-2 sm:p-4">
      <section
        className="w-full relative overflow-hidden bg-black rounded-[2rem] sm:rounded-[2.5rem] border border-black/10 shadow-2xl"
        ref={containerRef}
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={activeVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={`/assets/${activeVideo}`} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] md:bg-[size:64px_64px] z-0 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-[128px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none z-0" />

        <div className="w-full relative z-10">
          <div className="relative w-full">
            <div className="min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center py-12 sm:py-20 relative">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                  {/* Left Column: Copy & CTA */}
                  <div className="flex flex-col items-start space-y-6 sm:space-y-8 relative z-20">

                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5, delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-2"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
                      </span>
                      <span className="text-xs font-medium text-white tracking-wide uppercase">
                        New: Automated Lead Nurturing
                      </span>
                    </motion.div>

                    {/* Hero title — staggered word entrance */}
                    <HeroText
                      text="Turn every DM into booked calls — automatically."
                      className="text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.5rem] leading-[1.05] font-medium tracking-[-0.03em] text-left drop-shadow-sm max-w-[800px]"
                    />

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.55, delay: 0.85 }}
                      className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-white/90 font-medium max-w-[500px] leading-[1.4]"
                    >
                      Starvlo unifies your leads from Instagram, WhatsApp, and
                      landing pages, then uses an AI sales agent to reply
                      instantly, qualify, and book calls while you focus on
                      delivery.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5, delay: 1.05 }}
                      className="flex w-full sm:w-auto flex-col sm:flex-row gap-4 mt-6 pt-2"
                    >
                      <motion.a
                        href="https://app.starvlo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", visualDuration: 0.2, bounce: 0.3 }}
                        className="group relative inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-colors duration-200 px-8 py-3 sm:py-4 rounded-full text-white font-medium text-[1.1em] shadow-[0_4px_14px_0_rgba(35,124,142,0.3)] will-change-transform"
                      >
                        Start Free Trial
                      </motion.a>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5, delay: 1.25 }}
                      className="flex items-center gap-4 mt-6 pt-2 w-full"
                    >
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              visualDuration: 0.3,
                              bounce: 0.3,
                              delay: 1.3 + i * 0.07,
                            }}
                            className="w-8 h-8 rounded-full border-[1.5px] border-white/20 flex items-center justify-center overflow-hidden will-change-transform shadow-sm"
                          >
                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                          </motion.div>
                        ))}
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.65 }}
                        className="text-sm text-white font-medium drop-shadow-md"
                      >
                        Join 2,000+ businessesclosing more deals.
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Right Column: Dynamic Animation Widget */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7, delay: 0.4 }}
                    className="relative w-full flex items-center justify-center lg:justify-end xl:pl-10 will-change-transform"
                  >
                    <LeadRevenueEngineHero
                      className="w-full"
                      onScenarioChange={handleScenarioChange}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
