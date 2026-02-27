"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Minimal avatars matching the screenshot style
const Avatar = ({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) => (
    <div className={cn("shrink-0 rounded-full bg-[#4a3e32] p-[2px]", className)}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full rounded-full object-cover"
        />
    </div>
);

// ─── Premium typing indicator with staggered sine-eased dots ────
const TypingIndicator = () => (
    <div className="flex gap-1.5 items-center p-4 bg-[#8a6b52] rounded-[1.2rem] rounded-tr-md w-fit shadow-md">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 0.9,
                    delay: i * 0.15,
                    ease: [0.45, 0, 0.55, 1], // sine in-out
                    times: [0, 0.4, 1],
                }}
                className="w-2 h-2 bg-white/70 rounded-full"
            />
        ))}
    </div>
);

// ─── Spring configs for differentiated motion ───────────────────
const leadBubbleTransition = {
    type: "tween" as const,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    duration: 0.38,
};

const aiBubbleTransition = {
    type: "tween" as const,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    duration: 0.42,
};

const exitTransition = {
    duration: 0.22,
    ease: [0.4, 0, 1, 1] as [number, number, number, number],
};

// ─── Scenario data ──────────────────────────────────────────────
const SCENARIOS = [
    // Scenario 1: Medical / Service
    [
        {
            id: "s1-msg-0",
            type: "lead",
            content: (
                <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    Can we see our doctor first thing this morning?
                </p>
            ),
        },
        {
            id: "s1-msg-1",
            type: "ai",
            content: (
                <div className="flex flex-col gap-2 relative z-10 w-full">
                    <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                        Yes, we have a few openings this morning.
                    </p>
                </div>
            ),
        },
        {
            id: "s1-msg-2",
            type: "ai",
            isBookingUI: true,
            content: (
                <div className="flex flex-col gap-5 relative z-10 w-full min-w-[240px] sm:min-w-[280px]">
                    <div className="flex items-center justify-between px-3">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white cursor-pointer"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span className="text-white font-bold tracking-wide text-[14px]">
                            May 13
                        </span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white cursor-pointer"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between gap-1 overflow-hidden font-medium">
                        <div className="bg-[#4ade80] px-3 py-1.5 rounded-xl text-white text-[15px] shadow-sm">
                            08:00
                        </div>
                        <div className="text-white px-2 text-[15px]">08:30</div>
                        <div className="text-white px-2 text-[15px]">09:00</div>
                        <div className="text-white px-2 text-[15px] hidden sm:block">
                            09:30
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "s1-msg-3",
            type: "ai",
            isFinal: true,
            content: (
                <div className="w-full mt-2">
                    <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2.5">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                                alt="Google Calendar"
                                className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm"
                            />
                            <span className="text-[#64564c] font-medium text-[15px]">
                                Appointment booked
                            </span>
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.25, 1] }}
                            transition={{
                                type: "tween",
                                ease: [0.34, 1.56, 0.64, 1],
                                duration: 0.45,
                                delay: 0.3,
                            }}
                            className="w-5 h-5 rounded-full border-[1.5px] border-[#4ade80] flex items-center justify-center"
                        >
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            ),
        },
    ],

    // Scenario 2: E-commerce
    [
        {
            id: "s2-msg-0",
            type: "lead",
            content: (
                <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    Hey, wondering if I should get the Pro or Starter kit...
                </p>
            ),
        },
        {
            id: "s2-msg-1",
            type: "ai",
            content: (
                <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    Both are great! The Pro kit includes everything in Starter, plus 3
                    extra lenses and a carrying case. Are you planning to travel with it?
                </p>
            ),
        },
        {
            id: "s2-msg-2",
            type: "lead",
            content: (
                <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    Yes, taking it to Europe next month!
                </p>
            ),
        },
        {
            id: "s2-msg-3",
            type: "ai",
            content: (
                <div className="flex flex-col gap-2 relative z-10 w-full">
                    <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                        Awesome! Then the Pro kit is definitely the move. We have a 15% off
                        promo code if you buy today.
                    </p>
                </div>
            ),
        },
        {
            id: "s2-msg-4",
            type: "ai",
            isFinal: true,
            content: (
                <div className="w-full mt-2">
                    <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm cursor-pointer hover:bg-white/90 transition-colors">
                        <span className="text-[#64564c] font-medium text-[15px]">
                            Apply PROMO15 at Checkout
                        </span>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.25, 1] }}
                            transition={{
                                type: "tween",
                                ease: [0.34, 1.56, 0.64, 1],
                                duration: 0.45,
                                delay: 0.3,
                            }}
                            className="w-5 h-5 rounded-full border-[1.5px] border-[#4ade80] flex items-center justify-center"
                        >
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            ),
        },
    ],

    // Scenario 3: Real Estate / Agency
    [
        {
            id: "s3-msg-0",
            type: "lead",
            content: (
                <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    I saw your post about adding 50+ leads for that one client. How does
                    that work?
                </p>
            ),
        },
        {
            id: "s3-msg-1",
            type: "ai",
            content: (
                <div className="flex flex-col gap-2 relative z-10 w-full">
                    <p className="text-white text-[14px] sm:text-[16px] leading-[1.4]">
                        Happy to share! We use an automated outreach sequence. I can show
                        you exactly how we set it up on a quick screen share.
                    </p>
                </div>
            ),
        },
        {
            id: "s3-msg-2",
            type: "ai",
            isBookingUI: true,
            content: (
                <div className="flex flex-col gap-5 relative z-10 w-full min-w-[240px] sm:min-w-[280px]">
                    <div className="flex items-center justify-between px-3">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white cursor-pointer"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span className="text-white font-bold tracking-wide text-[14px]">
                            Next Tuesday
                        </span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white cursor-pointer"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between gap-1 overflow-hidden font-medium">
                        <div className="text-white px-2 text-[15px] hidden sm:block">
                            10:00
                        </div>
                        <div className="text-white px-2 text-[15px]">11:00</div>
                        <div className="bg-[#4ade80] px-3 py-1.5 rounded-xl text-white text-[15px] shadow-sm">
                            14:00
                        </div>
                        <div className="text-white px-2 text-[15px]">15:30</div>
                    </div>
                </div>
            ),
        },
        {
            id: "s3-msg-3",
            type: "ai",
            isFinal: true,
            content: (
                <div className="w-full mt-2">
                    <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm cursor-pointer">
                        <div className="flex items-center gap-2.5">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                                alt="Google Calendar"
                                className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm"
                            />
                            <span className="text-[#64564c] font-medium text-[15px]">
                                Strategy Call Confirmed
                            </span>
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.25, 1] }}
                            transition={{
                                type: "tween",
                                ease: [0.34, 1.56, 0.64, 1],
                                duration: 0.45,
                                delay: 0.3,
                            }}
                            className="w-5 h-5 rounded-full border-[1.5px] border-[#4ade80] flex items-center justify-center"
                        >
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            ),
        },
    ],
];

