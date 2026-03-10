"use client";

import { TimelineAnimation } from "@/components/ui/timeline-animation";
import { ArrowRight, PencilLine, Zap, Clock, Filter, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import HoverTranslateTwo from "./interactive-card-stack";

const SOURCE_CONFIG: Record<
  string,
  { Icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  Email: { Icon: HiOutlineMail, color: "text-gray-600" },
  Instagram: { Icon: SiInstagram, color: "text-pink-600" },
  WhatsApp: { Icon: SiWhatsapp, color: "text-green-600" },
  "Landing Page": { Icon: TbWorld, color: "text-blue-600" },
};

const LEADS = [
  { id: "1", name: "Isabella Garcia", source: "Email" as const },
  { id: "2", name: "Christopher Thompson", source: "Email" as const },
  { id: "3", name: "Harper Hall", source: "Instagram" as const },
  { id: "4", name: "Joshua Clark", source: "Landing Page" as const },
  { id: "5", name: "Amelia Lee", source: "Email" as const },
  { id: "6", name: "Andrew Martinez", source: "WhatsApp" as const },
  { id: "7", name: "James Walker", source: "Email" as const },
  { id: "8", name: "Ryan Lewis", source: "Instagram" as const },
  { id: "9", name: "Sophie Chen", source: "WhatsApp" as const },
];

const COLUMNS = [
  { key: "new", label: "New", dotColor: "bg-blue-500" },
  { key: "replied", label: "Replied", dotColor: "bg-violet-500" },
  { key: "booked", label: "Booked", dotColor: "bg-indigo-600" },
];

function FlowArrow() {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <path
        d="M0 16h36m0 0l-8-6m8 6l-8 6"
        stroke="url(#arrowGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      />
    </svg>
  );
}

