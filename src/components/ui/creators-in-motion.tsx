"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Predefined profile data
const businesses = [
    {
        name: "Clara",
        handle: "@clara",
        image: "/assets/creators/clara.jpg",
        store: "https://app.starvlo.com/store/clara",
        storeLabel: "starvlo.com/store/clara",
        role: "Fashion & Lifestyle",
    },
    {
        name: "Larry",
        handle: "@larry",
        image: "/assets/creators/larry.jpg",
        store: "https://app.starvlo.com/store/larry",
        storeLabel: "starvlo.com/store/larry",
        role: "Business Coach",
    },
    {
        name: "Adeyemi",
        handle: "@adeyemi",
        image: "/assets/creators/clement.jpg",
        store: "https://app.starvlo.com/store/adeyemi",
        storeLabel: "starvlo.com/store/adeyemi",
        role: "Digital Creator",
    },
    {
        name: "Lucy",
        handle: "@lucy",
        image: "/assets/creators/lucy.jpg",
        store: "https://app.starvlo.com/store/lucy",
        storeLabel: "starvlo.com/store/lucy",
        role: "Content Strategist",
    }
];

// Reusable card component
// The blur issue occurs because Next.js loads a small image for the container 
// then CSS scaling blows it up. Providing sizes="100vw" and quality=100 for the center image fixes this!
const CreatorCard = ({ creator, isCenter = false }: { creator: typeof CREATORS[0]; isCenter?: boolean }) => {
    return (
        <div className="group relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-gray-100 cursor-pointer">
            <Image
                src={creator.image}
                alt={creator.name}
                fill
                sizes={isCenter ? "100vw" : "(max-width: 768px) 33vw, 20vw"}
                quality={isCenter ? 100 : 75}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={isCenter}
            />
            {/* Always visible Arrow Icon indicator */}
            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-1.5 md:p-2 border border-white/30 text-white shadow-lg z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-0">
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 z-20">
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{creator.name}</h3>
                <p className="text-white/80 text-xs md:text-sm mb-3">{creator.role}</p>

                <Link
                    href={creator.store}
                    target="_blank"
                    className="inline-flex items-center justify-center w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl py-2.5 text-white text-xs md:text-sm font-semibold transition-colors"
                >
                    Visit Store
                </Link>
            </div>
        </div>
    );
};


export default function CreatorsInMotion() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within this 300vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ─── Center Image (The Scaler) ───────────────────────────────
    // Starts massive (scale 5) and shrinks to normal (scale 1) by 40% scroll
    const scalerScale = useTransform(scrollYProgress, [0, 0.4], [5, 1]);

    // ─── Layer 1 (Inner Ring) ────────────────────────────────────
    const layer1Opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
    const layer1Scale = useTransform(scrollYProgress, [0.15, 0.5], [0.8, 1]);

    // ─── Layer 2 (Outer Ring) ────────────────────────────────────
    const layer2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const layer2Scale = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1]);

    // ─── Text / Header ───────────────────────────────────────────
    // Instead of fading out, we just slide it up towards the top of the screen to make room for the grid
    const textY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
    const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    return (
        <section ref={containerRef} className="relative w-full h-[300vh] bg-[#F7FEFF] -mt-[40vh] md:mt-0 pt-[40vh] md:pt-0">

            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Main Header — Slides up but stays visible */}
                <motion.div
                    style={{ y: textY, scale: textScale }}
                    className="absolute z-40 text-center px-6 flex flex-col items-center"
                >
                    <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-white/80 backdrop-blur-xl px-10 py-6 rounded-3xl shadow-2xl border border-gray-200/50">
                        businessesin motion.
                    </h2>
                    <p className="mt-4 text-gray-600 md:text-lg font-medium bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-sm">
                        Join thousands worldwide.
                    </p>
                </motion.div>

                {/* The Grid Container */}
                <div className="relative w-[95vw] md:w-[90vw] max-w-[1400px] aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/7] flex items-center justify-center">

                    {/* LAYER 2 (Outer Ring) */}
                    <motion.div
                        style={{ opacity: layer2Opacity, scale: layer2Scale }}
                        className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 grid-rows-3 gap-2 sm:gap-4 md:gap-6 w-full h-full z-10"
                    >
                        {/* Only Lucy in outer ring */}
                        <div className="col-start-1 md:col-start-1 row-start-3 relative"><CreatorCard creator={CREATORS[3]} /></div>
                    </motion.div>

                    {/* LAYER 1 (Inner Ring) */}
                    <motion.div
                        style={{ opacity: layer1Opacity, scale: layer1Scale }}
                        className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 grid-rows-3 gap-2 sm:gap-4 md:gap-6 w-full h-full z-20 pointer-events-none"
                    >
                        <div className="col-start-1 md:col-start-2 row-start-1 relative pointer-events-auto"><CreatorCard creator={CREATORS[1]} /></div>
                        <div className="col-start-3 md:col-start-4 row-start-3 relative pointer-events-auto"><CreatorCard creator={CREATORS[2]} /></div>
                    </motion.div>

                    {/* THE SCALER (Center Image) */}
                    <motion.div
                        style={{ scale: scalerScale }}
                        className="absolute z-30 w-[30%] md:w-[20%] h-[33.3%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform origin-center flex items-center justify-center"
                    >
                        <CreatorCard
                            isCenter
                            creator={CREATORS[0]} // Clara
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
