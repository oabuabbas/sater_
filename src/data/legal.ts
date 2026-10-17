import original from './legal.json';

export interface LegalBlock { t: 'h' | 'p' | 'ul'; v: string | string[] }
export interface LegalDocument { title: string; app: string; blocks: LegalBlock[]; updated?: string; ar?: { title: string; blocks: LegalBlock[]; updated?: string } }
const p = (v: string): LegalBlock => ({ t: 'p', v });
const h = (v: string): LegalBlock => ({ t: 'h', v });
const ul = (...v: string[]): LegalBlock => ({ t: 'ul', v });
const updated = 'Last Updated: October 14, 2026';
const contact = 'Questions or privacy requests: sater.studios@gmail.com. If you contact us, we receive the information you choose to include in your message and use it to respond to your request.';
const google = 'Google Privacy Policy: https://policies.google.com/privacy — Information from partner apps: https://policies.google.com/technologies/partner-sites';

// Preserve existing terms except where the product implementation contradicts
// an old factual statement. These changes are not a legal-compliance certification.
function amend(key: keyof typeof original, replacements: Record<string, string>, extra: LegalBlock[] = []): LegalDocument {
  const source = original[key];
  return { ...source, blocks: source.blocks.map(block => ({
    t: block.t as LegalBlock['t'],
    v: Array.isArray(block.v) ? block.v.map(text => replacements[text] ?? text) : replacements[block.v] ?? block.v,
  })).concat(extra) };
}

