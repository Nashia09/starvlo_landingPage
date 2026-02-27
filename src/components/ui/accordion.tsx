"use client"
import React, { createContext, useContext, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

type AccordionContextType = {
    expandedValue: string | null
    toggleItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

export const Accordion = ({
    children,
    defaultValue = null,
    multiple = false,
    className,
}: {
    children: React.ReactNode
    defaultValue?: string | null
    multiple?: boolean
    className?: string
}) => {
    const [expandedValue, setExpandedValue] = useState<string | null>(defaultValue)
    const toggleItem = (value: string) => {
        setExpandedValue((current) => (current === value ? null : value))
    }

    return (
        <AccordionContext.Provider value={{ expandedValue, toggleItem }}>
            <div className={cn("w-full", className)}>{children}</div>
        </AccordionContext.Provider>
    )
}

type AccordionItemContextType = {
    value: string
    isExpanded: boolean
    toggle: () => void
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(
    undefined
)

export const AccordionItem = ({
    children,
    value,
    className,
}: {
    children: React.ReactNode
    value: string
    className?: string
}) => {
    const ctx = useContext(AccordionContext)
    if (!ctx) throw new Error("AccordionItem must be used within Accordion")

    const isExpanded = ctx.expandedValue === value
    return (
        <AccordionItemContext.Provider value={{ value, isExpanded, toggle: () => ctx.toggleItem(value) }}>
            <div className={cn("rounded-lg", className)}>{children}</div>
        </AccordionItemContext.Provider>
    )
}

export const AccordionHeader = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    const ctx = useContext(AccordionItemContext)
    if (!ctx) throw new Error("AccordionHeader must be used within AccordionItem")

    return (
        <button
            onClick={ctx.toggle}
            className={cn(
                "flex w-full items-center justify-between text-left transition-colors",
                className
            )}
        >
            {children}
            <motion.div
                animate={{ rotate: ctx.isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 flex-shrink-0"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-slate-400"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </motion.div>
        </button>
    )
}

export const AccordionPanel = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    const ctx = useContext(AccordionItemContext)
    if (!ctx) throw new Error("AccordionPanel must be used within AccordionItem")

    return (
        <AnimatePresence initial={false}>
            {ctx.isExpanded && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div
                        className={cn("pb-4 text-slate-600", className)}
                        data-active={ctx.isExpanded}
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
