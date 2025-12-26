"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
type PricePlan = {
  name: string;
  priceLabel: string;
  description: string;
  details: string[];
  popular: boolean;
  amount: number;
  currency: string;
  interval: "monthly" | "yearly";
};

type ApiPlan = {
  name?: string;
  slug?: string;
  description?: string;
  billingInterval?: string;
  price?: number;
  currency?: string;
  features?: Record<string, unknown>;
  isPopular?: boolean;
};

export default function PricingTeaser() {
  const [plans, setPlans] = useState<PricePlan[]>([]);
  const [allPlans, setAllPlans] = useState<PricePlan[]>([]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  useEffect(() => {
    const fetchPricing = async () => {
      const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
      if (!base) return;
      const url = `${base}/api/v1/billing/plans/public`;
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return;
        const body = await res.json();
        const raw = (Array.isArray(body) ? (body as unknown[]) : Array.isArray(body?.data) ? (body.data as unknown[]) : []);
        const monthly: PricePlan[] = raw.map((p) => {
          const plan = p as ApiPlan;
          const currency = String(plan.currency || "USD");
          const price = Number(plan.price || 0);
          const symbol = currency.toUpperCase() === "USD" ? "$" : currency.toUpperCase();
          const priceLabel = price === 0 ? "Free" : `${symbol}${price} / month`;
          const featuresObj = plan.features || {};
          const details: string[] = [];
          if (featuresObj.leadCapturePages) details.push("Lead capture pages");
          if (featuresObj.emailAutomation) details.push("Email automation");
          if (featuresObj.smsAutomation) details.push("SMS automation");
          if (featuresObj.aiFollowUp) details.push("AI follow-up");
          if (featuresObj.aiContentAssistant) details.push("AI content assistant");
          if (featuresObj.instagramAutoDM) details.push("Instagram auto DM");
          if (featuresObj.instagramCommentAutomation) details.push("Instagram comment automation");
          if (featuresObj.crm) details.push(`CRM: ${String(featuresObj.crm)}`);
          if (featuresObj.analytics) details.push(`Analytics: ${String(featuresObj.analytics)}`);
          if (featuresObj.store) details.push(`Store: ${String(featuresObj.store)}`);
          if (featuresObj.outreachChannels) details.push(`Outreach: ${String(featuresObj.outreachChannels).replace(/_/g, " ")}`);
          return {
            name: String(plan.name || plan.slug || ""),
            priceLabel,
            description: String(plan.description || ""),
            details,
            popular: Boolean(plan.isPopular || false),
            amount: price,
            currency,
            interval: "monthly",
          };
        });
        const yearly: PricePlan[] = monthly.map((pl) => {
          const discountedAmount = Math.round(pl.amount * 0.8 * 100) / 100;
          const symbol = pl.currency.toUpperCase() === "USD" ? "$" : pl.currency.toUpperCase();
          const priceLabel = discountedAmount === 0 ? "Free" : `${symbol}${discountedAmount} / month`;
          return { ...pl, amount: discountedAmount, priceLabel, interval: "yearly" };
        });
        setAllPlans([...monthly, ...yearly]);
      } catch {}
    };
    fetchPricing();
  }, []);

  useEffect(() => {
    const filtered = allPlans.filter((p) => p.interval === billingCycle);
    const parsed = [...filtered];
    const idx = parsed.findIndex((pl) => pl.popular);
    if (idx !== -1) {
      const next = [...parsed];
      const [pop] = next.splice(idx, 1);
      const mid = Math.floor(next.length / 2);
      next.splice(mid, 0, pop);
      next.forEach((pl) => (pl.popular = false));
      next[mid].popular = true;
      setPlans(next);
    } else {
      setPlans(parsed);
    }
  }, [allPlans, billingCycle]);
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[var(--color-primary)]/10 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start Free, Scale as You Grow
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mx-auto max-w-[700px] md:text-lg">
            Transparent plans that pay for themselves as conversions increase.
          </p>
          
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="flex rounded-full bg-[var(--color-primary-light)]/15 p-1 border border-[var(--color-primary)]/20">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                billingCycle === "monthly" ? "bg-[var(--color-primary)] text-white" : "text-[#5A6B7A]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
                billingCycle === "yearly" ? "bg-[var(--color-primary)] text-white" : "text-[#5A6B7A]"
              }`}
            >
              Yearly
              <span className="ml-2 bg-[var(--color-primary-dark)] text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-xl border bg-white dark:bg-gray-900 p-8",
                plan.popular
                  ? "border-[var(--color-primary)] dark:border-[var(--color-primary)] shadow-lg"
                  : "border-gray-200 dark:border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="inline-block rounded-full bg-white px-3 py-1 text-sm text-[var(--color-primary)] shadow-sm ring-1 ring-[var(--color-primary)]/10">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.priceLabel}</div>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
                
                <a
                  href="https://app.starvlo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-3 px-6 font-medium rounded-lg inline-block text-center",
                    plan.popular
                      ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white"
                      : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                  )}
                >
                  Get Started
                </a>
              </div>
              
              <div className="mt-8">
                <div className="text-sm font-medium mb-4">Details:</div>
                <ul className="space-y-3">
                  {plan.details.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={cn(
                          "h-5 w-5 mr-2",
                          plan.popular
                            ? "text-[var(--color-primary)]"
                            : "text-gray-400 dark:text-gray-500"
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path
                          fill="white"
                          d="M7 13l3 3 7-7-1.4-1.4L10 13.2 8.4 11.6z"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/pricing" 
            className="text-[var(--color-primary)] dark:text-[var(--color-primary)] font-medium hover:underline"
          >
            View all pricing details
          </Link>
        </div>
      </div>
    </section>
  );
}
