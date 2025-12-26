import React from "react";
import { notFound } from "next/navigation";
import SlugPageClient from "./slug-page-client";

// Define page data for different slugs
const pageData = {
  "about": {
    title: "About Starvlo",
    subtitle: "Starvlo is your creator store—build and sell digital products, services, and memberships without code.",
    content: [
      "Founded in 2023, Starvlo simplifies selling online for creators and small businesses. We bring storefront, checkout, delivery, and automations into one place.",
      "Set up your store in minutes, create beautiful offers, and share your link‑in‑bio to start selling fast.",
      "Delight buyers with 1‑Tap Checkout and instant delivery. Connect Instagram to enable Auto DM and comment automations that move followers into your store.",
      "Stop juggling tools—Starvlo is an all‑in‑one solution to run your business and grow your audience.",
      "Join creators and teams using Starvlo to launch offers, grow audiences, and sell—without the complexity."
    ]
  },
  "privacy": {
    title: "Privacy Policy",
    subtitle: "Last Updated: December 19, 2025",
    content: []
  },
  "terms": {
    title: "Terms of Service",
    subtitle: "Last Updated: December 19, 2025",
    content: []
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
  const html = slug === "privacy"
    ? `
      <div class=\"max-w-3xl mx-auto text-gray-900\">
        <h2 class=\"text-2xl font-semibold mt-8\">1. Introduction</h2>
        <p class=\"mt-4\">Welcome to Starvlo LLC (\"Starvlo,\" \"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered lead capture and sales automation platform, including our Instagram auto DM and auto comment features.</p>
        <p class=\"mt-2\">By using Starvlo, you agree to the collection and use of information in accordance with this policy.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">2. Information We Collect</h2>
        <h3 class=\"text-xl font-semibold mt-6\">2.1 Personal Information</h3>
        <p class=\"mt-2\">We collect information that you provide directly to us, including:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Name and email address</li>
          <li>Account credentials</li>
          <li>Payment information (processed securely through Stripe and Paystack)</li>
          <li>Business information and preferences</li>
          <li>Communication preferences</li>
        </ul>
        <h3 class=\"text-xl font-semibold mt-6\">2.2 Social Media Information</h3>
        <p class=\"mt-2\">When you connect your Instagram account to use our automation features, we collect:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Instagram username and profile information</li>
          <li>Access tokens for API integration</li>
          <li>Instagram posts, comments, and direct messages (only as necessary to provide automation services)</li>
          <li>Follower interactions and engagement data</li>
        </ul>
        <h3 class=\"text-xl font-semibold mt-6\">2.3 Automatically Collected Information</h3>
        <p class=\"mt-2\">We automatically collect certain information when you use our platform:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Device information (browser type, operating system)</li>
          <li>IP address and location data</li>
          <li>Usage data and analytics</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2 class=\"text-2xl font-semibold mt-8\">3. How We Use Your Information</h2>
        <p class=\"mt-2\">We use the collected information for the following purposes:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>To provide and maintain our services</li>
          <li>To process your transactions and manage your account</li>
          <li>To enable Instagram auto DM and auto comment automation features</li>
          <li>To send automated messages and responses on your behalf</li>
          <li>To analyze and improve our platform performance</li>
          <li>To communicate with you about updates, features, and support</li>
          <li>To detect, prevent, and address technical issues or fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 class=\"text-2xl font-semibold mt-8\">4. Instagram Integration and Data Usage</h2>
        <p class=\"mt-2\">Our Instagram automation features require access to your Instagram account. Here's how we handle this data:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>We use Instagram's official Graph API and comply with Meta's Platform Terms</li>
          <li>We only access data necessary to provide automation services (DMs, comments, posts)</li>
          <li>Your Instagram credentials are never stored on our servers</li>
          <li>Access tokens are encrypted and securely stored</li>
          <li>You can revoke access at any time through your Instagram settings or our platform</li>
          <li>We do not sell or share your Instagram data with third parties for marketing purposes</li>
        </ul>

        <h2 class=\"text-2xl font-semibold mt-8\">5. Data Sharing and Disclosure</h2>
        <p class=\"mt-2\">We may share your information in the following circumstances:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li><span class=\"font-semibold\">Service Providers:</span> We share data with trusted third-party service providers (e.g., Stripe, Paystack, Meta/Facebook) who assist in operating our platform</li>
          <li><span class=\"font-semibold\">Legal Requirements:</span> We may disclose information if required by law or to protect our rights</li>
          <li><span class=\"font-semibold\">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
          <li><span class=\"font-semibold\">With Your Consent:</span> We may share information with your explicit consent</li>
        </ul>

        <h2 class=\"text-2xl font-semibold mt-8\">6. Data Security</h2>
        <p class=\"mt-2\">We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Encryption of data in transit and at rest</li>
          <li>Secure authentication and access controls</li>
          <li>Regular security audits and monitoring</li>
          <li>Compliance with industry-standard security practices</li>
        </ul>
        <p class=\"mt-2\">However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">7. Data Retention</h2>
        <p class=\"mt-2\">We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or regulatory purposes.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">8. Your Rights and Choices</h2>
        <p class=\"mt-2\">You have the following rights regarding your personal information:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li><span class=\"font-semibold\">Access:</span> Request access to your personal information</li>
          <li><span class=\"font-semibold\">Correction:</span> Request correction of inaccurate information</li>
          <li><span class=\"font-semibold\">Deletion:</span> Request deletion of your personal information</li>
          <li><span class=\"font-semibold\">Data Portability:</span> Request a copy of your data in a portable format</li>
          <li><span class=\"font-semibold\">Opt-Out:</span> Opt-out of marketing communications</li>
          <li><span class=\"font-semibold\">Revoke Consent:</span> Disconnect your Instagram account at any time</li>
        </ul>
        <p class=\"mt-2\">To exercise these rights, please contact us at <a href=\"mailto:privacy@starvlo.com\" class=\"underline\">privacy@starvlo.com</a> or through your account settings.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">9. Cookies and Tracking Technologies</h2>
        <p class=\"mt-2\">We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our services.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">10. Third-Party Services</h2>
        <p class=\"mt-2\">Our platform integrates with third-party services, including:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Instagram/Meta Platform</li>
          <li>Stripe (payment processing)</li>
          <li>Paystack (payment processing)</li>
          <li>Google services (authentication, calendar)</li>
        </ul>
        <p class=\"mt-2\">These third-party services have their own privacy policies. We encourage you to review them:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Meta Privacy Policy: <a href=\"https://www.facebook.com/privacy/policy\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.facebook.com/privacy/policy</a></li>
          <li>Google Privacy Policy: <a href=\"https://policies.google.com/privacy\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://policies.google.com/privacy</a></li>
          <li>Stripe Privacy Policy: <a href=\"https://stripe.com/privacy\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://stripe.com/privacy</a></li>
          <li>Paystack Privacy Policy: <a href=\"https://paystack.com/privacy\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://paystack.com/privacy</a></li>
        </ul>

        <h3 class=\"text-xl font-semibold mt-6\">10.1 Google OAuth and API Usage</h3>
        <p class=\"mt-2\">When you sign in with Google or connect Google services, we use Google OAuth 2.0 for authentication. We may request access to:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Your basic profile information (name, email address, profile picture)</li>
          <li>Google Calendar (if you choose to integrate calendar features)</li>
        </ul>
        <p class=\"mt-2\">We only request the minimum permissions necessary to provide the features you've chosen to use. You can revoke our access to your Google account at any time through your Google Account settings at <a href=\"https://myaccount.google.com/permissions\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://myaccount.google.com/permissions</a>.</p>
        <p class=\"mt-2\">Starvlo's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. See: <a href=\"https://developers.google.com/terms/api-services-user-data-policy\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://developers.google.com/terms/api-services-user-data-policy</a></p>
        <h2 class=\"text-2xl font-semibold mt-8\">11. Children's Privacy</h2>
        <p class=\"mt-2\">Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">12. International Data Transfers</h2>
        <p class=\"mt-2\">Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">13. Changes to This Privacy Policy</h2>
        <p class=\"mt-2\">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. We encourage you to review this Privacy Policy periodically for any changes.</p>

        <h2 class=\"text-2xl font-semibold mt-8\">14. Contact Us</h2>
        <p class=\"mt-2\">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Company: Starvlo LLC</li>
          <li>Email: <a href=\"mailto:privacy@starvlo.com\" class=\"underline\">privacy@starvlo.com</a></li>
          <li>Email: <a href=\"mailto:support@starvlo.com\" class=\"underline\">support@starvlo.com</a></li>
          <li>Website: <a href=\"https://starvlo.com\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://starvlo.com</a></li>
          <li>App: <a href=\"https://app.starvlo.com\" class=\"underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://app.starvlo.com</a></li>
        </ul>

        <h2 class=\"text-2xl font-semibold mt-8\">15. Compliance with Meta Platform Terms</h2>
        <p class=\"mt-2\">Our Instagram integration complies with Meta's Platform Terms and Policies. We:</p>
        <ul class=\"list-disc pl-6 mt-2 space-y-1\">
          <li>Only use Instagram data to provide services you've requested</li>
          <li>Do not use Instagram data for advertising or marketing without your consent</li>
          <li>Comply with Instagram's rate limits and usage guidelines</li>
          <li>Respect user privacy and data protection requirements</li>
        </ul>

        <p class=\"mt-8 text-sm text-gray-600\">© 2025 Starvlo LLC. All rights reserved.</p>
      </div>
    `
    : slug === "terms"
    ? `
      <div class=\"max-w-3xl mx-auto text-gray-900\">
        <h2 class=\"text-2xl font-semibold mt-8\">1. Acceptance of Terms</h2>
        <p class=\"mt-4\">Welcome to Starvlo LLC (\"Starvlo\"). By accessing or using our AI-powered lead capture and sales automation platform, including our Instagram auto DM and auto comment features, you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use our services.</p>

        <h2 class="text-2xl font-semibold mt-8">2. Description of Service</h2>
        <p class="mt-4">Starvlo provides an AI-powered platform that helps small businesses and creators:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Capture and manage leads</li>
          <li>Automate follow-up sequences</li>
          <li>Automate Instagram direct messages and comments</li>
          <li>Manage conversations and customer relationships</li>
          <li>Create and manage online storefronts</li>
          <li>Process payments and track earnings</li>
          <li>Utilize AI agents for sales automation</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8">3. User Accounts</h2>
        <h3 class="text-xl font-semibold mt-6">3.1 Account Creation</h3>
        <p class="mt-4">To use our services, you must create an account. You agree to:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and update your information to keep it accurate</li>
          <li>Maintain the security of your account credentials</li>
          <li>Be responsible for all activities under your account</li>
          <li>Notify us immediately of any unauthorized access</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6">3.2 Age Requirement</h3>
        <p class="mt-2">You must be at least 18 years old to use our services.</p>

        <h2 class="text-2xl font-semibold mt-8">4. Instagram Integration and Automation</h2>
        <h3 class="text-xl font-semibold mt-6">4.1 Instagram Connection</h3>
        <p class="mt-4">By connecting your Instagram account to Starvlo, you:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Authorize us to access your Instagram account via Meta's official API</li>
          <li>Grant permission to send direct messages and post comments on your behalf</li>
          <li>Acknowledge that you are responsible for all automated messages sent through our platform</li>
          <li>Agree to comply with Instagram's Terms of Service and Community Guidelines</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6">4.2 Automation Responsibilities</h3>
        <p class="mt-4">You are solely responsible for:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>The content of automated messages and comments</li>
          <li>Ensuring your automated messages comply with applicable laws and regulations</li>
          <li>Respecting recipient preferences and privacy</li>
          <li>Not using automation for spam, harassment, or illegal activities</li>
          <li>Monitoring and managing your automation settings</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6">4.3 Platform Compliance</h3>
        <p class="mt-2">We comply with Meta's Platform Terms and Instagram's API policies. However, Instagram may change their policies or restrict API access at any time. We are not responsible for any limitations or restrictions imposed by Instagram.</p>

        <h2 class="text-2xl font-semibold mt-8">5. Acceptable Use Policy</h2>
        <p class="mt-4">You agree NOT to use our services to:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Violate any laws or regulations</li>
          <li>Send spam or unsolicited messages</li>
          <li>Harass, abuse, or harm others</li>
          <li>Impersonate others or provide false information</li>
          <li>Distribute malware or harmful content</li>
          <li>Interfere with or disrupt our services</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Scrape or collect data without permission</li>
          <li>Resell or redistribute our services without authorization</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8">6. Payment and Billing</h2>
        <h3 class="text-xl font-semibold mt-6">6.1 Subscription Plans</h3>
        <p class="mt-2">Starvlo offers various subscription plans. By subscribing, you agree to pay the fees associated with your chosen plan. Fees are billed in advance on a recurring basis (monthly or annually).</p>
        <h3 class="text-xl font-semibold mt-6">6.2 Payment Processing</h3>
        <p class="mt-2">Payments are processed through Stripe and Paystack. You agree to provide accurate payment information and authorize us to charge your payment method for all fees incurred.</p>
        <h3 class="text-xl font-semibold mt-6">6.3 Refunds</h3>
        <p class="mt-2">Refunds are handled on a case-by-case basis. Please contact our support team at <a href="mailto:support@starvlo.com" class="underline">support@starvlo.com</a> for refund requests.</p>
        <h3 class="text-xl font-semibold mt-6">6.4 Cancellation</h3>
        <p class="mt-2">You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period.</p>

        <h2 class="text-2xl font-semibold mt-8">7. Intellectual Property</h2>
        <h3 class="text-xl font-semibold mt-6">7.1 Our Rights</h3>
        <p class="mt-2">All content, features, and functionality of Starvlo, including but not limited to text, graphics, logos, and software, are owned by Starvlo and protected by copyright, trademark, and other intellectual property laws.</p>
        <h3 class="text-xl font-semibold mt-6">7.2 Your Content</h3>
        <p class="mt-2">You retain ownership of any content you create or upload to our platform. By using our services, you grant us a limited license to use, store, and process your content solely to provide our services.</p>

        <h2 class="text-2xl font-semibold mt-8">8. Disclaimers and Limitations of Liability</h2>
        <h3 class="text-xl font-semibold mt-6">8.1 Service Availability</h3>
        <p class="mt-2">Our services are provided "as is" and "as available." We do not guarantee uninterrupted or error-free service. We may modify, suspend, or discontinue any part of our services at any time.</p>
        <h3 class="text-xl font-semibold mt-6">8.2 Third-Party Services</h3>
        <p class="mt-2">We integrate with third-party services (Instagram, Stripe, Paystack, etc.). We are not responsible for the availability, functionality, or policies of these third-party services.</p>
        <h3 class="text-xl font-semibold mt-6">8.3 Limitation of Liability</h3>
        <p class="mt-2">To the maximum extent permitted by law, Starvlo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.</p>

        <h2 class="text-2xl font-semibold mt-8">9. Indemnification</h2>
        <p class="mt-2">You agree to indemnify and hold harmless Starvlo and its affiliates from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.</p>

        <h2 class="text-2xl font-semibold mt-8">10. Termination</h2>
        <p class="mt-2">We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. Upon termination, your right to use our services will immediately cease.</p>

        <h2 class="text-2xl font-semibold mt-8">11. Changes to Terms</h2>
        <p class="mt-2">We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the new Terms.</p>

        <h2 class="text-2xl font-semibold mt-8">12. Governing Law</h2>
        <p class="mt-2">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Starvlo operates, without regard to its conflict of law provisions.</p>

        <h2 class="text-2xl font-semibold mt-8">13. Dispute Resolution</h2>
        <p class="mt-2">Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration, except where prohibited by law. You waive your right to participate in class action lawsuits.</p>

        <h2 class="text-2xl font-semibold mt-8">14. Contact Information</h2>
        <p class="mt-2">If you have any questions about these Terms, please contact us:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Company: Starvlo LLC</li>
          <li>Email: <a href="mailto:support@starvlo.com" class="underline">support@starvlo.com</a></li>
          <li>Email: <a href="mailto:legal@starvlo.com" class="underline">legal@starvlo.com</a></li>
          <li>Website: <a href="https://starvlo.com" class="underline" target="_blank" rel="noopener noreferrer">https://starvlo.com</a></li>
          <li>App: <a href="https://app.starvlo.com" class="underline" target="_blank" rel="noopener noreferrer">https://app.starvlo.com</a></li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8">15. Entire Agreement</h2>
        <p class="mt-2">These Terms, together with our Privacy Policy, constitute the entire agreement between you and Starvlo regarding your use of our services.</p>

        <p class="mt-8 text-sm text-gray-600">© 2025 Starvlo LLC. All rights reserved.</p>
      </div>
    `
    : undefined;

  return <SlugPageClient title={title} subtitle={subtitle} content={content} html={html} />;
}
