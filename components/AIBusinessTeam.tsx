import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Search,
  PenLine,
  Settings,
  Heart,
  DollarSign,
  Brain,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Clock,
  Shield,
  Crown,
  User,
} from 'lucide-react';

const departments = [
  {
    name: 'Sales',
    icon: Search,
    price: '$1,000–$2,000/mo',
    status: 'Available now',
    workers: ['Prospector', 'Lead Scorer', 'Outreach Writer', 'Researcher'],
    features: [
      '15–20 qualified prospects researched & scored weekly',
      'Personalized outreach drafts (email + LinkedIn)',
      'Decision-maker research (name, title, LinkedIn)',
      'Follow-up sequences and response tracking',
      'Weekly pipeline report',
    ],
  },
  {
    name: 'Marketing',
    icon: PenLine,
    price: '$800–$1,500/mo',
    status: 'Coming soon',
    workers: ['Content Creator', 'Topic Researcher'],
    features: [
      '3 content pieces/week (LinkedIn + X)',
      'Written in your voice, not generic AI slop',
      'Topics sourced from your industry',
      'Content calendar and performance tracking',
      'Brand voice consistency across platforms',
    ],
  },
  {
    name: 'Operations',
    icon: Settings,
    price: '$500–$1,000/mo',
    status: 'On demand',
    workers: ['Scheduler', 'Data Entry', 'Reporter'],
    features: [
      'Calendar and appointment management',
      'CRM updates and data entry',
      'Weekly KPI reports and summaries',
      'Process documentation',
      'Vendor communications',
    ],
  },
  {
    name: 'Customer Success',
    icon: Heart,
    price: '$500–$1,000/mo',
    status: 'On demand',
    workers: ['Onboarding Agent', 'Health Monitor', 'Review Collector'],
    features: [
      'New customer onboarding sequences',
      'Regular check-in cadence and health scoring',
      'Review and testimonial collection',
      'Churn risk detection',
      'Win-back campaigns',
    ],
  },
  {
    name: 'Finance',
    icon: DollarSign,
    price: '$500–$1,000/mo',
    status: 'On demand',
    workers: ['Bookkeeper', 'Invoice Agent', 'Report Generator'],
    features: [
      'Transaction categorization (QuickBooks/Xero)',
      'Invoice generation and payment tracking',
      'Monthly P&L, cash flow, expense reports',
      'Bill reminders and anomaly flagging',
    ],
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery call',
    duration: '15 min',
    description:
      'I learn your business, customers, voice, and biggest bottlenecks.',
  },
  {
    number: '02',
    title: 'Department deployment',
    duration: '48–72 hrs',
    description:
      'I configure your AI team to your specifics — your ICP, your voice, your tools.',
  },
  {
    number: '03',
    title: 'First deliverables',
    duration: 'Day 3',
    description:
      'You see real output: prospect lists, outreach drafts, content, or reports.',
  },
  {
    number: '04',
    title: 'Daily cadence',
    duration: 'Ongoing',
    description:
      'Your AI team produces, you review and approve, I optimize. 30 min/day from you.',
  },
];

const BOOKING_URL = 'https://cal.com/joshuagatewood';

