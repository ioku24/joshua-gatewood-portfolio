import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, BLOG_API_URL, demoPosts } from "../data/blog";
import { siteConfig } from "../data/projects";

const PILLAR_LABELS: Record<string, string> = {
  "The Build": "BUILD",
  "The Mindset": "MINDSET",
  "The Business": "BUSINESS",
};

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(BLOG_API_URL);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data.articles || data);
      } catch {
        setPosts(demoPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const postCount = posts.length;
  const latestDate = posts[0]?.published_at
    ? new Date(posts[0].published_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-[#FAFAF8] font-sans">
      {/* Grain overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Hero */}
        <header className="pt-32 pb-16 border-b border-slate-200/60">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 mb-6 animate-fade-up"
            style={{ animationDelay: "0s" }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 animate-pulse-dot" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate-400 font-light">
              [build.log], writing in public
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display font-extrabold tracking-[-0.02em] text-[clamp(2.4rem,5.5vw,3.75rem)] leading-[1.05] text-slate-900 mb-5 animate-fade-up"
            style={{ animationDelay: "0.08s", opacity: 0 }}
          >
            Building with AI<span className="text-[#92680A]">.</span>
            <br />
            Showing the mess<span className="text-[#92680A]">.</span>
          </h1>

          {/* Description */}
          <p
            className="text-slate-500 text-[1.05rem] leading-relaxed max-w-lg font-light mb-6 animate-fade-up"
            style={{ animationDelay: "0.16s", opacity: 0 }}
          >
            Running AI agent teams for a real business. Every win, every
            failure, every decision, documented as it happens.
          </p>

          {/* Stats */}
          <div
            className="flex items-center gap-3 font-mono text-[0.72rem] text-slate-400 animate-fade-up"
            style={{ animationDelay: "0.24s", opacity: 0 }}
          >
            <span>
              <span className="text-slate-600 font-medium">{postCount}</span>{" "}
              {postCount === 1 ? "post" : "posts"}
            </span>
            <span className="text-slate-300">·</span>
            <span>{latestDate}</span>
            <span className="text-slate-300">·</span>
            <a
              href="https://x.com/joshgatewood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C7080] hover:text-slate-900 transition-colors"
            >
              @joshgatewood
            </a>
          </div>
        </header>

        {/* Posts */}
        <section className="py-12">
          {loading ? (
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse py-6">
                  <div className="flex gap-3 mb-3">
                    <div className="h-4 w-16 bg-slate-200 rounded-full" />
                    <div className="h-4 w-24 bg-slate-100 rounded" />
                  </div>
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-slate-100 rounded w-full mb-2" />
                  <div className="h-4 bg-slate-100 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-slate-400 font-mono text-sm">
              No posts yet. First one is in the pipeline.
            </p>
          ) : (
            <div className="divide-y divide-slate-200/60">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group grid grid-cols-[1fr_auto] gap-4 py-8 first:pt-0 animate-fade-up"
                  style={{
                    animationDelay: `${0.3 + index * 0.06}s`,
                    opacity: 0,
                  }}
                >
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
                      <span className="px-2.5 py-0.5 rounded-full bg-[rgba(92,112,128,0.1)] text-[#4A6170] font-medium">
                        {PILLAR_LABELS[(post as any).pillar] || "POST"}
                      </span>
                      <span className="text-slate-400">
                        {formatDate(post.published_at)}
                      </span>
                      {post.reading_time && (
                        <span className="text-slate-400">
                          {post.reading_time} min read
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.15rem,2.5vw,1.5rem)] text-slate-900 group-hover:text-[#5C7080] transition-colors duration-200 mb-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-500 text-[0.9rem] leading-[1.75] font-light line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="text-slate-300 text-lg mt-3 group-hover:text-[#5C7080] group-hover:translate-x-1.5 transition-all duration-300 hidden sm:block">
                    →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200/60">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-mono text-[0.72rem] text-slate-400 hover:text-slate-900 transition-colors"
            >
              {siteConfig.name.split(" ")[0].toLowerCase()}gatewood
            </Link>
            <div className="flex items-center gap-5 font-mono text-[0.72rem]">
              <a
                href="https://x.com/joshgatewood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                @joshgatewood
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default BlogList;
