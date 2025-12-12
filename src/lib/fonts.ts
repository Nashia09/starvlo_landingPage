import { Outfit, Montserrat, Poppins } from 'next/font/google';

// Main heading font - Outfit is modern, clean, and professional
export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// Body text font - Montserrat for readability and clean appearance
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Accent font - Poppins for buttons, highlights, and CTAs
export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
}); 