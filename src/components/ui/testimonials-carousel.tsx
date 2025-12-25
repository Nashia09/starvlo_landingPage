'use client';
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "This platform helped me grow my YouTube channel by automating my content workflow. A must-have for creators!",
    name: "Alex Chen",
    company: "YouTube Creator",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    quote:
      "As a small business owner, I finally have a tool that makes managing my online presence easy and effective.",
    name: "Priya Patel",
    company: "Patel's Bakery",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    quote:
      "I love how intuitive the platform is for scheduling and publishing my blog posts. It saves me hours every week!",
    name: "Jordan Lee",
    company: "Travel Blogger",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    quote:
      "Managing my digital marketing campaigns has never been easier. The analytics dashboard is a game changer.",
    name: "Sofia Gomez",
    company: "Freelance Marketer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "I run a small e-commerce shop and this platform helped me automate my social media posts and boost sales.",
    name: "Chris Evans",
    company: "Evans Crafts",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "The collaboration features are perfect for my podcast team. We can plan, edit, and publish episodes all in one place.",
    name: "Maya Singh",
    company: "Podcast Host",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    quote:
      "I'm a solo entrepreneur and this tool keeps my content calendar organized and my audience engaged.",
    name: "Liam O'Connor",
    company: "SoloPreneur",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    quote:
      "The platform's templates make it so easy to create professional-looking posts for my coaching business.",
    name: "Emily Carter",
    company: "Life Coach",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    quote:
      "I recommend this to every SME owner I know. It's the best investment for growing your brand online.",
    name: "Mohammed Al-Farsi",
    company: "Al-Farsi Consulting",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

const NUM_COLS = 3;
const COLUMN_HEIGHT = 480;
const ANIMATION_DURATION = 18; // seconds

// Split testimonials into columns
function splitIntoColumns(arr: Testimonial[], numCols: number): Testimonial[][] {
  const cols: Testimonial[][] = Array.from({ length: numCols }, () => []);
  arr.forEach((item, i) => {
    cols[i % numCols].push(item);
  });
  return cols;
}

const columns = splitIntoColumns(testimonials, NUM_COLS);

export default function TestimonialsCarousel() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50/50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] rounded-2xl mb-6 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        <div className="space-y-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Teams Close Faster
          </h2>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent leading-tight">
            with Starvlo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real results from founders, sales, and marketing teams using AI follow‑ups.
          </p>
        </div>
      </div>
      {/* Enhanced fade effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 via-white/90 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 via-white/90 to-transparent z-20" />

      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <div
        className="mx-auto max-w-7xl px-6 relative"
        style={{ height: `${COLUMN_HEIGHT}px`, overflow: "hidden" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full">
          {columns.map((col, colIdx) => {
            // Duplicate for seamless loop
            const looped = [...col, ...col];
            const isReverse = colIdx % 2 === 1;
            return (
              <div
                key={colIdx}
                className="relative h-full overflow-hidden"
              >
                <div
                  className={`scrolling-col flex flex-col gap-6 h-full items-stretch justify-start`}
                  style={{
                    animation: `${isReverse ? "scroll-vertical-reverse" : "scroll-vertical"} ${ANIMATION_DURATION}s linear infinite`,
                  }}
                >
                  {looped.map((t, i) => (
                    <div
                      key={i}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-7 flex flex-col min-h-[200px] min-w-[370px] h-auto border border-white/50 justify-between overflow-hidden hover:z-20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-white"
                      onMouseEnter={e => {
                        const col = (e.currentTarget.parentElement as HTMLElement);
                        col.style.animationPlayState = 'paused';
                      }}
                      onMouseLeave={e => {
                        const col = (e.currentTarget.parentElement as HTMLElement);
                        col.style.animationPlayState = '';
                      }}
                    >
                      {/* Subtle gradient border on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--color-primary-light)]/20 via-transparent to-[var(--color-primary)]/20 p-[1px]">
                        <div className="w-full h-full bg-white rounded-2xl" />
                      </div>

                      {/* Quote icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <div className="text-gray-700 text-base leading-relaxed flex-1 mb-6 font-medium">
                          &quot;{t.quote}&quot;
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="relative">
                            <img
                              src={t.avatar}
                              alt={t.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary-light)]/20 to-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-base">{t.name}</div>
                            <div className="text-sm text-[var(--color-primary)] font-medium">{t.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .scrolling-col {
          scrollbar-width: none;
          -ms-overflow-style: none;
          will-change: transform;
        }
        .scrolling-col::-webkit-scrollbar {
          display: none;
        }
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-vertical-reverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        /* Pause animation if any card in the column is hovered */
        .scrolling-col:has(.group:hover) {
          animation-play-state: paused;
        }

        /* Smooth transitions for all interactive elements */
        .group {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(10px);
          }
        }
      `}</style>
    </div>
  );
}
