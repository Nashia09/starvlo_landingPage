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
    XCircle,
    MinusCircle,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TimelineAnimation } from "@/components/ui/timeline-animation";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const MASTER_FEATURES = [
    { id: 'leadCapturePages', label: 'Lead capture pages' },
    { id: 'emailAutomation', label: 'Email automation' },
    { id: 'smsAutomation', label: 'SMS automation' },
    { id: 'whatsappAutomation', label: 'WhatsApp automation' },
    { id: 'aiFollowUp', label: 'AI follow-up' },
    { id: 'aiContentAssistant', label: 'AI content assistant' },
    { id: 'instagramAutoDM', label: 'Instagram auto DM' },
    { id: 'instagramCommentAutomation', label: 'Instagram comment automation' },
    { id: 'aiBookingAssistant', label: 'AI booking assistant', isString: true },
    { id: 'calendarBooking', label: 'Calendar booking' },
    { id: 'prioritySupport', label: 'Priority support' },
    { id: 'allowCustomBranding', label: 'Custom branding' },
    { id: 'crm', label: 'CRM', isString: true },
    { id: 'analytics', label: 'Analytics', isString: true },
    { id: 'store', label: 'Store', isString: true },
    { id: 'outreachChannels', label: 'Outreach channels', isString: true },
];

const FeatureIcon = ({ feature, isFeatured, isMissing }: { feature: string, isFeatured: boolean, isMissing?: boolean }) => {
    if (isMissing) {
        return <MinusCircle className={cn('w-5 h-5 shrink-0 mt-0.5 text-neutral-400 opacity-60')} />;
    }

    const lower = feature.toLowerCase();

    // Categorical Colors Configuration
    const colors: Record<string, string> = {
        outreach: 'text-orange-500',
        whatsapp: 'text-[#25D366]',
        email: 'text-blue-500',
        'lead capture': 'text-cyan-500',
        sms: 'text-emerald-500',
        'ai content': 'text-violet-500',
        'ai follow-up': 'text-purple-500',
        'instagram comment': 'text-pink-500',
        instagram: 'text-rose-500',
        crm: 'text-amber-500',
        analytics: 'text-indigo-500',
        store: 'text-yellow-500',
    };

    let iconColor = isFeatured ? 'text-[var(--color-primary)]' : 'text-neutral-700';

    // Match color by substring
    for (const key in colors) {
        if (lower.includes(key)) {
            iconColor = colors[key];
            break;
        }
    }

    const defaultClass = cn('w-5 h-5 shrink-0 mt-0.5', iconColor);

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
    rawFeatures?: Record<string, any>;
    rawLimits?: Record<string, any>;
    inheritanceHeader?: string;
    displayFeatures: Array<{ label: string; isMissing: boolean }>;
};

type ApiPlan = {
    name?: string;
    slug?: string;
    description?: string;
    billingInterval?: string;
    price?: number;
    yearlyPrice?: number;
    nigerianPrice?: number;
    currency?: string;
    features?: Record<string, unknown>;
    isPopular?: boolean;
};

