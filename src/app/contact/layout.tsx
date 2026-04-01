import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get in Touch with Starvlo",
  description:
    "Contact the Starvlo team for questions about our AI lead generation platform, pricing, or partnership opportunities. We'd love to hear from you.",
  alternates: {
    canonical: "https://starvlo.com/contact",
  },
  openGraph: {
    title: "Contact Starvlo | AI Lead Generation Platform",
    description:
      "Have questions? Reach out to the Starvlo team. We're here to help you capture, score, and convert more leads.",
    url: "https://starvlo.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
