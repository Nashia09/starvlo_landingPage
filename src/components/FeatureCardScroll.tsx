import React, { useMemo } from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Lead Capture Forms",
    description: "Capture qualified leads with high‑conversion forms and enriched company data.",
    image: "/features/digital-box.png"
  },
  {
    title: "Automated Follow‑Up",
    description: "Trigger timely emails and CRM tasks based on real visitor intent.",
    image: "/features/calendar-app.png"
  },
  {
    title: "Real‑Time Chat",
    description: "Engage high‑intent visitors instantly and route conversations to sales.",
    image: "/features/chat-bubble.png"
  },
  {
    title: "Quick Setup",
    description: "Get started in minutes with our intuitive onboarding process.",
    image: "/features/quick-setup.png"
  },
  {
    title: "Analytics",
    description: "Track your performance with detailed insights and metrics.",
    image: "/features/analytics-chart.png"
  },
  {
    title: "Visitor Identification",
    description: "Reveal the companies behind your website traffic and prioritize outreach.",
    image: "/features/website-builder.png"
  },
  {
    title: "Email Automation",
    description: "Automate sequences that nurture leads and escalate high intent.",
    image: "/features/email-campaign.png"
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team members and share resources.",
    image: "/features/team-work.png"
  },
  {
    title: "Automation Tools",
    description: "Streamline your workflow with powerful automation features.",
    image: "/features/automation-gear.png"
  },
  {
    title: "Security Features",
    description: "Keep your data safe with enterprise-grade security measures.",
    image: "/features/security-shield.png"
  }
];

const gradients = [
  'from-[#7CBECE]/10 to-[#A1D1D8]/5 bg-gradient-to-br',
  'from-[#A1D1D8]/10 to-[#7CBECE]/5 bg-gradient-to-br',
  'from-[#5A9BA5]/10 to-[#7CBECE]/5 bg-gradient-to-br',
  'from-[#7CBECE]/8 to-[#A1D1D8]/8 bg-gradient-to-br',
  'from-[#A1D1D8]/8 to-[#5A9BA5]/8 bg-gradient-to-br',
  'from-[#7CBECE]/12 to-[#5A9BA5]/6 bg-gradient-to-br',
  'from-[#5A9BA5]/10 to-[#A1D1D8]/5 bg-gradient-to-br',
  'from-[#A1D1D8]/12 to-[#7CBECE]/6 bg-gradient-to-br',
  'from-[#7CBECE]/6 to-[#A1D1D8]/10 bg-gradient-to-br',
  'from-[#5A9BA5]/8 to-[#7CBECE]/8 bg-gradient-to-br'
];

const FeatureCardScroll: React.FC = () => {
  // Triple the features array for better seamless scrolling
  const tripleFeatures = useMemo(() => [...features, ...features, ...features], []);

  return (
    <div
      className="w-full py-8"
      role="region"
      aria-label="Feature showcase"
      style={{ overflow: 'hidden' }}
    >
      <div
        className="flex gap-6 lg:gap-8 animate-scroll-seamless"
        style={{
          animation: 'scrollSeamless 60s linear infinite',
          willChange: 'transform',
          width: 'max-content',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {tripleFeatures.map((feature, index) => (
          <div
            key={`${feature.title}-${index}`}
            className="flex-shrink-0 w-[320px] lg:w-[380px]"
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              image={feature.image}
              gradient={gradients[index % gradients.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCardScroll; 
