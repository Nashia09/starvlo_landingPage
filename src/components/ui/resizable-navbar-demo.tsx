"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Custom Starvlo logo component
const LeadCaptureLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-12 flex items-center text-black flex-shrink-0"
    >
      <Image
        src="/assets/logo.png"
        alt="Starvlo logo"
        width={40}
        height={40}
        sizes="40px"
        priority
        className="rounded-md origin-left scale-[2] sm:scale-[2.25] md:scale-[2.5] lg:scale-[2.75]"
      />
    </Link>
  );
};

export default function NavbarDemo() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>('');
  const pathname = usePathname();

  // Listen for hash changes to update active state
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    if (typeof window !== 'undefined') {
      setCurrentHash(window.location.hash);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Function to determine if a navigation item is active
  const isNavItemActive = (href: string, sectionId?: string) => {
    if (sectionId) {
      // For homepage sections, check if we're on homepage and hash matches
      if (pathname === '/') {
        return currentHash === `#${sectionId}` || (sectionId === 'features' && !currentHash);
      }
      return false;
    }
    // For regular pages, check if pathname matches
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Simple nav items without dropdowns - removed to avoid duplicates
  const navItems: { name: string; link: string }[] = [];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Custom LeadCapture logo */}
          <LeadCaptureLogo />

          <div className="hidden flex-1 flex-row items-center justify-center text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex">
            <Menu setActive={setActive}>
              <Link href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                  isActive={isNavItemActive('/')}
                  href="/"
                >

                </MenuItem>
              </Link>
              <Link href="/pricing">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Pricing"
                  isActive={isNavItemActive('/pricing')}
                  href="/pricing"
                >

                </MenuItem>
              </Link>
              <Link href="/contact">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Contact"
                  isActive={isNavItemActive('/contact')}
                  href="/contact"
                >

                </MenuItem>
              </Link>
              
            </Menu>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <NavbarButton href="https://starvlo-app.vercel.app/" variant="gradient">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <LeadCaptureLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`relative block py-2 px-4 rounded-lg ${
                isNavItemActive('/')
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-medium'
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              <span className="block">Home</span>
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`relative block py-2 px-4 rounded-lg ${
                isNavItemActive('/pricing')
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-medium'
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              <span className="block">Pricing</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`relative block py-2 px-4 rounded-lg ${
                isNavItemActive('/contact')
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-medium'
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              <span className="block">Contact</span>
            </Link>
            
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="https://starvlo-app.vercel.app/"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                className="w-full"
              >
                Get Started
              </NavbarButton>
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

