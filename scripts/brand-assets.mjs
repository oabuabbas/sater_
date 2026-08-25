import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mark = await readFile(path.join(root, "src/assets/brand/mark.svg"));
const publicDir = path.join(root, "public");

const faviconGround = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
    <rect width="512" height="512" rx="112" fill="#f4f3f0"/>
  </svg>
`);

const faviconMark = await sharp(mark)
  .resize({ width: 390, height: 390, fit: "contain" })
  .png()
  .toBuffer();

await sharp(faviconGround)
  .composite([{ input: faviconMark, left: 61, top: 61 }])
  .png()
  .toFile(path.join(publicDir, "favicon.png"));

const cardGround = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#f4f3f0"/>
    <path d="M0 54H1200M0 576H1200" stroke="#dad8d3" stroke-width="2"/>
    <text x="390" y="214" fill="#17171a" font-family="Arial, sans-serif" font-size="66" font-weight="700" letter-spacing="-2">EVERYTHING STARTS</text>
    <text x="390" y="292" fill="#17171a" font-family="Arial, sans-serif" font-size="66" font-weight="700" letter-spacing="-2">WITH A LINE.</text>
    <text x="392" y="352" fill="#5c5a56" font-family="Arial, sans-serif" font-size="24">SATER — independent software studio</text>
    <path d="M392 446H1090" stroke="#17171a" stroke-width="4"/>
    <g fill="#f4f3f0" stroke="#17171a" stroke-width="4">
      <circle cx="392" cy="446" r="11"/><circle cx="625" cy="446" r="11"/>
      <circle cx="858" cy="446" r="11"/><circle cx="1090" cy="446" r="11"/>
    </g>
    <g fill="#5c5a56" font-family="Arial, sans-serif" font-size="18" letter-spacing="2">
      <text x="392" y="492">IDEA</text><text x="625" y="492">CODE</text>
      <text x="858" y="492">FORM</text><text x="1020" y="492">PRODUCT</text>
    </g>
  </svg>
`);

const cardMark = await sharp(mark)
  .resize({ width: 245, height: 245, fit: "contain" })
  .png()
  .toBuffer();

await sharp(cardGround)
  .composite([{ input: cardMark, left: 88, top: 172 }])
  .png()
  .toFile(path.join(publicDir, "cover.png"));

console.log("Generated public/favicon.png (512×512) and public/cover.png (1200×630)");
