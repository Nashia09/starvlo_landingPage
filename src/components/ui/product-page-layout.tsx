"use client";

import Link from "next/link";
import { motion } from "motion/react";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3";
import FeatureCards from "@/components/ui/feature-cards";
import TestimonialsCarousel from "@/components/ui/testimonials-carousel";

export interface ProductPageLayoutProps {
  productName: string;
  description: string;
  dashboardImage?: string;
  features?: {
    title: string;
    description: string;
    icon: string;
    imageUrl: string;
  }[];
  customerCases?: {
    name: string;
    metric: string;
    value: string;
    description: string;
  }[];
}

export default function ProductPageLayout({
  productName,
  description,
  dashboardImage = "/dashboard-preview.webp",
    customerCases = [
    {
      name: "TechCorp",
      metric: "Leads per month",
      value: "2,000+",
      description: "How TechCorp increased qualified leads by 200% with our platform.",
    },
    {
      name: "GrowthMasters",
      metric: "Customers",
      value: "15,000+",
      description: "How GrowthMasters elevated their sales pipeline with our platform.",
    },
    {
      name: "MarketEdge",
      metric: "Conversion rate",
      value: "32%",
      description: "How MarketEdge transformed visitor insights into revenue with our platform.",
    },
  ],
}: ProductPageLayoutProps) {
  // Split product name into words for animation
  const productNameWords = productName.split(" ");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Custom Light-themed Hero Section */}
      <section className="relative w-full h-auto min-h-[90vh] bg-gradient-to-b from-primary/10 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 bg-grid-black/[0.03] h-full -z-10" />
          
          {/* Decorative borders */}
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/50">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/50">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/50">
            <div className="absolute left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          {/* Subtle gradient accent */}
          <div className="absolute h-40 w-1/4 bg-gradient-to-r from-primary/20 to-primary-light/20 blur-3xl top-1/3 left-1/4 rounded-full -z-10 opacity-50" />
          <div className="absolute h-40 w-1/4 bg-gradient-to-r from-primary-light/20 to-primary/20 blur-3xl top-1/3 right-1/4 rounded-full -z-10 opacity-50" />
        </div>

        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center px-4 py-10 md:py-20">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8 self-start"
          >
            <Link href="/products" className="text-[var(--color-primary)] inline-block hover:underline">
              ← Back to Products
            </Link>
          </motion.div>
          
          {/* Animated title */}
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-gray-900 md:text-4xl lg:text-7xl mb-4">
            {productNameWords.map((word, index) => (
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
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-gray-600"
          >
            {description}
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/demo">
              <button className="w-60 rounded-lg bg-[var(--color-primary)] px-6 py-2 font-medium text-white hover:bg-[var(--color-primary-light)]">
                Watch Demo
              </button>
            </Link>
            <a href="https://app.starvlo.com/" target="_blank" rel="noopener noreferrer">
              <button className="w-60 rounded-lg border border-[var(--color-primary)] bg-transparent px-6 py-2 font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-white">
                Get Started
              </button>
            </a>
          </motion.div>
          
          {/* Feature image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="relative z-10 mt-12 rounded-3xl border border-gray-200 bg-white p-4 shadow-lg max-w-4xl mx-auto"
          >
            <div className="w-full overflow-hidden rounded-xl border border-gray-100">
              <img
                src={dashboardImage}
                alt={`${productName} Dashboard`}
                className="aspect-[16/9] h-auto w-full object-cover"
                height={1000}
                width={1000}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Aceternity UI */}
      <div className="bg-white">
        <FeaturesSectionDemo />
      </div>

      {/* Feature Cards Section */}
      <FeatureCards />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Trust Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Security Features</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trust {productName}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {productName} is designed with the highest commitment to trust, security, and compliance. Your data is never used to train models, and we use industry-standard best practices to ensure its security.
            </p>
            <Link href="/security" className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] font-medium flex items-center gap-2">
              Discover more
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            The results speak for themselves
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {customerCases.map((customer, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">Customer Logo</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-900">{customer.name}</span>
                    <span className="text-[var(--color-primary)]">{customer.metric}: {customer.value}</span>
                  </div>
                  <p className="text-gray-600">{customer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-primary-light)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See what {productName} can do for you
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Find out how {productName} can help your company transform anonymous visitors into qualified leads with our AI-powered platform.
          </p>
          <a href="https://app.starvlo.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-medium rounded-md inline-block">
            Get started
          </a>
        </div>
      </section>
    </div>
  );
} 
