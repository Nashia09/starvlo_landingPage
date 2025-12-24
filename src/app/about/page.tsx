"use client";

import React from "react";
import { motion } from "motion/react";
import Footer from "@/components/shared/Footer";
import AnimatedTestimonialsDemo from "@/components/ui/animated-testimonials-demo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              About Starvlo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-400"
            >
              Starvlo helps businesses capture more leads, automate follow-up, and convert anonymous visitors into customers.
            </motion.p>
          </div>
          <div className="mx-auto mt-6 max-w-prose text-gray-500 dark:text-gray-400">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              Founded in 2023, LeadCapture has quickly become a leader in website visitor identification technology. Our mission is to empower sales and marketing teams with the insights they need to connect with potential customers at the right time, with the right message.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              Unlike traditional analytics tools that only show you traffic numbers, LeadCapture reveals the actual companies visiting your website. This empowers your team to focus on high-quality leads that are already showing interest in your products or services.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              Our platform is built on cutting-edge technology that combines IP tracking, machine learning, and our proprietary database of company information to provide the most accurate identification possible. We update our database daily to ensure you always have the freshest data.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              We believe in privacy-first lead generation. That&apos;s why LeadCapture is fully GDPR compliant, identifying companies rather than individuals, while still providing the actionable insights your business needs to grow.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              Join thousands of businesses that are using LeadCapture to transform their website traffic into a powerful source of qualified leads.
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Trusted by teams worldwide</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Hear what our customers have to say about LeadCapture
            </p>
          </div>
          
          <AnimatedTestimonialsDemo />
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 