function LeadFunnelKanban() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStage((s) => s + 1), 2800);
    return () => clearInterval(interval);
  }, []);

  const getColumn = (leadIndex: number) => {
    const pos = (stage + leadIndex) % 9;
    if (pos < 3) return 0;
    if (pos < 6) return 1;
    return 2;
  };

  const columnStyles = [
    "from-blue-50 to-blue-50/50 border-blue-100",
    "from-violet-50 to-violet-50/50 border-violet-100",
    "from-indigo-50 to-indigo-50/50 border-indigo-100",
  ];

  return (
    <motion.div
      className="pt-5 space-y-5 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.5 }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 197, 253, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(129, 140, 248, 0.12) 0%, transparent 50%)`,
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 -z-10 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-blue-200">
          <defs>
            <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100/80 w-full sm:w-fit">
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-amber-900/80">
          AI qualifies leads and moves them through your funnel
        </span>
      </div>

      <div className="flex items-stretch gap-2 min-h-[260px] overflow-x-auto pb-2 -mx-1 sm:overflow-visible sm:pb-0 sm:mx-0">
        {COLUMNS.map((col, colIdx) => {
          const cards = LEADS.filter((_, i) => getColumn(i) === colIdx);
          const style = columnStyles[colIdx];

          return (
            <div key={col.key} className="flex items-stretch flex-1 min-w-[160px] sm:min-w-[140px] shrink-0 sm:shrink">
              <div
                className={`flex-1 rounded-2xl border-2 bg-gradient-to-b ${style} p-3 sm:p-5 flex flex-col min-h-[220px] sm:min-h-[240px] relative overflow-hidden w-[160px] sm:w-auto`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    colIdx === 0 ? "bg-blue-400" : colIdx === 1 ? "bg-violet-400" : "bg-indigo-500"
                  }`}
                />
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-3 h-3 rounded-full shrink-0 shadow-sm ${col.dotColor}`}
                  />
                  <span className="text-sm font-semibold text-gray-800">
                    {col.label}
                  </span>
                </div>
                <div className="flex flex-col gap-2 flex-1 min-h-[160px]">
                  {cards.map((lead) => {
                    const { Icon: SourceIcon, color } =
                      SOURCE_CONFIG[lead.source] ?? SOURCE_CONFIG.Email;

                    return (
                      <motion.div
                        key={lead.id}
                        layout
                        layoutId={lead.id}
                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                        className="shrink-0 w-full"
                      >
                        <div className="group rounded-lg bg-white/90 backdrop-blur px-2.5 py-1.5 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300/80 transition-all flex items-center gap-2 w-full">
                          <span
                            className={`flex items-center justify-center w-6 h-6 rounded bg-gray-100/80 shrink-0 ${color}`}
                          >
                            <SourceIcon className="w-3 h-3" />
                          </span>
                          <div className="flex-1 min-w-0 flex items-center gap-1.5 text-[11px]">
                            <span className="font-medium text-gray-900 truncate">
                              {lead.name}
                            </span>
                            <span className="text-gray-500 shrink-0">{lead.source}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              {colIdx < COLUMNS.length - 1 && (
                <div className="hidden sm:flex items-center justify-center w-10 shrink-0">
                  <FlowArrow />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

const Feature1 = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const barVariants = {
    hidden: { scaleY: 0, originY: 1 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        delay: 2.8 + i * 0.1,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  const messageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 3.2 + i * 0.6,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const benefits = [
    { icon: Zap, label: "3× faster response", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: Clock, label: "24/7 AI replies", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Filter, label: "Only warm leads", color: "text-violet-600", bg: "bg-violet-50" },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 bg-white" ref={featuresRef}>
      <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
        <TimelineAnimation
          as="h1"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="md:text-5xl sm:text-4xl text-3xl font-medium"
        >
          Every Lead. <br />
          One AI. Booked Calls.
        </TimelineAnimation>
        <TimelineAnimation
          as="p"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="text-gray-600 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
        >
          From Instagram, WhatsApp, and landing pages—your AI agent qualifies
          leads, replies instantly, and books calls while you focus on delivery.
        </TimelineAnimation>
      </article>
      <div className="grid grid-cols-12 gap-4">
        <TimelineAnimation
          as="div"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-5 sm:col-span-6 col-span-12 relative w-full h-[350px] rounded-xl overflow-hidden border border-neutral-200"
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, #b0b0b0 1px, transparent 1px), linear-gradient(to bottom, #b0b0b0 1px, transparent 1px)",
              backgroundSize: "14px 24px",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
            }}
          />
          <HoverTranslateTwo />

          <article className="absolute right-0 bottom-0 left-0 w-full bg-linear-to-t from-white via-white to-transparent p-6 pt-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Unified Lead Sources
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              DMs, forms, and landing pages in one place. 
            </p>
          </article>
        </TimelineAnimation>

        <TimelineAnimation
          as="div"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-3 sm:col-span-6 col-span-12 border flex flex-col justify-between rounded-lg p-4 relative overflow-hidden border-neutral-200"
        >
          <div
            className="absolute inset-0 z-0 rounded-lg"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #ffffff00 40%, var(--color-primary) 100%)",
            }}
          />
          <div className="relative w-full overflow-hidden py-1">
            <motion.div
              className="flex -space-x-2 sm:-space-x-3"
              style={{ width: "max-content" }}
              animate={{ x: [0, -240] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                "https://i.pravatar.cc/100?img=10",
                "https://i.pravatar.cc/100?img=11",
                "https://i.pravatar.cc/100?img=12",
                "https://i.pravatar.cc/100?img=13",
                "https://i.pravatar.cc/100?img=14",
                "https://i.pravatar.cc/100?img=15",
                "https://i.pravatar.cc/100?img=20",
                "https://i.pravatar.cc/100?img=21",
                "https://i.pravatar.cc/100?img=22",
                "https://i.pravatar.cc/100?img=23",
                "https://i.pravatar.cc/100?img=24",
                "https://i.pravatar.cc/100?img=25",
                "https://i.pravatar.cc/100?img=10",
                "https://i.pravatar.cc/100?img=11",
                "https://i.pravatar.cc/100?img=12",
                "https://i.pravatar.cc/100?img=13",
              ].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-white h-11 w-11 sm:h-14 sm:w-14 object-cover shrink-0 shadow-md"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8 + (i % 8) * 0.06, duration: 0.4 }}
                />
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-semibold sm:pt-0 pt-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.8, duration: 0.3, type: "spring" }}
            >
              2,000+
            </motion.h1>
            <p className="text-sm">
              Businesses closing more deals
            </p>
          </motion.div>
        </TimelineAnimation>

        <TimelineAnimation
          as="div"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-4 sm:col-span-6 col-span-12 border rounded-lg p-4 group border-neutral-200"
        >
          <motion.h1
            className="text-4xl font-semibold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Key Benefits
          </motion.h1>
          <motion.p
            className="text-sm"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            What you get from day one
          </motion.p>
          <div className="space-y-3 mt-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl border border-neutral-100 ${item.bg}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 2 + i * 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </TimelineAnimation>

        <TimelineAnimation
          as="div"
          animationNum={3}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-7 sm:col-span-6 col-span-12 relative border p-4 rounded-xl overflow-hidden border-neutral-200"
        >
          <article className="w-full bg-linear-to-t from-white via-white to-transparent">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              AI Lead Pipeline
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              New → Replied → Booked. AI qualifies leads from every channel and
              moves them through your funnel automatically.
            </p>
          </article>
          <LeadFunnelKanban />
        </TimelineAnimation>

        <TimelineAnimation
          as="div"
          animationNum={4}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-5 sm:col-span-6 col-span-12 relative border p-4 rounded-xl overflow-hidden border-neutral-200"
        >
          <div className="flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="flex-1 space-y-4 p-4 overflow-hidden">
              <motion.div
                className="mr-auto relative max-w-[80%] rounded-lg bg-gray-100 p-3 text-gray-800"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                Hey! Saw your post about the workshop. How much is it and what&apos;s
                included?
              </motion.div>

              <motion.div
                className="mr-auto relative max-w-[80%] rounded-lg bg-amber-50 p-3 text-gray-800 border border-amber-200/60"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                It&apos;s $297—designed for agencies and personal brands. Are you
                agency, creator, or SMB? I can book you a quick call with the
                founder.
                <motion.button
                  className="absolute -bottom-2 right-0 flex items-center gap-1 rounded-full bg-[var(--color-primary)] px-2 py-1 text-xs text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 4.6, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PencilLine className="h-3 w-3" />
                  Customize reply
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center gap-2 border-t border-gray-200 p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4.8, duration: 0.5 }}
            >
              <motion.input
                type="text"
                placeholder="Agency! When can we chat?"
                className="flex-1 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                initial={{ width: "60%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 5.0, duration: 0.6 }}
              />
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 5.2, duration: 0.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>

          <article className="absolute right-0 top-0 left-0 w-full bg-linear-to-b from-white via-white to-transparent p-6 pb-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              AI Qualifies & Books
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              Your AI agent replies instantly, qualifies leads with natural
              conversation, and books calls—24/7.
            </p>
          </article>
        </TimelineAnimation>
      </div>
    </section>
  );
};

export default Feature1;
