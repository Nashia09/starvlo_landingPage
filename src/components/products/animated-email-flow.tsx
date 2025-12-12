"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedEmailFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    { id: 1, label: "Visitor Arrives", color: "#7CBECE" },
    { id: 2, label: "Behavior Tracked", color: "#A1D1D8" },
    { id: 3, label: "Email Triggered", color: "#5A9BA5" },
    { id: 4, label: "Engagement Measured", color: "#4A8A96" },
    { id: 5, label: "Follow-up Sent", color: "#7CBECE" }
  ];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsAnimating(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isAnimating, steps.length]);

  const startAnimation = () => {
    setCurrentStep(0);
    setIsAnimating(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Email Flow</h3>
        <button
          onClick={startAnimation}
          className="px-6 py-3 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
        >
          {isAnimating ? "Animating..." : "Start Animation"}
        </button>
      </div>

      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        style={{ maxHeight: "400px" }}
      >
        {/* Background */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7CBECE" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#A1D1D8" stopOpacity="0.1" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="800" height="400" fill="url(#bgGradient)" rx="20" />

        {/* Flow Path */}
        <motion.path
          d="M 100 200 Q 200 150 300 200 Q 400 250 500 200 Q 600 150 700 200"
          stroke="#7CBECE"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isAnimating ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Step Nodes */}
        {steps.map((step, index) => {
          const x = 100 + (index * 150);
          const y = index % 2 === 0 ? 200 : 200 + (index === 1 || index === 3 ? -50 : 50);
          const isActive = currentStep >= index;
          
          return (
            <g key={step.id}>
              {/* Node Circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="25"
                fill={isActive ? step.color : "#E5E7EB"}
                stroke={isActive ? "#FFFFFF" : "#D1D5DB"}
                strokeWidth="3"
                filter={isActive ? "url(#glow)" : "none"}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: isActive ? 1 : 0.7,
                  fill: isActive ? step.color : "#E5E7EB"
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
              
              {/* Step Number */}
              <motion.text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill={isActive ? "#FFFFFF" : "#9CA3AF"}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                {step.id}
              </motion.text>
              
              {/* Step Label */}
              <motion.text
                x={x}
                y={y + 50}
                textAnchor="middle"
                fontSize="12"
                fontWeight="500"
                fill={isActive ? step.color : "#6B7280"}
                initial={{ opacity: 0, y: y + 60 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.5,
                  y: y + 50
                }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                {step.label}
              </motion.text>
              
              {/* Pulse Effect for Active Step */}
              <AnimatePresence>
                {isActive && currentStep === index && (
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="25"
                    fill="none"
                    stroke={step.color}
                    strokeWidth="2"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ scale: 1, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </AnimatePresence>
            </g>
          );
        })}

        {/* Email Icons */}
        <AnimatePresence>
          {isAnimating && currentStep >= 2 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Email 1 */}
              <motion.rect
                x="320"
                y="120"
                width="40"
                height="30"
                rx="5"
                fill="#7CBECE"
                initial={{ y: 200 }}
                animate={{ y: 120 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.path
                d="M 325 125 L 340 135 L 355 125"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              
              {/* Email 2 */}
              <motion.rect
                x="470"
                y="120"
                width="40"
                height="30"
                rx="5"
                fill="#A1D1D8"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 120, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              />
              <motion.path
                d="M 475 125 L 490 135 L 505 125"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Success Indicators */}
        <AnimatePresence>
          {currentStep >= 4 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Checkmarks */}
              <motion.path
                d="M 340 140 L 345 145 L 355 135"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.path
                d="M 490 140 L 495 145 L 505 135"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Floating Particles */}
        <AnimatePresence>
          {isAnimating && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={150 + i * 100}
                  cy={180 + Math.sin(i) * 20}
                  r="3"
                  fill="#7CBECE"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </svg>

      {/* Progress Indicator */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-[#7CBECE]">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedEmailFlow;
