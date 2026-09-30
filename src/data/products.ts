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
import tamFeature from "~/assets/products/tam-feature.png";
import khamenFeature from "~/assets/products/khamen-feature.png";
import zillFeature from "~/assets/products/zill-feature.png";
import btbIcon from "~/assets/products/behind-the-badge.png";
import chairmanIcon from "~/assets/products/studio-chairman.png";

import chairman1 from "~/assets/games/chairman-1.png";
import chairman2 from "~/assets/games/chairman-2.png";
import chairman3 from "~/assets/games/chairman-3.png";
import chairman4 from "~/assets/games/chairman-4.png";
import chairman5 from "~/assets/games/chairman-5.png";
import chairman6 from "~/assets/games/chairman-6.png";
import chairman7 from "~/assets/games/chairman-7.png";
import chairman8 from "~/assets/games/chairman-8.png";
import btbFeature from "~/assets/games/behind-the-badge-feature.png";
import chairmanFeature from "~/assets/games/studio-chairman-feature.png";

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
  /** The product's own interpretation of the studio's first-line idea. */
  lineStory?: Record<Locale, string>;
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
  /** Store artwork that carries the product's world, separate from its mark. */
  feature?: ImageMetadata;
  /** Public store listing. Only present once the product is actually shipped. */
  storeUrl?: string;
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
    lineStory: {
      en: "The line begins with a task, and ends with one word: done.",
      ar: "يبدأ السطر بمهمة، وينتهي بكلمة واحدة: تَمّ.",
    },
    status: "live",
    accent: "#CBA83D",
    ground: "#232323",
    art: "full",
    icon: tamIcon,
    feature: tamFeature,
    storeUrl: "https://play.google.com/store/apps/details?id=com.sater.tam_app",
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
    lineStory: {
      en: "One line becomes a prompt; everyone around it becomes the game.",
      ar: "يصير سطر واحد سؤالاً، ويصبح كل من حوله جزءاً من اللعبة.",
    },
    status: "live",
    accent: "#4E9BD6",
    ground: "#2F6DA6",
    art: "full",
    icon: khamenIcon,
    feature: khamenFeature,
    storeUrl: "https://play.google.com/store/apps/details?id=com.sater.khamen.khamen_codes",
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
    lineStory: {
      en: "A line between sun and shade tells you where to stand.",
      ar: "سطر بين الشمس والظل يخبرك أين تقف.",
    },
    status: "live",
    accent: "#F5861D",
    ground: "#FFFFFF",
    art: "full",
    icon: zillIcon,
    feature: zillFeature,
    storeUrl: "https://play.google.com/store/apps/details?id=com.sater.zill",
    legacyPath: "/zill/",
  },
];

export interface Game extends Product {
  blurb: Record<Locale, string>;
  /** Public policy pages. Games may ship before they have a full detail page. */
  privacyPath?: string;
  termsPath?: string;
  /** Real captures — the games section shows the game, not just its icon. */
  shots?: ImageMetadata[];
  wide?: ImageMetadata;
}

export interface GameDetailItem {
  code: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export interface GameDetail {
  eyebrow: Record<Locale, string>;
  statement: Record<Locale, string>;
  rolesHead: Record<Locale, string>;
  rolesNote: Record<Locale, string>;
  roles: GameDetailItem[];
  worldHead: Record<Locale, string>;
  worldNote: Record<Locale, string>;
  facts: GameDetailItem[];
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
    status: "live",
    accent: "#E0813F",
    ground: "#F3F1EC",
    art: "inset",
    icon: chairmanIcon,
    feature: chairmanFeature,
    storeUrl: "https://play.google.com/store/apps/details?id=com.sater.studiochairman",
    shots: [chairman1, chairman2, chairman3, chairman4, chairman5, chairman6, chairman7, chairman8],
    legacyPath: "/studio-chairman/",
    privacyPath: "/studio-chairman/privacy/",
    termsPath: "/studio-chairman/terms/",
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
    feature: btbFeature,
    legacyPath: "/behind-the-badge/",
    privacyPath: "/behind-the-badge/privacy/",
    termsPath: "/behind-the-badge/terms/",
  },
];

export const behindTheBadgeDetail: GameDetail = {
  eyebrow: {
    en: "A single-player football management simulation",
    ar: "محاكاة فردية لإدارة كرة القدم",
  },
  statement: {
    en: "The badge is yours. Every decision behind it is too.",
    ar: "الشعار لك. وكل قرار خلفه مسؤوليتك أيضاً.",
  },
  rolesHead: { en: "Three desks. One badge.", ar: "ثلاثة مكاتب. شعار واحد." },
  rolesNote: {
    en: "Build the institution, shape the squad, then live with what happens on the pitch.",
    ar: "ابنِ المؤسسة، وشكّل الفريق، ثم تحمّل ما يحدث على أرض الملعب.",
  },
  roles: [
    {
      code: "01",
      title: { en: "President", ar: "الرئيس" },
      body: {
        en: "Set the direction, protect the finances and decide what kind of club will remain after you.",
        ar: "حدّد الاتجاه، واحمِ المال، وقرّر أي نوع من الأندية سيبقى بعدك.",
      },
    },
    {
      code: "02",
      title: { en: "Sporting director", ar: "المدير الرياضي" },
      body: {
        en: "Read the market, recruit with intent and build a squad whose pieces belong together.",
        ar: "اقرأ السوق، وتعاقد بقصد، وابنِ فريقاً تتكامل قطعه معاً.",
      },
    },
    {
      code: "03",
      title: { en: "Head coach", ar: "المدرب" },
      body: {
        en: "Choose the shape, react to a live match and turn a plan into ninety minutes of consequences.",
        ar: "اختر الشكل، وتفاعل مع المباراة الحية، وحوّل الخطة إلى تسعين دقيقة من العواقب.",
      },
    },
  ],
  worldHead: { en: "A world that belongs to the save.", ar: "عالم ينتمي إلى ملف الحفظ." },
  worldNote: {
    en: "No borrowed clubs, famous names or scripted history. The football world is fictional, procedural and stored on your device.",
    ar: "لا أندية مستعارة ولا أسماء شهيرة ولا تاريخ مكتوب مسبقاً. عالم كرة القدم خيالي، إجرائي، ومحفوظ على جهازك.",
  },
  facts: [
    {
      code: "OFFLINE",
      title: { en: "Your career stays with you", ar: "مسيرتك تبقى لديك" },
      body: {
        en: "No account and no cloud save. Your club, players and history live locally on your device.",
        ar: "لا حساب ولا حفظ سحابي. ناديك ولاعبوك وتاريخك يعيشون محلياً على جهازك.",
      },
    },
    {
      code: "FICTIONAL",
      title: { en: "Every identity is its own", ar: "كل هوية مستقلة" },
      body: {
        en: "Clubs, players, competitions, crests and kits are fictional and generated for this world.",
        ar: "الأندية واللاعبون والمسابقات والشعارات والأطقم خيالية ومولّدة لهذا العالم.",
      },
    },
    {
      code: "COMPLETE",
      title: { en: "Football, not a storefront", ar: "كرة قدم، لا متجر" },
      body: {
        en: "There are no in-app purchases. Optional rewarded ads unlock cosmetic crest designs only.",
        ar: "لا مشتريات داخل اللعبة. الإعلانات الاختيارية تفتح تصاميم تجميلية للشعار فقط.",
      },
    },
  ],
};

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

export const studioLinks = {
  play: "https://play.google.com/store/apps/dev?id=8826020229333303149",
  youtube: "https://www.youtube.com/@SATER_Studio",
  facebook: "https://web.facebook.com/saterstudio",
} as const;
