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
*   **[🖼️ Miro Dashboard Design SOP (docs/miro-dashboard-design-sop.md)](docs/miro-dashboard-design-sop.md)**  
    *   *Step-by-step guide for creating portfolio dashboards with AI assistance.*

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

---

### 📋 SOP: Review Changes Before Deploying

#### Step 1: Request Changes
- Tell the AI what you want changed
- AI modifies files as needed
- **Nothing is deployed yet** - changes only exist locally

#### Step 2: Preview Your Changes Locally

**Option A: Open in Browser (Recommended)**
1. The AI will start the dev server for you (or ask it to: "start the dev server")
2. Open your browser and go to the URL provided (usually `http://localhost:5173` or similar)
3. Navigate around and review your changes

**Option B: Use Cursor's Built-in Browser**
1. Press `Cmd + Shift + P` (Command Palette)
2. Type "Simple Browser: Show"
3. Enter the localhost URL

**Quick Test URLs:**
| Page | URL |
|------|-----|
| Homepage | http://localhost:5173/ |
| Portfolio Overview | http://localhost:5173/work |
| Marketing Ops | http://localhost:5173/work/marketing-ops |
| Content System | http://localhost:5173/work/content-system |
| Data Optimization | http://localhost:5173/work/data-optimization |

> **Note:** The port number may vary (5173, 5174, 5175, etc.) if other servers are running. The AI will tell you the correct port.

#### Step 3: Request Fixes (If Needed)
If something doesn't look right:
- Tell the AI what needs to be fixed
- AI makes the changes
- **Refresh your browser** to see updates (dev server auto-refreshes)
- Repeat until satisfied

#### Step 4: Deploy (Only When Ready)
**Only when you're happy with the changes**, tell the AI:
- "Deploy" or "Push this"
- "Ready to deploy"
- "Looks good, push it"

The AI will then:
1. Run build verification (`npm run build`)
2. Commit changes with a descriptive message
3. Push to GitHub
4. Vercel auto-deploys (~60-90 seconds)

---

### ⚠️ Important Rules
- **The AI will NEVER deploy without your explicit confirmation**
- **Always preview locally before deploying** to catch issues early
- **The dev server auto-refreshes** when code changes, so just refresh your browser

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