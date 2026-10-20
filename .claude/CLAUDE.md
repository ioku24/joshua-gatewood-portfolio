# CLAUDE.md

Josh Gatewood's personal site, https://www.joshuangatewood.com (AI engineer portfolio, resume, blog). Vite + React 18 + react-router 7, hosted on Vercel (project `joshua-gatewood-myportfolio`). Pushing `main` deploys production.

## Deploying

Deploy only after Josh says "deploy" (or "push this", "ready to deploy") for that change. Before asking, `npm run build` passes and the change has been checked in a browser on `npm run preview`.

## Content lives in data/

- `data/projects.ts`: `siteConfig`, the home page's projects, socials and stats. Media goes in `public/assets/`, referenced as `/assets/<file>`.
- `data/posts.json`: blog posts (HTML `content`). Adding a post here is the whole job: the build prerenders its page, adds it to `sitemap.xml`, and gives it article markup.
- `data/seo.ts`: each route's title and description. A new route needs an entry here and a `<Route>` in `App.tsx`.

## Prerendering (read before changing components)

`npm run build` = client build, SSR build of `entry-server.tsx`, then `prerender.mjs`, which renders every route in `data/seo.ts` to static HTML in `dist/` (`resume.html`, `blog/<slug>.html`, ...) so crawlers that skip JavaScript see the content. The browser then hydrates that HTML (`index.tsx`).

Hydration requires the first browser render to match the build-time HTML exactly:

- Read browser APIs (`window`, `document`, `localStorage`, `navigator`) inside `useEffect` or event handlers, so the first render is the same on the server and in the browser.
- Format dates through `formatPostDate` in `data/blog.ts` (UTC). Values that legitimately change between build and view, like the footer year, carry `suppressHydrationWarning`.
- Load data by import, so it exists at build time. A fetch in `useEffect` prerenders as its loading state.

Verify with `npm run build && npm run preview`, open each route, and check the console: a mismatch shows as minified React errors 418, 423 or 425.

The build fails on purpose when a page renders no `<h1>`, a head tag in `index.html` can't be found exactly once, or the home title/description in `index.html` differ from the `/` entry in `data/seo.ts`. Fix the cause; the failure is what stops a blank or mislabelled page from shipping.

`vercel.json`: `cleanUrls` serves `resume.html` at `/resume`; paths with no file fall back to `spa.html`, an unrendered shell the browser renders from scratch.
