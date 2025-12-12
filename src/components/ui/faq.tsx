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
      question: "How does LeadCapture identify website visitors?",
      answer: "LeadCapture uses a combination of IP tracking, browser fingerprinting, and our proprietary database to accurately identify companies that visit your website. When someone visits your site, we match their IP address to our database of company information to reveal which businesses are showing interest in your products or services."
    },
    {
      question: "Is LeadCapture GDPR compliant?",
      answer: "Yes, LeadCapture is fully GDPR compliant. We only identify companies visiting your website, not individual users. Our platform adheres to all relevant data protection regulations, ensuring that your lead generation efforts remain compliant with privacy laws."
    },
    {
      question: "How accurate is the company identification?",
      answer: "Our platform typically identifies 60-70% of your B2B website traffic, with an accuracy rate of over 95% for the companies we do identify. We continuously update our database and use machine learning to improve identification rates over time."
    },
    {
      question: "Can LeadCapture integrate with my CRM system?",
      answer: "Yes, LeadCapture integrates seamlessly with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. Our two-way integrations ensure that identified leads are automatically synced with your existing systems."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you'll be automatically downgraded to our free plan if you choose not to continue with a paid subscription."
    },
    {
      question: "Can LeadCapture identify visitors who work remotely?",
      answer: "Yes, unlike some competitors, LeadCapture can identify companies even when their employees are working remotely. Our advanced technology and continuously updated IP database allow us to maintain high identification rates regardless of where people are working from."
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
          Can &apos; t find the answer you&apos;re looking for? Contact our support team for assistance.
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