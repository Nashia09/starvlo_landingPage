"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Target,
  BarChart3,
  CheckCircle,
  Star,
  Send,
  Globe,
  Calendar
} from "lucide-react";
import Footer from "@/components/ui/footer";
import EmailSequenceDemo from "@/components/products/email-sequence-demo";
import CampaignFlowSticky from "@/components/products/campaign-flow-sticky";

const features = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Smart Email Sequences",
    description: "Create intelligent email campaigns that adapt based on recipient behavior and engagement patterns.",
    benefits: [
      "Behavioral triggers",
      "Dynamic content",
      "A/B testing",
      "Delivery optimization"
    ],
    gradient: "from-[#7CBECE] to-[#A1D1D8]"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Multi-Channel Outreach",
    description: "Reach prospects across email, SMS, social media, and phone calls with coordinated messaging.",
    benefits: [
      "Unified messaging",
      "Channel optimization",
      "Response tracking",
      "Preference management"
    ],
    gradient: "from-[#A1D1D8] to-[#5A9BA5]"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personalization Engine",
    description: "Leverage visitor data and behavior to create highly personalized outreach that converts.",
    benefits: [
      "Dynamic personalization",
      "Behavioral insights",
      "Industry targeting",
      "Custom variables"
    ],
    gradient: "from-[#5A9BA5] to-[#7CBECE]"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Track performance across all channels with detailed analytics and optimization insights.",
    benefits: [
      "Real-time metrics",
      "ROI tracking",
      "Conversion attribution",
      "Performance insights"
    ],
    gradient: "from-[#7CBECE]/80 to-[#A1D1D8]/80"
  }
];



const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    content: "LeadConnect increased our email open rates by 340% and conversion rates by 180%. The personalization is incredible.",
    rating: 5,
    results: "340% increase in open rates"
  },
  {
    name: "Michael Rodriguez",
    role: "Sales Manager",
    company: "GrowthCorp",
    content: "The multi-channel approach helped us reach prospects where they&apos;re most active. Our response rates doubled.",
    rating: 5,
    results: "200% increase in response rates"
  }
];

export default function LeadConnectPage() {
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
          <div className="text-center mb-12">
            <Link href="/products" className="text-[#A1D1D8] mb-8 inline-block hover:underline">
              ← Back to Products
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
                <MessageSquare className="w-4 h-4" />
                LeadConnect
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Automate Your
                <span className="block">
                  <Cover className="text-[#7CBECE]">Lead Nurturing</Cover>
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform anonymous visitors into engaged customers with intelligent,
                multi-channel outreach sequences that adapt to each prospect&apos;s behavior.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-6 h-6" />
                  Start Free Trial
                </motion.button>

                <motion.button
                  className="border-2 border-[#7CBECE] text-[#7CBECE] hover:bg-[#7CBECE] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-6 h-6" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
      {/* Interactive Demo Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See LeadConnect in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our intelligent email sequences automatically nurture leads from first visit to conversion.
            </p>
          </div>

          <EmailSequenceDemo />
        </div>
      </section>

      {/* Interactive Campaign Flow */}
      <section className="relative">
        <CampaignFlowSticky />
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Every Campaign
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your lead nurturing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#7CBECE]" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Marketing Teams
            </h2>
            <p className="text-xl text-gray-600">
              See how companies are transforming their lead nurturing with LeadConnect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#7CBECE] text-[#7CBECE]" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-[#7CBECE]">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#7CBECE]">{testimonial.results.split(' ')[0]}</div>
                    <div className="text-sm text-gray-600">{testimonial.results.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Lead Nurturing?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of companies already using LeadConnect to convert more visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-white text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-6 h-6" />
              Start Free Trial
            </motion.button>

            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-6 h-6" />
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

