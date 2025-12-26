"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Starvlo?",
    answer: "Starvlo is your creator store. Build and sell digital products, services, and memberships with 1‑Tap Checkout—no coding required. Integrates with Instagram and your favorite apps.",
  },
  {
    question: "How does Starvlo capture leads?",
    answer: "Create offers and share your store or link‑in‑bio. Buyers purchase via 1‑Tap Checkout or submit simple opt‑in forms. Connect Instagram to enable Auto DM and comment automations that move followers to your store—no IP tracking.",
  },
  {
    question: "Can Starvlo automate follow‑up?",
    answer: "Yes. Automate Instagram DMs and emails for confirmations, delivery, and nurturing. Set simple flows that follow up and keep buyers engaged—no complex setup.",
  },
  {
    question: "How does Starvlo help convert more visitors?",
    answer: "Frictionless 1‑Tap Checkout, mobile‑optimized link‑in‑bio pages, and automated DMs that turn engagement into sales. Clear offers and bundles reduce drop‑off and boost conversions.",
  },
  {
    question: "Does Starvlo integrate with Instagram and apps?",
    answer: "Yes. Connect Instagram to enable Auto DM and comment automation. Starvlo also integrates with popular tools and supports custom workflows via API.",
  },
  {
    question: "Is there a free trial?",
    answer: "No. We don’t offer free trials for billable plans. Book a demo instead.",
  },
  {
    question: "Is Starvlo privacy‑friendly?",
    answer: "Yes. Starvlo captures leads via consent‑based purchases and opt‑in forms. We don’t use IP tracking. Instagram connections use official APIs, and you control data access and retention.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
         
          <p className="text-gray-500 dark:text-gray-400 mx-auto max-w-[700px] md:text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, reach out to our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
                isLast={index === faqs.length - 1}
              />
            ))}
          </div>
          
        <div className="text-center mt-8">
            <p className="text-gray-500 dark:text-gray-400">
              Still have questions?{" "}
              <Link href="/contact" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-light)] hover:underline">
                Contact us — we reply within 24 hours
              </Link>
            </p>
        </div>
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  toggleAccordion: () => void;
  isLast: boolean;
}

function FaqItem({ question, answer, isActive, toggleAccordion, isLast }: FaqItemProps) {
  return (
    <div className={cn(!isLast && "border-b border-gray-200 dark:border-gray-800")}>
      <button
        className="flex items-center justify-between w-full px-6 py-5 text-left"
        onClick={toggleAccordion}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0 text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
          marginBottom: isActive ? 16 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isActive && (
          <div className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-400">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {answer}
            </motion.p>
          </div>
        )}
      </motion.div>
    </div>
  );
} 
