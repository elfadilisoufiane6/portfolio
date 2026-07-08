/* ============================================================
   VERTEX ASSISTANT — knowledge base (FR / EN / AR)
   A curated, professional client assistant. It matches the
   visitor's message against intents (keyword scoring, accent /
   diacritic insensitive, Darija-aware) and replies with a clear
   answer + follow-up suggestion chips. Anything it can't answer
   is handed off to the team on WhatsApp.
   ============================================================ */

// strip accents + arabic diacritics, lowercase, collapse spaces
export function normalize(s = '') {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')      // latin accents
    .replace(/[ً-ٰٟ]/g, '') // arabic harakat
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const UI = {
  fr: {
    title: 'Assistant Vertex',
    subtitle: 'En ligne · réponse immédiate',
    placeholder: 'Écrivez votre message…',
    send: 'Envoyer',
    open: 'Discuter avec nous',
    waCta: 'Continuer sur WhatsApp',
    restart: 'Recommencer',
  },
  en: {
    title: 'Vertex Assistant',
    subtitle: 'Online · instant reply',
    placeholder: 'Type your message…',
    send: 'Send',
    open: 'Chat with us',
    waCta: 'Continue on WhatsApp',
    restart: 'Restart',
  },
  ar: {
    title: 'مساعد Vertex',
    subtitle: 'متصل · رد فوري',
    placeholder: 'اكتب رسالتك…',
    send: 'إرسال',
    open: 'تحدث معنا',
    waCta: 'أكمل على واتساب',
    restart: 'إعادة البدء',
  },
};

export const GREETING = {
  fr: "Bonjour 👋 Je suis l'assistant Vertex. Comment puis-je vous aider ? Choisissez un sujet ou posez votre question.",
  en: "Hi 👋 I'm the Vertex assistant. How can I help? Pick a topic or ask your question.",
  ar: "مرحباً 👋 أنا مساعد Vertex. كيف يمكنني مساعدتك؟ اختر موضوعاً أو اطرح سؤالك.",
};

// shown when no intent matches — hands off to WhatsApp
export const FALLBACK = {
  fr: "Excellente question ! Pour une réponse précise et personnalisée, notre équipe vous répond en quelques minutes sur WhatsApp 👇",
  en: "Great question! For a precise, tailored answer, our team replies within minutes on WhatsApp 👇",
  ar: "سؤال ممتاز! للحصول على جواب دقيق ومخصص، فريقنا يرد عليك خلال دقائق على واتساب 👇",
};

// starter suggestion chips (labels) — keyed to intent ids
export const START_CHIPS = {
  fr: [
    ['services', 'Vos services'],
    ['pricing', 'Tarifs'],
    ['delivery', 'Délais'],
    ['portfolio', 'Réalisations'],
    ['contact', 'Contact'],
  ],
  en: [
    ['services', 'Your services'],
    ['pricing', 'Pricing'],
    ['delivery', 'Delivery time'],
    ['portfolio', 'Portfolio'],
    ['contact', 'Contact'],
  ],
  ar: [
    ['services', 'خدماتكم'],
    ['pricing', 'الأثمنة'],
    ['delivery', 'مدة الإنجاز'],
    ['portfolio', 'أعمالنا'],
    ['contact', 'اتصال'],
  ],
};

/* Each intent: id, keywords per lang (normalized substrings),
   answer per lang, and optional follow-up chips [intentId, label]. */
export const INTENTS = [
  {
    id: 'greeting',
    keywords: {
      fr: ['bonjour', 'salut', 'bonsoir', 'coucou', 'salam', 'slm', 'cc'],
      en: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
      ar: ['مرحبا', 'سلام', 'اهلا', 'السلام'],
    },
    answer: {
      fr: "Ravi de vous accueillir 👋 Que souhaitez-vous savoir : nos services, nos tarifs, ou nos réalisations ?",
      en: "Happy to have you 👋 What would you like to know: our services, pricing, or portfolio?",
      ar: "سعداء بك 👋 ماذا تريد أن تعرف: خدماتنا، أثمنتنا، أم أعمالنا؟",
    },
    chips: { fr: [['services', 'Services'], ['pricing', 'Tarifs'], ['portfolio', 'Réalisations']], en: [['services', 'Services'], ['pricing', 'Pricing'], ['portfolio', 'Portfolio']], ar: [['services', 'الخدمات'], ['pricing', 'الأثمنة'], ['portfolio', 'الأعمال']] },
  },
  {
    id: 'services',
    keywords: {
      fr: ['service', 'faites', 'proposez', 'offrez', 'que faites', 'prestation', 'creer', 'creez', 'developpement'],
      en: ['service', 'what do you', 'offer', 'do you build', 'provide', 'develop'],
      ar: ['خدمات', 'خدمة', 'تقدمون', 'ماذا تعملون', 'تصنعون', 'تطوير'],
    },
    answer: {
      fr: "Nous concevons des sites qui transforment vos visiteurs en clients :\n\n🌐 Sites business  •  🎯 Landing pages\n🛒 E-commerce  •  ✨ Design UI/UX\n🔍 SEO  •  ⚡ Maintenance & support\n\nQuel type de projet avez-vous en tête ?",
      en: "We build sites that turn visitors into clients:\n\n🌐 Business sites  •  🎯 Landing pages\n🛒 E-commerce  •  ✨ UI/UX design\n🔍 SEO  •  ⚡ Maintenance & support\n\nWhat kind of project do you have in mind?",
      ar: "نصمم مواقع تحوّل الزوار إلى عملاء:\n\n🌐 مواقع أعمال  •  🎯 صفحات هبوط\n🛒 متاجر إلكترونية  •  ✨ تصميم UI/UX\n🔍 SEO  •  ⚡ صيانة ودعم\n\nما نوع المشروع الذي تفكر فيه؟",
    },
    chips: { fr: [['ecommerce', 'E-commerce'], ['pricing', 'Tarifs'], ['seo', 'SEO']], en: [['ecommerce', 'E-commerce'], ['pricing', 'Pricing'], ['seo', 'SEO']], ar: [['ecommerce', 'متجر إلكتروني'], ['pricing', 'الأثمنة'], ['seo', 'SEO']] },
  },
  {
    id: 'pricing',
    keywords: {
      fr: ['prix', 'tarif', 'cout', 'combien', 'budget', 'devis', 'chhal', 'taman', 'thaman', 'flous', 'ch7al'],
      en: ['price', 'pricing', 'cost', 'how much', 'budget', 'quote', 'rate'],
      ar: ['ثمن', 'اثمنة', 'الاثمنة', 'بشحال', 'شحال', 'كلفة', 'تكلفة', 'فلوس', 'ميزانية'],
    },
    answer: {
      fr: "Nos packs (paiement unique) :\n\n• Starter — 1 500 DH (site 1–3 pages)\n• Pro — 2 500 DH (jusqu'à 8 pages, SEO, multilingue) ⭐ le plus choisi\n• Premium — 4 900 DH (illimité, e-commerce, CMS)\n\nPaiement : 50% au départ, 50% à la livraison. Vous voulez une recommandation selon votre besoin ?",
      en: "Our packages (one-time payment):\n\n• Starter — 1,500 DH (1–3 page site)\n• Pro — 2,500 DH (up to 8 pages, SEO, multilingual) ⭐ most popular\n• Premium — 4,900 DH (unlimited, e-commerce, CMS)\n\nPayment: 50% upfront, 50% on delivery. Want a recommendation for your case?",
      ar: "باقاتنا (دفعة واحدة):\n\n• Starter — 1500 درهم (موقع 1–3 صفحات)\n• Pro — 2500 درهم (حتى 8 صفحات، SEO، متعدد اللغات) ⭐ الأكثر طلباً\n• Premium — 4900 درهم (غير محدود، متجر، CMS)\n\nالدفع: 50% في البداية و50% عند التسليم. تريد توصية حسب حاجتك؟",
    },
    chips: { fr: [['delivery', 'Délais'], ['payment', 'Paiement'], ['contact', 'Demander un devis']], en: [['delivery', 'Delivery'], ['payment', 'Payment'], ['contact', 'Get a quote']], ar: [['delivery', 'المدة'], ['payment', 'الدفع'], ['contact', 'طلب عرض']] },
  },
  {
    id: 'delivery',
    keywords: {
      fr: ['delai', 'temps', 'duree', 'combien de temps', 'quand', 'livraison', 'rapide', 'wa9t', 'chhal men wa9t'],
      en: ['how long', 'delivery', 'timeline', 'time', 'when', 'fast', 'duration', 'deadline'],
      ar: ['مدة', 'وقت', 'كم من الوقت', 'متى', 'التسليم', 'المدة', 'بسرعة'],
    },
    answer: {
      fr: "Nos délais de livraison :\n\n• Starter — 5 jours\n• Pro — 10 à 14 jours\n• Premium — selon le périmètre\n\nOn peut aussi accélérer si vous êtes pressé. Vous avez une échéance en tête ?",
      en: "Our delivery times:\n\n• Starter — 5 days\n• Pro — 10 to 14 days\n• Premium — depending on scope\n\nWe can also fast-track if you're in a hurry. Do you have a deadline in mind?",
      ar: "مدد الإنجاز:\n\n• Starter — 5 أيام\n• Pro — 10 إلى 14 يوماً\n• Premium — حسب النطاق\n\nيمكننا الإسراع إذا كنت مستعجلاً. هل لديك موعد محدد؟",
    },
    chips: { fr: [['pricing', 'Tarifs'], ['contact', 'Démarrer']], en: [['pricing', 'Pricing'], ['contact', 'Get started']], ar: [['pricing', 'الأثمنة'], ['contact', 'ابدأ']] },
  },
  {
    id: 'ecommerce',
    keywords: {
      fr: ['e-commerce', 'ecommerce', 'boutique', 'vendre', 'magasin', 'panier', 'cod', 'paiement livraison', 'store', 'produit'],
      en: ['e-commerce', 'ecommerce', 'shop', 'store', 'sell', 'cart', 'cod', 'cash on delivery', 'product'],
      ar: ['متجر', 'بيع', 'تجارة', 'سلة', 'الدفع عند الاستلام', 'منتجات', 'دكان'],
    },
    answer: {
      fr: "Oui ! Nous créons des boutiques complètes : catalogue filtrable, panier intelligent, et paiement à la livraison (COD) automatisé Sendit/Amana pour tout le Maroc — plus paiement en ligne si besoin.\n\nEx : Rebelle.ma (+400% de ventes) et Granola Ya Salam (+320% de commandes).",
      en: "Yes! We build full online stores: filterable catalog, smart cart, and automated cash-on-delivery (COD) via Sendit/Amana across Morocco — plus online payment if needed.\n\nE.g. Rebelle.ma (+400% sales) and Granola Ya Salam (+320% orders).",
      ar: "نعم! ننشئ متاجر متكاملة: كتالوغ قابل للفلترة، سلة ذكية، ودفع عند الاستلام (COD) أوتوماتيكي عبر Sendit/Amana لكل المغرب — مع دفع إلكتروني عند الحاجة.\n\nمثال: Rebelle.ma (+400% مبيعات) و Granola Ya Salam (+320% طلبات).",
    },
    chips: { fr: [['pricing', 'Tarifs'], ['portfolio', 'Voir des exemples'], ['contact', 'Contact']], en: [['pricing', 'Pricing'], ['portfolio', 'See examples'], ['contact', 'Contact']], ar: [['pricing', 'الأثمنة'], ['portfolio', 'أمثلة'], ['contact', 'اتصال']] },
  },
  {
    id: 'seo',
    keywords: {
      fr: ['seo', 'google', 'referencement', 'visible', 'ranking', 'recherche', 'trafic'],
      en: ['seo', 'google', 'ranking', 'search', 'visible', 'traffic', 'rank'],
      ar: ['سيو', 'جوجل', 'قوقل', 'ظهور', 'بحث', 'تصنيف', 'زيارات'],
    },
    answer: {
      fr: "Chaque site est livré optimisé pour Google (SEO de base). Les packs Pro et Premium incluent un SEO avancé : mots-clés, vitesse, structure, SEO local — pour être trouvé par les bons clients.",
      en: "Every site ships optimized for Google (basic SEO). Pro and Premium include advanced SEO: keywords, speed, structure, local SEO — so the right clients find you.",
      ar: "كل موقع يُسلَّم محسّناً لجوجل (SEO أساسي). باقتا Pro و Premium تشملان SEO متقدماً: كلمات مفتاحية، سرعة، بنية، SEO محلي — لكي يجدك العملاء المناسبون.",
    },
    chips: { fr: [['pricing', 'Tarifs'], ['contact', 'Contact']], en: [['pricing', 'Pricing'], ['contact', 'Contact']], ar: [['pricing', 'الأثمنة'], ['contact', 'اتصال']] },
  },
  {
    id: 'mobile',
    keywords: {
      fr: ['mobile', 'telephone', 'responsive', 'smartphone', 'adapte', 'portable'],
      en: ['mobile', 'phone', 'responsive', 'smartphone', 'tablet'],
      ar: ['موبايل', 'هاتف', 'تليفون', 'متجاوب', 'الجوال'],
    },
    answer: {
      fr: "100% responsive. Plus de 70% du trafic vient du mobile — chaque site est parfaitement adapté aux téléphones, tablettes et ordinateurs.",
      en: "100% responsive. Over 70% of traffic is mobile — every site is perfectly adapted to phones, tablets and desktops.",
      ar: "متجاوب 100%. أكثر من 70% من الزيارات من الموبايل — كل موقع مهيأ بالكامل للهواتف والأجهزة اللوحية والحواسيب.",
    },
  },
  {
    id: 'payment',
    keywords: {
      fr: ['paiement', 'payer', 'acompte', 'facture', 'comment payer', 'khalas', 'versement'],
      en: ['payment', 'pay', 'deposit', 'invoice', 'how do i pay', 'installment'],
      ar: ['دفع', 'خلاص', 'الدفع', 'كيف ادفع', 'دفعة', 'فاتورة'],
    },
    answer: {
      fr: "Simple et sécurisé : 50% au démarrage du projet, 50% à la livraison finale. Pas de frais cachés, pas de surprises.",
      en: "Simple and secure: 50% at project start, 50% on final delivery. No hidden fees, no surprises.",
      ar: "بسيط وآمن: 50% عند بداية المشروع و50% عند التسليم النهائي. بدون رسوم خفية ولا مفاجآت.",
    },
    chips: { fr: [['pricing', 'Tarifs'], ['contact', 'Démarrer']], en: [['pricing', 'Pricing'], ['contact', 'Get started']], ar: [['pricing', 'الأثمنة'], ['contact', 'ابدأ']] },
  },
  {
    id: 'revisions',
    keywords: {
      fr: ['revision', 'modification', 'satisfait', 'pas content', 'changer', 'garantie', 'retouche'],
      en: ['revision', 'change', 'satisfied', 'not happy', 'guarantee', 'edit', 'refund'],
      ar: ['تعديل', 'تعديلات', 'مراجعة', 'راضي', 'ضمان', 'تغيير'],
    },
    answer: {
      fr: "Chaque pack inclut des révisions (1 pour Starter, 3 pour Pro, illimitées pour Premium). Si le résultat ne vous convient pas, nous ajoutons des révisions offertes — jusqu'à votre pleine satisfaction.",
      en: "Every plan includes revisions (1 for Starter, 3 for Pro, unlimited for Premium). If it's not right, we add free revisions — until you're fully satisfied.",
      ar: "كل باقة تتضمن مراجعات (1 لـ Starter، 3 لـ Pro، غير محدودة لـ Premium). وإن لم تعجبك النتيجة، نضيف مراجعات مجانية — حتى رضاك التام.",
    },
  },
  {
    id: 'maintenance',
    keywords: {
      fr: ['maintenance', 'support', 'apres', 'mise a jour', 'hebergement', 'domaine', 'securite'],
      en: ['maintenance', 'support', 'after', 'update', 'hosting', 'domain', 'security'],
      ar: ['صيانة', 'دعم', 'تحديث', 'استضافة', 'دومين', 'نطاق', 'امان'],
    },
    answer: {
      fr: "Nous assurons le support après livraison : mises à jour, sécurité, sauvegardes et hébergement géré (inclus dans Premium). Votre site reste rapide, sûr et à jour.",
      en: "We provide post-launch support: updates, security, backups and managed hosting (included in Premium). Your site stays fast, safe and up to date.",
      ar: "نوفر الدعم بعد الإطلاق: تحديثات، أمان، نسخ احتياطية واستضافة مُدارة (مشمولة في Premium). موقعك يبقى سريعاً وآمناً ومحدثاً.",
    },
    chips: { fr: [['pricing', 'Tarifs'], ['contact', 'Contact']], en: [['pricing', 'Pricing'], ['contact', 'Contact']], ar: [['pricing', 'الأثمنة'], ['contact', 'اتصال']] },
  },
  {
    id: 'languages',
    keywords: {
      fr: ['multilingue', 'langue', 'arabe', 'anglais', 'francais', 'traduction'],
      en: ['multilingual', 'language', 'arabic', 'english', 'french', 'translation'],
      ar: ['لغات', 'لغة', 'عربية', 'انجليزية', 'فرنسية', 'ترجمة', 'متعدد اللغات'],
    },
    answer: {
      fr: "Oui, nous réalisons des sites multilingues (FR / EN / AR) avec support RTL pour l'arabe — inclus dès le pack Pro.",
      en: "Yes, we build multilingual sites (FR / EN / AR) with full RTL support for Arabic — included from the Pro plan.",
      ar: "نعم، ننجز مواقع متعددة اللغات (FR / EN / AR) مع دعم كامل للكتابة من اليمين لليسار — مشمول ابتداءً من باقة Pro.",
    },
  },
  {
    id: 'portfolio',
    keywords: {
      fr: ['portfolio', 'realisation', 'exemple', 'projet', 'travaux', 'references', 'deja fait', 'khedma'],
      en: ['portfolio', 'example', 'project', 'work', 'reference', 'case', 'showcase', 'done'],
      ar: ['اعمال', 'اعمالكم', 'مثال', 'مشروع', 'مشاريع', 'نماذج', 'شغل'],
    },
    answer: {
      fr: "Voici quelques réalisations récentes :\n\n• Rebelle.ma — e-shop sacs à main (+400% ventes)\n• Granola Ya Salam — e-shop food (+320% commandes)\n• Dar Naji — restaurant traditionnel\n• Azure Palace Hotel — réservation directe (+220%)\n• Millenium Fitness & Spa\n\n👉 Découvrez-les tous sur la page Réalisations.",
      en: "Here are a few recent projects:\n\n• Rebelle.ma — handbags e-shop (+400% sales)\n• Granola Ya Salam — food e-shop (+320% orders)\n• Dar Naji — traditional restaurant\n• Azure Palace Hotel — direct booking (+220%)\n• Millenium Fitness & Spa\n\n👉 See them all on the Portfolio page.",
      ar: "بعض أعمالنا الأخيرة:\n\n• Rebelle.ma — متجر حقائب (+400% مبيعات)\n• Granola Ya Salam — متجر أكل (+320% طلبات)\n• Dar Naji — مطعم تقليدي\n• Azure Palace Hotel — حجز مباشر (+220%)\n• Millenium Fitness & Spa\n\n👈 شاهدها كلها في صفحة الأعمال.",
    },
    chips: { fr: [['pricing', 'Tarifs'], ['contact', 'Je veux un site']], en: [['pricing', 'Pricing'], ['contact', 'I want a site']], ar: [['pricing', 'الأثمنة'], ['contact', 'أريد موقعاً']] },
  },
  {
    id: 'contact',
    keywords: {
      fr: ['contact', 'contacter', 'parler', 'whatsapp', 'telephone', 'appeler', 'joindre', 'humain', 'commander', 'commencer', 'demarrer', 'devis'],
      en: ['contact', 'talk', 'whatsapp', 'call', 'reach', 'human', 'agent', 'order', 'start', 'get started', 'quote'],
      ar: ['اتصال', 'تواصل', 'واتساب', 'اتصل', 'كلم', 'انسان', 'موظف', 'اطلب', 'ابدا', 'عرض'],
    },
    answer: {
      fr: "Avec plaisir ! Le plus rapide est WhatsApp : envoyez votre idée et nous répondons dans l'heure. Cliquez ci-dessous 👇",
      en: "With pleasure! The fastest way is WhatsApp: send your idea and we reply within the hour. Tap below 👇",
      ar: "بكل سرور! أسرع طريقة هي واتساب: أرسل فكرتك ونرد عليك خلال ساعة. اضغط أسفله 👇",
    },
    wa: true,
  },
  {
    id: 'thanks',
    keywords: {
      fr: ['merci', 'chokran', 'super', 'parfait', 'ok', 'daccord', 'genial'],
      en: ['thanks', 'thank you', 'great', 'perfect', 'awesome', 'ok', 'cool'],
      ar: ['شكرا', 'ممتاز', 'رائع', 'واخا', 'زين', 'تمام'],
    },
    answer: {
      fr: "Avec plaisir 🙌 Si vous avez d'autres questions, je suis là. Prêt à démarrer votre projet ?",
      en: "You're welcome 🙌 If you have more questions, I'm here. Ready to start your project?",
      ar: "على الرحب 🙌 إذا كان لديك أسئلة أخرى، أنا هنا. مستعد لبدء مشروعك؟",
    },
    chips: { fr: [['contact', 'Démarrer']], en: [['contact', 'Get started']], ar: [['contact', 'ابدأ']] },
  },
];

// score a normalized user message against intents; return best match or null
export function matchIntent(rawText, lang) {
  const text = normalize(rawText);
  if (!text) return null;
  let best = null, bestScore = 0;
  for (const intent of INTENTS) {
    const kws = [
      ...(intent.keywords[lang] || []),
      ...(intent.keywords.fr || []),   // cross-lang safety net (Darija mixes)
    ];
    let score = 0;
    for (const kw of kws) {
      const k = normalize(kw);
      if (k && text.includes(k)) score += k.length >= 4 ? 2 : 1;
    }
    if (score > bestScore) { bestScore = score; best = intent; }
  }
  return bestScore >= 1 ? best : null;
}

export function getIntentById(id) {
  return INTENTS.find((i) => i.id === id) || null;
}
