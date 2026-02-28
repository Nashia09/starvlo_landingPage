"use client";
import React from "react";
import Link from "next/link";
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

      {/* Modern SaaS Pricing Component with Built-In Data Fetching */}
      <div className="mb-20">
        <GrowthBusinessPricing />
      </div>

      {/* Pricing-Specific FAQs */}
      <div className="container mx-auto px-4 pb-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FAQItem
              question="How does Starvlo capture leads?"
              answer="You build your store and share your link‑in‑bio. Buyers purchase via 1‑Tap Checkout or submit simple forms. Connect Instagram to enable Auto DM and comment automations that turn engagement into sales—no IP tracking."
            />
            <FAQItem
              question="Can I upgrade or downgrade later?"
              answer="Yes. Changes are prorated based on the remaining days in your cycle."
            />
            <FAQItem
              question="Do you offer a free trial?"
              answer="No. We don’t offer free trials for billable plans."
            />
            <FAQItem
              question="What if I exceed my limits?"
              answer="You continue getting data, but some features may require upgrading."
            />
            <FAQItem
              question="Will I lose access immediately if I cancel?"
              answer="No. Access downgrades at the end of the billing period."
            />
            <FAQItem
              question="Can I invite my team?"
              answer="Yes. Add teammates based on your plan’s allowances."
            />
          </div>
          <div className="mt-16">
            <Link href="/contact">
              <button className="rounded-xl border border-[var(--color-primary)] bg-[var(--color-primary)] px-10 py-4 font-bold text-white shadow-xl hover:shadow-[0_0_20px_rgba(20,184,129,0.3)] hover:-translate-y-1 transition-all duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 text-left transition-all hover:shadow-md hover:border-[var(--color-primary)]/40">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{question}</h3>
      <p className="text-gray-600 font-medium">{answer}</p>
    </div>
  );
}
