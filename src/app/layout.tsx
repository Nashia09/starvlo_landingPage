import type { Metadata } from "next";
import "./globals.css";
import NavbarDemo from "@/components/ui/resizable-navbar-demo";
import { LightThemeEnforcer } from "@/components/ui/light-theme-enforcer";
import { outfit, montserrat, poppins } from "@/lib/fonts";
import CookieConsent from "@/components/ui/cookie-consent";
import { ThemeProvider } from "@/lib/theme-context";
import Script from "next/script";

const BASE_URL = "https://starvlo.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Starvlo | AI-Powered Lead Generation & CRM Platform",
    template: "%s | Starvlo",
  },
  description:
    "Starvlo is the AI-powered lead generation and CRM platform. Capture, score, nurture, and convert leads automatically. Smart website builder, lead tracking, and revenue automation — all in one place.",
  keywords: [
    "Starvlo",
    "starvlo.com",
    "lead generation platform",
    "AI lead generation",
    "CRM software",
    "lead capture tool",
    "lead scoring",
    "lead nurturing",
    "sales automation",
    "revenue automation",
    "website builder for leads",
    "landing page builder",
    "AI CRM",
    "automated lead management",
    "lead conversion software",
    "B2B lead generation",
    "small business CRM",
    "sales pipeline management",
    "marketing automation",
  ],
  authors: [{ name: "Starvlo", url: BASE_URL }],
  creator: "Starvlo",
  publisher: "Starvlo",
  category: "Technology",
  applicationName: "Starvlo",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Starvlo",
    title: "Starvlo | AI-Powered Lead Generation & CRM Platform",
    description:
      "Capture, score, and convert leads automatically with Starvlo's AI-powered platform. Smart CRM, landing pages, and revenue automation — all in one place.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starvlo — AI-Powered Lead Generation Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@starvlo",
    creator: "@starvlo",
    title: "Starvlo | AI-Powered Lead Generation & CRM Platform",
    description:
      "Capture, score, and convert leads automatically with Starvlo's AI-powered platform. No lost leads. Just revenue.",
    images: ["/assets/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

// Organization + WebSite structured data for Google Knowledge Panel
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Starvlo",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/logo.png`,
        width: 200,
        height: 60,
      },
      description:
        "Starvlo is an AI-powered lead generation and CRM platform that helps businesses capture, score, nurture, and convert leads automatically.",
      foundingDate: "2024",
      sameAs: [
        "https://twitter.com/starvlo",
        "https://linkedin.com/company/starvlo",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${BASE_URL}/contact`,
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Starvlo",
      description:
        "AI-Powered Lead Generation & CRM Platform",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      name: "Starvlo",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: BASE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free plan available. Premium plans starting from paid tier.",
      },
      description:
        "AI-powered lead generation and CRM software that captures, scores, and converts leads automatically for businesses of all sizes.",
      featureList: [
        "AI Lead Scoring",
        "Lead Capture Forms",
        "CRM Dashboard",
        "Website Builder",
        "Email Automation",
        "Lead Nurturing",
        "Sales Pipeline Management",
        "Revenue Analytics",
      ],
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`light ${outfit.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <ThemeProvider>
          <LightThemeEnforcer />
          <NavbarDemo />
          <div className="pt-20">{children}</div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
