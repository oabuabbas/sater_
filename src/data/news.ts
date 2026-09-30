import type { Locale } from './products';
import { games, tools } from './products';
import chairman from '~/assets/games/chairman-guide.png';
import director from '~/assets/games/director-guide.png';

type Copy = Record<Locale, string>;
export interface NewsArticle {
  slug: string;
  date: string;
  product?: string;
  kind: 'release' | 'guide' | 'studio';
  title: Copy;
  summary: Copy;
  illustration: ImageMetadata;
  coverTitle: string;
  sections: { title: Copy; body: Copy; bullets?: Record<Locale, string[]> }[];
}

// Publication dates belong to the articles, not to the date of each site build.
export const news: NewsArticle[] = [
  {
    slug: 'studio-chairman-1-1-1', date: '2026-09-30', product: 'studio-chairman', kind: 'release', illustration: chairman, coverTitle: '1.1.1',
    title: { ar: 'Studio Chairman 1.1.1: استوديو أكبر، وقرارات أعمق', en: 'Studio Chairman 1.1.1: a bigger studio, deeper decisions' },
    summary: { ar: 'من تصوير الأفلام أسبوعًا بأسبوع إلى منصتك الخاصة للبث وسلالة عائلية: تعرّف على أكبر تحديث للعبة منذ إطلاقها.', en: 'Week-by-week filmmaking, your own streaming platform and a family dynasty. Explore the biggest update since launch.' },
    sections: [
      { title: { ar: 'كل أسبوع يصنع فارقًا', en: 'Every week changes the picture' }, body: { ar: 'يوسّع الإصدار 1.1.1 دورة صناعة الفيلم من الموافقة على الإنتاج إلى نهاية عرضه. يستغرق التصوير أسابيع بحسب الميزانية، ثم تأتي المونتاجات والصوت والألوان والعروض التجريبية وليلة الافتتاح. وبعدها تختار إصدارًا واسعًا أو محدودًا أو بالبث أولًا أو بنموذج هجين.', en: 'Version 1.1.1 expands the journey from greenlight to the end of a theatrical run. Shooting takes weeks based on budget, followed by pacing, sound, colour, test screenings and a premiere. Choose a wide, limited, streaming-first or hybrid release.' }, bullets: { ar: ['تابع إيرادات السينما أسبوعًا بأسبوع، وقرّر توسيع العرض أو زيادة الإعلان.', 'تؤثر الضجة قبل الإصدار ووسائل التواصل في افتتاح الفيلم.', 'استعن بالوكالة لتجميع طاقمك، ثم عدّل اختياراتها.'], en: ['Follow weekly box-office returns, expand a release or push advertising.', 'Pre-release hype and social media influence opening weekend.', 'Let an agency package your crew, then adjust its choices.'] } },
      { title: { ar: 'ما بعد شاشة السينما', en: 'Beyond the cinema' }, body: { ar: 'أُعيد بناء المسلسلات بمعالج من أربع خطوات، ومواسم من 3 إلى 24 حلقة. تفاوض مع شبكة أو قناة أو منصة، وتعامل مع مطالب الممثلين والتوقف المؤقت والإحياء والأعمال المشتقة. ويمكنك تأسيس منصة بث باسمك وهويتك وخطط اشتراكها، أو إدارة قناة تلفزيونية وشراء حقوق الرياضة.', en: 'TV series now use a four-step wizard with 3–24 episodes. Negotiate with networks, cable or platforms, manage cast demands, take a hiatus and develop revivals or spin-offs. Build a streaming service with its own identity and pricing, or run a TV channel and acquire sports rights.' } },
      { title: { ar: 'جوائز ونجوم وإرث عائلي', en: 'Awards, talent and a family legacy' }, body: { ar: 'أربع حفلات جوائز تمنح الموسم محطاته، مع ترشيحات وحملات للترويج للأعمال واحتمالات فوز لا تضمن النتيجة. استكشف دليل المواهب، وفاوض الوكلاء، وادعم النجوم الصاعدين. خارج الاستوديو، ابنِ عائلة وواجه قرارات الأبناء والورثة الذين قد يرفضون الإدارة.', en: 'Four award shows shape the year, with nominations, campaigns and winning odds that never guarantee a result. Browse the talent directory, negotiate with agents and sponsor rising stars. Beyond the studio, build a family and face the choices of children and heirs who may refuse to take over.' }, bullets: { ar: ['12 لغة تصوير مع تأثير على الجمهور ودعم الدبلجة والترجمة.', 'ثلاث صحف أسبوعية للأخبار والقيل والقال والسخرية.', 'نظام سمعة يتذكّر الإخفاقات ويكافئ العودة القوية.'], en: ['12 shooting languages with audience effects, dubbing and subtitles.', 'Three weekly newspapers covering news, gossip and satire.', 'Reputation that remembers repeated flops and rewards a comeback.'] } },
      { title: { ar: 'حفظ أوضح وتجربة أهدأ', en: 'Clearer saves, a smoother experience' }, body: { ar: 'يضيف التحديث حفظًا تلقائيًا وثلاث خانات حفظ مجانية، ومحاولة استعادة للحفظ غير المقروء. كما يقدّم مصمّم ملصقات ومرشدين يظهرون عند طلب المساعدة. تشمل الإصلاحات تكرار مراسم نهاية العام عند الضغط السريع، وزر كتم الموسيقى، وتداخل الشاشات والإشعارات.', en: 'The update includes autosave and three free save slots, with recovery offered for unreadable saves. A poster designer and on-demand guides join the experience. Fixes address duplicate year-end ceremonies after rapid taps, music muting, overlapping screens and notifications.' } },
    ],
  },
  {
    slug: 'studio-chairman-directors-cut', date: '2026-09-30', product: 'studio-chairman', kind: 'guide', illustration: director, coverTitle: 'CUT!',
    title: { ar: 'Director’s Cut: شيتس مود بطريقتك', en: 'Director’s Cut: your studio, your cheat mode' },
    summary: { ar: 'باب مخفي داخل اللعبة يتيح لك تجربة قراراتك بحرية أكبر. إليك طريقة فتحه، وخياراته السبعة، وما يعنيه لحفظك.', en: 'A hidden door inside the game gives you more room to experiment. Learn how to unlock it, what its seven options do and how it affects your save.' },
    sections: [
      { title: { ar: 'نسختك الخاصة من الحكاية', en: 'Your own cut of the story' }, body: { ar: 'Director’s Cut هو وضع الغش المدمج داخل Studio Chairman. يمنحك أدوات مباشرة لتجربة أفكارك في الاستوديو، سواء أردت تمويل مشروع ضخم أو استكشاف الأبحاث المتاحة في حقبتك.', en: 'Director’s Cut is Studio Chairman’s built-in cheat mode. It offers direct tools for trying ideas in your studio, whether you want to fund an ambitious project or explore your era’s research.' } },
      { title: { ar: 'كيف تفتح Director’s Cut؟', en: 'How to open Director’s Cut' }, body: { ar: 'ابدأ من الإعدادات داخل اللعبة، ثم اتبع هذه الخطوات بالترتيب:', en: 'Start in the in-game settings, then follow these steps in order:' }, bullets: { ar: ['اضغط بطاقة Studio Chairman سبع مرات متتالية، دون ترك أكثر من ثانيتين بين ضغطتين.', 'أدخل كلمة ROSEBUD في النافذة التي تظهر.', 'أكمل مشاهدة خمسة إعلانات بمكافأة لفتح الوضع على هذا الجهاز. يُحفظ تقدّمك بين الجلسات.', 'إذا كنت قد اشتريت إزالة الإعلانات، يُفتح الوضع مباشرة بعد الوصول إليه.'], en: ['Tap the Studio Chairman card seven times in succession, leaving no more than two seconds between taps.', 'Enter ROSEBUD in the prompt.', 'Complete five rewarded ads to unlock the mode on this device. Progress is saved between sessions.', 'If you have purchased ad removal, the mode opens immediately when you enter it.'] } },
      { title: { ar: 'سبع أدوات للتجربة', en: 'Seven tools to experiment with' }, body: { ar: 'بعد الفتح، اختر الأداة التي تناسب تجربتك من قائمة Director’s Cut:', en: 'Once unlocked, choose the tool that fits your experiment from the Director’s Cut menu:' }, bullets: { ar: ['إضافة 10 ملايين دولار.', 'إضافة 100 مليون دولار.', 'رفع السمعة إلى 100.', 'إضافة 500 نقطة بحث.', 'رفع الحماس إلى 100.', 'رفع معنويات وولاء المواهب المتعاقد معها إلى الحد الكامل.', 'فتح أبحاث الحقبة الحالية.'], en: ['Add $10 million.', 'Add $100 million.', 'Set reputation to 100.', 'Add 500 research points.', 'Set hype to 100.', 'Maximise morale and loyalty for signed talent.', 'Unlock the current era’s research.'] } },
      { title: { ar: 'قبل أول استخدام: انتبه إلى ملف الحفظ', en: 'Before your first cheat: know your save' }, body: { ar: 'استخدام أي أداة يوسم الحفظ الحالي بأنه «معدّل» بشكل دائم، وتطلب اللعبة تأكيدك قبل الاستخدام الأول. ملفات الحفظ الأخرى لا تتأثر. احفظ مسيرتك الأصلية في خانة منفصلة قبل التجربة إذا أردت الاحتفاظ بها دون تعديل. مجرد فتح الوضع لا يضع هذا الوسم؛ استخدام الأداة هو ما يفعّله.', en: 'Using any tool permanently marks the current save as modified. The game asks you to confirm before the first use, and other saves are not affected. Keep your original career in a separate slot before experimenting if you want to preserve it unmodified. Opening the mode alone does not apply the mark; using a tool does.' } },
    ],
  },
];

