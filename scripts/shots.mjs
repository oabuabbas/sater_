/**
 * Capture the built site for visual review — both editions, three widths.
 * Writes PNGs to .shots/ (gitignored).
 *
 *   node scripts/shots.mjs
 */

import { createServer } from "node:http";
import { readFile, stat, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright-core";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const OUT = new URL("../.shots/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PORT = 4398;

const newsReview = process.argv.includes("--news");
const legalReview = process.argv.includes('--legal');
const badgeReview = process.argv.includes('--badge');
const discoveryReview = process.argv.includes('--discovery');
const TARGETS = process.argv.includes('--october-updates') ? [
  ...['studio-chairman-1-1-3','studio-chairman-creative-editor','behind-the-badge-1-0-1','behind-the-badge-directors-cut','behind-the-badge-creative-editor'].flatMap(slug=>[{path:`/ar/news/${slug}/`,name:`ar-${slug}`},{path:`/news/${slug}/`,name:`en-${slug}`}]),
] : process.argv.includes('--badge-launch') ? [
  {path:'/ar/news/behind-the-badge-launch/',name:'ar-badge-launch'}, {path:'/news/behind-the-badge-launch/',name:'en-badge-launch'},
] : process.argv.includes('--zill-release') ? [
  {path:'/ar/news/zill-1-1-0/',name:'ar-zill-release'}, {path:'/news/zill-1-1-0/',name:'en-zill-release'},
] : process.argv.includes('--khamen-release') ? [
  {path:'/ar/news/khamen-1-7-2/',name:'ar-khamen-release'}, {path:'/news/khamen-1-7-2/',name:'en-khamen-release'},
] : process.argv.includes('--arabic-fixes') ? [
  {path:'/ar/privacy/',name:'ar-privacy'}, {path:'/ar/terms/',name:'ar-terms'},
] : discoveryReview ? [
  {path:'/sater-apps/',name:'en-apps'}, {path:'/ar/sater-apps/',name:'ar-apps'},
  {path:'/sater-games/',name:'en-games'}, {path:'/ar/sater-games/',name:'ar-games'},
] : badgeReview ? [
  {path:'/behind-the-badge/',name:'en-badge'}, {path:'/ar/behind-the-badge/',name:'ar-badge'},
] : legalReview ? [
  {path:'/tam/privacy/',name:'tam-privacy'}, {path:'/khamen/privacy/',name:'khamen-privacy'},
  {path:'/zill/privacy/',name:'zill-privacy'}, {path:'/zill/terms/',name:'zill-terms'},
  {path:'/studio-chairman/terms/',name:'chairman-terms'}, {path:'/behind-the-badge/privacy/',name:'btb-privacy'},
  {path:'/ar/tools/',name:'ar-tools'}, {path:'/privacy/',name:'website-privacy'},
] : newsReview ? [
  { path: "/ar/news/", name: "ar-news" },
  { path: "/news/", name: "en-news" },
  { path: "/ar/news/studio-chairman-directors-cut/", name: "ar-directors-cut" },
  { path: "/ar/studio-chairman/", name: "ar-chairman" },
] : [
  { path: "/", name: "en-home" },
  { path: "/tam/", name: "en-product" },
  { path: "/tam/privacy/", name: "en-legal" },
  { path: "/play/", name: "en-play" },
  { path: "/studio-chairman/privacy/", name: "chairman-privacy" },
  { path: "/studio-chairman/terms/", name: "chairman-terms" },
  { path: "/ar/", name: "ar-home" },
  { path: "/ar/play/", name: "ar-play" },
];
const WIDTHS = newsReview || legalReview || badgeReview || discoveryReview ? [375, 1280] : [1280];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const server = await new Promise((resolve) => {
  const s = createServer(async (req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    for (const c of url.endsWith("/") ? [join(url, "index.html")] : [url, join(url, "index.html")]) {
      const file = normalize(join(DIST, c));
      if (!file.startsWith(normalize(DIST))) break;
      try {
        if (!(await stat(file)).isFile()) continue;
        res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
        res.end(await readFile(file));
        return;
      } catch {
        /* next candidate */
      }
    }
    res.writeHead(404).end("not found");
  });
  s.listen(PORT, () => resolve(s));
});

await mkdir(OUT, { recursive: true });

let browser;
for (const channel of ["msedge", "chrome", "chromium"]) {
  try {
    browser = await chromium.launch({ channel });
    break;
  } catch {
    /* try the next channel */
  }
}
if (!browser) throw new Error("no usable browser");

const page = await browser.newPage({ deviceScaleFactor: 2 });

const SCHEMES = process.argv.includes("--one") ? ["dark"] : ["dark", "light"];

for (const scheme of SCHEMES) {
  await page.emulateMedia({ colorScheme: scheme });
  for (const { path, name } of TARGETS) {
    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: "load" });
      if (!response?.ok()) throw new Error(`Screenshot page failed: ${path} (${response?.status()})`);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => {
        const imgs = [...document.images];
        for (const i of imgs) i.loading = "eager";
        await Promise.all(
          imgs.map((i) =>
            i.complete
              ? null
              : Promise.race([
                  new Promise((r) => {
                    i.addEventListener("load", r, { once: true });
                    i.addEventListener("error", r, { once: true });
                  }),
                  new Promise((r) => setTimeout(r, 4000)),
                ]),
          ),
        );
      });
      await page.evaluate(async () => {
        await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
        // Paint off-screen lazy images before the full-page capture.
        for (const img of document.images) {
          img.scrollIntoView();
          await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        }
        window.scrollTo(0, 0);
      });
      const file = join(OUT, `${scheme}-${name}-${width}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`  ${scheme}-${name}-${width}.png`);
    }
  }
}

await browser.close();
server.close();
