import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/blog");

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  if (!fs.existsSync(contentDir)) return [];
  const slugs = fs.readdirSync(contentDir);
  const posts = slugs.filter(slug => slug.endsWith(".mdx")).map((slug) => getPostBySlug(slug));
  // Sort posts by date, descending
  return posts.sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
}
