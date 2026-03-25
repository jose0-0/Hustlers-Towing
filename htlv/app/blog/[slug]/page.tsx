import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import ArticlePageClient from "./ArticlePageClient";

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return <ArticlePageClient post={post} />;
}
