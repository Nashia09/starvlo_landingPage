"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import {
  Target,
  BarChart3,
  Users,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Eye,
  MessageSquare
} from "lucide-react";
import Footer from "@/components/ui/footer";

const products = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Starvlo",
    description: "Identify anonymous website visitors and convert them into qualified leads with our advanced tracking technology.",
    features: [
      "Real-time visitor identification",
      "Company data enrichment",
      "Contact information discovery",
      "Behavioral tracking"
    ],
    gradient: "from-[#7CBECE] to-[#A1D1D8]",
    link: "/products/leadcapture-pro"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "LeadTracker",
    description: "Track leads through your sales pipeline with comprehensive analytics and real-time insights.",
    features: [
      "Pipeline management",
      "Conversion tracking",
      "Lead scoring",
      "Custom reporting"
    ],
    gradient: "from-[#A1D1D8] to-[#5A9BA5]",
    link: "/products/lead-tracker"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "VisitorInsights",
    description: "Detailed visitor behavior analysis to optimize conversions and understand your audience.",
    features: [
      "Heatmap analysis",
      "Session recordings",
      "Conversion funnels",
      "A/B testing"
    ],
    gradient: "from-[#5A9BA5] to-[#7CBECE]",
    link: "/products/visitor-insights"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "LeadConnect",
    description: "Automated lead nurturing with personalized outreach sequences and smart follow-ups.",
    features: [
      "Email automation",
      "Personalized messaging",
      "Multi-channel outreach",
      "Response tracking"
    ],
    gradient: "from-[#7CBECE]/80 to-[#A1D1D8]/80",
    link: "/products/lead-connect"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "LeadCapture has transformed our lead generation process. We've seen a 300% increase in qualified leads.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Sales Manager",
    company: "GrowthCo",
    content: "The visitor identification feature is incredible. We now know exactly who's visiting our site.",
    rating: 5
  }
];

export default function ProductsPage() {
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
              <Zap className="w-4 h-4" />
              Our Products
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Powerful Tools for
              <span className="block">
                <Cover className="text-[#7CBECE]">Lead Generation</Cover>
              </span>
            </h1>

            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of products designed to identify visitors,
              capture leads, and grow your business with intelligent automation.
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
                <Target className="w-6 h-6" />
                Get Started
              </motion.a>

              <motion.button
                className="border-2 border-[#7CBECE] text-[#7CBECE] hover:bg-[#7CBECE] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-6 h-6" />
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Lead Generation Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to identify, capture, and convert website visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${product.gradient} text-white mb-6`}>
                  {product.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#7CBECE]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={product.link}>
                  <button className="w-full bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about our products.
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

                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-[#7CBECE]">{testimonial.role} at {testimonial.company}</p>
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
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of businesses already using our products to grow their revenue.
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
              <Users className="w-6 h-6" />
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
