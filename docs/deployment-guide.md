# Deployment Guide: GitHub & Vercel

This guide outlines the standard procedure for deploying the **Joshua Gatewood Portfolio** using the modern CI/CD pipeline provided by GitHub and Vercel.

## Prerequisites

1.  **GitHub Account**: For version control.
2.  **Vercel Account**: For hosting (login using your GitHub account).
3.  **Node.js & Git**: Installed on your local machine.

---

## Phase 1: Version Control (GitHub)

The first step is to get your local code into a remote repository.

### 1. Initialize Git
If you haven't already initialized git in your project folder, run:

```bash
git init
```

### 2. Verify .gitignore
Ensure the `.gitignore` file exists in your root directory. It prevents unnecessary files from being uploaded. It should contain at least:
```
node_modules
dist
.DS_Store
.env
```

### 3. Commit Your Code
Stage and commit your files:

```bash
git add .
git commit -m "Initial commit: MVP Release"
```

### 4. Create Repository & Push
1.  Go to [GitHub.com/new](https://github.com/new).
2.  Name the repository (e.g., `joshua-gatewood-portfolio`).
3.  **Do not** initialize with README/license (we already have local files).
4.  Copy the commands under "…or push an existing repository from the command line" and run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/joshua-gatewood-portfolio.git
git branch -M main
git push -u origin main
```

---

## Phase 2: Production Hosting (Vercel)

Vercel is the native platform for the frontend stack we chose (Vite/React), offering zero-config deployments.

### 1. Import Project
1.  Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  You will see a list of your GitHub repositories. Find `joshua-gatewood-portfolio` and click **Import**.

### 2. Configure Build
Vercel usually detects the settings automatically, but double-check them against our project structure:

*   **Framework Preset:** `Vite`
*   **Root Directory:** `./`
*   **Build Command:** `npm run build` (or `vite build`)
*   **Output Directory:** `dist`

Click **Deploy**.

### 3. Wait for Build
Vercel will install dependencies, run the build script, and distribute the assets to their global CDN. This typically takes 30-60 seconds.

---

## Phase 3: Domain & Maintenance

### Setting Up a Custom Domain
Once deployed, you will get a `.vercel.app` subdomain. To use `joshuagatewood.com`:

1.  Go to your Project Dashboard on Vercel.
2.  Click **Settings** -> **Domains**.
3.  Enter your purchased domain name.
4.  Vercel will provide **A Records** or **CNAME Records**. Log in to your domain registrar (GoDaddy, Namecheap, Google Domains) and update your DNS settings with these values.

### Continuous Deployment
The pipeline is now active.
*   Every time you run `git push origin main`, Vercel will detect the change.
*   It will automatically rebuild and redeploy the site.
*   If the build fails (e.g., TypeScript errors), the site will not update, protecting your live visitors from broken code.
