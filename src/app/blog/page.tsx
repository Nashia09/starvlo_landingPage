"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { Sparkles, Flame, Grid2x2 } from "lucide-react";

type Category = { _id: string; name: string; slug: string };
type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string;
  authorName?: string;
  publishedAt?: string;
  readingTimeMinutes?: number;
};

export default function BlogPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [trending, setTrending] = useState<Post[]>([]);
  const [spotlight, setSpotlight] = useState<Post | null>(null);
  const [sidebarsLoading, setSidebarsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const base = useMemo(() => process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, ""), []);

  useEffect(() => {
    if (!base) return;
    const load = async () => {
      try {
        const res = await fetch(`${base}/api/v1/blogs/categories/public`, { cache: "no-store" });
        if (!res.ok) return;
        const body = await res.json();
        const data: Category[] = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
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
    setPosts([]);
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
        const url = `${base}/api/v1/blogs/public?${params.toString()}`;
        const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
        if (res.ok) {
          const body = await res.json();
          const data: Post[] = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
          const meta = body?.meta || { total: 0, page, limit: 12 };
          setPosts((prev) => (isFirst ? data : [...prev, ...data]));
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
    const loadSidebars = async () => {
      let hasTrendingCache = false;
      let hasSpotlightCache = false;
      try {
        const tRaw = typeof window !== 'undefined' ? localStorage.getItem('lc:blog:trending') : null;
        if (tRaw) {
          const tParsed: any = JSON.parse(tRaw);
          if (tParsed && Array.isArray(tParsed.data) && typeof tParsed.ts === 'number' && Date.now() - tParsed.ts < 300000) {
            setTrending(tParsed.data);
            hasTrendingCache = true;
          }
        }
      } catch {}
      try {
        const sRaw = typeof window !== 'undefined' ? localStorage.getItem('lc:blog:spotlight') : null;
        if (sRaw) {
          const sParsed: any = JSON.parse(sRaw);
          if (sParsed && Array.isArray(sParsed.data) && typeof sParsed.ts === 'number' && Date.now() - sParsed.ts < 300000) {
            setSpotlight(sParsed.data[0] || null);
            hasSpotlightCache = true;
          }
        }
      } catch {}
      setSidebarsLoading(!(hasTrendingCache && hasSpotlightCache));
      try {
        const [tRes, sRes] = await Promise.all([
          fetch(`${base}/api/v1/blogs/public?trending=true&limit=4`, { cache: "no-store", signal: controller.signal }),
          fetch(`${base}/api/v1/blogs/public?spotlight=true&limit=1`, { cache: "no-store", signal: controller.signal }),
        ]);
        if (tRes.ok) {
          const tBody = await tRes.json();
          const tData: Post[] = Array.isArray(tBody?.data) ? tBody.data : [];
          setTrending(tData);
          try {
            if (typeof window !== 'undefined') localStorage.setItem('lc:blog:trending', JSON.stringify({ ts: Date.now(), data: tData }));
          } catch {}
        }
        if (sRes.ok) {
          const sBody = await sRes.json();
          const sData: Post[] = Array.isArray(sBody?.data) ? sBody.data : [];
          setSpotlight(sData[0] || null);
          try {
            if (typeof window !== 'undefined') localStorage.setItem('lc:blog:spotlight', JSON.stringify({ ts: Date.now(), data: sData }));
          } catch {}
        }
      } catch {}
      setSidebarsLoading(false);
    };
    loadSidebars();
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
        <section className="pt-24 pb-10 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[var(--color-primary)]/10 to-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All Articles</h1>
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
                      className={selectedCategory === c.slug ? "px-3 py-2 rounded-full bg-[var(--color-primary)] text-white" : "px-3 py-2 rounded-full border border-gray-300 bg-white text-gray-900"}
                      onClick={() => setSelectedCategory(c.slug)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </aside>
              <div className="lg:col-span-6 space-y-6">
                {sidebarsLoading && (
                  <div className="space-y-3">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border">
                      <div className="w-full h-64 md:h-80 bg-gray-200 animate-pulse" />
                    </div>
                    <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse" />
                  </div>
                )}
                {!sidebarsLoading && spotlight && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
                      <span className="font-semibold">Spotlight</span>
                    </div>
                    <Link href={`/blog/${spotlight.slug}`} className="block">
                      <div className="relative rounded-2xl overflow-hidden border">
                        <div className="absolute inset-0 bg-[var(--color-primary)]/60" />
                        {spotlight.coverImageUrl ? (
                          <img src={spotlight.coverImageUrl} alt="" className="relative w-full h-64 md:h-80 object-cover mix-blend-multiply" />
                        ) : (
                          <div className="relative w-full h-64 md:h-80" />
                        )}
                        <span className="absolute left-4 top-4 text-white text-xl">✦</span>
                        <span className="absolute right-6 top-10 text-white text-lg">﹡</span>
                        <span className="absolute left-10 bottom-8 text-white text-lg">✧</span>
                      </div>
                    </Link>
                    <Link href={`/blog/${spotlight.slug}`} className="text-xl font-semibold text-gray-900 hover:underline">
                      {spotlight.title}
                    </Link>
                    {spotlight.excerpt ? <p className="text-gray-700">{spotlight.excerpt}</p> : null}
                  </div>
                )}
                {loading && (
                  <div className="space-y-6">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="border rounded-2xl overflow-hidden">
                        <div className="w-full h-64 md:h-96 bg-gray-200 animate-pulse" />
                        <div className="p-6">
                          <div className="h-6 md:h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
                          <div className="mt-3 h-4 bg-gray-200 rounded w-full animate-pulse" />
                          <div className="mt-2 h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!loading && posts.map((p) => (
                  <article key={p._id} className="border rounded-2xl overflow-hidden hover:shadow-md transition">
                    {p.coverImageUrl ? (
                      <div className="w-full h-64 md:h-96 bg-gray-100">
                        <img src={p.coverImageUrl} alt="" className="w-full h-full object-cover" />
                      </div>
                    ) : null}
                    <div className="p-6">
                      <Link href={`/blog/${p.slug}`} className="block text-2xl md:text-3xl font-bold text-gray-900 hover:underline">
                        {p.title}
                      </Link>
                      {p.excerpt ? <p className="text-gray-700 mt-3 text-base md:text-lg">{p.excerpt}</p> : null}
                      <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                        {p.authorName ? <span>{p.authorName}</span> : null}
                        {p.publishedAt ? <span>• {new Date(p.publishedAt).toLocaleDateString()}</span> : null}
                        {p.readingTimeMinutes ? <span>• {p.readingTimeMinutes} min read</span> : null}
                      </div>
                    </div>
                  </article>
                ))}
                {!loading && posts.length > 0 && (
                  <div className="flex flex-col items-center gap-3">
                    {loadingMore && <div className="w-full h-24 bg-gray-200 rounded animate-pulse" />}
                    <button
                      onClick={() => !loadingMore && hasMore && setPage((p) => p + 1)}
                      disabled={!hasMore || loadingMore}
                      className="px-4 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-50"
                    >
                      {hasMore ? (loadingMore ? "Loading..." : "Read more") : "End of articles"}
                    </button>
                    <div ref={loadMoreRef} className="h-1" />
                  </div>
                )}
              </div>
              <aside className="lg:col-span-3 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2"><Flame className="h-4 w-4 text-[var(--color-primary)]" /><span className="font-semibold">Trending</span></div>
                  <div className="space-y-3">
                    {sidebarsLoading ? (
                      [0, 1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-16 h-12 rounded-md bg-gray-200 animate-pulse" />
                          <div className="flex-1">
                            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-3 w-24 bg-gray-200 rounded mt-2 animate-pulse" />
                          </div>
                        </div>
                      ))
                    ) : (
                      trending.map((t) => (
                        <Link href={`/blog/${t.slug}`} key={t._id} className="flex items-start gap-3">
                          {t.coverImageUrl ? (
                            <img src={t.coverImageUrl} alt="" className="w-16 h-12 rounded-md object-cover bg-gray-100" />
                          ) : (
                            <div className="w-16 h-12 rounded-md bg-gray-100" />
                          )}
                          <div className="flex-1">
                            <div className="font-medium text-sm hover:underline">{t.title}</div>
                            <div className="text-xs text-gray-500">{t.readingTimeMinutes ?? 0} min read</div>
                          </div>
                        </Link>
                      ))
                    )}
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
