import React from "react";
import { Link } from "react-router-dom";
import { Printer } from "lucide-react";

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-4 mt-12 first:mt-0">
    {children}
  </h2>
);

const Role: React.FC<{
  title: string;
  meta: string;
  bullets: React.ReactNode[];
}> = ({ title, meta, bullets }) => (
  <div className="mb-8">
    <h3 className="text-slate-900 font-medium">{title}</h3>
    <p className="text-slate-500 text-sm font-mono mb-3">{meta}</p>
    <ul className="space-y-1.5">
      {bullets.map((b, i) => (
        <li
          key={i}
          className="text-slate-600 text-[15px] leading-relaxed flex gap-2"
        >
          <span className="text-slate-300 mt-1.5 shrink-0">&bull;</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Resume: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
              Joshua Gatewood
            </h1>
            <button
              onClick={() => window.print()}
              className="print:hidden inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shrink-0"
            >
              <Printer size={15} />
              Save PDF
            </button>
          </div>
          <p className="mt-3 font-mono text-[0.78rem] text-slate-500 flex flex-wrap gap-x-2 gap-y-1">
            <a
              href="https://www.linkedin.com/in/joshuangatewood"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">·</span>
            <a
              href="https://github.com/ioku24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              GitHub
            </a>
            <span className="text-slate-300">·</span>
            <Link to="/" className="hover:text-slate-900">
              joshuangatewood.com
            </Link>
            <span className="text-slate-300">·</span>
            <a
              href="mailto:joshuangatewood@gmail.com"
              className="hover:text-slate-900"
            >
              joshuangatewood@gmail.com
            </a>
          </p>
          <p className="mt-4 text-slate-600 italic leading-relaxed text-[15px]">
            Self-taught AI engineer with a marketing background, now an AI
            Engineer at Brinker. I build autonomous agent systems, ship
            production platforms, and deliver full-stack work. One of my
            platforms was acquired.
          </p>
        </header>

        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-1.5 text-[15px] text-slate-600 leading-relaxed">
          <p>
            <span className="text-slate-900 font-medium">
              AI &amp; Automation:
            </span>{" "}
            Claude API (Opus, Sonnet, Haiku), OpenAI, multi-agent systems,
            prompt engineering, ElevenLabs, Replicate
          </p>
          <p>
            <span className="text-slate-900 font-medium">Languages:</span>{" "}
            TypeScript, Python, JavaScript
          </p>
          <p>
            <span className="text-slate-900 font-medium">Frontend:</span> React
            19, Next.js, Tailwind CSS, Framer Motion
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              Backend &amp; Data:
            </span>{" "}
            Supabase (PostgreSQL), Node.js, Edge Functions, REST APIs, Inngest
          </p>
          <p>
            <span className="text-slate-900 font-medium">Infrastructure:</span>{" "}
            Vercel, Stripe, Clerk, Git/GitHub, FFmpeg, Sentry
          </p>
          <p>
            <span className="text-slate-900 font-medium">Mobile:</span> React
            Native, Expo
          </p>
        </div>

        <SectionLabel>Experience</SectionLabel>
        <Role
          title="AI Engineer — Brinker"
          meta="06/2026 - Present"
          bullets={[<>Build AI systems and internal tooling.</>]}
        />
        <Role
          title="AI Engineer — Freelance (Client & Product Work)"
          meta="2026"
          bullets={[
            <>
              Built{" "}
              <strong className="text-slate-900 font-medium">
                UGM Field Ops
              </strong>
              , an offline-first field-operations platform for a construction
              company: mobile time tracking, role-based approvals, real-time
              budget alerts, and AI-powered cost analysis. Replaced manual data
              entry costing the company{" "}
              <strong className="text-slate-900 font-medium">
                $26K-$39K/year
              </strong>
              .{" "}
              <strong className="text-slate-900 font-medium">
                Acquired by a company about six weeks after launch.
              </strong>
            </>,
            <>
              Building a{" "}
              <strong className="text-slate-900 font-medium">
                content and distribution engine
              </strong>{" "}
              that turns trend signals and ideas into voice-matched, published
              content with a human-approval queue. Evolved from an earlier
              multi-agent system I built across sales, marketing, and
              operations. (Claude API, multi-agent)
            </>,
            <>
              Led full digital transformation for{" "}
              <strong className="text-slate-900 font-medium">US Gage</strong>, a
              precision gauge manufacturer serving GE Aerospace and BAE Systems:
              website redesign, Google Ads optimization (health score 22 to 50),
              GA4/GTM analytics, and WooCommerce e-commerce. (WordPress,
              WooCommerce, Google Ads)
            </>,
            <>
              Delivered{" "}
              <strong className="text-slate-900 font-medium">Samco FM</strong>{" "}
              mobile app and SEO/AEO strategy for a commercial HVAC company:
              service-request tracking, QR equipment scanning, push
              notifications, first-page Google ranking, and #1 in Perplexity.
              (React Native, Expo, Supabase)
            </>,
          ]}
        />
        <Role
          title="Marketing Operations Specialist — Gauntlet AI"
          meta="Hybrid, Austin TX · 06/2025 - 12/2025"
          bullets={[
            <>
              Conducted full-funnel audit across website, CRM, and messaging;
              delivered operational roadmap that contributed to{" "}
              <strong className="text-slate-900 font-medium">
                2x pipeline growth
              </strong>
              .
            </>,
            <>
              Resolved{" "}
              <strong className="text-slate-900 font-medium">4,400+</strong>{" "}
              data issues through systematic CRM cleanup; established
              data-hygiene protocols that improved reporting accuracy and
              automation reliability.
            </>,
            <>
              Built content automation workflow (intake through publish-ready
              assets) that increased team output{" "}
              <strong className="text-slate-900 font-medium">3-5x</strong> while
              reducing manual steps.
            </>,
            <>
              Built competitive intelligence system analyzing{" "}
              <strong className="text-slate-900 font-medium">
                100+ ads across 18 companies
              </strong>{" "}
              in 5-7 days, producing campaign-planning insights.
            </>,
          ]}
        />

        <SectionLabel>Projects</SectionLabel>
        <div className="space-y-2 text-[15px] text-slate-600 leading-relaxed">
          <p>
            <span className="text-slate-900 font-medium">
              AI Recruitment Chatbot:
            </span>{" "}
            Automated lead-qualification bot using OpenAI API and GoHighLevel
            for Adrian College Rugby, converting 10 D1 recruits in two months.
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              Detroit Tradesmen RFC:
            </span>{" "}
            Community rugby club website rebuilt with TypeScript; responsive
            design with team-management features.
          </p>
        </div>

        <SectionLabel>Education</SectionLabel>
        <div className="text-[15px] text-slate-600 leading-relaxed">
          <p className="text-slate-900 font-medium">
            Bachelor of Business Administration (Marketing), Adrian College
          </p>
          <p className="font-mono text-sm text-slate-500">
            Adrian, MI · 01/2022 - 05/2025
          </p>
          <p className="mt-1">Former D1 Rugby Player · Eagle Scout</p>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200/60 print:hidden">
          <Link
            to="/"
            className="font-mono text-[0.72rem] text-slate-400 hover:text-slate-900 transition-colors"
          >
            ← back to home
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default Resume;
