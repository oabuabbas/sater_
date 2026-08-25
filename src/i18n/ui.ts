/**
 * Interface strings. Product copy lives in src/data/products.ts.
 *
 * English is the default surface because it is the destination the studio ships
 * to; Arabic is the origin edition at /ar/. Both dictionaries are typed against
 * the same keys, so a missing translation is a build error rather than a silent
 * English fallback.
 */

import type { Locale } from "~/data/products";

export const locales = ["en", "ar"] as const;
export const defaultLocale: Locale = "en";

export const dir: Record<Locale, "ltr" | "rtl"> = { en: "ltr", ar: "rtl" };
export const localeName: Record<Locale, string> = { en: "English", ar: "العربية" };

export const ui = {
  en: {
    "site.name": "SATER",
    "site.descriptor": "Independent studio — Amman, Jordan",
    "site.doctrine": "The line is not the result — it is the first deliberate move.",
    "site.description":
      "Everything starts with a line. SATER is an independent studio in Amman turning ideas, code and form into software worth keeping.",

    "nav.index": "Index",
    "nav.tools": "Tools",
    "nav.play": "Play",
    "nav.studio": "Studio",
    "nav.horizon": "Horizon",
    "nav.aria": "Primary",
    "nav.skip": "Skip to content",
    "nav.home": "SATER — home",

    "hero.claim.a": "Everything starts",
    "hero.claim.b": "with a line.",
    "hero.lede":
      "An idea is written on a line. Code lives on lines. A drawing begins with one. SATER turns that first line into finished software worth keeping.",
    "hero.path.aria": "From the first line to a finished product",
    "hero.path.idea": "Idea",
    "hero.path.code": "Code",
    "hero.path.form": "Form",
    "hero.path.product": "Product",
    "hero.fact.shipped": "On the store",
    "hero.fact.build": "Games",
    "hero.fact.research": "In research",
    "hero.fact.place": "Amman, Jordan",

    "tools.head": "Three tools, on the store",
    "tools.note": "Each is named after the Arabic word for what it does.",

    "games.head": "Two games",
    "games.note": "Studio Chairman is live. Behind The Badge remains in development.",

    "horizon.head": "On the horizon",
    "horizon.note": "Research and hardware. Not products yet.",

    "status.live": "Live",
    "status.build": "In build",

    "footer.rights": "SATER — Amman, Jordan",
    "footer.lang": "Language",
    "theme.toggle": "Switch between light and dark",

    "tools.title": "Tools",
    "tools.lede": "Three apps on the Play Store. Each does one thing, and stops there.",
    "tools.privacy": "Privacy",
    "tools.terms": "Terms",
    "tools.page": "Product page",
    "tools.store": "Google Play",
    "tools.line": "Follow the product line",
    "tools.firstline": "Its first line",

    "play.title": "Play",
    "play.lede": "Longer work — simulations deep enough that a season, or a decade, plays differently every time.",

    "studio.title": "Studio",
    "studio.lede": "SATER is an independent software studio in Amman, Jordan.",
    "studio.body.1": "It exists because most software is built to hold attention rather than to finish a job. We build the opposite: small, complete tools that do their work and get out of the way — and simulations deep enough to be worth the hours they ask for.",
    "studio.body.2": "Nothing ships to hit a date. An app is released when it is finished, which is why there are three of them and not thirty.",
    "studio.founder.role": "Founder",
    "studio.founder.name": "Omar Abu Abbass",
    "studio.doctrine.head": "On the name",
    "studio.doctrine.body": "SATER is سطر: the first visible unit of an idea. A sentence starts on a line; code lives on lines; a drawing declares itself with its first stroke. The name is a reminder to begin clearly, then build until that line becomes a finished thing.",
    "studio.links.head": "Find SATER",
    "studio.links.note": "The studio, its releases, and the work around them.",
    "studio.links.play": "Google Play studio",
    "studio.links.youtube": "YouTube",
    "studio.links.facebook": "Facebook",

    "horizon.title": "Horizon",
    "horizon.lede": "Research, hardware and one board game. None of these are products yet, and some never will be.",

    "notfound.title": "Not found",
    "notfound.body": "That page does not exist. It may have been renamed, or it may never have existed.",
    "notfound.back": "Back to the index",
  },

  ar: {
    "site.name": "سطر",
    "site.descriptor": "استوديو مستقل — عمّان، الأردن",
    "site.doctrine": "السطر ليس النتيجة — بل أول حركة مقصودة.",
    "site.description":
      "كل شيء يبدأ من سطر. استوديو مستقل في عمّان يحوّل الفكرة والكود والشكل إلى برمجيات تستحق البقاء.",

    "nav.index": "الفهرس",
    "nav.tools": "الأدوات",
    "nav.play": "الألعاب",
    "nav.studio": "الاستوديو",
    "nav.horizon": "الأفق",
    "nav.aria": "رئيسية",
    "nav.skip": "تخطَّ إلى المحتوى",
    "nav.home": "سطر — الرئيسية",

    "hero.claim.a": "كل شيء يبدأ",
    "hero.claim.b": "من سطر.",
    "hero.lede": "تُكتب الفكرة في سطر، ويعيش الكود في أسطر، وتبدأ الرسمة من خطّ أول. في سطر نحول تلك البداية إلى برمجيات مكتملة تستحق البقاء.",
    "hero.path.aria": "من السطر الأول إلى منتج مكتمل",
    "hero.path.idea": "فكرة",
    "hero.path.code": "كود",
    "hero.path.form": "شكل",
    "hero.path.product": "منتج",
    "hero.fact.shipped": "على المتجر",
    "hero.fact.build": "ألعاب",
    "hero.fact.research": "قيد البحث",
    "hero.fact.place": "عمّان، الأردن",

    "tools.head": "ثلاث أدوات على المتجر",
    "tools.note": "كلٌّ منها سُمّيت بالكلمة العربية التي تصف ما تفعله.",

    "games.head": "لعبتان",
    "games.note": "Studio Chairman منشورة، وBehind The Badge ما تزال قيد التطوير.",

    "horizon.head": "في الأفق",
    "horizon.note": "بحث وعتاد. لم تصبح منتجات بعد.",

    "status.live": "منشور",
    "status.build": "قيد البناء",

    "footer.rights": "سطر — عمّان، الأردن",
    "footer.lang": "اللغة",
    "theme.toggle": "بدّل بين الوضع الفاتح والداكن",

    "tools.title": "الأدوات",
    "tools.lede": "ثلاثة تطبيقات على متجر Play. كلٌّ منها يفعل شيئاً واحداً، ويقف عنده.",
    "tools.privacy": "الخصوصية",
    "tools.terms": "الشروط",
    "tools.page": "صفحة المنتج",
    "tools.store": "Google Play",
    "tools.line": "اتبع سطر المنتج",
    "tools.firstline": "سطره الأول",

    "play.title": "الألعاب",
    "play.lede": "عمل أطول نفَساً — محاكاة عميقة بما يكفي ليختلف الموسم، أو العقد، في كل مرة.",

    "studio.title": "الاستوديو",
    "studio.lede": "سطر استوديو برمجيات مستقل في عمّان، الأردن.",
    "studio.body.1": "وُجد لأن أكثر البرمجيات تُبنى لتحتجز الانتباه لا لتُنجز عملاً. نحن نبني العكس: أدوات صغيرة مكتملة تؤدي مهمتها ثم تبتعد عن الطريق — ومحاكاة عميقة بما يستحق الساعات التي تطلبها.",
    "studio.body.2": "لا شيء يُنشر لأجل موعد. التطبيق يصدر حين يكتمل، ولهذا هي ثلاثة لا ثلاثين.",
    "studio.founder.role": "المؤسس",
    "studio.founder.name": "عمر أبو عباس",
    "studio.doctrine.head": "عن الاسم",
    "studio.doctrine.body": "سطر هو أول شكل ظاهر للفكرة: تبدأ الجملة من سطر، ويعيش الكود في أسطر، وتعلن الرسمة عن نفسها بخطّها الأول. الاسم تذكير بأن نبدأ بوضوح، ثم نبني حتى يصبح ذلك السطر شيئاً مكتملاً.",
    "studio.links.head": "اعثر على سطر",
    "studio.links.note": "الاستوديو، وإصداراته، والعمل الذي يدور حولها.",
    "studio.links.play": "استوديو Google Play",
    "studio.links.youtube": "يوتيوب",
    "studio.links.facebook": "فيسبوك",

    "horizon.title": "الأفق",
    "horizon.lede": "بحث وعتاد ولعبة لوحية. لا شيء منها منتَج بعد، وبعضها لن يكون.",

    "notfound.title": "غير موجودة",
    "notfound.body": "هذه الصفحة غير موجودة. ربما تغيّر اسمها، أو ربما لم توجد أصلاً.",
    "notfound.back": "عُد إلى الفهرس",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

/** A lookup bound to one locale. */
export function useTranslations(locale: Locale) {
  return (key: UIKey): string => ui[locale][key];
}

/** Prefix a path with the locale, leaving the default locale at the root. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean === "/" ? "" : clean}`;
}

export const navItems = [
  { key: "nav.index", path: "/" },
  { key: "nav.tools", path: "/tools" },
  { key: "nav.play", path: "/play" },
  { key: "nav.studio", path: "/studio" },
  { key: "nav.horizon", path: "/horizon" },
] as const satisfies ReadonlyArray<{ key: UIKey; path: string }>;
