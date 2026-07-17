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
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.02em]">
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
            AI engineer, now at Brinker, who designs autonomous
            human-in-the-loop agent systems and production-grade RAG, and builds
            the full stack around them, from Postgres and Next.js to a shipped
            iOS app. I came up through marketing operations and taught myself to
            build with AI; one platform I built was acquired for six figures
            within weeks of launch. I work framework-free and evals-first, and I
            care about systems that actually run: fact-checked, measured, and
            reliable.
          </p>
        </header>

        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-1.5 text-[15px] text-slate-600 leading-relaxed">
          <p>
            <span className="text-slate-900 font-medium">AI &amp; Agents:</span>{" "}
            Claude Code / Agent SDK, OpenAI GPT-5 / Codex, Google Gemini,
            Perplexity, local models (Qwen / Ollama); Hermes autonomous agent
            runtime; multi-agent systems and multi-model orchestration;
            human-in-the-loop approval flows and scheduled agents; builds and
            integrates MCP servers (20+ live tool and data integrations); prompt
            and context engineering
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              RAG &amp; Retrieval:
            </span>{" "}
            Obsidian knowledge base, Pinecone (multilingual-e5), hybrid keyword
            + vector retrieval, wiki-link graph expansion, abstain gates,
            semantic chunking, golden-set evals (Recall@k, MRR), retrieval data
            governance
          </p>
          <p>
            <span className="text-slate-900 font-medium">Languages:</span>{" "}
            TypeScript, JavaScript, Python, SQL, PHP, Bash
          </p>
          <p>
            <span className="text-slate-900 font-medium">Frontend:</span> React
            18 / 19, Next.js, Vite, Tailwind CSS, shadcn/Radix
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              Backend &amp; Data:
            </span>{" "}
            Supabase (PostgreSQL, RLS, Auth, Edge Functions), Node.js, REST
            APIs, Anthropic &amp; OpenAI SDKs
          </p>
          <p>
            <span className="text-slate-900 font-medium">Mobile:</span> React
            Native, Expo (shipped iOS + Android app)
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              Infrastructure &amp; DevOps:
            </span>{" "}
            Vercel, Cloudways, GitHub Actions CI/CD, Git, Playwright + Vitest,
            Stripe
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              Web &amp; Growth:
            </span>{" "}
            SEO, AEO/GEO (AI-search optimization), Google Ads optimization, GA4
            / GTM / GSC and marketing analytics, WordPress / PHP, WooCommerce
          </p>
          <p>
            <span className="text-slate-900 font-medium">Practices:</span>{" "}
            Agentic (agent-driven) engineering, test-driven development,
            systematic debugging, verification-before-completion, spec-driven
            development, architecture diagramming (Miro, Excalidraw), automated
            browser QA
          </p>
        </div>

        <SectionLabel>Experience</SectionLabel>
        <Role
          title="AI Engineer, Brinker"
          meta="06/2026 - Present"
          bullets={[
            <>Building enterprise AI systems, agents, and internal tooling.</>,
          ]}
        />
        <Role
          title="Freelance (Client & Product Work)"
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
                Acquired in a six-figure deal about six weeks after launch.
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
              precision gauge manufacturer whose customers include GE Aerospace
              and BAE Systems: website redesign, Google Ads optimization (health
              score 22 to 50), GA4/GTM analytics, and WooCommerce e-commerce.
              (WordPress, WooCommerce, Google Ads)
            </>,
            <>
              Delivered{" "}
              <strong className="text-slate-900 font-medium">Samco FM</strong>{" "}
              <a
                href="https://apps.apple.com/us/app/samco-fm/id6759766613"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
              >
                iOS app
              </a>{" "}
              (live on the App Store) and SEO/AEO strategy for a commercial HVAC
              company: service-request tracking, QR equipment scanning, push
              notifications, first-page Google ranking, and #1 in Perplexity.
              (React Native, Expo, Supabase)
            </>,
          ]}
        />
        <Role
          title="Marketing Operations Specialist, Gauntlet AI"
          meta="Austin, TX · 06/2025 - 12/2025"
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
              Personal RAG Knowledge System:
            </span>{" "}
            Hybrid retrieval over my Obsidian knowledge graph (keyword +
            Pinecone / multilingual-e5 + wiki-link expansion) that surfaces the
            right notes into my agents and stays silent when unsure. Measured
            with a golden-set eval (Recall@4 ~0.91, MRR 0.80).
          </p>
          <p>
            <span className="text-slate-900 font-medium">
              AI Recruitment Chatbot (2023):
            </span>{" "}
            One of my first AI builds, right after the OpenAI API launched: an
            automated lead-qualification bot (OpenAI API + GoHighLevel) for
            Adrian College Rugby that converted 10 D1 recruits in two months.
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
