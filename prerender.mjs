// Build step: render every route to static HTML so crawlers that don't run JavaScript see the content.
// Runs after `vite build` (client) and `vite build --ssr entry-server.tsx` (renderer). See package.json "build".
import fs from "node:fs";

const { render, routeMeta, SITE } = await import("./dist-ssr/entry-server.js");
const template = fs.readFileSync("dist/index.html", "utf8");

// "/" keeps the head written in index.html; every other route gets its own head from data/seo.ts.
const routes = routeMeta.map((r) => ({
  ...r,
  file: r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`,
}));

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Replace exactly one match or fail the build: a silent miss would ship the home page's head on every route.
function replaceOnce(html, pattern, replacement, label) {
  const hits = html.match(new RegExp(pattern, "g"))?.length ?? 0;
  if (hits !== 1) throw new Error(`prerender: expected 1 "${label}" in index.html, found ${hits}`);
  return html.replace(new RegExp(pattern), () => replacement); // function form: "$" in page text stays literal
}

function setHead(html, { path, title, description, type }) {
  const url = `${SITE}${path}`;
  const t = esc(title);
  const d = esc(description);
  html = replaceOnce(html, "<title>[^<]*</title>", `<title>${t}</title>`, "title");
  html = replaceOnce(html, '<meta name="title" content="[^"]*">', `<meta name="title" content="${t}">`, "meta title");
  html = replaceOnce(html, '<meta name="description" content="[^"]*">', `<meta name="description" content="${d}">`, "meta description");
  html = replaceOnce(html, '<link rel="canonical" href="[^"]*">', `<link rel="canonical" href="${url}">`, "canonical");
  for (const ns of ["og", "twitter"]) {
    html = replaceOnce(html, `<meta property="${ns}:url" content="[^"]*">`, `<meta property="${ns}:url" content="${url}">`, `${ns}:url`);
    html = replaceOnce(html, `<meta property="${ns}:title" content="[^"]*">`, `<meta property="${ns}:title" content="${t}">`, `${ns}:title`);
    html = replaceOnce(html, `<meta property="${ns}:description" content="[^"]*">`, `<meta property="${ns}:description" content="${d}">`, `${ns}:description`);
  }
  if (type) html = replaceOnce(html, '<meta property="og:type" content="[^"]*">', `<meta property="og:type" content="${type}">`, "og:type");
  // The portrait preload is the home page's LCP image; other pages don't show it.
  return replaceOnce(html, '\\s*<!-- LCP image[^>]*-->\\s*<link rel="preload" as="image" href="/jg-portrait.webp"[^>]*>', "", "portrait preload");
}

const home = routeMeta.find((r) => r.path === "/");
if (!template.includes(`<title>${esc(home.title)}</title>`) || !template.includes(`<meta name="description" content="${esc(home.description)}">`))
  throw new Error('prerender: index.html title/description differ from the "/" entry in data/seo.ts');

// Unknown URLs fall back to this unrendered shell (vercel.json rewrite), so the client renders them from scratch.
fs.writeFileSync("dist/spa.html", template);

for (const route of routes) {
  const body = render(route.path);
  if (!body.includes("<h1")) throw new Error(`prerender: ${route.path} rendered no <h1>`);
  let html = replaceOnce(template, '<div id="root"></div>', `<div id="root">${body}</div>`, "root div");
  if (route.path !== "/") html = setHead(html, route);
  fs.mkdirSync(`dist/${route.file}`.replace(/\/[^/]+$/, ""), { recursive: true });
  fs.writeFileSync(`dist/${route.file}`, html);
  console.log(`prerendered ${route.path} -> dist/${route.file} (${body.length} chars)`);
}

fs.rmSync("dist-ssr", { recursive: true, force: true });
