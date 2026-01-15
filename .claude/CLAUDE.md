# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Joshua Gatewood, a Marketing Operations Specialist. Built with 2026 design standards: deep glassmorphism, bento grids, scrollytelling, and fluid typography.

**Tech Stack:** React 18, Vite, Tailwind CSS, Framer Motion, React Router v7

## Commands

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build - must pass before deploy
npm run preview      # Preview production build locally
```

## Deployment

**Never deploy without explicit user confirmation.** Wait for "deploy", "push this", or "ready to deploy".

Flow: Changes → User previews locally → User confirms → `npm run build` → Commit/push → Vercel auto-deploys

## Architecture

### Routing (App.tsx)
- `/` → HomePage (Hero, About, Experience, Work preview)
- `/work` → PortfolioOverview (project grid)
- `/work/:slug` → ProjectPage (case study detail)

### Key Files
- `data/projects.ts` - All project content (source of truth)
- `types.ts` - TypeScript interfaces
- `contexts/ThemeContext.tsx` - Light/dark mode state
- `tailwind.config.js` - Design tokens and colors

### Project Data Model
```typescript
Project {
  slug, title, category, description, stats, tags, link
  assets: ProjectAsset[]  // Case studies within the project
}

ProjectAsset {
  type: 'image' | 'video' | 'comparison' | 'embed'
  challenge, solution, outcome  // Always include these
  // Plus type-specific fields (url, beforeImage/afterImage, etc.)
}
```

## Styling System

### Light/Dark Mode Pattern
Always use both variants for colors:
```jsx
// Correct
className="bg-light-surface dark:bg-surface text-slate-900 dark:text-slate-50"

// Wrong - only handles one mode
className="bg-surface text-slate-50"
```

The `dark:` prefix activates when `<html class="dark">` is set (default).

### Color Tokens (tailwind.config.js)
| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| background | `#09090b` | - |
| light-bg | - | `#fafaf9` |
| surface | `#151518` | - |
| light-surface | - | `#ffffff` |
| accent | `#6366f1` | `#6366f1` |

### Typography
- Headers: `font-serif` (Playfair Display)
- Body: `font-sans` (Inter)
- UI/Display: `font-display` (Space Grotesk)

### Animation Rules
- **Only animate `transform` and `opacity`** - other properties cause repaints
- Use Framer Motion for complex animations
- Target 60fps on mobile

## Adding a New Project

1. Add entry to `data/projects.ts` with unique `slug`
2. Place media in `public/assets/`
3. Reference as `/assets/filename.ext`

### Asset Type Examples
```typescript
// Image
{ type: 'image', url: '/assets/screenshot.png', challenge: '...', solution: '...', outcome: '...' }

// Comparison (before/after)
{ type: 'comparison', beforeImage: '...', afterImage: '...', challenge: '...', outcome: '...' }

// Embed (YouTube, Descript)
{ type: 'embed', url: 'https://www.youtube.com/embed/...', challenge: '...', solution: '...', outcome: '...' }
```

## Important Rules

- **Never deploy without user confirmation**
- **Always preview locally first** before pushing
- **Use both light/dark variants** for all color classes
- **Keep it simple** - only add what's explicitly requested
