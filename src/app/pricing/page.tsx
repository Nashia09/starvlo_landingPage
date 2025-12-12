"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function PricingPage() {
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
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Simple, Transparent Pricing</h1>
        <p className="text-xl text-neutral-200 mb-12 text-center max-w-3xl mx-auto">
          Choose the plan that works best for your business
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Starter"
            price="$99"
            description="For small businesses just getting started with lead generation."
            features={[
              "1,000 visitors identified per month",
              "Basic visitor data",
              "Email notifications",
              "24-hour data retention"
            ]}
            link="/pricing/starter"
            popular={false}
          />
          <PricingCard 
            title="Professional"
            price="$199"
            description="For growing teams that need more identification capacity."
            features={[
              "5,000 visitors identified per month",
              "Enhanced visitor data",
              "Real-time notifications",
              "30-day data retention",
              "Basic CRM integration"
            ]}
            link="/pricing/professional"
            popular={true}
          />
          <PricingCard 
            title="Business"
            price="$399"
            description="For organizations requiring advanced integrations and features."
            features={[
              "15,000 visitors identified per month",
              "Complete visitor data",
              "Advanced lead scoring",
              "90-day data retention",
              "Full CRM integration",
              "Team collaboration"
            ]}
            link="/pricing/business"
            popular={false}
          />
          
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Need help choosing?</h2>
          <Link href="/contact">
            <button className="transform rounded-lg border border-white/30 bg-transparent px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              Talk to Sales
            </button>
          </Link>
        </div>
        
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <FAQItem 
              question="How does the visitor identification work?"
              answer="Our technology uses IP address tracking and cross-referencing with our extensive database to identify the companies visiting your website."
            />
            <FAQItem 
              question="Can I upgrade or downgrade my plan later?"
              answer="Yes, you can change your plan at any time. Your billing will be prorated based on the remaining days in your billing cycle."
            />
            <FAQItem 
              question="Do you offer a free trial?"
              answer="Yes, we offer a 14-day free trial on all plans so you can test our service before committing."
            />
            <FAQItem 
              question="What happens if I exceed my monthly visitor limit?"
              answer="If you exceed your visitor limit, you'll still receive data but may need to upgrade to continue receiving full functionality."
            />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}

function PricingCard({ title, price, description, features, link, popular }: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  popular: boolean;
}) {
  return (
    <div className={`relative ${popular ? 'scale-105 z-10' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 text-center">
          <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className={`h-full bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:bg-white/10 flex flex-col ${popular ? 'border-blue-500/50' : 'border-white/10'}`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-white mb-1">{price}</div>
        <div className="text-sm text-neutral-400 mb-4">per month</div>
        <p className="text-neutral-300 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href={link} className="mt-auto">
          <button className={`w-full transform rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 ${popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white text-black hover:bg-gray-200'}`}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">{question}</h3>
      <p className="text-neutral-300">{answer}</p>
    </div>
  );
} 