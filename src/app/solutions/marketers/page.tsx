"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  TrendingUp,
  ArrowLeft,
  BarChart3,
  Target,
  Zap,
  DollarSign,
  Users,
  Award,
  Phone,
  PieChart,
  Activity
} from "lucide-react";
import Footer from "@/components/ui/footer";

export default function MarketersPage() {
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
                <TrendingUp className="w-4 h-4" />
                Marketing Solution
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Optimize Campaigns with
                <span className="block">
                  <Cover className="text-[#7CBECE]">Visitor Intelligence</Cover>
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your marketing strategy with visitor identification, behavior tracking,
                and conversion analytics that reveal which campaigns drive real business results.
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
                  <Phone className="w-6 h-6" />
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </WavyBackground>
      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Marketing Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the insights you need to optimize campaigns, improve targeting, and maximize marketing ROI.
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
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Attribution</h3>
              <p className="text-gray-600 leading-relaxed">
                See which marketing campaigns are driving visitor traffic and identify your highest-performing channels.
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
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Behavior Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Track visitor behavior patterns and content engagement to understand what resonates with your audience.
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
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audience Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify the industries and companies most interested in your offerings for better targeting.
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
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Measurement</h3>
              <p className="text-gray-600 leading-relaxed">
                Calculate the true return on investment for all marketing activities with detailed analytics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Metrics Section */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing Performance That Matters
            </h2>
            <p className="text-xl text-gray-600">
              See how marketers are improving campaign performance and ROI with LeadCapture.
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
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">40%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Improvement in Conversion Rates</div>
              <div className="text-gray-600">Better targeting and campaign optimization</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">85%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">More Accurate Attribution</div>
              <div className="text-gray-600">Complete visitor journey mapping</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">3x</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Better Campaign ROI</div>
              <div className="text-gray-600">Data-driven optimization strategies</div>
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
                Customer Success Story
              </span>
            </div>

            <div className="text-3xl text-[#7CBECE] mb-4">&quot;</div>
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              LeadCapture has transformed our marketing strategy. We can now see exactly which companies
              are engaging with our campaigns and tailor our content to attract more of our ideal customers.
              Our conversion rates have improved by 40% since implementation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center text-white font-bold">
                EC
              </div>
              <div>
                <div className="font-bold text-gray-900">Emily Chen</div>
                <div className="text-gray-600">Marketing Director, GrowthTech</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marketing Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how LeadCapture enhances every aspect of your marketing strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Content Optimization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identify which content attracts high-value prospects and optimize your content strategy accordingly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#A1D1D8] to-[#5A9BA5] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Campaign Targeting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Refine your targeting based on actual visitor data and company profiles for better results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#5A9BA5] to-[#7CBECE] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get detailed analytics on campaign performance and visitor engagement metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE]/80 to-[#A1D1D8]/80 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Audience Segmentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Segment your audience based on company size, industry, and engagement behavior.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#A1D1D8] to-[#7CBECE] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">ROI Tracking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Track the true ROI of your marketing efforts with detailed attribution reporting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#5A9BA5] to-[#A1D1D8] rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lead Nurturing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create targeted nurturing campaigns based on visitor behavior and engagement patterns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of marketers who are already improving their campaign performance and ROI.
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
              <Phone className="w-6 h-6" />
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}