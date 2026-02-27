"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MessageSquare,
    Zap,
    CalendarCheck,
    BarChart3,
    ShieldCheck,
} from "lucide-react";

const FEATURES = [
    {
        index: 0,
        label: "01 — Unified Inbox",
        title: "Every DM.\nOne place.",
        subtitle:
            "Connect Instagram, WhatsApp, and your landing pages into a single AI-powered inbox. Never miss a lead again.",
        icon: MessageSquare,
        accent: "#0D9488", // Teal 600
        bg: "#F0FDFA", // Teal 50
        stat: "3×",
        statLabel: "faster response",
        visual: (
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
                {[
                    { src: "https://cdn.simpleicons.org/instagram/white", name: "Instagram", msg: "Hey, I saw your post...", time: "2m ago", dot: "#E1306C" },
                    { src: "https://cdn.simpleicons.org/whatsapp/white", name: "WhatsApp", msg: "Are you still open for...", time: "5m ago", dot: "#25D366" },
                    { src: "https://cdn.simpleicons.org/messenger/white", name: "Facebook", msg: "What's the price for...", time: "9m ago", dot: "#0084FF" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: i * 0.12, type: "spring", stiffness: 80, damping: 16 }}
                        className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm"
                    >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: item.dot, border: `1.5px solid ${item.dot}55` }}>
                            <img src={item.src} alt={item.name} className="w-4 h-4 object-contain brightness-0 invert" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 text-xs font-semibold">{item.name}</span>
                                <span className="text-gray-400 text-[10px]">{item.time}</span>
                            </div>
                            <p className="text-gray-500 text-xs truncate mt-0.5">{item.msg}</p>
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6 }}
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: item.dot }}
                        />
                    </motion.div>
                ))}
            </div>
        ),
    },
    {
        index: 1,
        label: "02 — Instant Reply",
        title: "Replies in seconds.\nNot hours.",
        subtitle:
            "Your AI agent responds instantly, 24/7 — qualifying leads with natural conversation while you sleep.",
        icon: Zap,
        accent: "#D97706", // Amber 600
        bg: "#FFFBEB", // Amber 50
        stat: "24/7",
        statLabel: "always on",
        visual: (
            <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
                {[
                    { role: "lead", msg: "Hey! Saw your post. How much is the workshop?", delay: 0 },
                    { role: "ai", msg: "Hi! It's $297 — designed for agencies & personal brands. Which are you?", delay: 0.2 },
                    { role: "lead", msg: "Agency! We do social media for e-comm brands.", delay: 0.4 },
                    { role: "ai", msg: "Perfect fit! Booking you a quick call with the founder 👇", delay: 0.6 },
                ].map((m, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: m.delay, type: "spring", stiffness: 90, damping: 18 }}
                        className={`flex ${m.role === "ai" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${m.role === "ai"
                            ? "bg-amber-100 text-amber-900 font-medium rounded-tr-sm border border-amber-200"
                            : "bg-white text-gray-700 border border-gray-100 rounded-tl-sm"
                            }`}>{m.msg}</div>
                    </motion.div>
                ))}
            </div>
        ),
    },
    {
        index: 2,
        label: "03 — Smart Qualify",
        title: "Only talk to people\nready to buy.",
        subtitle:
            "Your AI asks the right questions, filters out tyre-kickers, and only forwards warm leads to your calendar.",
        icon: ShieldCheck,
        accent: "#7C3AED", // Violet 600
        bg: "#F5F3FF", // Violet 50
        stat: "68%",
        statLabel: "less wasted time",
        visual: (
            <div className="w-full max-w-xs mx-auto flex flex-col gap-2">
                {[
                    { q: "Monthly revenue?", a: "$10k–$50k", score: 82 },
                    { q: "Ready to start?", a: "This month", score: 94 },
                    { q: "Used AI tools before?", a: "Yes, eager to upgrade", score: 91 },
                ].map((item, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: i * 0.14, type: "spring", stiffness: 80, damping: 16 }}
                        className="bg-white border border-violet-100 rounded-xl p-3 shadow-sm">
                        <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">{item.q}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-900 text-xs font-semibold">{item.a}</span>
                            <span className="text-xs font-bold text-violet-600">+{item.score}%</span>
                        </div>
                        <div className="mt-2 h-1 bg-violet-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.score}%` }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.9, delay: i * 0.14 + 0.3, ease: "easeOut" }}
                                className="h-full rounded-full bg-violet-500"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        ),
    },
    {
        index: 3,
        label: "04 — Auto Book",
        title: "Calls booked.\nNo back-and-forth.",
        subtitle:
            "Starvlo shows your live availability and books the call in the same thread — synced with Google Calendar.",
        icon: CalendarCheck,
        accent: "#059669", // Emerald 600
        bg: "#ECFDF5", // Emerald 50
        stat: "2 min",
        statLabel: "avg. to booking",
        visual: (
            <div className="bg-white border border-emerald-100 rounded-2xl p-4 w-full max-w-xs mx-auto shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-xs font-medium">Pick a time</span>
                    <span className="text-gray-900 text-xs font-bold">March 2025</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                    {["Mon 3", "Tue 4", "Wed 5", "10:00", "11:30", "14:00"].map((slot, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: i * 0.06, type: "spring", stiffness: 120 }}
                            className={`text-center py-1.5 rounded-lg text-xs font-medium border cursor-pointer hover:bg-emerald-50 ${i === 4 ? "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-500" : "bg-gray-50 text-gray-600 border-gray-100"
                                }`}>{slot}</motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Cal" className="w-4 h-4" />
                    <span className="text-emerald-700 text-xs font-semibold">Confirmed · Tue 4, 11:30am</span>
                </motion.div>
            </div>
        ),
    },
    {
        index: 4,
        label: "05 — Analytics",
        title: "See what's\nactually working.",
        subtitle:
            "Track lead sources, reply rates, bookings and revenue influenced — all in one clean dashboard.",
        icon: BarChart3,
        accent: "#0284C7", // Sky 600
        bg: "#F0F9FF", // Sky 50
        stat: "4.1×",
        statLabel: "conversion lift",
        visual: (
            <div className="w-full max-w-xs mx-auto flex flex-col gap-3">
                {[
                    { label: "DMs Captured", value: "1,284", change: "+24%", color: "#0284C7", bg: "#E0F2FE" },
                    { label: "Qualified", value: "847", change: "+18%", color: "#7C3AED", bg: "#EDE9FE" },
                    { label: "Calls Booked", value: "312", change: "+41%", color: "#059669", bg: "#D1FAE5" },
                    { label: "Revenue", value: "$62,400", change: "+4.1×", color: "#D97706", bg: "#FEF3C7" },
                ].map((row, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 80, damping: 16 }}
                        className="flex items-center justify-between bg-white border border-sky-100 rounded-xl px-4 py-2.5 shadow-sm">
                        <span className="text-gray-500 text-xs font-medium">{row.label}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-900 text-sm font-bold">{row.value}</span>
                            <span className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                                style={{ color: row.color, backgroundColor: row.bg }}>{row.change}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),
    },
];

// ─── Section intro ───────────────────────────────────────────────
function SectionHeader() {
    return (
        <section
            className="h-screen w-full grid place-content-center sticky top-0 overflow-hidden"
            style={{ backgroundColor: "#F8FAFC", zIndex: 0 }}
        >
            {/* Grid background */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
                    backgroundSize: "54px 54px",
                    maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)",
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 text-center px-6"
            >
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                    How Starvlo works
                </p>
                <h2 className="text-gray-900 font-bold leading-tight tracking-tight"
                    style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
                    The full system,<br />
                    <span style={{ color: "var(--color-primary)" }}>from DM to deal.</span>
                </h2>
                <p className="text-gray-500 mt-4 text-base font-medium">Scroll to explore each step ↓</p>
            </motion.div>
        </section>
    );
}

// ─── Main export ─────────────────────────────────────────────────
export default function StickyFeaturesSection() {
    return (
        // NOTE: The sticky effect requires this section is NOT inside an overflow:hidden ancestor.
        // If cards don't stack, ensure the parent has no overflow:hidden.
        <div>
            {/* Intro card */}
            <SectionHeader />

            {/* Feature cards — each is h-screen sticky top-0, stacking on top of the previous */}
            {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                    <section
                        key={feature.index}
                        className="h-screen w-full sticky top-0 overflow-hidden border-t border-gray-200/60 rounded-tr-[2rem] rounded-tl-[2rem]"
                        style={{
                            backgroundColor: feature.bg,
                            zIndex: 1 + i,
                            boxShadow: "0 -12px 40px rgba(0,0,0,0.04)",
                        }}
                    >
                        {/* Ambient glow */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{ background: `radial-gradient(circle at 70% 50%, white 0%, transparent 60%)` }} />

                        {/* Grid pattern */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
                                backgroundSize: "54px 54px",
                            }}
                        />

                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-1"
                            style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}88, transparent)` }} />

                        {/* Content */}
                        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 gap-8 items-center">

                            {/* Left: copy */}
                            <div className="flex flex-col justify-center py-12 lg:py-0">
                                {/* Label */}
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.4 }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit shadow-sm bg-white"
                                    style={{ color: feature.accent }}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {feature.label}
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                    className="text-gray-900 font-bold leading-[1.08] tracking-tight mb-4"
                                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                                >
                                    {feature.title.split("\n").map((line, j) => (
                                        <span key={j} className="block">{line}</span>
                                    ))}
                                </motion.h2>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-gray-600 font-medium text-base leading-relaxed max-w-sm mb-8"
                                >
                                    {feature.subtitle}
                                </motion.p>

                                {/* Stat */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    className="flex items-end gap-2 pt-6 border-t border-gray-200/60"
                                >
                                    <span className="font-black leading-none"
                                        style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: feature.accent }}>
                                        {feature.stat}
                                    </span>
                                    <span className="text-gray-500 font-medium text-sm mb-1.5">{feature.statLabel}</span>
                                </motion.div>
                            </div>

                            {/* Right: animated visual */}
                            <div className="flex lg:flex items-center justify-center p-4 lg:p-0">
                                {feature.visual}
                            </div>
                        </div>

                    </section>
                );
            })}
        </div>
    );
}
