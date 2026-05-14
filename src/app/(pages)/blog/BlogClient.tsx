"use client";
import { useState } from "react";
import Link from "next/link";
import { ClockIcon, CalendarIcon } from "lucide-react";

interface BlogPost {
  slug: string;
  meta: {
    title: string;
    date: string;
    author: string;
    readingTime: string;
    excerpt?: string;
    tags?: string[];
  };
}

export default function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(initialPosts.flatMap(p => p.meta.tags || [])))];

const filteredPosts: BlogPost[] = selectedTag === "All" 
    ? initialPosts 
    : initialPosts.filter(p => p.meta.tags?.includes(selectedTag));

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-20 w-full overflow-x-hidden">
      <div className="container-width">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Resources</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Insights, tutorials, and recaps from the ACM SVNIT community.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allTags.map(tag => (
            <button
              key={tag as string}
              onClick={() => setSelectedTag(tag as string)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selectedTag === tag 
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]" 
                  : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30"
              }`}
            >
              {tag as string}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">No posts found for this category.</div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="group block mb-12">
            <div className="card-base rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-80">
              <div className="w-full md:w-1/2 h-48 md:h-full bg-gradient-to-br from-indigo-500/20 to-sky-500/20 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[var(--surface-raised)]">
                <div className="flex gap-2 mb-4">
                  {featuredPost.meta.tags?.map((t: string) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-semibold bg-[var(--accent-glow)] text-[var(--accent)]">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {featuredPost.meta.title}
                </h2>
                <p className="text-[var(--text-secondary)] mb-6 line-clamp-3">
                  {featuredPost.meta.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mt-auto">
                  <span>{featuredPost.meta.author}</span>
                  <div className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5"/> {featuredPost.meta.date}</div>
                  <div className="flex items-center gap-1"><ClockIcon className="w-3.5 h-3.5"/> {featuredPost.meta.readingTime}</div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid Posts */}
        {gridPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <div className="card-base rounded-xl overflow-hidden flex flex-col h-full">
                  <div className="w-full h-40 bg-gradient-to-br from-zinc-800 to-zinc-900 relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.meta.tags?.map((t: string) => (
                        <span key={t} className="px-2 py-0.5 rounded text-xs font-semibold bg-[var(--surface)] text-zinc-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {post.meta.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                      {post.meta.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs text-[var(--text-muted)] border-t border-white/5 pt-4">
                      <span>{post.meta.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><CalendarIcon className="w-3 h-3"/> {post.meta.date}</span>
                        <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3"/> {post.meta.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
