export const SITE = {
  name: 'Souf Web',
  phone: '212724016604',
  email: 'contact@soufweb.ma',
  instagram: 'https://www.instagram.com/soufweb_/',
  linkedin: 'https://www.linkedin.com/in/me/',
  waMsg: 'Bonjour%2C%20je%20voudrais%20discuter%20d%27un%20projet%20web',
};

export const waLink = (msg) =>
  `https://wa.me/${SITE.phone}?text=${msg || SITE.waMsg}`;

/* ============================================================
   SERVICES
   ============================================================ */
export const SERVICES = {
  fr: [
    { icon: '🌐', title: 'Site Business',     desc: "Une présence en ligne puissante qui travaille 24h/24 pour attirer et convertir vos clients.", benefit: 'Attirez des clients en dormant' },
    { icon: '🎯', title: 'Landing Page',      desc: "Pages ultra-ciblées conçues pour transformer chaque clic en lead qualifié ou vente directe.",   benefit: "Jusqu'à 5x plus de leads" },
    { icon: '🛒', title: 'E-commerce',        desc: "Boutiques complètes avec paiement intégré, gestion des stocks et expérience fluide.",          benefit: 'Vendez dans le monde entier' },
    { icon: '✨', title: 'Design UI/UX',      desc: "Des interfaces magnifiques que les utilisateurs adorent. Design qui génère de l'engagement.",  benefit: 'Les visiteurs restent et achètent' },
    { icon: '🔍', title: 'SEO',               desc: "Soyez trouvé par les bonnes personnes au bon moment. Rankez plus haut, gagnez du trafic.",     benefit: 'Trafic gratuit depuis Google' },
    { icon: '⚡', title: 'Maintenance',       desc: "Support après-livraison, mises à jour, sécurité. Votre site reste rapide, sûr et à jour.",      benefit: 'Tranquillité totale' },
  ],
  en: [
    { icon: '🌐', title: 'Business Website',  desc: "A powerful online presence that works 24/7 to attract and convert your clients.",               benefit: 'Attract clients while you sleep' },
    { icon: '🎯', title: 'Landing Page',      desc: "Laser-focused pages designed to turn every click into a qualified lead or direct sale.",        benefit: 'Up to 5x more leads' },
    { icon: '🛒', title: 'E-commerce',        desc: "Full online stores with payment integration, inventory management and a seamless experience.",  benefit: 'Sell worldwide, 24/7' },
    { icon: '✨', title: 'UI/UX Design',      desc: "Stunning interfaces users love. Beautiful design that drives engagement and sales.",            benefit: 'Users stay, explore, buy' },
    { icon: '🔍', title: 'SEO',               desc: "Get found by the right people at the right time. Rank higher, get more organic traffic.",       benefit: 'Free traffic from Google' },
    { icon: '⚡', title: 'Maintenance',       desc: "Post-launch support, updates, security. Your site stays fast, safe and up to date.",            benefit: 'Total peace of mind' },
  ],
  ar: [
    { icon: '🌐', title: 'موقع أعمال',          desc: "حضور رقمي قوي يعمل 24/7 لجذب العملاء وتحويلهم.",                                                  benefit: 'اجذب عملاء وأنت نائم' },
    { icon: '🎯', title: 'صفحة هبوط',           desc: "صفحات مركزة بدقة لتحويل كل نقرة إلى عميل محتمل أو عملية بيع.",                                       benefit: 'حتى 5 أضعاف العملاء' },
    { icon: '🛒', title: 'متجر إلكتروني',      desc: "متاجر متكاملة مع بوابات دفع وإدارة مخزون وتجربة تسوق سلسة.",                                          benefit: 'بِع في العالم كله' },
    { icon: '✨', title: 'تصميم UI/UX',         desc: "واجهات مذهلة يحبها المستخدمون. تصميم جميل يزيد التفاعل والمبيعات.",                                  benefit: 'الزوار يبقون ويشترون' },
    { icon: '🔍', title: 'تحسين SEO',           desc: "اظهر للأشخاص المناسبين في الوقت المناسب. تصنيف أعلى وزيارات مجانية أكثر.",                          benefit: 'زيارات مجانية من جوجل' },
    { icon: '⚡', title: 'الصيانة والدعم',     desc: "دعم بعد الإطلاق، تحديثات، أمان. موقعك يبقى سريعاً وآمناً ومحدثاً.",                                   benefit: 'راحة بال تامة' },
  ],
};