export const newsCopy = {
  ar: { title: 'أخبار سطر', intro: 'ما الجديد في الاستوديو، والألعاب والتطبيقات التي نصنعها.', latest: 'آخر الأخبار', all: 'كل الأخبار', read: 'اقرأ الخبر', empty: 'لا توجد أخبار منشورة هنا بعد. يمكنك متابعة آخر المستجدات في جميع الأخبار.', product: 'أخبار المنتج', related: 'اقرأ أيضًا', release: 'تحديث', guide: 'دليل اللعب', studio: 'من الاستوديو' },
  en: { title: 'SATER news', intro: 'The latest from the studio, and the games and apps we make.', latest: 'Latest news', all: 'All news', read: 'Read story', empty: 'No stories here yet. Explore all news for the latest from the studio.', product: 'Product news', related: 'Read next', release: 'Update', guide: 'Play guide', studio: 'From the studio' },
};
export const topics = [
  { slug: 'studio', title: { ar: 'الاستوديو', en: 'Studio' } },
  { slug: 'apps', title: { ar: 'التطبيقات', en: 'Apps' } },
  { slug: 'games', title: { ar: 'الألعاب', en: 'Games' } },
  ...[...tools, ...games].map(p => ({ slug: p.slug, title: { ar: p.name, en: p.name } })),
];
export function newsFor(topic?: string) {
  return news.filter(n => !topic || (topic === 'studio' ? !n.product : topic === 'games' ? [...games.map(p => p.slug), 'khamen'].includes(n.product ?? '') : topic === 'apps' ? tools.some(p => p.slug !== 'khamen' && p.slug === n.product) : n.product === topic)).sort((a, b) => b.date.localeCompare(a.date));
}
export function newsDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-JO' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}
