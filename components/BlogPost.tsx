import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogPost as BlogPostType, BLOG_API_URL, demoPosts } from '../data/blog';

const PILLAR_LABELS: Record<string, string> = {
  'The Build': 'BUILD',
  'The Mindset': 'MINDSET',
  'The Business': 'BUSINESS',
};

interface TocItem {
  id: string;
  text: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(BLOG_API_URL);
        if (response.ok) {
          const data = await response.json();
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
      } catch {
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

  // Extract TOC from rendered content
  useEffect(() => {
    if (!contentRef.current) return;
    const headings = contentRef.current.querySelectorAll('h2');
    const items: TocItem[] = [];
    headings.forEach((h, i) => {
      const id = h.textContent
        ?.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 50) || `section-${i}`;
      h.id = id;
      items.push({ id, text: h.textContent || '' });
    });
    setTocItems(items);
  }, [post]);

  // Intersection observer for active TOC
  useEffect(() => {
    if (!contentRef.current || tocItems.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocItems]);

  // Read progress
  const handleScroll = useCallback(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setReadProgress((window.scrollY / docHeight) * 100);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnX = () => {
    if (!post) return;
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6 pt-32">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-24 mb-12" />
            <div className="h-10 bg-slate-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-slate-100 rounded w-1/4 mb-12" />
            <div className="space-y-4">
              <div className="h-4 bg-slate-100 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-2/3" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) return null;

  return (
    <main className="min-h-screen bg-[#FAFAF8] font-sans">
      {/* Read progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#92680A] z-50 transition-[width] duration-150"
        style={{ width: `${readProgress}%` }}
      />

      {/* Grain overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Post Header */}
        <header className="pt-32 pb-14 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-slate-400 hover:text-slate-900 transition-colors mb-10"
          >
            <span>←</span> back to blog
          </Link>

          <div className="flex items-center gap-3 mb-5 font-mono text-[0.68rem] uppercase tracking-[0.08em] animate-fade-up" style={{ opacity: 0, animationDelay: '0s' }}>
            <span className="px-2.5 py-0.5 rounded-full bg-[rgba(92,112,128,0.1)] text-[#4A6170] font-medium">
              {PILLAR_LABELS[(post as any).pillar] || 'POST'}
            </span>
            <span className="text-slate-400">{formatDate(post.published_at)}</span>
            {post.reading_time && (
              <span className="text-slate-400">{post.reading_time} min read</span>
            )}
          </div>

          <h1
            className="font-serif text-[clamp(1.9rem,5vw,3rem)] leading-[1.1] text-slate-900 mb-5 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.08s' }}
          >
            {post.title}
          </h1>

          <div
            className="font-mono text-[0.72rem] text-slate-400 flex items-center gap-2 animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.16s' }}
          >
            <span>By <a href="https://x.com/joshgatewood" target="_blank" rel="noopener noreferrer" className="text-[#5C7080] hover:text-slate-900 transition-colors">@joshgatewood</a></span>
            <span className="text-slate-300">·</span>
            <span>Published {formatDate(post.published_at)}</span>
          </div>
        </header>

        {/* Post Layout: Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-20 pb-16">
          {/* Article */}
          <article
            ref={contentRef}
            className="prose prose-slate prose-lg max-w-none animate-fade-up
              prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight
              prose-h2:text-[1.5rem] prose-h2:border-t prose-h2:border-slate-200/60 prose-h2:pt-4 prose-h2:mt-12
              prose-h3:text-[1.15rem] prose-h3:mt-8
              prose-p:text-slate-600 prose-p:text-[1.05rem] prose-p:leading-[1.85] prose-p:font-light
              prose-a:text-[#D4A84B] prose-a:no-underline prose-a:decoration-[#D4A84B]/30 prose-a:underline-offset-2 hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-medium
              prose-ul:text-slate-600 prose-ol:text-slate-600
              prose-li:text-[1.05rem] prose-li:leading-[1.85] prose-li:font-light
              prose-blockquote:border-l-[3px] prose-blockquote:border-[#D4A84B] prose-blockquote:font-serif prose-blockquote:text-[1.1rem] prose-blockquote:italic prose-blockquote:leading-[1.65] prose-blockquote:text-slate-600
              prose-code:text-slate-800 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-slate-900"
            style={{ opacity: 0, animationDelay: '0.24s' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Sidebar */}
          <aside className="order-first lg:order-last">
            <div className="lg:sticky lg:top-20 space-y-4">
              {/* Share */}
              <div className="bg-white border border-slate-200/80 rounded-lg p-5 animate-fade-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-slate-400 mb-3">
                  Share
                </div>
                <div className="space-y-2">
                  <button
                    onClick={shareOnX}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 border border-slate-200 rounded-md font-mono text-[0.72rem] text-slate-600 hover:border-[#D4A84B] hover:bg-[rgba(212,168,75,0.05)] transition-all"
                  >
                    <span className="text-base font-bold">𝕏</span>
                    Share on X
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 border rounded-md font-mono text-[0.72rem] transition-all ${
                      copied
                        ? 'border-green-500 text-green-600 bg-green-50'
                        : 'border-slate-200 text-slate-600 hover:border-[#D4A84B] hover:bg-[rgba(212,168,75,0.05)]'
                    }`}
                  >
                    <span className="text-base">{copied ? '✓' : '🔗'}</span>
                    {copied ? 'Copied!' : 'Copy link'}
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <div className="bg-white border border-slate-200/80 rounded-lg p-5 animate-fade-up" style={{ opacity: 0, animationDelay: '0.36s' }}>
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-slate-400 mb-3">
                    In this post
                  </div>
                  <ul className="space-y-0.5">
                    {tocItems.map(({ id, text }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`block font-mono text-[0.68rem] py-1.5 px-2 rounded transition-all ${
                            activeId === id
                              ? 'bg-[#F5F5F0] text-slate-900'
                              : 'text-slate-400 hover:text-slate-900 hover:bg-[#F5F5F0]'
                          }`}
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200/60">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="font-mono text-[0.72rem] text-slate-400 hover:text-slate-900 transition-colors"
            >
              ← More posts
            </Link>
            <p className="font-mono text-[0.72rem] text-slate-400">
              © {new Date().getFullYear()} Joshua Gatewood
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default BlogPostPage;
