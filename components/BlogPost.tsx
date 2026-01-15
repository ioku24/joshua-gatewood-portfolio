import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogPost as BlogPostType, BLOG_API_URL, demoPosts } from '../data/blog';
import { siteConfig } from '../data/projects';

/**
 * BlogPost Component
 *
 * Note: This component renders HTML content from your RankEasy API using dangerouslySetInnerHTML.
 * This is acceptable here because:
 * 1. Content comes from your own controlled API (RankEasy)
 * 2. RankEasy generates the content, not untrusted users
 *
 * If you ever allow user-submitted content, add DOMPurify:
 * npm install dompurify @types/dompurify
 * import DOMPurify from 'dompurify';
 * dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
 */

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Try fetching single post or find from list
        const response = await fetch(`${BLOG_API_URL}/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          // Fallback: fetch all and find by slug
          const listResponse = await fetch(BLOG_API_URL);
          if (listResponse.ok) {
            const data = await listResponse.json();
            const posts = data.articles || data;
            const found = posts.find((p: BlogPostType) => p.slug === slug);
            if (found) {
              setPost(found);
            } else {
              navigate('/blog', { replace: true });
            }
          } else {
            throw new Error('Failed to fetch');
          }
        }
      } catch (err) {
        // Use demo posts as fallback
        const found = demoPosts.find((p) => p.slug === slug);
        if (found) {
          setPost(found);
        } else {
          navigate('/blog', { replace: true });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-24 mb-12" />
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-slate-100 rounded w-1/4 mb-8" />
            <div className="space-y-3">
              <div className="h-4 bg-slate-100 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-2/3" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <article className="relative max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Blog</span>
        </Link>

        {/* Header */}
        <header className="mb-10 animate-fade-in">
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-slate-900 tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>
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
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-10 animate-fade-in animation-delay-100">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full rounded-lg shadow-sm"
            />
          </div>
        )}

        {/* Content - HTML from your own RankEasy API (trusted source) */}
        <div
          className="prose prose-slate prose-lg max-w-none animate-fade-in animation-delay-100
            prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight
            prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-medium
            prose-ul:text-slate-600 prose-ol:text-slate-600
            prose-blockquote:border-indigo-500 prose-blockquote:text-slate-600
            prose-code:text-slate-800 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-slate-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200/60 animate-fade-in animation-delay-200">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              ← More posts
            </Link>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default BlogPost;
