"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter",
      id: "tier-starter",
      price: annual ? 99 : 129,
      description: "Perfect for small businesses starting with lead capture.",
      features: [
        "Up to 100 identified companies per month",
        "7 days data storage",
        "Basic company information",
        "Email notifications",
        "Standard support",
      ],
      cta: "Start free trial",
      mostPopular: false,
    },
    {
      name: "Professional",
      id: "tier-professional",
      price: annual ? 199 : 249,
      description: "For growing businesses needing more insights and integrations.",
      features: [
        "Up to 500 identified companies per month",
        "30 days data storage",
        "Detailed company information",
        "CRM integration",
        "Email & Slack notifications",
        "Lead scoring",
        "Priority support",
      ],
      cta: "Start free trial",
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      price: annual ? 399 : 499,
      description: "Custom solution for larger teams and advanced needs.",
      features: [
        "Unlimited identified companies",
        "90 days data storage",
        "Advanced company insights",
        "All integrations",
        "Custom reports",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Contact sales",
      mostPopular: false,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Pricing plans for teams of all sizes
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500 dark:text-gray-400">
          Choose the perfect plan to help you identify your website visitors and convert them into leads.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="relative flex rounded-full bg-gray-100 p-1 dark:bg-gray-800">
          <button
            type="button"
            className={`${
              annual
                ? "bg-white shadow-md dark:bg-gray-700"
                : "bg-transparent dark:text-gray-300"
            } relative rounded-full py-2 px-6 text-sm font-medium transition-all duration-200 focus:outline-none`}
            onClick={() => setAnnual(true)}
          >
            Annual <span className="ml-1 text-xs text-green-500">(Save 20%)</span>
          </button>
          <button
            type="button"
            className={`${
              !annual
                ? "bg-white shadow-md dark:bg-gray-700"
                : "bg-transparent dark:text-gray-300"
            } relative rounded-full py-2 px-6 text-sm font-medium transition-all duration-200 focus:outline-none`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 ${
              tier.mostPopular
                ? "relative border-blue-500 dark:border-blue-400"
                : ""
            }`}
          >
            {tier.mostPopular && (
              <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-blue-500 px-3 py-1 text-center text-xs font-medium text-white shadow-md">
                Most Popular
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {tier.description}
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ${tier.price}
                </span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <IconCheck className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link
                href={tier.name === "Enterprise" ? "/contact#enterprise" : "/auth#signup"}
                className={`${
                  tier.mostPopular
                    ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    : "bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                } w-full rounded-md px-4 py-2.5 text-center text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                {tier.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
