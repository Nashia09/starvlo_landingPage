"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Rocket,
  ArrowLeft,
  BarChart3,
  Target,
  Zap,
  DollarSign,
  TrendingUp,
  Award,
  Smartphone
} from "lucide-react";
import Footer from "@/components/ui/footer";

export default function SMBsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <WavyBackground
        className="min-h-screen flex items-center justify-center"
        colors={["#7CBECE", "#A1D1D8", "#5A9BA5", "#7CBECE", "#A1D1D8"]}
        waveWidth={50}
        backgroundFill="white"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[#7CBECE] hover:text-[#5A9BA5] mb-8 font-medium transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
                <Rocket className="w-4 h-4" />
                SMB Solution
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Affordable Lead Generation
                <span className="block">
                  <Cover className="text-[#7CBECE]">for Growing Businesses</Cover>
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Cost-effective lead generation solutions designed specifically for small and medium
                businesses. Get enterprise-level tools at SMB-friendly prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-6 h-6" />
                  Start Free Trial
                </motion.button>

                <motion.button
                  className="border-2 border-[#7CBECE] text-[#7CBECE] hover:bg-[#7CBECE] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DollarSign className="w-6 h-6" />
                  View SMB Pricing
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </WavyBackground>
      {/* Key Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Small Business Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to compete with larger companies and grow your business with professional lead generation tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] text-white mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Cost-effective solutions tailored for small business budgets without compromising on features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#A1D1D8] to-[#5A9BA5] text-white mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Get up and running in minutes with no technical expertise required. Simple implementation process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#5A9BA5] to-[#7CBECE] text-white mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Start small and expand your lead generation capabilities as your business grows and evolves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#7CBECE]/80 to-[#A1D1D8]/80 text-white mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Access enterprise-level lead generation tools at SMB-friendly prices to compete effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* SMB Success Metrics */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Small Business, Big Results
            </h2>
            <p className="text-xl text-gray-600">
              See how small businesses are achieving remarkable growth with LeadCapture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">30 Days</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Quick ROI</div>
              <div className="text-gray-600">Average time to see positive returns</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">5 Min</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Setup Time</div>
              <div className="text-gray-600">Simple implementation process</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">200%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Lead Increase</div>
              <div className="text-gray-600">Average improvement for SMBs</div>
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#7CBECE]" />
              <span className="text-sm font-medium text-[#7CBECE] bg-[#7CBECE]/10 px-3 py-1 rounded-full">
                Small Business Success
              </span>
            </div>

            <div className="text-3xl text-[#7CBECE] mb-4">&quot;</div>
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              As a small business owner, I never thought we could afford tools to identify anonymous website
              visitors. LeadCapture&apos;s SMB solution gave us that ability at a price point that makes sense for
              our budget. We&apos;ve seen a 200% increase in qualified leads since implementation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div>
                <div className="font-bold text-gray-900">Michael Rodriguez</div>
                <div className="text-gray-600">Owner, Rodriguez Digital Marketing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SMB Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple Tools, Powerful Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to identify visitors, track engagement, and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Know Your Visitors</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify which companies visit your website before they fill out forms or make contact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#A1D1D8] to-[#5A9BA5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Alerts</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant notifications on your smartphone when important prospects visit your website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#5A9BA5] to-[#7CBECE] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy-to-understand reports and insights without complex data science or technical expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Small Business?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of small businesses who are already generating more leads and growing faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-white text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-6 h-6" />
              Start Free Trial
            </motion.button>

            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <DollarSign className="w-6 h-6" />
              View SMB Pricing
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

