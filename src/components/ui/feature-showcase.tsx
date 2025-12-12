"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "left" | "right";
  className?: string;
  children: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  bulletPoints?: string[];
}

export default function FeatureShowcase({
  title,
  description,
  icon,
  variant = "left",
  className,
  children,
  ctaText,
  ctaLink,
  bulletPoints,
}: FeatureShowcaseProps) {
  const contentSection = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          {icon && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              {icon}
            </motion.div>
          )}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-primary tracking-tight text-gray-900 leading-tight">
              {title}
            </h3>
            <p className="text-lg text-gray-600 font-secondary leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {bulletPoints && bulletPoints.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 ml-16"
          >
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3 h-3 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      {ctaText && ctaLink && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="ml-16"
        >
          <a
            href={ctaLink}
            className={cn(
              "group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold font-accent transition-all duration-300",
              "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg",
              "hover:shadow-xl hover:shadow-gray-900/25 hover:scale-105 transform",
              "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            )}
          >
            {ctaText}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      )}
    </motion.div>
  );

  const visualSection = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
        {children}
      </div>
    </motion.div>
  );

  return (
    <section className={cn("relative", className)}>
      <div className="container px-4 md:px-6">
        <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-light/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {variant === "left" ? (
              <>
                {contentSection}
                {visualSection}
              </>
            ) : (
              <>
                {visualSection}
                {contentSection}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}