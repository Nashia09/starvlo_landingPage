"use client";

import FeaturesSection from "../features/features-section";
import PricingFeature from "../features/pricing-feature";



export default function FeatureCards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Tools for Lead Generation
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our comprehensive suite of features designed to help you capture and convert leads.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <FeaturesSection />
          <PricingFeature />
          {/* <FeatureCardScroll  /> */}
          {/* <FeatureCard title="AI-Powered Website Builder" description="Create professional websites in minutes without any coding skills. Our AI generates tailored websites based on your business needs." icon="🤖" /> */}
        </div>
      </div>
    </section>
  );
}
