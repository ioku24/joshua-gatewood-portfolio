import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogPost, BLOG_API_URL, demoPosts } from '../data/blog';
import { siteConfig } from '../data/projects';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(BLOG_API_URL);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data.articles || data);
      } catch (err) {
        console.log('Using demo posts - API not configured yet');
        setPosts(demoPosts);
        setError(null); // Don't show error, just use demo
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to {siteConfig.name.split(' ')[0]}</span>
        </Link>

        {/* Header */}
        <header className="mb-12 animate-fade-in">
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-slate-900 tracking-tight mb-3">
            Blog
          </h1>
          <p className="text-slate-500">
            Thoughts on marketing ops, SEO, and building products.
          </p>
        </header>

        {/* Posts List */}
        <section className="animate-fade-in animation-delay-100">
          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-5 bg-slate-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-slate-100 rounded w-full mb-2" />
                  <div className="h-3 bg-slate-100 rounded w-1/4" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-slate-500">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <h2 className="text-lg font-medium text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} />
                        {formatDate(post.published_at)}
                      </span>
                      {post.reading_time && (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.reading_time} min read
                        </span>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200/60 animate-fade-in animation-delay-200">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </footer>
      </div>
    </main>
  );
};

export default BlogList;
