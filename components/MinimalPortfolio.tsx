import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Github,
  ExternalLink,
  Calendar,
  FileText,
  Mail,
  X,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { siteConfig, Project, ProjectMedia } from "../data/projects";

const iconMap = {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Github,
};

const linkedInUrl =
  siteConfig.socials.find((s) => s.icon === "Linkedin")?.url ?? "#";

const getThumbnailUrl = (media: ProjectMedia): string | null => {
  if (media.thumbnail) return media.thumbnail;
  if (media.type === "image") return media.url;
  if (media.url.includes("youtube.com") || media.url.includes("youtu.be")) {
    const videoId = media.url.match(
      /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/,
    )?.[1];
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      : null;
  }
  return null;
};

const isPlayable = (media: ProjectMedia) =>
  media.type === "video" || media.type === "embed";

const MinimalPortfolio: React.FC = () => {
  const [lightboxMedia, setLightboxMedia] = useState<ProjectMedia | null>(null);
  const [lightboxGallery, setLightboxGallery] = useState<ProjectMedia[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (gallery: ProjectMedia[], index: number) => {
    setLightboxGallery(gallery);
    setLightboxIndex(index);
    setLightboxMedia(gallery[index]);
  };

  const lightboxPrev = () => {
    const newIndex =
      (lightboxIndex - 1 + lightboxGallery.length) % lightboxGallery.length;
    setLightboxIndex(newIndex);
    setLightboxMedia(lightboxGallery[newIndex]);
  };

  const lightboxNext = () => {
    const newIndex = (lightboxIndex + 1) % lightboxGallery.length;
    setLightboxIndex(newIndex);
    setLightboxMedia(lightboxGallery[newIndex]);
  };
  const buildingProjects = siteConfig.projects.filter(
    (p) => p.context === "Building",
  );
  const workProjects = siteConfig.projects.filter(
    (p) => p.context !== "Building",
  );

  const renderProject = (project: Project, index: number) => {
    const hasMedia = !!project.media && project.media.length > 0;
    return (
      <div
        key={index}
        className={`group ${hasMedia ? "md:grid md:grid-cols-2 md:gap-8 md:items-start" : ""}`}
      >
        {/* Project text */}
        <div className="flex items-start gap-2">
          <span className="text-slate-300 mt-0.5 select-none">·</span>
          <div className="flex-1">
            {project.url !== "#" ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl leading-tight tracking-[-0.01em] font-bold text-slate-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5"
              >
                {project.name}
                {project.isLive && (
                  <ExternalLink
                    size={14}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </a>
            ) : (
              <span className="font-display text-2xl leading-tight tracking-[-0.01em] font-bold text-slate-900">
                {project.name}
              </span>
            )}
            {project.context && (
              <span
                className={`ml-2 inline-flex items-center gap-1.5 align-middle text-[0.6rem] font-medium uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${
                  project.context === "Acquired"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : project.context === "Building"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                }`}
              >
                {project.context === "Building" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                )}
                {project.context}
              </span>
            )}
            <span className="text-slate-600 block mt-2 leading-relaxed text-balance">
              {project.description}
            </span>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-3 space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-slate-500 text-sm flex items-start gap-1.5"
                  >
                    <span className="text-slate-400 mt-0.5 shrink-0">
                      &bull;
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            {/* App Store badge */}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/assets/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            )}

            {/* Tech stack chips */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.techStack.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[0.65rem] text-slate-600 bg-slate-100 border border-slate-200/70 rounded-full px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Proof media - large cover + thumbnail strip */}
        {project.media &&
          project.media.length > 0 &&
          (() => {
            const media = project.media!;
            const cover = media[0];
            const coverThumb = getThumbnailUrl(cover);
            const coverContain = cover.fit === "contain";
            const strip = media.slice(1, 5);
            const remaining = media.length - 1 - strip.length;

            return (
              <div className="mt-4 md:mt-0 space-y-2">
                {/* Cover */}
                <button
                  onClick={() => openLightbox(media, 0)}
                  className={`relative block w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group/cover ${coverContain ? "bg-[#FAFAF8]" : ""}`}
                >
                  {coverThumb ? (
                    <img
                      src={coverThumb}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      className={`w-full h-full transition-transform duration-300 ${coverContain ? "object-contain p-1.5" : "object-cover object-top group-hover/cover:scale-[1.02]"}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <Play size={28} className="text-slate-400" />
                    </div>
                  )}
                  {isPlayable(cover) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/25 group-hover/cover:bg-slate-900/35 transition-colors">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow">
                        <Play
                          size={20}
                          className="text-slate-900 fill-slate-900 ml-0.5"
                        />
                      </span>
                    </div>
                  )}
                </button>

                {/* Thumbnail strip */}
                {strip.length > 0 && (
                  <div className="flex gap-2">
                    {strip.map((m, i) => {
                      const mediaIndex = i + 1;
                      const thumb = getThumbnailUrl(m);
                      return (
                        <button
                          key={mediaIndex}
                          onClick={() => openLightbox(media, mediaIndex)}
                          className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group/thumb"
                        >
                          {thumb ? (
                            <img
                              src={thumb}
                              alt={`${project.name} ${m.type} ${mediaIndex + 1}`}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                              <Play size={20} className="text-slate-400" />
                            </div>
                          )}
                          {isPlayable(m) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30 group-hover/thumb:bg-slate-900/40 transition-colors">
                              <Play
                                size={16}
                                className="text-white fill-white"
                              />
                            </div>
                          )}
                        </button>
                      );
                    })}
                    {remaining > 0 && (
                      <button
                        onClick={() => openLightbox(media, 1 + strip.length)}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all bg-slate-100 flex items-center justify-center"
                      >
                        <span className="text-sm font-medium text-slate-600">
                          +{remaining}
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })()}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
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

          {/* Name - Display grotesk */}
          <h1 className="font-display text-[clamp(2.5rem,7.5vw,4.75rem)] leading-[1.02] font-extrabold text-slate-900 tracking-[-0.02em] mb-4">
            {siteConfig.name}
          </h1>

          {/* Tagline - Understated */}
          <p className="text-lg md:text-xl text-slate-500 font-light">
            {siteConfig.tagline}
          </p>

          {/* Headline - concrete positioning + proof hook, one thought per line */}
          <div className="mt-4 text-slate-600 text-base leading-relaxed">
            {siteConfig.headline.split(". ").map((line, i, arr) => (
              <p key={i}>
                {line}
                {i < arr.length - 1 ? "." : ""}
              </p>
            ))}
          </div>

          {/* Primary actions - tuned for recruiters: resume + profiles first */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={siteConfig.resumeUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
            >
              <FileText size={16} />
              View Resume
            </Link>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </header>

        {/* ===== PROOF BAND ===== */}
        <section className="mb-16 animate-fade-in animation-delay-100">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 border-y border-slate-200/60 py-6">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-[clamp(1.5rem,3.6vw,2.75rem)] font-bold tracking-[-0.02em] text-slate-900 leading-none">
                  {stat.value}
                </div>
                <div className="mt-2 text-[0.72rem] text-slate-500 leading-snug text-balance">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== BUILDING NOW ===== */}
        {buildingProjects.length > 0 && (
          <section className="mb-16 animate-fade-in animation-delay-100">
            <h2 className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-8">
              Building Now
            </h2>
            <div className="space-y-12">
              {buildingProjects.map((project, index) =>
                renderProject(project, index),
              )}
            </div>
          </section>
        )}

        {/* ===== SELECTED WORK ===== */}
        <section className="mb-16 animate-fade-in animation-delay-200">
          <h2 className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-8">
            Selected Work
          </h2>
          <div className="space-y-12">
            {workProjects.map((project, index) =>
              renderProject(project, index),
            )}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="mb-16 animate-fade-in animation-delay-200">
          <h2 className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-6">
            About
          </h2>

          <p className="text-slate-600 leading-relaxed text-[15px]">
            {siteConfig.about}
          </p>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="mb-16 animate-fade-in animation-delay-300">
          <h2 className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-6">
            Get in Touch
          </h2>

          {/* CTAs - email-first for recruiters, call secondary */}
          <div className="flex flex-wrap gap-3 mb-8">
            {/* Email - Primary CTA */}
            <a
              href="mailto:joshuangatewood@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
            >
              <Mail size={16} />
              Email Me
            </a>

            {/* Resume - Secondary CTA */}
            <Link
              to={siteConfig.resumeUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileText size={16} />
              View Resume
            </Link>

            {/* Book a Call - Secondary CTA */}
            <a
              href={siteConfig.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar size={16} />
              Book a Call
            </a>
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
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </footer>
      </div>

      {/* ===== LIGHTBOX (Images, Videos & Embeds) with gallery nav ===== */}
      {lightboxMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setLightboxMedia(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxMedia(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          {lightboxGallery.length > 1 && (
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10">
              {lightboxIndex + 1} / {lightboxGallery.length}
            </div>
          )}

          {/* Prev arrow */}
          {lightboxGallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next arrow */}
          {lightboxGallery.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Media content */}
          {lightboxMedia.type === "image" ? (
            <img
              src={lightboxMedia.url}
              alt="Project screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : lightboxMedia.type === "embed" ||
            lightboxMedia.url.includes("youtube.com") ||
            lightboxMedia.url.includes("youtu.be") ? (
            <div
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={
                  lightboxMedia.url.includes("youtube.com/watch")
                    ? lightboxMedia.url.replace("watch?v=", "embed/")
                    : lightboxMedia.url.includes("youtu.be/")
                      ? lightboxMedia.url.replace(
                          "youtu.be/",
                          "youtube.com/embed/",
                        )
                      : lightboxMedia.url
                }
                title="Project video"
                className="w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
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
