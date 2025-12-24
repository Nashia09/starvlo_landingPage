"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.35 0-4.255-1.905-4.255-4.255 0-2.349 1.905-4.255 4.255-4.255 2.35 0 4.255 1.905 4.255 4.255 0 2.35-1.905 4.255-4.255 4.255zm4.425-7.686c-.55 0-.996-.446-.996-.996 0-.549.445-.996.996-.996.55 0 .996.446.996.996 0 .55-.446.996-.996.996zm-7.67 3.431c0 1.791 1.453 3.244 3.245 3.244 1.791 0 3.244-1.453 3.244-3.244 0-1.791-1.453-3.244-3.244-3.244-1.792 0-3.245 1.453-3.245 3.244z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.21-1.6-1.21-1.6-.99-.67.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.97 1.65 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.42-.27-4.96-1.21-4.96-5.38 0-1.19.42-2.16 1.12-2.92-.11-.28-.49-1.4.11-2.91 0 0 .91-.29 3 1.12a10.44 10.44 0 012.75-.37c.93 0 1.87.13 2.75.37 2.08-1.41 3-.12 3-.12.59 1.51.22 2.63.1 2.91.7.76 1.12 1.73 1.12 2.92 0 4.18-2.54 5.11-4.97 5.38.39.34.74 1 .74 2.02v3c0 .29.19.62.74.52A11 11 0 0012 1.27" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
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
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
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
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
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
