import React, { useRef, useState, useEffect } from "react";
import { TrendingUp, Check } from "lucide-react";

// Starvlo logo icon for AI avatar spots
const StarvloIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
    <img src="/assets/logo.svg" alt="Starvlo" className={className} />
);
import { cn } from "@/lib/utils";
import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    animate,
    useAnimation,
} from "framer-motion";

// -------------------------------------------------------------
// ANIMATED COUNTER COMPONENT
// -------------------------------------------------------------
const AnimatedCounter = ({
    from,
    to,
    duration = 2,
    delay = 0,
    prefix = "",
    suffix = "",
    className = "",
    trigger = true,
}: {
    from: number;
    to: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    trigger?: boolean;
}) => {
    const motionVal = useMotionValue(from);
    const rounded = useTransform(motionVal, (v) => Math.round(v));
    const [display, setDisplay] = useState(from);

    useEffect(() => {
        if (!trigger) {
            motionVal.set(from);
            setDisplay(from);
            return;
        }
        const controls = animate(motionVal, to, {
            duration,
            delay,
            ease: "easeOut",
        });
        const unsub = rounded.on("change", (v) => setDisplay(v));
        return () => {
            controls.stop();
            unsub();
        };
    }, [trigger, to]);

    return (
        <span className={className}>
            {prefix}
            {display}
            {suffix}
        </span>
    );
};

// -------------------------------------------------------------
// TYPING INDICATOR
// -------------------------------------------------------------
const TypingIndicator = ({ visible }: { visible: boolean }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.8,
            y: visible ? 0 : 10,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-2xl rounded-tl-sm p-3 self-start w-fit shadow-lg flex items-center gap-1.5"
    >
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <StarvloIcon className="w-3.5 h-3.5" />
        </div>
        <div className="flex gap-1 px-2">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    </motion.div>
);

