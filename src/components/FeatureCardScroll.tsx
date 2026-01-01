import React, { useMemo } from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Creator Store",
    description: "Create and sell digital products, services, and memberships—no coding required.",
    image: "/features/digital-box.png"
  },
  {
    title: "Social & Store Automation",
    description: "1‑Tap checkout with automated DMs and emails from your connected socials.",
    image: "/features/calendar-app.png"
  },
  {
    title: "Quick Setup",
    description: "Build your store in minutes with an intuitive onboarding flow.",
    image: "/features/quick-setup.png"
  },
  {
    title: "Store Analytics",
    description: "Track sales, revenue, and checkout conversion with clear insights.",
    image: "/features/analytics-chart.png"
  },
  {
    title: "Marketing Automations",
    description: "Automate DMs, email sequences, and link‑in‑bio funnels to grow.",
    image: "/features/email-campaign.png"
  },
 
  {
    title: "Social Integrations",
    description: "Connect Instagram and favorite apps to streamline audience growth.",
    image: "/features/automation-gear.png"
  },
  {
    title: "Security Features",
    description: "Secure payments and data protection with industry‑standard practices.",
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
