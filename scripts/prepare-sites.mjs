import { cp, mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const dist = join(root, "dist");
const staticDir = join(dist, "static");
const serverDir = join(dist, "server");

await mkdir(staticDir, { recursive: true });
for (const entry of await readdir(dist, { withFileTypes: true })) {
  if (entry.name === "server" || entry.name === "static") continue;
  await cp(join(dist, entry.name), join(staticDir, entry.name), { recursive: true });
}

await mkdir(serverDir, { recursive: true });
await writeFile(
  join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    const direct = await env.ASSETS.fetch(request);
    if (direct.status !== 404) return direct;

    const url = new URL(request.url);
    if (!url.pathname.includes(".")) {
      const clean = url.pathname.endsWith("/") ? url.pathname : url.pathname + "/";
      url.pathname = clean + "index.html";
      const page = await env.ASSETS.fetch(new Request(url, request));
      if (page.status !== 404) return page;
    }

    url.pathname = "/404.html";
    const fallback = await env.ASSETS.fetch(new Request(url, request));
    return new Response(fallback.body, { status: 404, headers: fallback.headers });
  }
};
`,
  "utf8",
);

console.log("Sites deployment bundle prepared");
