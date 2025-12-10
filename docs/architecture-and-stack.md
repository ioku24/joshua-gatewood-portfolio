# Architecture & Tech Stack

## Tech Stack Decisions

### Core Framework: React 19 + Vite
*   **Why:** React 19 is the cutting edge of the ecosystem. Vite provides instant HMR (Hot Module Replacement) and optimized production builds using Rollup.
*   **2026 Readiness:** This stack ensures compatibility with the latest React Server Components (if we move to Next.js later) and concurrent rendering features.

### Styling: Tailwind CSS
*   **Why:** Utility-first CSS allows for rapid iteration and "colocation" of styles with markup. It significantly reduces the size of the final CSS bundle compared to traditional SASS/CSS.
*   **Theme:** We define a strict design system in `tailwind.config.js` (`colors.background`, `colors.surface`, `fontFamily`) to ensure consistency.

### Animation: Framer Motion
*   **Why:** The industry standard for React animations. It handles complex physics (springs) and layout animations (shared element transitions) that pure CSS cannot easily do.
*   **Performance:** We strictly animate `transform` and `opacity` properties to avoid triggering browser layout repaints.

### Icons: Lucide React
*   **Why:** A highly consistent, lightweight, and tree-shakeable icon set that replaced Feather Icons as the modern standard.

## Directory Structure
```
/
├── components/      # Reusable UI blocks (Hero, Navbar, etc.)
├── docs/            # Project documentation & roadmaps
├── types.ts         # TypeScript interfaces (strict typing)
├── App.tsx          # Main layout aggregator
└── index.tsx        # Entry point
```

## Performance Principles
1.  **Code Splitting:** Vite automatically chunks the vendor libraries.
2.  **Asset Optimization:** Images are loaded with object-fit cover; future iterations will use WebP formats.
3.  **Zero Layout Shift:** Containers have defined heights/aspect ratios to prevent CLS (Cumulative Layout Shift) during loading.
