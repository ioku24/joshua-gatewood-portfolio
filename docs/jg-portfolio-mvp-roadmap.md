# Joshua Gatewood Portfolio - MVP Roadmap

## 1. Project Vision
To build a state-of-the-art personal website that serves as a dynamic resume and portfolio. The site must be future-proof (targeting 2026 standards), highly performant, accessible, and aesthetically cohesive across desktop and mobile devices.

This project uses a "Design Engineering" approach: we don't just build pages; we build a scalable design system.

## 2. Documentation Structure
We have established a `docs/` folder to maintain project clarity:
*   `docs/jg-portfolio-mvp-roadmap.md`: (This file) The high-level plan and status.
*   `docs/2026-design-vision.md`: Detailed breakdown of the visual trends (Bento grids, Glassmorphism 2.0) we are implementing.
*   `docs/architecture-and-stack.md`: Technical reasoning behind React 19, Vite, and Framer Motion.

## 3. Current Status (The "What Works")
As of the current iteration, we have a functional Single Page Application (SPA).

### Core Features Active:
*   **Resume Ecosystem:** A native, embedded PDF viewer (`ResumeModal.tsx`) that allows users to read your resume without leaving the site, powered by Google Drive.
*   **Responsive Navigation:** A floating, glass-morphism navbar that adapts from desktop links to a mobile full-screen menu.
*   **3D Hero Section:** Interactive profile card with mouse-tracking tilt effects and parallax floating stats.
*   **Visual Identity:** Deep dark mode (`#09090b` background - soft black with subtle warmth) with Indigo glowing accents.

### Content Section Status:
*   **Expertise (Completed):** Upgraded to a modern 3-column "Bento Grid" layout (`Expertise.tsx`) with dashboard-style widgets and decorations.
*   **Work (Completed):** Card-based project display with **Detail Modals**.
*   **Experience (Completed):** Vertical timeline for professional history.
*   **Footer (Completed):** Connected to real LinkedIn, X, and Instagram profiles.

## 4. Architectural Decisions (Summary)
*See `docs/architecture-and-stack.md` for full details.*

*   **Framework:** **React 19 + Vite**. Chosen for speed and future compatibility with React Server Components.
*   **Styling:** **Tailwind CSS**. Chosen for a utility-first approach that ensures mobile responsiveness is baked in, not an afterthought.
*   **Animation:** **Framer Motion**. We use GPU-accelerated properties (`transform`, `opacity`) to ensure the site runs at 60fps even on mobile devices.
*   **Deployment Strategy:** SPA (Single Page Application) for seamless transitions, deployed via modern CDNs (like Vercel/Netlify).

## 5. Roadmap Phases

### Phase 1: Foundation (Completed)
- [x] Set up React + Vite + Tailwind architecture.
- [x] Implement core routing/scrolling.
- [x] Establish "Dark Mode" aesthetic.
- [x] Build basic mobile responsiveness.

### Phase 2: Functionality & Interaction (Completed)
- [x] **Project Detail View:** Implemented a Modal system so employers can click project cards to read the full case study.
- [x] **Resume System:** Integrated Google Drive PDF hosting with native modal viewer.
- [x] **Navigation Audit:** Verified "View Work", "About Me", and "View Resume" buttons are 100% functional.
- [x] **External Links:** Finalized LinkedIn, X, and Instagram connections.

### Phase 3: The "2026" Upgrade (Current Focus)
- [x] **Bento Grid Layout:** Refactored `Expertise.tsx` into a modular "Bento" grid with dashboard artifacts.
- [ ] **Scrollytelling (Next Priority):** Enhance the *Experience* timeline so elements trigger specifically based on scroll velocity.
- [ ] **Micro-interactions:** Add magnetic hover effects to buttons.

## 6. Deployment Checklist (For "Live" Status)
Before sharing with employers, ensure:
1.  **Resume Permissions:** Verify the Google Drive link is set to "Anyone with the link can view".
2.  **Favicon:** Replace the default Vite favicon with your personal logo.