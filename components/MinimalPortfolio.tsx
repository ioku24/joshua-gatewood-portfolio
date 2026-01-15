import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, ExternalLink, Calendar, FileText, X, Play, PenLine } from 'lucide-react';
import { siteConfig, ProjectMedia } from '../data/projects';

const iconMap = {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
};

const MinimalPortfolio: React.FC = () => {
  const [lightboxMedia, setLightboxMedia] = useState<ProjectMedia | null>(null);

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-2xl mx-auto px-6 py-16 md:py-24">

        {/* ===== HEADER ===== */}
        <header className="mb-16 animate-fade-in text-center">
          {/* Photo - Centered */}
          <div className="flex justify-center mb-8">
            <img
              src={siteConfig.photoUrl}
              alt={siteConfig.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-top ring-2 ring-slate-200/50 shadow-lg"
            />
          </div>

          {/* Name - Editorial serif */}
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-3">
            {siteConfig.name}
          </h1>

          {/* Tagline - Understated */}
          <p className="text-lg md:text-xl text-slate-500 font-light">
            {siteConfig.tagline}
          </p>
        </header>

        {/* ===== PROJECTS ===== */}
        <section className="mb-16 animate-fade-in animation-delay-100">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            Projects
          </h2>

          <div className="space-y-8">
            {siteConfig.projects.map((project, index) => (
              <div key={index} className="group">
                {/* Project Header */}
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-slate-300 mt-0.5 select-none">—</span>
                  <div className="flex-1">
                    {project.url !== '#' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-medium hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5"
                      >
                        {project.name}
                        {project.isLive && (
                          <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    ) : (
                      <span className="text-slate-900 font-medium">
                        {project.name}
                      </span>
                    )}
                    {project.context && (
                      <span className="text-slate-400 text-sm ml-1.5">
                        {project.context}
                      </span>
                    )}
                    <span className="text-slate-500 block mt-1">
                      {project.description}
                    </span>
                  </div>
                </div>

                {/* Proof Thumbnails (Images, Videos & Embeds) */}
                {project.media && project.media.length > 0 && (
                  <div className="ml-6 flex gap-2 flex-wrap">
                    {project.media.map((media, mediaIndex) => {
                      // Get thumbnail URL based on media type
                      const getThumbnailUrl = () => {
                        if (media.thumbnail) return media.thumbnail;
                        if (media.type === 'image') return media.url;
                        if (media.url.includes('youtube.com') || media.url.includes('youtu.be')) {
                          const videoId = media.url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/)?.[1];
                          return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
                        }
                        return null; // Local videos and embeds without thumbnail
                      };
                      const thumbnailUrl = getThumbnailUrl();
                      const isPlayable = media.type === 'video' || media.type === 'embed';

                      return (
                        <button
                          key={mediaIndex}
                          onClick={() => setLightboxMedia(media)}
                          className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group/thumb"
                        >
                          {thumbnailUrl ? (
                            <img
                              src={thumbnailUrl}
                              alt={`${project.name} ${media.type} ${mediaIndex + 1}`}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            /* Placeholder for videos/embeds without thumbnail */
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                              <Play size={24} className="text-slate-400" />
                            </div>
                          )}
                          {/* Play icon overlay for videos/embeds */}
                          {isPlayable && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30 group-hover/thumb:bg-slate-900/40 transition-colors">
                              <Play size={20} className="text-white fill-white" />
                            </div>
                          )}
                          {media.type === 'image' && (
                            <div className="absolute inset-0 bg-slate-900/0 group-hover/thumb:bg-slate-900/10 transition-colors" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="mb-16 animate-fade-in animation-delay-200">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-6">
            About
          </h2>

          <p className="text-slate-600 leading-relaxed text-[15px]">
            {siteConfig.about}
          </p>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="mb-16 animate-fade-in animation-delay-300">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-6">
            Get in Touch
          </h2>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {/* Cal.com - Primary CTA */}
            <a
              href={siteConfig.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
            >
              <Calendar size={16} />
              Book a Call
            </a>

            {/* Resume - Secondary CTA */}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileText size={16} />
              View Resume
            </a>

            {/* Blog Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <PenLine size={16} />
              Blog
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            {siteConfig.socials.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="pt-8 border-t border-slate-200/60 animate-fade-in animation-delay-400">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </footer>
      </div>

      {/* ===== LIGHTBOX (Images, Videos & Embeds) ===== */}
      {lightboxMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setLightboxMedia(null)}
        >
          <button
            onClick={() => setLightboxMedia(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {lightboxMedia.type === 'image' ? (
            <img
              src={lightboxMedia.url}
              alt="Project screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : lightboxMedia.type === 'embed' || lightboxMedia.url.includes('youtube.com') || lightboxMedia.url.includes('youtu.be') ? (
            /* Embed (Descript, Loom, YouTube) */
            <div
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={lightboxMedia.url.includes('youtube.com/watch')
                  ? lightboxMedia.url.replace('watch?v=', 'embed/')
                  : lightboxMedia.url.includes('youtu.be/')
                    ? lightboxMedia.url.replace('youtu.be/', 'youtube.com/embed/')
                    : lightboxMedia.url}
                title="Project video"
                className="w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            /* Local MP4 Video */
            <video
              src={lightboxMedia.url}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </main>
  );
};

export default MinimalPortfolio;
