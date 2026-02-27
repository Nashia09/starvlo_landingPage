"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Building2,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Zap,
  Globe,
  Award,
  DollarSign,
  Clock
} from "lucide-react";
import Footer from "@/components/ui/footer";

const solutions = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "For Sales Teams",
    description: "Turn anonymous traffic into qualified sales opportunities with advanced lead identification and scoring.",
    features: [
      "Lead qualification scoring",
      "Sales pipeline integration",
      "Real-time notifications",
      "CRM synchronization"
    ],
    benefits: [
      "300% increase in qualified leads",
      "50% reduction in sales cycle",
      "Real-time lead alerts"
    ],
    gradient: "from-[#7CBECE] to-[#A1D1D8]",
    link: "/solutions/sales-teams"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "For Marketers",
    description: "Optimize campaigns with visitor identification, behavior tracking, and conversion analytics.",
    features: [
      "Campaign attribution",
      "Visitor behavior analysis",
      "Conversion optimization",
      "ROI tracking"
    ],
    benefits: [
      "40% improvement in conversion rates",
      "Complete visitor journey mapping",
      "Data-driven campaign optimization"
    ],
    gradient: "from-[#A1D1D8] to-[#5A9BA5]",
    link: "/solutions/marketers"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "For Agencies",
    description: "Provide enhanced analytics and lead generation services for your clients with white-label solutions.",
    features: [
      "White-label platform",
      "Client reporting dashboards",
      "Multi-client management",
      "Custom branding"
    ],
    benefits: [
      "Increase client retention by 60%",
      "New revenue streams",
      "Comprehensive client insights"
    ],
    gradient: "from-[#5A9BA5] to-[#7CBECE]",
    link: "/solutions/agencies"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "For SMBs",
    description: "Cost-effective lead generation solutions designed specifically for growing small and medium businesses.",
    features: [
      "Affordable pricing",
      "Easy setup",
      "Essential features",
      "Growth-focused tools"
    ],
    benefits: [
      "Quick ROI in 30 days",
      "Simple implementation",
      "Scalable solutions"
    ],
    gradient: "from-[#7CBECE]/80 to-[#A1D1D8]/80",
    link: "/solutions/smbs"
  }
];

const caseStudies = [
  {
    company: "TechCorp",
    industry: "SaaS",
    result: "300% increase in qualified leads",
    description: "How TechCorp transformed their lead generation process and tripled their conversion rate.",
    metrics: [
      { label: "Lead Quality", value: "+300%" },
      { label: "Conversion Rate", value: "+150%" },
      { label: "Sales Cycle", value: "-40%" }
    ]
  },
  {
    company: "GrowthAgency",
    industry: "Marketing Agency",
    result: "60% client retention improvement",
    description: "How GrowthAgency used our white-label solution to provide better value to their clients.",
    metrics: [
      { label: "Client Retention", value: "+60%" },
      { label: "Revenue Growth", value: "+200%" },
      { label: "Client Satisfaction", value: "+85%" }
    ]
  }
];

export default function SolutionsPage() {
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
        <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Target className="w-4 h-4" />
              Industry Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Tailored Solutions for
              <span className="block">
                <Cover className="text-[#7CBECE]">Every Business</Cover>
              </span>
            </h1>

            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover industry-specific lead generation solutions designed to meet your unique
              business needs and drive measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-6 h-6" />
                Find Your Solution
              </motion.button>

              <motion.button
                className="border-2 border-[#7CBECE] text-[#7CBECE] hover:bg-[#7CBECE] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-6 h-6" />
                Talk to Expert
              </motion.button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>

      {/* Solutions Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions Built for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the solution that fits your business model and start generating more qualified leads today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} text-white mb-6`}>
                  {solution.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#7CBECE]" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-[#A1D1D8]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={solution.link}>
                  <button className="w-full bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Solution
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-br from-[#7CBECE]/5 via-[#A1D1D8]/5 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours are achieving remarkable results.
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
                  <Award className="w-6 h-6 text-[#7CBECE]" />
                  <span className="text-sm font-medium text-[#7CBECE] bg-[#7CBECE]/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <p className="text-lg font-semibold text-[#7CBECE] mb-4">{study.result}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{study.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-[#7CBECE]">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
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
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Let our experts help you choose the right solution for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-white text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="w-6 h-6" />
              Schedule Consultation
            </motion.button>

            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-[#7CBECE] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <DollarSign className="w-6 h-6" />
              View Pricing
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

