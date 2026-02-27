"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, Mail, MessageSquare, Zap, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the stages of the lead process
const STAGES = [
  { id: "traffic", label: "Traffic", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { id: "capture", label: "Capture", icon: Zap, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  { id: "nurture", label: "Nurture", icon: Mail, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { id: "close", label: "Close", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
];

const PARALLEL_TRAFFIC = [MessageSquare, Users, Zap];

export function LeadProcessAnimation({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [activeStage, setActiveStage] = useState(0);

  // Cyclical animation logic
  useEffect(() => {
    if (isInView) {
      let stage = 0;
      const interval = setInterval(() => {
        stage = (stage + 1) % STAGES.length;
        setActiveStage(stage);
      }, 2000); // Change stage every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-2xl mx-auto aspect-[4/3] md:aspect-video flex items-center justify-center p-4 sm:p-8",
        className
      )}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
           animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[60%] h-[60%] rounded-full bg-[var(--color-primary)]/20 blur-[80px]"
        />
      </div>

      <div className="relative w-full h-full border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm p-4 sm:p-6 shadow-2xl overflow-hidden glassmorphism">
        
        {/* Subtle Grid Pattern inside the glass box */}
         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

        {/* Central visualization area */}
        <div className="relative w-full h-full flex flex-col justify-between z-10">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
             <div className="flex flex-col">
               <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">Live Pipeline</span>
               <span className="text-white font-medium text-lg">Lead Conversion Engine</span>
             </div>
             
             <div className="flex gap-1.5 items-center bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-white pt-0.5">Active</span>
             </div>
          </div>

          {/* Core Animation Area */}
          <div className="flex-1 relative flex items-center justify-center py-8">
            
            {/* The animated path connecting stages */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              {/* Complex curved path from Traffic -> Capture -> Nurture -> Close */}
              <motion.path
                d="M 10% 50% Q 25% 20% 50% 50% T 90% 50%"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="path-base"
              />
              
              {/* Highlight path tracing the active stage progress */}
              <motion.path
                d="M 10% 50% Q 25% 20% 50% 50% T 90% 50%"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (activeStage + 1) / STAGES.length }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="path-highlight drop-shadow-[0_0_8px_var(--color-primary)]"
              />
            </svg>


            {/* Nodes / Stages Layout */}
             <div className="absolute w-full flex justify-between items-center px-4 sm:px-8">
                {STAGES.map((stage, i) => {
                  const Icon = stage.icon;
                  const isActive = i <= activeStage;
                  const isCurrent = i === activeStage;

                  return (
                    <div key={stage.id} className="relative flex flex-col items-center justify-center group z-10">
                       
                       {/* Node Ring Animation */}
                       {isCurrent && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                            className={cn("absolute inset-0 rounded-full", stage.bg, "border", stage.border)}
                          />
                       )}

                       {/* Node Icon */}
                       <motion.div 
                          animate={{
                            scale: isCurrent ? 1.1 : 1,
                            backgroundColor: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)",
                            borderColor: isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)",
                            color: isActive ? "#171717" : "rgba(255,255,255,0.5)"
                          }}
                          className={cn(
                            "w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border flex items-center justify-center relative z-10 shadow-lg transition-colors duration-500",
                          )}
                       >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                          
                          {/* Success checkmark pop-in for completed stages */}
                          {isActive && !isCurrent && (
                             <motion.div
                               initial={{ scale: 0, opacity: 0 }}
                               animate={{ scale: 1, opacity: 1 }}
                               className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-emerald-500 text-white rounded-full p-0.5"
                             >
                               <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                             </motion.div>
                          )}
                       </motion.div>

                       {/* Label */}
                       <motion.span 
                         animate={{
                           opacity: isActive ? 1 : 0.5,
                           y: isCurrent ? 2 : 0,
                           color: isCurrent ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)"
                         }}
                         className="mt-3 text-xs sm:text-sm font-medium tracking-wide"
                       >
                          {stage.label}
                       </motion.span>
                    </div>
                  );
                })}
             </div>


             {/* Floating Particles/Elements showing data flow */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
               {/* Traffic -> Capture */}
               {activeStage === 0 && Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={`particle-0-${i}`}
                    initial={{ x: "-20%", y: "40%", opacity: 0, scale: 0.5 }}
                    animate={{ 
                      x: ["10%", "25%", "40%"], 
                      y: ["50%", "25%", "50%"],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                    className="absolute w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md"
                    style={{ left: 0, top: 0 }}
                  >
                     <Users className="w-3 h-3 text-white" />
                  </motion.div>
               ))}

               {/* Capture -> Nurture */}
               {activeStage === 1 && (
                  <motion.div
                    initial={{ x: "40%", y: "50%", opacity: 0, scale: 0.5 }}
                    animate={{ 
                      x: ["40%", "55%", "70%"], 
                      y: ["50%", "70%", "50%"],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center backdrop-blur-md left-0 top-0"
                  >
                     <Mail className="w-4 h-4 text-emerald-400" />
                  </motion.div>
               )}

               {/* Nurture -> Close */}
               {activeStage === 2 && (
                  <motion.div
                    initial={{ x: "70%", y: "50%", opacity: 0, scale: 0.5 }}
                    animate={{ 
                      x: ["70%", "85%", "95%"], 
                      y: ["50%", "30%", "50%"],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-10 h-10 rounded-full bg-amber-500/30 border border-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)] left-0 top-0 z-20"
                  >
                     <DollarSign className="w-5 h-5 text-amber-300" />
                  </motion.div>
               )}
               
               {/* Celebrate Close */}
               {activeStage === 3 && (
                 <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute right-[5%] top-1/2 -mt-10 -mr-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"
                 />
               )}
             </div>

          </div>

          {/* Footer Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/10 mt-auto">
             <div className="flex flex-col">
               <span className="text-white/50 text-[10px] sm:text-xs uppercase mb-1">Conversion Rate</span>
               <div className="flex items-baseline gap-1">
                 <span className="text-white font-bold text-lg sm:text-2xl">+24</span>
                 <span className="text-emerald-400 font-medium text-xs sm:text-sm">%</span>
               </div>
             </div>
             <div className="flex flex-col border-l border-white/10 pl-2 sm:pl-4">
               <span className="text-white/50 text-[10px] sm:text-xs uppercase mb-1">Avg Close Time</span>
               <div className="flex items-baseline gap-1">
                 <span className="text-white font-bold text-lg sm:text-2xl">2.4</span>
                 <span className="text-white/80 font-medium text-xs sm:text-sm">days</span>
               </div>
             </div>
             <div className="flex flex-col border-l border-white/10 pl-2 sm:pl-4">
               <span className="text-white/50 text-[10px] sm:text-xs uppercase mb-1">Automation</span>
               <div className="flex items-baseline gap-1">
                 <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                 <span className="text-emerald-400 font-medium text-xs sm:text-sm">%</span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
