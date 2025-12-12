"use client";

import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/backgroundlines";
import Link from "next/link";

export const HeroSectionWithBackgroundLines = ({
  title,
  description,
  backLink,
  backLinkText,
  children,
}: {
  title: string;
  description?: string;
  backLink?: string;
  backLinkText?: string;
  children?: React.ReactNode;
}) => {
  return (
    <BackgroundLines
      className="relative w-full h-auto min-h-screen pt-28 bg-[#0A0F18] dark:bg-[#0A0F18]"
    >
      <div className="container mx-auto px-4 py-16">
        {backLink && backLinkText && (
          <Link href={backLink} className="text-blue-400 mb-8 inline-block hover:underline">
            ← {backLinkText}
          </Link>
        )}
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
          <h1 className="relative z-10 text-center text-2xl font-bold text-white md:text-4xl lg:text-5xl mb-4">
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
          
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-200 mb-6"
            >
              {description}
            </motion.p>
          )}
          
          {children}
        </div>
      </div>
    </BackgroundLines>
  );
}; 