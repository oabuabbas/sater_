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
  careerHead: Record<Locale, string>;
  careerNote: Record<Locale, string>;
  career: GameDetailItem[];
  gameplayHead: Record<Locale, string>;
  gameplayNote: Record<Locale, string>;
  gameplay: GameDetailItem[];
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
      en: "From the club boardroom to the top of world football.",
      ar: "من رئاسة النادي إلى قيادة عالم كرة القدم.",
    },
    blurb: {
      en: "Be the club president: appoint the coach, negotiate transfers, build the stadium and face the fans. Earn your way into league, national, continental and international leadership.",
      ar: "كن رئيس النادي: عيّن المدرب، وفاوض في الانتقالات، وابنِ الملعب، وواجه الجماهير. ثم شقّ طريقك إلى رئاسة الرابطة والاتحادات الوطنية والقارية والهيئة الدولية.",
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
    en: "An offline, single-player football presidency simulation",
    ar: "محاكاة فردية لرئاسة كرة القدم، تعمل دون اتصال",
  },
  statement: {
    en: "Start behind one badge. Shape the whole game.",
    ar: "ابدأ خلف شعار واحد. واصنع مستقبل اللعبة كلها.",
  },
  rolesHead: { en: "One presidency. Three ways to hold it.", ar: "رئاسة واحدة. ثلاث طرق للوصول إليها." },
  rolesNote: {
    en: "Appoint a coach with a personality of their own, build the institution and answer for its future. How you hold office decides who can remove you.",
    ar: "تعيّن مدرباً له شخصيته ورأيه، وتبني المؤسسة وتتحمّل مسؤولية مستقبلها. طريقة تولّيك الرئاسة تحدّد من يحاسبك وكيف تنتهي ولايتك.",
  },
  roles: [
    {
      code: "01",
      title: { en: "Appointed president", ar: "رئيس معيَّن" },
      body: {
        en: "Answer to the owner and board. Results, finances and trust decide whether you keep the job or are dismissed.",
        ar: "تحاسبك جهة الملكية ومجلس الإدارة. النتائج والمال والثقة تحدّد بقاءك في المنصب أو إقالتك.",
      },
    },
    {
      code: "02",
      title: { en: "Elected president", ar: "رئيس منتخَب" },
      body: {
        en: "Lead a member-owned club. Campaign promises, rivals and confidence votes make the ballot as important as the table.",
        ar: "تقود نادياً يملكه أعضاؤه. الوعود الانتخابية والمنافسون وسحب الثقة تجعل صندوق الاقتراع مهماً مثل جدول الدوري.",
      },
    },
    {
      code: "03",
      title: { en: "Owner-president", ar: "رئيس مالك" },
      body: {
        en: "Buy the club and take responsibility for its survival. Bankruptcy can end your tenure; an heir may carry on the family dynasty.",
        ar: "اشترِ النادي وتحمّل مسؤولية بقائه. الإفلاس قد ينهي رئاستك، وقد يواصل ابنك أو ابنتك المسيرة عبر الأجيال.",
      },
    },
  ],
  careerHead: { en: "Five offices. A bigger responsibility at each.", ar: "خمسة مناصب. ومسؤولية تكبر مع كل خطوة." },
  careerNote: {
    en: "Progress through elections, not automatic promotions. Hold one office at a time: taking a league presidency means leaving your club. Proposals need votes, and conflicts of interest have consequences.",
    ar: "تتقدّم عبر الانتخابات، لا بترقيات تلقائية. تشغل منصباً واحداً في كل مرة: رئاسة الرابطة تعني ترك ناديك. القرارات تحتاج أصواتاً، وتضارب المصالح له عواقبه.",
  },
  career: [
    { code: "01", title: { en: "Club president", ar: "رئيس النادي" }, body: { en: "Build the institution, appoint the coach and balance ambition against money and supporter trust.", ar: "ابنِ المؤسسة، وعيّن المدرب، ووازن الطموح مع المال وثقة الجماهير." } },
    { code: "02", title: { en: "League president", ar: "رئيس الرابطة" }, body: { en: "Seek the clubs' votes on prize money, relegation places, wage caps and club licensing.", ar: "اطلب أصوات الأندية بشأن جوائز الدوري وعدد الهابطين وسقف الرواتب وتراخيص الأندية." } },
    { code: "03", title: { en: "National federation president", ar: "رئيس الاتحاد الوطني" }, body: { en: "Shape refereeing and sanctions, support lower divisions and appoint the national-team coach.", ar: "طوّر التحكيم والعقوبات، وادعم الدرجات الدنيا، وعيّن مدرب المنتخب." } },
    { code: "04", title: { en: "Continental federation president", ar: "رئيس الاتحاد القاري" }, body: { en: "Put continental places, financial rules and tournament hosting before the member federations.", ar: "اعرض توزيع المقاعد القارية والقواعد المالية واستضافة البطولات على الاتحادات الأعضاء." } },
    { code: "05", title: { en: "International governing-body president", ar: "رئيس الهيئة الدولية" }, body: { en: "Face 48 federations over international windows, solidarity payments, grants and world tournaments.", ar: "واجه 48 اتحاداً في قرارات فترات التوقف الدولي والتضامن والمنح والبطولات العالمية." } },
  ],
  gameplayHead: { en: "A club is more than its starting eleven.", ar: "النادي أكبر من تشكيلته الأساسية." },
  gameplayNote: {
    en: "Interconnected systems create the story: every club develops, trades, borrows and changes its coach, not just yours.",
    ar: "الأنظمة المتشابكة تصنع القصة: كل نادٍ يتطوّر ويتعاقد ويستدين ويغيّر مدربه، لا ناديك وحده.",
  },
  gameplay: [
    { code: "SQUAD", title: { en: "A coach with their own opinion", ar: "مدرب له رأيه" }, body: { en: "Work with 15 formations, player roles and set pieces. Your coach can accept an instruction, refuse it or take the dispute to the press.", ar: "15 خطة وأدوار للاعبين وكرات ثابتة. قد يقبل المدرب تعليماتك، أو يرفضها، أو ينقل الخلاف إلى الصحافة." } },
    { code: "MARKET", title: { en: "Negotiate through uncertainty", ar: "فاوض وسط معلومات ناقصة" }, body: { en: "Scouting takes weeks. Negotiate fees, wages, agents' commissions, release clauses and loans inside transfer windows.", ar: "الكشف يستغرق أسابيع. فاوض على الأسعار والرواتب وعمولات الوكلاء والشروط الجزائية والإعارات ضمن نوافذ الانتقالات." } },
    { code: "CLUB", title: { en: "Build beyond the pitch", ar: "ابنِ ما وراء الملعب" }, body: { en: "Manage debt, financial rules, sponsors and ticket prices. Expand a stadium or build a new one, develop the academy and invest in a museum and club businesses.", ar: "أدِر الديون والقواعد المالية والرعاة وأسعار التذاكر. وسّع الملعب أو ابنِ جديداً، وطوّر الأكاديمية، واستثمر في المتحف وأعمال النادي." } },
    { code: "MATCH", title: { en: "Watch from the directors' box", ar: "شاهد من المقصورة" }, body: { en: "The coach leads a live 2D match with text commentary, goal replays, VAR and other grounds' scores. Choose results only when you prefer a quicker week.", ar: "يقود المدرب مباراة حية ثنائية الأبعاد، بتعليق نصي وإعادة الأهداف وحكم الفيديو ونتائج الملاعب الأخرى. اختر النتيجة فقط حين تريد أسبوعاً أسرع." } },
    { code: "PRESS", title: { en: "Trust is part of the job", ar: "الثقة جزء من الوظيفة" }, body: { en: "Face supporters, three newspapers per club, interviews, election rivals, leaks and legal disputes. Your choices carry reputational and political costs.", ar: "واجه الجماهير وثلاث صحف لكل نادٍ والمقابلات والمنافسين الانتخابيين والتسريبات والنزاعات القضائية. قراراتك لها ثمن إعلامي وسياسي." } },
    { code: "LEGACY", title: { en: "A career with a memory", ar: "مسيرة لها ذاكرة" }, body: { en: "Family life, club records and annual awards follow you across seasons. Keep three save slots plus autosave, and earn 35 on-device achievements.", ar: "حياة العائلة وسجل النادي والجوائز السنوية ترافقك عبر المواسم. ثلاث خانات حفظ إضافة إلى الحفظ التلقائي، و35 إنجازاً على جهازك." } },
  ],
  worldHead: { en: "A world that belongs to the save.", ar: "عالم ينتمي إلى ملف الحفظ." },
  worldNote: {
    en: "Real countries and cities, fictional club identities and procedurally generated people. Pick the world's size at the start; the same seed recreates the same starting world.",
    ar: "دول ومدن حقيقية، وهويات أندية خيالية وشخصيات مولّدة إجرائياً. اختر حجم العالم عند البداية؛ والبذرة نفسها تعيد إنشاء عالم البداية نفسه.",
  },
  facts: [
    {
      code: "OFFLINE",
      title: { en: "Your career stays with you", ar: "مسيرتك تبقى لديك" },
      body: {
        en: "Single-player gameplay works offline, with no game account or SATER cloud save. Android ads and purchases require a connection; the web edition is a PWA.",
        ar: "اللعب الفردي يعمل دون اتصال، بلا حساب لعبة أو حفظ سحابي لدى SATER. إعلانات أندرويد ومشترياته تحتاج اتصالاً؛ ونسخة الويب تطبيق PWA.",
      },
    },
    {
      code: "48 / 26",
      title: { en: "Choose your football world", ar: "اختر عالمك الكروي" },
      body: {
        en: "48 countries and 26 leagues in the full world, with hundreds of clubs. Start focused with 8 leagues, choose 16 major leagues, or simulate all 26.",
        ar: "48 دولة و26 دورياً في العالم الكامل، مع مئات الأندية. ابدأ بعالم مركّز من 8 دوريات، أو 16 من الدوريات الكبرى، أو حاكِ الدوريات الـ26 كلها.",
      },
    },
    {
      code: "FAIR PLAY",
      title: { en: "No paid simulation advantage", ar: "لا أفضلية مدفوعة في المحاكاة" },
      body: {
        en: "Android offers optional one-time ad removal through Google Play, subject to store availability. Rewarded ads unlock crest designs or an ad-free hour after three completed rewards. Neither money nor ads buy transfer funds or stronger players; the web edition has no ads or purchases.",
        ar: "تتيح نسخة أندرويد إزالة الإعلانات بشراء اختياري لمرة واحدة عبر Google Play، بحسب توفره في المتجر. تفتح الإعلانات الاختيارية تصاميم شعارات أو ساعة بلا إعلانات بعد ثلاث مكافآت مكتملة. لا المال ولا الإعلانات يشتريان ميزانية انتقالات أو لاعبين أقوى؛ ونسخة الويب بلا إعلانات أو مشتريات.",
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
