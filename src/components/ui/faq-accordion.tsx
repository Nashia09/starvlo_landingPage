"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Starvlo?",
    answer: "Starvlo is a lead capture platform that identifies the companies behind your website traffic, automates timely follow-up, and helps convert more visitors into customers.",
  },
  {
    question: "How does Starvlo identify website visitors?",
    answer: "We use IP intelligence, first‑party data, and our continuously updated company database to reveal which businesses are visiting your site—without identifying individuals.",
  },
  {
    question: "Can Starvlo automate follow‑up?",
    answer: "Yes. Trigger email sequences, CRM tasks, and sales alerts based on real visitor intent so your team follows up at the right moment.",
  },
  {
    question: "Does Starvlo integrate with my CRM?",
    answer: "Starvlo integrates with popular CRMs like Salesforce, HubSpot, and Pipedrive. Our API supports custom workflows as well.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14‑day free trial on all plans so you can validate fit before committing.",
  },
  {
    question: "Is Starvlo privacy‑friendly?",
    answer: "Yes. Starvlo focuses on company‑level insights and is designed to be GDPR‑friendly by avoiding personal identification.",
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
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Contact our support team
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