// -------------------------------------------------------------
// 1. TOP CARD — "Turn every lead into a booked call"
// -------------------------------------------------------------
const TopCard = () => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-80px", amount: 0.3 });
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isInView) {
            setStep(0);
            return;
        }
        // Sequence: 0=idle → 1=lead msg → 2=typing → 3=ai reply1 → 4=typing → 5=ai reply2+calendar → 6=booked
        const timers: ReturnType<typeof setTimeout>[] = [];
        timers.push(setTimeout(() => setStep(1), 600));
        timers.push(setTimeout(() => setStep(2), 1800));
        timers.push(setTimeout(() => setStep(3), 3000));
        timers.push(setTimeout(() => setStep(4), 4500));
        timers.push(setTimeout(() => setStep(5), 5800));
        timers.push(setTimeout(() => setStep(6), 7500));
        return () => timers.forEach(clearTimeout);
    }, [isInView]);

    return (
        <div
            ref={cardRef}
            className="w-full h-full bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[350px] md:min-h-[450px] group border border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        >
            {/* Background graphic */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.15 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay blur-[2px]"
                style={{
                    backgroundImage:
                        "url(/assets/dashshots/Screenshot%202025-12-01%20at%2011.01.44%20PM.png)",
                }}
            />

            {/* Animated Chat Flow */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 min-w-[280px] pointer-events-none hidden sm:block">
                {/* Floating KPI */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={
                        isInView
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: -20, scale: 0.9 }
                    }
                    transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 120 }}
                    className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-white/30 z-20 flex flex-col items-center"
                >
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                        Calls this week
                    </span>
                    <AnimatedCounter
                        from={0}
                        to={12}
                        duration={3}
                        delay={2}
                        trigger={isInView}
                        className="text-2xl font-black text-gray-900 leading-none"
                    />
                </motion.div>

                <div className="flex flex-col gap-3 relative z-10">
                    {/* Lead Message */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={
                            step >= 1
                                ? { opacity: 1, scale: 1, x: 0 }
                                : { opacity: 0, scale: 0.9, x: 30 }
                        }
                        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl rounded-tr-sm p-3 self-end w-[85%]"
                    >
                        <p className="text-white text-xs">
                            Hey, is this still available?
                        </p>
                    </motion.div>

                    {/* Typing indicator before AI Reply 1 */}
                    <TypingIndicator visible={step === 2} />

                    {/* AI Reply 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={
                            step >= 3
                                ? { opacity: 1, scale: 1, x: 0 }
                                : { opacity: 0, scale: 0.9, x: -20 }
                        }
                        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                        className="bg-white rounded-2xl rounded-tl-sm p-3 self-start w-[90%] shadow-lg flex gap-2"
                    >
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <StarvloIcon className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-gray-800 text-xs font-medium">
                            Yes! Quick question: what are you working on right
                            now?
                        </p>
                    </motion.div>

                    {/* Typing indicator before AI Reply 2 */}
                    <TypingIndicator visible={step === 4} />

                    {/* AI Reply 2: Calendar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={
                            step >= 5
                                ? { opacity: 1, scale: 1, x: 0 }
                                : { opacity: 0, scale: 0.9, x: -20 }
                        }
                        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                        className="bg-white rounded-2xl rounded-tl-sm p-3 self-start w-[95%] shadow-lg flex flex-col gap-2 relative"
                    >
                        <div className="flex gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <StarvloIcon className="w-3.5 h-3.5" />
                            </div>
                            <p className="text-gray-800 text-xs font-medium">
                                Got it. Here are some times for a quick call 👇
                            </p>
                        </div>

                        {/* Mini Calendar Widget */}
                        <div className="mt-1 border border-gray-100 rounded-lg p-2 bg-gray-50 flex flex-col gap-1.5 relative overflow-hidden">
                            <div className="flex justify-between items-center px-1">
                                <span className="text-[10px] text-gray-400 font-semibold">
                                    Thursday
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                                <div className="bg-white border border-gray-200 text-[10px] text-center py-1 rounded text-gray-600">
                                    1:00 PM
                                </div>
                                <div className="relative">
                                    <div
                                        className={cn(
                                            "border text-[10px] text-center py-1 rounded transition-all duration-500",
                                            step >= 6
                                                ? "bg-emerald-500 text-white border-emerald-500"
                                                : "bg-white text-gray-600 border-gray-200"
                                        )}
                                    >
                                        3:00 PM
                                    </div>
                                    {/* Booked overlay */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={
                                            step >= 6
                                                ? {
                                                    opacity: 1,
                                                    scale: 1,
                                                }
                                                : { opacity: 0, scale: 0.5 }
                                        }
                                        transition={{
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        className="absolute inset-0 flex items-center justify-center bg-emerald-500 rounded"
                                    >
                                        <span className="text-white font-bold flex items-center gap-1 text-[10px]">
                                            <Check className="w-3 h-3" />{" "}
                                            Booked
                                        </span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Success glow ring */}
                        {step >= 6 && (
                            <motion.div
                                initial={{ opacity: 0.8, scale: 0.8 }}
                                animate={{ opacity: 0, scale: 2 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute inset-0 rounded-2xl border-2 border-emerald-400 pointer-events-none"
                            />
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col gap-2"
                >
                    <h3 className="text-white text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight">
                        Turn every lead into
                        <br />a booked call.
                    </h3>
                    <p className="text-white/90 text-sm font-medium mt-1 max-w-sm border-l-2 border-white/30 pl-3">
                        Never miss a hot lead again — every DM, form
                        submission, and reply gets a fast, on-brand response.
                    </p>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-white/80 text-base md:text-lg lg:text-xl font-medium leading-snug md:leading-relaxed max-w-xl pr-4 mt-2"
                >
                    Starvlo&apos;s AI sales agent jumps into your Instagram and
                    WhatsApp DMs in seconds, warms up cold leads, and fills
                    your calendar with qualified calls while you work on
                    delivery.
                </motion.p>
            </div>
        </div>
    );
};

// -------------------------------------------------------------
// 2. BOTTOM LEFT CARD — "Empower every founder"
// -------------------------------------------------------------
const BottomLeftCard = () => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-60px", amount: 0.3 });
    const [bookedCount, setBoostedCount] = useState(0);

    const rows = [
        {
            name: "Sarah M.",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            transitionDelay: 1.5,
        },
        {
            name: "James T.",
            avatar: "https://i.pravatar.cc/150?u=james",
            transitionDelay: 3.0,
        },
        {
            name: "Alex R.",
            avatar: "https://i.pravatar.cc/150?u=alex",
            transitionDelay: 4.5,
        },
    ];

    const [bookedRows, setBookedRows] = useState<boolean[]>([
        false,
        false,
        false,
    ]);

    useEffect(() => {
        if (!isInView) {
            setBookedRows([false, false, false]);
            setBoostedCount(0);
            return;
        }
        const timers: ReturnType<typeof setTimeout>[] = [];
        rows.forEach((row, i) => {
            timers.push(
                setTimeout(() => {
                    setBookedRows((prev) => {
                        const next = [...prev];
                        next[i] = true;
                        return next;
                    });
                    setBoostedCount((c) => c + 1);
                }, row.transitionDelay * 1000)
            );
        });
        return () => timers.forEach(clearTimeout);
    }, [isInView]);

    return (
        <div
            ref={cardRef}
            className="w-full h-full bg-[#0ea5e9] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[350px] md:min-h-[400px] group border border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        >
            {/* Header */}
            <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-white text-2xl md:text-3xl font-medium relative z-10 w-full text-center"
            >
                Empower every founder
            </motion.h3>

            {/* AI CRM Pipeline */}
            <div className="flex-1 flex items-center justify-center w-full py-4 relative z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={
                        isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }
                    }
                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-2.5 w-[220px] flex flex-col gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                    {rows.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                            }
                            transition={{
                                delay: 0.5 + i * 0.15,
                                duration: 0.5,
                                type: "spring",
                            }}
                            className="flex flex-col gap-0 bg-white rounded-lg shadow-sm relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between p-2 relative z-10">
                                <div className="flex items-center gap-2">
                                    {/* Avatar with pulse ring */}
                                    <div className="relative">
                                        <img
                                            src={row.avatar}
                                            alt={row.name}
                                            className="w-6 h-6 rounded-full object-cover border border-gray-200 relative z-10"
                                        />
                                        {!bookedRows[i] && isInView && (
                                            <motion.div
                                                className="absolute inset-0 rounded-full border-2 border-sky-400"
                                                animate={{
                                                    scale: [1, 1.6, 1.6],
                                                    opacity: [0.6, 0, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="text-gray-800 text-xs font-semibold">
                                        {row.name}
                                    </div>
                                </div>

                                <div className="relative w-[70px] h-[22px]">
                                    {/* Active State */}
                                    <motion.div
                                        animate={{
                                            opacity: bookedRows[i] ? 0 : 1,
                                            scale: bookedRows[i] ? 0.8 : 1,
                                        }}
                                        transition={{ duration: 0.35 }}
                                        className="absolute inset-0 flex items-center justify-center gap-1 bg-gray-50 border border-gray-100 rounded text-[9px] font-medium text-gray-500"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <StarvloIcon className="w-3.5 h-3.5" />
                                        </motion.div>
                                        Active
                                    </motion.div>

                                    {/* Booked State */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{
                                            opacity: bookedRows[i] ? 1 : 0,
                                            scale: bookedRows[i] ? 1 : 0.5,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        className="absolute inset-0 flex items-center justify-center gap-1 bg-emerald-500 rounded text-[9px] font-bold text-white shadow-sm"
                                    >
                                        <Check className="w-2.5 h-2.5" />
                                        Booked
                                    </motion.div>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="h-[3px] bg-gray-100 w-full">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{
                                        width: bookedRows[i]
                                            ? "100%"
                                            : isInView
                                                ? "60%"
                                                : "0%",
                                        backgroundColor: bookedRows[i]
                                            ? "#10b981"
                                            : "#0ea5e9",
                                    }}
                                    transition={{
                                        width: {
                                            duration: bookedRows[i]
                                                ? 0.4
                                                : row.transitionDelay,
                                            ease: "easeOut",
                                        },
                                        backgroundColor: {
                                            duration: 0.3,
                                        },
                                    }}
                                    className="h-full rounded-full"
                                />
                            </div>

                            {/* Success shimmer sweep */}
                            {bookedRows[i] && (
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent z-0"
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating +1 badges */}
                {rows.map(
                    (row, i) =>
                        bookedRows[i] && (
                            <motion.div
                                key={`badge-${i}`}
                                initial={{ opacity: 1, y: 0, x: 80 }}
                                animate={{ opacity: 0, y: -30 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                                className="absolute text-white font-bold text-sm bg-emerald-500 px-2 py-0.5 rounded-full shadow-lg pointer-events-none"
                                style={{ top: `${i * 36}px`, right: "8px" }}
                            >
                                +1
                            </motion.div>
                        )
                )}
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 w-full text-center flex flex-col items-center gap-1 mt-auto pt-4"
            >
                <p className="text-white/90 text-[13px] md:text-sm font-medium max-w-[280px]">
                    Give yourself a 24/7 AI setter that handles repetitive
                    DMs, asks the right questions, and books calls so you
                    stay out of your inbox.
                </p>
                <p className="text-white/60 text-[10px] font-semibold uppercase tracking-wider mt-2">
                    Perfect for solo coaches, agencies, and small teams.
                </p>
            </motion.div>
        </div>
    );
};

// -------------------------------------------------------------
// LOCAL SVG ICONS FOR CHANNELS
// -------------------------------------------------------------
const IgIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="url(#ig-grad)">
        <defs>
            <linearGradient
                id="ig-grad"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
            >
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
        </defs>
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M17.2,5.55A1.25,1.25 0 0,1 18.45,6.8A1.25,1.25 0 0,1 17.2,8.05A1.25,1.25 0 0,1 15.95,6.8A1.25,1.25 0 0,1 17.2,5.55Z" />
    </svg>
);

const WaIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.011.266 1.996.772 2.866l-.823 3.003 3.078-.808c.844.463 1.792.707 2.742.707h.001c3.18 0 5.767-2.586 5.769-5.766 0-1.543-.601-2.992-1.691-4.082a5.733 5.733 0 0 0-4.08-1.686zM11.994 2C17.514 2 22 6.486 22 12c0 5.513-4.486 10-10.006 10a9.96 9.96 0 0 1-5.029-1.355l-4.965 1.303 1.334-4.846A9.924 9.924 0 0 1 2 12C2 6.486 6.474 2 11.994 2zM16.942 14.591c-.272-.136-1.606-.793-1.855-.884-.249-.091-.43-.136-.612.136-.182.273-.701.884-.859 1.066-.157.182-.315.205-.587.068-.272-.136-1.146-.423-2.183-1.353-.807-.723-1.35-1.616-1.508-1.889-.158-.273-.017-.421.119-.556.122-.122.272-.318.408-.477.136-.159.182-.272.272-.454.091-.182.045-.341-.023-.477-.068-.136-.612-1.477-.838-2.022-.22-.53-.443-.458-.612-.466-.158-.008-.34-.01-.522-.01-.182 0-.477.068-.726.341-.249.273-.951.932-.951 2.272 0 1.341.974 2.636 1.11 2.818.136.182 1.918 2.927 4.646 4.104.649.28 1.156.447 1.551.572.651.206 1.243.176 1.713.107.525-.078 1.606-.656 1.833-1.289.227-.633.227-1.176.159-1.289-.068-.114-.249-.182-.521-.318z" />
    </svg>
);

const MsgIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#0084FF">
        <path d="M12 2C6.477 2 2 6.14 2 11.25c0 2.9 1.45 5.485 3.737 7.152-.162 1.455-.838 2.808-.853 2.837a.498.498 0 0 0 .522.696c2.09-.508 3.518-1.472 4.162-2.004C10.354 20.218 11.163 20.3 12 20.3c5.523 0 10-4.14 10-9.05S17.523 2 12 2zm1.09 11.942l-2.618-2.793-5.11 2.793 5.626-5.97 2.64 2.766 5.087-2.766-5.625 5.97z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#EA4335">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const WebIcon = () => (
    <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

// -------------------------------------------------------------
// 3. BOTTOM MIDDLE CARD — "Unify your channels"
// -------------------------------------------------------------
const BottomMiddleCard = () => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-60px", amount: 0.3 });

    const channels = [
        { id: "ig", icon: <IgIcon />, x: -80, y: -70, label: "Instagram" },
        { id: "wa", icon: <WaIcon />, x: 70, y: -90, label: "WhatsApp" },
        { id: "ms", icon: <MsgIcon />, x: 90, y: 10, label: "Messenger" },
        { id: "em", icon: <EmailIcon />, x: 40, y: 80, label: "Email" },
        { id: "web", icon: <WebIcon />, x: -70, y: 60, label: "Web" },
    ];

    return (
        <div
            ref={cardRef}
            className="w-full h-full bg-[#f4f7fb] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[350px] md:min-h-[400px] border border-gray-200 group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        >
            {/* Header */}
            <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6 }}
                className="text-gray-900 text-2xl md:text-3xl font-medium relative z-10 text-center w-full"
            >
                Unify your channels
            </motion.h3>

            {/* Radial Hub Animation */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none mt-4 scale-[0.75] origin-center">
                <div className="relative w-[300px] h-[240px] flex items-center justify-center">
                    {/* SVG Lines & Particles */}
                    <svg
                        className="absolute inset-0 w-full h-full overflow-visible z-0"
                        viewBox="-150 -120 300 240"
                    >
                        {channels.map((ch, i) => {
                            const angle = Math.atan2(ch.y, ch.x);
                            const dist = Math.sqrt(
                                ch.x * ch.x + ch.y * ch.y
                            );
                            return (
                                <g key={`flow-${i}`}>
                                    {/* Glowing dashed connection line */}
                                    <motion.line
                                        x1={0}
                                        y1={0}
                                        x2={ch.x}
                                        y2={ch.y}
                                        stroke="#cbd5e1"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                        initial={{
                                            pathLength: 0,
                                            opacity: 0,
                                        }}
                                        animate={
                                            isInView
                                                ? {
                                                    pathLength: 1,
                                                    opacity: 1,
                                                }
                                                : { pathLength: 0, opacity: 0 }
                                        }
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.3 + i * 0.12,
                                            ease: "easeOut",
                                        }}
                                    />

                                    {/* Animated glow line overlay */}
                                    <motion.line
                                        x1={0}
                                        y1={0}
                                        x2={ch.x}
                                        y2={ch.y}
                                        stroke="#5b85d9"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={
                                            isInView
                                                ? {
                                                    strokeDasharray: `${dist * 0.15} ${dist}`,
                                                    strokeDashoffset: [
                                                        dist,
                                                        -dist * 0.15,
                                                    ],
                                                    opacity: [0, 0.8, 0],
                                                }
                                                : { pathLength: 0, opacity: 0 }
                                        }
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.6,
                                            repeatDelay: 0.5,
                                        }}
                                        style={{
                                            filter: "drop-shadow(0 0 3px #5b85d9)",
                                        }}
                                    />

                                    {/* Particle stream - 3 dots */}
                                    {[0, 1, 2].map((p) => (
                                        <motion.circle
                                            key={`p-${i}-${p}`}
                                            r={3 - p * 0.6}
                                            fill="#5b85d9"
                                            initial={{
                                                cx: ch.x,
                                                cy: ch.y,
                                                opacity: 0,
                                            }}
                                            animate={
                                                isInView
                                                    ? {
                                                        cx: [
                                                            ch.x,
                                                            ch.x * 0.5,
                                                            0,
                                                        ],
                                                        cy: [
                                                            ch.y,
                                                            ch.y * 0.5,
                                                            0,
                                                        ],
                                                        opacity: [
                                                            0,
                                                            0.8 - p * 0.2,
                                                            0,
                                                        ],
                                                    }
                                                    : { cx: ch.x, cy: ch.y, opacity: 0 }
                                            }
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay:
                                                    i * 0.5 + p * 0.15,
                                            }}
                                            style={{
                                                filter: "drop-shadow(0 0 2px #5b85d9)",
                                            }}
                                        />
                                    ))}
                                </g>
                            );
                        })}
                    </svg>

                    {/* Channel Icons — fly in with spring */}
                    {channels.map((ch, i) => (
                        <motion.div
                            key={`node-${i}`}
                            className="absolute w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 z-10 group/icon"
                            initial={{
                                x: ch.x * 2.5,
                                y: ch.y * 2.5,
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={
                                isInView
                                    ? {
                                        x: ch.x - 24,
                                        y: ch.y - 24,
                                        opacity: 1,
                                        scale: 1,
                                    }
                                    : { x: ch.x * 2.5, y: ch.y * 2.5, opacity: 0, scale: 0.5 }
                            }
                            transition={{
                                duration: 0.8,
                                delay: 0.2 + i * 0.1,
                                type: "spring",
                                stiffness: 80,
                                damping: 12,
                            }}
                            style={{
                                left: "50%",
                                top: "50%",
                            }}
                        >
                            {ch.icon}
                            {/* Hover label */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {ch.label}
                            </div>
                        </motion.div>
                    ))}

                    {/* Center Hub with pulse rings */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                        }
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            type: "spring",
                            stiffness: 100,
                        }}
                        className="absolute w-20 h-20 bg-[#5b85d9] rounded-[24px] flex items-center justify-center shadow-md border-2 border-white z-20"
                    >
                        <svg
                            className="w-8 h-8 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>

                        {/* Radar ping rings */}
                        {[0, 1, 2].map((ring) => (
                            <motion.div
                                key={`ring-${ring}`}
                                className="absolute inset-0 rounded-[24px] border border-[#5b85d9]/40"
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={
                                    isInView
                                        ? {
                                            scale: [1, 2.2],
                                            opacity: [0.4, 0],
                                        }
                                        : { scale: 1, opacity: 0 }
                                }
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: ring * 0.8,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 w-full text-center flex flex-col items-center gap-1 mt-auto pt-4"
            >
                <p className="text-gray-600 text-[13px] md:text-sm font-medium max-w-[280px] whitespace-normal">
                    Pull leads from Instagram, WhatsApp, and landing pages
                    into one place, then run the same winning call-booking
                    playbook everywhere.
                </p>
                <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mt-2">
                    One pipeline. One AI closer. More calls.
                </p>
            </motion.div>
        </div>
    );
};

// -------------------------------------------------------------
// 4. BOTTOM RIGHT CARD — "Pay for booked value"
// -------------------------------------------------------------
const BottomRightCard = () => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-60px", amount: 0.3 });
    const [showROI, setShowROI] = useState(false);

    const bars = [
        { label: "Wk 1", value: 3, height: "25%" },
        { label: "Wk 2", value: 7, height: "45%" },
        { label: "Wk 3", value: 14, height: "70%" },
        { label: "Wk 4", value: 24, height: "95%" },
    ];

    useEffect(() => {
        if (!isInView) {
            setShowROI(false);
            return;
        }
        const t = setTimeout(() => setShowROI(true), 3500);
        return () => clearTimeout(t);
    }, [isInView]);

    // Sparkline path connecting bar tops
    const sparklinePath = "M 20 85 Q 55 70, 90 55 Q 125 30, 160 10";

    return (
        <div
            ref={cardRef}
            className="w-full h-full bg-[#ba5d43] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[350px] md:min-h-[400px] border border-white/5 group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        >
            {/* Header */}
            <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6 }}
                className="text-white text-2xl md:text-3xl font-medium relative z-10 text-center w-full"
            >
                Pay for booked value
            </motion.h3>

            {/* Chart Area */}
            <div className="flex-1 flex flex-col items-center justify-center w-full py-4 relative z-10 pointer-events-none">
                {/* ROI Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                    animate={
                        showROI
                            ? { opacity: 1, scale: 1, rotate: 0 }
                            : { opacity: 0, scale: 0.5, rotate: -5 }
                    }
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 150,
                    }}
                    className="bg-white text-[#ba5d43] font-black text-sm px-3 py-1.5 rounded-xl shadow-lg mb-3 flex items-center gap-1.5 z-20"
                >
                    <TrendingUp className="w-4 h-4" />
                    3.2× ROI
                </motion.div>

                {/* Bars container */}
                <div className="flex items-end justify-center gap-4 h-[110px] w-full relative">
                    {/* Sparkline SVG overlay */}
                    <svg
                        className="absolute inset-0 w-full h-full overflow-visible z-10 pointer-events-none"
                        viewBox="0 0 180 100"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d={sparklinePath}
                            fill="none"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={
                                isInView
                                    ? { pathLength: 1, opacity: 1 }
                                    : { pathLength: 0, opacity: 0 }
                            }
                            transition={{
                                duration: 2.5,
                                delay: 0.8,
                                ease: "easeOut",
                            }}
                            style={{
                                filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))",
                            }}
                        />
                    </svg>

                    {bars.map((bar, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-1.5 flex-1 h-full justify-end"
                        >
                            {/* Counter above bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 5 }
                                }
                                transition={{
                                    delay: 0.5 + i * 0.4,
                                    duration: 0.4,
                                }}
                                className="text-white font-bold text-xs z-10"
                            >
                                <AnimatedCounter
                                    from={0}
                                    to={bar.value}
                                    duration={1.5}
                                    delay={0.5 + i * 0.4}
                                    trigger={isInView}
                                    className="text-white font-bold text-xs"
                                />
                            </motion.div>

                            {/* Bar with gradient fill */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={
                                    isInView
                                        ? { height: bar.height }
                                        : { height: 0 }
                                }
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3 + i * 0.35,
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 12,
                                }}
                                className="w-full rounded-t-md relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,${0.5 + i * 0.15}))`,
                                }}
                            >
                                {/* Gradient shimmer */}
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={
                                        isInView
                                            ? { y: "-100%" }
                                            : { y: "100%" }
                                    }
                                    transition={{
                                        duration: 1.2,
                                        delay: 1.5 + i * 0.3,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                                />
                            </motion.div>

                            {/* Label */}
                            <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider">
                                {bar.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 w-full text-center flex flex-col items-center gap-1 mt-auto"
            >
                <p className="text-white/90 text-sm md:text-base font-medium max-w-[280px]">
                    Choose a plan that scales with the calls you book — not
                    just the messages you send.
                </p>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-2">
                    Founding users lock in special pricing.
                </p>
            </motion.div>
        </div>
    );
};

// -------------------------------------------------------------
// ANIMATION VARIANTS (3D perspective entrance)
// -------------------------------------------------------------

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.97,
        rotateX: 2,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 18,
            duration: 0.7,
        },
    },
};

// -------------------------------------------------------------
// MAIN SECTION EXPORT
// -------------------------------------------------------------

export default function TransformSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px", amount: 0.1 });

    return (
        <section className="w-full bg-[#fcfbf9] py-24 sm:py-32" ref={ref}>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                style={{ perspective: "1200px" }}
            >
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-[#222222] tracking-tight mb-6"
                    >
                        Built for creators who
                        <br />
                        want to scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="text-lg md:text-xl text-[#666666] font-medium"
                    >
                        Stop juggling 5 different tools. Starvlo gives you
                        everything you need to sell, capture, and convert.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
                >
                    <motion.div
                        variants={itemVariants}
                        className="col-span-1 md:col-span-3"
                    >
                        <TopCard />
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-1">
                        <BottomLeftCard />
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-1">
                        <BottomMiddleCard />
                    </motion.div>
                    <motion.div variants={itemVariants} className="col-span-1">
                        <BottomRightCard />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
