"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconBrain, IconPalette, IconLayoutDashboard, IconRocket } from "@tabler/icons-react";

export default function WebsiteGenerator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [timelineRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const features = [
    {
      icon: <IconBrain className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Design",
      description: "Our AI analyzes your business needs and generates a custom website design tailored to your industry.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      icon: <IconPalette className="h-8 w-8 text-[#7CBECE]" />,
      title: "Custom Branding",
      description: "Choose your colors, fonts, and upload your logo to create a website that represents your brand.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      icon: <IconLayoutDashboard className="h-8 w-8 text-emerald-500" />,
      title: "Lead Capture Integration",
      description: "Your generated website comes with our lead capture tools already integrated and ready to go.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    {
      icon: <IconRocket className="h-8 w-8 text-red-500" />,
      title: "Launch in Minutes",
      description: "Go from zero to a professional website in minutes, not days or weeks.",
      image: "https://images.unsplash.com/photo-1596008194705-2091f85afeab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGUlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white py-20 dark:bg-black">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
          >
            Don&apos;t have a website? <span className="text-blue-600 dark:text-blue-400">No problem.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400"
          >
            Generate a complete professional website directly from our platform in minutes.
            Capture leads before you even finish your coffee.
          </motion.p>
        </div>

        <div ref={timelineRef} className="relative mt-16 pb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-24 md:gap-10">
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full md:max-w-2xl">
                <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-44 rounded-lg object-cover shadow-[0_0_15px_rgba(0,0,0,0.1)]" 
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              </div>
            </div>
          ))}

          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 dark:via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#7CBECE] via-[#A1D1D8] to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
            Launch your site now
          </button>
        </motion.div>
      </div>
    </section>
  );
} 