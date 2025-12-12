"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, User, Target, TrendingUp, CheckCircle } from "lucide-react";

const emailSequence = [
  {
    id: 1,
    subject: "Welcome to our platform!",
    type: "welcome",
    delay: "Immediate",
    openRate: "85%",
    content: "Thank you for visiting our website. Here's what we can do for you...",
    status: "sent"
  },
  {
    id: 2,
    subject: "See how companies like yours grow",
    type: "social_proof",
    delay: "2 days",
    openRate: "72%",
    content: "Companies similar to yours have seen 300% growth...",
    status: "scheduled"
  },
  {
    id: 3,
    subject: "Your personalized demo is ready",
    type: "demo",
    delay: "5 days",
    openRate: "68%",
    content: "Based on your industry, we've prepared a custom demo...",
    status: "pending"
  },
  {
    id: 4,
    subject: "Limited time: 30% off your first year",
    type: "offer",
    delay: "7 days",
    openRate: "91%",
    content: "Don't miss out on this exclusive offer...",
    status: "pending"
  }
];

const EmailSequenceDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= emailSequence.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const getEmailIcon = (type: string) => {
    switch (type) {
      case "welcome": return <User className="w-4 h-4" />;
      case "social_proof": return <TrendingUp className="w-4 h-4" />;
      case "demo": return <Target className="w-4 h-4" />;
      case "offer": return <Mail className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string, index: number) => {
    if (index <= currentStep && isPlaying) return "text-green-500";
    switch (status) {
      case "sent": return "text-green-500";
      case "scheduled": return "text-[#7CBECE]";
      case "pending": return "text-gray-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Sequence Automation</h3>
          <p className="text-gray-600">Watch how LeadConnect nurtures leads automatically</p>
        </div>
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            isPlaying 
              ? "bg-red-500 text-white hover:bg-red-600" 
              : "bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white hover:shadow-lg"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? "Stop Demo" : "Play Demo"}
        </motion.button>
      </div>

      <div className="space-y-4">
        {emailSequence.map((email, index) => (
          <motion.div
            key={email.id}
            className={`relative p-6 rounded-xl border-2 transition-all duration-500 ${
              index <= currentStep && isPlaying
                ? "border-green-500 bg-green-50"
                : index === currentStep + 1 && isPlaying
                ? "border-[#7CBECE] bg-[#7CBECE]/5"
                : "border-gray-200 bg-gray-50"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full ${
                index <= currentStep && isPlaying
                  ? "bg-green-500 text-white"
                  : "bg-[#7CBECE] text-white"
              }`}>
                {getEmailIcon(email.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-900">{email.subject}</h4>
                  {index <= currentStep && isPlaying && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-1 text-green-500"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Sent</span>
                    </motion.div>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{email.content}</p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Delay: {email.delay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Open Rate: {email.openRate}</span>
                  </div>
                  <div className={`font-medium ${getStatusColor(email.status, index)}`}>
                    {index <= currentStep && isPlaying ? "✓ Sent" : email.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Animated connection line */}
            {index < emailSequence.length - 1 && (
              <div className="absolute left-8 top-full w-0.5 h-4 bg-gray-300">
                <AnimatePresence>
                  {index < currentStep && isPlaying && (
                    <motion.div
                      className="w-full bg-green-500"
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-[#7CBECE]/10 to-[#A1D1D8]/10 rounded-xl">
        <h4 className="font-semibold text-gray-900 mb-2">Sequence Performance</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[#7CBECE]">79%</div>
            <div className="text-sm text-gray-600">Avg. Open Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#7CBECE]">34%</div>
            <div className="text-sm text-gray-600">Click Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#7CBECE]">12%</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSequenceDemo;
