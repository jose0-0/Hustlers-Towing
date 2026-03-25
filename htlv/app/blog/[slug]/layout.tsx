import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://hustlerstowing.com/blog/${post.slug}`,
      siteName: "Hustlers Towing",
      images: post.featuredImage
        ? [{ url: post.featuredImage, alt: post.featuredImageAlt }]
        : [],
      type: "article",
      publishedTime: post.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