/* ============================================================
   PRICING — Starter delivery shortened to 5 days
   ============================================================ */
export const PRICING = {
  fr: [
    { name:'Starter', price:'1 500 DH', period:'paiement unique', popular:false,
      desc:"Parfait pour lancer rapidement une présence professionnelle en ligne.",
      features:['Site web 1 à 3 pages','Design 100% responsive','Formulaire de contact','SEO de base configuré','Vitesse optimisée','Intégration WhatsApp','1 cycle de révisions','Livraison en 5 jours'],
      cta:'Démarrer mon site' },
    { name:'Pro', price:'2 500 DH', period:'paiement unique', popular:true,
      desc:"Idéal pour les entreprises sérieuses qui veulent plus de clients et un branding solide.",
      features:["Jusqu'à 8 pages sur-mesure",'Animations premium','SEO optimisation complète','Système de réservation WhatsApp','Google Maps intégré','Galerie / portfolio interactive','Multi-langues (FR/EN/AR)','3 cycles de révisions','Support 30 jours','Livraison en 10 à 14 jours'],
      cta:'Développer mon business' },
    { name:'Premium', price:'4 900 DH', period:'paiement unique', popular:false,
      desc:"Pour les marques ambitieuses qui veulent un site digne d'une agence internationale.",
      features:['Pages illimitées','UI/UX 100% personnalisé','E-commerce / réservation complet','Paiement en ligne intégré','Dashboard admin / CMS','SEO avancé multi-pages','Blog intégré','Analytics & tracking','Support prioritaire 60 jours','Révisions illimitées','Hébergement géré'],
      cta:'Bâtir ma marque' },
  ],
  en: [
    { name:'Starter', price:'1,500 DH', period:'one-time payment', popular:false,
      desc:'Perfect for quickly launching a professional online presence.',
      features:['1 to 3 pages website','100% responsive design','Contact form','Basic SEO setup','Speed optimized','WhatsApp integration','1 revision cycle','Delivery in 5 days'],
      cta:'Get Started' },
    { name:'Pro', price:'2,500 DH', period:'one-time payment', popular:true,
      desc:'Ideal for serious businesses that want more clients and strong branding.',
      features:['Up to 8 custom pages','Premium animations','Full SEO optimization','WhatsApp reservation system','Google Maps integration','Interactive gallery / portfolio','Multi-language (FR/EN/AR)','3 revision cycles','30-day support','Delivery in 10 to 14 days'],
      cta:'Develop My Business' },
    { name:'Premium', price:'4,900 DH', period:'one-time payment', popular:false,
      desc:"For ambitious brands wanting a site worthy of an international agency.",
      features:['Unlimited pages','100% custom UI/UX','Full e-commerce / reservation','Integrated online payments','Admin dashboard / CMS','Advanced multi-page SEO','Integrated blog','Analytics & tracking','60-day priority support','Unlimited revisions','Managed hosting'],
      cta:'Build My Brand' },
  ],
  ar: [
    { name:'ستارتر', price:'1 500 درهم', period:'دفعة واحدة', popular:false,
      desc:'مثالي لإطلاق حضور احترافي على الإنترنت بسرعة.',
      features:['موقع من 1 إلى 3 صفحات','تصميم متجاوب 100%','نموذج اتصال','إعداد SEO أساسي','سرعة محسّنة','تكامل واتساب','دورة مراجعة واحدة','تسليم في 5 أيام'],
      cta:'ابدأ موقعي' },
    { name:'برو', price:'2 500 درهم', period:'دفعة واحدة', popular:true,
      desc:'مثالي للشركات الجادة التي تريد عملاء أكثر وهوية قوية.',
      features:['حتى 8 صفحات مخصصة','رسوم متحركة احترافية','تحسين SEO كامل','نظام حجز واتساب','تكامل خرائط جوجل','معرض / بورتفوليو تفاعلي','متعدد اللغات (FR/EN/AR)','3 دورات مراجعة','دعم 30 يوماً','تسليم في 10 إلى 14 يوماً'],
      cta:'تطوير عملي' },
    { name:'بريميوم', price:'4 900 درهم', period:'دفعة واحدة', popular:false,
      desc:'للعلامات الطموحة التي تريد موقعاً يليق بوكالة دولية.',
      features:['صفحات غير محدودة','UI/UX مخصص 100%','متجر إلكتروني / نظام حجز كامل','دفع إلكتروني مدمج','لوحة تحكم / CMS','SEO متقدم متعدد الصفحات','مدونة مدمجة','تحليلات وتتبع','دعم ذو أولوية 60 يوماً','مراجعات غير محدودة','استضافة مُدارة'],
      cta:'بناء علامتي' },
  ],
};

