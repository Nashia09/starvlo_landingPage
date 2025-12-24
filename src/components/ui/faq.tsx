"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does Starvlo identify website visitors?",
      answer: "Starvlo uses IP intelligence and our proprietary company graph to reveal which businesses are visiting your site—without identifying individuals."
    },
    {
      question: "Is Starvlo GDPR‑friendly?",
      answer: "Yes. We focus on company‑level insights and design our workflows to respect privacy standards."
    },
    {
      question: "How accurate is the identification?",
      answer: "Typical B2B sites see 60–70% of traffic identified at the company level, with high accuracy on enriched records."
    },
    {
      question: "Does Starvlo integrate with my CRM?",
      answer: "Starvlo integrates with Salesforce, HubSpot, Pipedrive, and more. Two‑way sync keeps leads and activities up to date."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, a 14‑day free trial is available on all plans."
    },
    {
      question: "Can Starvlo identify visitors working remotely?",
      answer: "Yes. Our identification works reliably regardless of where employees are working from."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          Frequently asked questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-lg text-gray-500 dark:text-gray-400"
        >
          Can’t find the answer you’re looking for? Contact our support team for assistance.
        </motion.p>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                {faq.question}
              </span>
              <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                {openIndex === index ? (
                  <IconMinus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <IconPlus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
