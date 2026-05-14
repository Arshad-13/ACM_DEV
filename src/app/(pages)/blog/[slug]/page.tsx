import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, CalendarIcon, ClockIcon } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);

    return (
      <div className="min-h-screen pt-24 pb-20 w-full overflow-x-hidden">
        <div className="max-w-[680px] mx-auto px-4 md:px-0">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.meta.tags?.map((t: string) => (
                <span key={t} className="px-2 py-0.5 rounded text-xs font-semibold bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.meta.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)] border-y border-white/10 py-4">
              <span className="font-medium text-white">{post.meta.author}</span>
              <span className="flex items-center gap-1.5 text-sm"><CalendarIcon className="w-4 h-4" /> {post.meta.date}</span>
              <span className="flex items-center gap-1.5 text-sm"><ClockIcon className="w-4 h-4" /> {post.meta.readingTime}</span>
            </div>
          </header>

          <div className="prose prose-invert prose-sky max-w-none prose-lg leading-[1.8] prose-headings:font-bold prose-a:text-[var(--accent)] hover:prose-a:text-[var(--accent-dark)]">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </div>
    );
  } catch (e) {
    return notFound();
  }
}
