"use client";
import React, { useState, useEffect, useRef, useId } from "react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import {
    Loader2,
    Mail,
    MessageSquare,
    Bot,
    Sparkles,
    Instagram,
    MessageCircle,
    Users,
    BarChart,
    Store,
    Megaphone,
    FileText,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TimelineAnimation } from "@/components/ui/timeline-animation";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const FeatureIcon = ({ feature, isFeatured }: { feature: string, isFeatured: boolean }) => {
    const defaultClass = cn('w-5 h-5 shrink-0 mt-0.5', isFeatured ? 'text-[var(--color-primary)]' : 'text-neutral-700');
    const lower = feature.toLowerCase();

    if (lower.includes("outreach")) {
        const hasWhatsapp = lower.includes("whatsapp");
        const hasEmail = lower.includes("email");

        if (hasWhatsapp && hasEmail) {
            return (
                <div className="flex -space-x-1.5 mt-0.5 shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] relative z-10 drop-shadow-sm bg-white rounded-full" />
                    <Mail className={cn("w-5 h-5 relative z-0 pl-1", defaultClass)} />
                </div>
            );
        }
        if (hasWhatsapp) return <WhatsAppIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#25D366]" />;
        if (hasEmail) return <Mail className={defaultClass} />;
        return <Megaphone className={defaultClass} />;
    }

    if (lower.includes("lead capture")) return <FileText className={defaultClass} />;
    if (lower.includes("email")) return <Mail className={defaultClass} />;
    if (lower.includes("sms")) return <MessageSquare className={defaultClass} />;
    if (lower.includes("ai content")) return <Sparkles className={defaultClass} />;
    if (lower.includes("ai follow-up")) return <Bot className={defaultClass} />;
    if (lower.includes("instagram comment")) return <MessageCircle className={defaultClass} />;
    if (lower.includes("instagram")) return <Instagram className={defaultClass} />;
    if (lower.includes("crm")) return <Users className={defaultClass} />;
    if (lower.includes("analytics")) return <BarChart className={defaultClass} />;
    if (lower.includes("store")) return <Store className={defaultClass} />;

    return <CheckCircle2 className={defaultClass} />;
};

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
    nigerianPrice?: number;
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

    // Detect user country to set default currency
    useEffect(() => {
        const detectCountry = async () => {
            try {
                const res = await fetch("https://get.geojs.io/v1/ip/country.json");
                if (res.ok) {
                    const data = await res.json();
                    if (data.country === "NG") {
                        setCurrency("NGN");
                    }
                }
            } catch (err) {
                console.error("Failed to detect country", err);
            }
        };
        detectCountry();
    }, []);

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
                    const monthlyPriceUSD = Number(plan.price || 0);
                    // Fallback to 1500 NGN/$ if nigerianPrice isn't set in the DB
                    const monthlyPriceNGN = Number(plan.nigerianPrice || (monthlyPriceUSD * 1500));

                    const monthlyPrice = currency === "NGN" ? monthlyPriceNGN : monthlyPriceUSD;

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
                                                <FeatureIcon feature={f} isFeatured={plan.featured} />
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
