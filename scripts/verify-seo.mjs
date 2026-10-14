import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, relative } from 'node:path';
const root = resolve('dist');
const origin = 'https://thesater.com';
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir,{withFileTypes:true})) {
    if (['static','_astro'].includes(entry.name)) continue;
    const path = join(dir,entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
await walk(root);
async function exists(path) {
  for (const candidate of [join(root,path),join(root,path,'index.html')]) {
    try { if ((await stat(candidate)).isFile()) return true; } catch {}
  }
  return false;
}
const failures = [];
let pages = 0;
const titles = new Map();
for (const file of files) {
  const html = await readFile(file,'utf8');
  if (/<meta[^>]+http-equiv="refresh"/i.test(html)) continue;
  const label = relative(root,file);
  pages++;
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!title) failures.push(`${label}: missing title`);
  if (!canonical?.startsWith(origin+'/')) failures.push(`${label}: invalid canonical`);
  const notFound = label === '404.html';
  if (!notFound && canonical && !await exists(new URL(canonical).pathname)) failures.push(`${label}: canonical target missing`);
  if (!notFound && canonical) {
    if (titles.has(title) && titles.get(title) !== canonical) failures.push(`${label}: duplicate title`);
    titles.set(title,canonical);
  }
  for (const m of html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)) {
    if (!await exists(new URL(m[1]).pathname)) failures.push(`${label}: broken language alternate`);
  }
  const blocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!blocks.length) failures.push(`${label}: structured data missing`);
  for (const block of blocks) {
    try {
      const data = JSON.parse(block[1]);
      const nodes = data['@graph'] ?? [data];
      const ids = nodes.map(n=>n['@id']).filter(Boolean);
      if (new Set(ids).size !== ids.length) failures.push(`${label}: duplicate structured entity`);
      for (const node of nodes) {
        if (node.aggregateRating || node.review) failures.push(`${label}: unverified review/rating markup`);
        for (const raw of [node.image,node.logo].filter(v=>typeof v==='string')) {
          const url = new URL(raw);
          if (url.origin === origin && !await exists(url.pathname)) failures.push(`${label}: missing structured image ${url.pathname}`);
        }
      }
    } catch(error) { failures.push(`${label}: invalid structured data (${error.message})`); }
  }
}
const sitemap = await readFile(join(root,'sitemap-0.xml'),'utf8');
for (const path of ['/sater-apps/','/sater-games/','/ar/sater-apps/','/ar/sater-games/']) {
  if (!sitemap.includes(`<loc>${origin}${path}</loc>`)) failures.push(`sitemap: missing ${path}`);
}
if (sitemap.includes('/404')) failures.push('sitemap: 404 must not be listed');
console.log(`SEO audit: ${pages} pages, ${failures.length} failures.`);
if (failures.length) { console.error(failures.join('\n'));process.exitCode=1; }
