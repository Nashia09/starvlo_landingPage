"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";

type KbCategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
};

type KbArticle = {
  _id: string;
  title: string;
  categoryId: string;
  lastUpdated?: string;
  views?: number;
};

export default function HelpCenterPage() {
  const [categories, setCategories] = useState<KbCategory[]>([]);
  const [articles, setArticles] = useState<KbArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const base = useMemo(() => process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, ""), []);

  useEffect(() => {
    if (!base) return;
    const load = async () => {
      try {
        const res = await fetch(`${base}/api/v1/support/knowledge/categories/public`, { cache: "no-store" });
        if (!res.ok) return;
        const body = await res.json();
        const data: KbCategory[] = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
        setCategories(data);
        if (data.length > 0) setSelectedCategory(data[0].slug);
      } catch {}
    };
    load();
  }, [base]);

  useEffect(() => {
    if (!base) return;
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory) params.set("category", selectedCategory);
        if (query) params.set("q", query);
        const res = await fetch(`${base}/api/v1/support/knowledge/articles/public?${params.toString()}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!res.ok) return;
        const body = await res.json();
        const data: KbArticle[] = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
        setArticles(data);
      } catch {}
      setLoading(false);
    };
    load();
    return () => controller.abort();
  }, [base, selectedCategory, query]);

  return (
    <WavyBackground
      containerClassName="relative w-full min-h-screen pt-28"
      className="w-full max-w-7xl mx-auto"
      colors={["#7CBECE", "#A1D1D8", "#5A9BA5", "#7CBECE", "#A1D1D8"]}
      waveWidth={100}
      backgroundFill="#0A0F18"
      blur={10}
      waveOpacity={0.6}
      speed="slow"
    >
      <div className="container mx-auto px-4 pb-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Help Center</h1>
          <p className="text-neutral-200 mt-3">Find answers, tutorials, and best practices</p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <h2 className="text-white font-semibold mb-3">Categories</h2>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat._id}>
                    <button
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        selectedCategory === cat.slug
                          ? "bg-white/10 text-white"
                          : "text-neutral-200 hover:bg-white/5"
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="lg:col-span-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold">Articles</h2>
                {loading && <span className="text-neutral-300 text-sm">Loading…</span>}
              </div>
              {articles.length === 0 ? (
                <div className="text-neutral-300">No articles found.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {articles.map((a) => (
                    <Link key={a._id} href={`#`}>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition">
                        <div className="text-white font-medium">{a.title}</div>
                        {a.lastUpdated && (
                          <div className="text-neutral-400 text-sm mt-1">Updated {new Date(a.lastUpdated).toLocaleDateString()}</div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </WavyBackground>
  );
}
