import type { NewsArticle } from "./news";
import { findTheSpy, miniStoreUrl } from "./catalog";
import miniCover from "~/assets/brand/sater-mini-launch.webp";

export const miniLaunch: NewsArticle[] = [
  {
    slug: "find-the-spy-on-google-play", date: "2026-11-28", kind: "launch", product: findTheSpy.slug,
    title: { ar: "«برا السالفة» متاحة الآن على Google Play", en: "Find the Spy is now on Google Play" },
    summary: {
      ar: "كل الجلسة تعرف الكلمة إلا لاعبًا واحدًا. مرّروا الهاتف وابدؤوا جولة «برا السالفة»، أول ألعاب SATER mini المستقلة على أندرويد.",
      en: "Everyone at the table knows the word except one player. Pass the phone around and play Find the Spy, the first standalone SATER mini game on Android.",
    },
    illustration: findTheSpy.icon, illustrationFit: "contain", coverTitle: "Find the Spy",
    illustrationAlt: { ar: "شعار برا السالفة، عدسة صفراء بداخلها قبعة ونظارة", en: "Find the Spy’s yellow magnifying glass, hat and sunglasses" },
    readNext: "introducing-sater-mini",
    sections: [
      { title: { ar: "هل عرفت الكلمة أم عرفت كيف تجاري الباقين؟", en: "Know the word, or just know your friends?" },
        body: { ar: "تبدأ الجولة على هاتف واحد. يعرف اللاعبون الكلمة سرًّا، ويظلّ أحدهم برا السالفة. في الجلسة، قد تدلّ إجابة واثقة على أن صاحبها يعرف الكلمة، أو على أنه أحسن الإصغاء إلى من سبقه. مهمّتكم أن تكتشفوا الفرق.", en: "A round starts on one phone. The word is shared in secret, leaving one person out of the loop. A confident answer might come from someone who knows the word, or from someone who listened carefully to the player before them. Can your group tell the difference?" } },
      { title: { ar: "من «خمّن» إلى تطبيق خاص باللعبة", en: "From KHAMEN to its own app" },
        body: { ar: "لمن كانت «برا السالفة» اختياره المعتاد في جلسات «خمّن»، صار لها الآن تطبيق تفتحه مباشرة عند اجتماعكم. ابحثوا عن العدسة الصفراء والقبعة السوداء باسم Find the Spy في متجر Google Play.", en: "If Find the Spy is the game your group comes back to in KHAMEN, you can now open it directly as its own app. Look for the yellow magnifying glass and black hat on Google Play." } },
    ],
    actions: [{href:findTheSpy.storeUrl!, label:{ar:"نزّل برا السالفة من Google Play",en:"Get Find the Spy on Google Play"}}, {href:"/find-the-spy", label:{ar:"صفحة اللعبة",en:"Game details"}}],
  },
  {
    slug: "introducing-sater-mini", date: "2026-11-28", kind: "studio",
    title: { ar: "نطلق SATER mini لألعاب الجلسات المستقلة", en: "Introducing SATER mini, our home for standalone party games" },
    summary: { ar: "من جلسات «خمّن» جاءت فكرة SATER mini. نمنح كل لعبة تطبيقًا باسمها وأيقونتها، حتى تستطيع مجموعتكم الوصول إلى لعبتها المفضلة مباشرة. البداية مع «برا السالفة».", en: "SATER mini grew out of the games people play together in KHAMEN. Each game gets its own app, name and icon so your group can go straight to a favourite. Find the Spy opens the collection." },
    illustration:miniCover, illustrationFit:"landscape", coverTitle:"SATER mini",
    illustrationAlt: { ar:"إعلان SATER mini بعلامة سطر على خلفية خضراء",en:"SATER mini announcement with the SATER mark on deep green" },
    readNext:"find-the-spy-on-google-play",
    sections:[
      {title:{ar:"لماذا تطبيق مستقل؟",en:"Why a standalone app?"},
       body:{ar:"تخيّل جلسة يبدأها أحدهم بعبارة «نلعب برا السالفة؟». اختيار اللعبة حصل أصلًا. في SATER mini نأخذ تلك اللحظة نقطة بداية، فيحمّل اللاعب اللعبة التي جاء من أجلها ويفتحها من شاشة هاتفه في المرة التالية.",en:"Imagine someone at the table asking, “Shall we play Find the Spy?” Your group has already chosen its game. SATER mini starts there. Download that game once and open it from your phone the next time everyone gets together."}},
      {title:{ar:"أين تجد ألعاب المجموعة؟",en:"Where to find the collection"},
       body:{ar:"لـSATER mini صفحة خاصة على Google Play تجمع إصداراتها. ستجدون فيها «برا السالفة»، ويمكنكم العودة إلى الصفحة نفسها لاكتشاف ما ينضم إليها. ويظل «خمّن» خيار الجلسات التي تحبّ التنقّل بين أكثر من لعبة.",en:"SATER mini has a dedicated developer page on Google Play. You’ll find Find the Spy there, and that’s where future releases will appear. KHAMEN is still the place to go when your group wants to switch between games."}},
    ],
    actions:[{href:miniStoreUrl,label:{ar:"تصفّح SATER mini على Google Play",en:"Browse SATER mini on Google Play"}},{href:"/sater-mini",label:{ar:"تعرّف على المجموعة",en:"Explore the collection"}}],
  },
];
