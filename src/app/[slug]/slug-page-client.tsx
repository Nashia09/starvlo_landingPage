"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";

interface SlugPageClientProps {
  title: string;
  subtitle: string;
  content: string[];
}

export default function SlugPageClient({ title, subtitle, content }: SlugPageClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font-primary"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-xl leading-8 text-gray-500 font-secondary"
            >
              {subtitle}
            </motion.p>
          </div>
          <div className="mx-auto mt-6 max-w-prose text-gray-500">
            {content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="mt-8 font-secondary"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
