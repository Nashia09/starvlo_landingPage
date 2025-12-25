import type { Metadata } from "next";
import "./globals.css";
import NavbarDemo from "@/components/ui/resizable-navbar-demo";
import { LightThemeEnforcer } from "@/components/ui/light-theme-enforcer";
import { outfit, montserrat, poppins } from "@/lib/fonts";
import CookieConsent from "@/components/ui/cookie-consent";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Starvlo - Identify Your Website Visitors",
  description: "Capture Leads. Automate Follow-Up. Close More Sales.",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`light ${outfit.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-white">
          <ThemeProvider>
            <LightThemeEnforcer />
            <NavbarDemo />
            <div className="pt-20">
              {children}
            </div>
            <CookieConsent />
          </ThemeProvider>
      </body>
    </html>
  );
}
