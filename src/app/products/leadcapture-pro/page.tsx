"use client";
import LeadCaptureHeroParallax from "@/components/ui/leadcapture-hero-parallax";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3";
import TestimonialsCarousel from "@/components/ui/testimonials-carousel";
import Link from "next/link";

export default function LeadCaptureProPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Parallax Section */}
      <LeadCaptureHeroParallax />
      
      {/* Features Section */}
      <div className="bg-white">
        <FeaturesSectionDemo />
      </div>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Trust Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Security Features</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trust LeadCapture Pro</h2>
            <p className="text-lg text-gray-600 mb-8">
              LeadCapture Pro is designed with the highest commitment to trust, security, and compliance. Your data is never used to train models, and we use industry-standard best practices to ensure its security.
            </p>
            <Link href="/security" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              Discover more
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See what LeadCapture Pro can do for you
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Find out how LeadCapture Pro can help your company transform anonymous visitors into qualified leads with our AI-powered platform.
          </p>
          <a href="https://app.starvlo.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors inline-block">
            Get started
          </a>
        </div>
      </section>
    </div>
  );
} 
