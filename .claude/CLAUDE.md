# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Joshua Gatewood, a Marketing Operations Specialist. The site is built with **2026 design standards** in mind: deep glassmorphism, bento grids, immersive scrollytelling, and fluid typography. It showcases expertise in marketing automation, content systems, and data-driven strategy.

**Current Version:** MVP (0.5.0)
**Tech Stack:** React 19, Vite, Tailwind CSS, Framer Motion, React Router

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (usually http://localhost:5173)
npm run build        # Production build (Vite + Rollup)
npm run preview      # Preview production build locally
```

### Deployment Workflow
**CRITICAL:** Never deploy without explicit user confirmation. Always follow this flow:
1. Make changes
2. User previews locally (`npm run dev`)
3. User explicitly requests deployment (e.g., "deploy", "push this", "ready to deploy")
4. Run `npm run build` to verify
5. Commit and push to GitHub
6. Vercel auto-deploys in ~60-90 seconds

## Architecture

### Routing Structure
- **SPA with React Router v7**
- Routes defined in `App.tsx`:
  - `/` → HomePage (Hero, About, Expertise, Experience, Work preview)
  - `/work` → PortfolioOverview (grid of all projects)
  - `/work/:slug` → ProjectPage (individual project case study)

### Data Model
- **Project Data:** Centralized in `data/projects.ts`
- **TypeScript Types:** Defined in `types.ts`
- **Key Interfaces:**
  - `Project`: Top-level project with slug, title, category, tags, assets
  - `ProjectAsset`: Individual case study within a project. Supports 4 types:
    - `image`: Static image with challenge/solution/outcome
    - `video`: MP4 with controls
    - `comparison`: Before/After split-screen (images or videos)
    - `embed`: iFrame (Descript, Google Drive, etc.)

### Component Structure
```
/
├── App.tsx                    # Main router + global layout wrapper
├── index.tsx                  # Entry point
├── components/
│   ├── Navbar.tsx            # Top navigation + resume modal trigger
│   ├── Hero.tsx              # 3D tilt card + parallax stats
│   ├── About.tsx             # Bio section
│   ├── Expertise.tsx         # Bento-style grid (future enhancement)
│   ├── Experience.tsx        # Timeline of work history
│   ├── Work.tsx              # Project cards preview (used on homepage)
│   ├── TechnicalToolkit.tsx  # Skills grid
│   ├── ResumeModal.tsx       # Google Drive resume embed modal
│   ├── Footer.tsx            # Social links + footer
│   ├── CyberneticCursor.tsx  # Custom cursor effect
│   └── ScrollToTop.tsx       # Scroll restoration on route change
├── pages/
│   ├── HomePage.tsx          # Aggregates all landing sections
│   ├── PortfolioOverview.tsx # Grid view of all projects
│   └── ProjectPage.tsx       # Dynamic project detail page with Lightbox
├── data/
│   └── projects.ts           # All project content (source of truth)
└── types.ts                  # TypeScript interfaces
```

### Styling System
- **Tailwind CSS** with custom design tokens in `tailwind.config.js`
- **Color Palette:**
  - `background`: `#09090b` (soft black with subtle warmth)
  - `surface`: `#151518` (clearly visible card surface)
  - `accent`: `#6366f1` (indigo 500 for CTAs and highlights)
- **Typography:**
  - Headers: `Playfair Display` (serif, editorial feel)
  - Body: `Inter` (clean sans-serif)
  - Display/UI: `Space Grotesk` (geometric sans-serif)
- **Animation Philosophy:**
  - Use Framer Motion for all complex animations
  - **ONLY animate `transform` and `opacity`** to avoid layout repaints
  - Target 60fps on mobile

## Design Principles

### 2026 Standards (from docs/2026-design-vision.md)
1. **Bento Grids:** Asymmetric grids with cells spanning multiple columns/rows
2. **Deep Glassmorphism:** `backdrop-blur-xl`, subtle borders (`border-white/5`), noise textures
3. **Scrollytelling:** Scroll-driven animations (fade, scale, parallax)
4. **Fluid Typography:** Large serif headers + clean body text for editorial contrast

### Performance Rules
- **Mobile-first:** Optimize for 60fps animations on mobile devices
- **GPU Acceleration:** Use `transform` and `opacity` for animations
- **Lazy Loading:** Images use `loading="lazy"`
- **Zero CLS:** All containers have defined aspect ratios

## Common Tasks

### Adding a New Project
1. Open `data/projects.ts`
2. Add a new object to the `projects` array with a unique `slug`
3. Add media files to `public/assets/`
4. Reference media with relative paths: `url: '/assets/your-file.mp4'`
5. Each project has an `assets` array containing case studies

### Asset Types
- **Image:** `{ type: 'image', url: '/assets/screenshot.png', caption: '...', challenge: '...', solution: '...', outcome: '...' }`
- **Video:** `{ type: 'video', url: '/assets/demo.mp4', poster: '/assets/thumb.jpg', ... }`
- **Comparison:** `{ type: 'comparison', beforeImage: '...', afterImage: '...', beforeCaption: '...', afterCaption: '...', challenge: '...', outcome: '...' }`
- **Embed:** `{ type: 'embed', url: 'https://share.descript.com/embed/...', caption: '...', ... }`

### Modifying Styles
- Global theme: `tailwind.config.js`
- Component styles: Inline Tailwind classes
- Custom animations: Framer Motion variants

## Testing Your Changes

### Local Preview (Required Before Deploy)
1. Start dev server: `npm run dev`
2. Open browser to `http://localhost:5173` (port may vary)
3. Test these URLs:
   - `/` - Homepage
   - `/work` - Portfolio grid
   - `/work/marketing-ops` - Sample project page
4. Check mobile responsiveness
5. Verify animations are smooth (60fps target)

### Build Verification
```bash
npm run build        # Must succeed before deploying
npm run preview      # Preview the production build
```

## Project Content Documentation

For deep dives into the project vision and roadmap, see:
- `docs/jg-portfolio-mvp-roadmap.md` - Development timeline and milestones
- `docs/2026-design-vision.md` - Design philosophy and trends
- `docs/architecture-and-stack.md` - Technology choices and rationale
- `docs/miro-dashboard-design-sop.md` - AI-assisted design workflow

## Important Notes

- **Never deploy without user confirmation** - User must explicitly say "deploy", "push this", or "ready to deploy"
- **Always run local preview first** - Users should see changes in browser before pushing
- **Stick to the design system** - Use defined colors, fonts, and spacing from `tailwind.config.js`
- **Maintain 60fps on mobile** - Only animate `transform` and `opacity`
- **Keep it simple** - No over-engineering; only add what's explicitly requested
