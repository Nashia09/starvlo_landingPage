import React from "react";
import { notFound } from "next/navigation";
import SlugPageClient from "./slug-page-client";

// Define page data for different slugs
const pageData = {
  "about": {
    title: "About LeadCapture",
    subtitle: "LeadCapture is revolutionizing how businesses identify and convert website visitors into qualified leads.",
    content: [
      "Founded in 2023, LeadCapture has quickly become a leader in website visitor identification technology. Our mission is to empower sales and marketing teams with the insights they need to connect with potential customers at the right time, with the right message.",
      "Unlike traditional analytics tools that only show you traffic numbers, LeadCapture reveals the actual companies visiting your website. This empowers your team to focus on high-quality leads that are already showing interest in your products or services.",
      "Our platform is built on cutting-edge technology that combines IP tracking, machine learning, and our proprietary database of company information to provide the most accurate identification possible. We update our database daily to ensure you always have the freshest data.",
      "We believe in privacy-first lead generation. That's why LeadCapture is fully GDPR compliant, identifying companies rather than individuals, while still providing the actionable insights your business needs to grow.",
      "Join thousands of businesses that are using LeadCapture to transform their website traffic into a powerful source of qualified leads."
    ]
  },
  "privacy": {
    title: "Privacy Policy",
    subtitle: "LeadCapture is committed to protecting your privacy and ensuring your data is handled responsibly.",
    content: [
      "At LeadCapture, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      "We collect information about companies, not individuals. Our technology identifies the companies behind IP addresses visiting your website, without collecting personal data about individual visitors.",
      "The data we collect is used solely to provide our services and improve your experience with our platform. We do not sell your data to third parties.",
      "We implement a variety of security measures to maintain the safety of your information. Your data is stored on secure servers and accessed only by authorized personnel.",
      "If you have any questions about our Privacy Policy, please contact our Data Protection Officer at privacy@leadcapture.com."
    ]
  },
  "terms": {
    title: "Terms of Service",
    subtitle: "Please read these terms carefully before using our services.",
    content: [
      "By accessing or using LeadCapture's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "LeadCapture grants you a limited, non-exclusive, non-transferable license to use our services for your internal business purposes.",
      "You retain all rights to your data. By using our services, you grant us a license to use your data solely to provide and improve our services to you.",
      "We reserve the right to modify these terms at any time. We will notify you of any significant changes by posting an update on our website.",
      "If you have any questions about our Terms of Service, please contact our support team at support@leadcapture.com."
    ]
  }
};

// Type for the page data
type PageSlug = keyof typeof pageData;

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Check if the slug exists in our page data
  if (!pageData[slug as PageSlug]) {
    notFound();
  }

  const { title, subtitle, content } = pageData[slug as PageSlug];

  return <SlugPageClient title={title} subtitle={subtitle} content={content} />;
} 