"use client";

import React from "react";
import { motion } from "motion/react";
import { IconBuilding, IconUser, IconMail, IconPhone, IconBrandLinkedin, IconActivity } from "@tabler/icons-react";

export default function DashboardPage() {
  // Mock data for dashboard
  const recentVisitors = [
    {
      company: "Acme Corporation",
      industry: "Technology",
      location: "San Francisco, CA",
      visits: 12,
      lastVisit: "10 minutes ago",
      pages: ["/pricing", "/features", "/contact"],
    },
    {
      company: "Global Enterprises",
      industry: "Manufacturing",
      location: "Chicago, IL",
      visits: 8,
      lastVisit: "2 hours ago",
      pages: ["/about", "/pricing"],
    },
    {
      company: "Omega Solutions",
      industry: "Consulting",
      location: "New York, NY",
      visits: 15,
      lastVisit: "1 day ago",
      pages: ["/features", "/case-studies", "/pricing", "/contact"],
    },
    {
      company: "Tech Innovators",
      industry: "Software",
      location: "Austin, TX",
      visits: 5,
      lastVisit: "3 days ago",
      pages: ["/features", "/pricing"],
    },
  ];

  const stats = [
    { label: "Total Visitors", value: "2,543", icon: <IconActivity className="h-5 w-5 text-blue-500" /> },
    { label: "Companies Identified", value: "847", icon: <IconBuilding className="h-5 w-5 text-green-500" /> },
    { label: "Leads Generated", value: "124", icon: <IconUser className="h-5 w-5 text-purple-500" /> },
    { label: "Conversion Rate", value: "14.6%", icon: <IconActivity className="h-5 w-5 text-red-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="border-b bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
            <h1 className="text-xl font-bold">LeadCapture</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              <span className="sr-only">Notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.02 2.9c-3.58 0-6.49 2.89-6.49 6.46 0 1.93.84 3.55 2.2 4.73 0 0 .15.16.36.4l-.01 5.73c0 .29.24.53.53.53h7.07c.29 0 .53-.24.53-.53v-6.13s.15-.16.35-.39a6.42 6.42 0 0 0 2.19-4.73c0-3.57-2.9-6.46-6.48-6.46z" />
                <path d="M12.05 22.5c-1.2 0-2.17-.97-2.17-2.17h4.34c0 1.2-.97 2.17-2.17 2.17z" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                <span>John Doe</span>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                  alt="User"
                  className="h-6 w-6 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monitor your website visitors and leads in real-time</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <div className="rounded-full bg-blue-50 p-3 dark:bg-blue-900/20">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 overflow-hidden rounded-lg border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
        >
          <div className="border-b px-6 py-4 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Visitors</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Industry</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Visits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Last Visit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Pages Viewed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                {recentVisitors.map((visitor, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20">
                          <IconBuilding className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{visitor.company}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{visitor.industry}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{visitor.location}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{visitor.visits}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{visitor.lastVisit}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex flex-wrap gap-1">
                        {visitor.pages.map((page, pageIndex) => (
                          <span key={pageIndex} className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                            {page}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="rounded p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="Email">
                          <IconMail className="h-5 w-5" />
                        </button>
                        <button className="rounded p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="Call">
                          <IconPhone className="h-5 w-5" />
                        </button>
                        <button className="rounded p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="LinkedIn">
                          <IconBrandLinkedin className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 