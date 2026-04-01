import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Plans for Every Business",
  description:
    "Starvlo pricing plans for startups, growing businesses, and enterprises. Start free with no credit card required. Capture and convert leads with AI automation.",
  alternates: {
    canonical: "https://starvlo.com/pricing",
  },
  openGraph: {
    title: "Starvlo Pricing | Plans for Every Business",
    description:
      "Flexible pricing for lead generation & CRM. Start free — no credit card required. Scale as you grow with Starvlo.",
    url: "https://starvlo.com/pricing",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
