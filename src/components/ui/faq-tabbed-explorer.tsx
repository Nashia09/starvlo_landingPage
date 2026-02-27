'use client'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
} from '@/components/ui/accordion'
import { LayoutGrid, ShieldCheck, Cpu, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
    id: string
    question: string
    answer: string
    category: 'general' | 'technical' | 'billing' | 'account'
}

type FAQCategory = FAQItem['category']

const FAQ_DATA: FAQItem[] = [
    // ───────────────── GENERAL ─────────────────
    {
        id: 'g1',
        category: 'general',
        question: 'How does Starvlo work?',
        answer: 'Starvlo connects all your lead-capture channels (like Instagram, WhatsApp, email, forms, etc.) into one unified system. Once connected, its AI automatically follows up with leads using smart sequences, sends replies, nurtures conversations, and books appointments without manual effort. It then notifies you of qualified leads and booked calls.',
    },
    {
        id: 'g2',
        category: 'general',
        question: 'What does it integrate with?',
        answer: 'Starvlo integrates with tools you already use, including CRM systems and lead sources like forms, landing pages, Instagram DMs, WhatsApp, and email. It centralizes conversations from these sources into a single inbox so you don’t miss follow-ups.',
    },
    {
        id: 'g3',
        category: 'general',
        question: 'How fast can we go live and how is success measured?',
        answer: 'You can set up Starvlo in just a few minutes, with no complex training. Success is measured through metrics like engagement rates, leads nurtured, appointments booked, and conversion performance shown in analytics and insights dashboards.',
    },

    // ───────────────── TECHNICAL ─────────────────
    {
        id: 't1',
        category: 'technical',
        question: 'How does it learn our business and messaging?',
        answer: 'Starvlo uses your business’s knowledge base (such as your product/services info and FAQs) to tailor its follow-up messages. This lets the AI respond in a voice that fits your business and speaks naturally to your leads.',
    },
    {
        id: 't2',
        category: 'technical',
        question: 'How are deliverability & compliance handled?',
        answer: 'Starvlo’s system manages messaging delivery and automates replies across channels. It emphasizes reliable delivery and context-aware follow-ups to keep compliance with messaging standards.',
    },

    // ───────────────── ACCOUNT & BILLING ─────────────────
    {
        id: 'a1',
        category: 'account',
        question: 'How much control do we keep?',
        answer: 'You keep control over settings like which channels to connect, the messaging sequences and templates the AI uses, how and when leads are followed up, and when appointments are booked. The AI assists and automates, but you configure the rules and messaging preferences.',
    },
]

export const FaqTabbedExplorer = () => {
    const [activeTab, setActiveTab] = useState<FAQCategory>('general')
    const categories: { id: FAQCategory; icon: any; label: string }[] = [
        { id: 'general', icon: LayoutGrid, label: 'General' },
        { id: 'technical', icon: Cpu, label: 'Technical' },
        { id: 'billing', icon: CreditCard, label: 'Billing' },
        { id: 'account', icon: ShieldCheck, label: 'Account' },
    ]

    const filteredItems = FAQ_DATA.filter((item) => item.category === activeTab)

    return (
        <section className="w-full py-24 bg-white flex items-center justify-center font-primary">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
                        Got questions? We've got answers. If you don't see what you're looking for, reach out to our support team.
                    </p>
                </div>

                <div className="w-full max-w-5xl mx-auto bg-slate-50/50 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-center shadow-lg">
                    <div className="w-full md:w-72 bg-white/50 p-6 border-b md:border-b-0 md:border-r border-slate-200 pt-10 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none backdrop-blur-sm">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4 px-2">
                            Knowledge Base
                        </h3>
                        <nav className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={cn(
                                        'w-full flex items-center cursor-pointer gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm',
                                        activeTab === cat.id
                                            ? 'bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    )}
                                >
                                    <cat.icon size={18} className={activeTab === cat.id ? "text-white" : "text-slate-400"} />
                                    {cat.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="flex-1 p-6 md:p-10 bg-white md:rounded-r-3xl rounded-b-3xl">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-slate-900 mb-2 capitalize">
                                {activeTab} Questions
                            </h2>
                            <p className="text-slate-500 text-sm">
                                Find answers specifically related to your {activeTab} inquiries.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Accordion multiple={false} defaultValue={filteredItems[0]?.id}>
                                {filteredItems.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border border-neutral-200 bg-transparent mb-4 overflow-hidden"
                                    >
                                        <AccordionHeader className="hover:bg-slate-50 bg-white py-4 px-4 font-semibold text-[15px]">
                                            <span className="text-slate-900 pr-4 block">{item.question}</span>
                                        </AccordionHeader>
                                        <AccordionPanel className="px-4 bg-white data-active:bg-white text-sm md:text-base">
                                            <p className="pt-2 pb-2 leading-relaxed text-slate-500">{item.answer}</p>
                                        </AccordionPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FaqTabbedExplorer;
