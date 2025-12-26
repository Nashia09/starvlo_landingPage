"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  MessageSquare,
  Smartphone,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";

interface CampaignStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  timing: string;
  channel: string;
  icon: React.ReactNode;
  color: string;
  lightColor: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  details: string[];
}

const campaignSteps: CampaignStep[] = [
  {
    id: 1,
    title: "Welcome Email",
    subtitle: "First Impression",
    description: "Automated welcome email sent immediately when a visitor is identified, introducing your value proposition and setting expectations.",
    timing: "Immediate",
    channel: "Email",
    icon: <Mail className="w-8 h-8" />,
    color: "var(--color-primary)",
    lightColor: "var(--color-primary-light)",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop&crop=center",
    metrics: [
      { label: "Open Rate", value: "85%" },
      { label: "Click Rate", value: "34%" }
    ],
    details: [
      "Personalized subject line based on company",
      "Dynamic content based on visitor behavior",
      "Clear value proposition and next steps",
      "Mobile-optimized design"
    ]
  },
  {
    id: 2,
    title: "Social Connection",
    subtitle: "Building Relationships",
    description: "LinkedIn connection request with personalized message, expanding touchpoints and building professional relationships.",
    timing: "2 days later",
    channel: "LinkedIn",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "var(--color-primary-light)",
    lightColor: "var(--color-primary-light)",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
    metrics: [
      { label: "Accept Rate", value: "72%" },
      { label: "Response Rate", value: "28%" }
    ],
    details: [
      "Personalized connection message",
      "Reference to website visit",
      "Industry-specific talking points",
      "Professional relationship building"
    ]
  },
  {
    id: 3,
    title: "SMS Reminder",
    subtitle: "Gentle Nudge",
    description: "Strategic SMS reminder about demo scheduling or special offer, reaching prospects on their most personal device.",
    timing: "5 days later",
    channel: "SMS",
    icon: <Smartphone className="w-8 h-8" />,
    color: "var(--color-primary-dark)",
    lightColor: "var(--color-primary-dark)",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
    metrics: [
      { label: "Delivery Rate", value: "98%" },
      { label: "Response Rate", value: "45%" }
    ],
    details: [
      "Concise, value-focused message",
      "Clear call-to-action",
      "Opt-out compliance",
      "Perfect timing optimization"
    ]
  },
  {
    id: 4,
    title: "Scheduled Call",
    subtitle: "Personal Touch",
    description: "Automated scheduling for qualified leads, moving high-intent prospects to direct conversation with your sales team.",
    timing: "7 days later",
    channel: "Phone",
    icon: <Calendar className="w-8 h-8" />,
    color: "var(--color-primary-dark)",
    lightColor: "var(--color-primary-dark)",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
    metrics: [
      { label: "Booking Rate", value: "23%" },
      { label: "Show Rate", value: "78%" }
    ],
    details: [
      "Lead scoring qualification",
      "Automated calendar booking",
      "Pre-call research preparation",
      "Personalized talking points"
    ]
  },
  {
    id: 5,
    title: "Conversion Success",
    subtitle: "Mission Accomplished",
    description: "Successful conversion with comprehensive tracking and attribution across all touchpoints in the campaign.",
    timing: "Campaign complete",
    channel: "Results",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "var(--color-primary)",
    lightColor: "var(--color-primary-light)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    metrics: [
      { label: "Conversion Rate", value: "12%" },
      { label: "ROI", value: "340%" }
    ],
    details: [
      "Full attribution tracking",
      "Multi-touch conversion analysis",
      "Campaign performance metrics",
      "Continuous optimization insights"
    ]
  }
];

// Individual Step Component
const CampaignStep = ({ step, index, isLast }: { step: CampaignStep; index: number; isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-8 pb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-light)]" />
      )}

      {/* Step Icon */}
      <motion.div
        className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-500`}
        style={{ backgroundColor: isInView ? step.color : '#E5E7EB' }}
        animate={isInView ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {step.icon}

        {/* Pulse Effect */}
        {isInView && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: step.color }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Step Content */}
      <motion.div
        className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        animate={isInView ? {
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(124, 190, 206, 0.15)"
        } : {
          scale: 1,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay with auto-animated elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <motion.div
                className="flex items-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
                  animate={isInView ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  <div style={{ color: step.color }}>
                    {step.icon}
                  </div>
                </motion.div>
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold text-white bg-white/20 backdrop-blur-sm"
                >
                  {step.channel}
                </span>
                <span className="text-sm text-white/80 font-medium">{step.timing}</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-lg text-gray-600">{step.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {step.metrics.map((metric, metricIndex) => (
              <motion.div
                key={metricIndex}
                className="text-center p-4 rounded-xl bg-[var(--color-primary)]/10"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? {
                  scale: 1,
                  opacity: 1,
                  y: [0, -5, 0]
                } : { scale: 0, opacity: 0 }}
                transition={{
                  delay: 0.6 + metricIndex * 0.1,
                  duration: 0.4,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.div
                  className="text-2xl font-bold mb-1"
                  style={{ color: step.color }}
                  animate={isInView ? {
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-3">
            {step.details.map((detail, detailIndex) => (
              <motion.div
                key={detailIndex}
                className="flex items-center gap-3 text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.8 + detailIndex * 0.1, duration: 0.3 }}
              >
                <motion.div
                  animate={isInView ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  } : {}}
                  transition={{
                    delay: 1 + detailIndex * 0.2,
                    duration: 0.6,
                    scale: {
                      duration: 0.3
                    },
                    rotate: {
                      duration: 0.6
                    }
                  }}
                >
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" />
                </motion.div>
                <span>{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CampaignFlowSticky = () => {

  return (
    <div className="py-24 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-primary-light)]/5 to-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Multi-Channel Campaign Flow
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Watch how LeadConnect orchestrates touchpoints across channels to nurture leads from first contact to conversion
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Automated sequence over 14 days</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {campaignSteps.map((step, index) => (
            <CampaignStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === campaignSteps.length - 1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Campaign Flow?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Set up your multi-channel campaign in minutes and start converting more leads with intelligent automation.
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.starvlo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </a>
            <button
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default CampaignFlowSticky;
