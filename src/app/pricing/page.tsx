"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/ui/footer";

type Plan = {
  title: string;
  price: string;
  description: string;
  details: string[];
  link: string;
  popular?: boolean;
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
  features?: PlanFeatures;
  isPopular?: boolean;
};

type PlanFeatures = {
  leadCapturePages?: boolean;
  emailAutomation?: boolean;
  smsAutomation?: boolean;
  aiFollowUp?: boolean;
  aiContentAssistant?: boolean;
  instagramAutoDM?: boolean;
  instagramCommentAutomation?: boolean;
  crm?: string;
  analytics?: string;
  store?: string;
  outreachChannels?: string;
};

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [allPlans, setAllPlans] = useState<{ plan: Plan; interval: "monthly" | "yearly" }[]>([]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const apiBase = useMemo(() => process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, ""), []);

  useEffect(() => {
    const fetchPricing = async () => {
      if (!apiBase) return;
      const url = `${apiBase}/api/v1/billing/plans/public`;
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return;
        const body = await res.json();
        const raw = (Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : []) as ApiPlan[];
        const mapped: { plan: Plan; interval: "monthly" }[] = raw.map((plan) => {
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
            plan: {
              title: String(plan.name || plan.slug || ""),
              price: priceLabel,
              description: String(plan.description || ""),
              details,
              link: `/pricing/${String(plan.slug || plan.name || "").toLowerCase()}`,
              popular: Boolean(plan.isPopular || false),
              amount: price,
              currency,
              interval: "monthly",
            },
            interval: "monthly",
          };
        });
        const discounted: { plan: Plan; interval: "yearly" }[] = mapped.map(({ plan }) => {
          const discountedAmount = Math.round(plan.amount * 0.8 * 100) / 100;
          const symbol = plan.currency.toUpperCase() === "USD" ? "$" : plan.currency.toUpperCase();
          const priceLabel = discountedAmount === 0 ? "Free" : `${symbol}${discountedAmount} / month`;
          return {
            plan: { ...plan, price: priceLabel, amount: discountedAmount, interval: "yearly" },
            interval: "yearly",
          };
        });
        setAllPlans([...mapped, ...discounted]);
      } catch {}
    };
    fetchPricing();
  }, [apiBase]);

  useEffect(() => {
    let filtered = allPlans.filter((p) => p.interval === billingCycle).map((p) => p.plan);
    const parsed = [...filtered];
    const popularIndex = parsed.findIndex((pl) => pl.popular);
    if (popularIndex !== -1) {
      const [popularPlan] = parsed.splice(popularIndex, 1);
      const middleIndex = Math.floor(parsed.length / 2);
      parsed.splice(middleIndex, 0, popularPlan);
      parsed.forEach((pl) => (pl.popular = false));
      if (parsed[middleIndex]) parsed[middleIndex].popular = true;
    }
    setPlans(parsed);
  }, [allPlans, billingCycle]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F1FAFC] to-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-[#0A0F18] mb-4 text-center">Pricing</h1>
        <p className="text-base text-[#3b4a5a] mb-8 text-center max-w-2xl mx-auto">
          Try all the features with free credits. No credit card required.
        </p>

        <div className="flex items-center justify-center mb-10">
          <div className="flex rounded-full bg-[#E9F7FA] p-1 border border-[#D5EEF3]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                billingCycle === "monthly" ? "bg-[#7CBECE] text-black" : "text-[#5A6B7A]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all flex items-center ${
                billingCycle === "yearly" ? "bg-[#7CBECE] text-black" : "text-[#5A6B7A]"
              }`}
            >
              Yearly
              <span className="ml-2 bg-[#5A9BA5] text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={`${plan.title}-${idx}`}
              className="w-full sm:w-[320px] md:w-[360px] lg:w-[340px] xl:w-[360px]"
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                details={plan.details}
                link={plan.link}
                popular={Boolean(plan.popular)}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-[#0A0F18] mb-6">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FAQItem 
              question="How does the visitor identification work?"
              answer="We use IP signals and a proprietary dataset to identify companies visiting your site."
            />
            <FAQItem 
              question="Can I upgrade or downgrade later?"
              answer="Yes. Changes are prorated based on the remaining days in your cycle."
            />
            <FAQItem 
              question="Do you offer a free trial?"
              answer="Yes. Test all features before you decide."
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
          <div className="mt-10">
            <Link href="/contact">
              <button className="rounded-lg border border-[#7CBECE] bg-[#7CBECE] px-8 py-3 font-medium text-[#0A0F18] shadow-sm hover:brightness-95">
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

function PricingCard({ title, price, description, details, link, popular }: { 
  title: string;
  price: string;
  description: string;
  details: string[];
  link: string;
  popular: boolean;
}) {
  return (
    <div className={`relative ${popular ? 'scale-105 z-10' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="bg-[#5A9BA5] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className={`h-full bg-white border rounded-xl p-6 transition-all duration-300 hover:shadow-md flex flex-col ${popular ? 'border-[#5A9BA5]/50' : 'border-[#E1F1F5]'}`}>
        <h3 className="text-xl font-bold text-[#0A0F18] mb-2">{title}</h3>
        <div className="text-3xl font-bold text-[#0A0F18] mb-1">{price}</div>
        <p className="text-[#5A6B7A] mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {details.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-[#5A9BA5] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#334454]">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href={link} className="mt-auto">
          <button className={`w-full transform rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 ${popular ? 'bg-[#0A0F18] text-white hover:brightness-125' : 'bg-[#7CBECE] text-black hover:brightness-95'}`}>
            {popular ? 'Buy Now' : 'Try for Free'}
          </button>
        </Link>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-[#F5FBFC] border border-[#E1F1F5] rounded-xl p-6 text-left">
      <h3 className="text-lg font-bold text-[#0A0F18] mb-2">{question}</h3>
      <p className="text-[#334454]">{answer}</p>
    </div>
  );
}
