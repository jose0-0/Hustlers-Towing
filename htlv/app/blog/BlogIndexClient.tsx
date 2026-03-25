"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/mdx";

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

// ─── Article card ──────────────────────────────────────────────────────────────
function ArticleCard({ post }: { post: PostMeta }) {
  const { bg, text } = getCategoryStyle(post.category);
  const date = new Date(post.publishDate + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const hasImage =
    post.featuredImage &&
    !post.featuredImage.includes("[cloudflare-r2-url]") &&
    post.featuredImage.startsWith("http");

  return (
    <article className="group bg-[#181818] rounded-2xl border border-[rgba(245,197,24,0.15)] overflow-hidden flex flex-col hover:border-[#f5c518] transition-colors duration-200">
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden relative aspect-[16/9] bg-[#111111]"
      >
        {hasImage ? (
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(245,197,24,0.03) 0, rgba(245,197,24,0.03) 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          >
            <svg
              className="w-12 h-12 text-[rgba(245,197,24,0.2)]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold font-condensed ${bg} ${text} backdrop-blur-sm border border-current/20`}
          >
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-[#888888] mb-3 font-body">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-[#444]" />
          <span>{post.author}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="font-condensed text-xl text-[#f0ece0] leading-snug mb-2 group-hover:text-[#f5c518] transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="font-body text-sm text-[#888888] leading-relaxed flex-1 line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-[rgba(245,197,24,0.1)]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#f5c518] flex items-center justify-center">
              <span className="text-[#0a0a0a] text-xs font-bold font-condensed">
                HT
              </span>
            </div>
            <span className="font-body text-xs text-[#888888]">
              {post.author}
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-semibold font-condensed text-[#f5c518] hover:gap-2 transition-all duration-200"
          >
            Read more
            <svg
              className="w-3.5 h-3.5"
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
        </div>
      </div>
    </article>
  );
}

// ─── Pagination ────────────────────────────────────────────────────────────────
function Pagination({
  currentPage,
  totalPages,
  onPage,
}: {
  currentPage: number;
  totalPages: number;
  onPage: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-xl border border-[rgba(245,197,24,0.15)] flex items-center justify-center text-[#888888] hover:border-[#f5c518] hover:text-[#f5c518] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={`w-9 h-9 rounded-xl text-sm font-semibold font-condensed transition-colors duration-200 ${
            p === currentPage
              ? "bg-[#f5c518] text-[#0a0a0a] border border-[#f5c518]"
              : "border border-[rgba(245,197,24,0.15)] text-[#888888] hover:border-[#f5c518] hover:text-[#f5c518]"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-xl border border-[rgba(245,197,24,0.15)] flex items-center justify-center text-[#888888] hover:border-[#f5c518] hover:text-[#f5c518] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

// ─── Main blog index component ─────────────────────────────────────────────────
const PER_PAGE = 6;

export default function BlogIndexClient({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handlePage(p: number) {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
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
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,197,24,0.08)] via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-20 md:pb-28">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f5c518]" />
            <span className="font-condensed text-[#f5c518] text-sm uppercase tracking-widest">
              Hustlers Towing
            </span>
          </div>
          <h1
            className="font-bebas text-[#f0ece0] leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Roadside Knowledge.
            <br />
            <span className="text-[#f5c518]">No Guesswork.</span>
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-xl leading-relaxed">
            Practical guides for Las Vegas drivers — what to do in an emergency,
            how towing works, and how to stay safe on the road.
          </p>

          {/* Stats bar */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { label: "Articles", value: `${posts.length}+` },
              { label: "Topics Covered", value: "5" },
              { label: "Available", value: "24/7" },
              { label: "Las Vegas Based", value: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-bebas text-[#f5c518]"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                >
                  {stat.value}
                </div>
                <div className="font-condensed text-[#888888] text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category filters ── */}
      <section className="sticky top-[72px] z-30 bg-[#111111] border-b border-[rgba(245,197,24,0.15)] shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {["All", ...categories].map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-condensed transition-all duration-200 border ${
                    isActive
                      ? "bg-[#f5c518] text-[#0a0a0a] border-[#f5c518]"
                      : "border-[rgba(245,197,24,0.15)] text-[#888888] hover:border-[#f5c518] hover:text-[#f0ece0]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-body text-[#888888] text-sm">
            Showing{" "}
            <span className="font-semibold text-[#f0ece0]">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "article" : "articles"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-[#f0ece0]">
                  {activeCategory}
                </span>
              </>
            )}
          </p>
          {activeCategory !== "All" && (
            <button
              onClick={() => handleCategory("All")}
              className="font-condensed text-xs text-[#f5c518] hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-[#181818] border border-[rgba(245,197,24,0.15)] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[rgba(245,197,24,0.3)]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <p className="font-body text-[#888888] text-sm">
              No articles in this category yet.
            </p>
            <button
              onClick={() => handleCategory("All")}
              className="font-condensed mt-4 text-[#f5c518] text-sm hover:underline"
            >
              View all articles
            </button>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPage={handlePage}
        />
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-[#111111] relative overflow-hidden border-t border-[rgba(245,197,24,0.15)]">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(245,197,24,0.5) 0, rgba(245,197,24,0.5) 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
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
  );
}