// ─── Main Component ─────────────────────────────────────────────
export function LeadRevenueEngineHero({
    className,
    onScenarioChange,
}: {
    className?: string;
    onScenarioChange?: (scenarioIndex: number) => void;
}) {
    const [visibleItems, setVisibleItems] = useState<
        {
            id: string;
            type: string;
            scenarioIndex: number;
            messageIndex?: number;
        }[]
    >([]);

    useEffect(() => {
        let isActive = true;

        const runSequence = async () => {
            while (isActive) {
                for (
                    let currentScenario = 0;
                    currentScenario < SCENARIOS.length;
                    currentScenario++
                ) {
                    const messages = SCENARIOS[currentScenario];

                    setVisibleItems([]);

                    if (onScenarioChange) {
                        onScenarioChange(currentScenario);
                    }

                    await new Promise((r) => setTimeout(r, 600));

                    for (let i = 0; i < messages.length; i++) {
                        const msg = messages[i];

                        if (msg.type === "ai") {
                            setVisibleItems((prev) => {
                                const keep = prev
                                    .filter((item) => item.type !== "typing")
                                    .slice(-1);
                                return [
                                    ...keep,
                                    {
                                        id: `typing-${currentScenario}-${i}`,
                                        type: "typing",
                                        scenarioIndex: currentScenario,
                                    },
                                ];
                            });

                            await new Promise((r) =>
                                setTimeout(r, i === 0 ? 1200 : 1500)
                            );
                        } else {
                            await new Promise((r) => setTimeout(r, 800));
                        }

                        if (!isActive) return;

                        setVisibleItems((prev) => {
                            const withoutTyping = prev.filter(
                                (item) => item.type !== "typing"
                            );
                            const keep = withoutTyping.slice(-1);
                            return [
                                ...keep,
                                {
                                    id: msg.id,
                                    type: "message",
                                    scenarioIndex: currentScenario,
                                    messageIndex: i,
                                },
                            ];
                        });

                        let readTime = 2500;
                        if (i === 0) readTime = 3000;
                        if (i === messages.length - 1) readTime = 5000;

                        await new Promise((r) => setTimeout(r, readTime));
                        if (!isActive) return;
                    }
                }
            }
        };

        runSequence();

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <div
            className={cn(
                "relative w-full max-w-[500px] mx-auto min-h-[400px] flex items-center justify-center lg:justify-end xl:justify-center p-4",
                className
            )}
        >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.div
                    animate={{ opacity: [0.08, 0.18, 0.08] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                    }}
                    className="absolute w-[100%] h-[100%] rounded-full blur-[100px] bg-[#8a6b52]/30"
                />
            </div>

            {/* Viewport for floating bubbles */}
            <div className="w-full relative z-10 flex flex-col justify-end h-[400px] px-2 sm:px-6 overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                    {visibleItems.map((item) => {
                        if (item.type === "typing") {
                            return (
                                <motion.div
                                    key={item.id}
                                    layout="position"
                                    initial={{ opacity: 0, scale: 0.88, y: 12 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{
                                        opacity: 0,
                                        y: -16,
                                        scale: 0.93,
                                    }}
                                    transition={aiBubbleTransition}
                                    className="flex items-start gap-2.5 w-full mb-4 justify-end"
                                >
                                    <TypingIndicator />
                                    <Avatar
                                        src="https://i.pravatar.cc/100?img=5"
                                        alt="AI Agent"
                                        className="w-7 h-7 sm:w-8 sm:h-8 mt-1"
                                    />
                                </motion.div>
                            );
                        }

                        // Must be a message
                        const msg = SCENARIOS[item.scenarioIndex][item.messageIndex!];
                        const isAI = msg.type === "ai";

                        return (
                            <motion.div
                                key={item.id}
                                layout="position"
                                initial={{
                                    opacity: 0,
                                    x: isAI ? 24 : -24,
                                    y: 12,
                                    scale: 0.94,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -22,
                                    scale: 0.94,
                                    transition: exitTransition,
                                }}
                                transition={
                                    isAI ? aiBubbleTransition : leadBubbleTransition
                                }
                                className={cn(
                                    "flex items-start gap-2.5 w-full mb-4",
                                    isAI ? "justify-end" : "justify-start"
                                )}
                            >
                                {/* Human Avatar on Left */}
                                {!isAI && (
                                    <Avatar
                                        src="https://i.pravatar.cc/100?img=4"
                                        alt="Human Lead"
                                        className="w-7 h-7 sm:w-8 sm:h-8 mt-1"
                                    />
                                )}

                                <div
                                    className={cn(
                                        "flex flex-col gap-1 w-full max-w-[85%]",
                                        isAI ? "items-end" : "items-start"
                                    )}
                                >
                                    <span className="text-white/60 text-xs font-medium px-1 flex items-center gap-1">
                                        {isAI ? (
                                            <>
                                                <Sparkles className="w-3 h-3" /> Agent
                                            </>
                                        ) : (
                                            "Marie"
                                        )}
                                    </span>
                                    <div
                                        className={cn(
                                            "relative p-4 sm:p-5 shadow-lg",
                                            isAI
                                                ? (msg as any).isBookingUI
                                                    ? "bg-[var(--color-primary)] rounded-[1.5rem]"
                                                    : (msg as any).isFinal
                                                        ? "bg-transparent p-0 mt-2"
                                                        : "bg-[var(--color-primary)] rounded-[1.5rem] rounded-tr-sm"
                                                : "bg-white/10 backdrop-blur-md rounded-[1.5rem] rounded-tl-sm border border-white/10"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </div>

                                {/* AI Avatar on Right */}
                                {isAI && (
                                    <Avatar
                                        src="https://i.pravatar.cc/100?img=5"
                                        alt="AI Agent"
                                        className="w-7 h-7 sm:w-8 sm:h-8 mt-1"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
