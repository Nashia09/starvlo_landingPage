"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Loader2 } from "lucide-react";

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
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  // Currency state: "USD" or "NGN"
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
  const [loadingPricing, setLoadingPricing] = useState(false);

  const handlePlanSelect = (plan: PricePlan) => {
    setLoadingPlan(plan.name);

    // Construct URL with parameters
    const params = new URLSearchParams();
    params.set('redirectedFrom', 'pricing');
    params.set('plan', plan.name);
    params.set('interval', plan.interval);

    if (plan.amount) {
      params.set('amount', plan.amount.toString());
    }

    const redirectUrl = `https://app.starvlo.com/apps/pricing/modern?${params.toString()}`;

    // Redirect in new tab
    window.open(redirectUrl, '_blank');

    // Reset loading state after a short delay
    setTimeout(() => {
      setLoadingPlan(null);
    }, 1000);
  };

  useEffect(() => {
    const fetchPricing = async () => {
      setLoadingPricing(true);
      const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
      if (!base) {
        setLoadingPricing(false);
        return;
      }

      try {
        const res = await fetch(`${base}/api/v1/billing/plans/public?currency=${currency}`, { cache: "no-store" });
        if (!res.ok) {
          setLoadingPricing(false);
          return;
        }

        const body = await res.json();
        const raw = Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : [];

        const parsePlans = (rawPlans: unknown[], targetCurrency: string) => {
          return rawPlans.map((p) => {
            const plan = p as ApiPlan;
            const price = Number(plan.price || 0);

            const symbol = targetCurrency === "USD" ? "$" : "₦";
            const formattedPrice = targetCurrency === "NGN"
              ? new Intl.NumberFormat('en-NG').format(price)
              : price;

            const priceLabel = price === 0 ? "Free" : `${symbol}${formattedPrice} / month`;

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
              currency: targetCurrency,
              interval: "monthly" as const,
            };
          });
        };

        const monthlyPlans = parsePlans(raw, currency);

        const createYearly = (monthly: PricePlan[], targetCurrency: string) => {
          return monthly.map((pl) => {
            const discountedAmount = targetCurrency === "NGN"
              ? Math.round(pl.amount * 0.8) // No decimals for NGN
              : Math.round(pl.amount * 0.8 * 100) / 100;

            const symbol = targetCurrency === "USD" ? "$" : "₦";
            const formattedPrice = targetCurrency === "NGN"
              ? new Intl.NumberFormat('en-NG').format(discountedAmount)
              : discountedAmount;

            const priceLabel = discountedAmount === 0 ? "Free" : `${symbol}${formattedPrice} / month`;
            return { ...pl, amount: discountedAmount, priceLabel, interval: "yearly" as const };
          });
        };

        const yearlyPlans = createYearly(monthlyPlans, currency);

        setAllPlans([...monthlyPlans, ...yearlyPlans]);
      } catch (err) {
        console.error("Failed to fetch pricing", err);
      } finally {
        setLoadingPricing(false);
      }
    };

    fetchPricing();
  }, [currency]);

  useEffect(() => {
    // Filter by both interval AND selected currency
    const filtered = allPlans.filter((p) => p.interval === billingCycle && p.currency === currency);
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
  }, [allPlans, billingCycle, currency]);

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

        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4 sm:gap-8">
          {/* Billing Cycle Toggle */}
          <div className="flex rounded-full bg-[var(--color-primary-light)]/15 p-1 border border-[var(--color-primary)]/20">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${billingCycle === "monthly" ? "bg-[var(--color-primary)] text-white" : "text-[#5A6B7A]"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${billingCycle === "yearly" ? "bg-[var(--color-primary)] text-white" : "text-[#5A6B7A]"
                }`}
            >
              Yearly
              <span className="ml-2 bg-[var(--color-primary-dark)] text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>

          {/* Simple Currency Tab Toggle */}
          <div className="flex rounded-full bg-gray-100 p-1 border border-gray-200">
            <button
              onClick={() => setCurrency("USD")}
              disabled={loadingPricing}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${currency === "USD" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("NGN")}
              disabled={loadingPricing}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${currency === "NGN" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                }`}
            >
              NGN
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

                <button
                  onClick={() => handlePlanSelect(plan)}
                  disabled={!!loadingPlan}
                  className={cn(
                    "w-full py-3 px-6 font-medium rounded-lg inline-flex items-center justify-center text-center transition-all",
                    plan.popular
                      ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white"
                      : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
                    loadingPlan === plan.name ? "opacity-80 cursor-wait" : ""
                  )}
                >
                  {loadingPlan === plan.name ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Redirecting...
                    </>
                  ) : (
                    "Get Started"
                  )}
                </button>
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
