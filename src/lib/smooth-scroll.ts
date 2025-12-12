"use client";

/**
 * Smooth scroll utility for navigation
 */
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handle navigation click with smooth scroll
 */
export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  smoothScrollTo(targetId);
};

/**
 * Check if we're on the homepage for conditional navigation
 */
export const isHomePage = () => {
  if (typeof window !== 'undefined') {
    return window.location.pathname === '/';
  }
  return false;
};

/**
 * Navigate to homepage section or external page
 */
export const navigateToSection = (sectionId: string, href?: string) => {
  if (isHomePage() && !href) {
    // We're on homepage, smooth scroll to section
    smoothScrollTo(sectionId);
  } else {
    // Navigate to homepage with hash
    window.location.href = `/#${sectionId}`;
  }
};
