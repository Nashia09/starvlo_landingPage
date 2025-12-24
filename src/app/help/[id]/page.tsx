import Link from "next/link";
import Footer from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";

export default async function HelpArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
  let article: any = null;
  try {
    if (base) {
      const res = await fetch(`${base}/api/v1/support/knowledge/articles/public/${id}`, { cache: "no-store" });
      if (res.ok) {
        const body = await res.json();
        article = body?.data ?? body;
      }
    }
  } catch {}

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <section className="pt-24 pb-10 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <Link href="/help" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Help Center</Link>
              </div>
              <div className="text-gray-700">Article not found.</div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    );
  }

  const plain = String(article.content || "").replace(/<[^>]*>/g, " ");
  const words = plain.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(words / 200));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="pt-24 pb-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <Link href="/help" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Help Center</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-2xl overflow-hidden border">
                <div className="relative w-full h-64 md:h-80 bg-gray-100" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 uppercase tracking-wide">{readingTime} min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{article.title}</h1>
                <div className="mt-4 flex items-center gap-3 text-gray-600">
                  {article.lastUpdated ? <span className="text-sm">Updated {new Date(article.lastUpdated).toLocaleDateString()}</span> : null}
                  {typeof article.views === 'number' ? <span className="text-sm">• {article.views} views</span> : null}
                </div>
              </div>
            </div>
            <div className="mt-10 max-w-3xl">
              <div className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: String(article.content || "") }} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

