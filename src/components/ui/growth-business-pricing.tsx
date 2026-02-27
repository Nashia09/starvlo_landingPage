"use client";
import React, { useState, useEffect, useRef, useId } from "react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TimelineAnimation } from "@/components/ui/timeline-animation";

type PricePlan = {
    name: string;
    description: string;
    monthly: number;
    yearly: number;
    features: string[];
    variant: "outline" | "secondary";
    featured: boolean;
    currency: string;
    intervalAmountMap: { monthly: number; yearly: number };
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

export default function GrowthBusinessPricing() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
    const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
    const [plans, setPlans] = useState<PricePlan[]>([]);
    const [loadingPricing, setLoadingPricing] = useState(false);
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

    const id = useId();
    const timelineRef = useRef<HTMLDivElement>(null);

    const handlePlanSelect = (plan: PricePlan) => {
        setLoadingPlan(plan.name);

        // Construct URL with parameters
        const params = new URLSearchParams();
        params.set("redirectedFrom", "pricing");
        params.set("plan", plan.name);
        params.set("interval", billing);

        const amount = plan.intervalAmountMap[billing];
        if (amount !== undefined) {
            params.set("amount", amount.toString());
        }

        const redirectUrl = `https://app.starvlo.com/apps/pricing/modern?${params.toString()}`;

        // Redirect in new tab
        window.open(redirectUrl, "_blank");

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

                const parsedPlans: PricePlan[] = raw.map((p: unknown) => {
                    const plan = p as ApiPlan;
                    const monthlyPrice = Number(plan.price || 0);

                    let yearlyDiscountedPrice = 0;
                    if (currency === "NGN") {
                        yearlyDiscountedPrice = Math.round(monthlyPrice * 0.8);
                    } else {
                        yearlyDiscountedPrice = Math.round(monthlyPrice * 0.8 * 100) / 100;
                    }

                    const featuresObj = plan.features || {};
                    const features: string[] = [];
                    if (featuresObj.leadCapturePages) features.push("Lead capture pages");
                    if (featuresObj.emailAutomation) features.push("Email automation");
                    if (featuresObj.smsAutomation) features.push("SMS automation");
                    if (featuresObj.aiFollowUp) features.push("AI follow-up");
                    if (featuresObj.aiContentAssistant) features.push("AI content assistant");
                    if (featuresObj.instagramAutoDM) features.push("Instagram auto DM");
                    if (featuresObj.instagramCommentAutomation) features.push("Instagram comment automation");
                    if (featuresObj.crm) features.push(`CRM: ${String(featuresObj.crm)}`);
                    if (featuresObj.analytics) features.push(`Analytics: ${String(featuresObj.analytics)}`);
                    if (featuresObj.store) features.push(`Store: ${String(featuresObj.store)}`);
                    if (featuresObj.outreachChannels) features.push(`Outreach: ${String(featuresObj.outreachChannels).replace(/_/g, " ")}`);

                    const isFeatured = Boolean(plan.isPopular || false);

                    return {
                        name: String(plan.name || plan.slug || ""),
                        description: String(plan.description || "Ideal for growing your business"),
                        monthly: monthlyPrice,
                        yearly: yearlyDiscountedPrice,
                        features,
                        variant: isFeatured ? "secondary" : "outline",
                        featured: isFeatured,
                        currency: currency,
                        intervalAmountMap: {
                            monthly: monthlyPrice,
                            yearly: yearlyDiscountedPrice
                        }
                    };
                });

                // Make sure featured plan is in the middle if there are 3
                const featuredIndex = parsedPlans.findIndex(p => p.featured);
                if (featuredIndex !== -1 && parsedPlans.length > 2) {
                    const featuredPlan = parsedPlans.splice(featuredIndex, 1)[0];
                    const middle = Math.floor(parsedPlans.length / 2);
                    parsedPlans.splice(middle, 0, featuredPlan);
                }

                setPlans(parsedPlans);
            } catch (err) {
                console.error("Failed to fetch pricing", err);
            } finally {
                setLoadingPricing(false);
            }
        };

        fetchPricing();
    }, [currency]);

    return (
        <section ref={timelineRef} className="py-24 bg-slate-100 font-dmSans text-black min-h-screen">
            <div className="max-w-6xl mx-auto md:px-0 px-6 text-center">
                <TimelineAnimation
                    animationNum={1}
                    timelineRef={timelineRef}
                    as="h2"
                    className="text-4xl font-semibold tracking-tight mb-2 text-balance"
                >
                    Plans that grow your business.
                </TimelineAnimation>
                <TimelineAnimation
                    animationNum={2}
                    timelineRef={timelineRef}
                    as="p"
                    className="text-neutral-500 mb-8 text-pretty max-w-2xl mx-auto"
                >
                    Unlock potential with transparent plans that pay for themselves as conversions increase.
                </TimelineAnimation>

                <TimelineAnimation
                    animationNum={3}
                    timelineRef={timelineRef}
                    className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-4 sm:gap-6"
                >
                    {/* Simple Currency Tab Toggle */}
                    <div className="flex rounded-full bg-white p-1 border border-gray-200 shadow-sm w-fit mx-auto sm:mx-0">
                        <button
                            onClick={() => setCurrency("USD")}
                            disabled={loadingPricing}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${currency === "USD" ? "bg-slate-100 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            USD
                        </button>
                        <button
                            onClick={() => setCurrency("NGN")}
                            disabled={loadingPricing}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${currency === "NGN" ? "bg-slate-100 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            NGN
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-4 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/40 font-semibold w-fit px-4 py-2.5 mx-auto sm:mx-0 rounded-full">
                        <span className={cn('text-sm transition-colors', billing === 'monthly' ? 'text-black' : 'text-neutral-500')}>
                            Monthly
                        </span>

                        {/* Custom Switch Implementation without relying on shadcn */}
                        <button
                            id={id}
                            role="switch"
                            aria-checked={billing === 'yearly'}
                            onClick={() => setBilling(billing === 'yearly' ? 'monthly' : 'yearly')}
                            className={cn(
                                "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)]/20 disabled:cursor-not-allowed disabled:opacity-50",
                                billing === 'yearly' ? "bg-[var(--color-primary)]" : "bg-neutral-300"
                            )}
                        >
                            <span
                                className={cn(
                                    "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
                                    billing === 'yearly' ? "translate-x-5" : "translate-x-0"
                                )}
                            />
                        </button>

                        <div className="flex items-center">
                            <span className={cn('text-sm transition-colors', billing === 'yearly' ? 'text-black' : 'text-neutral-500')}>
                                Yearly
                            </span>
                            <span className={cn('ml-2 px-2 py-0.5 text-xs font-bold rounded-full uppercase', billing === 'yearly' ? 'text-[var(--color-primary-dark)] bg-[var(--color-primary)]/20' : 'text-neutral-500')}>
                                (Save 20%)
                            </span>
                        </div>
                    </div>
                </TimelineAnimation>

                <TimelineAnimation animationNum={4} timelineRef={timelineRef}>
                    {loadingPricing && plans.length === 0 ? (
                        <div className="min-h-[400px] flex items-center justify-center flex-col gap-4">
                            <Loader2 className="w-8 h-8 text-[var(--color-primary)] animate-spin" />
                            <p className="text-gray-500 font-medium">Loading pricing data...</p>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-6 pt-6">
                            {plans.map((plan, index) => (
                                <TimelineAnimation
                                    key={plan.name}
                                    animationNum={5 + index}
                                    timelineRef={timelineRef}
                                    className={cn(
                                        'rounded-xl p-6 flex flex-col border transition-all text-left relative',
                                        plan.featured
                                            ? 'bg-neutral-950 text-white shadow-2xl z-10 border-transparent scale-105'
                                            : 'bg-white border-neutral-200'
                                    )}
                                >
                                    {plan.featured && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <h4 className="font-bold text-xl mb-1">{plan.name}</h4>
                                        <p className={cn('text-sm', plan.featured ? 'text-neutral-400' : 'text-neutral-500')}>
                                            {plan.description}
                                        </p>
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-6 text-left">
                                        <span className={cn('text-2xl font-medium', plan.featured ? 'text-[var(--color-primary-light)]' : 'text-neutral-400')}>
                                            {currency === "USD" ? "$" : "₦"}
                                        </span>
                                        <span className={cn('text-5xl font-bold font-mono tracking-tight', plan.featured ? 'text-white' : 'text-neutral-900')}>
                                            <NumberFlow
                                                value={billing === 'monthly' ? plan.monthly : plan.yearly}
                                                format={{ style: "decimal", maximumFractionDigits: currency === "NGN" ? 0 : 2 }}
                                            />
                                        </span>
                                        <span className="text-neutral-400 text-sm font-medium ml-1">
                                            / {billing === 'monthly' ? 'mo' : 'mo billed annually'}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handlePlanSelect(plan)}
                                        disabled={!!loadingPlan}
                                        className={cn(
                                            'w-full mb-6 rounded-lg h-14 font-semibold text-base transition-all flex items-center justify-center',
                                            plan.featured
                                                ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] border border-[var(--color-primary-dark)] shadow-[0_0_20px_rgba(35,124,142,0.3)]'
                                                : 'bg-white text-neutral-900 border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50',
                                            loadingPlan === plan.name ? "opacity-80 cursor-wait" : ""
                                        )}
                                    >
                                        {loadingPlan === plan.name ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Redirecting...
                                            </>
                                        ) : 'Select Plan'}
                                    </button>

                                    <div className={cn('space-y-4 p-5 text-left border rounded-xl flex-grow',
                                        plan.featured ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-100 bg-neutral-50'
                                    )}>
                                        {plan.features.length === 0 && (
                                            <p className="text-sm text-neutral-500 italic">No specific features listed for this tier.</p>
                                        )}
                                        {plan.features.map((f, i) => (
                                            <div key={i} className={cn('flex items-start gap-3 text-sm font-medium leading-tight', plan.featured ? 'text-neutral-300' : 'text-neutral-600')}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    className={cn('w-5 h-5 shrink-0 mt-0.5', plan.featured ? 'fill-[var(--color-primary)] stroke-[var(--color-primary)]' : 'fill-black stroke-black')}
                                                >
                                                    <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" />
                                                    <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" stroke={plan.featured ? '#000000' : '#ffffff'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </TimelineAnimation>
                            ))}
                        </div>
                    )}
                </TimelineAnimation>
            </div>
        </section>
    );
}
