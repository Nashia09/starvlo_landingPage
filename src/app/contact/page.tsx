"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, HelpCircle } from "lucide-react";
import Link from "next/link";
import ModernContactForm from "@/components/ui/forms/modern-contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/10 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-black opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
              Get in <span className="text-[#7CBECE]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Have questions about Starvlo? Our team can help you capture more leads, automate follow-up, and close more sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <ModernContactForm />
              </motion.div>
            </div>

            {/* Contact Information & Additional Options */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#7CBECE]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#7CBECE]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@starvlo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#7CBECE]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#7CBECE]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#7CBECE]/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#7CBECE]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">
                        123 Tech Boulevard<br />
                        Suite 456<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Book a Demo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[#7CBECE] to-[#5A9BA5] rounded-2xl shadow-xl p-8 text-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Book a Demo</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Want to see Starvlo in action? Schedule a personalized demo with our product specialists.
                </p>
                <button className="w-full bg-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl border border-gray-200">
                  <span className="text-[#7CBECE] font-semibold">Schedule Demo</span>
                </button>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-[#7CBECE]" />
                  <h3 className="text-xl font-bold text-gray-900">Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Already a customer? Visit our help center for quick answers to common questions.
                </p>
                <Link href="/support">
                  <button className="w-full border-2 border-[#7CBECE] text-[#7CBECE] hover:bg-[#7CBECE] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group">
                    <span className="font-semibold group-hover:text-white">Help Center</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
