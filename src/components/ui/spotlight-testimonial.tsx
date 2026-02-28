'use client'
import { cn } from '@/lib/utils'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

const testimonials = [
    {
        id: 1,
        quote: 'Starvlo transformed our Instagram DMs from a chaotic inbox into an automated sales engine. We saw a',
        highlight: '45% increase',
        quoteEnd: 'in recovered leads within the first week of turning on the AI sequences.',
        name: 'Sarah Chen',
        role: 'Founder at Lumina Beauty',
        url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop',
    },
    {
        id: 2,
        quote:
            'Managing WhatsApp inquiries used to take up half our day. Now, Starvlo handles the initial qualification and books appointments',
        highlight: '3x faster',
        quoteEnd: 'while our team focuses only on closing the qualified calls.',
        name: 'Marcus Williams',
        role: 'Operations Director at Apex Fitness',
        url: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: 3,
        quote:
            "The omnichannel inbox is a lifesaver. Being able to run campaigns and see email, SMS, and ad-traffic leads get nurtured automatically reduced our acquisition costs by",
        highlight: '60%',
        quoteEnd: 'almost overnight.',
        name: 'James Walker',
        role: 'CEO at Scale Digital Agency',
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop',
    },
]

export default function SpotlightTestimonial() {
    const [activeIndex, setActiveIndex] = useState(0)
    const timelineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    const handleDotClick = (index: number) => {
        setActiveIndex(index)
    }

    const activeTestimonial = testimonials[activeIndex]

    return (
        <section
            ref={timelineRef}
            className="bg-zinc-50 min-h-screen flex flex-col justify-center py-20"
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <TimelineAnimation
                    animationNum={1}
                    timelineRef={timelineRef}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4"
                >
                    Success Stories
                </TimelineAnimation>
                <TimelineAnimation
                    animationNum={2}
                    timelineRef={timelineRef}
                    className="text-lg text-zinc-600 max-w-3xl mx-auto"
                >
                    Real results from real creators. Discover how industry leaders are
                    achieving remarkable outcomes.
                </TimelineAnimation>
            </div>

            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <TimelineAnimation
                    animationNum={3}
                    timelineRef={timelineRef}
                    className="size-16 rounded-full bg-zinc-200 flex items-center justify-center border border-zinc-300 mb-8"
                >
                    <svg
                        className="size-8 text-zinc-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V5H21.017V16L19.017 21H14.017ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709V14H6.01709C3.80795 14 2.01709 12.2091 2.01709 10V5H10.0171V16L8.01709 21H3.01709Z" />
                    </svg>
                </TimelineAnimation>

                <TimelineAnimation
                    animationNum={4}
                    timelineRef={timelineRef}
                    className="relative min-h-[220px] flex items-center justify-center mb-8"
                >
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={activeTestimonial?.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                            className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-900 text-balance leading-tight"
                        >
                            "{activeTestimonial?.quote}{' '}
                            <span className="text-zinc-500 italic">
                                {activeTestimonial?.highlight}
                            </span>{' '}
                            {activeTestimonial?.quoteEnd}"
                        </motion.blockquote>
                    </AnimatePresence>
                </TimelineAnimation>

                <TimelineAnimation
                    animationNum={5}
                    timelineRef={timelineRef}
                    className="relative min-h-24 flex items-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTestimonial?.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                            className="flex flex-col items-center gap-2"
                        >
                            <img
                                src={activeTestimonial?.url}
                                alt={activeTestimonial?.name}
                                className="size-14 rounded-full bg-zinc-900 shadow-lg mb-2 object-cover"
                            />

                            <p className="text-sm font-bold text-zinc-900 uppercase tracking-widest">
                                {activeTestimonial?.name}
                            </p>
                            <p className="text-xs text-zinc-500 font-medium">
                                {activeTestimonial?.role}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </TimelineAnimation>

                <TimelineAnimation
                    animationNum={6}
                    timelineRef={timelineRef}
                    className="mt-8 flex gap-2"
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={cn(
                                'h-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-zinc-400',
                                index === activeIndex ? 'bg-zinc-900 w-8' : 'bg-zinc-300 w-2'
                            )}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </TimelineAnimation>
            </div>
        </section>
    )
}
