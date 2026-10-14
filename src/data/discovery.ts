import type { Locale } from './products';

type Copy = Record<Locale, string>;
export const discovery = {
  apps: {
    title: 'SATER Apps',
    subtitle: { en: 'Apps from SATER, the independent studio in Amman, Jordan.', ar: 'تطبيقات سطر، الاستوديو المستقل في عمّان، الأردن.' },
    description: { en: 'Explore SATER Apps: TAM for tasks, KHAMEN for party games and ZILL for sun-aware travel. Find official product pages, Google Play links and updates.', ar: 'اكتشف SATER Apps: تم للمهام، وخمّن للألعاب الجماعية، وظل للتنقل مع الشمس. صفحات المنتجات وروابط Google Play الرسمية والأخبار والسياسات.' },
    heading: { en: 'What would you like to do?', ar: 'ماذا تريد أن تفعل؟' },
    intro: { en: 'Three different ideas, each with its own purpose. Choose by what you need, then visit the product page for details and its official store link.', ar: 'ثلاث أفكار مختلفة، لكل منها غايتها. اختر ما تحتاجه، ثم افتح صفحة المنتج للتفاصيل ورابطه الرسمي في المتجر.' },
    catalog: { en: 'View the full app catalogue', ar: 'عرض كتالوج التطبيقات الكامل' },
    questions: [
      { title: { en: 'Where should I download SATER apps?', ar: 'من أين أحمل تطبيقات سطر؟' }, body: { en: 'Use the Google Play links on these official product pages. Each app has its own listing, update history and privacy policy.', ar: 'استخدم روابط Google Play في صفحات المنتجات الرسمية هنا. لكل تطبيق صفحة مستقلة وتحديثاته وسياسة خصوصيته.' } },
      { title: { en: 'Are the apps and management games the same collection?', ar: 'هل التطبيقات وألعاب الإدارة مجموعة واحدة؟' }, body: { en: 'KHAMEN is a party-game app in this collection. Studio Chairman and Behind The Badge are longer-form management simulations, introduced separately in SATER Games.', ar: 'خمّن تطبيق ألعاب جماعية ضمن هذه المجموعة. أما Studio Chairman وBehind The Badge فهما محاكاتان إداريتان أطول نفسًا، ولهما دليل مستقل في SATER Games.' } },
    ],
  },
  games: {
    title: 'SATER Games',
    subtitle: { en: 'Management simulation games from SATER, an independent studio in Jordan.', ar: 'ألعاب محاكاة إدارية من سطر، استوديو مستقل في الأردن.' },
    description: { en: 'Explore SATER Games: Studio Chairman film-studio management and Behind The Badge football presidency. Find game details, release status, screenshots and news.', ar: 'اكتشف SATER Games: إدارة استوديو الأفلام في Studio Chairman ورئاسة كرة القدم في Behind The Badge. تفاصيل الألعاب وحالة النشر والصور والأخبار.' },
    heading: { en: 'Which world will you lead?', ar: 'أي عالم ستقود؟' },
    intro: { en: 'Our management games centre on decisions and their consequences. Run a film studio or build a football institution; each game has its own systems, story and release status.', ar: 'تتمحور ألعابنا الإدارية حول القرارات وعواقبها. أدِر استوديو أفلام أو ابنِ مؤسسة كروية؛ لكل لعبة أنظمتها وقصتها وحالة نشرها الخاصة.' },
    catalog: { en: 'View the full game catalogue', ar: 'عرض كتالوج الألعاب الكامل' },
    questions: [
      { title: { en: 'Which SATER game is available now?', ar: 'أي ألعاب سطر متاحة الآن؟' }, body: { en: 'Studio Chairman has an official Google Play listing. Behind The Badge is marked in development on this website; its information page is not a public download announcement.', ar: 'لـStudio Chairman صفحة رسمية على Google Play. أما Behind The Badge فتظهر قيد التطوير في الموقع؛ وصفها هنا ليس إعلانًا عن إتاحتها للتحميل العام.' } },
      { title: { en: 'Where can I follow game updates?', ar: 'أين أتابع تحديثات الألعاب؟' }, body: { en: 'Every game links to its own news topic and policies. Visit the game page for the full overview and available screenshots, and the news section for published updates.', ar: 'لكل لعبة روابط لأخبارها وسياساتها. افتح صفحتها للوصف الكامل والصور المتاحة، وقسم الأخبار للتحديثات المنشورة.' } },
    ],
  },
} as const;

