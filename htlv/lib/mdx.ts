import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const INDEX_PATH = path.join(BLOG_DIR, "index.json");

export type PostMeta = {
  slug: string;
  title: string;
  publishDate: string;
  status: string;
  author: string;
  category: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  featuredImage: string;
  featuredImageAlt: string;
  relatedServices: string[];
  schema: string;
};

export type Post = PostMeta & {
  content: string;
};

type IndexEntry = {
  slug: string;
  publishDate: string;
  status: string;
};

function getIndex(): IndexEntry[] {
  const raw = fs.readFileSync(INDEX_PATH, "utf-8");
  return JSON.parse(raw);
}

function isPublished(entry: IndexEntry): boolean {
  if (entry.status !== "published") return false;
  const today = new Date().toISOString().split("T")[0];
  return entry.publishDate <= today;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const index = getIndex();
  const published = index.filter(isPublished);

  const posts = published.map((entry) => {
    const filePath = path.join(BLOG_DIR, `${entry.slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return data as PostMeta;
  });

  return posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const index = getIndex();
  const entry = index.find((e) => e.slug === slug);

  if (!entry || !isPublished(entry)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    ...(data as PostMeta),
    content: processed.toString(),
  };
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats).sort();
}

export function getAllSlugs(): string[] {
  const index = getIndex();
  return index.map((e) => e.slug);
}

export function getPaginatedPosts(
  posts: PostMeta[],
  page: number,
  perPage = 9,
): { posts: PostMeta[]; totalPages: number } {
  const totalPages = Math.ceil(posts.length / perPage);
  const start = (page - 1) * perPage;
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
  };
}
