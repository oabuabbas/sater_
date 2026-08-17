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

const TARGETS = [
  { path: "/", name: "en-home" },
  { path: "/tam/", name: "en-product" },
  { path: "/tam/privacy/", name: "en-legal" },
  { path: "/ar/", name: "ar-home" },
  { path: "/ar/play/", name: "ar-play" },
];
const WIDTHS = [1280];

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
      await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: "load" });
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
      const file = join(OUT, `${scheme}-${name}-${width}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`  ${scheme}-${name}-${width}.png`);
    }
  }
}

await browser.close();
server.close();
