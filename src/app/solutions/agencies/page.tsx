"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Building2,
  ArrowLeft,
  BarChart3,
  Target,
  Zap,
  Award,
  DollarSign,
  Users,
  Phone,
  Briefcase,
  TrendingUp,
  Shield
} from "lucide-react";
import Footer from "@/components/ui/footer";

export default function AgenciesPage() {
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
                <Building2 className="w-4 h-4" />
                Agency Solution
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                White-Label Lead
                <span className="block">
                  <Cover className="text-[#7CBECE]">Generation Platform</Cover>
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Provide enhanced analytics and lead generation services for your clients with our
                comprehensive white-label platform and agency partner program.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-6 h-6" />
                  Apply as Partner
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
              Everything Your Agency Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and support to help you deliver exceptional lead generation services to your clients.
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
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">White-Label Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                Rebrand our platform with your agency&apos;s logo, colors, and custom domain for seamless client experience.
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
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Dashboards</h3>
              <p className="text-gray-600 leading-relaxed">
                Provide clients with customized analytics portals and reporting dashboards for complete transparency.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Client Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Efficiently manage lead capture and analytics for multiple client accounts from a single interface.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Create new revenue streams by reselling lead generation services with attractive margin opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agency Partner Program */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agency Partner Program
            </h2>
            <p className="text-xl text-gray-600">
              Join our exclusive partner program and unlock additional benefits for your agency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">15% Referral Commissions</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn ongoing commissions on all clients you refer to our platform with competitive rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#A1D1D8] to-[#5A9BA5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tiered Discounting</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlock volume discounts based on your client count and increase your profit margins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#5A9BA5] to-[#7CBECE] rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get dedicated training, support, and resources to help your team succeed with our platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Success Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agency Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how agencies are growing their business with LeadCapture.
            </p>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#7CBECE]" />
              <span className="text-sm font-medium text-[#7CBECE] bg-[#7CBECE]/10 px-3 py-1 rounded-full">
                Agency Success Story
              </span>
            </div>

            <div className="text-3xl text-[#7CBECE] mb-4">&quot;</div>
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              We&apos;ve integrated LeadCapture into our core service offering for clients. It&apos;s a game-changer
              that lets us show clients exactly which companies are visiting their sites after our marketing
              campaigns. Our client retention has improved by 60% since we started offering this service.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-full flex items-center justify-center text-white font-bold">
                ST
              </div>
              <div>
                <div className="font-bold text-gray-900">Sarah Thompson</div>
                <div className="text-gray-600">Director, Elevate Digital Agency</div>
              </div>
            </div>
          </motion.div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#7CBECE] to-[#A1D1D8] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enhanced Reporting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provide clients with detailed visitor identification and engagement metrics in your regular reports.
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
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Client Retention</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Demonstrate clear ROI by showing which campaigns drive company visits and conversions.
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
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">New Business</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Offer lead capture as a value-add service to win new clients and differentiate your agency.
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
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lead Nurturing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Help clients convert identified companies with targeted follow-up and nurturing strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Become an Agency Partner?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join our exclusive partner program and start offering lead generation services to your clients today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-white text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-6 h-6" />
              Apply Now
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

