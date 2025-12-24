"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { Grid2x2, Search as IconSearch, Flame } from "lucide-react";

type KbCategory = { _id: string; name: string; slug: string; description?: string };
type KbArticle = {
  _id: string;
  title: string;
  content?: string;
  categoryId?: string;
  status?: string;
  views?: number;
  lastUpdated?: string;
};

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, " ");

export default function HelpCenterPage() {
  const [categories, setCategories] = useState<KbCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<KbArticle[]>([]);
  const [trending, setTrending] = useState<KbArticle[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

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
    const t = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
  }, [base, selectedCategory, debouncedQuery]);

  useEffect(() => {
    if (!base) return;
    const controller = new AbortController();
    const load = async () => {
      const isFirst = page === 1;
      if (isFirst) setLoading(true);
      else setLoadingMore(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory) params.set("category", selectedCategory);
        if (debouncedQuery) params.set("q", debouncedQuery);
        params.set("limit", "12");
        params.set("page", String(page));
        const url = `${base}/api/v1/support/knowledge/articles/public?${params.toString()}`;
        const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
        if (res.ok) {
          const body = await res.json();
          const data: KbArticle[] = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
          const meta = body?.meta || { total: 0, page, limit: 12 };
          setArticles((prev) => (isFirst ? data : [...prev, ...data]));
          const loaded = (meta.page || page) * (meta.limit || 12);
          const total = meta.total ?? data.length;
          setHasMore(loaded < total && data.length > 0);
        }
      } catch {}
      if (isFirst) setLoading(false);
      else setLoadingMore(false);
    };
    load();
    return () => controller.abort();
  }, [base, selectedCategory, debouncedQuery, page]);

  useEffect(() => {
    if (!base) return;
    const controller = new AbortController();
    const loadTrending = async () => {
      try {
        const res = await fetch(`${base}/api/v1/support/knowledge/articles/public?limit=50&page=1`, { cache: "no-store", signal: controller.signal });
        if (res.ok) {
          const body = await res.json();
          const data: KbArticle[] = Array.isArray(body?.data) ? body.data : [];
          const sorted = [...data].sort((a, b) => (b.views || 0) - (a.views || 0));
          setTrending(sorted.slice(0, 4));
        }
      } catch {}
    };
    loadTrending();
    return () => controller.abort();
  }, [base]);

  useEffect(() => {
    if (!hasMore) return;
    const el = loadMoreRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading && !loadingMore) {
        setPage((p) => p + 1);
      }
    }, { rootMargin: "200px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasMore, loading, loadingMore]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="pt-24 pb-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Help Center</h1>
              <div className="relative w-full max-w-md">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Search articles"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <aside className="lg:col-span-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Grid2x2 className="h-4 w-4" />
                  <span>Categories</span>
                </div>
                <div className="flex lg:flex-col flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c.slug}
                      className={selectedCategory === c.slug ? "px-3 py-2 rounded-full bg-blue-600 text-white" : "px-3 py-2 rounded-full border border-gray-300 bg-white text-gray-900"}
                      onClick={() => setSelectedCategory(c.slug)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </aside>
              <div className="lg:col-span-6 space-y-6">
                {loading && (
                  <div className="space-y-6">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="border rounded-2xl overflow-hidden">
                        <div className="p-6">
                          <div className="h-6 md:h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
                          <div className="mt-3 h-4 bg-gray-200 rounded w-full animate-pulse" />
                          <div className="mt-2 h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!loading && articles.map((a) => {
                  const text = stripHtml(String(a.content || "")).trim();
                  const preview = text.length > 220 ? text.slice(0, 220) + "…" : text;
                  return (
                    <article key={a._id} className="border rounded-2xl overflow-hidden hover:shadow-md transition">
                      <div className="p-6">
                        <Link href={`/help/${a._id}`} className="block text-2xl md:text-3xl font-bold text-gray-900 hover:underline">
                          {a.title}
                        </Link>
                        {preview ? <p className="text-gray-700 mt-3 text-base md:text-lg">{preview}</p> : null}
                        <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                          {a.lastUpdated ? <span>{new Date(a.lastUpdated).toLocaleDateString()}</span> : null}
                          {typeof a.views === 'number' ? <span>• {a.views} views</span> : null}
                        </div>
                      </div>
                    </article>
                  );
                })}
                {!loading && articles.length > 0 && (
                  <div className="flex flex-col items-center gap-3">
                    {loadingMore && <div className="w-full h-24 bg-gray-200 rounded animate-pulse" />}
                    <button
                      onClick={() => !loadingMore && hasMore && setPage((p) => p + 1)}
                      disabled={!hasMore || loadingMore}
                      className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white disabled:opacity-50"
                    >
                      {hasMore ? (loadingMore ? "Loading..." : "Read more") : "End of articles"}
                    </button>
                    <div ref={loadMoreRef} className="h-1" />
                  </div>
                )}
              </div>
              <aside className="lg:col-span-3 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2"><Flame className="h-4 w-4 text-blue-600" /><span className="font-semibold">Trending</span></div>
                  <div className="space-y-3">
                    {trending.map((t) => (
                      <Link href={`/help/${t._id}`} key={t._id} className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="font-medium text-sm hover:underline">{t.title}</div>
                          <div className="text-xs text-gray-500">{typeof t.views === 'number' ? `${t.views} views` : ''}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

