'use client'
import React, { useState, useEffect, useMemo } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
} from '@/components/ui/accordion'
import { LayoutGrid, ShieldCheck, Cpu, CreditCard, Loader2, BookOpen, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KBCategory {
    _id: string
    name: string
    slug: string
    description?: string
    icon?: string
}

interface KBArticle {
    _id: string
    title: string
    content: string
    categoryId: string
    slug?: string
}

export const FaqTabbedExplorer = () => {
    const [categories, setCategories] = useState<KBCategory[]>([])
    const [activeTabSlug, setActiveTabSlug] = useState<string>('')
    const [articles, setArticles] = useState<KBArticle[]>([])

    const [loadingCategories, setLoadingCategories] = useState(true)
    const [loadingArticles, setLoadingArticles] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const apiBase = useMemo(() => process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, ""), [])

    // 1. Fetch Categories
    useEffect(() => {
        const fetchCategories = async () => {
            if (!apiBase) return;
            try {
                const res = await fetch(`${apiBase}/api/v1/support/knowledge/categories/public`);
                if (!res.ok) throw new Error("Failed to fetch categories");
                const body = await res.json();

                const cats = body.data || [];
                setCategories(cats);

                if (cats.length > 0) {
                    setActiveTabSlug(cats[0].slug);
                }
            } catch (err: any) {
                console.error(err);
                setError("Could not load knowledge base categories.");
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, [apiBase]);

    // 2. Fetch Articles for Active Category
    useEffect(() => {
        const fetchArticles = async () => {
            if (!apiBase || !activeTabSlug) return;

            setLoadingArticles(true);
            try {
                // Using the category slug as the query parameter as defined in the controller
                const res = await fetch(`${apiBase}/api/v1/support/knowledge/articles/public?category=${activeTabSlug}`);
                if (!res.ok) throw new Error("Failed to fetch articles");
                const body = await res.json();

                setArticles(body.data || []);
            } catch (err: any) {
                console.error(err);
            } finally {
                setLoadingArticles(false);
            }
        };

        fetchArticles();
    }, [apiBase, activeTabSlug]);

    // Dynamically assign an icon based on category keywords
    const getCategoryIcon = (slug: string) => {
        const s = slug.toLowerCase();
        if (s.includes('general') || s.includes('getting-started')) return LayoutGrid;
        if (s.includes('tech') || s.includes('integration') || s.includes('api')) return Cpu;
        if (s.includes('bill') || s.includes('price') || s.includes('pay')) return CreditCard;
        if (s.includes('account') || s.includes('security') || s.includes('privacy')) return ShieldCheck;
        return BookOpen; // Default fallback icon
    };

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

                <div className="w-full max-w-5xl mx-auto bg-slate-50/50 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-center shadow-lg min-h-[400px]">
                    {loadingCategories ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-12">
                            <Loader2 className="w-8 h-8 animate-spin mb-4 text-[var(--color-primary)]" />
                            <p>Loading Knowledge Base...</p>
                        </div>
                    ) : error ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-red-400 p-12">
                            <AlertCircle className="w-8 h-8 mb-4" />
                            <p>{error}</p>
                        </div>
                    ) : categories.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-12">
                            <BookOpen className="w-8 h-8 mb-4 border-slate-200" />
                            <p>No FAQ categories found.</p>
                        </div>
                    ) : (
                        <>
                            <div className="w-full md:w-72 bg-white/50 p-6 border-b md:border-b-0 md:border-r border-slate-200 pt-10 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none backdrop-blur-sm">
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4 px-2">
                                    Knowledge Base
                                </h3>
                                <nav className="space-y-2">
                                    {categories.map((cat) => {
                                        const Icon = getCategoryIcon(cat.slug);
                                        return (
                                            <button
                                                key={cat._id}
                                                onClick={() => setActiveTabSlug(cat.slug)}
                                                className={cn(
                                                    'w-full flex items-center cursor-pointer gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm text-left',
                                                    activeTabSlug === cat.slug
                                                        ? 'bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20'
                                                        : 'text-slate-600 hover:bg-slate-100'
                                                )}
                                            >
                                                <Icon size={18} className={activeTabSlug === cat.slug ? "text-white" : "text-slate-400"} />
                                                <span className="truncate">{cat.name}</span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>

                            <div className="flex-1 p-6 md:p-10 bg-white md:rounded-r-3xl rounded-b-3xl relative">
                                {loadingArticles ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-10 md:rounded-r-3xl rounded-b-3xl">
                                        <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
                                    </div>
                                ) : null}

                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold text-slate-900 mb-2 capitalize">
                                        {categories.find(c => c.slug === activeTabSlug)?.name || 'Category'} Questions
                                    </h2>
                                    <p className="text-slate-500 text-sm">
                                        Find answers specifically related to your inquiries.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {articles.length === 0 && !loadingArticles ? (
                                        <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-xl">
                                            <p className="text-slate-400">No articles available in this category yet.</p>
                                        </div>
                                    ) : (
                                        <Accordion multiple={false} defaultValue={articles[0]?._id}>
                                            {articles.map((item) => (
                                                <AccordionItem
                                                    key={item._id}
                                                    value={item._id}
                                                    className="border border-neutral-200 bg-transparent mb-4 overflow-hidden"
                                                >
                                                    <AccordionHeader className="hover:bg-slate-50 bg-white py-4 px-4 font-semibold text-[15px]">
                                                        <span className="text-slate-900 pr-4 block">{item.title}</span>
                                                    </AccordionHeader>
                                                    <AccordionPanel className="px-4 bg-white data-active:bg-white text-sm md:text-base">
                                                        <div
                                                            className="pt-2 pb-2 leading-relaxed text-slate-500 prose prose-sm max-w-none"
                                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                                        />
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FaqTabbedExplorer;
