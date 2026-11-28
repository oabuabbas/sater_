import { games, tools, type Product } from "./products";
import spyIcon from "~/assets/games/find-the-spy.png";

import drawIcon from "~/assets/games/lucky-draw.png";

export const miniStoreUrl = "https://play.google.com/store/apps/dev?id=8928859979825194257";

export const findTheSpy: Product = {
  slug: "find-the-spy",
  name: "Find the Spy",
  localizedName: { ar: "برا السالفة", en: "Find the Spy" },
  tagline: { ar: "بينكم شخص يجهل الكلمة. من هو؟", en: "One player doesn’t know the word. Who is it?" },
  status: "live",
  storeUrl: "https://play.google.com/store/apps/details?id=com.sater.findthespy",
  accent: "#FFCC18",
  ground: "#101115",
  art: "full",
  icon: spyIcon,
  legacyPath: "/find-the-spy/",
};

export const luckyDraw: Product = {
  slug: "lucky-draw",
  name: "Lucky Draw",
  tagline: { ar: "أداة للقرعة واختيار الفائزين وتقسيم الفرق.", en: "A draw tool for picking winners and splitting teams." },
  status: "build",
  accent: "#F2C667",
  ground: "#201639",
  art: "full",
  icon: drawIcon,
  legacyPath: "/lucky-draw/",
};

export const miniProducts = [findTheSpy, luckyDraw];
export const collections = [
  { key: "games", label: { ar: "ألعاب سطر", en: "Games" }, items: games },
  { key: "apps", label: { ar: "تطبيقات سطر", en: "Apps" }, items: tools },
  { key: "mini", label: { ar: "سطر ميني", en: "SATER mini" }, items: miniProducts },
];
export const catalog = collections.flatMap(group => group.items as Product[]);
