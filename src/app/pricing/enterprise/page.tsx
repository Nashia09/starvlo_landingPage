"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function EnterprisePricingPage() {
  return (
    <WavyBackground 
      containerClassName="relative w-full h-auto min-h-screen pt-28"
      className="w-full max-w-7xl mx-auto"
      colors={["#0066CC", "#3B82F6", "#38bdf8", "#22d3ee", "#818cf8"]}
      waveWidth={100}
      backgroundFill="#0A0F18"
      blur={10}
      waveOpacity={0.6}
      speed="slow"
    >
      <div className="container mx-auto px-4 py-16">
        <Link href="/pricing" className="text-blue-400 mb-8 inline-block hover:underline">← Back to Pricing</Link>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Plan</h1>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-white">Custom</span>
            <span className="text-neutral-400 ml-2">pricing</span>
          </div>
          
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl">
            Custom solutions for large companies with specific requirements and enterprise-grade security needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Enterprise Features</h2>
              <ul className="space-y-3">
                {[
                  "Unlimited visitors identified",
                  "Enterprise-grade security",
                  "Custom integrations",
                  "Unlimited data retention",
                  "Dedicated support",
                  "Custom reporting",
                  "SLA guarantees",
                  "Advanced user management",
                  "Single Sign-On (SSO)",
                  "IP whitelisting",
                  "Custom training",
                  "Quarterly business reviews"
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
                  <h3 className="font-bold text-white mb-1">Large Organizations</h3>
                  <p className="text-neutral-300">Multi-department coordination with custom permissions and workflows</p>
                </li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-1">Global Teams</h3>
                  <p className="text-neutral-300">Coordinate lead generation across multiple regions and business units</p>
                </li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-1">High Security Requirements</h3>
                  <p className="text-neutral-300">Companies in regulated industries requiring enhanced security features</p>
                </li>
              </ul>

              <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h3 className="font-bold text-white mb-1">Enterprise Support</h3>
                <div className="text-neutral-200 space-y-2">
                  <p>Our enterprise customers receive:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom onboarding program</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/contact">
              <button className="transform rounded-lg bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200">
                Contact Sales
              </button>
            </Link>
            <Link href="/contact">
              <button className="transform rounded-lg border border-white/30 bg-transparent px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                Schedule a Demo
              </button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Enterprise Implementation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StepCard 
              number="1" 
              title="Discovery" 
              description="We understand your specific requirements and goals"
            />
            <StepCard 
              number="2" 
              title="Customization" 
              description="Our team builds a solution tailored to your needs"
            />
            <StepCard 
              number="3" 
              title="Implementation" 
              description="Seamless rollout with dedicated support and training"
            />
            <StepCard 
              number="4" 
              title="Ongoing Support" 
              description="Regular check-ins and optimization recommendations"
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-neutral-300 mb-4">Ready to discuss your enterprise requirements?</p>
            <Link href="/contact">
              <button className="transform rounded-lg bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  );
} 