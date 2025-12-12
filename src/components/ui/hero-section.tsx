"use client";


import React, { useRef } from "react";
import { cn } from "@/lib/utils";

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
              className="inline-block mr-2 mb-2 font-primary text-[#7CBECE]"
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
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="w-full mb-16 bg-gradient-to-br from-[#2E91A5] to-[#237C8E]" ref={containerRef}>
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
                    text="Launch your website in hours, not days"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter hero-heading text-left mb-2 sm:mb-4"
                  />

                  <p
                    className="text-lg sm:text-xl md:text-2xl text-white/90 font-secondary mb-4 sm:mb-6"
                  >
                    Don’t have a website? Generate one from our platform and start capturing leads immediately.
                  </p>

                  <form
                    action="/website-builder"
                    method="get"
                    className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-8"
                  >
                    <div className="flex w-full sm:w-[18rem] items-center rounded-lg border border-[#7CBECE] bg-white shadow-sm">
                      <span className="px-3 py-2.5 text-sm sm:text-base text-gray-700 whitespace-nowrap">starvlo/</span>
                      <input
                        type="text"
                        name="handle"
                        aria-label="Your Starvlo handle"
                        placeholder="yourname"
                        pattern="[a-zA-Z0-9-]+"
                        className="flex-1 px-3 py-2.5 text-sm sm:text-base outline-none placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#7CBECE] text-white hover:bg-[#5A9BA5] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg button-text text-sm sm:text-base"
                    >
                      Get started for free
                    </button>
                  </form>
                </div>

                <div
                  className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center"
                >
                  <div
                    className="relative w-full max-w-[650px] aspect-[4/5]"
                  >
                    <video
                      ref={videoRef}
                      src="/assets/Scene.webm"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
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
