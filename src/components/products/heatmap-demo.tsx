"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MousePointer, BarChart3, Play, Pause, RotateCcw } from "lucide-react";

const heatmapData = [
  { x: 20, y: 15, intensity: 0.9, clicks: 45 },
  { x: 35, y: 25, intensity: 0.7, clicks: 32 },
  { x: 60, y: 20, intensity: 0.8, clicks: 38 },
  { x: 80, y: 30, intensity: 0.6, clicks: 28 },
  { x: 25, y: 45, intensity: 0.5, clicks: 22 },
  { x: 70, y: 50, intensity: 0.9, clicks: 51 },
  { x: 45, y: 60, intensity: 0.4, clicks: 18 },
  { x: 85, y: 70, intensity: 0.7, clicks: 35 },
  { x: 30, y: 80, intensity: 0.3, clicks: 12 },
  { x: 65, y: 85, intensity: 0.6, clicks: 29 }
];

const HeatmapDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentView, setCurrentView] = useState<'clicks' | 'scroll' | 'attention'>('clicks');
  const [animatedPoints, setAnimatedPoints] = useState<number[]>([]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setAnimatedPoints(prev => {
          if (prev.length >= heatmapData.length) {
            return [];
          }
          return [...prev, prev.length];
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const getHeatmapColor = (intensity: number) => {
    if (intensity > 0.8) return "bg-red-500";
    if (intensity > 0.6) return "bg-orange-500";
    if (intensity > 0.4) return "bg-yellow-500";
    if (intensity > 0.2) return "bg-green-500";
    return "bg-blue-500";
  };

  const getHeatmapOpacity = (intensity: number) => {
    return Math.max(0.3, intensity);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setAnimatedPoints([]);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Heatmap Analysis</h3>
          <p className="text-gray-600">See where visitors click, scroll, and focus their attention</p>
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              isPlaying 
                ? "bg-red-500 text-white hover:bg-red-600" 
                : "bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] text-white hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Pause" : "Play"}
          </motion.button>
          
          <motion.button
            onClick={resetDemo}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </motion.button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm font-medium text-gray-700">View:</span>
        {[
          { key: 'clicks', label: 'Click Heatmap', icon: MousePointer },
          { key: 'scroll', label: 'Scroll Map', icon: BarChart3 },
          { key: 'attention', label: 'Attention Map', icon: Eye }
        ].map(({ key, label, icon: Icon }) => (
          <motion.button
            key={key}
            onClick={() => setCurrentView(key as 'clicks' | 'scroll' | 'attention')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              currentView === key
                ? "bg-[#7CBECE] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="w-4 h-4" />
            {label}
          </motion.button>
        ))}
      </div>

      {/* Mock Website Layout */}
      <div className="relative bg-gray-50 rounded-xl p-6 min-h-[400px] overflow-hidden">
        {/* Header */}
        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="w-24 h-6 bg-[#7CBECE] rounded"></div>
            <div className="flex gap-4">
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
          <div className="w-3/4 h-8 bg-gray-300 rounded mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded mb-6"></div>
          <div className="w-32 h-10 bg-[#7CBECE] rounded"></div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
          <div className="w-1/2 h-6 bg-gray-300 rounded mx-auto mb-4"></div>
          <div className="w-40 h-10 bg-[#A1D1D8] rounded mx-auto"></div>
        </div>

        {/* Heatmap Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence>
            {heatmapData.map((point, index) => (
              animatedPoints.includes(index) && (
                <motion.div
                  key={index}
                  className={`absolute w-8 h-8 rounded-full ${getHeatmapColor(point.intensity)} blur-sm`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    opacity: getHeatmapOpacity(point.intensity),
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: getHeatmapOpacity(point.intensity) }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )
            ))}
          </AnimatePresence>

          {/* Click indicators */}
          <AnimatePresence>
            {isPlaying && animatedPoints.map((pointIndex) => (
              <motion.div
                key={`click-${pointIndex}`}
                className="absolute w-4 h-4 border-2 border-white rounded-full bg-[#7CBECE]"
                style={{
                  left: `${heatmapData[pointIndex].x}%`,
                  top: `${heatmapData[pointIndex].y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gradient-to-r from-[#7CBECE]/10 to-[#A1D1D8]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">1,247</div>
          <div className="text-sm text-gray-600">Total Clicks</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-[#A1D1D8]/10 to-[#5A9BA5]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">68%</div>
          <div className="text-sm text-gray-600">Scroll Depth</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-[#5A9BA5]/10 to-[#7CBECE]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">3.2s</div>
          <div className="text-sm text-gray-600">Avg. Attention</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-[#7CBECE]/10 to-[#A1D1D8]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#7CBECE]">12.4%</div>
          <div className="text-sm text-gray-600">Conversion Rate</div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">High Activity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
          <span className="text-sm text-gray-600">Medium Activity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-600">Low Activity</span>
        </div>
      </div>
    </div>
  );
};

export default HeatmapDemo;
