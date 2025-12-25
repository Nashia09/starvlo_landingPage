"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { name: "X", href: "https://x.com/starvlohq", icon: <IconBrandTwitter className="w-5 h-5" /> },
  { name: "Instagram", href: "https://www.instagram.com/starvlohq/", icon: <IconBrandInstagram className="w-5 h-5" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/starvlohq/", icon: <IconBrandLinkedin className="w-5 h-5" /> },
];

export default function Footer() {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  
  const toggleGroup = (index: number) => {
    setExpandedGroup(expandedGroup === index ? null : index);
  };
  
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/logo.png" alt="Logo" width={80} height={80} className="rounded-md" />
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Capture leads. Automate follow-up. Close more sales.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            
          </div>
          
          {/* Mobile accordions */}
          <div className="lg:hidden col-span-1 md:col-span-2 space-y-4">
            {footerLinks.map((group, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4">
                <button
                  onClick={() => toggleGroup(index)}
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="text-sm font-medium uppercase tracking-wide">{group.title}</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: expandedGroup === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-gray-500"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedGroup === index ? "auto" : 0,
                    opacity: expandedGroup === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-2 space-y-2 pl-2">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.name === 'Pricing' ? '/pricing' : link.name === 'Features' ? '/#features' : link.name === 'Contact' ? '/contact' : link.name === 'About' ? '/about' : link.href}
                          className="text-gray-600 hover:text-[var(--color-primary)] dark:text-gray-400 dark:hover:text-[var(--color-primary)] text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Desktop columns */}
          {footerLinks.map((group, index) => (
            <div key={index} className="hidden lg:block">
              <h3 className="text-sm font-medium uppercase tracking-wide mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.name === 'Pricing' ? '/pricing' : link.name === 'Features' ? '/#features' : link.name === 'Contact' ? '/contact' : link.name === 'About' ? '/about' : link.href}
                      className="text-gray-600 hover:text-[var(--color-primary)] dark:text-gray-400 dark:hover:text-[var(--color-primary)] text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {currentYear} Starvlo LLC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
