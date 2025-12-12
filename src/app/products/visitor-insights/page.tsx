"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Eye,
  MousePointer,
  BarChart3,
  CheckCircle,
  Play,
  Monitor,
  Smartphone,
  Globe,
  Activity,
  Filter,
  Camera,
  PieChart,
  TrendingUp
} from "lucide-react";
import Footer from "@/components/ui/footer";
import HeatmapDemo from "@/components/products/heatmap-demo";
import ConversionFunnel from "@/components/products/conversion-funnel";

const features = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Heatmap Analysis",
    description: "Visualize exactly where visitors click, scroll, and focus their attention on your website.",
    benefits: [
      "Click heatmaps",
      "Scroll depth tracking",
      "Attention mapping",
      "Mobile vs desktop views"
    ],
    gradient: "from-[#7CBECE] to-[#A1D1D8]"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Session Recordings",
    description: "Watch real user sessions to understand exactly how visitors interact with your site.",
    benefits: [
      "Full session playback",
      "User journey tracking",
      "Error identification",
      "Frustration detection"
    ],
    gradient: "from-[#A1D1D8] to-[#5A9BA5]"
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Conversion Funnels",
    description: "Identify where visitors drop off in your conversion process and optimize accordingly.",
    benefits: [
      "Multi-step funnel analysis",
      "Drop-off identification",
      "Conversion optimization",
      "A/B testing insights"
    ],
    gradient: "from-[#5A9BA5] to-[#7CBECE]"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Behavioral Analytics",
    description: "Deep insights into user behavior patterns, preferences, and engagement metrics.",
    benefits: [
      "User segmentation",
      "Behavior patterns",
      "Engagement metrics",
      "Predictive analytics"
    ],
    gradient: "from-[#7CBECE]/80 to-[#A1D1D8]/80"
  }
];

const analyticsTypes = [
  {
    icon: MousePointer,
    name: "Click Tracking",
    color: "#7CBECE",
    description: "Track every click and interaction",
    metric: "1.2M+ clicks analyzed"
  },
  {
    icon: Eye,
    name: "Attention Maps",
    color: "#A1D1D8",
    description: "See where users focus most",
    metric: "98% accuracy rate"
  },
  {
    icon: BarChart3,
    name: "Scroll Analysis",
    color: "#5A9BA5",
    description: "Understand content engagement",
    metric: "Real-time tracking"
  },
  {
    icon: Filter,
    name: "User Segmentation",
    color: "#4A8A96",
    description: "Analyze different user groups",
    metric: "50+ segments"
  }
];

const caseStudies = [
  {
    company: "OptimizeNow",
    industry: "E-commerce",
    result: "78% higher engagement",
    description: "Used heatmap data to redesign their product pages and dramatically improve user engagement.",
    metrics: [
      { label: "Engagement", value: "+78%" },
      { label: "Time on Page", value: "+145%" },
      { label: "Bounce Rate", value: "-32%" }
    ],
    challenge: "Low product page engagement",
    solution: "Heatmap analysis revealed users weren&apos;t seeing key product benefits",
    outcome: "Redesigned layout based on attention patterns"
  },
  {
    company: "ConvertPro",
    industry: "SaaS",
    result: "3.5x conversion increase",
    description: "Identified funnel bottlenecks and optimized their signup process for maximum conversions.",
    metrics: [
      { label: "Conversions", value: "+350%" },
      { label: "Form Completion", value: "+89%" },
      { label: "User Satisfaction", value: "+67%" }
    ],
    challenge: "High drop-off in signup funnel",
    solution: "Session recordings showed form confusion points",
    outcome: "Simplified form increased conversions by 350%"
  }
];

export default function VisitorInsightsPage() {
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
                <Eye className="w-4 h-4" />
                VisitorInsights
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Understand Your
                <span className="block">
                  <Cover className="text-[#7CBECE]">Visitors Better</Cover>
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Get deep insights into how visitors interact with your website through heatmaps,
                session recordings, and behavioral analytics to optimize for maximum conversions.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Activity className="w-6 h-6" />
                  Start Analysis
                </motion.button>

                <motion.button
                  className="border-2 border-[#7CBECE] text-[#7CBECE] hover:bg-[#7CBECE] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </WavyBackground>

      {/* Interactive Heatmap Demo */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Heatmap Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly where your visitors click, scroll, and focus their attention with our real-time heatmap technology.
            </p>
          </div>

          <HeatmapDemo />
        </div>
      </section>

      {/* Analytics Types */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple analysis methods to give you complete visibility into user behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                  style={{ backgroundColor: type.color }}
                >
                  <type.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-2">{type.description}</p>
                <div className="text-sm font-medium text-[#7CBECE]">{type.metric}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Real-Time Analytics Dashboard
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-r from-[#7CBECE]/10 to-[#A1D1D8]/10 rounded-xl">
                <Monitor className="w-12 h-12 text-[#7CBECE] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Desktop Analytics</h4>
                <p className="text-sm text-gray-600 mb-3">Detailed desktop user behavior analysis</p>
                <div className="text-2xl font-bold text-[#7CBECE]">68%</div>
                <div className="text-sm text-gray-600">of total traffic</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-[#A1D1D8]/10 to-[#5A9BA5]/10 rounded-xl">
                <Smartphone className="w-12 h-12 text-[#7CBECE] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Analytics</h4>
                <p className="text-sm text-gray-600 mb-3">Mobile-specific behavior insights</p>
                <div className="text-2xl font-bold text-[#7CBECE]">32%</div>
                <div className="text-sm text-gray-600">of total traffic</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-[#5A9BA5]/10 to-[#7CBECE]/10 rounded-xl">
                <Globe className="w-12 h-12 text-[#7CBECE] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Global Insights</h4>
                <p className="text-sm text-gray-600 mb-3">Worldwide user behavior patterns</p>
                <div className="text-2xl font-bold text-[#7CBECE]">150+</div>
                <div className="text-sm text-gray-600">countries tracked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Funnel Demo */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conversion Funnel Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify exactly where visitors drop off and optimize your conversion process for maximum results.
            </p>
          </div>

          <ConversionFunnel />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand and optimize your website&apos;s user experience.
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

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how companies are using VisitorInsights to optimize their websites and increase conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#7CBECE]" />
                  <span className="text-sm font-medium text-[#7CBECE] bg-[#7CBECE]/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <p className="text-lg font-semibold text-[#7CBECE] mb-4">{study.result}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{study.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-[#7CBECE]">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Challenge: </span>
                    <span className="text-gray-700">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Solution: </span>
                    <span className="text-gray-700">{study.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Outcome: </span>
                    <span className="text-gray-700">{study.outcome}</span>
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
            Ready to Understand Your Visitors?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Start analyzing user behavior today and optimize your website for maximum conversions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-white text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Activity className="w-6 h-6" />
              Start Free Analysis
            </motion.button>

            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6" />
              Watch Demo
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}