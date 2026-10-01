import type { Locale } from './products';
import { games, tools } from './products';
import chairman from '~/assets/games/chairman-guide.png';
import director from '~/assets/games/director-guide.png';
import khamoon from '~/assets/games/khamoon.png';

type Copy = Record<Locale, string>;
export interface NewsArticle {
  slug: string;
  date: string;
  product?: string;
  kind: 'release' | 'guide' | 'studio';
  title: Copy;
  summary: Copy;
  illustration: ImageMetadata;
  illustrationAlt?: Copy;
  illustrationFit?: 'contain';
  coverTitle: string;
  sections: { title: Copy; body: Copy; bullets?: Record<Locale, string[]> }[];
}

// Publication dates belong to the articles, not to the date of each site build.
export const news: NewsArticle[] = [
  {
    slug: 'khamen-1-7-0', date: '2026-10-01', product: 'khamen', kind: 'release',
    illustration: khamoon, illustrationFit: 'contain', coverTitle: '1.7.0',
    illustrationAlt: { ar: 'خمّون، رفيق ألعاب خمّن', en: 'Khamoon, KHAMEN’s game companion' },
    title: { ar: 'خمّن 1.7.0: خمّون وألعاب تجمعكم', en: 'KHAMEN 1.7.0: meet Khamoon, and games that bring you together' },
    summary: { ar: 'نظرة على تحديث خمّن: رفيق جديد للجلسة، ولعبة الكلمة الممنوعة، وأسماء ونقاط محفوظة، وحزم أسئلة على ذوقكم.', en: 'A look at the KHAMEN update: a new companion, Forbidden Words, saved session names and scores, and question packs you can make your own.' },
    sections: [
      {
        title: { ar: 'ألعاب تجمعكم، ورفيق يرحّب بكم', en: 'Games that bring you together, with a new companion' },
        body: { ar: 'يحمل تحديث خمّن 1.7.0 هوية ألطف بالأزرق والأصفر وشعار «ألعاب تجمعكم». ومعه يأتي خمّون: رفيق يظهر في الترحيب والمساعدة والنتائج المناسبة، ويشرح اللعبة بأمثلة عربية وإنجليزية حين تحتاجونه. تُراعي حركاته القصيرة إعداد تقليل الحركة، وتبقى المساعدة متاحة دون شرح إجباري قبل اللعب.', en: 'KHAMEN 1.7.0 brings a softer blue-and-yellow identity and the promise “Games that bring you together”. Meet Khamoon, a companion who welcomes you, offers help and joins suitable result screens. Arabic and English examples explain the game when you need them, with short animations that respect reduced-motion settings and no mandatory tutorial before play.' },
      },
      {
        title: { ar: 'اختاروا لعبتكم أسرع', en: 'Find your next game faster' },
        body: { ar: 'تجمع الرئيسية الألعاب الجماعية والتحديات السريعة وأدوات الجلسة في مكتبة أوضح. يمكنكم حفظ المفضلة، والعودة إلى آخر ست ألعاب، وطلب اقتراح يناسب عدد اللاعبين والوقت المتاح. يوضح خمّون سبب الترشيح، ويمكنكم طلب اقتراح آخر؛ هذه اقتراحات مبنية على قواعد محلية وليست ذكاءً اصطناعيًا يتعلّم منكم.', en: 'The home screen organises party games, quick challenges and session tools into a clearer library. Save favourites, return to your six most recent games and request a suggestion based on your group size and available time. Khamoon explains the choice, and you can ask for another. Suggestions use local rules, not an AI model that learns from you.' },
        bullets: { ar: ['تضم المكتبة الحالية 19 لعبة وأداة؛ بعضها كان موجودًا في الإصدارات السابقة.', 'من الميني جيمز: اختيار الأصابع، وعشرة أصابع، وأسرع إصبع، وشد الحبل.', 'خيارات محفوظة محليًا لألوان الألعاب والبطاقات المدمجة، مع العربية والإنجليزية والمظهرين الفاتح والداكن.'], en: ['The current library contains 19 games and tools, including favourites from earlier versions.', 'Mini-games include Finger Picker, Ten Fingers, Fastest Finger and Tug of War.', 'Locally saved game-colour and compact-card preferences, with Arabic, English, light and dark modes.'] },
      },
      {
        title: { ar: 'الجديد: الكلمة الممنوعة', en: 'New: Forbidden Words' },
        body: { ar: 'فريقان، وكلمة عليكم شرحها دون نطق الكلمات الثلاث الممنوعة على البطاقة. اختاروا 30 أو 60 أو 90 ثانية للدور، وواحدًا أو ثلاثة أو خمسة أدوار لكل فريق. تخفي شاشة تسليم الهاتف البطاقة حتى يبدأ اللاعب التالي، وتعرض النتيجة الفائز أو التعادل مع نقاط الفريقين وإحصاءات أدوارهما.', en: 'Two teams take turns explaining a word without saying the three forbidden words on its card. Choose 30, 60 or 90 seconds per turn and one, three or five turns per team. A phone handover screen keeps the card hidden until the next player starts. Results show the winner or a draw, team scores and turn statistics.' },
        bullets: { ar: ['الإجابة الصحيحة +1، والمخالفة −1، والتخطي 0؛ ويمكن أن تصبح النقاط سالبة.', '30 بطاقة بكل لغة، مع تقليل تكرار البطاقات أثناء اللعب.', 'المساعدة والتوقف والخروج للخلفية تجمّد الوقت وتخفي البطاقة حتى الاستئناف.', 'اللاعبون يتحققون من الكلمات بأنفسهم؛ اللعبة لا تستخدم الميكروفون أو التعرف الصوتي.'], en: ['Correct answers earn +1, violations cost −1 and skips score 0. Scores can go below zero.', '30 cards per language, with reduced repetition during play.', 'Help, pausing and backgrounding freeze the timer and hide the card until you resume.', 'Players judge the words themselves; the game does not use a microphone or speech recognition.'] },
      },
      {
        title: { ar: '«جلستنا»: الأسماء والنقاط في مكان واحد', en: 'Your session: names and scores in one place' },
        body: { ar: 'أنشئوا جلسة محلية من لاعبين إلى 20 لاعبًا، مع اسم اختياري للجلسة ولوحة نقاط يدوية. تبقى الأسماء والنقاط محفوظة بعد إعادة تشغيل التطبيق، ويمكن استيراد الأسماء إلى إعداد الألعاب الداعمة بدل كتابتها كل مرة، مع تأكيد قبل استبدال الأسماء الموجودة. لوحة النقاط لا تجمع نتائج الألعاب تلقائيًا، ولا تزامن الجلسة بين الهواتف أو تستكمل مباراة أُغلقت.', en: 'Create a local session for 2–20 players, with an optional session name and a manual scoreboard. Names and scores remain after restarting the app. Import names into supported game setups instead of entering them again, with confirmation before replacing existing names. The scoreboard does not automatically combine game results, sync between phones or resume a match that was closed.' },
      },
      {
        title: { ar: 'أسئلة على ذوق المجموعة', en: 'Questions that fit your group' },
        body: { ar: 'تتيح صراحة أو جرأة، ورأي جريء، وعشرة أصابع، وتحدي الفئات حزم الأصلية والعائلة والأصدقاء والمخصصة. أُضيف 80 زوجًا من المحتوى بالعربية والإنجليزية إلى حزم العائلة والأصدقاء. ويمكن كتابة البطاقات الخاصة بكم، بينما تحتفظ «ع راسي» بفئاتها الثماني وتضيف فئة كلمات مخصصة. يُحفظ المحتوى لكل لعبة ولغة على الجهاز، مع تقليل التكرار وإمكانية تخطي الأسئلة الشخصية.', en: 'Truth or Dare, Bold Opinion, Ten Fingers and Category Challenge offer original, family, friends and custom packs. Family and friends packs gain 80 bilingual content pairs. Write your own cards, while the forehead guessing game keeps its eight categories and adds a custom word category. Content is saved on the device separately for each game and language, with reduced repetition and the option to skip personal questions.' },
      },
      {
        title: { ar: 'تفاصيل تجعل الجلسة أسلس', en: 'Details that keep the session flowing' },
        body: { ar: 'يشمل التحديث تحسين قراءة النصوص الطويلة والشاشات الصغيرة، وتباين الحقول في الوضع الداكن، وقوائم اللاعبين والنتائج والتعادل. في «ع راسي»، تبقى أزرار الصحيح والتخطي بجانب الإمالة، ولا تُحتسب إجابة جديدة بالإمالة حتى يعود الهاتف إلى وضعه المحايد. يتوقف المؤقت عند المساعدة أو الانتقال للخلفية ويُستأنف بالوقت المتبقي.', en: 'The update improves long text, small-screen layouts, dark-mode field contrast, player lists, results and ties. In the forehead guessing game, manual correct and skip controls remain alongside tilt controls. Another tilt answer cannot register until the phone returns to neutral. Help and backgrounding pause the timer so play can resume with the remaining time.' },
      },
      {
        title: { ar: 'إعلانات مرتبطة بنهاية النشاط', en: 'Ads tied to completed activities' },
        body: { ar: 'يرتبط طلب الإعلان بإكمال الأنشطة، لا بكل ضغطة أو زيارة شاشة: بعد خمسة أنشطة في الألعاب السريعة، وثلاثة في الألعاب الأبطأ، مع فاصل مشترك لا يقل عن 100 ثانية وحد أقصى ثمانية إعلانات بينية لكل تشغيل. ويتيح خيار المكافأة مشاهدة ثلاثة فيديوهات مكتملة لساعة فعلية دون إعلانات خارجية؛ تبقى خلالها اقتراحات ألعاب خمّن الداخلية. يتوقف توفر الإعلانات على الموافقة وتوفر إعلان محمّل.', en: 'Ad requests follow completed activities rather than every tap or screen visit: five activities in quick games and three in slower games, with at least 100 seconds between interstitials and a maximum of eight per app launch. An optional reward lets you complete three videos for one real-time hour without external ads; internal KHAMEN game suggestions remain. Ad availability depends on consent and a loaded ad being available.' },
      },
      {
        title: { ar: 'عن الإصدار 1.7.0 (24)', en: 'About version 1.7.0 (24)' },
        body: { ar: 'هذه نظرة على العمل المتراكم في الإصدار 1.7.0 (24)، وليست قائمة تدّعي أن كل عنصر جديد. بحسب ملخص 1 أكتوبر 2026، الحزمة مجهّزة محليًا ولم يُؤكَّد طرحها على Google Play بعد. شراء إزالة الإعلانات غير مفعّل في الحزمة الحالية، فلا يُقدَّم هنا كميزة متاحة للشراء.', en: 'This is a look at the accumulated work in version 1.7.0 (24), not a claim that every item is new. As of the 1 October 2026 summary, the build has been prepared locally and its Google Play rollout has not been confirmed. The ad-removal purchase is not enabled in the current build and is not being presented here as an available purchase.' },
      },
    ],
  },
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
