import { getAllPosts, getAllCategories } from "@/lib/mdx";
import BlogIndexClient from "./BlogIndexClient";

export const revalidate = 86400;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return <BlogIndexClient posts={posts} categories={categories} />;
}
