import type { Locale } from './products';
import { games, tools } from './products';
import chairman from '~/assets/games/chairman-guide.png';
import director from '~/assets/games/director-guide.png';
import khamoon from '~/assets/games/khamoon.png';
import zillFeature from '~/assets/products/zill-feature.png';
import badgeFeature from '~/assets/games/behind-the-badge-feature.png';

type Copy = Record<Locale, string>;
export interface NewsArticle {
  slug: string;
  date: string;
  product?: string;
  kind: 'launch' | 'release' | 'guide' | 'studio' | 'character';
  title: Copy;
  summary: Copy;
  illustration: ImageMetadata;
  illustrationAlt?: Copy;
  illustrationFit?: 'contain' | 'landscape';
  coverTitle: string;
  sections: { title: Copy; body: Copy; bullets?: Record<Locale, string[]> }[];
}

// Publication dates belong to the articles, not to the date of each site build.
export const news: NewsArticle[] = [
  {
    slug: 'behind-the-badge-launch', date: '2026-10-18', product: 'behind-the-badge', kind: 'launch',
    illustration: badgeFeature, illustrationFit: 'landscape', coverTitle: 'OUT NOW',
    illustrationAlt: { ar: 'Behind The Badge: ملعب كرة قدم ولوحة تكتيكية من غرفة الإدارة', en: 'Behind The Badge: a football stadium and tactics board seen from the boardroom' },
    title: { ar: 'Behind The Badge متاحة الآن: ابدأ مسيرتك خلف الشعار', en: 'Behind The Badge is out now: begin your career behind the badge' },
    summary: { ar: 'لعبة سطر الجديدة متاحة على Google Play. تولَّ رئاسة نادٍ، وابنِ مستقبله، وشقّ طريقك من غرفة الإدارة إلى قيادة عالم كرة القدم.', en: 'SATER’s new game is available on Google Play. Take the club presidency, build its future and work your way from the boardroom to the leadership of world football.' },
    sections: [
      {
        title: { ar: 'هذه المرة، القرار من غرفة الإدارة', en: 'This time, the decisions come from the boardroom' },
        body: { ar: 'في Behind The Badge، أنت رئيس النادي، لا المدرب على خط التماس. عيّن المدرب، وفاوض في الانتقالات، وطوّر الملعب، ووازن بين طموحات الجماهير وقدرة النادي المالية. لكل قرار أثر في المؤسسة التي تبنيها وفي ثقة من ينتظرون منك النجاح.', en: 'In Behind The Badge, you are the club president, not the coach on the touchline. Appoint the coach, negotiate transfers, develop the stadium and balance the fans’ ambitions with the club’s finances. Your decisions shape the institution you build and the trust of those who expect you to succeed.' },
      },
      {
        title: { ar: 'ثلاث طرق للرئاسة', en: 'Three ways to hold the presidency' },
        body: { ar: 'اختر شكل مسيرتك: رئيس معيّن تحاسبه الملكية ومجلس الإدارة، أو رئيس منتخب يعتمد على ثقة الأعضاء، أو مالك يقود ناديه ويتحمل مسؤولية بقائه. تختلف الضغوط بحسب طريقك، لكن الهدف واحد: بناء مؤسسة تستمر بعد صافرة النهاية.', en: 'Choose your path: an appointed president accountable to the owner and board, an elected president relying on members’ confidence, or an owner-president responsible for the club’s survival. Each path brings different pressures, with one shared goal: building an institution that lasts beyond the final whistle.' },
      },
      {
        title: { ar: 'طموح يتجاوز حدود النادي', en: 'Ambition beyond your club' },
        body: { ar: 'لا تنتهي المسيرة عند رئاسة نادٍ. تنافس على قيادة الرابطة، ثم الاتحاد الوطني والاتحاد القاري، وصولًا إلى الهيئة الدولية. تتغير مسؤولياتك مع كل منصب، لتنتقل من إدارة فريق إلى التأثير في مستقبل اللعبة.', en: 'Your career does not have to end at the club presidency. Compete for league leadership, then national and continental office, and ultimately the international governing body. Each role changes your responsibilities as you move from running a club to shaping the future of the game.' },
      },
      {
        title: { ar: 'ابدأ مسيرتك الآن', en: 'Start your career today' },
        body: { ar: 'Behind The Badge محاكاة فردية تعمل دون اتصال في اللعب الأساسي. حمّل اللعبة على أندرويد من Google Play عبر الرابط أدناه، واختر كيف ستبدأ حكايتك خلف الشعار.', en: 'Behind The Badge is a single-player simulation with offline core gameplay. Download it for Android on Google Play using the link below, and choose how your story behind the badge begins.' },
      },
    ],
  },
  {
    slug: 'zill-1-1-0', date: '2026-10-18', product: 'zill', kind: 'release',
    illustration: zillFeature, illustrationFit: 'landscape', coverTitle: '1.1.0',
    illustrationAlt: { ar: 'رسم توضيحي لظل: رحلة على طريق مع مسار الشمس في الأفق', en: 'ZILL artwork showing a road journey and the sun’s path across the horizon' },
    title: { ar: 'ظل 1.1.0: تخطيط أوضح لرحلتك مع الشمس', en: 'ZILL 1.1.0: clearer planning for your journey with the sun' },
    summary: { ar: 'تعرّف على جديد ظل: حسابات أكثر اتساقًا للرحلة والتعرض للشمس، وخرائط محسّنة، وتصدير يدعم العربية، وخيارات أوضح لإدارة بيانات التخطيط.', en: 'Explore what’s new in ZILL: more consistent trip and sun-exposure calculations, improved maps, Arabic-friendly exports and clearer controls for your saved planning data.' },
    sections: [
      {
        title: { ar: 'رحلتك وتوقفاتك في حساب واحد', en: 'Your journey and stops, working together' },
        body: { ar: 'يوحّد التحديث بيانات المسار والتوقفات ومواعيد المغادرة والوصول بين مخطط المقاعد والمحاكاة والملفات المصدّرة. تراعي تقديرات التعرض للشمس مدة كل جزء من الرحلة، ويفحص مستشار الانطلاق المسار كاملًا عند مقارنة الأوقات المقترحة.', en: 'The update brings route details, stops, departure times and arrival times into sync across the seat planner, simulation and exported files. Sun-exposure estimates account for the time spent on each part of the journey, while the departure advisor considers the full route when comparing suggested times.' },
        bullets: { ar: ['اختيار الوقت الحالي يعني الانطلاق الآن، دون الانتقال إلى اليوم التالي بسبب فرق الثواني.', 'تعكس المحاكاة مدة التوقف وموعد انطلاق كل مقطع من الرحلة.', 'تُحفظ إعدادات المنزل والعمل ومواعيد الدوام لتعود إليها لاحقًا.'], en: ['Choosing the current time means leaving now, without accidentally switching to tomorrow because of a few seconds.', 'The simulation reflects stop durations and the departure time of each journey segment.', 'Home, work and commute times are saved for your next visit.'] },
      },
      {
        title: { ar: 'خرائط واختيار موقع أكثر سلاسة', en: 'Smoother maps and location selection' },
        body: { ar: 'أُصلح تحميل الخريطة باستخدام OpenStreetMap، مع رسائل أوضح عند تعذر الاتصال وإمكانية إعادة المحاولة. تحسّن التعامل مع قراءات الموقع والبوصلة المتأخرة، ويمكنك اختيار الموقع والاتجاه يدويًا عند تعذر الحصول عليهما من الجهاز.', en: 'Map loading has been fixed using OpenStreetMap, with clearer connection messages and a retry option. Handling of delayed location and compass readings has improved, and you can choose your position and direction manually when device readings are unavailable.' },
      },
      {
        title: { ar: 'تفاصيل الرحلة جاهزة للحفظ والمشاركة', en: 'Trip details ready to save and share' },
        body: { ar: 'تدعم ملفات PDF النص العربي بخط مضمّن، وتعرض محطات الرحلة الفعلية. وأصبحت رموز QR والباركود قابلة للقراءة، مع بيانات التاريخ والوقت والمقعد وتوضيح طبيعة التقدير. هذه بطاقات للتخطيط، وليست تذاكر سفر أو تأكيدات حجز.', en: 'PDF exports support Arabic text with an embedded font and include your journey’s actual stops. QR codes and barcodes are now scannable, carrying the date, time, seat and an explicit estimate label. These are planning cards, not travel tickets or booking confirmations.' },
      },
      {
        title: { ar: 'خيارات أوضح لبياناتك', en: 'Clearer controls for your data' },
        body: { ar: 'يمكنك قراءة الخصوصية وشروط الاستخدام داخل التطبيق بالعربية والإنجليزية دون اتصال. ويتيح خيار حذف بيانات التخطيط مسح آخر موقع والرحلات الحديثة وإعدادات الدوام. لا يشمل ذلك الملفات التي صدّرتها أو موافقة الإعلانات أو سجلات مزودي الخدمات. كما تحسّن التعامل مع اختيار موافقة الإعلانات وتغييره.', en: 'Read the privacy policy and terms inside the app in Arabic or English, even offline. A planning-data deletion option clears your last location, recent trips and commute settings. It does not delete exported files, advertising consent or service providers’ records. Advertising consent handling has also been improved.' },
      },
      {
        title: { ar: 'واجهة أوضح وحدود مفهومة', en: 'A clearer interface, with clear limits' },
        body: { ar: 'يشمل الإصدار شعارًا محدّثًا، وتحسين عرض المحتوى قرب حواف شاشة أندرويد، وحفظ لغة واجهات التخطيط المترجمة. وتُميّز الواجهة الأدوات التجريبية عن الخدمات الفعلية: يقدّم ظل تقديرات للتخطيط مع الشمس، لا ملاحة طرق أو ضمانًا لظل المباني والأشجار. وتظهر أدوات الطقس والتحكم بالمركبة غير المتصلة بخدمات فعلية بوصفها محاكاة أو معاينة.', en: 'The release includes an updated logo, improved layouts near Android screen edges and a saved language preference for translated planning screens. The interface distinguishes experimental tools from connected services: ZILL offers sun-aware planning estimates, not turn-by-turn navigation or guaranteed shade from buildings and trees. Weather and vehicle-control tools without live service connections are labelled as simulations or previews.' },
      },
    ],
  },
  {
    slug: 'khamen-1-7-2', date: '2026-10-17', product: 'khamen', kind: 'release',
    illustration: khamoon, illustrationFit: 'contain', coverTitle: '1.7.2',
    illustrationAlt: { ar: 'خمّون، رفيق جلسات خمّن', en: 'Khamoon, your KHAMEN party companion' },
    title: { ar: 'خمّن 1.7.2: إطلالة جديدة وتحدٍّ يجمع ألعابكم', en: 'KHAMEN 1.7.2: a fresh look and a challenge that brings your games together' },
    summary: { ar: 'يجمع هذا الإصدار جديد 1.7.1 و1.7.2: هوية بصرية مجددة، ومقدمة فيديو، وست حركات لخمّون، وتحدٍّ يجمع عدة ألعاب في جلسة واحدة.', en: 'Bringing together the changes in 1.7.1 and 1.7.2: a refreshed visual identity, a video intro, six Khamoon animations and a challenge mode that combines several games in one session.' },
    sections: [
      {
        title: { ar: 'تحدّي خمّون: ماذا سنلعب اليوم؟', en: 'Khamoon Challenge: what shall we play today?' },
        body: { ar: 'محتارون بماذا تبدأون؟ اختاروا جلسة من 3 أو 5 ألعاب متنوعة تناسب عدد اللاعبين. ينظم «تحدّي خمّون» ألعاب الجلسة في جولات متتابعة، لتتنقلوا بين تجارب مختلفة وتبقى المنافسة مستمرة.', en: 'Not sure where to start? Choose a session of 3 or 5 varied games suited to your player count. Khamoon Challenge organises the session into consecutive rounds, keeping the competition going as you try different games.' },
        bullets: { ar: ['العبوا كل جولة وسجّلوا نقاطكم يدويًا.', 'أكدوا إكمال الجولة للانتقال إلى اللعبة التالية.', 'يُحفظ ترتيب التحدي وتقدّمه محليًا على الجهاز، لتعودوا إليه لاحقًا.'], en: ['Play each round and enter your scores manually.', 'Confirm that a round is complete to move to the next game.', 'The challenge order and progress are saved locally on your device, so you can return to the session later.'] },
      },
      {
        title: { ar: 'خمّون أكثر حيوية', en: 'A livelier Khamoon' },
        body: { ar: 'يرافقكم خمّون بست حركات وتعبيرات جديدة: تلويح، ورقصة، وتشجيع، ونعاس، ومفاجأة، وغمزة. استكشفوها في معرض الحركات داخل الإعدادات، مع مراعاة خيار تقليل الحركة لتبقى التجربة مريحة.', en: 'Khamoon joins the fun with six new animations and expressions: a wave, a dance, a cheer, sleepiness, surprise and a wink. Explore them in the animation gallery in Settings, with support for the reduced-motion option to keep the experience comfortable.' },
      },
      {
        title: { ar: 'هوية مجددة من أول لحظة', en: 'A refreshed identity from the first moment' },
        body: { ar: 'يربط الشعار والأيقونة الجديدان خمّون بهوية خمّن، وتستقبلكم مقدمة فيديو تضيف إلى البداية روحًا مرحة. يمكنكم تخطي المقدمة، أو إعادة مشاهدتها من الإعدادات متى أردتم.', en: 'A new logo and app icon bring Khamoon into KHAMEN’s visual identity, while a video intro gives each welcome a playful touch. Skip the intro or watch it again from Settings whenever you like.' },
      },
      {
        title: { ar: 'تفاصيل تجعل اللعب أسلس', en: 'Details that make play smoother' },
        body: { ar: 'تشمل التحسينات عرض الواجهة عند تكبير النص، وضبط التعامل مع حواف الشاشة، وتحديثات للتوافق مع أجهزة أندرويد؛ لتكون متابعة الألعاب والتنقل بينها أكثر راحة.', en: 'The update improves layouts with larger text, refines how the interface handles screen edges and includes Android compatibility updates, making games easier to follow and navigate.' },
      },
      {
        title: { ar: '19 لعبة وأداة… وتحدٍّ يجمعها', en: '19 games and tools, plus a challenge to connect them' },
        body: { ar: 'ما زالت ألعابكم وأدوات الجلسة معكم: 19 لعبة وأداة. ويضاف إليها وضع «تحدّي خمّون» لتنظيم عدة ألعاب في جلسة واحدة؛ فهو طريقة جديدة للجمع بينها، وليس لعبة بديلة عنها. اختاروا ما يناسب جمعتكم، ودعوا خمّون يرافق الجولة التالية. خمّن — ألعاب تجمعكم.', en: 'Your favourites are still here: 19 games and session tools. Khamoon Challenge adds a new way to organise several games into one session, rather than replacing them. Pick what suits your gathering and let Khamoon join the next round. KHAMEN — games that bring you together.' },
      },
    ],
  },
  {
    slug: 'studio-chairman-1-1-2', date: '2026-10-13', product: 'studio-chairman', kind: 'release',
    illustration: chairman, coverTitle: '1.1.2',
    illustrationAlt: { ar: 'مرشد Studio Chairman يحمل خطة الاستوديو', en: 'The Studio Chairman guide holding the studio plan' },
    title: { ar: 'Studio Chairman 1.1.2: أربع لغات واستوديو أكثر ترابطًا', en: 'Studio Chairman 1.1.2: four languages, a more connected studio' },
    summary: { ar: 'نظرة على تحديث 1.1.2: واجهة عربية، وهويات فنانين أكثر ثباتًا، وسجلات إيرادات واضحة، وخطة تجمع الإنتاج والأبحاث والتلفزيون والبث.', en: 'A look at update 1.1.2: an Arabic interface, more stable talent identities, clearer revenue records and a work plan connecting production, research, TV and streaming.' },
    sections: [
      {
        title: { ar: 'الاستوديو يتحدث أربع لغات', en: 'Your studio speaks four languages' },
        body: { ar: 'يضيف الإصدار 1.1.2 واجهة بالإنجليزية والعربية والإسبانية لأمريكا اللاتينية والبرتغالية البرازيلية، مع إمكانية اتباع لغة الجهاز. يشمل التوطين شاشات الإدارة والأخبار والأحداث والسجلات والمساعدة، وتدعم العربية اتجاه القراءة من اليمين إلى اليسار. يُحفظ اختيار الواجهة مستقلًا عن ملفات اللعب؛ فلا يغيّر لغة تصوير الفيلم أو أسماء الاستوديو والأعمال والشخصيات التي تكتبها بنفسك. لغات الواجهة الأربع إضافة منفصلة عن نظام لغات التصوير الموجود منذ 1.1.1.', en: 'Version 1.1.2 adds English, Arabic, Latin American Spanish and Brazilian Portuguese interfaces, with an option to follow the device language. Localization covers management screens, news, events, records and help, including right-to-left Arabic layouts. The preference is saved separately from game saves, so it does not change a film’s shooting language or the studio, production and character names you write yourself. These four interface languages are separate from the shooting-language system introduced in 1.1.1.' },
      },
      {
        title: { ar: 'وجوه تعرفها بعد كل حفظ', en: 'Familiar faces after every save' },
        body: { ar: 'يعالج التحديث فقدان بيانات جنس الفنانين عند تحميل الحفظ، ويحفظ مظهر الصورة وتفاصيلها حتى تبقى الوجوه أكثر ثباتًا بعد إعادة التشغيل أو تغيير الاسم والإحصاءات. تحتفظ ملفات الممثلات وتسميات الوكالة بالدور الصحيح، وتُحترم المظاهر المخصصة للرئيس والعائلة. أما البيانات القديمة التي لم تُحفظ أصلًا ولا يطابقها معرّف معروف، فلا تُستبدل بهوية تاريخية مخمّنة.', en: 'The update fixes missing talent gender in saved data and saves portrait appearance and detail seeds, keeping faces more stable after reloads or changes to names and statistics. Actress profiles and agency labels retain the correct role, while customised chairman and family appearances keep priority. Legacy information that was never saved and has no exact catalogue match is not replaced with an invented historical identity.' },
      },
      {
        title: { ar: 'إيرادات الأسبوع ليست حصيلة المسيرة', en: 'This week’s receipts are not lifetime totals' },
        body: { ar: 'يفصل التحديث ترتيب شباك التذاكر الأسبوعي عن إجمالي إيرادات الأفلام المحفوظة، ويعالج بقاء الأفلام المنتهية في الترتيب الأسبوعي بأرقام مشتقة من حصيلتها الكلية. يضيف أيضًا شاشة سنوية لأفلام اللاعب، تجمع الإيرادات السينمائية التي سُجّلت فعلًا في أسابيع العرض، مع ترتيب الأفلام وتفاصيل الأسابيع المؤرخة.', en: 'Weekly box-office charts are separated from cumulative saved-film totals. Completed films no longer remain on weekly charts with invented weekly revenue derived from their lifetime gross. A new annual view for player films groups theatrical receipts actually recorded during each calendar year, with rankings and dated weekly details.' },
        bullets: { ar: ['ابحث في سجلات الأفلام وصفِّها حسب الاستوديو والسنة المسجلة.', 'تميّز السجلات بين الإيراد السينمائي الإجمالي والربح المحفوظ، ولا تُعامل إصدارات البث وحدها كإيراد سينما.', 'يبدأ التسجيل السنوي مع هذا التحديث؛ الأسابيع القديمة المفقودة لا تُعاد بناؤها، وتظهر السجلات الجزئية بوضوح.'], en: ['Search and filter film records by studio and recorded year.', 'Records distinguish theatrical gross from saved profit and exclude digital-only releases from theatrical receipts.', 'Annual recording starts with this update. Missing earlier weeks are not reconstructed, and partial records are clearly identified.'] },
      },
      {
        title: { ar: 'أخبار قابلة للفتح وأرشيف يسهل الرجوع إليه', en: 'Readable reports and archives you can return to' },
        body: { ar: 'تفتح بطاقات الأخبار تقريرًا كاملًا بالتاريخ والتصنيف والمبلغ المذكور، مع زر للوصول إلى قسم الإدارة المناسب حين يكون معروفًا. قراءة التقرير لا تنفق المال ولا تنفّذ قرارًا ولا تقدّم الوقت. وتصبح متابعة الأعمال أسهل عبر أرشيف مسلسلات قابل للبحث، وسجلات مواسم تحتفظ بالتكاليف والإيرادات والجودة، ومكتبة مستقلة للشورت دراما.', en: 'News cards open a full report with its date, category and reported amount, plus a button to the relevant management section when one is known. Reading a report does not spend money, execute a decision or advance time. A searchable series archive, season records retaining costs, revenue and quality, and a dedicated short-drama library make past work easier to inspect.' },
      },
      {
        title: { ar: 'خطة واحدة للأعمال التي تتحرك معًا', en: 'One plan for work that moves together' },
        body: { ar: 'تجمع خطة العمل الإنتاج والأبحاث المؤقتة والبناء وحملات الجمهور وأعمال الترخيص وطلبات الشركات الفرعية النشطة. ويمكن تعيين موظفين موجودين لمسؤوليات تقارير الإنتاج والتلفزيون والبث، والرجوع إلى تقارير أسبوعية مؤرخة. هذه التعيينات لا تضيف رواتب ولا تمنح الموظف صلاحية إنفاق ميزانية تلقائيًا.', en: 'The work plan connects production, timed research, construction, audience campaigns, licensing construction and active subsidiary requests. Assign existing employees to production, TV and streaming reporting roles, and inspect dated weekly reports. Assignments add no extra salaries and do not authorise automatic budget spending.' },
        bullets: { ar: ['18 موقع تصوير ضمن ست بيئات، مع حجز المواقع الحصرية أثناء التصوير فقط وإتاحة الاستخدام المتزامن للمواقع المشتركة.', 'ستة مشاريع أبحاث مؤقتة ومدفوعة، وثلاث منشآت مرتبطة بالأبحاث يبدأ أثرها بعد اكتمال البناء.', 'روابط محفوظة بين الأفلام لأجزاء تالية وسابقة وأعمال مشتقة، مع حماية من الروابط الدائرية والتكرار.'], en: ['18 filming sites across six environments, reserving exclusive sites only during shooting and allowing concurrent shared-site use.', 'Six timed, paid research projects and three research-linked facilities whose effects begin after construction.', 'Saved sequel, prequel and spin-off relationships, with protection against cycles and repeated identities.'] },
      },
      {
        title: { ar: 'شبكة تلفزيون وحملات وقوالب جديدة', en: 'A TV network, campaigns and new poster presets' },
        body: { ar: 'يمكن توسيع قناتك إلى شبكة من ثلاث قنوات كحد أقصى، لكل منها اسم ولون وبرامج وفترات بث وسجلات خاصة، مع تكاليف تشغيل لكل قناة. وتتيح البرامج الأصلية المسماة مشاهدة لاحقة على منصتك بعد بث فعلي. أُضيفت أيضًا حملات جمهور مدفوعة مسبقًا لأربعة أو ثمانية أسابيع، وتسعة قوالب بوستر قابلة للتعديل، وثمانية إنجازات محفوظة لكل مسيرة.', en: 'Expand to a network of up to three TV channels, each with its own name, colour, programming, dayparts and records, with operating costs per channel. Named original programs can offer catch-up on your platform after an actual broadcast. The update also adds prepaid four- or eight-week audience campaigns, nine editable poster presets and eight achievements saved per career.' },
        bullets: { ar: ['أربع فئات جديدة للمسلسلات ترفع فئات التلفزيون إلى ثمانٍ إجمالًا.', 'طلبات دعم اختيارية للشركات الفرعية مرتبطة بأعمال الاستوديو.', 'بدايات تاريخية تجريبية في 1975 أو 2000 أو 2025؛ ليست إعادة بناء كاملة لاقتصاد تلك السنوات.'], en: ['Four new series award categories bring the TV total to eight.', 'Optional subsidiary support requests connected to studio work.', 'Experimental starts in 1975, 2000 or 2025, rather than a fully reconstructed historical economy.'] },
      },
      {
        title: { ar: 'قرارات أوضح وحفظ أكثر اتساقًا', en: 'Clearer decisions and more consistent saves' },
        body: { ar: 'تراجع شاشات الإنشاء المفهوم والطاقم والتكاليف قبل تأكيد الدفع، وتعيد التحقق من المال والتوافر والالتزامات عند التنفيذ. يمكن طلب مرشح من الوكالة لدور محدد في مسودة فيلم أو مسلسل، مع الحفاظ على بقية الاختيارات. وتشمل الإصلاحات منع تكرار إيراد الفيلم ومكافآت البحث ومكافآت توقيع العقود، وحماية سجلات الخزنة والعلاقات بين الأعمال من الإدخالات المتكررة.', en: 'Creation reviews show concepts, cast and costs before payment, then recheck funds, availability and commitments at confirmation. Request an agency candidate for one supported role in a film or series draft while keeping other choices. Fixes guard against repeated film payments, research rewards and signing bonuses, and protect vault records and production relationships from duplicate entries.' },
      },
    ],
  },
  {
    slug: 'meet-khamoon', date: '2026-10-02', product: 'khamen', kind: 'character',
    illustration: khamoon, illustrationFit: 'contain', coverTitle: 'HI!',
    illustrationAlt: { ar: 'خمّون، الشخصية التركوازية بخصلة صفراء وشارة K', en: 'Khamoon, the turquoise character with a yellow tuft and K badge' },
    title: { ar: 'تعرّفوا على خمّون: وجه صغير لضحكة جماعية', en: 'Meet Khamoon: a little face for shared laughter' },
    summary: { ar: 'تركوازي، مبتسم، ومستعد للجولة التالية. تعرّفوا على رفيق «خمّن» الذي يرحّب بكم، ويساعدكم على فهم اللعبة، ويشارككم فرحة الفوز.', en: 'Turquoise, smiling and ready for the next round. Meet KHAMEN’s companion, here to welcome you, explain the game and share in a win.' },
    sections: [
      {
        title: { ar: 'أهلًا، أنا خمّون!', en: 'Hello, I’m Khamoon!' },
        body: { ar: 'كل جلسة تبدأ بسؤال: ماذا نلعب؟ من هذه اللحظة يأتي دور خمّون، رفيق «خمّن» الذي يمنح الترحيب والمساعدة وجهًا مألوفًا. صُمّم ليكون ودودًا وخفيف الحضور، قريبًا من روح «ألعاب تجمعكم»: نتفق على لعبة، نفهم قواعدها، ثم نترك مساحة للضحك والمنافسة بين الأصدقاء.', en: 'Every gathering starts with a question: what shall we play? That is where Khamoon comes in. KHAMEN’s companion gives welcomes and help a familiar face. Friendly and light on his feet, he carries the spirit of “Games that bring you together”: pick a game, learn the rules, and make room for laughter and friendly competition.' },
      },
      {
        title: { ar: 'من ألوان خمّن إلى شخصية لها ملامح', en: 'From KHAMEN’s colours to a familiar face' },
        body: { ar: 'جسم مستدير باللون التركوازي، وخصلة صفراء، وابتسامة واضحة. يستلهم خمّون شكله من الحركة الدائرية في هوية خمّن، وتحمل شارة صدره حرف K داخل حلقة صفراء تربطه بالشعار. هذه التفاصيل تجعل التعرف عليه سهلًا، سواء ظهر في الترحيب أو بحجم صغير بجوار المساعدة.', en: 'A round turquoise body, a yellow tuft and a clear smile. Khamoon takes inspiration from the circular movement in KHAMEN’s identity. A K badge inside a yellow ring ties him to the logo. Those details make him recognisable both in a welcome and as a small face beside the help controls.' },
      },
      {
        title: { ar: 'خمسة تعابير، كلّ واحد في وقته', en: 'Five expressions, each with a purpose' },
        body: { ar: 'لا يبقى خمّون على تعبير واحد طوال الجلسة؛ له خمس حالات ترافق اللحظات المناسبة في التجربة:', en: 'Khamoon has five states to accompany different moments in the experience:' },
        bullets: { ar: ['الترحيب: بداية ودودة قبل الدخول إلى الألعاب.', 'الشرح: رفيق لخطوات المساعدة والأمثلة.', 'التفكير: تعبير الفضول والاستعداد للاختيار.', 'الاحتفال: مشاركة فرحة النتيجة في الشاشات الداعمة.', 'إعادة المحاولة: تشجيع لطيف لجولة أخرى.'], en: ['Welcome: a friendly beginning before the games.', 'Explain: a companion to help steps and examples.', 'Think: a curious expression, ready to choose.', 'Celebrate: sharing a result on supported screens.', 'Try again: a little encouragement for another round.'] },
      },
      {
        title: { ar: 'مساعدة وقت الحاجة', en: 'Help when you need it' },
        body: { ar: 'عندما تحتاجون إلى القواعد، تقودكم شخصية خمّون إلى شرح مرتبط باللعبة ومرحلتها، مع أمثلة بالعربية والإنجليزية. تظهر إشارة صغيرة للمساعدة عند أول استخدام، ويمكنكم فتحها بأنفسكم دون شرح إجباري. حركاته قصيرة وتراعي تقليل الحركة، ويظهر في مواضع محددة بدل البقاء عائمًا فوق الجولة.', en: 'When you need the rules, Khamoon leads you to guidance for the game and its current phase, with Arabic and English examples. A small first-use hint points out help, which you can open yourself without a compulsory tutorial. His short animations respect reduced-motion settings, and he appears in designated places rather than floating over a round.' },
      },
      {
        title: { ar: '«ماذا نلعب؟» خمّون عنده اقتراح', en: '“What shall we play?” Khamoon has a suggestion' },
        body: { ar: 'اختاروا عدد اللاعبين والوقت المتاح، وسيقترح خمّون لعبة مع سبب مختصر لملاءمتها. وإن لم تناسب مزاج الجلسة، اطلبوا اقتراحًا آخر. يعتمد الترشيح على قواعد محلية داخل التطبيق، وليس محادثة ذكية أو شخصية تتعلم من بياناتكم؛ أنتم من يختار كيف تبدأ الجلسة.', en: 'Choose your player count and available time, and Khamoon suggests a game with a short reason for the match. If it does not suit the mood, ask for another. These suggestions use local rules within the app, not an AI chat or a character learning from your data. You decide how the gathering begins.' },
      },
      {
        title: { ar: 'جزء من حكاية خمّن الجديدة', en: 'Part of KHAMEN’s next chapter' },
        body: { ar: 'خمّون جزء من تطوير هوية خمّن وتجربتها الذي نستعرضه مع الإصدار 1.7.0. يمكنكم قراءة خبر التحديث المرتبط أدناه للتعرّف على الكلمة الممنوعة ووضع «جلستنا» وبقية الإضافات وحالة الإصدار. أما هنا، فالتعارف الأول بسيط: هذا خمّون، ووجوده يبدأ من فكرة أن اللعب أجمل معًا.', en: 'Khamoon is part of the identity and experience changes previewed with KHAMEN 1.7.0. Read the linked update story below for Forbidden Words, local sessions, the other additions and the release status. For now, the introduction is simple: this is Khamoon, built around the idea that games are better together.' },
      },
    ],
  },
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
  ar: { title: 'أخبار سطر', intro: 'ما الجديد في الاستوديو، والألعاب والتطبيقات التي نصنعها.', latest: 'آخر الأخبار', all: 'كل الأخبار', read: 'اقرأ الخبر', empty: 'لا توجد أخبار منشورة هنا بعد. يمكنك متابعة آخر المستجدات في جميع الأخبار.', product: 'أخبار المنتج', related: 'اقرأ أيضًا', release: 'تحديث', launch: 'إطلاق', guide: 'دليل اللعب', studio: 'من الاستوديو', character: 'تعرّف على الشخصية' },
  en: { title: 'SATER news', intro: 'The latest from the studio, and the games and apps we make.', latest: 'Latest news', all: 'All news', read: 'Read story', empty: 'No stories here yet. Explore all news for the latest from the studio.', product: 'Product news', related: 'Read next', release: 'Update', launch: 'Launch', guide: 'Play guide', studio: 'From the studio', character: 'Meet the character' },
};
export const topics = [
  { slug: 'studio', title: { ar: 'الاستوديو', en: 'Studio' } },
  { slug: 'apps', title: { ar: 'التطبيقات', en: 'Apps' } },
  { slug: 'games', title: { ar: 'الألعاب', en: 'Games' } },
  ...[...tools, ...games].map(p => ({ slug: p.slug, title: { ar: p.name, en: p.name } })),
];
export function newsFor(topic?: string) {
  return news.filter(n => !topic || (topic === 'studio' ? !n.product : topic === 'games' ? [...games.map(p => p.slug), 'khamen'].includes(n.product ?? '') : topic === 'apps' ? tools.some(p => p.slug === n.product) : n.product === topic)).sort((a, b) => b.date.localeCompare(a.date));
}
export function newsDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-JO' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}