const legal: Record<string, LegalDocument> = {
  'tam-privacy': amend('tam-privacy', {
    'Effective Date: January 10, 2026': updated,
    'No PII Collection: We do not collect, store, or transmit Personal Identifiable Information (PII) to external servers.': 'No developer-operated cloud account: TAM keeps tasks, notes, recordings and progression locally. We do not receive this content through the app. User-initiated exports, support messages and Google Play transactions are described below.',
    'Local Storage: Your tasks, XP, levels, and RPG stats (FOC, SOL, NRG) are stored exclusively on your device\'s local database.': 'Local storage: tasks, notes, XP, RPG statistics and voice recordings are kept in app storage on your device. Device or operating-system backup settings may separately apply.',
    'TAM requests storage access for the sole purpose of:': 'TAM can create user-requested exports:',
    'SaterPdfExporter: Allowing you to generate and save productivity reports as PDF files directly to your device.': 'PDF reports and backup codes: exports may contain your tasks, notes and statistics. You decide where to save or share them. Backup codes use encoding, not encryption; treat them as private copies of your data.',
    'No Analytics/Ads: This initial version of TAM does not use third-party advertising or tracking SDKs.': 'TAM does not use an advertising or remote analytics SDK. Google Play Billing is used for optional support purchases when offered.',
    'For any inquiries regarding your privacy or the SATER_ ecosystem, contact us at: sater.studios@gmail.com': contact,
  }, [h('8. Purchases, deletion and security'), p('Optional support purchases are processed by Google Play. The app receives transaction and product-status information to complete the purchase; it does not receive your card details. Google handles payment information under its own policy: https://policies.google.com/privacy'), p('You can delete content using available app controls or clear app storage through Android. Uninstalling may remove local content. We cannot restore copies we do not hold; exported or operating-system backups are managed separately by you. Local recordings and backup codes are not claimed to be independently encrypted. Protect your device and any copies you make.')]),
  'tam-terms': amend('tam-terms', {
    'Last Updated: January 11, 2026': updated,
    'Voice Vault: Encrypted local storage for audio logs and "Soul Echoes".': 'Voice Vault: local storage for audio logs and "Soul Echoes"; no independent encryption of recordings is promised.',
    'Ownership: All content, including but not limited to the SATER brand, the TAM logo, code, graphics, and ambient sounds, is the exclusive property of Omar Abu Abbass and SATER Studio.': 'Ownership: TAM, its brand and original assets belong to SATER Studio and its rights holders. Third-party libraries, fonts and licensed assets remain subject to their respective licences.',
    'Current Phase: TAM is currently launched as a Free-to-Play Early Access application.': 'TAM offers productivity features and may offer optional support purchases through Google Play. The app shows current availability and the store-supplied price before purchase.',
    'Decompile, reverse engineer, or attempt to extract the source code of TAM.': 'Decompile, reverse engineer, or extract the source code except where applicable law expressly permits it.',
    'For questions regarding these Terms, please contact SATER_ via our official channels.': 'For questions regarding these Terms, contact sater.studios@gmail.com.',
  }, [h('11. Purchases and statutory rights'), p('Google Play handles payment and the applicable refund process: https://support.google.com/googleplay/answer/2479637. Optional support purchases do not create an investment, ownership interest or entitlement to future features. Nothing in these Terms excludes rights or liability that cannot be excluded under applicable law.')]),
  'khamen-privacy': { title: 'Privacy Policy', app: 'For Application: KHAMEN', blocks: [
    p(updated), p('KHAMEN is published by SATER. This policy describes local game information, advertising, optional purchases where available, and messages you send to us.'),
    h('1. Game and session information'), p('Player names, session rosters and manually entered points, favourites, recent games, settings, custom question packs and reward progress are stored locally on your device. They are not uploaded to a SATER game server. Saved names and points may remain after the app closes; this is not limited to the duration of a round. There is no user account, cross-phone session synchronization or developer-operated cloud save.'),
    h('2. Device sensors'), p('Motion and orientation readings are used for tilt-based gameplay on your device. These gameplay sensor readings are not sent to SATER. The Forbidden Words game relies on players judging answers; it does not use microphone recording or speech recognition.'),
    h('3. Advertising and third-party data'), p('KHAMEN uses Google AdMob. Google may process advertising identifiers, IP addresses, approximate location derived from the network, device/app information, diagnostics and ad interactions to deliver, secure and measure advertising. SATER receives aggregate advertising reports rather than your local player names, scores or question packs.'), p(google),
    h('4. Advertising choices'), p('Google’s User Messaging Platform manages consent where required. Available privacy choices can be reopened from the app’s settings when Google requires that entry point. Advertising availability and personalization depend on consent, region and SDK settings; refusing personalization does not guarantee that a particular ad will be available. Android advertising-ID controls provide additional choices.'), p('Optional rewarded videos may grant a temporary period without external ads after the required completed views. Internal suggestions for other KHAMEN games remain. Reward progress and expiry are saved locally. The offer shown in the app describes the required views and duration.'),
    h('5. Purchases where available'), p('An ad-removal purchase may be offered through Google Play when enabled for your version and region. Google processes payment; we do not receive card details. The app may store a signed purchase receipt, purchase token and entitlement information locally to verify and restore the purchase. A pending or cancelled transaction does not grant an entitlement.'),
    h('6. Retention, deletion and security'), p('Use available session and custom-content controls to remove the relevant local information, or clear app storage through Android. Uninstalling may remove local data; device-backup settings may separately apply. SATER cannot recover local records it has not received. Local storage is not described as an independently encrypted cloud vault, and no storage method is perfectly secure.'),
    h('7. Children and shared play'), p('The service is not directed at children under 13. We do not knowingly request children’s personal information. Players may enter personal names or questions; enter only information you are comfortable keeping on the device and showing to the group. A family content pack is not a guarantee that every question suits every age. Contact us with a privacy concern.'),
    h('8. Privacy requests and provider retention'), p('You can control local game content on your device. For data processed by Google, its privacy controls and retention policies apply. Contact us about information you have sent directly to SATER or for help with privacy requests. Applicable privacy rights depend on your location; nothing here limits those rights.'),
    h('9. Policy updates and contact'), p('We update this policy when the app’s data handling changes and revise the date above. Material changes will be communicated where required. Availability of a feature or purchase depends on the version you use.'), p(contact),
  ] },
  'khamen-terms': amend('khamen-terms', {
    'Last Updated: January 22, 2026': updated,
    'Local Processing: Game data (such as player names and scores) is processed locally on your device for the duration of the session.': 'Local information: player names, saved session points, settings and custom content may remain on your device between sessions. Session scores are manual; there is no cross-phone synchronization or automatic combined scoring of every game.',
    'Ownership: All content, including but not limited to the SATER brand, the KHAMEN logo, source code, game mechanics, UI design, and graphics, is the exclusive property of SATER.': 'Ownership: KHAMEN, Khamoon and original game assets belong to SATER or its rights holders. Third-party libraries, fonts and licensed assets retain their respective licences.',
    'Decompile, reverse engineer, or attempt to extract the source code of KHAMEN.': 'Decompile, reverse engineer, or extract the source code except where applicable law expressly permits it.',
    'For questions regarding these Terms, please contact SATER via our official channels or at our developer email.': 'For questions regarding these Terms, contact sater.studios@gmail.com.',
  }, [h('11. Optional rewards and purchases'), p('Rewarded-video offers explain their conditions before viewing. Only completed eligible views count; availability depends on the ad provider. Temporary ad-free periods use the displayed expiry and do not remove internal game suggestions. Where offered, ad removal is a one-time Google Play purchase, not a subscription. Store availability and prices are shown before payment, and Google Play’s refund process applies: https://support.google.com/googleplay/answer/2479637.'), h('12. Comfort, local saves and consumer rights'), p('Skip questions or challenges that make any participant uncomfortable. Do not use custom content to expose private information, pressure players or encourage unsafe behaviour. Protect local content and your device; clearing data can remove it. Nothing in these Terms excludes mandatory consumer rights or liability that cannot lawfully be excluded.')]),
  'zill-privacy': {
  "title": "Privacy Policy — ZILL",
  "updated": "18 October 2026",
  "blocks": [
    {
      "t": "p",
      "v": "ZILL is published by SATER Studio in Amman, Jordan. This policy describes the Android app's location features, local planning information, online services, advertising and user-requested exports. No account is required. This policy update describes version 1.1.0 and later. Some controls and SDK initialization behavior differ in older releases; update the app to use the controls described here."
    },
    {
      "t": "h",
      "v": "1. Location and on-device calculations"
    },
    {
      "t": "p",
      "v": "With your permission, ZILL reads your device location for sun-position and journey calculations. Driver Mode can receive location updates while that feature is active in the foreground; the app does not request Android background-location permission. Compass readings are used on your device. You can choose a location and heading manually instead. A manual location may still be sent to the place-name service as described below."
    },
    {
      "t": "h",
      "v": "2. Information saved on your device"
    },
    {
      "t": "p",
      "v": "ZILL saves your last selected or measured coordinates and timestamp, up to five recent routes, optional home/work commute locations and times, and preferences such as language, sound, heading and vehicle settings. A launch counter supports the advertising frequency limits. This information is held in app preferences, without a claim of separate app-level encryption. SATER does not operate a server receiving your complete saved trip history."
    },
    {
      "t": "h",
      "v": "3. Maps and place search"
    },
    {
      "t": "p",
      "v": "Submitting a place search sends its text to the configured geocoding provider. Looking up a place name sends the selected or current coordinates. The default provider is OpenStreetMap Nominatim; you can change it in Settings. These requests include normal network information such as IP address, app identification and language. Map views request tiles from OpenStreetMap. Recently viewed tiles are cached on your device with HTTP freshness rules and a 100 MB size target checked when the cache opens; the cache can temporarily exceed that target and can be cleared in Android app storage settings. Tile coordinates reveal the map area being viewed to the provider. Manual selection does not make these online requests private or offline."
    },
    {
      "t": "h",
      "v": "4. Advertising and consent"
    },
    {
      "t": "p",
      "v": "ZILL uses Google AdMob and Google's User Messaging Platform. The app checks whether ads may be requested before initializing the advertising SDK and requesting ads. Where required, consent and privacy choices are presented by Google. You can reopen Advertising privacy options in Settings when Google requires that option."
    },
    {
      "t": "p",
      "v": "Google's advertising SDK may collect and share IP addresses (which can indicate approximate location), advertising/device identifiers, app and ad interactions, and diagnostic information for advertising, measurement and fraud prevention. SATER receives aggregate advertising reports. The app does not supply your saved route list or precise GPS coordinates as an AdRequest location field. This is not a promise that third-party advertising involves no tracking. Android advertising-ID controls offer additional choices."
    },
    {
      "t": "h",
      "v": "5. Trip cards, PDF and sharing"
    },
    {
      "t": "p",
      "v": "Trip cards, QR codes, barcodes, copied text and PDF exports can contain your selected locations, travel times, seat and shade estimates. QR data is readable, not encrypted or a signed travel credential. When you save or share an export, you choose the destination; that service or recipient handles the copy under its own terms. Protect exported and copied information."
    },
    {
      "t": "h",
      "v": "6. Deletion, retention and backups"
    },
    {
      "t": "p",
      "v": "Settings > Delete saved planning data removes the last stored location, recent routes and commute profile from ZILL. It does not reset Google's advertising consent or delete copies already exported or held by providers. You can also clear app storage or uninstall through Android. This Android release excludes app data from automatic Android cloud backup and device transfer. Exported files and any copies you make are managed separately. Online providers control their own retention and deletion processes under their policies."
    },
    {
      "t": "h",
      "v": "7. Security and service providers"
    },
    {
      "t": "p",
      "v": "The app's configured place-service URLs require HTTPS, and map requests use HTTPS. Providers apply their own security measures; no device or service is perfectly secure. The following links explain the providers' practices. If you change the geocoder, review that provider's policy as well."
    },
    {
      "t": "h",
      "v": "8. Children, requests and changes"
    },
    {
      "t": "p",
      "v": "ZILL is a general travel utility and does not knowingly request personal information from children under 13. Contact SATER about privacy requests or information you have sent directly to us. Support emails contain the information you choose to include and are used to respond. We update this policy and its date when practices change; applicable privacy rights remain unaffected."
    },
    {
      "t": "p",
      "v": "Google Privacy Policy: https://policies.google.com/privacy"
    },
    {
      "t": "p",
      "v": "Google partner apps and sites: https://policies.google.com/technologies/partner-sites"
    },
    {
      "t": "p",
      "v": "OpenStreetMap Foundation Privacy Policy: https://osmfoundation.org/wiki/Privacy_Policy"
    },
    {
      "t": "p",
      "v": "sater.studios@gmail.com"
    }
  ],
  "app": "For Application: ZILL",
  "ar": {
    "title": "سياسة الخصوصية — ZILL",
    "updated": "١٨ أكتوبر ٢٠٢٦",
    "blocks": [
      {
        "t": "p",
        "v": "تُنشر ZILL بواسطة استوديو SATER في عمّان، الأردن. تشرح هذه السياسة وظائف الموقع والبيانات المحلية والخدمات المتصلة والإعلانات والتصدير الذي يطلبه المستخدم في تطبيق Android. لا يتطلب التطبيق إنشاء حساب. يصف هذا التحديث الإصدار 1.1.0 وما بعده. تختلف بعض أدوات التحكم وسلوك تهيئة المكتبات في الإصدارات الأقدم؛ حدّث التطبيق للاستفادة من الأدوات الموضحة هنا."
      },
      {
        "t": "h",
        "v": "١. الموقع والحسابات على الجهاز"
      },
      {
        "t": "p",
        "v": "بإذنك، يستخدم التطبيق موقع الجهاز لحساب موضع الشمس وتقديرات الرحلة. يمكن لوضع القيادة تلقي تحديثات الموقع أثناء نشاطه في الواجهة؛ ولا يطلب التطبيق إذن موقع Android في الخلفية. تُستخدم قراءات البوصلة على الجهاز، ويمكنك إدخال الموقع والاتجاه يدوياً. قد يُرسل الموقع اليدوي إلى خدمة أسماء الأماكن كما هو موضح أدناه."
      },
      {
        "t": "h",
        "v": "٢. المعلومات المحفوظة محلياً"
      },
      {
        "t": "p",
        "v": "يحفظ ZILL آخر إحداثيات مختارة أو مقاسة مع توقيتها، وحتى خمس رحلات حديثة، وموقعي المنزل والعمل ومواعيد الدوام عند إعدادها، وتفضيلات اللغة والصوت والاتجاه والمركبة. يدعم عدّاد مرات التشغيل حدود تكرار الإعلانات. تُحفظ هذه المعلومات في تفضيلات التطبيق، دون ادعاء تشفير مستقل لها. لا يشغّل SATER خادماً يستقبل سجل رحلاتك المحفوظ كاملاً."
      },
      {
        "t": "h",
        "v": "٣. الخرائط والبحث عن الأماكن"
      },
      {
        "t": "p",
        "v": "يرسل البحث الذي تقدمه نصه إلى مزود البحث المحدد. وتُرسل الإحداثيات الحالية أو المختارة عند طلب اسم المكان. المزود الافتراضي هو Nominatim التابع لـ OpenStreetMap ويمكن تغييره في الإعدادات. تتضمن الطلبات معلومات الشبكة المعتادة مثل عنوان IP وتعريف التطبيق واللغة. تُطلب صور الخريطة من OpenStreetMap. تُحفظ الصور المعروضة مؤقتاً على الجهاز وفق صلاحية HTTP وبحجم مستهدف 100 ميغابايت يُفحص عند فتح الذاكرة المؤقتة؛ قد يتجاوزه التخزين مؤقتاً ويمكن مسحه من إعدادات تخزين التطبيق في Android. تكشف إحداثيات الصور عن منطقة الخريطة المعروضة للمزود. الاختيار اليدوي لا يلغي هذه الطلبات الخارجية ولا يجعل الخريطة غير متصلة."
      },
      {
        "t": "h",
        "v": "٤. الإعلانات والموافقة"
      },
      {
        "t": "p",
        "v": "يستخدم ZILL إعلانات Google AdMob ومنصة Google لإدارة الموافقة. يتحقق التطبيق من السماح بطلب الإعلانات قبل تهيئة مكتبتها وطلبها. تعرض Google الموافقة وخيارات الخصوصية حيث تُطلب، ويمكن فتح خيارات خصوصية الإعلانات من الإعدادات عندما تفرض Google إتاحتها."
      },
      {
        "t": "p",
        "v": "قد تجمع مكتبة الإعلانات وتشارك عناوين IP التي قد تدل على موقع تقريبي، ومعرّفات الإعلانات أو الأجهزة، والتفاعل مع التطبيق والإعلانات، وبيانات التشخيص للإعلان والقياس ومنع الاحتيال. يتلقى SATER تقارير إعلانية مجمعة. لا يمرر التطبيق قائمة رحلاتك المحفوظة أو إحداثيات GPS الدقيقة كحقل موقع في AdRequest. هذا لا يعني أن إعلانات الجهات الخارجية خالية من التتبع. توفر إعدادات معرّف الإعلان في Android خيارات إضافية."
      },
      {
        "t": "h",
        "v": "٥. بطاقات الرحلة وPDF والمشاركة"
      },
      {
        "t": "p",
        "v": "قد تتضمن بطاقات الرحلة ورموز QR والباركود والنص المنسوخ وملفات PDF المواقع والتوقيتات والمقعد وتقديرات الظل. بيانات QR قابلة للقراءة وليست مشفرة أو وثيقة سفر موقعة. تختار جهة حفظ الملف أو مشاركته، وتخضع النسخة بعد ذلك لممارسات الجهة المستقبلة. احمِ الملفات المصدرة والمعلومات المنسوخة."
      },
      {
        "t": "h",
        "v": "٦. الحذف والاحتفاظ والنسخ الاحتياطي"
      },
      {
        "t": "p",
        "v": "يحذف خيار الإعدادات > حذف بيانات التخطيط المحفوظة آخر موقع والرحلات الحديثة وملف الدوام من ZILL. لا يعيد ضبط موافقة Google الإعلانية ولا يمحو النسخ المصدرة أو سجلات المزودين. يمكنك أيضاً مسح تخزين التطبيق أو إزالته من Android. يستثني هذا الإصدار بيانات التطبيق من النسخ السحابي ونقل الجهاز التلقائيين في Android. تُدار الملفات المصدرة ونسخك الأخرى منفصلةً. يحدد المزودون الخارجيون مدد الاحتفاظ وإجراءات الحذف وفق سياساتهم."
      },
      {
        "t": "h",
        "v": "٧. الأمان والمزودون"
      },
      {
        "t": "p",
        "v": "يشترط التطبيق HTTPS لعناوين خدمة البحث، وتستخدم طلبات الخريطة HTTPS. يطبق المزودون إجراءات الأمان الخاصة بهم؛ ولا يوجد جهاز أو خدمة آمنة بصورة مطلقة. تشرح الروابط أدناه ممارساتهم، وعليك مراجعة سياسة أي مزود بحث بديل تختاره."
      },
      {
        "t": "h",
        "v": "٨. الأطفال والطلبات والتغييرات"
      },
      {
        "t": "p",
        "v": "ZILL أداة سفر عامة ولا يطلب عمداً معلومات شخصية من أطفال دون ١٣ عاماً. يمكنك التواصل مع SATER لطلبات الخصوصية أو بشأن معلومات أرسلتها إلينا مباشرة. تحتوي رسائل الدعم على المعلومات التي تختار إرسالها وتُستخدم للرد عليك. نحدث هذه السياسة وتاريخها عندما تتغير الممارسات، دون الانتقاص من حقوق الخصوصية المقررة لك."
      },
      {
        "t": "p",
        "v": "Google Privacy Policy: https://policies.google.com/privacy"
      },
      {
        "t": "p",
        "v": "Google partner apps and sites: https://policies.google.com/technologies/partner-sites"
      },
      {
        "t": "p",
        "v": "OpenStreetMap Foundation Privacy Policy: https://osmfoundation.org/wiki/Privacy_Policy"
      },
      {
        "t": "p",
        "v": "sater.studios@gmail.com"
      }
    ]
  }
},
  'zill-terms': {
  "title": "Terms of Use — ZILL",
  "updated": "18 October 2026",
  "blocks": [
    {
      "t": "p",
      "v": "These terms apply to ZILL, published by SATER Studio. By using the app you agree to these terms. Mandatory consumer rights and uses permitted by law or third-party licences remain unaffected."
    },
    {
      "t": "h",
      "v": "1. Planning estimates"
    },
    {
      "t": "p",
      "v": "ZILL is a solar planning aid, not turn-by-turn navigation or an emergency, medical or vehicle-control system. Routes, distances and times are estimates between selected coordinates rather than actual road routing or traffic predictions. Seat-shade suggestions use modelled sunlight exposure over driving time. Sun height in the planner header is a mid-trip estimate; the simulator shows its selected time."
    },
    {
      "t": "h",
      "v": "2. Shade, glare and parking"
    },
    {
      "t": "p",
      "v": "Results depend on the selected time and location, heading, sensor accuracy and model assumptions. Buildings, trees, terrain, weather, windows and vehicle geometry may change actual conditions. Parking previews show solar direction at your chosen return time; they do not detect available shaded spaces or guarantee shade or cabin cooling. A low glare estimate does not establish that driving conditions are safe."
    },
    {
      "t": "h",
      "v": "3. Safe use"
    },
    {
      "t": "p",
      "v": "Plan and adjust controls only while safely parked. Follow road signs, traffic rules and your observations. Do not rely on the app to decide whether it is safe to leave a child, animal or vulnerable person in a parked vehicle. Heat, UV and energy examples are approximate and are not professional advice."
    },
    {
      "t": "h",
      "v": "4. Demonstrations and exports"
    },
    {
      "t": "p",
      "v": "Features labelled simulation, example or estimated do not represent live satellite/weather observations, verified charger availability or connected vehicle control. The app does not operate your air conditioning, glass or blinds. Text advice is not a guaranteed spoken assistant; background shade-loss notifications are not currently provided. QR codes, barcodes and PDFs contain planning information, not confirmed bookings, signed credentials or transport tickets."
    },
    {
      "t": "h",
      "v": "5. Services, data and availability"
    },
    {
      "t": "p",
      "v": "Online maps, place search, advertisements and sharing destinations are third-party services subject to their own conditions. Keep map attribution visible and use the search provider in accordance with its terms. Network features may be unavailable; the app does not promise complete offline maps. Review the ZILL Privacy Policy for saved data, sharing and advertising practices. Clearing app data can remove plans you have not exported."
    },
    {
      "t": "h",
      "v": "6. Licence, updates and contact"
    },
    {
      "t": "p",
      "v": "You may use ZILL personally on devices you control. Do not unlawfully redistribute the software or original branding, remove ownership notices, misuse services or interfere with their security. Third-party fonts, libraries, sounds and map data retain their respective licences. ZILL is provided as available, without a guarantee of perfect accuracy or uninterrupted operation. Any warranty or liability limitation applies only to the extent permitted by law. We may change features or these terms and communicate material changes where required. Contact: sater.studios@gmail.com."
    },
    {
      "t": "p",
      "v": "sater.studios@gmail.com"
    }
  ],
  "app": "For Application: ZILL",
  "ar": {
    "title": "شروط الاستخدام — ZILL",
    "updated": "١٨ أكتوبر ٢٠٢٦",
    "blocks": [
      {
        "t": "p",
        "v": "تنطبق هذه الشروط على ZILL المنشور بواسطة استوديو SATER. باستخدام التطبيق توافق على هذه الشروط، دون تقييد حقوق المستهلك الإلزامية أو الاستخدامات التي يجيزها القانون أو تراخيص الجهات الخارجية."
      },
      {
        "t": "h",
        "v": "١. تقديرات التخطيط"
      },
      {
        "t": "p",
        "v": "ZILL أداة لتخطيط التعرض للشمس، وليس ملاحة تفصيلية أو نظام طوارئ أو طب أو تحكم بالمركبة. المسارات والمسافات والمدد تقديرات بين الإحداثيات المختارة وليست توجيهاً على الطرق أو توقعاً لحركة السير. تُبنى توصيات المقاعد على تعرض شمسي نموذجي موزون بوقت القيادة. ارتفاع الشمس في رأس المخطط يخص منتصف الرحلة، بينما يعرض المحاكي الوقت الذي تحدده فيه."
      },
      {
        "t": "h",
        "v": "٢. الظل والوهج والوقوف"
      },
      {
        "t": "p",
        "v": "تعتمد النتائج على الموقع والوقت والاتجاه ودقة المستشعرات وافتراضات النموذج. قد تغير الأبنية والأشجار والتضاريس والطقس والنوافذ وهندسة المركبة الظروف الفعلية. يعرض الوقوف اتجاه الشمس عند موعد العودة المختار، ولا يكتشف مواقف مظللة شاغرة ولا يضمن الظل أو برودة المقصورة. انخفاض تقدير الوهج لا يثبت أمان القيادة."
      },
      {
        "t": "h",
        "v": "٣. الاستخدام الآمن"
      },
      {
        "t": "p",
        "v": "خطط واضبط عناصر التحكم أثناء التوقف الآمن فقط. اتبع إشارات الطرق وقواعد المرور وملاحظتك المباشرة. لا تعتمد على التطبيق لتقرير أمان ترك طفل أو حيوان أو شخص ضعيف داخل مركبة متوقفة. أمثلة الحرارة والأشعة فوق البنفسجية والطاقة تقريبية وليست نصيحة مهنية."
      },
      {
        "t": "h",
        "v": "٤. المحاكاة والتصدير"
      },
      {
        "t": "p",
        "v": "الميزات الموسومة بالمحاكاة أو المثال أو التقدير ليست رصداً حياً للأقمار الصناعية أو الطقس أو تحققاً من توافر الشواحن أو اتصالاً بالمركبة. لا يشغل التطبيق المكيف أو الزجاج أو الستائر. الإرشادات النصية لا تعني وجود مساعد ناطق مضمون، ولا تتوفر حالياً تنبيهات زوال الظل الخلفية. تتضمن رموز QR والباركود وملفات PDF معلومات تخطيط، وليست حجوزات مؤكدة أو وثائق موقعة أو تذاكر نقل."
      },
      {
        "t": "h",
        "v": "٥. الخدمات والبيانات والتوافر"
      },
      {
        "t": "p",
        "v": "تخضع الخرائط والبحث والإعلانات وجهات المشاركة الخارجية لشروط مزوديها. احتفظ بإسناد الخرائط واستخدم مزود البحث وفق شروطه. قد تتعذر خدمات الشبكة، ولا يَعِد التطبيق بخرائط كاملة دون اتصال. راجع سياسة خصوصية ZILL للبيانات المحفوظة والمشاركة والإعلانات. قد يؤدي مسح تخزين التطبيق إلى فقدان خطط لم تصدرها."
      },
      {
        "t": "h",
        "v": "٦. الترخيص والتحديثات والتواصل"
      },
      {
        "t": "p",
        "v": "يجوز استخدام ZILL شخصياً على الأجهزة التي تتحكم بها. لا تُعد توزيع البرنامج أو علاماته الأصلية بصورة غير مشروعة، ولا تزل إشعارات الملكية أو تسئ استخدام الخدمات أو تتدخل بأمانها. تحتفظ الخطوط والمكتبات والأصوات والخرائط الخارجية بتراخيصها. يتاح التطبيق وفق توافره دون ضمان الدقة المطلقة أو الاستمرارية. تسري حدود الضمان أو المسؤولية فقط بالقدر الذي يسمح به القانون. قد نغير الميزات أو هذه الشروط ونوضح التغييرات الجوهرية حيث يلزم. للتواصل: sater.studios@gmail.com."
      },
      {
        "t": "p",
        "v": "sater.studios@gmail.com"
      }
    ]
  }
},
};
export default legal;
