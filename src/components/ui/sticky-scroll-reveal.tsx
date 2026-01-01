"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const BACKGROUND_COLORS = [
  "#0f172a",
  "#000000",
  "#171717",
];

const LINEAR_GRADIENTS = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)",
  "linear-gradient(to bottom right, #ec4899, #6366f1)",
  "linear-gradient(to bottom right, #f97316, #eab308)",
];

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // track page scroll against this section
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(
    LINEAR_GRADIENTS[0],
  );

  useEffect(() => {
    setBackgroundGradient(
      LINEAR_GRADIENTS[activeCard % LINEAR_GRADIENTS.length]
    );
  }, [activeCard]);

  const previewY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="relative w-full">
      <div style={{ height: `${cardLength * 100}vh` }} />
      <motion.div
        animate={{
          backgroundColor:
            BACKGROUND_COLORS[activeCard % BACKGROUND_COLORS.length],
        }}
        style={{ background: backgroundGradient }}
        className="sticky top-0 z-0 flex items-center justify-center h-screen"
      >
        <div className={cn("max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6", contentClassName)}>
          <motion.div style={{ y: previewY }} className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white">
              {content[activeCard].title}
            </h2>
            <p className="mt-6 max-w-md text-white/80 mx-auto lg:mx-0">
              {content[activeCard].description}
            </p>
          </motion.div>
          <motion.div style={{ y: previewY }} className="w-full max-w-lg mx-auto lg:mx-0">
            {content[activeCard].content ?? null}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