/* ============================================================
   REVIEWS — 3 only, one per real project
   ============================================================ */
export const REVIEWS = {
  fr: [
    { avatar:'👩‍💼', name:'Sara M.',  role:'Fondatrice, Rebelle.ma',         stars:5,
      quote:"Souf Web bnaw lia un e-shop ديال les sacs à main féminins qui vend tout seul. Système COD réglé parfaitement, les commandes kayjiw من partout au Maroc. Le ROI was immédiat — en moins de 2 mois." },
    { avatar:'👨‍💼', name:'Hamza R.', role:'Directeur, Azure Palace Hotel',  stars:5,
      quote:"Cherche un développeur li yfhem business, machi ghir code. Souf Web fahmou le besoin men l'awal, livraison f 3 semaines, w l9itu vraiment professionnels. Les réservations directes monta3aw +220%." },
    { avatar:'⛵',   name:'Reda T.',  role:'Fondateur, Jet Set Loisirs',     stars:5,
      quote:"L'été, lmoqi3 jab lia 55% de clients étrangers. Le multilingue automatique kandiri kif le touriste y7der bsa langue — game changer. Khdma ma3andi ma nzid 3liha." },
  ],
  en: [
    { avatar:'👩‍💼', name:'Sara M.',  role:'Founder, Rebelle.ma',            stars:5,
      quote:"Souf Web built lia an e-shop ديال women's handbags that sells on its own. COD system setup parfait, orders kayjiw from across Morocco. ROI was instant, less than 2 months." },
    { avatar:'👨‍💼', name:'Hamza R.', role:'GM, Azure Palace Hotel',         stars:5,
      quote:"Looking for a dev li yfhem business, not just code. Souf Web fahmou the need from day 1, shipped in 3 weeks, w l9itou really professional. Direct bookings +220%." },
    { avatar:'⛵',   name:'Reda T.',  role:'Founder, Jet Set Loisirs',       stars:5,
      quote:"During summer, lmoqi3 brought lia 55% foreign clients. Auto multilingual kandiri kif le touriste reads in their language — game changer. Khdma ma3andi ma nzid." },
  ],
  ar: [
    { avatar:'👩‍💼', name:'سارة م.',  role:'مؤسسة، Rebelle.ma',                stars:5,
      quote:'Souf Web بناو ليا متجر ديال الحقائب النسائية كيبيع بوحدو. نظام COD متضبط، الطلبات كيجيو من كل المغرب. ROI كان فوري — أقل من شهرين.' },
    { avatar:'👨‍💼', name:'حمزة ر.',  role:'المدير العام، Azure Palace Hotel', stars:5,
      quote:'كنت كنقلب على مطور كيفهم business، ماشي غير كود. Souf Web فهمو الحاجة من أول يوم، سلمو فـ 3 أسابيع، ولقيتهم محترفين بصح. الحجوزات المباشرة طلعت +220%.' },
    { avatar:'⛵',   name:'رضا ت.',   role:'مؤسس، Jet Set Loisirs',           stars:5,
      quote:'الصيف، الموقع جاب ليا 55% من زبناء أجانب. التعدد اللغوي كاندير كيف السائح يقرا بلغتو — كيتغير اللعبة. خدمة ما عندي ما نزيد عليها.' },
  ],
};

