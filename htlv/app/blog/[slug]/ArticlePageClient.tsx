"use client";

import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/mdx";

// ─── Category badge colors ─────────────────────────────────────────────────────
const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  "Roadside Tips": { bg: "bg-green-900/40", text: "text-green-400" },
  "Market & Industry": { bg: "bg-blue-900/40", text: "text-blue-400" },
  "Local SEO": { bg: "bg-yellow-900/40", text: "text-yellow-400" },
  "Trust & Brand": { bg: "bg-rose-900/40", text: "text-rose-400" },
  Seasonal: { bg: "bg-purple-900/40", text: "text-purple-400" },
};

function getCategoryStyle(category: string) {
  return (
    CATEGORY_STYLES[category] ?? {
      bg: "bg-[rgba(245,197,24,0.1)]",
      text: "text-[#f5c518]",
    }
  );
}

export default function ArticlePageClient({ post }: { post: Post }) {
  const { bg, text } = getCategoryStyle(post.category);

  const hasImage =
    post.featuredImage &&
    !post.featuredImage.includes("[cloudflare-r2-url]") &&
    post.featuredImage.startsWith("http");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: hasImage ? post.featuredImage : undefined,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Hustlers Towing",
      url: "https://hustlerstowing.com",
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0a0a0a]">
        {/* ── Hero ── */}
        <section className="relative bg-[#111111] overflow-hidden">
          {/* Diagonal stripe texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(245,197,24,0.5) 0, rgba(245,197,24,0.5) 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,197,24,0.06)] via-transparent to-transparent pointer-events-none" />

          {/* Hero image overlay if available */}
          {hasImage && (
            <div className="absolute inset-0">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                className="object-cover opacity-15"
                priority
              />
            </div>
          )}

          <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-14">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-condensed text-sm text-[#888888] mb-6">
              <Link href="/" className="hover:text-[#f5c518] transition-colors">
                Home
              </Link>
              <span className="text-[#444]">›</span>
              <Link
                href="/blog"
                className="hover:text-[#f5c518] transition-colors"
              >
                Resources
              </Link>
              <span className="text-[#444]">›</span>
              <span className="text-[#888888] line-clamp-1">{post.title}</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`font-condensed text-xs px-2.5 py-1 rounded-full ${bg} ${text}`}
              >
                {post.category}
              </span>
              <span className="font-body text-[#888888] text-sm">
                {new Date(post.publishDate + "T00:00:00").toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  },
                )}
              </span>
              <span className="text-[#444]">·</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f5c518] flex items-center justify-center flex-shrink-0">
                  <span className="font-condensed text-[#0a0a0a] text-[10px] font-bold">
                    HT
                  </span>
                </div>
                <span className="font-body text-[#888888] text-sm">
                  {post.author}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1
              className="font-bebas text-[#f0ece0] leading-tight max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* ── Article content ── */}
            <article
              className="flex-1 min-w-0
                prose prose-invert prose-base max-w-none
                prose-headings:font-condensed prose-headings:font-normal prose-headings:text-[#f0ece0] prose-headings:tracking-wide
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:font-body prose-p:text-[#aaaaaa] prose-p:leading-relaxed prose-p:my-4
                prose-strong:text-[#f0ece0] prose-strong:font-semibold
                prose-a:text-[#f5c518] prose-a:no-underline hover:prose-a:underline
                prose-ul:text-[#aaaaaa] prose-ul:font-body
                prose-ol:text-[#aaaaaa] prose-ol:font-body
                prose-li:my-1 prose-li:leading-relaxed
                prose-hr:border-[rgba(245,197,24,0.15)] prose-hr:my-10
                prose-blockquote:border-l-[#f5c518] prose-blockquote:text-[#888888] prose-blockquote:not-italic
                prose-code:text-[#f5c518] prose-code:bg-[rgba(245,197,24,0.1)] prose-code:px-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ── Sidebar ── */}
            <aside className="lg:w-64 xl:w-72 flex-shrink-0 space-y-5">
              {/* Related services */}
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div className="bg-[#111111] border border-[rgba(245,197,24,0.15)] rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-4 border-b border-[rgba(245,197,24,0.15)]">
                    <div className="w-5 h-px bg-[#f5c518]" />
                    <p className="font-condensed text-[#f5c518] text-sm uppercase tracking-widest">
                      Our Services
                    </p>
                  </div>
                  <ul className="divide-y divide-[rgba(245,197,24,0.08)]">
                    {post.relatedServices.map((href) => {
                      const label = href
                        .replace(/^\//, "")
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase());
                      return (
                        <li key={href}>
                          <Link
                            href={href}
                            className="flex items-center justify-between px-5 py-3 font-body text-sm text-[#aaaaaa] hover:text-[#f5c518] hover:bg-[rgba(245,197,24,0.04)] transition-all group"
                          >
                            <span>{label}</span>
                            <svg
                              className="w-3.5 h-3.5 text-[#444] group-hover:text-[#f5c518] transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Emergency CTA */}
              <div className="bg-[#111111] border border-[rgba(245,197,24,0.15)] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-[rgba(245,197,24,0.15)]">
                  <div className="w-5 h-px bg-[#f5c518]" />
                  <p className="font-condensed text-[#f5c518] text-sm uppercase tracking-widest">
                    Need Help?
                  </p>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <p className="font-body text-sm text-[#888888] leading-relaxed">
                    Our team is ready to help get you back on the road.
                  </p>
                  <a
                    href="tel:7021234567"
                    className="flex items-center gap-2 font-condensed text-[#f0ece0] text-base hover:text-[#f5c518] transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-[#f5c518]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    (702) 123-4567
                  </a>
                  <a
                    href="http://public.towbook.com/dLd7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center font-condensed text-sm bg-[#f5c518] text-[#0a0a0a] rounded-xl py-2.5 hover:bg-[#e8a800] transition-colors font-bold"
                  >
                    Request a Tow Online
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Author bio ── */}
          <div className="mt-14 pt-10 border-t border-[rgba(245,197,24,0.15)]">
            <div className="flex items-start gap-4 bg-[#111111] border border-[rgba(245,197,24,0.15)] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#f5c518] flex items-center justify-center flex-shrink-0">
                <span className="font-bebas text-[#0a0a0a] text-xl">HT</span>
              </div>
              <div>
                <p className="font-condensed text-[#f0ece0] text-base mb-1">
                  {post.author}
                </p>
                <p className="font-body text-sm text-[#888888] leading-relaxed">
                  Hustlers Towing serves the greater Las Vegas area 24 hours a
                  day, 7 days a week. Our drivers are experienced, professional,
                  and ready to get you back on the road fast.
                </p>
              </div>
            </div>
          </div>

          {/* ── Back to articles ── */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-condensed text-sm text-[#888888] hover:text-[#f5c518] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#111111] relative overflow-hidden border-t border-[rgba(245,197,24,0.15)]">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(245,197,24,0.5) 0, rgba(245,197,24,0.5) 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <div className="relative max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="font-bebas text-[#f0ece0] leading-none mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Broken down right now?
              </h2>
              <p className="font-body text-[#888888] text-base">
                We&apos;re on the road 24/7. Call us and we&apos;ll give you a
                real ETA.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:7021234567"
                className="px-6 py-3 rounded-xl bg-[#f5c518] text-[#0a0a0a] font-condensed font-bold text-sm hover:bg-[#e8a800] transition-colors duration-200 text-center"
              >
                (702) 123-4567
              </a>
              <a
                href="http://public.towbook.com/dLd7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[rgba(245,197,24,0.3)] text-[#f0ece0] font-condensed font-bold text-sm hover:border-[#f5c518] hover:text-[#f5c518] transition-colors duration-200 text-center"
              >
                Request Online
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