export const productDiscovery: Record<string, { purpose: Copy; body: Copy; category: string }> = {
  tam: { purpose: { en: 'Make progress on your tasks', ar: 'أنجز مهامك بخطوات واضحة' }, body: { en: 'TAM brings task planning and follow-through into a game-inspired experience. Choose it when your priority is organising work and building momentum.', ar: 'يجمع تم تخطيط المهام ومتابعة إنجازها في تجربة تستلهم الألعاب. اختره عندما تكون أولويتك تنظيم العمل وبناء إيقاع للإنجاز.' }, category: 'ProductivityApplication' },
  khamen: { purpose: { en: 'Bring a group together', ar: 'اجمع الجلسة حول لعبة' }, body: { en: 'KHAMEN is the party-game app for shared sessions, quick games and group challenges. Explore its latest update and meet Khamoon, its companion character.', ar: 'خمّن تطبيق للجلسات المشتركة والألعاب السريعة والتحديات الجماعية. اكتشف تحديثاته وتعرّف على خمون، شخصيته المرافقة.' }, category: 'GameApplication' },
  zill: { purpose: { en: 'Understand the sun on your route', ar: 'افهم اتجاه الشمس في طريقك' }, body: { en: 'ZILL combines solar direction with travel guidance to help you consider the shaded side. Its product page explains the idea; its policies cover location and online map services.', ar: 'يجمع ظل اتجاه الشمس مع إرشادات التنقل ليساعدك على مراعاة الجهة الظليلة. تشرح صفحته الفكرة، وتوضح سياساته بيانات الموقع وخدمات الخرائط المتصلة.' }, category: 'TravelApplication' },
  'studio-chairman': { purpose: { en: 'Lead a film studio', ar: 'قُد استوديو أفلام' }, body: { en: 'Greenlight productions, recruit talent, follow the box office and develop a media business across decades. Explore the game screenshots and release stories before visiting Google Play.', ar: 'امنح الإنتاجات الضوء الأخضر، واستقطب المواهب، وتابع شباك التذاكر، وطوّر أعمالك الإعلامية عبر العقود. شاهد صور اللعبة وأخبار إصداراتها قبل الانتقال إلى Google Play.' }, category: 'GameApplication' },
  'behind-the-badge': { purpose: { en: 'Lead a football institution', ar: 'قُد مؤسسة كروية' }, body: { en: 'Begin as a club president, appoint the coach and seek elected leadership of leagues and football federations. Discover the offline single-player simulation currently presented as in development.', ar: 'ابدأ رئيسًا لنادٍ، وعيّن المدرب، وتنافس انتخابيًا على قيادة الروابط والاتحادات الكروية. اكتشف المحاكاة الفردية التي تعمل دون اتصال وتظهر حاليًا قيد التطوير.' }, category: 'GameApplication' },
};

export const seoPages: Record<string, { title: Copy; description: Copy }> = {
  '/': { title: { en: 'Independent Apps & Management Games', ar: 'تطبيقات وألعاب محاكاة من استوديو مستقل' }, description: { en: 'SATER is an independent studio in Amman, Jordan. Discover TAM, KHAMEN and ZILL apps, Studio Chairman and Behind The Badge games, and official product news.', ar: 'سطر استوديو مستقل في عمّان، الأردن. اكتشف تطبيقات تم وخمّن وظل، وألعاب Studio Chairman وBehind The Badge، والأخبار وروابط المنتجات الرسمية.' } },
  '/sater-apps': { title: { en: 'SATER Apps — Android Apps & Party Games', ar: 'SATER Apps — تطبيقات سطر وألعاب الجلسات' }, description: discovery.apps.description },
  '/sater-games': { title: { en: 'SATER Games — Management Simulation Games', ar: 'SATER Games — ألعاب سطر والمحاكاة الإدارية' }, description: discovery.games.description },
  '/tools': { title: { en: 'App Catalogue — TAM, KHAMEN & ZILL', ar: 'كتالوج التطبيقات — تم وخمّن وظل' }, description: { en: 'Browse the SATER app catalogue with official Google Play links, product descriptions, privacy policies and terms for TAM, KHAMEN and ZILL.', ar: 'تصفح كتالوج تطبيقات سطر: تم وخمّن وظل، مع روابط Google Play الرسمية وأوصاف المنتجات والخصوصية والشروط.' } },
  '/play': { title: { en: 'Game Catalogue — Studio Chairman & Behind The Badge', ar: 'كتالوج الألعاب — Studio Chairman وBehind The Badge' }, description: { en: 'Browse SATER management games: Studio Chairman and Behind The Badge, with artwork, release status, product pages and game news.', ar: 'تصفح ألعاب سطر الإدارية: Studio Chairman وBehind The Badge، مع الصور وحالة النشر وصفحات الألعاب والأخبار.' } },
};