/* ============================================================
   PROJECTS — concise descriptions, Rebelle = woman handbags + COD
   slug MUST match the folder name in public/projects/
   ============================================================ */
export const PROJECTS = {
  fr: [
    {
      slug: 'Azure Palace Hotel',
      icon: '🏨',
      title: 'Azure Palace Hotel',
      category: 'Hôtellerie',
      summary: "Site multilingue avec moteur de réservation directe pour un hôtel premium à Marrakech.",
      challenge: "88% des revenus via OTAs avec 18% de commission. Aucune réservation directe.",
      solution: "Refonte premium, réservation directe sans commission, multilingue + SEO local.",
      metrics: [
        { value: '+220%',  label: 'Réservations directes' },
        { value: '58%',    label: 'Commissions économisées' },
        { value: '98/100', label: 'Score PageSpeed' },
      ],
      tech: ['Next.js 14', 'TailwindCSS', 'i18next', 'Stripe', 'Vercel'],
      waMsg: 'Bonjour%2C%20j%27aimerais%20un%20site%20comme%20Azure%20Palace%20Hotel',
    },
    {
      slug: 'Rebelle.ma',
      icon: '👜',
      title: 'Rebelle.ma',
      category: 'Sacs à main pour femmes',
      summary: "E-shop premium pour une marque de sacs à main féminins. Système COD complet pour tout le Maroc.",
      challenge: "Vente uniquement via DM Instagram, aucun catalogue, impossible de scaler.",
      solution: "E-shop avec catalogue filtrable, panier intelligent et COD automatisé Sendit/Amana.",
      metrics: [
        { value: '+400%', label: 'Ventes en ligne' },
        { value: '6.8%',  label: 'Taux de conversion' },
        { value: 'COD',   label: 'Tout le Maroc' },
      ],
      tech: ['Next.js 14', 'TailwindCSS', 'Sendit API', 'Stripe', 'Vercel'],
      waMsg: 'Bonjour%2C%20je%20veux%20une%20boutique%20comme%20Rebelle.ma',
    },
    {
      slug: 'jet-loisir',
      icon: '⛵',
      title: 'Jet Set Loisirs',
      category: 'Tourisme nautique',
      summary: "Plateforme premium de location de bateaux et jet skis à Agadir.",
      challenge: "Réservations 100% téléphoniques perdues hors heures de bureau. Marché étranger non servi.",
      solution: "Site multilingue, calendrier temps réel, paiement d'acompte, automation WhatsApp.",
      metrics: [
        { value: '+120%', label: 'Clients touristes' },
        { value: '72%',   label: 'Réservations en ligne' },
        { value: '2x',    label: 'Panier moyen' },
      ],
      tech: ['Next.js 14', 'FullCalendar', 'CMI', 'WhatsApp API', 'Vercel'],
      waMsg: 'Bonjour%2C%20je%20veux%20un%20site%20de%20r%C3%A9servation%20comme%20Jet%20Set%20Loisirs',
    },
  ],
  en: [
    {
      slug: 'Azure Palace Hotel',
      icon: '🏨',
      title: 'Azure Palace Hotel',
      category: 'Hospitality',
      summary: "Multilingual site with direct booking engine for a premium Marrakech hotel.",
      challenge: "88% of revenue via OTAs with 18% commission. No direct booking.",
      solution: "Premium redesign, commission-free booking, multi-language + local SEO.",
      metrics: [
        { value: '+220%',  label: 'Direct bookings' },
        { value: '58%',    label: 'Commissions saved' },
        { value: '98/100', label: 'PageSpeed score' },
      ],
      tech: ['Next.js 14', 'TailwindCSS', 'i18next', 'Stripe', 'Vercel'],
      waMsg: 'Hello%2C%20I%20want%20a%20site%20like%20Azure%20Palace%20Hotel',
    },
    {
      slug: 'Rebelle.ma',
      icon: '👜',
      title: 'Rebelle.ma',
      category: "Women's Handbags",
      summary: "Premium e-shop for a women's handbags brand. Full COD system across Morocco.",
      challenge: "Sales only via Instagram DMs, no catalog, impossible to scale.",
      solution: "E-shop with filterable catalog, smart cart and automated COD via Sendit/Amana.",
      metrics: [
        { value: '+400%', label: 'Online sales' },
        { value: '6.8%',  label: 'Conversion rate' },
        { value: 'COD',   label: 'Nationwide delivery' },
      ],
      tech: ['Next.js 14', 'TailwindCSS', 'Sendit API', 'Stripe', 'Vercel'],
      waMsg: 'Hello%2C%20I%20want%20a%20shop%20like%20Rebelle.ma',
    },
    {
      slug: 'jet-loisir',
      icon: '⛵',
      title: 'Jet Set Loisirs',
      category: 'Nautical tourism',
      summary: "Premium boat and jet ski rental platform in Agadir.",
      challenge: "100% phone bookings lost after hours. Foreign market unserved.",
      solution: "Multilingual site, real-time calendar, deposit payment, WhatsApp automation.",
      metrics: [
        { value: '+120%', label: 'Tourist clients' },
        { value: '72%',   label: 'Online bookings' },
        { value: '2x',    label: 'Avg basket' },
      ],
      tech: ['Next.js 14', 'FullCalendar', 'CMI', 'WhatsApp API', 'Vercel'],
      waMsg: 'Hello%2C%20I%20want%20a%20booking%20site%20like%20Jet%20Set%20Loisirs',
    },
  ],
  ar: [
    {
      slug: 'Azure Palace Hotel',
      icon: '🏨',
      title: 'Azure Palace Hotel',
      category: 'فنادق',
      summary: "موقع متعدد اللغات مع نظام حجز مباشر لفندق فاخر بمراكش.",
      challenge: "88% من المداخيل عبر OTAs بعمولة 18%. لا يوجد حجز مباشر.",
      solution: "إعادة تصميم فاخرة، حجز مباشر بدون عمولة، متعدد اللغات و SEO محلي.",
      metrics: [
        { value: '+220%',  label: 'حجوزات مباشرة' },
        { value: '58%',    label: 'عمولات موفّرة' },
        { value: '98/100', label: 'نتيجة PageSpeed' },
      ],
      tech: ['Next.js 14', 'TailwindCSS', 'i18next', 'Stripe', 'Vercel'],
      waMsg: 'Bonjour%2C%20j%27aimerais%20un%20site%20comme%20Azure%20Palace%20Hotel',
    },
    {
      slug: 'Rebelle.ma',
      icon: '👜',
      title: 'Rebelle.ma',
      category: 'حقائب نسائية',
      summary: "متجر فاخر لعلامة حقائب نسائية. نظام COD متكامل لكل المغرب.",
      challenge: "البيع فقط عبر DM إنستغرام، بدون كتالوغ، استحالة التوسع.",
      solution: "متجر بكتالوغ قابل للفلترة، سلة ذكية وتوصيل COD أوتوماتيكي عبر Sendit/Amana.",
      metrics: [
        { value: '+400%', label: 'مبيعات أونلاين' },
        { value: '6.8%',  label: 'معدل التحويل' },
        { value: 'COD',   label: 'توصيل وطني' },
      ],
      tech: ['Next.js 14', 'TailwindCSS', 'Sendit API', 'Stripe', 'Vercel'],
      waMsg: 'Bonjour%2C%20je%20veux%20une%20boutique%20comme%20Rebelle.ma',
    },
    {
      slug: 'jet-loisir',
      icon: '⛵',
      title: 'Jet Set Loisirs',
      category: 'سياحة بحرية',
      summary: "منصة فاخرة لتأجير القوارب وجت سكي في أكادير.",
      challenge: "حجوزات هاتفية 100% تُفقد خارج ساعات العمل. السوق الأجنبي غير مخدوم.",
      solution: "موقع متعدد اللغات، تقويم آني، دفعة مقدمة، وأتمتة واتساب.",
      metrics: [
        { value: '+120%', label: 'زبناء سياح' },
        { value: '72%',   label: 'حجوزات أونلاين' },
        { value: '2x',    label: 'متوسط السلة' },
      ],
      tech: ['Next.js 14', 'FullCalendar', 'CMI', 'WhatsApp API', 'Vercel'],
      waMsg: 'Bonjour%2C%20je%20veux%20un%20site%20de%20r%C3%A9servation%20comme%20Jet%20Set%20Loisirs',
    },
  ],
};

