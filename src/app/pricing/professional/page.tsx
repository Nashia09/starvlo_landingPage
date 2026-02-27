"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function ProfessionalPricingPage() {
  return (
    <WavyBackground 
      containerClassName="relative w-full h-auto min-h-screen pt-28"
      className="w-full max-w-7xl mx-auto"
      colors={["#7CBECE", "#A1D1D8", "#5A9BA5", "#7CBECE", "#A1D1D8"]}
      waveWidth={100}
      backgroundFill="#0A0F18"
      blur={10}
      waveOpacity={0.6}
      speed="slow"
    >
      <div className="container mx-auto px-4 py-16">
        <Link href="/pricing" className="text-[#A1D1D8] mb-8 inline-block hover:underline">← Back to Pricing</Link>
        
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/50 rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-6">
            MOST POPULAR
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Plan</h1>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-white">$199</span>
            <span className="text-neutral-400 ml-2">per month</span>
          </div>
          
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl">
            Perfect for growing teams that need more identification capacity and enhanced features to optimize their lead generation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">What &apos s Included</h2>
              <ul className="space-y-3">
                {[
                  "5,000 visitors identified per month",
                  "Enhanced visitor data",
                  "Real-time notifications",
                  "30-day data retention",
                  "Basic CRM integration",
                  "Visit timeline tracking",
                  "Multiple user accounts",
                  "Email + chat support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Perfect For</h2>
              <ul className="space-y-4">
                <li className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-1">Marketing Teams</h3>
                  <p className="text-neutral-300">Track campaign effectiveness by seeing which companies visit after specific marketing efforts</p>
                </li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-1">Sales Teams</h3>
                  <p className="text-neutral-300">Get notified when qualified prospects visit your site so you can follow up immediately</p>
                </li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-1">Growing Businesses</h3>
                  <p className="text-neutral-300">Capture and convert more leads as your business expands its online presence</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="transform rounded-lg bg-blue-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600">
              Subscribe Now
            </button>
            <Link href="/contact">
              <button className="transform rounded-lg border border-white/30 bg-transparent px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                Talk to Sales
              </button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Compare with Other Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ComparisonCard
              title="Starter"
              price="$99"
              highlight={false}
              link="/pricing/starter"
            />
            <ComparisonCard
              title="Professional"
              price="$199"
              highlight={true}
              link="/pricing/professional"
            />
            <ComparisonCard
              title="Business"
              price="$399"
              highlight={false}
              link="/pricing/business"
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-neutral-300 mb-4">Need more capabilities or custom features?</p>
            <Link href="/pricing/enterprise">
              <button className="transform rounded-lg bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200">
                Explore Enterprise
              </button>
            </Link>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}

function ComparisonCard({ title, price, highlight, link }: { 
  title: string; 
  price: string; 
  highlight: boolean;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className={`bg-white/5 border rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer ${highlight ? 'border-blue-500/50' : 'border-white/10'}`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="text-2xl font-bold text-white mb-4">{price}<span className="text-sm text-neutral-400 font-normal"> / month</span></div>
        {highlight ? (
          <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">Current Plan</div>
        ) : (
          <div className="text-blue-400 hover:underline">View Details →</div>
        )}
      </div>
    </Link>
  );
} 