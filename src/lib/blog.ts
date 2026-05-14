import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  meta: {
    title: string;
    date: string;
    author: string;
    readingTime: string;
    excerpt?: string;
    tags?: string[];
  };
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content/blog");

export function getPostBySlug(slug: string): BlogPost {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(contentDir, `${realSlug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post file not found: ${fullPath}`);
    }
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return { slug: realSlug, meta: data as BlogPost["meta"], content };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    throw error;
  }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  const slugs = fs.readdirSync(contentDir);
  const posts = slugs.filter(slug => slug.endsWith(".mdx")).map((slug) => getPostBySlug(slug));
  // Sort posts by date, descending
  return posts.sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
}
