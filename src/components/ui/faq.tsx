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
      question: "How does Starvlo capture leads?",
      answer: "Create offers for digital products, services, or memberships and share your store or link‑in‑bio. Buyers check out with 1‑Tap Checkout or submit forms. When you connect Instagram, Auto DM and comment automations turn engagement into sales—no IP tracking."
    },
    {
      question: "Do I need coding to use Starvlo?",
      answer: "No. You can build your store in minutes—everything is handled in one place."
    },
    {
      question: "Does Starvlo integrate with Instagram?",
      answer: "Yes. Connect your Instagram to enable Auto DM, comment replies, and funnels that move followers to your store."
    },
    {
      question: "How do payments and delivery work?",
      answer: "Starvlo provides secure checkout and instant delivery. We integrate with trusted processors so you can sell confidently."
    },
    {
      question: "Do you offer a free trial?",
      answer: "No. We don’t offer free trials for billable plans."
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
