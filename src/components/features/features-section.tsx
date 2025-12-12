"use client";

import React from "react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#2E91A5] to-[#237C8E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Build Faster, Launch Sooner</h3>
          <p className="mt-4 text-white/90 text-lg">
            No coding needed. 1‑tap checkout. Integrates with your favorite apps.
          </p>
          <button className="mt-10 inline-flex items-center rounded-xl px-8 py-4 font-semibold bg-white text-[#237C8E] shadow-lg">
            Start My Trial
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
            <div className="text-sm font-medium text-white/80">Step 1</div>
            <h4 className="mt-2 text-xl font-semibold text-white">Create your site</h4>
            <p className="mt-2 text-white/90">Pick a template and follow guided steps.</p>
            <div className="mt-4 relative h-40 rounded-xl overflow-hidden bg-white/20">
              <Image
                src="/assets/mobiles/img.png"
                alt="Create your site screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
            <div className="text-sm font-medium text-white/80">Step 2</div>
            <h4 className="mt-2 text-xl font-semibold text-white">Enable 1‑tap checkout</h4>
            <p className="mt-2 text-white/90">Turn on Apple/Google Pay to boost conversions.</p>
            <div className="mt-4 relative h-40 rounded-xl overflow-hidden bg-white/20">
              <Image
                src="/assets/mobiles/img1.png"
                alt="Checkout setup screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
            <div className="text-sm font-medium text-white/80">Step 3</div>
            <h4 className="mt-2 text-xl font-semibold text-white">Connect your tools</h4>
            <p className="mt-2 text-white/90">Plug in CRM, payments, and analytics.</p>
            <div className="mt-4 relative h-40 rounded-xl overflow-hidden bg-white/20">
              <Image
                src="/assets/mobiles/img3.png"
                alt="Integrations screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
