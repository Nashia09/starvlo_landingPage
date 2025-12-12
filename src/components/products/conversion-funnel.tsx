"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Eye, MousePointer, CreditCard, TrendingDown, TrendingUp } from "lucide-react";

const funnelSteps = [
  {
    id: 1,
    name: "Website Visitors",
    icon: Users,
    count: 10000,
    percentage: 100,
    color: "#7CBECE",
    description: "Total unique visitors to your website"
  },
  {
    id: 2,
    name: "Page Views",
    icon: Eye,
    count: 6500,
    percentage: 65,
    color: "#A1D1D8",
    description: "Visitors who viewed product pages"
  },
  {
    id: 3,
    name: "Engaged Users",
    icon: MousePointer,
    count: 3200,
    percentage: 32,
    color: "#5A9BA5",
    description: "Users who spent 30+ seconds on site"
  },
  {
    id: 4,
    name: "Sign-ups",
    icon: CreditCard,
    count: 480,
    percentage: 4.8,
    color: "#4A8A96",
    description: "Users who created an account"
  },
  {
    id: 5,
    name: "Conversions",
    icon: TrendingUp,
    count: 120,
    percentage: 1.2,
    color: "#3A7A86",
    description: "Users who made a purchase"
  }
];

const ConversionFunnel = () => {
  const [animatedSteps, setAnimatedSteps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setAnimatedSteps(prev => {
          if (prev.length >= funnelSteps.length) {
            setIsPlaying(false);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const resetAnimation = () => {
    setAnimatedSteps([]);
    setIsPlaying(false);
  };

  const startAnimation = () => {
    setAnimatedSteps([]);
    setIsPlaying(true);
  };

  const getDropoffRate = (currentIndex: number) => {
    if (currentIndex === 0) return null;
    const current = funnelSteps[currentIndex];
    const previous = funnelSteps[currentIndex - 1];
    return ((previous.count - current.count) / previous.count * 100).toFixed(1);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Conversion Funnel Analysis</h3>
          <p className="text-gray-600">Track user journey and identify optimization opportunities</p>
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button
            onClick={startAnimation}
            className="px-6 py-3 bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Animate Funnel
          </motion.button>
          
          <motion.button
            onClick={resetAnimation}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset
          </motion.button>
        </div>
      </div>

      <div className="space-y-6">
        {funnelSteps.map((step, index) => {
          const isAnimated = animatedSteps.includes(index);
          const dropoffRate = getDropoffRate(index);
          
          return (
            <div key={step.id} className="relative">
              {/* Dropoff indicator */}
              {dropoffRate && (
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>{dropoffRate}% drop-off</span>
                  </div>
                </div>
              )}

              <motion.div
                className={`relative cursor-pointer transition-all duration-300 ${
                  selectedStep === index ? "scale-105" : ""
                }`}
                onClick={() => setSelectedStep(selectedStep === index ? null : index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Funnel shape */}
                <div 
                  className="relative mx-auto rounded-lg shadow-lg overflow-hidden transition-all duration-500"
                  style={{
                    width: `${Math.max(20, step.percentage)}%`,
                    backgroundColor: step.color,
                    opacity: isAnimated ? 1 : 0.3
                  }}
                >
                  <motion.div
                    className="p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isAnimated ? 1 : 0.3, 
                      y: isAnimated ? 0 : 20 
                    }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <step.icon className="w-6 h-6" />
                        <div>
                          <h4 className="font-semibold text-lg">{step.name}</h4>
                          <p className="text-white/80 text-sm">{step.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold">
                          {isAnimated ? step.count.toLocaleString() : "0"}
                        </div>
                        <div className="text-white/80 text-sm">
                          {isAnimated ? `${step.percentage}%` : "0%"}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated fill effect */}
                  <AnimatePresence>
                    {isAnimated && (
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Detailed info panel */}
                <AnimatePresence>
                  {selectedStep === index && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-4 p-6 bg-gray-50 rounded-xl border border-gray-200 z-10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900">
                            {step.count.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Total Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-[#7CBECE]">
                            {step.percentage}%
                          </div>
                          <div className="text-sm text-gray-600">Conversion Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900">
                            {index > 0 ? `${(step.count / funnelSteps[index - 1].count * 100).toFixed(1)}%` : "100%"}
                          </div>
                          <div className="text-sm text-gray-600">Step Conversion</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-white rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Optimization Suggestions:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {index === 1 && (
                            <>
                              <li>• Improve page load speed to reduce bounce rate</li>
                              <li>• Add compelling above-the-fold content</li>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <li>• Enhance user experience with better navigation</li>
                              <li>• Add interactive elements to increase engagement</li>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <li>• Simplify the sign-up process</li>
                              <li>• Add social proof and testimonials</li>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <li>• Optimize checkout flow</li>
                              <li>• Add urgency and scarcity elements</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-gradient-to-r from-[#7CBECE]/10 to-[#A1D1D8]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">1.2%</div>
          <div className="text-sm text-gray-600">Overall Conversion</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-[#A1D1D8]/10 to-[#5A9BA5]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">$2,400</div>
          <div className="text-sm text-gray-600">Revenue per 1000 Visitors</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-[#5A9BA5]/10 to-[#7CBECE]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">68%</div>
          <div className="text-sm text-gray-600">Biggest Drop-off Point</div>
        </div>
      </div>
    </div>
  );
};

export default ConversionFunnel;
