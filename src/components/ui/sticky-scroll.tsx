"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Performance optimization styles
const performanceStyles = `
  .sticky-scroll-optimized {
    contain: layout style paint;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .scale-102 {
    transform: scale(1.02);
  }

  .scale-101 {
    transform: scale(1.01);
  }

  .scale-100 {
    transform: scale(1);
  }

  .scale-95 {
    transform: scale(0.95);
  }

  .scale-105 {
    transform: scale(1.05);
  }
`;
import {
  MousePointer2,
  Zap,
  Bot,
  BarChart3,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Instagram,
  MessageCircle,
  Link,
  Users,
  Target,
  Mail,
  ShoppingBag,
  TrendingUp,
  Wallet,
  Download,
  Star,
  CheckCircle
} from "lucide-react";



interface WorkflowPhase {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  mainIcon: React.ReactNode;
  featureIcons: React.ReactNode[];
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    border: string;
  };
  visualElements: {
    pattern: string;
    glow: string;
  };
}

const workflowPhases: WorkflowPhase[] = [
  {
    id: 1,
    phase: "CAPTURE",
    title: "Lead Capture Entry Points",
    subtitle: "Multiple touchpoints to capture your audience",
    description: "Create powerful lead magnets and capture systems across all your digital touchpoints. From landing pages to social media triggers, never miss a potential lead.",
    mainIcon: <MousePointer2 className="w-10 h-10" />,
    featureIcons: [
      <ExternalLink key="external" className="w-5 h-5" />,
      <Instagram key="instagram" className="w-5 h-5" />,
      <Link key="link" className="w-5 h-5" />,
      <Target key="target" className="w-5 h-5" />
    ],
    features: [
      {
        title: "Lead Magnet Pages",
        description: "Beautiful landing pages and forms that convert",
        icon: <ExternalLink className="w-5 h-5" />
      },
      {
        title: "DM/Comment Triggers",
        description: "Instagram, Facebook, WhatsApp integration",
        icon: <Instagram className="w-5 h-5" />
      },
      {
        title: "Link in Bio Store",
        description: "Central hub for all your links and products",
        icon: <Link className="w-5 h-5" />
      },
      {
        title: "Smart Popups/Forms",
        description: "Embeddable widgets for external sites",
        icon: <Target className="w-5 h-5" />
      }
    ],
    metrics: [
      { label: "Conversion Rate", value: "35%", icon: "📈" },
      { label: "Setup Time", value: "5 min", icon: "⚡" },
      { label: "Integrations", value: "15+", icon: "🔗" }
    ],
    colorScheme: {
      primary: "from-[var(--color-primary-light)] to-[var(--color-primary)]",
      secondary: "from-[var(--color-primary-light)]/10 to-[var(--color-primary)]/10",
      accent: "[var(--color-primary-light)]",
      background: "bg-gradient-to-br from-[var(--color-primary-light)]/10 via-[var(--color-primary)]/5 to-white",
      border: "border-[var(--color-primary-light)]/30"
    },
    visualElements: {
      pattern: "radial-gradient(circle at 30% 70%, rgba(46, 145, 165, 0.15) 0%, transparent 50%)",
      glow: "shadow-[var(--color-primary-light)]/20"
    }
  },
  {
    id: 2,
    phase: "FLOW",
    title: "Lead Flow System",
    subtitle: "Automated processing and organization",
    description: "Seamlessly process and organize every lead with intelligent automation. From form submission to customer journey, create a smooth flow that converts.",
    mainIcon: <Zap className="w-10 h-10" />,
    featureIcons: [
      <CheckCircle key="check" className="w-5 h-5" />,
      <Users key="users" className="w-5 h-5" />,
      <TrendingUp key="trending" className="w-5 h-5" />,
      <Target key="target2" className="w-5 h-5" />
    ],
    features: [
      {
        title: "Automated Processing",
        description: "Instant form submission handling and data capture",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "CRM Integration",
        description: "Captures name, phone, email, and source automatically",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "Pipeline Automation",
        description: "New → Engaged → Customer stage progression",
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        title: "Lead Scoring",
        description: "Smart segmentation and priority ranking",
        icon: <Target className="w-5 h-5" />
      }
    ],
    metrics: [
      { label: "Processing Speed", value: "< 1s", icon: "⚡" },
      { label: "Data Accuracy", value: "99.9%", icon: "🎯" },
      { label: "Automation Rate", value: "95%", icon: "🤖" }
    ],
    colorScheme: {
      primary: "from-[var(--color-primary-dark)] to-[var(--color-primary)]",
      secondary: "from-[var(--color-primary-dark)]/10 to-[var(--color-primary)]/10",
      accent: "[var(--color-primary-dark)]",
      background: "bg-gradient-to-br from-[var(--color-primary-dark)]/10 via-[var(--color-primary)]/5 to-white",
      border: "border-[var(--color-primary-dark)]/30"
    },
    visualElements: {
      pattern: "radial-gradient(circle at 70% 30%, rgba(35, 124, 142, 0.15) 0%, transparent 50%)",
      glow: "shadow-[var(--color-primary-dark)]/20"
    }
  },
  {
    id: 3,
    phase: "AUTOMATE",
    title: "AI Sales Agent + Automation",
    subtitle: "Intelligent follow-up and engagement",
    description: "Deploy AI-powered sales automation that works 24/7. Smart follow-ups, abandoned cart recovery, and GPT-powered responses that feel human and convert leads.",
    mainIcon: <Bot className="w-10 h-10" />,
    featureIcons: [
      <Mail key="mail" className="w-5 h-5" />,
      <MessageCircle key="message" className="w-5 h-5" />,
      <ShoppingBag key="shopping" className="w-5 h-5" />,
      <Sparkles key="sparkles" className="w-5 h-5" />
    ],
    features: [
      {
        title: "Welcome Sequences",
        description: "Automated welcome messages that build relationships",
        icon: <Mail className="w-5 h-5" />
      },
      {
        title: "Smart Follow-ups",
        description: "Intelligent scheduling based on user behavior",
        icon: <MessageCircle className="w-5 h-5" />
      },
      {
        title: "Cart Recovery",
        description: "Automated campaigns to recover abandoned purchases",
        icon: <ShoppingBag className="w-5 h-5" />
      },
      {
        title: "GPT Responses",
        description: "AI-powered WhatsApp and Email responses",
        icon: <Sparkles className="w-5 h-5" />
      }
    ],
    metrics: [
      { label: "Response Time", value: "< 30s", icon: "⚡" },
      { label: "Recovery Rate", value: "45%", icon: "�" },
      { label: "AI Accuracy", value: "94%", icon: "🎯" }
    ],
    colorScheme: {
      primary: "from-[var(--color-primary-light)] to-[var(--color-primary)]",
      secondary: "from-[var(--color-primary-light)]/10 to-[var(--color-primary)]/10",
      accent: "[var(--color-primary-light)]",
      background: "bg-gradient-to-br from-[var(--color-primary-light)]/10 via-[var(--color-primary)]/5 to-white",
      border: "border-[var(--color-primary-light)]/30"
    },
    visualElements: {
      pattern: "radial-gradient(circle at 50% 80%, rgba(46, 145, 165, 0.15) 0%, transparent 50%)",
      glow: "shadow-[var(--color-primary-light)]/20"
    }
  },
  {
    id: 4,
    phase: "SCALE",
    title: "Store + Analytics Dashboard",
    subtitle: "Complete business management platform",
    description: "Launch your complete digital business with multi-product store, advanced analytics, and automated post-purchase flows. Track every metric that matters.",
    mainIcon: <BarChart3 className="w-10 h-10" />,
    featureIcons: [
      <ShoppingBag key="bag" className="w-5 h-5" />,
      <Download key="download" className="w-5 h-5" />,
      <TrendingUp key="trending2" className="w-5 h-5" />,
      <Wallet key="wallet" className="w-5 h-5" />
    ],
    features: [
      {
        title: "Multi-Product Store",
        description: "Sell eBooks, courses, physical goods, and services",
        icon: <ShoppingBag className="w-5 h-5" />
      },
      {
        title: "Post-Purchase Automation",
        description: "Thank-you messages, downloads, and delivery info",
        icon: <Download className="w-5 h-5" />
      },
      {
        title: "Revenue Analytics",
        description: "Track sales, conversions, and top products",
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        title: "Digital Wallet",
        description: "Earnings display and instant withdrawals",
        icon: <Wallet className="w-5 h-5" />
      }
    ],
    metrics: [
      { label: "Revenue Growth", value: "340%", icon: "�" },
      { label: "Product Types", value: "4+", icon: "🛍️" },
      { label: "Payout Speed", value: "24h", icon: "💰" }
    ],
    colorScheme: {
      primary: "from-[var(--color-primary-dark)] to-[var(--color-primary)]",
      secondary: "from-[var(--color-primary-dark)]/10 to-[var(--color-primary)]/10",
      accent: "[var(--color-primary-dark)]",
      background: "bg-gradient-to-br from-[var(--color-primary-dark)]/10 via-[var(--color-primary)]/5 to-white",
      border: "border-[var(--color-primary-dark)]/30"
    },
    visualElements: {
      pattern: "radial-gradient(circle at 20% 20%, rgba(30, 109, 126, 0.15) 0%, transparent 50%)",
      glow: "shadow-[var(--color-primary-dark)]/20"
    }
  }
];

