"use client";


import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import sceneAnimation from "../../../public/assets/Scene.json";

interface HeroTextProps {
  text: string;
  className?: string;
}

const HeroText = ({ 
  text,
  className
}: HeroTextProps) => {
  const words = text.split(" ");
  


  return (
    <div
      className={cn("text-center", className)}
    >
      {words.map((word, index) => {
        // Special case for "Instantly" word
        if (word === "Instantly.") {
          return (
            <span
              key={index}
              className="inline-block mr-2 mb-2 font-primary text-[var(--color-primary)]"
            >
              Instantly.
            </span>
          );
        }
        
        return (
          <span
            key={index}
            className="inline-block mr-2 mb-2 font-primary text-white"
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};





export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneAnimationData: Record<string, unknown> = sceneAnimation as Record<string, unknown>;

  return (
    <section className="w-full mb-16 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)]" ref={containerRef}>
      <div className="w-full">
        <div className="relative w-full">
          

          {/* Hero content with enhanced scroll animations */}
          <div className="min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center py-8 sm:py-16 relative">
            
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div
                  className="flex flex-col items-start space-y-4 sm:space-y-8"
                >
                  <HeroText
                    text="Close More Deals — Automatically"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter hero-heading text-left mb-2 sm:mb-4"
                  />

                  <p
                    className="text-lg sm:text-xl md:text-2xl text-white/90 font-secondary mb-4 sm:mb-6"
                  >
                    Starvlo captures, qualifies, and follows up with your leads using AI, so you never miss a sale.
                  </p>

                  <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-8">
                    <Link
                      href="/#pricing"
                      className="w-full sm:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl button-text text-base sm:text-lg shadow-lg"
                    >
                      <span className="inline-flex items-center gap-2">
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Link>
                    <div className="text-sm text-white/80 mt-2">No credit card required</div>
                  </div>
                </div>

                <div
                  className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center"
                >
                  <div
                    className="relative w-full max-w-[650px] aspect-[4/5]"
                  >
                    <Lottie
                      animationData={sceneAnimationData}
                      loop
                      autoplay
                      className="w-full h-full object-cover"
                    />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
