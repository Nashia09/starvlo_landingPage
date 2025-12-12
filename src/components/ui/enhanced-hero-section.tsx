"use client";

import { motion } from "motion/react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export interface EnhancedHeroSectionProps {
  title: string;
  description?: string;
  backLink?: string;
  backLinkText?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export const EnhancedHeroSection = ({
  title,
  description,
  backLink,
  backLinkText,
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
  imageSrc,
  imageAlt = "Feature preview",
  children,
}: EnhancedHeroSectionProps) => {
  return (
    <WavyBackground 
      containerClassName="relative w-full h-auto min-h-screen"
      className="w-full max-w-7xl mx-auto"
      colors={["#7CBECE", "#A1D1D8", "#5A9BA5", "#7CBECE", "#A1D1D8"]}
      waveWidth={100}
      backgroundFill="#0A0F18"
      blur={10}
      waveOpacity={0.6}
      speed="fast"
    >
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        {/* Decorative borders */}
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/20 dark:bg-neutral-800/20">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/20 dark:bg-neutral-800/20">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/20 dark:bg-neutral-800/20">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        
        <div className="px-4 py-10 md:py-20 w-full">
          {/* Back link */}
          {backLink && backLinkText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Link href={backLink} className="text-blue-400 inline-block hover:underline">
                ← {backLinkText}
              </Link>
            </motion.div>
          )}
          
          {/* Animated title */}
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl mb-4">
            {title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-200"
            >
              {description}
            </motion.p>
          )}
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href={primaryButtonLink}>
              <button className="w-60 transform rounded-lg bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200">
                {primaryButtonText}
              </button>
            </Link>
            <Link href={secondaryButtonLink}>
              <button className="w-60 transform rounded-lg border border-white/30 bg-transparent px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                {secondaryButtonText}
              </button>
            </Link>
          </motion.div>
          
          {/* Feature image */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="relative z-10 mt-12 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm max-w-4xl mx-auto"
            >
              <div className="w-full overflow-hidden rounded-xl border border-white/20">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="aspect-[16/9] h-auto w-full object-cover"
                  height={1000}
                  width={1000}
                />
              </div>
            </motion.div>
          )}
          
          {/* Additional content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-16 w-full"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </WavyBackground>
  );
}; 