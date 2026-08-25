/**
 * Layout gate. Runs the built site in a real browser and fails on the classes
 * of defect that have actually shipped here before:
 *
 *   1. horizontal overflow
 *   2. overlapping text — Arabic display lines collided because one leading
 *      token was not derived from --lead-scale
 *   3. a leading token that does not scale with --lead-scale
 *   4. an image that did not resolve (placeholders are not allowed)
 *   5. Arabic that failed to join, which is what a bad font subset looks like
 *
 * Uses playwright-core against the system browser, so no 150MB download.
 *
 *   node scripts/verify-layout.mjs [--url http://localhost:4321]
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright-core";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PORT = 4399;
const ROUTES = ["/", "/tools/", "/play/", "/studio/", "/horizon/", "/404.html",
  "/tam/", "/khamen/", "/zill/", "/tam/privacy/", "/tam/terms/", "/zill/privacy/",
  "/studio-chairman/privacy/", "/studio-chairman/terms/"];
const EN_ONLY = /^\/(tam|khamen|zill|studio-chairman|404)/;
const PAGES = [...ROUTES, ...ROUTES.filter((r) => !EN_ONLY.test(r)).map((r) => `/ar${r}`)];
const WIDTHS = [375, 768, 1280];
const CHANNELS = ["msedge", "chrome", "chromium"];

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

function serve() {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    const candidates = url.endsWith("/") ? [join(url, "index.html")] : [url, join(url, "index.html")];
    for (const c of candidates) {
      const file = normalize(join(DIST, c));
      if (!file.startsWith(normalize(DIST))) break;
      try {
        if (!(await stat(file)).isFile()) continue;
        res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
        res.end(await readFile(file));
        return;
      } catch {
        /* try the next candidate */
      }
    }
    res.writeHead(404).end("not found");
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

/** Runs in the page. Returns findings, never throws. */
function audit() {
  const findings = [];
  const de = document.documentElement;

  const overflow = de.scrollWidth - de.clientWidth;
  if (overflow > 1) findings.push(`horizontal overflow of ${overflow}px`);

  // Every leading token must move when --lead-scale moves.
  const cs = getComputedStyle(de);
  const leadTokens = ["--lead-tight", "--lead-head", "--lead-body"];
  const before = leadTokens.map((t) => cs.getPropertyValue(t).trim());
  de.style.setProperty("--lead-scale", "3");
  const after = leadTokens.map((t) => getComputedStyle(de).getPropertyValue(t).trim());
  de.style.removeProperty("--lead-scale");
  leadTokens.forEach((t, i) => {
    if (before[i] === after[i]) findings.push(`${t} does not derive from --lead-scale`);
  });

  for (const img of document.images) {
    if (!img.complete || img.naturalWidth === 0) findings.push(`image failed: ${img.currentSrc || img.src}`);
  }

  // Overlapping text: compare each text-bearing element against its next
  // sibling. A real collision overlaps by more than a rounding error.
  const textish = [...document.querySelectorAll("h1,h2,h3,h4,p,li,span,a")].filter(
    (el) => el.textContent.trim() && el.offsetParent !== null,
  );
  for (const el of textish) {
    const next = el.nextElementSibling;
    if (!next || !next.textContent?.trim()) continue;
    const a = el.getBoundingClientRect();
    const b = next.getBoundingClientRect();
    if (a.width < 2 || b.width < 2) continue;
    const aStyle = getComputedStyle(el);
    const bStyle = getComputedStyle(next);
    // Two inline links in one paragraph legitimately share a line; text nodes
    // between them are not elements, so nextElementSibling makes them look
    // adjacent. The gate is for colliding layout boxes, not inline flow.
    if (aStyle.display.startsWith("inline") && bStyle.display.startsWith("inline")) continue;
    const vOverlap = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    const hOverlap = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    if (vOverlap > 3 && hOverlap > 3 && aStyle.position === "static") {
      findings.push(
        `overlap ${Math.round(vOverlap)}x${Math.round(hOverlap)}px: <${el.tagName.toLowerCase()}> ` +
          `"${el.textContent.trim().slice(0, 30)}" over <${next.tagName.toLowerCase()}>`,
      );
    }
  }

  // Arabic joining: a shaped run is narrower than the same letters forced apart.
  const probe = (text) => {
    const s = document.createElement("span");
    s.style.cssText =
      "font-family:var(--arabic);font-weight:700;font-size:64px;position:absolute;" +
      "visibility:hidden;white-space:nowrap;letter-spacing:0";
    s.dir = "rtl";
    s.lang = "ar";
    s.textContent = text;
    document.body.appendChild(s);
    const w = s.getBoundingClientRect().width;
    s.remove();
    return w;
  };
  if (probe("سطر") >= probe("س ط ر")) findings.push("Arabic is not joining — check the font subset");

  return findings;
}

async function launch() {
  let last;
  for (const channel of CHANNELS) {
    try {
      return await chromium.launch({ channel });
    } catch (err) {
      last = err;
    }
  }
  throw new Error(`no usable browser (tried ${CHANNELS.join(", ")}): ${last?.message}`);
}

const server = await serve();
const browser = await launch();
const page = await browser.newPage();

let failures = 0;
for (const path of PAGES) {
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    // Scroll the whole page first: below-the-fold art is lazy, and auditing
    // without this reports every unloaded image as broken.
    // Force every lazy image to fetch. Scrolling to trigger them is timing
    // dependent and reported loaded art as broken; flipping loading to eager
    // is deterministic.
    await page.evaluate(async () => {
      const imgs = [...document.images];
      for (const img of imgs) img.loading = "eager";
      const settle = (img) =>
        img.complete
          ? Promise.resolve()
          : Promise.race([
              new Promise((r) => {
                img.addEventListener("load", r, { once: true });
                img.addEventListener("error", r, { once: true });
              }),
              new Promise((r) => setTimeout(r, 4000)),
            ]);
      await Promise.all(imgs.map(settle));
    });
    const findings = await page.evaluate(audit);
    const tag = `${path.padEnd(14)} @${String(width).padStart(4)}`;
    if (findings.length === 0) {
      console.log(`  ok    ${tag}`);
    } else {
      failures += findings.length;
      console.log(`  FAIL  ${tag}`);
      for (const f of findings) console.log(`          ${f}`);
    }
  }
}

await browser.close();
server.close();

console.log(failures === 0 ? "\nlayout gate passed" : `\nlayout gate failed — ${failures} finding(s)`);
process.exit(failures === 0 ? 0 : 1);
