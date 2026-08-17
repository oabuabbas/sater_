/**
 * Every product, in one place.
 *
 * The old site restated each app across twelve HTML files, which is why the
 * pages drifted and ZILL never reached the sitemap. Nothing about a product may
 * be written anywhere but here.
 *
 * `accent` and `ground` are sampled from the product's own artwork. The site
 * has no accent colour of its own; a section borrows the accent of whatever it
 * is showing. That is what lets a glossy blue party game and a brass task
 * manager sit on one page without either being restyled.
 */

import tamIcon from "~/assets/products/tam.png";
import khamenIcon from "~/assets/products/khamen.png";
import zillIcon from "~/assets/products/zill.png";
import btbIcon from "~/assets/products/behind-the-badge.png";
import chairmanIcon from "~/assets/products/studio-chairman.png";

import chairman1 from "~/assets/games/chairman-1.png";
import chairman2 from "~/assets/games/chairman-2.png";
import chairman3 from "~/assets/games/chairman-3.png";
import btbBrand from "~/assets/games/btb-brand.png";

export type Locale = "en" | "ar";
export type Status = "live" | "build";

export interface Product {
  slug: string;
  name: string;
  /** The Arabic word the Latin name transliterates, vowelled. */
  root?: string;
  /** Why that word — the reason the name was chosen. */
  gloss?: Record<Locale, string>;
  tagline: Record<Locale, string>;
  status: Status;
  /** Sampled from the artwork; becomes --accent inside this product's frame. */
  accent: string;
  /** The ground the icon was drawn on, so the frame never fights it. */
  ground: string;
  /**
   * "full" — a finished app icon that already carries its own background, so it
   * fills the frame. "inset" — a transparent mark that needs the ground behind
   * it. Getting this wrong leaves a hairline of ground showing around a full
   * icon, which reads as a stray border.
   */
  art: "full" | "inset";
  icon: ImageMetadata;
  /** Detail page carried over from the old site — linked from the store. */
  legacyPath?: string;
}

export const tools: Product[] = [
  {
    slug: "tam",
    name: "TAM",
    root: "تَمّ",
    gloss: {
      en: "“it is done” — the moment a task closes",
      ar: "«تَمّ» — اللحظة التي تُغلق فيها المهمة",
    },
    tagline: {
      en: "A task manager that ends at one word.",
      ar: "مدير مهام ينتهي عند كلمة واحدة.",
    },
    status: "live",
    accent: "#CBA83D",
    ground: "#232323",
    art: "full",
    icon: tamIcon,
    legacyPath: "/tam/",
  },
  {
    slug: "khamen",
    name: "KHAMEN",
    root: "خَمِّن",
    gloss: {
      en: "“guess” — an imperative, and the whole instruction",
      ar: "«خَمِّن» — فعل أمر، وهو تعليمات اللعبة كاملة",
    },
    tagline: {
      en: "A party game that asks how well you know the room.",
      ar: "لعبة تسأل: كم تعرف من حولك حقاً؟",
    },
    status: "live",
    accent: "#4E9BD6",
    ground: "#2F6DA6",
    art: "full",
    icon: khamenIcon,
    legacyPath: "/khamen/",
  },
  {
    slug: "zill",
    name: "ZILL",
    root: "ظِلّ",
    gloss: {
      en: "“shade” — the thing the app exists to find you",
      ar: "«ظِلّ» — ما وُجد التطبيق ليجده لك",
    },
    tagline: {
      en: "A solar compass that puts you on the shaded side.",
      ar: "بوصلة شمسية تضعك في الجهة الظليلة.",
    },
    status: "live",
    accent: "#F5861D",
    ground: "#FFFFFF",
    art: "full",
    icon: zillIcon,
    legacyPath: "/zill/",
  },
];

export interface Game extends Product {
  blurb: Record<Locale, string>;
  /** Real captures — the games section shows the game, not just its icon. */
  shots?: ImageMetadata[];
  wide?: ImageMetadata;
}

export const games: Game[] = [
  {
    slug: "studio-chairman",
    name: "Studio Chairman",
    tagline: {
      en: "Run a film studio; survive the investors.",
      ar: "أدِر استوديو أفلام، وانجُ من المستثمرين.",
    },
    blurb: {
      en: "Greenlight films, court talent, read the box office and keep the board off your back — across decades of a studio's life.",
      ar: "تُجيز الأفلام، وتستقطب النجوم، وتقرأ شبّاك التذاكر، وتُبقي المجلس بعيداً عنك — عبر عقود من عمر الاستوديو.",
    },
    status: "build",
    accent: "#E0813F",
    ground: "#F3F1EC",
    art: "inset",
    icon: chairmanIcon,
    shots: [chairman1, chairman2, chairman3],
  },
  {
    slug: "behind-the-badge",
    name: "Behind The Badge",
    tagline: {
      en: "Football management, season after season.",
      ar: "إدارة نادي كرة قدم، موسماً بعد موسم.",
    },
    blurb: {
      en: "President, sporting director and head coach at once. A live match engine, a transfer market with its own opinions, and a youth academy that outlives you.",
      ar: "رئيساً ومديراً رياضياً ومدرباً في آنٍ واحد. محرّك مباريات حيّ، وسوق انتقالات له رأيه، وأكاديمية شباب تبقى بعدك.",
    },
    status: "build",
    accent: "#E8CE72",
    ground: "#010100",
    art: "full",
    icon: btbIcon,
    wide: btbBrand,
  },
];

export interface HorizonItem {
  code: string;
  name: string;
  blurb: Record<Locale, string>;
  tags: string[];
}

export const horizon: HorizonItem[] = [
  {
    code: "DX44",
    name: "DPP Engine",
    blurb: {
      en: "District price prediction — urban, world and universal pricing models in one engine.",
      ar: "محرّك للتنبؤ بأسعار المناطق، يجمع نماذج التسعير المحلية والعالمية.",
    },
    tags: ["AI", "Research"],
  },
  {
    code: "ARGUS",
    name: "G-Sentinel",
    blurb: {
      en: "Gas leak detection and environmental monitoring for buildings that cannot fail.",
      ar: "كشف تسرّب الغاز ومراقبة البيئة للمنشآت التي لا تحتمل الفشل.",
    },
    tags: ["Hardware", "IoT"],
  },
  {
    code: "C.O.R",
    name: "Chess of Realms",
    blurb: {
      en: "Strategic warfare on a board with more than two dimensions.",
      ar: "حرب استراتيجية على رقعة بأكثر من بُعدين.",
    },
    tags: ["Game"],
  },
];
