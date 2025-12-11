# Joshua Gatewood | Personal Portfolio

**Current Version:** MVP (0.5.0)  
**Tech Stack:** React 19, Vite, Tailwind CSS, Framer Motion

## 🚀 Vision
The goal of this project is to architect a state-of-the-art personal website for **Joshua Gatewood**, a Marketing Operations Specialist. 

Unlike standard portfolios, this site is built with the same principles Joshua applies to his work: **Automation, Systems, and Scalability**. The design targets "2026 Best Practices," utilizing deep glassmorphism, fluid typography, and immersive "scrollytelling" to showcase expertise in:
*   Marketing Systems Automation
*   Content Systems & Repurposing
*   Data-Driven Strategy

## 📚 Documentation
We maintain a detailed "Design Engineering" approach. Please refer to the `docs/` folder for specific deep dives:

*   **[🗺️ Roadmap (docs/jg-portfolio-mvp-roadmap.md)](docs/jg-portfolio-mvp-roadmap.md)**  
    *   *What we are building, what works now, and the timeline.*
*   **[🎨 2026 Design Vision (docs/2026-design-vision.md)](docs/2026-design-vision.md)**  
    *   *Bento grids, deep glass textures, and the visual language of the future.*
*   **[⚙️ Architecture & Stack (docs/architecture-and-stack.md)](docs/architecture-and-stack.md)**  
    *   *Why we chose React 19, Vite, and Framer Motion over other options.*

## ✅ Current Status (The MVP)
The application is currently a high-performance Single Page Application (SPA).

*   **Resume Viewer:** A custom-built Modal that embeds the Google Drive resume natively, keeping users on the site.
*   **3D Hero Section:** Features a physics-based 3D tilt card and parallax floating stats.
*   **Performance:** optimized for 60fps animations on mobile via GPU-accelerated framer-motion layers.
*   **Responsive:** Fully adaptive layout with a custom mobile-first navigation menu.
*   **Aesthetics:** "Deep Dark Mode" theme (`#000000` background) with Indigo/Purple glowing accents.

## 🛠️ Quick Start

### Prerequisites
*   Node.js (v18 or higher)

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🔄 Development Workflow (AI-Assisted)

When working with the AI assistant on this project, follow this process:

### Step 1: Make Changes
- Request code changes or edits in Cursor
- AI will modify files as needed
- **No changes are deployed yet**

### Step 2: Preview Locally (Optional)
```bash
npm run dev
```
- Test changes at `http://localhost:5173`
- See live updates as you edit
- Verify everything works as expected

### Step 3: Deploy (Requires Explicit Confirmation)
**Only when you're ready**, tell the AI:
- "Ready to deploy"
- "Push to GitHub"
- "Deploy this"

Then the AI will:
1. Run build verification (`npm run build`)
2. Commit changes (`git add` + `git commit`)
3. Push to GitHub (`git push origin main`)
4. Vercel auto-deploys (~60-90 seconds)

### ⚠️ Important Rule
**The AI will NEVER push to GitHub or deploy without your explicit confirmation.** This ensures you always review and approve changes before they go live.

## 📂 Project Structure
```bash
/
├── components/      # UI Blocks (Hero, Navbar, Work, ResumeModal, etc.)
├── docs/            # Architecture & Design documentation
├── App.tsx          # Main layout
└── types.ts         # TypeScript interfaces
```

---
*Crafted with precision for 2026 standards.*