/* ============================================================
   FAQ — Starter delivery updated to 5 days
   ============================================================ */
export const FAQ = {
  fr: [
    { q:"Combien de temps faut-il pour créer mon site ?",       a:"5 jours pour le Starter, 10 à 14 jours pour le Pro, et selon le scope pour le Premium." },
    { q:"Comment se passe le paiement ?",                       a:"50% au démarrage du projet, 50% à la livraison finale. Simple, sécurisé, sans surprises." },
    { q:"Est-ce que mon site sera visible sur Google ?",        a:"Oui. Chaque site est livré avec SEO de base. Pro et Premium incluent un SEO avancé." },
    { q:"Mon site sera-t-il adapté aux mobiles ?",              a:"100% responsive. Plus de 70% du trafic vient du mobile — chaque site est parfaitement adapté." },
    { q:"Je ne suis pas satisfait, que se passe-t-il ?",        a:"Nous travaillons jusqu'à votre satisfaction totale. Des révisions sont incluses dans chaque pack." },
    { q:"Comment démarrer mon projet maintenant ?",             a:"Un seul message WhatsApp suffit. Envoyez votre idée et nous répondons dans l'heure." },
  ],
  en: [
    { q:"How long does it take to build my site?",              a:"5 days for Starter, 10 to 14 days for Pro, and depending on scope for Premium." },
    { q:"How does payment work?",                                a:"50% upfront, 50% on final delivery. Simple, secure, no surprises." },
    { q:"Will my site rank on Google?",                          a:"Yes. Every site comes with basic SEO. Pro and Premium include advanced SEO." },
    { q:"Will my site work on mobile?",                          a:"100% responsive. Over 70% of traffic is mobile — every site is fully adapted." },
    { q:"What if I'm not satisfied?",                            a:"We work until you're 100% satisfied. Revisions are included in every plan." },
    { q:"How do I start my project right now?",                  a:"One WhatsApp message is enough. Send your idea and we reply within the hour." },
  ],
  ar: [
    { q:"كم من الوقت يستغرق بناء موقعي؟",                          a:"5 أيام لـ Starter، و10 إلى 14 يوماً لـ Pro، وحسب النطاق لـ Premium." },
    { q:"كيف يتم الدفع؟",                                            a:"50% عند البداية و50% عند التسليم النهائي. بسيط وآمن بدون مفاجآت." },
    { q:"هل سيظهر موقعي على جوجل؟",                                  a:"نعم. كل موقع يأتي مع SEO أساسي. Pro و Premium يشملان SEO متقدم." },
    { q:"هل سيعمل موقعي على الموبايل؟",                              a:"متجاوب 100%. أكثر من 70% من الزيارات من الموبايل — كل موقع مهيأ بالكامل." },
    { q:"ماذا لو لم أكن راضياً؟",                                     a:"نعمل حتى ترضى 100%. المراجعات مشمولة في كل باقة." },
    { q:"كيف أبدأ مشروعي الآن؟",                                     a:"رسالة واحدة على واتساب تكفي. أرسل فكرتك ونرد عليك خلال ساعة." },
  ],
};
