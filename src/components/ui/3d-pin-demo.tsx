"use client";
import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo() {
  const profiles = [
    {
      name: "Clara",
      handle: "@clara",
      followers: "125K+ Followers",
      role: "Fashion & Lifestyle",
      theme: "red",
      image: "/assets/creators/clara.jpg",
      store: "https://app.starvlo.com/store/clara",
      storeLabel: "starvlo.com/store/clara",
      revenue: 145320,
      useCase:
        "Turns profile visits into email subscribers, nurtures with content drip campaigns using Starvlo.",
    },
    
    {
      name: "Larry",
      handle: "@larry",
      followers: "95K+ Followers",
      role: "Business Coach",
      theme: "red",
      image: "/assets/creators/larry.jpg",
      store: "https://app.starvlo.com/store/larry",
      storeLabel: "starvlo.com/store/larry",
      revenue: 98450,
      useCase:
        "Captures program leads from profile traffic and automates discovery call bookings with Starvlo.",
    },
    {
      name: "Adeyemi",
      handle: "@adeyemi",
      followers: "150K+ Followers",
      role: "Digital Creator",
      theme: "blue",
      image: "/assets/creators/clement.jpg",
      store: "https://app.starvlo.com/store/adeyemi",
      storeLabel: "starvlo.com/store/adeyemi",
      revenue: 178920,
      useCase:
        "Tracks campaign visitors, enriches contact data, and hands qualified leads to sales through Starvlo.",
    },
    {
      name: "Lucy",
      handle: "@lucy",
      followers: "180K+ Followers",
      role: "Content Strategist",
      theme: "blue",
      image: "/assets/creators/lucy.jpg",
      store: "https://app.starvlo.com/store/lucy",
      storeLabel: "starvlo.com/store/lucy",
      revenue: 156000,
      useCase:
        "Monetizes her content strategy guides and consultation calls directly through her Starvlo store.",
    },
  ];

  const track = [...profiles, ...profiles];

  return (
    <section className="relative w-full pt-0 pb-0 md:pb-0 mt-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F7FEFF]" />
      </div>
      <div className="sticky top-0 z-20 w-full bg-gradient-to-b from-black/60 to-transparent backdrop-blur px-6 md:px-10 py-6 md:py-8 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight">Creators in Motion</h2>
        <div className="mx-auto mt-2 h-px w-36 bg-white/40" />
        <p className="mt-3 text-white/90 text-sm md:text-base">Real storefronts, real revenue.</p>
      </div>
      <div className="relative w-full overflow-visible min-h-[28rem] md:min-h-[32rem] pt-24 md:pt-32">
        <div className="w-max inline-flex items-center gap-12 md:gap-16 px-6 md:px-10 animate-scroll">
          {track.map((p, idx) => (
            <PinContainer
              key={idx}
              title={p.storeLabel}
              href={p.store}
              variant="minimal"
              showPin={false}
              interactive={false}
              containerClassName="inline-block mx-8 h-[28rem] md:h-[28rem] w-[18rem] md:w-[20rem]"
            >
              <div className="relative w-[18rem] md:w-[20rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center"
                  priority
                />

                <div className="absolute top-4 left-6 right-6 text-center">
                  <div className="text-white text-lg font-semibold">{p.name}</div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                  <div className="relative z-10 h-full w-full flex flex-col justify-center items-center px-6 text-center">
                    <div className="text-white text-base md:text-lg font-semibold">{p.name}</div>
                    <p className="mt-2 text-white/80 text-sm md:text-base">{p.useCase}</p>
                    <div className="mt-4 inline-flex items-center rounded-full bg-white/90 text-black px-4 py-2 text-sm font-medium shadow">
                      {p.storeLabel}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8">
                      <Image src={p.image} alt={p.name} fill className="rounded-full object-cover" />
                    </div>
                    <div className="text-white text-sm font-medium">
                      {p.storeLabel}
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
  
