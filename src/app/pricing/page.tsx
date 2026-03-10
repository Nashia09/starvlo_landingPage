"use client";

import React from "react";
import Footer from "@/components/ui/footer";
import GrowthBusinessPricing from "@/components/ui/growth-business-pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#F7FEFF]">
      <div className="pt-32 pb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F18] mb-4 text-center tracking-tight">
          Pricing
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto font-medium">
          Try all the features with free credits. No credit card required.
        </p>
      </div>

      <div className="mb-20">
        <GrowthBusinessPricing />
      </div>

      <Footer />
    </main>
  );
}
