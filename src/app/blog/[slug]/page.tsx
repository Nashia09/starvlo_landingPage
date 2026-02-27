import Link from "next/link";
import Footer from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
  let post: any = null;
  try {
    if (base) {
      const res = await fetch(`${base}/api/v1/blogs/public/${slug}`, { cache: "no-store" });
      if (res.ok) {
        const body = await res.json();
        post = body?.data ?? body;
      }
    }
  } catch {}

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <section className="pt-24 pb-10 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <Link href="/blog" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Articles</Link>
              </div>
              <div className="text-gray-700">Article not found.</div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    );
  }

  const plain = String(post.content || "").replace(/<[^>]*>/g, " ");
  const words = plain.split(/\s+/).filter(Boolean).length;
  const readingTime = post.readingTimeMinutes ?? Math.max(1, Math.round(words / 200));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="pt-24 pb-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <Link href="/blog" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Articles</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-2xl overflow-hidden border">
                <div className="absolute inset-0 bg-amber-300" />
                {post.coverImageUrl ? (
                  <img src={post.coverImageUrl} alt="" className="relative w-full h-64 md:h-80 object-cover mix-blend-multiply" />
                ) : (
                  <div className="relative w-full h-64 md:h-80 bg-gray-100" />
                )}
                <span className="absolute left-4 top-4 text-white text-xl">✦</span>
                <span className="absolute right-6 top-10 text-white text-lg">﹡</span>
                <span className="absolute left-10 bottom-8 text-white text-lg">✧</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 uppercase tracking-wide">{readingTime} min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>
                <div className="mt-4 flex items-center gap-3 text-gray-600">
                  <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">{(post.authorName || "A").charAt(0).toUpperCase()}</div>
                  {post.authorName ? <span className="text-sm">{post.authorName}</span> : null}
                  {post.publishedAt ? <span className="text-sm">• {new Date(post.publishedAt).toLocaleDateString()}</span> : null}
                </div>
              </div>
            </div>
            <div className="mt-10 max-w-3xl">
              {post.excerpt ? <p className="text-gray-700 text-lg mb-4">{post.excerpt}</p> : null}
              <div className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: String(post.content || "") }} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
