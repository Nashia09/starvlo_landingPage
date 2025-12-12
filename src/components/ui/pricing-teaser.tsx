"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

interface PricePlan {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: PricePlan[] = [
  {
    name: "Free",
    price: {
      monthly: "$0",
      yearly: "$0",
    },
    description: "Perfect for individuals and small projects.",
    features: [
      "Basic Website Builder",
      "1 Lead Capture Form",
      "100 Visitors/month",
      "Basic Analytics",
      "Community Support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Starter",
    price: {
      monthly: "$29",
      yearly: "$290",
    },
    description: "Perfect for small businesses and startups.",
    features: [
      "Everything in Free",
      "AI Website Builder",
      "5 Lead Capture Forms",
      "1,000 Visitors/month",
      "Email Support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: {
      monthly: "$79",
      yearly: "$790",
    },
    description: "Ideal for growing businesses and agencies.",
    features: [
      "Everything in Starter",
      "Visitor Identification",
      "10,000 Visitors/month",
      "Advanced Analytics",
      "Lead Scoring",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  
];

export default function PricingTeaser() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [dragStartX, setDragStartX] = useState(0);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  
 
  
  const handleDragMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const dragOffset = e.clientX - dragStartX;
    const percentOffset = (dragOffset / containerWidth) * 100;
    
    // Limit position between 10% and 90%
    let newPosition = position + percentOffset;
    newPosition = Math.max(10, Math.min(90, newPosition));
    
    setPosition(newPosition);
    setDragStartX(e.clientX);
  };
  
  const handleDragEnd = () => {
    isDragging.current = false;
  };
  
  // Handle mouse events for drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();
    
    if (isDragging.current) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position, dragStartX]);
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#7CBECE]/10 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mx-auto max-w-[700px] md:text-lg">
            Choose the plan that&apos;s right for your business. All plans include a 14-day free trial.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  billingCycle === "monthly"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "text-gray-500 dark:text-gray-400"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all flex items-center",
                  billingCycle === "yearly"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "text-gray-500 dark:text-gray-400"
                )}
              >
                Yearly
                <span className="ml-2 bg-[#5A9BA5] text-white  text-xs px-2 py-0.5 rounded-full dark:bg-green-800 dark:text-green-100">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-xl border bg-white dark:bg-gray-900 p-8",
                plan.popular
                  ? "border-[#7CBECE] dark:border-[#7CBECE] shadow-lg"
                  : "border-gray-200 dark:border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-block rounded-full bg-[#7CBECE]/10 dark:bg-[#7CBECE]/30 px-3 py-1 text-sm text-[#7CBECE] dark:text-[#7CBECE]">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">
                  {plan.price[billingCycle]}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {plan.price[billingCycle] !== "$0" && (billingCycle === "monthly" ? "/month" : "/year")}
                  </span>
                </div>
                {billingCycle === "yearly" && plan.price.monthly !== "$0" && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 -mt-1 mb-2">
                    Monthly price: {plan.price.monthly}/month
                  </div>
                )}
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
                
                <button
                  className={cn(
                    "w-full py-3 px-6 font-medium rounded-lg transition-colors",
                    plan.popular
                      ? "bg-[#7CBECE] hover:bg-[#7CBECE]/90 text-white"
                      : plan.name === "Enterprise"
                      ? "bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  )}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="mt-8">
                <div className="text-sm font-medium mb-4">Features included:</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={cn(
                          "h-5 w-5 mr-2",
                          plan.popular
                            ? "text-[#7CBECE]"
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
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-[#7CBECE] dark:text-[#7CBECE] font-medium hover:underline"
          >
            View all pricing details
          </a>
        </div>
      </div>
    </section>
  );
} 