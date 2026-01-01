"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export default function FeaturesSection() {
  const steps: Step[] = [
    {
      id: "store",
      label: "Step 1",
      title: "Build your creator store",
      description: "Create offers for digital products, services, and memberships—no coding required.",
    },
    {
      id: "checkout",
      label: "Step 2",
      title: "Enable 1‑Tap Checkout",
      description: "Frictionless mobile checkout with instant delivery to maximize conversions.",
    },
    {
      id: "instagram",
      label: "Step 3",
      title: "Connect Instagram",
      description: "Automate DMs and comment replies to turn engagement into sales.",
    },
  ];

  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => {
      const el = scrollRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const totalScrollable = rect.height - viewport;
      if (totalScrollable <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const perStep = totalScrollable / steps.length;
      const index = Math.min(Math.floor(scrolled / perStep), steps.length - 1);
      setActive(index);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [steps.length]);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Build Faster, Launch Sooner</h3>
          <p className="mt-4 text-gray-600 text-lg">No coding needed. 1‑Tap Checkout. Integrates with Instagram.</p>
          <a
            href="https://app.starvlo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-xl px-8 py-4 font-semibold bg-[var(--color-primary)] text-white shadow-lg hover:bg-[var(--color-primary-light)]"
          >
            Get Started
          </a>
        </div>

        <div ref={scrollRef} className="relative" style={{ height: `${steps.length * 120}vh` }}>
          <div className="sticky top-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div
                    key={s.id}
                    className={`w-full text-left rounded-2xl border transition p-6 ${active === i ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-gray-200 bg-gray-50"}`}
                  >
                    <div className="text-sm font-medium text-gray-500">{s.label}</div>
                    <h4 className="mt-2 text-xl font-semibold text-gray-900">{s.title}</h4>
                    <p className="mt-2 text-gray-600">{s.description}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="rounded-3xl border border-gray-200 shadow-xl overflow-hidden bg-white h-[70vh] flex items-center justify-center">
                  {active === 0 && <StorePreview />}
                  {active === 1 && <CheckoutPreview />}
                  {active === 2 && <InstagramPreview />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorePreview() {
  return (
    <div className="w-full h-full grid grid-cols-5 gap-6 p-8">
      <div className="col-span-2 flex flex-col gap-4">
        <div className="rounded-xl border border-gray-200 p-4">
          <div className="h-6 w-28 bg-gray-200 rounded" />
          <div className="mt-3 h-4 w-40 bg-gray-100 rounded" />
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="mt-3 h-4 w-36 bg-gray-100 rounded" />
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <div className="h-6 w-20 bg-gray-200 rounded" />
          <div className="mt-3 h-4 w-32 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="col-span-3 rounded-2xl border border-gray-200 p-6">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="mt-4 h-40 w-full bg-gray-100 rounded" />
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="h-24 bg-gray-100 rounded" />
          <div className="h-24 bg-gray-100 rounded" />
          <div className="h-24 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}

function CheckoutPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[360px] rounded-2xl border border-gray-200 p-6">
        <div className="h-8 w-40 bg-gray-200 rounded mx-auto" />
        <div className="mt-6 h-24 w-full bg-gray-100 rounded" />
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
        <div className="mt-6 h-12 bg-[var(--color-primary)] rounded text-white flex items-center justify-center">Pay now</div>
      </div>
    </div>
  );
}

function InstagramPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[420px] rounded-2xl border border-gray-200 p-6">
        <div className="h-8 w-32 bg-gray-200 rounded" />
        <div className="mt-4 space-y-3">
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-200 rounded ml-10" />
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-200 rounded ml-16" />
        </div>
        <div className="mt-6 h-12 bg-gray-100 rounded" />
      </div>
    </div>
  );
}
