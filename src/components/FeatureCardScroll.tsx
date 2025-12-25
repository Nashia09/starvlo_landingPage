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
  'from-[var(--color-primary-light)]/10 to-[var(--color-primary)]/5 bg-gradient-to-br',
  'from-[var(--color-primary)]/10 to-[var(--color-primary-light)]/5 bg-gradient-to-br',
  'from-[var(--color-primary-dark)]/10 to-[var(--color-primary)]/5 bg-gradient-to-br',
  'from-[var(--color-primary-light)]/8 to-[var(--color-primary)]/8 bg-gradient-to-br',
  'from-[var(--color-primary)]/8 to-[var(--color-primary-dark)]/8 bg-gradient-to-br',
  'from-[var(--color-primary-light)]/12 to-[var(--color-primary-dark)]/6 bg-gradient-to-br',
  'from-[var(--color-primary-dark)]/10 to-[var(--color-primary)]/5 bg-gradient-to-br',
  'from-[var(--color-primary)]/12 to-[var(--color-primary-light)]/6 bg-gradient-to-br',
  'from-[var(--color-primary-light)]/6 to-[var(--color-primary)]/10 bg-gradient-to-br',
  'from-[var(--color-primary-dark)]/8 to-[var(--color-primary-light)]/8 bg-gradient-to-br'
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
