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
      className="relative z-20 mr-12 flex items-center space-x-3 px-2 py-1 text-base md:text-lg font-semibold text-black flex-shrink-0"
    >
      <Image
        src="/assets/logo.png"
        alt="Starvlo logo"
        width={40}
        height={40}
        priority={false}
        className="rounded-md"
      />
      <span className="font-bold text-base md:text-xl bg-gradient-to-r from-[#7CBECE] to-[#5A9BA5] bg-clip-text text-transparent">Starvlo</span>
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
              <Link href="/our-mission">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Our Mission"
                  isActive={isNavItemActive('/our-mission')}
                  href="/our-mission"
                >

                </MenuItem>
              </Link>
              <Link href="/news">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="News"
                  isActive={isNavItemActive('/news')}
                  href="/news"
                >

                </MenuItem>
              </Link>
            </Menu>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <NavbarButton href="/auth" variant="secondary">Login</NavbarButton>
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
              className={`relative block py-2 px-4 rounded-lg transition-colors ${
                isNavItemActive('/')
                  ? 'text-[#7CBECE] bg-[#7CBECE]/10 font-medium'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-gray-100'
              }`}
            >
              <span className="block">Home</span>
            </Link>
            <Link
              href="/our-mission"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`relative block py-2 px-4 rounded-lg transition-colors ${
                isNavItemActive('/our-mission')
                  ? 'text-[#7CBECE] bg-[#7CBECE]/10 font-medium'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-gray-100'
              }`}
            >
              <span className="block">Our Mission</span>
            </Link>
            <Link
              href="/news"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`relative block py-2 px-4 rounded-lg transition-colors ${
                isNavItemActive('/news')
                  ? 'text-[#7CBECE] bg-[#7CBECE]/10 font-medium'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-gray-100'
              }`}
            >
              <span className="block">News</span>
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
                href="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
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