const STATIC_PRICING_DATA = [
    {
        "_id": "68d7a632db19ecde17113598",
        "name": "Free",
        "slug": "free",
        "description": "Start for free. Upgrade when you’re ready to scale.",
        "type": "free",
        "billingInterval": "monthly",
        "price": 0,
        "currency": "USD",
        "nigerianPrice": 0,
        "trialDays": 0,
        "limits": {
            "maxLeads": 20,
            "maxEmails": 10,
            "maxSMS": 0,
            "maxAIReplies": 50,
            "maxSequences": 2,
            "maxInstagramDMTriggers": 0,
            "maxInstagramCommentPosts": 0,
            "maxInstagramAutomationPosts": 0,
            "maxCommentToDMConversationsPerDay": 0,
            "maxTeamMembers": 1,
            "maxVoiceCommands": 3,
            "maxProducts": 1
        },
        "features": {
            "leadCapturePages": true,
            "emailAutomation": false,
            "smsAutomation": false,
            "aiFollowUp": true,
            "aiContentAssistant": false,
            "instagramAutoDM": false,
            "instagramCommentAutomation": false,
            "whatsappAutomation": false,
            "aiBookingAssistant": "none",
            "calendarBooking": false,
            "prioritySupport": false,
            "allowCustomBranding": false,
            "crm": "basic",
            "analytics": "basic",
            "store": "single-product",
            "outreachChannels": "email_only"
        },
        "isPopular": false,
    },
    {
        "_id": "68d7a633db19ecde1711359f",
        "name": "Starter",
        "slug": "starter",
        "description": "The smart choice for growing businesses.",
        "type": "basic",
        "billingInterval": "monthly",
        "price": 19,
        "currency": "USD",
        "nigerianPrice": 25000,
        "trialDays": 0,
        "limits": {
            "maxLeads": 600,
            "maxEmails": 500,
            "maxSMS": 0,
            "maxAIReplies": 400,
            "maxSequences": 5,
            "maxInstagramDMTriggers": 100,
            "maxInstagramCommentPosts": 0,
            "maxInstagramAutomationPosts": 5,
            "maxCommentToDMConversationsPerDay": 30,
            "maxTeamMembers": 3,
            "maxVoiceCommands": 30,
            "maxProducts": 5
        },
        "features": {
            "leadCapturePages": true,
            "emailAutomation": true,
            "smsAutomation": false,
            "aiFollowUp": true,
            "aiContentAssistant": true,
            "instagramAutoDM": true,
            "instagramCommentAutomation": false,
            "whatsappAutomation": false,
            "aiBookingAssistant": "ig_email",
            "calendarBooking": false,
            "prioritySupport": false,
            "allowCustomBranding": false,
            "crm": "basic",
            "analytics": "advanced",
            "store": "multi-product",
            "outreachChannels": "email_only"
        },
        "isPopular": false,
    },
    {
        "_id": "68d7a634db19ecde171135a6",
        "name": "Growth",
        "slug": "growth",
        "description": "Built for businesses that are serious about scaling",
        "type": "standard",
        "billingInterval": "monthly",
        "price": 35,
        "currency": "USD",
        "nigerianPrice": 40000,
        "trialDays": 0,
        "limits": {
            "maxLeads": 6000,
            "maxEmails": 2000,
            "maxSMS": 500,
            "maxAIReplies": 1500,
            "maxSequences": -1,
            "maxInstagramDMTriggers": 0,
            "maxInstagramCommentPosts": 0,
            "maxInstagramAutomationPosts": 20,
            "maxCommentToDMConversationsPerDay": 100,
            "maxTeamMembers": 10,
            "maxVoiceCommands": 0,
            "maxProducts": 0
        },
        "features": {
            "leadCapturePages": true,
            "emailAutomation": true,
            "smsAutomation": true,
            "aiFollowUp": true,
            "aiContentAssistant": true,
            "instagramAutoDM": true,
            "instagramCommentAutomation": true,
            "whatsappAutomation": true,
            "aiBookingAssistant": "all_channels",
            "calendarBooking": true,
            "prioritySupport": true,
            "allowCustomBranding": true,
            "crm": "basic",
            "analytics": "enterprise",
            "store": "unlimited",
            "outreachChannels": "all_channels"
        },
        "isPopular": true,
    },
    {
        "_id": "68d7a635db19ecde171135a7",
        "name": "Starter (Yearly)",
        "slug": "starter-yearly",
        "description": "Stop chasing leads. Replace manual follow-ups. Billed annually with 20% savings.",
        "type": "basic",
        "billingInterval": "yearly",
        "price": 115.2,
        "currency": "USD",
        "nigerianPrice": 172800,
        "trialDays": 0,
        "limits": {
            "maxLeads": 600,
            "maxEmails": 1000,
            "maxSMS": 0,
            "maxAIReplies": 1000,
            "maxSequences": 5,
            "maxInstagramDMTriggers": 100,
            "maxInstagramCommentPosts": 100,
            "maxInstagramAutomationPosts": 5,
            "maxCommentToDMConversationsPerDay": 30,
            "maxTeamMembers": 3,
            "maxVoiceCommands": 50,
            "maxProducts": 5
        },
        "features": {
            "leadCapturePages": true,
            "emailAutomation": true,
            "smsAutomation": false,
            "aiFollowUp": true,
            "aiContentAssistant": true,
            "instagramAutoDM": true,
            "instagramCommentAutomation": false,
            "whatsappAutomation": false,
            "aiBookingAssistant": "ig_email",
            "calendarBooking": false,
            "prioritySupport": false,
            "allowCustomBranding": false,
            "crm": "advanced",
            "analytics": "advanced",
            "store": "multi-product",
            "outreachChannels": "email_only"
        },
        "isPopular": false,
    },
    {
        "_id": "68d7a636db19ecde171135a8",
        "name": "Growth (Yearly)",
        "slug": "growth-yearly",
        "description": "Appointment setter replacement. Scale without thinking. Billed annually with 20% savings.",
        "type": "standard",
        "billingInterval": "yearly",
        "price": 374.4,
        "currency": "USD",
        "nigerianPrice": 480000,
        "trialDays": 0,
        "limits": {
            "maxLeads": 6000,
            "maxEmails": 10000,
            "maxSMS": 1000,
            "maxAIReplies": 5000,
            "maxSequences": -1,
            "maxInstagramDMTriggers": 200,
            "maxInstagramCommentPosts": 200,
            "maxInstagramAutomationPosts": 20,
            "maxCommentToDMConversationsPerDay": 100,
            "maxTeamMembers": 10,
            "maxVoiceCommands": 0,
            "maxProducts": 0
        },
        "features": {
            "leadCapturePages": true,
            "emailAutomation": true,
            "smsAutomation": false,
            "aiFollowUp": true,
            "aiContentAssistant": true,
            "instagramAutoDM": true,
            "instagramCommentAutomation": true,
            "whatsappAutomation": true,
            "aiBookingAssistant": "all_channels",
            "calendarBooking": true,
            "prioritySupport": true,
            "allowCustomBranding": true,
            "crm": "enterprise",
            "analytics": "enterprise",
            "store": "unlimited",
            "outreachChannels": "all_channels"
        },
        "isPopular": true,
    }
];

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
        const processPricing = async () => {
            setLoadingPricing(true);
            try {
                let apiData = STATIC_PRICING_DATA;
                try {
                    const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "https://starvlo-api.onrender.com").replace(/\/+$/, "");
                    const response = await fetch(`${apiUrl}/api/v1/billing/plans/public?currency=${currency}`);
                    if (response.ok) {
                        const json = await response.json();
                        const rawData = Array.isArray(json) ? json : (json.success && Array.isArray(json.data) ? json.data : []);
                        if (rawData.length > 0) {
                            apiData = rawData;
                            console.log("Fetched pricing from API");
                        }
                    }
                } catch (apiErr) {
                    console.error("API fetch failed, falling back to static data", apiErr);
                }

                // Define the base plans we want to show
                const basePlanSlugs = ["free", "starter", "growth"];

                const groupedPlans: PricePlan[] = basePlanSlugs.map(baseSlug => {
                    const monthlyVariant = apiData.find(p => p.slug === baseSlug);
                    const yearlyVariant = apiData.find(p => p.slug === `${baseSlug}-yearly`) || monthlyVariant;

                    // If we only have one variant (like for Free), use it for both
                    const m = monthlyVariant || STATIC_PRICING_DATA.find(p => p.slug === baseSlug)!;
                    const y = yearlyVariant || STATIC_PRICING_DATA.find(p => p.slug === `${baseSlug}-yearly`)! || m;

                    const mPriceUSD = Number(m.price || 0);
                    const mPriceNGN = Number(m.nigerianPrice || (mPriceUSD * 1500));

                    // If y is separate yearly variant, use its price. 
                    // If y is same as m, use yearlyPrice field if it exists, otherwise 12 * price.
                    let yPriceUSD = Number((y as any).yearlyPrice || (y === m ? mPriceUSD * 12 : (y as any).price || 0));
                    let yPriceNGN = Number((y as any).nigerianPrice || (y === m ? mPriceNGN * 12 : ((y as any).price * 1500) || 0));

                    const currentMPrice = currency === "NGN" ? mPriceNGN : mPriceUSD;
                    const currentYPrice = currency === "NGN" ? yPriceNGN : yPriceUSD;

                    // Calculate display prices (monthly equivalent for yearly)
                    const mDisplay = currentMPrice;
                    const yDisplay = ((y as any).billingInterval === "yearly" || (y as any).yearlyPrice) ? currentYPrice / 12 : currentYPrice;

                    const isFeatured = Boolean(m.isPopular || y.isPopular);

                    // Pre-calculate features for both to avoid re-calculating on every render if possible,
                    // but we'll store the raw data and let the render logic handle the toggle.

                    const getDisplayFeatures = (variant: any) => {
                        const features: Array<{ label: string; isMissing: boolean }> = [];
                        const currF = variant.features || {};
                        const currL = variant.limits || {};

                        const formatLimit = (val: number, label: string) => {
                            if (val === -1) return `Unlimited ${label}`;
                            if (val > 0) return `${val} ${label}`;
                            return null;
                        };

                        const l = [
                            formatLimit(currL.maxLeads, "Leads"),
                            formatLimit(currL.maxEmails, "Emails/mo"),
                            formatLimit(currL.maxAIReplies, "AI Replies"),
                            formatLimit(currL.maxSMS, "SMS"),
                            formatLimit(currL.maxSequences, "Sequences"),
                            formatLimit(currL.maxInstagramAutomationPosts, "Instagram Automation Posts"),
                            formatLimit(currL.maxCommentToDMConversationsPerDay, "Comment-to-DM Conversations/day"),
                            formatLimit(currL.maxTeamMembers, "Team Members"),
                            formatLimit(currL.maxVoiceCommands, "Voice Commands"),
                            formatLimit(currL.maxProducts, "Products"),
                        ];

                        l.forEach(text => {
                            if (text) features.push({ label: text, isMissing: false });
                        });

                        const mapValue = (val: string) => {
                            const mapping: Record<string, string> = {
                                "ig_email": "Instagram & Email",
                                "all_channels": "All Channels",
                                "email_only": "Email Only",
                                "basic": "Basic",
                                "advanced": "Advanced",
                                "enterprise": "Enterprise",
                                "single-product": "Single Product",
                                "multi-product": "Multi-Product",
                                "unlimited": "Unlimited",
                                "none": "None"
                            };
                            return mapping[val] || val.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
                        };

                        MASTER_FEATURES.forEach(master => {
                            const currVal = currF[master.id];
                            let label = master.label;
                            if (master.isString && currVal && currVal !== "none" && currVal !== "disabled") {
                                label = `${master.label}: ${mapValue(String(currVal))}`;
                            }
                            const isAvailable = master.isString ? (currVal && currVal !== "none" && currVal !== "disabled") : !!currVal;
                            if (isAvailable) features.push({ label, isMissing: false });
                        });
                        return features;
                    };

                    return {
                        name: String(m.name || m.slug || ""),
                        description: billing === "monthly" ? m.description : y.description,
                        monthly: mDisplay,
                        yearly: yDisplay,
                        features: [],
                        variant: isFeatured ? "secondary" : "outline",
                        featured: isFeatured,
                        currency: currency,
                        intervalAmountMap: {
                            monthly: currentMPrice,
                            yearly: currentYPrice
                        },
                        displayFeatures: billing === "monthly" ? getDisplayFeatures(m) : getDisplayFeatures(y),
                        inheritanceHeader: m.slug === "starter" ? "Everything in Free plus" : (m.slug === "growth" ? "Everything in Starter plus" : undefined)
                    };
                });

                setPlans(groupedPlans);
            } catch (err) {
                console.error("Failed to process pricing", err);
            } finally {
                setLoadingPricing(false);
            }
        };

        processPricing();
    }, [currency, billing]);

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
                    className="flex flex-col items-center justify-center mb-6 gap-4"
                >
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
                        </div>
                    </div>

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

                                    <div className={cn('space-y-4 p-5 text-left border rounded-xl flex-grow flex flex-col',
                                        plan.featured ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-100 bg-neutral-50'
                                    )}>
                                        {plan.inheritanceHeader && (
                                            <div className="mb-4">
                                                <div className={cn(
                                                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                                                    plan.featured
                                                        ? "bg-[var(--color-primary)] text-white border border-[var(--color-primary-light)]/30"
                                                        : "bg-neutral-800 text-white border border-neutral-700"
                                                )}>
                                                    <Sparkles className="w-3.5 h-3.5" />
                                                    {plan.inheritanceHeader}
                                                </div>
                                            </div>
                                        )}

                                        {plan.displayFeatures.length === 0 && !plan.inheritanceHeader && (
                                            <p className="text-sm text-neutral-500 italic">No specific features listed for this tier.</p>
                                        )}

                                        <div className="space-y-4">
                                            {plan.displayFeatures.map((f, i) => (
                                                <div key={i} className={cn(
                                                    'flex items-start gap-3 text-sm font-medium leading-tight transition-opacity',
                                                    plan.featured ? 'text-neutral-300' : 'text-neutral-600',
                                                    f.isMissing ? 'opacity-50' : 'opacity-100'
                                                )}>
                                                    <FeatureIcon feature={f.label} isFeatured={plan.featured} isMissing={f.isMissing} />
                                                    <span className={f.isMissing ? 'text-neutral-400 line-through decoration-neutral-300' : ''}>
                                                        {f.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
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