const AnimatedIcon = ({ children, isActive }: { children: React.ReactNode; isActive: boolean }) => {
  return (
    <div
      className={cn(
        "relative p-4 rounded-2xl transition-all duration-300",
        isActive ? "bg-white shadow-xl scale-105" : "bg-white/50 scale-100"
      )}
    >
      <div className="text-white">
        {children}
      </div>

      {/* Simplified active state */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-primary-light)]/20 to-[var(--color-primary)]/20 transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

const FloatingElements = ({ step, isActive }: { step: WorkflowPhase; isActive: boolean }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {step.featureIcons.map((icon, index) => (
        <div
          key={index}
          className={cn(
            "absolute text-gray-600/70 transition-all duration-500",
            isActive ? "opacity-70 -translate-y-2" : "opacity-30 translate-y-0"
          )}
          style={{
            left: `${15 + index * 20}%`,
            top: `${25 + (index % 2) * 50}%`,
            transitionDelay: `${index * 100}ms`
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

const ModernWorkflowCard = ({
  step,
  isActive
}: {
  step: WorkflowPhase;
  isActive: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative group",
        "bg-white rounded-2xl border transition-all duration-500",
        "hover:shadow-xl",
        step.colorScheme.background,
        isActive
          ? `shadow-2xl ${step.visualElements.glow} ${step.colorScheme.border} scale-101`
          : `shadow-md ${step.colorScheme.border} hover:scale-[1.01]`
      )}
    >
      {/* Modern Phase Badge */}
      <div className="absolute -top-3 left-6">
        <motion.div
          className={cn(
            "px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg backdrop-blur-sm will-change-transform",
            `bg-gradient-to-r ${step.colorScheme.primary}`,
            "border border-white/20"
          )}
          animate={{
            scale: isActive ? 1.02 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          style={{ willChange: 'transform' }}
        >
          {step.phase}
        </motion.div>
      </div>

      {/* Modern Content Layout */}
      <div className="p-8 space-y-8 relative z-10">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <motion.div
              className={cn(
                "p-3 rounded-xl shadow-sm will-change-transform",
                `bg-gradient-to-r ${step.colorScheme.primary}`
              )}
              animate={{
                scale: isActive ? 1.05 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
              style={{ willChange: 'transform' }}
            >
              <div className="text-white">
                {step.mainIcon}
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-base font-medium text-gray-600">
                {step.subtitle}
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            {step.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4">
          {step.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl transition-all duration-300",
                "bg-white/50 hover:bg-white/80 border border-gray-100",
                isActive && "bg-white/80 shadow-sm"
              )}
              style={{ transitionDelay: `${featureIndex * 50}ms` }}
            >
              <div
                className={cn(
                  "p-2 rounded-lg transition-transform duration-200",
                  `bg-gradient-to-r ${step.colorScheme.secondary}`,
                  `text-${step.colorScheme.accent}`,
                  isActive && "scale-105"
                )}
              >
                {feature.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          {step.metrics.map((metric, metricIndex) => (
            <div
              key={metricIndex}
              className={cn(
                "text-center p-3 rounded-lg bg-white/60 border border-gray-100 transition-all duration-300",
                isActive ? "opacity-100 scale-100" : "opacity-80 scale-95"
              )}
              style={{ transitionDelay: `${metricIndex * 50}ms` }}
            >
              <div className="text-lg font-bold text-gray-900 flex items-center justify-center gap-1 mb-1">
                <span>{metric.value}</span>
                <span className="text-base">{metric.icon}</span>
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - No animation, brand colors */}
        <button
          className={cn(
            "flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-semibold",
            "text-white",
            isActive ? "bg-[var(--color-primary)]" : "bg-[var(--color-primary)]",
            "hover:bg-[var(--color-primary-light)]",
            "border-2 border-transparent shadow-sm"
          )}
        >
          <span>Explore {step.phase}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-20"
        style={{
          background: step.visualElements.pattern
        }}
        animate={{
          opacity: isActive ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated Border Glow */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-3xl border-2"
          style={{
            borderImage: `linear-gradient(90deg, transparent, white, transparent) 1`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Inject performance styles
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleElement = document.createElement('style');
      styleElement.textContent = performanceStyles;
      document.head.appendChild(styleElement);
      return () => {
        if (document.head.contains(styleElement)) {
          document.head.removeChild(styleElement);
        }
      };
    }
  }, []);

  // Much simpler scroll tracking using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setActiveStep(stepIndex);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all step elements
    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky-scroll-optimized relative min-h-[500vh] bg-gradient-to-b from-slate-50 via-white to-gray-50"
    >
      {/* Header Section */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Zap className="w-5 h-5" />
              COMPLETE LEAD CAPTURE SYSTEM
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Followers Into
              <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent"> Revenue</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The complete automated workflow from lead capture to sales. Build a system that works 24/7 to convert your audience into paying customers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Alternating Layouts */}
      <div className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {workflowPhases.map((step, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeStep === index;

            return (
              <div key={step.id} className="mb-32 last:mb-0" data-step={index}>
                <div className={cn(
                  "grid lg:grid-cols-2 gap-16 items-center",
                  !isEven && "lg:grid-flow-col-dense"
                )}>

                  {/* Content Card */}
                  <div className={cn(
                    "space-y-8",
                    !isEven && "lg:col-start-2"
                  )}>
                    <ModernWorkflowCard
                      step={step}
                      isActive={isActive}
                    />
                  </div>

                  {/* Sticky Visual */}
                  <div className={cn(
                    "lg:sticky lg:top-32 h-fit",
                    !isEven && "lg:col-start-1"
                  )}>
                    <div
                      className={cn(
                        "relative aspect-square max-w-xl mx-auto transition-transform duration-500 ease-out",
                        isActive ? "scale-102" : "scale-100"
                      )}
                    >
                      {/* Background Orb - Simplified */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full transition-all duration-700",
                          step.colorScheme.background,
                          isActive ? "opacity-40 scale-105" : "opacity-20 scale-100"
                        )}
                      />

                      {/* Central Icon Container - Simplified */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={cn(
                            "w-40 h-40 rounded-full flex items-center justify-center text-white shadow-2xl relative overflow-hidden border-4 border-white/20 transition-all duration-500",
                            `bg-gradient-to-r ${step.colorScheme.primary}`,
                            isActive ? "scale-100 opacity-100" : "scale-95 opacity-80"
                          )}
                        >
                          {/* Dynamic Background Pattern */}
                          <div
                            className={cn(
                              "absolute inset-0 transition-opacity duration-500",
                              isActive ? "opacity-30" : "opacity-20"
                            )}
                            style={{
                              background: step.visualElements.pattern
                            }}
                          />

                          <AnimatedIcon isActive={isActive}>
                            {step.mainIcon}
                          </AnimatedIcon>
                        </div>
                      </div>

                      {/* Floating Social Elements */}
                      <FloatingElements step={step} isActive={isActive} />

                      {/* Simplified Progress Ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-4 border-[var(--color-primary)]/30 animate-pulse" />
                      )}
                    </div>

                    {/* Active Step Info - Simplified animations */}
                    {isActive && (
                      <div
                        className={cn(
                          "mt-12 text-center transition-all duration-500",
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                      >
                        <div
                          className={cn(
                            "inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4",
                            `bg-gradient-to-r ${step.colorScheme.primary}`
                          )}
                        >
                          {step.phase}
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                          {step.subtitle}
                        </p>

                        {/* Metrics - Simplified */}
                        <div className="grid grid-cols-3 gap-6">
                          {step.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className={cn(
                                "text-center transition-all duration-300",
                                isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                              )}
                              style={{ transitionDelay: `${metricIndex * 100}ms` }}
                            >
                              <div className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-1">
                                <span>{metric.value}</span>
                                <span className="text-xl">{metric.icon}</span>
                              </div>
                              <div className="text-sm text-gray-500 font-medium">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-32 bg-gradient-to-br from-[var(--color-primary-light)]/5 via-[var(--color-primary)]/5 to-[var(--color-primary-dark)]/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-light)]/10 via-[var(--color-primary)]/10 to-[var(--color-primary-dark)]/10" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Star className="w-5 h-5" />
              START YOUR AUTOMATION
            </div>

            <h3 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Ready to Automate Your
              <span className="block bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                Lead Generation?
              </span>
            </h3>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators who&apos;ve automated their lead capture and turned followers into consistent revenue streams.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center gap-3"
              >
                <MousePointer2 className="w-6 h-6" />
                Start Lead Automation
              </button>

              <button
                className="border-3 border-[var(--color-primary)] text-[var(--color-primary)] bg-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[var(--color-primary-light)] hover:text-white flex items-center gap-3 shadow-lg"
              >
                <BarChart3 className="w-6 h-6" />
                View Live Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600 text-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 fill-current text-green-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
                <span>10,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-500" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