const AIBusinessTeam: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Business Team | Joshua Gatewood';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Full AI agent teams deployed across your business departments — sales, marketing, operations, and more. Starting at $500/mo.'
      );
    }
    return () => {
      document.title = 'Joshua Gatewood | Builder & Marketer';
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          joshuagatewood.com
        </Link>

        {/* ===== HERO ===== */}
        <section className="mb-20 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Your AI team that runs{' '}
            <span className="italic">your business</span> 24/7.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mb-8">
            I deploy full AI agent teams across your departments — sales,
            marketing, operations, and more. They research, draft, score,
            follow up, and report. You approve and send.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
            >
              <Calendar size={16} />
              Book a 15-min Call
            </a>
          </div>
        </section>

        {/* ===== THE PROBLEM ===== */}
        <section className="mb-20 animate-fade-in animation-delay-100">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            The Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Home Services */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-900">
                If you run a home services company
              </p>
              <ul className="space-y-2">
                {[
                  'Answering phones between jobs — no dedicated sales person',
                  'Paying lead-gen platforms that send tire-kickers',
                  'Marketing is a Facebook page you haven\'t touched in 6 months',
                  'Revenue swings seasonally with no proactive outreach',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-500 text-[15px]">
                    <span className="text-slate-300 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* B2B SaaS */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-900">
                If you run a B2B SaaS startup
              </p>
              <ul className="space-y-2">
                {[
                  'You\'re the founder doing your own outbound sales',
                  'Posting on LinkedIn when you remember',
                  'Pipeline is a spreadsheet updated at midnight',
                  'Engineering-heavy team, nobody owns go-to-market',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-500 text-[15px]">
                    <span className="text-slate-300 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-slate-600 text-[15px] leading-relaxed">
            You can't afford to hire for every role ($50K–$80K per employee).
            Generic AI tools still need someone to run them. And your to-do
            list keeps growing while revenue stays flat.
          </p>
        </section>

        {/* ===== YOUR AI ORG CHART ===== */}
        <section className="mb-20 animate-fade-in animation-delay-200">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            How Your AI Team Is Organized
          </h2>
          <p className="text-slate-500 text-[15px] mb-10">
            Not a chatbot. Not a single tool. A full organizational hierarchy
            with a CEO, department managers, and specialist workers — just like
            a real company.
          </p>

          <div className="flex flex-col items-center">
            {/* You - Business Owner */}
            <div className="flex flex-col items-center mb-2">
              <div className="px-5 py-3 rounded-xl border-2 border-slate-900 bg-slate-900 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  <User size={14} />
                  <span className="text-sm font-medium">You</span>
                </div>
                <p className="text-xs text-slate-300">
                  Review &amp; approve
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="w-px h-6 bg-slate-300" />
            <div className="text-[11px] text-slate-400 mb-1">reports to</div>
            <div className="w-px h-4 bg-slate-300" />

            {/* AI CEO */}
            <div className="flex flex-col items-center mb-2">
              <div className="px-6 py-4 rounded-xl border-2 border-indigo-200 bg-indigo-50 text-center max-w-xs">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Crown size={16} className="text-indigo-600" />
                  <span className="text-sm font-semibold text-slate-900">
                    AI CEO
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Orchestrates all departments, executive reports, strategic
                  decisions. Gets smarter as it learns your business.
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="w-px h-6 bg-slate-300" />
            <div className="text-[11px] text-slate-400 mb-1">coordinates</div>
            <div className="w-px h-4 bg-slate-300" />

            {/* Branch line */}
            <div className="relative w-full max-w-2xl">
              {/* Horizontal line */}
              <div className="absolute top-0 left-[10%] right-[10%] h-px bg-slate-300" />

              {/* Department columns */}
              <div className="grid grid-cols-5 gap-2 md:gap-3">
                {[
                  { name: 'Sales', icon: Search, color: 'emerald', workers: ['Prospector', 'Scorer', 'Outreach', 'Researcher'] },
                  { name: 'Marketing', icon: PenLine, color: 'blue', workers: ['Creator', 'Researcher'] },
                  { name: 'Ops', icon: Settings, color: 'amber', workers: ['Scheduler', 'Data Entry', 'Reporter'] },
                  { name: 'CS', icon: Heart, color: 'rose', workers: ['Onboarding', 'Health Mon.', 'Reviews'] },
                  { name: 'Finance', icon: DollarSign, color: 'violet', workers: ['Bookkeeper', 'Invoicing', 'Reports'] },
                ].map((dept) => {
                  const Icon = dept.icon;
                  return (
                    <div key={dept.name} className="flex flex-col items-center">
                      {/* Vertical connector from horizontal line */}
                      <div className="w-px h-5 bg-slate-300" />

                      {/* Manager card */}
                      <div className="w-full px-2 py-2.5 md:px-3 md:py-3 rounded-lg border border-slate-200 bg-white text-center mb-2">
                        <Icon size={14} className="mx-auto text-slate-500 mb-1" />
                        <p className="text-[11px] md:text-xs font-medium text-slate-900 leading-tight">
                          {dept.name}
                        </p>
                        <p className="text-[10px] text-slate-400 hidden md:block">
                          Manager
                        </p>
                      </div>

                      {/* Worker dots */}
                      <div className="w-px h-3 bg-slate-200" />
                      <div className="space-y-1 w-full">
                        {dept.workers.map((worker) => (
                          <div
                            key={worker}
                            className="text-[10px] md:text-[11px] text-slate-400 text-center bg-slate-50 rounded px-1 py-0.5 border border-slate-100"
                          >
                            {worker}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Intelligence layer */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                <Brain size={16} className="text-slate-400 shrink-0" />
                <p className="text-[12px] md:text-[13px] text-slate-500">
                  <span className="font-medium text-slate-700">Intelligence Layer</span>
                  {' '}— powers all departments behind the scenes. Market research,
                  performance optimization, cross-department insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DEPARTMENTS (detail cards) ===== */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            Department Details
          </h2>
          <p className="text-slate-500 text-[15px] mb-10">
            Pick the departments you need. Each one runs 24/7 with its own
            manager and specialist AI workers.
          </p>

          <div className="space-y-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.name}
                  className="rounded-xl p-6 bg-slate-900 text-white"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon size={18} className="text-slate-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">
                          {dept.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {dept.status}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      {dept.price}
                    </span>
                  </div>

                  {/* Workers */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dept.workers.map((worker) => (
                      <span
                        key={worker}
                        className="text-[11px] font-medium text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full"
                      >
                        {worker}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {dept.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-400 text-[14px]"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-slate-500 mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="mb-20 animate-fade-in animation-delay-300">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            How It Works
          </h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-5">
                <span className="text-2xl font-serif text-slate-200 leading-none mt-0.5 select-none">
                  {step.number}
                </span>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-slate-900 font-medium">
                      {step.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            Pricing
          </h2>

          <div className="rounded-xl overflow-hidden bg-slate-900">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Package
                  </th>
                  <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Monthly
                  </th>
                  <th className="px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                    Setup
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-6 py-4 text-white text-sm font-medium">
                    1 department
                  </td>
                  <td className="px-6 py-4 text-slate-300 text-sm">
                    $500–$2,000
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm hidden sm:table-cell">
                    $500–$1,000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white text-sm font-medium">
                    2 departments
                  </td>
                  <td className="px-6 py-4 text-slate-300 text-sm">
                    15% off combined
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm hidden sm:table-cell">
                    $750–$1,500
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white text-sm font-medium">
                    3 departments
                  </td>
                  <td className="px-6 py-4 text-slate-300 text-sm">
                    20% off combined
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm hidden sm:table-cell">
                    $1,000–$2,000
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="px-6 py-4 text-white text-sm font-medium">
                    Full Team (all 5)
                  </td>
                  <td className="px-6 py-4 text-white text-sm font-medium">
                    $3,000–$5,000
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm hidden sm:table-cell">
                    $1,500–$2,500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== GUARANTEE ===== */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            The Guarantee
          </h2>

          <div className="rounded-xl p-8 bg-slate-900">
            <div className="flex items-start gap-4">
              <Shield size={24} className="text-white shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium text-lg mb-2">
                  Milestone-based, not money-back.
                </p>
                <p className="text-slate-300 text-[15px] leading-relaxed mb-4">
                  If your Sales Department doesn't book 2 qualified meetings
                  in 30 days, I keep working for free until it does.
                </p>
                <p className="text-slate-400 text-sm">
                  A "qualified meeting" = a discovery call with a
                  decision-maker (owner, founder, or CEO) at a company that
                  fits your ideal customer profile. I don't get paid until you
                  see results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY DIFFERENT ===== */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            Why This Is Different
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: Users,
                label: 'AI agencies',
                problem: 'Hand you tools and dashboards. You still do the work.',
              },
              {
                icon: Zap,
                label: 'AI chatbots',
                problem:
                  'Answer questions but don\'t DO anything autonomously. $50–100/mo for a fancy chat window.',
              },
              {
                icon: DollarSign,
                label: 'Enterprise AI workers',
                problem:
                  'Do real work but charge $24K–$60K/year — for ONE function.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3"
                >
                  <Icon
                    size={16}
                    className="text-slate-300 mt-1 shrink-0"
                  />
                  <p className="text-slate-500 text-[15px]">
                    <span className="text-slate-900 font-medium">
                      {item.label}
                    </span>{' '}
                    — {item.problem}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-slate-900 rounded-xl">
            <p className="text-white text-[15px] leading-relaxed">
              I deploy a{' '}
              <strong>full AI business team</strong> — multiple departments,
              actually autonomous, at a price that makes sense for a small
              business. Your AI team researches, drafts, scores, follows up,
              and reports — 24/7. You approve and send. That's it.
            </p>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
            About
          </h2>

          <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
            I'm Josh Gatewood. I built autonomous AI agent systems that run my
            own sales, marketing, and operations. Now I deploy the same
            systems for small businesses.
          </p>
          <p className="text-slate-400 text-sm italic">
            My AI agents drafted the outreach that found you. That's the point.
          </p>
        </section>

        {/* ===== CTA ===== */}
        <section className="mb-16 text-center">
          <p className="font-serif text-2xl md:text-3xl text-slate-900 mb-6">
            Ready to stop wearing 5 hats?
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            <Calendar size={18} />
            Book a 15-min Call
            <ArrowRight size={16} />
          </a>
          <p className="mt-4 text-sm text-slate-400">
            No commitment. Let's see if it's a fit.
          </p>
        </section>

        {/* ===== TRUST SIGNALS ===== */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            15-min discovery call
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={14} />
            First results in 3 days
          </span>
          <span className="flex items-center gap-1.5">
            <Shield size={14} />
            Milestone guarantee
          </span>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="pt-8 border-t border-slate-200/60">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Joshua Gatewood
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:joshgatewood.ai@gmail.com"
                className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                joshgatewood.ai@gmail.com
              </a>
              <Link
                to="/"
                className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                joshuagatewood.com
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default AIBusinessTeam;
