"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Link from "next/link";

export default function LeadCaptureHeroParallax() {
  // Custom header for LeadCapture Pro
  const CustomHeader = () => {
    return (
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
          Starvlo
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-600">
          Identify anonymous website visitors and convert them to qualified leads while dramatically improving business outcomes.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/demo">
            <button className="transform rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-light)]">
              Watch Demo
            </button>
          </Link>
          <a href="https://app.starvlo.com/" target="_blank" rel="noopener noreferrer" className="transform rounded-lg border border-[var(--color-primary)] bg-transparent px-6 py-3 font-medium text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-white">
            Get Started
          </a>
        </div>
      </div>
    );
  };

  return <HeroParallax products={leadCaptureProducts} Header={CustomHeader} />;
}

// Custom products for LeadCapture Pro with actual image URLs
export const leadCaptureProducts = [
  {
    title: "Visitor Identification",
    link: "/features/visitor-identification",
    thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
  },
  {
    title: "Lead Scoring",
    link: "/features/lead-scoring",
    thumbnail: "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Real-time Alerts",
    link: "/features/real-time-alerts",
    thumbnail: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
  },
  {
    title: "Company Insights",
    link: "/features/company-insights",
    thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
  },
  {
    title: "CRM Integration",
    link: "/features/crm-integration",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sales Pipeline",
    link: "/features/sales-pipeline",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Email Tracking",
    link: "/features/email-tracking",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Visitor Analytics",
    link: "/features/visitor-analytics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Lead Automation",
    link: "/features/lead-automation",
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Website Tracking",
    link: "/features/website-tracking",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Engagement Metrics",
    link: "/features/engagement-metrics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Form Capture",
    link: "/features/form-capture",
    thumbnail: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "API Access",
    link: "/features/api-access",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
  },
  {
    title: "Custom Reports",
    link: "/features/custom-reports",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Team Collaboration",
    link: "/features/team-collaboration",
    thumbnail: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
  },
];
