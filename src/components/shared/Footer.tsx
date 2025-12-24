"use client";

import React from "react";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "API", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Academy", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Customers", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Sitemap", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <IconBrandTwitter />, href: "#", label: "Twitter" },
    { icon: <IconBrandLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <IconBrandFacebook />, href: "#", label: "Facebook" },
    { icon: <IconBrandInstagram />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-full bg-gradient-to-br from-[#7CBECE] to-[#5A9BA5]" />
              <h1 className="text-xl font-bold">Starvlo</h1>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Capture leads. Automate follow-up. Close more sales.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-4 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(0, 2).map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.name === 'Pricing' ? '/pricing' : link.name === 'Features' ? '/#features' : link.href}
                          className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(2).map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.name === 'Contact' ? '/contact' : link.name === 'About' ? '/about' : link.href}
                          className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Starvlo, Inc. All rights reserved.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
