import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(root, "public/app-ads.txt");
const expected = "google.com, pub-3118993921734447, DIRECT, f08c47fec0942fa0";
const source = await readFile(file, "utf8");

if (source.charCodeAt(0) === 0xfeff) {
  throw new Error("app-ads.txt must be UTF-8 without a BOM");
}

const records = source
  .split(/\r?\n/)
  .map((line) => line.replace(/#.*/, "").trim())
  .filter(Boolean);

const sellerRecord = /^[a-z0-9.-]+\s*,\s*[^,\s]+\s*,\s*(DIRECT|RESELLER)(?:\s*,\s*[a-z0-9]+)?$/i;
for (const record of records) {
  if (!sellerRecord.test(record)) throw new Error(`Invalid app-ads.txt record: ${record}`);
}

if (!records.includes(expected)) {
  throw new Error(`Missing required AdMob seller record: ${expected}`);
}

console.log(`app-ads.txt verified (${records.length} authorized seller record)`);
