"use client";

import React from "react";
import { motion } from "motion/react";
import Footer from "@/components/ui/footer";
import { IconCheck, IconPalette, IconTemplate, IconDeviceLaptop, IconBrandGithub, IconCode, IconLayoutDashboard } from "@tabler/icons-react";


export default function WebsiteBuilderPage() {
  const templates = [
    {
      name: "Business",
      description: "Professional design for companies and services",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      features: ["Contact form", "About page", "Services section", "Team profiles"],
    },
    {
      name: "E-commerce",
      description: "Complete online store with product listings",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      features: ["Product catalog", "Shopping cart", "Checkout process", "Customer accounts"],
    },
    {
      name: "Portfolio",
      description: "Showcase your work and creative projects",
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop",
      features: ["Project gallery", "Resume section", "Testimonials", "Contact information"],
    },
    {
      name: "Landing Page",
      description: "High-conversion design focused on a single action",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
      features: ["Call-to-action", "Feature highlights", "Testimonials", "Sign-up form"],
    },
  ];

  const steps = [
    {
      icon: <IconTemplate className="h-8 w-8 text-white" />,
      title: "Choose a template",
      description: "Select from professionally designed templates for your industry",
    },
    {
      icon: <IconPalette className="h-8 w-8 text-white" />,
      title: "Customize design",
      description: "Add your branding, colors, fonts, and content to make it yours",
    },
    {
      icon: <IconLayoutDashboard className="h-8 w-8 text-white" />,
      title: "Add lead capture",
      description: "Integrate our visitor tracking and lead generation tools",
    },
    {
      icon: <IconDeviceLaptop className="h-8 w-8 text-white" />,
      title: "Publish and launch",
      description: "Go live with your new website in just minutes, not days",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="relative overflow-hidden bg-blue-600 py-16 dark:bg-blue-900">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 opacity-20 blur-3xl">
          <div className="h-full w-full rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Website Builder
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg"
            >
              Launch your professional website in minutes with our easy-to-use builder and start capturing leads right away.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400"
          >
            Build your website in four simple steps with no coding required
          </motion.p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute z-10 mt-1.5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  {step.icon}
                </div>
                <div className="relative z-0 rounded-lg border border-gray-200 bg-white p-6 pl-24 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              Choose from beautiful templates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400"
            >
              Start with a professionally designed template and customize it to fit your brand
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={template.image} alt={template.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{template.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
                  <div className="mt-4">
                    <h4 className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Features</h4>
                    <ul className="mt-2 space-y-1">
                      {template.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <IconCheck className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800">
                  <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Use this template
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              For developers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-gray-500 dark:text-gray-400"
            >
              Want more control? Our builder also offers developer-friendly options for customization.
            </motion.p>
            <div className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 flex"
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                  >
                    <IconBrandGithub className="mr-2 h-5 w-5" />
                    View on GitHub
                  </a>
                </div>
                <div className="ml-3">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <IconCode className="mr-2 h-5 w-5" />
                    API Documentation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <pre className="overflow-x-auto text-sm text-gray-800 dark:text-gray-300">
                <code>{`// Example code for LeadCapture API integration

import { LeadCapture } from 'leadcapture-sdk';

// Initialize with your API key
const leadCapture = new LeadCapture({
  apiKey: 'your-api-key',
  site: 'yourwebsite.com'
});

// Start tracking visitors
leadCapture.init();

// Get notified when a new company is identified
leadCapture.on('visitorIdentified', (company) => {
  console.log('New visitor:', company.name);
  // Send to your CRM or trigger custom workflow
});`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-16 dark:bg-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Ready to build your website?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
            >
              Launch your site and start capturing leads in minutes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 shadow hover:bg-gray-50">
                Get started now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 
