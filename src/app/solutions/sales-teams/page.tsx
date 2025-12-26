"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Users,
  ArrowLeft,
  BarChart3,
  Target,
  Zap,
  Bell,
  CreditCard,
  Award,
  Phone
} from "lucide-react";
import Footer from "@/components/ui/footer";

export default function SalesTeamSolutionPage() {
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
                <Users className="w-4 h-4" />
                Sales Teams Solution
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Turn Visitors Into
                <span className="block">
                  <Cover className="text-[#7CBECE]">Qualified Leads</Cover>
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform anonymous website traffic into qualified sales opportunities with advanced
                lead identification, scoring, and real-time notifications.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="https://app.starvlo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-6 h-6" />
                  Get Started
                </motion.a>

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
      {/* Key Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Sales Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your sales team needs to identify, qualify, and convert website visitors into customers.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visitor Identification</h3>
              <p className="text-gray-600 leading-relaxed">
                See which companies are visiting your website, even before they fill out a form or make contact.
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
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Alerts</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant notifications when high-value prospects visit your site so you can reach out at the perfect moment.
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
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Scoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Prioritize leads based on website engagement, company profile, and behavioral data for maximum efficiency.
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
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically sync visitor data with your CRM for seamless follow-up and comprehensive lead tracking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Results for Sales Teams
            </h2>
            <p className="text-xl text-gray-600">
              See how sales teams are achieving remarkable results with LeadCapture.
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
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">300%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Increase in Qualified Leads</div>
              <div className="text-gray-600">Average improvement across all customers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">50%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Reduction in Sales Cycle</div>
              <div className="text-gray-600">Faster lead qualification and follow-up</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#7CBECE] mb-4">24/7</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Real-time Monitoring</div>
              <div className="text-gray-600">Never miss a high-value prospect again</div>
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
              Since implementing LeadCapture, our sales team has seen a 35% increase in qualified leads.
              We now know exactly which companies are interested in our services and can reach out at the
              perfect moment. It&apos;s completely transformed our sales process.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center text-white font-bold">
                SJ
              </div>
              <div>
                <div className="font-bold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">Sales Director, TechCorp</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How LeadCapture Works for Sales Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, powerful process that turns anonymous visitors into qualified sales opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visitor Identification</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced tracking identifies companies visiting your website, providing detailed
                company information and contact data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#A1D1D8] to-[#5A9BA5] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Scoring & Alerts</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically score leads based on engagement and company profile. Get instant alerts
                for high-value prospects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#5A9BA5] to-[#7CBECE] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Integration & Follow-up</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly sync data with your CRM and follow up with qualified leads using
                personalized outreach strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of sales teams who are already converting more visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="https://app.starvlo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Target className="w-6 h-6" />
              Get Started
            </motion.a>

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
