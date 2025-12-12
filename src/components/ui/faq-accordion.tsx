"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is LeadCapture?",
    answer: "LeadCapture is an AI-powered platform that helps businesses build optimized websites and capture qualified leads. Our tools include an AI website builder, lead generation forms, visitor identification, and more.",
  },
  {
    question: "How does the AI website builder work?",
    answer: "Our AI website builder creates professional websites tailored to your business in minutes. Simply enter your business details, select your industry, and our AI will generate a complete website optimized for lead generation.",
  },
  {
    question: "Can I identify companies visiting my website?",
    answer: "Yes, our visitor identification feature reveals the companies behind the clicks on your website. You'll get company names, visit details, and insights about potential leads, allowing you to prioritize your sales efforts.",
  },
  {
    question: "How does the lead capture system work?",
    answer: "Our lead capture system uses smart forms that adapt to user behavior. When a visitor fills out a form, their information is automatically qualified, scored, and can be synced to your CRM for immediate follow-up.",
  },
  {
    question: "Do you integrate with my existing CRM?",
    answer: "Yes, we offer integrations with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and more. Our API also allows for custom integrations if needed.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, all our plans include a 14-day free trial with full access to all features. No credit card is required to start your trial.",
  },
  {
    question: "How much does LeadCapture cost?",
    answer: "We offer flexible pricing plans starting at $29/month for our Starter plan. Our most popular Pro plan is $79/month and includes visitor identification and lead scoring. Enterprise plans with custom features start at $199/month.",
  },
  {
    question: "Can I use LeadCapture on my existing website?",
    answer: "Absolutely! You can add our lead capture tools to your existing website with a simple code snippet. Alternatively, you can create a new website with our AI builder.",
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
              <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Contact our support team
              </a>
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