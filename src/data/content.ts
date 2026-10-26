export type Language = 'ar' | 'en';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'strategy' | 'design' | 'content' | 'social' | 'ads' | 'analytics' | 'web';
  features: string[];
  tag: string;
  highlightBadge?: string;
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  period: string;
  isPopular?: boolean;
  posts: number;
  stories: number;
  reels: number;
  features: string[];
  posterPath: string;
}

export interface ClientPoster {
  id: string;
  title: string;
  file: string;
  thumb: string;
  width: number;
  height: number;
}

export interface ClientVideo {
  id: string;
  title: string;
  file: string;
  thumb: string;
  width: number;
  height: number;
}

export interface ClientItem {
  id: string;
  name: string;
  arabicName: string;
  category: string;
  categorySlug: 'restaurants' | 'cosmetics' | 'clinics' | 'industry' | 'tech' | 'coaching';
  logo: string;
  tagline: string;
  bio: string;
  accentColor: 'orange' | 'amber' | 'electric' | 'emerald' | 'rose';
  servicesDelivered: string[];
  posters: ClientPoster[];
  videos: ClientVideo[];
  lightModeInverted?: boolean;
}

export interface FeedbackItem {
  id: string;
  clientName: string;
  clientCategory: string;
  quote: string;
  summary: string;
  image: string;
  rating: number;
  badge: string;
}

export const encodeAssetUrl = (rawPath: string): string => {
  if (!rawPath) return '';
  return rawPath
    .split('/')
    .map((segment) =>
      segment
        ? encodeURIComponent(segment)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
        : ''
    )
    .join('/');
};

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'all' | 'restaurants' | 'cosmetics' | 'clinics' | 'fashion' | 'realestate' | 'tech';
  result: string;
  resultLabel: string;
  description: string;
  image: string;
  roas?: string;
  growth?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  quote: string;
}

export const SITE_DATA = {
  name: 'OUT ZONE',
  domain: 'outzone-kw.com',
  tagline: 'BEYOND LIMITS. BEYOND IMAGINATION.',
  heroHeadline: 'نحوّل حضورك الرقمي حق نمو صجي ومبيعات ما توقف',
  heroSubtitle: 'نبتكر لك حلول تسويقية متكاملة، مواقع إلكترونية احترافية، ومحتوى إبداعي يخلّي مشروعك يوصل حق جمهورك الصح بالكويت ويضاعف أرباحك بأرقام تشوفها بعينك.',
  phoneKuwait: '+201067989456',
  whatsappKuwait: '201067989456',
  email: 'info@outzone-kw.com',
  instagram: '@outzone',
  stats: [
    { value: 120, prefix: '+', label: 'عميل وبراند يثقون فينا', sub: 'شراكة مستمرة ونجاح مشترك' },
    { value: 350, prefix: '+', label: 'حملة إعلانية ناجحة', sub: 'بمختلف المنصات والقطاعات' },
    { value: 2.5, suffix: 'M+', label: 'وصول شهري للجمهور', sub: 'تفاعل صجي ومستهدف بدقة' },
    { value: 85, suffix: '%+', label: 'نسبة رضا عملائنا', sub: 'نمو مستمر وتجديد عقود' },
  ],
};

export const openWhatsAppDirect = (topic?: string, lang: Language = 'ar') => {
  const baseMsg =
    lang === 'en'
      ? topic
        ? `Hello OUT ZONE team 👋, I would like to inquire and get started regarding: ${topic}`
        : 'Hello OUT ZONE team 👋, I would like to inquire about your digital marketing packages & website development services.'
      : topic
      ? `قوة فريق OUT ZONE 👋، حاب أستفسر وأبدي معاكم بخصوص: ${topic}`
      : 'قوة فريق OUT ZONE 👋، حاب أستفسر عن باقات وخدمات التسويق الرقمي وتصميم المواقع.';
  const url = `https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent(baseMsg)}`;
  window.open(url, '_blank');
};

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'تصميم وإنشاء مواقع إلكترونية احترافية + إيميل بزنس رسمي',
    description: 'نصمم ونبرمج لك موقع إلكتروني احترافي أو متجر إلكتروني متكامل سريع وعصري يشتغل بأعلى كفاءة على التليفونات والكمبيوتر، ويعكس فخامة مشروعك ويحول الزوار حق زباين دائمين — وييجي معاه إيميل بزنس رسمي باسم شركتك (info@yourbrand.com) يعطي براندك هيبة ومصداقية رسمية جدام عملائك.',
    iconName: 'web',
    features: [
      'تصميم وبرمجة مواقع شركات ومتاجر إلكترونية عصرية وسريعة',
      'إيميل بزنس رسمي احترافي باسم دومين شركتك (Official Business Email)',
      'تصميم متجاوب 100% مع كل التليفونات والتابلت والكمبيوتر (UI/UX)',
      'تهيئة كاملة لمحركات البحث (SEO) وربط مع جوجل كونسول والواتساب'
    ],
    tag: 'مواقع + إيميل رسمي',
    highlightBadge: 'شامل إيميل بزنس رسمي باسم شركتك ✉️'
  },
  {
    id: 'strategy',
    title: 'الاستراتيجية والخطة التسويقية',
    description: 'نرسم لك خطة تسويقية مدروسة مبنية على فهم عميق للسوق الكويتي والخليجي وتحليل المنافسين عشان نحقق أهدافك البيعية بأسرع وقت.',
    iconName: 'strategy',
    features: ['دراسة السوق وتحليل المنافسين بدقة', 'تحديد الجمهور المستهدف اللي يشتري', 'خطة محتوى وحملات شهرية وربع سنوية', 'تحديد مؤشرات الأداء وقياس النتائج KPIs'],
    tag: 'تخطيط وأهداف'
  },
  {
    id: 'design',
    title: 'التصميم الإبداعي والهوية البصرية',
    description: 'تصاميم إعلانية تفتح النفس وهوية بصرية فخمة تبرز قوة براندك وتشد انتباه العميل من أول نظرة وتخليه يطلب منك.',
    iconName: 'design',
    features: ['تصاميم بوستات وستوريات راقية ومبتكرة', 'تصميم هويات بصرية وشعارات احترافية', 'بنرات إعلانية للعروض والخصومات الموسمية', 'تعديل وإبراز صور المنتجات بأعلى جودة'],
    tag: 'هوية وتصاميم'
  },
  {
    id: 'content',
    title: 'صناعة المحتوى ومونتاج الريلز',
    description: 'إنتاج فيديوهات ريلز احترافية، تصوير ومونتاج سينمائي، وموشن جرافيك بأسلوب عصري يلمس اهتمام جمهورك ويخليهم يتفاعلون معاك.',
    iconName: 'content',
    features: ['تصوير ومونتاج ريلز وتيك توك بجودة 4K', 'كتابة سكريبتات وأفكار إعلانية بيعية', 'موشن جرافيك إعلاني تفاعلي وجذاب', 'إبراز تفاصيل منتجاتك وخدماتك بأسلوب مشوق'],
    tag: 'فيديو وريلز'
  },
  {
    id: 'social',
    title: 'إدارة حسابات السوشيال ميديا',
    description: 'نشيل عنك تعب إدارة حسابات انستقرام وتيك توك وسناب شات بالكامل، من كتابة الكابشن وجدولة البوستات لي متابعة التفاعل وتطوير الحساب.',
    iconName: 'social',
    features: ['جدولة ونشر مستمر ومنظم طول الشهر', 'كتابة كابشن تسويقي بلهجة قريبة من الناس', 'تطوير شكل البروفايل والبايو والهايلايت', 'بناء مجتمع متفاعل ووفي حق علامتك التجارية'],
    tag: 'إدارة متكاملة'
  },
  {
    id: 'ads',
    title: 'الإعلانات الممولة (Media Buying)',
    description: 'نطلق وندير حملاتك الإعلانية الممولة على Meta و TikTok و Snapchat و Google Ads باستهداف ذكي يحقق لك أعلى مبيعات وأقوى عائد على كل دينار تدفعه.',
    iconName: 'ads',
    features: ['استهداف دقيق للجمهور المهتم بالشراء فعلياً', 'اختبار أفضل الإعلانات لزيادة التحويلات A/B Testing', 'إعادة استهداف الزوار والعملاء المحتملين Retargeting', 'تقليل تكلفة النقرة والطلب وزيادة الأرباح'],
    tag: 'حملات ممولة'
  },
  {
    id: 'analytics',
    title: 'التحليل والتقارير الدورية',
    description: 'تقارير شهرية واضحة وشفافة بالأرقام تبيّن لك تطور حساباتك، حجم التفاعل، ونتائج الحملات الإعلانية مع توصيات مستمرة لتطوير الشغل.',
    iconName: 'analytics',
    features: ['تقارير أداء شهرية مفصلة وواضحة بالأرقام', 'متابعة مستمرة لأداء الحملات والمبيعات', 'قياس العائد الحقيقي على ميزانية الإعلانات ROI', 'توصيات عملية لتطوير خطة الشهر الياي'],
    tag: 'شفافية وأرقام'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'basic',
    name: 'الباقة الأساسية',
    subtitle: 'انطلاقة قوية ومرتبة لبداية حضور احترافي',
    price: 40,
    period: 'شهرياً',
    posts: 17,
    stories: 17,
    reels: 8,
    features: [
      '17 بوست شهرياً بتصاميم احترافية تفتح النفس',
      '17 ستوري شهرياً متجددة وتفاعلية',
      '8 فيديوهات ريلز شهرياً مع مونتاج جذاب',
      'تصاميم متناسقة مع هوية مشروعك',
      'كتابة المحتوى (الكابشن) بأسلوب بيعي مشوق',
      'إدارة الحسابات وجدولة النشر بانتظام',
      'تقرير شهري واضح لمتابعة الأداء'
    ],
    posterPath: '/assets/packages/package-basic.png'
  },
  {
    id: 'medium',
    name: 'الباقة المتوسطة',
    subtitle: 'الخيار الأفضل لمضاعفة المبيعات والتفاعل السريع',
    price: 50,
    period: 'شهرياً',
    isPopular: true,
    posts: 20,
    stories: 20,
    reels: 15,
    features: [
      '20 بوست شهرياً بتصاميم مميزة عالية الجودة',
      '20 ستوري شهرياً تزيد التفاعل والطلبات',
      '15 فيديو ريلز احترافي بمونتاج عصري يشد الانتباه',
      'تصاميم إعلانية مبتكرة تبرز قوة براندك',
      'مونتاج فيديوهات قصيرة وطويلة باحترافية',
      'كتابة كابشن تسويقي وأفكار محتوى إبداعية',
      'إدارة متكاملة لحساباتك يومياً',
      'إدارة الحملات الإعلانية الممولة (Meta & TikTok)',
      'خطة تسويقية مفصلة على مقاس مشروعك',
      'تقارير شهرية تفصيلية بالأرقام والنتائج'
    ],
    posterPath: '/assets/packages/package-medium.png'
  },
  {
    id: 'pro',
    name: 'الباقة الاحترافية VIP',
    subtitle: 'الحل الشامل للصدارة والسيطرة على السوق بمجالك',
    price: 70,
    period: 'شهرياً',
    posts: 30,
    stories: 30,
    reels: 30,
    features: [
      '30 بوست شهرياً بتصاميم سينمائية فاخرة (يومي)',
      '30 ستوري تفاعلية يومية ومستمرة طول الشهر',
      '30 فيديو ريلز شهرياً بمونتاج متقدم ومؤثرات',
      'تصاميم احترافية عالية الجودة تخدم كل عروضك',
      'مونتاج فيديوهات قصيرة وطويلة بدقة 4K',
      'كتابة محتوى متكامل وسيناريوهات إقناع بيعية',
      'إدارة شاملة لكافة حساباتك الرقمية',
      'إدارة إعلانات ممولة متقدمة (Meta, TikTok, Google)',
      'استراتيجية تسويقية متكاملة وخطة نمو شاملة',
      'تحليل ومتابعة الأداء بشكل دوري ومباشر',
      'جلسة استشارية شهرية لتطوير المبيعات',
      'تقارير تفصيلية لقياس العائد على الاستثمار ROI'
    ],
    posterPath: '/assets/packages/package-pro.png'
  }
];

export const CLIENTS: ClientItem[] = [
  {
    "id": "bunhood",
    "name": "bunhood Burgers",
    "arabicName": "مطعم بن هود برجر",
    "category": "مطاعم وكافيهات — برجر مختص",
    "categorySlug": "restaurants",
    "logo": "/assets/clients/client-bunhood.png",
    "tagline": "BUNS • BEEF • BALANCE — تجربة البرجر الأصلي بطعم لا يُنسى",
    "bio": "علامة متخصصة في تقديم البرجر الطازج المحضر يومياً بأجود أنواع اللحوم والخبز الطري. عملنا مع بن هود على بناء هوية بصرية شهية وجذابة على منصات التواصل الاجتماعي، وتصميم بوسترات إعلانية احترافية، وإنتاج فيديوهات ريلز سينمائية تبرز تفاصيل التحضير وجودة المنتج لزيادة المبيعات والطلبات.",
    "accentColor": "orange",
    "servicesDelivered": [
      "تصميم بوسترات إعلانية",
      "تصوير ومونتاج ريلز",
      "إدارة السوشيال ميديا",
      "حملات إعلانية ممولة"
    ],
    "posters": [
      {
        "id": "bunhood-poster-1",
        "title": "بن هود برجر — تصميم #1",
        "file": "/assets/design-thumbs/bunhood/poster-1.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-1.jpg",
        "width": 1080,
        "height": 1350
      },
      {
        "id": "bunhood-poster-2",
        "title": "بن هود برجر — تصميم #2",
        "file": "/assets/design-thumbs/bunhood/poster-2.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-2.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-3",
        "title": "بن هود برجر — تصميم #3",
        "file": "/assets/design-thumbs/bunhood/poster-3.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-3.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-4",
        "title": "بن هود برجر — تصميم #4",
        "file": "/assets/design-thumbs/bunhood/poster-4.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-4.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-5",
        "title": "بن هود برجر — تصميم #5",
        "file": "/assets/design-thumbs/bunhood/poster-5.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-5.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-6",
        "title": "بن هود برجر — تصميم #6",
        "file": "/assets/design-thumbs/bunhood/poster-6.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-6.jpg",
        "width": 1125,
        "height": 1398
      },
      {
        "id": "bunhood-poster-7",
        "title": "بن هود برجر — تصميم #7",
        "file": "/assets/design-thumbs/bunhood/poster-7.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-7.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-8",
        "title": "بن هود برجر — تصميم #8",
        "file": "/assets/design-thumbs/bunhood/poster-8.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-8.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-9",
        "title": "بن هود برجر — تصميم #9",
        "file": "/assets/design-thumbs/bunhood/poster-9.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-9.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-10",
        "title": "بن هود برجر — تصميم #10",
        "file": "/assets/design-thumbs/bunhood/poster-10.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-10.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-11",
        "title": "بن هود برجر — تصميم #11",
        "file": "/assets/design-thumbs/bunhood/poster-11.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-11.jpg",
        "width": 900,
        "height": 1600
      },
      {
        "id": "bunhood-poster-12",
        "title": "بن هود برجر — تصميم #12",
        "file": "/assets/design-thumbs/bunhood/poster-12.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-12.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-13",
        "title": "بن هود برجر — تصميم #13",
        "file": "/assets/design-thumbs/bunhood/poster-13.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-13.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-14",
        "title": "بن هود برجر — تصميم #14",
        "file": "/assets/design-thumbs/bunhood/poster-14.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-14.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-15",
        "title": "بن هود برجر — تصميم #15",
        "file": "/assets/design-thumbs/bunhood/poster-15.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-15.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-16",
        "title": "بن هود برجر — تصميم #16",
        "file": "/assets/design-thumbs/bunhood/poster-16.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-16.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-17",
        "title": "بن هود برجر — تصميم #17",
        "file": "/assets/design-thumbs/bunhood/poster-17.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-17.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-18",
        "title": "بن هود برجر — تصميم #18",
        "file": "/assets/design-thumbs/bunhood/poster-18.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-18.jpg",
        "width": 1122,
        "height": 1402
      }
    ],
    "videos": [
      {
        "id": "bunhood-video-1",
        "title": "بن هود برجر — فيديو ريلز #1",
        "file": "/assets/client-videos/bunhood/vid-1.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-1.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-2",
        "title": "بن هود برجر — فيديو ريلز #2",
        "file": "/assets/client-videos/bunhood/vid-2.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-2.jpg",
        "width": 576,
        "height": 1024
      },
      {
        "id": "bunhood-video-3",
        "title": "بن هود برجر — فيديو ريلز #3",
        "file": "/assets/client-videos/bunhood/vid-3.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-3.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-4",
        "title": "بن هود برجر — فيديو ريلز #4",
        "file": "/assets/client-videos/bunhood/vid-4.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-4.jpg",
        "width": 464,
        "height": 832
      },
      {
        "id": "bunhood-video-5",
        "title": "بن هود برجر — فيديو ريلز #5",
        "file": "/assets/client-videos/bunhood/vid-5.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "bunhood-video-6",
        "title": "بن هود برجر — فيديو ريلز #6",
        "file": "/assets/client-videos/bunhood/vid-6.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "bunhood-video-7",
        "title": "بن هود برجر — فيديو ريلز #7",
        "file": "/assets/client-videos/bunhood/vid-7.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-7.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-8",
        "title": "بن هود برجر — فيديو ريلز #8",
        "file": "/assets/client-videos/bunhood/vid-8.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-8.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-9",
        "title": "بن هود برجر — فيديو ريلز #9",
        "file": "/assets/client-videos/bunhood/vid-9.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-9.jpg",
        "width": 1080,
        "height": 1920
      }
    ]
  },
  {
    "id": "lucin",
    "name": "Atyab LUCIN",
    "arabicName": "أطياب لوسين للعطور",
    "category": "عطور فاخرة وبخور وهدايا VIP",
    "categorySlug": "cosmetics",
    "logo": "/assets/clients/client-lucin.png",
    "tagline": "سرّها بالتفاصيل... عطور ونقصات ملكية تليق بذوقك الرفيع",
    "bio": "دار عطور راقية متخصصة في العطور الشرقية والفرنسية الفاخرة وبوكسات الهدايا الملكية (نقصات لوسين VIP). قمنا بصياغة محتوى بصري يعكس الفخامة والرقي من خلال تصميم بوسترات إعلانية للعطور والباقات الموسمية، إلى جانب إنتاج فيديوهات ريلز تبرز فخامة التغليف وثبات العطور.",
    "accentColor": "amber",
    "servicesDelivered": [
      "تصاميم منتجات فاخرة",
      "إنتاج فيديوهات ريلز",
      "حملات المتجر الإلكتروني",
      "هوية بصرية راقية"
    ],
    "posters": [
      {
        "id": "lucin-poster-1",
        "title": "أطياب لوسين للعطور — تصميم #1",
        "file": "/assets/design-thumbs/lucin/poster-1.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-1.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-2",
        "title": "أطياب لوسين للعطور — تصميم #2",
        "file": "/assets/design-thumbs/lucin/poster-2.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-2.jpg",
        "width": 1092,
        "height": 1440
      },
      {
        "id": "lucin-poster-3",
        "title": "أطياب لوسين للعطور — تصميم #3",
        "file": "/assets/design-thumbs/lucin/poster-3.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-3.jpg",
        "width": 1170,
        "height": 1180
      },
      {
        "id": "lucin-poster-4",
        "title": "أطياب لوسين للعطور — تصميم #4",
        "file": "/assets/design-thumbs/lucin/poster-4.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-4.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-5",
        "title": "أطياب لوسين للعطور — تصميم #5",
        "file": "/assets/design-thumbs/lucin/poster-5.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "lucin-poster-6",
        "title": "أطياب لوسين للعطور — تصميم #6",
        "file": "/assets/design-thumbs/lucin/poster-6.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-6.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-7",
        "title": "أطياب لوسين للعطور — تصميم #7",
        "file": "/assets/design-thumbs/lucin/poster-7.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-7.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-8",
        "title": "أطياب لوسين للعطور — تصميم #8",
        "file": "/assets/design-thumbs/lucin/poster-8.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "lucin-poster-9",
        "title": "أطياب لوسين للعطور — تصميم #9",
        "file": "/assets/design-thumbs/lucin/poster-9.jpg",
        "thumb": "/assets/design-thumbs/lucin/poster-9.jpg",
        "width": 1254,
        "height": 1254
      }
    ],
    "videos": [
      {
        "id": "lucin-video-1",
        "title": "أطياب لوسين للعطور — فيديو ريلز #1",
        "file": "/assets/client-videos/lucin/vid-1.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-2",
        "title": "أطياب لوسين للعطور — فيديو ريلز #2",
        "file": "/assets/client-videos/lucin/vid-2.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-2.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "lucin-video-3",
        "title": "أطياب لوسين للعطور — فيديو ريلز #3",
        "file": "/assets/client-videos/lucin/vid-3.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-3.jpg",
        "width": 480,
        "height": 848
      },
      {
        "id": "lucin-video-4",
        "title": "أطياب لوسين للعطور — فيديو ريلز #4",
        "file": "/assets/client-videos/lucin/vid-4.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-5",
        "title": "أطياب لوسين للعطور — فيديو ريلز #5",
        "file": "/assets/client-videos/lucin/vid-5.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-6",
        "title": "أطياب لوسين للعطور — فيديو ريلز #6",
        "file": "/assets/client-videos/lucin/vid-6.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-6.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "lucin-video-7",
        "title": "أطياب لوسين للعطور — فيديو ريلز #7",
        "file": "/assets/client-videos/lucin/vid-7.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-8",
        "title": "أطياب لوسين للعطور — فيديو ريلز #8",
        "file": "/assets/client-videos/lucin/vid-8.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-8.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "lucin-video-9",
        "title": "أطياب لوسين للعطور — فيديو ريلز #9",
        "file": "/assets/client-videos/lucin/vid-9.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-9.jpg",
        "width": 1080,
        "height": 1920
      }
    ]
  },
  {
    "id": "alkindi",
    "name": "مركز الكندي ALKINDI",
    "arabicName": "مركز الكندي الطبي والعلاج الطبيعي",
    "category": "عيادات ومراكز طبية وعلاج طبيعي",
    "categorySlug": "clinics",
    "logo": "/assets/clients/client-alkindi.png",
    "tagline": "رعاية طبية وتأهيلية متكاملة بأحدث التقنيات العلاجية",
    "bio": "مركز طبي متخصص في العلاج الطبيعي، تأهيل الإصابات الرياضية، وعلاج آلام العمود الفقري والمفاصل والصداع المزمن (قسم للرجال وقسم للنساء). طورنا للمركز سلسلة واسعة من البوسترات الطبية التوعوية والفيديوهات التثقيفية والترويجية التي تبني الثقة مع المراجعين وتضاعف حجوزات الاستشارات.",
    "accentColor": "electric",
    "servicesDelivered": [
      "محتوى طبي توعوي",
      "تصميم 28 بوستر احترافي",
      "إنتاج فيديوهات طبية",
      "حملات استقطاب المراجعين"
    ],
    "posters": [
      {
        "id": "alkindi-poster-1",
        "title": "مركز الكندي الطبي — تصميم #1",
        "file": "/assets/design-thumbs/alkindi/poster-1.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-1.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-2",
        "title": "مركز الكندي الطبي — تصميم #2",
        "file": "/assets/design-thumbs/alkindi/poster-2.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-2.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-3",
        "title": "مركز الكندي الطبي — تصميم #3",
        "file": "/assets/design-thumbs/alkindi/poster-3.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-3.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-4",
        "title": "مركز الكندي الطبي — تصميم #4",
        "file": "/assets/design-thumbs/alkindi/poster-4.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-4.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-5",
        "title": "مركز الكندي الطبي — تصميم #5",
        "file": "/assets/design-thumbs/alkindi/poster-5.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-5.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-6",
        "title": "مركز الكندي الطبي — تصميم #6",
        "file": "/assets/design-thumbs/alkindi/poster-6.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-6.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-7",
        "title": "مركز الكندي الطبي — تصميم #7",
        "file": "/assets/design-thumbs/alkindi/poster-7.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-7.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-8",
        "title": "مركز الكندي الطبي — تصميم #8",
        "file": "/assets/design-thumbs/alkindi/poster-8.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-8.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-9",
        "title": "مركز الكندي الطبي — تصميم #9",
        "file": "/assets/design-thumbs/alkindi/poster-9.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-9.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-10",
        "title": "مركز الكندي الطبي — تصميم #10",
        "file": "/assets/design-thumbs/alkindi/poster-10.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-10.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-11",
        "title": "مركز الكندي الطبي — تصميم #11",
        "file": "/assets/design-thumbs/alkindi/poster-11.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-11.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-12",
        "title": "مركز الكندي الطبي — تصميم #12",
        "file": "/assets/design-thumbs/alkindi/poster-12.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-12.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-13",
        "title": "مركز الكندي الطبي — تصميم #13",
        "file": "/assets/design-thumbs/alkindi/poster-13.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-13.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-14",
        "title": "مركز الكندي الطبي — تصميم #14",
        "file": "/assets/design-thumbs/alkindi/poster-14.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-14.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-15",
        "title": "مركز الكندي الطبي — تصميم #15",
        "file": "/assets/design-thumbs/alkindi/poster-15.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-15.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-16",
        "title": "مركز الكندي الطبي — تصميم #16",
        "file": "/assets/design-thumbs/alkindi/poster-16.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-16.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-17",
        "title": "مركز الكندي الطبي — تصميم #17",
        "file": "/assets/design-thumbs/alkindi/poster-17.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-17.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-18",
        "title": "مركز الكندي الطبي — تصميم #18",
        "file": "/assets/design-thumbs/alkindi/poster-18.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-18.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-19",
        "title": "مركز الكندي الطبي — تصميم #19",
        "file": "/assets/design-thumbs/alkindi/poster-19.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-19.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-20",
        "title": "مركز الكندي الطبي — تصميم #20",
        "file": "/assets/design-thumbs/alkindi/poster-20.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-20.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-21",
        "title": "مركز الكندي الطبي — تصميم #21",
        "file": "/assets/design-thumbs/alkindi/poster-21.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-21.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-22",
        "title": "مركز الكندي الطبي — تصميم #22",
        "file": "/assets/design-thumbs/alkindi/poster-22.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-22.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-23",
        "title": "مركز الكندي الطبي — تصميم #23",
        "file": "/assets/design-thumbs/alkindi/poster-23.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-23.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-24",
        "title": "مركز الكندي الطبي — تصميم #24",
        "file": "/assets/design-thumbs/alkindi/poster-24.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-24.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-25",
        "title": "مركز الكندي الطبي — تصميم #25",
        "file": "/assets/design-thumbs/alkindi/poster-25.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-25.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-26",
        "title": "مركز الكندي الطبي — تصميم #26",
        "file": "/assets/design-thumbs/alkindi/poster-26.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-26.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-27",
        "title": "مركز الكندي الطبي — تصميم #27",
        "file": "/assets/design-thumbs/alkindi/poster-27.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-27.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-28",
        "title": "مركز الكندي الطبي — تصميم #28",
        "file": "/assets/design-thumbs/alkindi/poster-28.jpg",
        "thumb": "/assets/design-thumbs/alkindi/poster-28.jpg",
        "width": 1254,
        "height": 1254
      }
    ],
    "videos": [
      {
        "id": "alkindi-video-1",
        "title": "مركز الكندي الطبي — فيديو ريلز #1",
        "file": "/assets/client-videos/alkindi/vid-1.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-2",
        "title": "مركز الكندي الطبي — فيديو ريلز #2",
        "file": "/assets/client-videos/alkindi/vid-2.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-3",
        "title": "مركز الكندي الطبي — فيديو ريلز #3",
        "file": "/assets/client-videos/alkindi/vid-3.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-4",
        "title": "مركز الكندي الطبي — فيديو ريلز #4",
        "file": "/assets/client-videos/alkindi/vid-4.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-5",
        "title": "مركز الكندي الطبي — فيديو ريلز #5",
        "file": "/assets/client-videos/alkindi/vid-5.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-5.jpg",
        "width": 816,
        "height": 464
      },
      {
        "id": "alkindi-video-6",
        "title": "مركز الكندي الطبي — فيديو ريلز #6",
        "file": "/assets/client-videos/alkindi/vid-6.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-6.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "alkindi-video-7",
        "title": "مركز الكندي الطبي — فيديو ريلز #7",
        "file": "/assets/client-videos/alkindi/vid-7.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-8",
        "title": "مركز الكندي الطبي — فيديو ريلز #8",
        "file": "/assets/client-videos/alkindi/vid-8.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-8.jpg",
        "width": 720,
        "height": 1280
      }
    ]
  },
  {
    "id": "fanar",
    "name": "الفنار لطب الأسنان",
    "arabicName": "عيادة الفنار لطب وتجميل الأسنان",
    "category": "عيادات طب وتجميل وزراعة الأسنان",
    "categorySlug": "clinics",
    "logo": "/assets/clients/client-fanar.png",
    "tagline": "لصحة فمك وابتسامة مشرقة تدوم بثقة وأمان",
    "bio": "عيادة رائدة في طب وتجميل الأسنان، ابتسامة هوليوود، زراعة الأسنان، وعلاج الجذور بأحدث الأجهزة المعقمة. صممنا للعيادة هوية بصرية طبية مريحة، مع بوسترات توعوية وعروض تجميلية وفيديوهات ريلز توضح جودة الرعاية الطبية والنتائج المميزة.",
    "accentColor": "electric",
    "servicesDelivered": [
      "تصاميم طبية وتجميلية",
      "مونتاج ريلز العيادة",
      "إدارة حسابات التواصل",
      "إعلانات حجوزات العيادة"
    ],
    "posters": [
      {
        "id": "fanar-poster-1",
        "title": "عيادة الفنار لطب الأسنان — تصميم #1",
        "file": "/assets/design-thumbs/fanar/poster-1.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-1.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-2",
        "title": "عيادة الفنار لطب الأسنان — تصميم #2",
        "file": "/assets/design-thumbs/fanar/poster-2.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-2.jpg",
        "width": 1093,
        "height": 1439
      },
      {
        "id": "fanar-poster-3",
        "title": "عيادة الفنار لطب الأسنان — تصميم #3",
        "file": "/assets/design-thumbs/fanar/poster-3.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-3.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-4",
        "title": "عيادة الفنار لطب الأسنان — تصميم #4",
        "file": "/assets/design-thumbs/fanar/poster-4.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-4.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-5",
        "title": "عيادة الفنار لطب الأسنان — تصميم #5",
        "file": "/assets/design-thumbs/fanar/poster-5.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-6",
        "title": "عيادة الفنار لطب الأسنان — تصميم #6",
        "file": "/assets/design-thumbs/fanar/poster-6.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-6.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-7",
        "title": "عيادة الفنار لطب الأسنان — تصميم #7",
        "file": "/assets/design-thumbs/fanar/poster-7.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-7.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-8",
        "title": "عيادة الفنار لطب الأسنان — تصميم #8",
        "file": "/assets/design-thumbs/fanar/poster-8.jpg",
        "thumb": "/assets/design-thumbs/fanar/poster-8.jpg",
        "width": 1086,
        "height": 1448
      }
    ],
    "videos": [
      {
        "id": "fanar-video-1",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #1",
        "file": "/assets/client-videos/fanar/vid-1.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-2",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #2",
        "file": "/assets/client-videos/fanar/vid-2.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-3",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #3",
        "file": "/assets/client-videos/fanar/vid-3.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-4",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #4",
        "file": "/assets/client-videos/fanar/vid-4.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-5",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #5",
        "file": "/assets/client-videos/fanar/vid-5.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-5.jpg",
        "width": 576,
        "height": 1024
      },
      {
        "id": "fanar-video-6",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #6",
        "file": "/assets/client-videos/fanar/vid-6.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-6.jpg",
        "width": 816,
        "height": 560
      },
      {
        "id": "fanar-video-7",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #7",
        "file": "/assets/client-videos/fanar/vid-7.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-8",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #8",
        "file": "/assets/client-videos/fanar/vid-8.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-8.jpg",
        "width": 576,
        "height": 1024
      },
      {
        "id": "fanar-video-9",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #9",
        "file": "/assets/client-videos/fanar/vid-9.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-9.jpg",
        "width": 576,
        "height": 1024
      }
    ]
  },
  {
    "id": "athar",
    "name": "شركة مصنع أثر",
    "arabicName": "شركة مصنع أثر للتغليف والمطبوعات",
    "category": "صناعة وتغليف ومطبوعات العلامات التجارية",
    "categorySlug": "industry",
    "logo": "/assets/clients/client-athar.png",
    "tagline": "كل اللي محتاجه في مكان واحد — حلول تغليف وطباعة بمعايير عالمية",
    "bio": "مصنع متخصص في تقديم حلول التغليف المتكاملة للشركات والمطاعم والعلامات التجارية: من طباعة البكجات والعلب الفاخرة، إلى طباعة العبوات، الأكياس، والاستيكرات المخصصة بجودة عالية. أبدعنا في إبراز دقة وجودة خطوط الإنتاج والمنتجات النهائية عبر تصاميم احترافية وفيديوهات توثق فخامة التصنيع.",
    "accentColor": "orange",
    "servicesDelivered": [
      "تصاميم B2B احترافية",
      "تصوير ومونتاج خطوط الإنتاج",
      "إبراز حلول التغليف",
      "حملات استقطاب الشركات"
    ],
    "posters": [
      {
        "id": "athar-poster-1",
        "title": "شركة مصنع أثر — تصميم #1",
        "file": "/assets/design-thumbs/athar/poster-1.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-1.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-2",
        "title": "شركة مصنع أثر — تصميم #2",
        "file": "/assets/design-thumbs/athar/poster-2.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-2.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-3",
        "title": "شركة مصنع أثر — تصميم #3",
        "file": "/assets/design-thumbs/athar/poster-3.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-3.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-4",
        "title": "شركة مصنع أثر — تصميم #4",
        "file": "/assets/design-thumbs/athar/poster-4.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-4.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-5",
        "title": "شركة مصنع أثر — تصميم #5",
        "file": "/assets/design-thumbs/athar/poster-5.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-5.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-6",
        "title": "شركة مصنع أثر — تصميم #6",
        "file": "/assets/design-thumbs/athar/poster-6.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-6.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-7",
        "title": "شركة مصنع أثر — تصميم #7",
        "file": "/assets/design-thumbs/athar/poster-7.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-7.jpg",
        "width": 1121,
        "height": 1403
      },
      {
        "id": "athar-poster-8",
        "title": "شركة مصنع أثر — تصميم #8",
        "file": "/assets/design-thumbs/athar/poster-8.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-8.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-9",
        "title": "شركة مصنع أثر — تصميم #9",
        "file": "/assets/design-thumbs/athar/poster-9.jpg",
        "thumb": "/assets/design-thumbs/athar/poster-9.jpg",
        "width": 1254,
        "height": 1254
      }
    ],
    "videos": [
      {
        "id": "athar-video-1",
        "title": "شركة مصنع أثر — فيديو ريلز #1",
        "file": "/assets/client-videos/athar/vid-1.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-2",
        "title": "شركة مصنع أثر — فيديو ريلز #2",
        "file": "/assets/client-videos/athar/vid-2.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-3",
        "title": "شركة مصنع أثر — فيديو ريلز #3",
        "file": "/assets/client-videos/athar/vid-3.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-4",
        "title": "شركة مصنع أثر — فيديو ريلز #4",
        "file": "/assets/client-videos/athar/vid-4.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-4.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-5",
        "title": "شركة مصنع أثر — فيديو ريلز #5",
        "file": "/assets/client-videos/athar/vid-5.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-5.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-6",
        "title": "شركة مصنع أثر — فيديو ريلز #6",
        "file": "/assets/client-videos/athar/vid-6.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-6.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-7",
        "title": "شركة مصنع أثر — فيديو ريلز #7",
        "file": "/assets/client-videos/athar/vid-7.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-8",
        "title": "شركة مصنع أثر — فيديو ريلز #8",
        "file": "/assets/client-videos/athar/vid-8.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-8.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-9",
        "title": "شركة مصنع أثر — فيديو ريلز #9",
        "file": "/assets/client-videos/athar/vid-9.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-9.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-10",
        "title": "شركة مصنع أثر — فيديو ريلز #10",
        "file": "/assets/client-videos/athar/vid-10.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-10.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-11",
        "title": "شركة مصنع أثر — فيديو ريلز #11",
        "file": "/assets/client-videos/athar/vid-11.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-11.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-12",
        "title": "شركة مصنع أثر — فيديو ريلز #12",
        "file": "/assets/client-videos/athar/vid-12.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-12.jpg",
        "width": 1080,
        "height": 1920
      }
    ]
  },
  {
    "id": "kemet",
    "name": "Kemet Systems",
    "arabicName": "كيميت سيستم للأنظمة الذكية",
    "category": "أنظمة كاشير POS وحلول برمجية ذكية",
    "categorySlug": "tech",
    "logo": "/assets/clients/client-kemet.png",
    "tagline": "كل هالأدوار بنظام واحد — من أول طلب إلى آخر قرار",
    "bio": "شركة تقنية رائدة تقدم أنظمة إدارة المطاعم، الكافيهات، الصالونات، والمحلات التجارية. يربط النظام بين الكاشير، المطبخ، المخزون، والتوصيل مع تقارير مالية لحظية. صممنا لهم حملات تسويقية متكاملة من بوسترات توضيحية لواجهات النظام وفيديوهات موشن وريلز تشرح مزايا النظام بأسلوب بيعي مقنع.",
    "accentColor": "emerald",
    "servicesDelivered": [
      "تصاميم تقنية UI/UX",
      "فيديوهات شرح النظام",
      "حملات مبيعات الأنظمة",
      "كتابة محتوى تسويقي B2B"
    ],
    "posters": [
      {
        "id": "kemet-poster-1",
        "title": "نظام Kemet System الذكي — تصميم #1",
        "file": "/assets/design-thumbs/kemet/poster-1.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-1.jpg",
        "width": 1088,
        "height": 1445
      },
      {
        "id": "kemet-poster-2",
        "title": "نظام Kemet System الذكي — تصميم #2",
        "file": "/assets/design-thumbs/kemet/poster-4.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-4.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "kemet-poster-3",
        "title": "نظام Kemet System الذكي — تصميم #3",
        "file": "/assets/design-thumbs/kemet/poster-5.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "kemet-poster-4",
        "title": "نظام Kemet System الذكي — تصميم #4",
        "file": "/assets/design-thumbs/kemet/poster-6.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-6.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "kemet-poster-5",
        "title": "نظام Kemet System الذكي — تصميم #5",
        "file": "/assets/design-thumbs/kemet/poster-2.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-2.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "kemet-poster-6",
        "title": "نظام Kemet System الذكي — تصميم #6",
        "file": "/assets/design-thumbs/kemet/poster-3.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-3.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "kemet-poster-7",
        "title": "نظام Kemet System الذكي — تصميم #7",
        "file": "/assets/design-thumbs/kemet/poster-7.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-7.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-8",
        "title": "نظام Kemet System الذكي — تصميم #8",
        "file": "/assets/design-thumbs/kemet/poster-8.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-9",
        "title": "نظام Kemet System الذكي — تصميم #9",
        "file": "/assets/design-thumbs/kemet/poster-9.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-9.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "kemet-poster-10",
        "title": "نظام Kemet System الذكي — تصميم #10",
        "file": "/assets/design-thumbs/kemet/poster-10.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-10.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-11",
        "title": "نظام Kemet System الذكي — تصميم #11",
        "file": "/assets/design-thumbs/kemet/poster-11.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-11.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-12",
        "title": "نظام Kemet System الذكي — تصميم #12",
        "file": "/assets/design-thumbs/kemet/poster-12.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-12.jpg",
        "width": 1144,
        "height": 1375
      },
      {
        "id": "kemet-poster-13",
        "title": "نظام Kemet System الذكي — تصميم #13",
        "file": "/assets/design-thumbs/kemet/poster-13.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-13.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-14",
        "title": "نظام Kemet System الذكي — تصميم #14",
        "file": "/assets/design-thumbs/kemet/poster-14.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-14.jpg",
        "width": 1145,
        "height": 1374
      }
    ],
    "videos": [
      {
        "id": "kemet-video-1",
        "title": "نظام Kemet System الذكي — فيديو ريلز #1",
        "file": "/assets/client-videos/kemet/vid-1.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-2",
        "title": "نظام Kemet System الذكي — فيديو ريلز #2",
        "file": "/assets/client-videos/kemet/vid-2.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-3",
        "title": "نظام Kemet System الذكي — فيديو ريلز #3",
        "file": "/assets/client-videos/kemet/vid-3.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-4",
        "title": "نظام Kemet System الذكي — فيديو ريلز #4",
        "file": "/assets/client-videos/kemet/vid-4.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-5",
        "title": "نظام Kemet System الذكي — فيديو ريلز #5",
        "file": "/assets/client-videos/kemet/vid-5.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-6",
        "title": "نظام Kemet System الذكي — فيديو ريلز #6",
        "file": "/assets/client-videos/kemet/vid-6.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-7",
        "title": "نظام Kemet System الذكي — فيديو ريلز #7",
        "file": "/assets/client-videos/kemet/vid-7.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-7.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "kemet-video-8",
        "title": "نظام Kemet System الذكي — فيديو ريلز #8",
        "file": "/assets/client-videos/kemet/vid-8.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-8.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-9",
        "title": "نظام Kemet System الذكي — فيديو ريلز #9",
        "file": "/assets/client-videos/kemet/vid-9.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-9.jpg",
        "width": 1080,
        "height": 1920
      }
    ]
  },
  {
    "id": "micros",
    "name": "MICROS Systems",
    "arabicName": "أنظمة مايكروس لنقاط البيع والإدارة",
    "category": "حلول تقنية وأنظمة إدارة المطاعم والصالونات",
    "categorySlug": "tech",
    "logo": "/assets/clients/client-micros.png",
    "tagline": "اربط كل أقسام مشروعك — نظام واحد وإدارة متكاملة",
    "bio": "منظومة نقاط البيع والإدارة السحابية المتكاملة (MICROS by Kemet System) المصممة لأصحاب المطاعم، الكافيهات، الصالونات، والمصانع لمتابعة المبيعات والمخزون وصلاحيات الموظفين بدقة متناهية. نفذنا للمنظومة سلسلة بوسترات إعلانية تركز على حلول مشاكل الإدارة اليومية مدعومة بفيديوهات إعلانية احترافية.",
    "accentColor": "emerald",
    "servicesDelivered": [
      "حملات إعلانية للتجار",
      "بوسترات حلول نقاط البيع",
      "فيديوهات ترويجية وريلز",
      "استراتيجية تسويق رقمي"
    ],
    "posters": [
      {
        "id": "micros-poster-1",
        "title": "أنظمة MICROS الذكية — تصميم #1",
        "file": "/assets/design-thumbs/kemet/poster-2.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-2.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-2",
        "title": "أنظمة MICROS الذكية — تصميم #2",
        "file": "/assets/design-thumbs/kemet/poster-3.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-3.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-3",
        "title": "أنظمة MICROS الذكية — تصميم #3",
        "file": "/assets/design-thumbs/kemet/poster-7.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-7.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-4",
        "title": "أنظمة MICROS الذكية — تصميم #4",
        "file": "/assets/design-thumbs/kemet/poster-8.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-5",
        "title": "أنظمة MICROS الذكية — تصميم #5",
        "file": "/assets/design-thumbs/kemet/poster-9.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-9.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-6",
        "title": "أنظمة MICROS الذكية — تصميم #6",
        "file": "/assets/design-thumbs/kemet/poster-10.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-10.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-7",
        "title": "أنظمة MICROS الذكية — تصميم #7",
        "file": "/assets/design-thumbs/kemet/poster-11.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-11.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-8",
        "title": "أنظمة MICROS الذكية — تصميم #8",
        "file": "/assets/design-thumbs/kemet/poster-12.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-12.jpg",
        "width": 1144,
        "height": 1375
      },
      {
        "id": "micros-poster-9",
        "title": "أنظمة MICROS الذكية — تصميم #9",
        "file": "/assets/design-thumbs/kemet/poster-13.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-13.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-10",
        "title": "أنظمة MICROS الذكية — تصميم #10",
        "file": "/assets/design-thumbs/kemet/poster-14.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-14.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-11",
        "title": "أنظمة MICROS الذكية — تصميم #11",
        "file": "/assets/design-thumbs/kemet/poster-1.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-1.jpg",
        "width": 1088,
        "height": 1445
      },
      {
        "id": "micros-poster-12",
        "title": "أنظمة MICROS الذكية — تصميم #12",
        "file": "/assets/design-thumbs/kemet/poster-4.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-4.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "micros-poster-13",
        "title": "أنظمة MICROS الذكية — تصميم #13",
        "file": "/assets/design-thumbs/kemet/poster-5.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "micros-poster-14",
        "title": "أنظمة MICROS الذكية — تصميم #14",
        "file": "/assets/design-thumbs/kemet/poster-6.jpg",
        "thumb": "/assets/design-thumbs/kemet/poster-6.jpg",
        "width": 1086,
        "height": 1448
      }
    ],
    "videos": [
      {
        "id": "micros-video-1",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #1",
        "file": "/assets/client-videos/kemet/vid-1.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-2",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #2",
        "file": "/assets/client-videos/kemet/vid-2.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-3",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #3",
        "file": "/assets/client-videos/kemet/vid-3.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-4",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #4",
        "file": "/assets/client-videos/kemet/vid-4.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-5",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #5",
        "file": "/assets/client-videos/kemet/vid-5.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-6",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #6",
        "file": "/assets/client-videos/kemet/vid-6.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-7",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #7",
        "file": "/assets/client-videos/kemet/vid-7.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-7.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "micros-video-8",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #8",
        "file": "/assets/client-videos/kemet/vid-8.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-8.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-9",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #9",
        "file": "/assets/client-videos/kemet/vid-9.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-9.jpg",
        "width": 1080,
        "height": 1920
      }
    ]
  },
  {
    "id": "nada",
    "name": "NADA Lifecoach",
    "arabicName": "الكوتش ندى — استشارات تربوية وتطوير ذات",
    "category": "استشارات تربوية وأسرية وتدريب لايف كوتش",
    "categorySlug": "coaching",
    "logo": "/assets/clients/client-nada.png",
    "tagline": "مساحة آمنة لبناء ثقة طفلك وتطوير الوعي التربوي والأسري",
    "bio": "مدربة حياة ومستشارة تربوية متخصصة في تعديل سلوك الأطفال، بناء الثقة بالنفس، وتمكين الأمهات من أساليب التربية الإيجابية الحديثة (بالتعاون مع Bloom Studio). عملنا مع الكوتش ندى على بناء هوية بصرية دافئة وملهمة، وتصميم بوسترات توعوية تلامس قلوب الأمهات، إلى جانب مونتاج فيديوهات ريلز تفاعلية بدقة 4K.",
    "accentColor": "rose",
    "servicesDelivered": [
      "تصاميم بوسترات تربوية",
      "مونتاج ريلز احترافي 4K",
      "صناعة محتوى تفاعلي",
      "بناء العلامة الشخصية"
    ],
    "posters": [
      {
        "id": "nada-poster-1",
        "title": "ندى لايف كوتش — تصميم #1",
        "file": "/assets/design-thumbs/nada/poster-1.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-1.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-2",
        "title": "ندى لايف كوتش — تصميم #2",
        "file": "/assets/design-thumbs/nada/poster-2.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-2.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-3",
        "title": "ندى لايف كوتش — تصميم #3",
        "file": "/assets/design-thumbs/nada/poster-3.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-3.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-4",
        "title": "ندى لايف كوتش — تصميم #4",
        "file": "/assets/design-thumbs/nada/poster-4.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-4.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-5",
        "title": "ندى لايف كوتش — تصميم #5",
        "file": "/assets/design-thumbs/nada/poster-5.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-5.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-6",
        "title": "ندى لايف كوتش — تصميم #6",
        "file": "/assets/design-thumbs/nada/poster-6.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-6.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-7",
        "title": "ندى لايف كوتش — تصميم #7",
        "file": "/assets/design-thumbs/nada/poster-7.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-7.jpg",
        "width": 1024,
        "height": 1536
      },
      {
        "id": "nada-poster-8",
        "title": "ندى لايف كوتش — تصميم #8",
        "file": "/assets/design-thumbs/nada/poster-8.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-9",
        "title": "ندى لايف كوتش — تصميم #9",
        "file": "/assets/design-thumbs/nada/poster-9.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-9.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-10",
        "title": "ندى لايف كوتش — تصميم #10",
        "file": "/assets/design-thumbs/nada/poster-10.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-10.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-11",
        "title": "ندى لايف كوتش — تصميم #11",
        "file": "/assets/design-thumbs/nada/poster-11.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-11.jpg",
        "width": 1092,
        "height": 1440
      },
      {
        "id": "nada-poster-12",
        "title": "ندى لايف كوتش — تصميم #12",
        "file": "/assets/design-thumbs/nada/poster-12.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-12.jpg",
        "width": 1092,
        "height": 1440
      },
      {
        "id": "nada-poster-13",
        "title": "ندى لايف كوتش — تصميم #13",
        "file": "/assets/design-thumbs/nada/poster-13.jpg",
        "thumb": "/assets/design-thumbs/nada/poster-13.jpg",
        "width": 1122,
        "height": 1402
      }
    ],
    "videos": [
      {
        "id": "nada-video-1",
        "title": "ندى لايف كوتش — فيديو ريلز #1",
        "file": "/assets/client-videos/nada/vid-1.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-2",
        "title": "ندى لايف كوتش — فيديو ريلز #2",
        "file": "/assets/client-videos/nada/vid-2.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-3",
        "title": "ندى لايف كوتش — فيديو ريلز #3",
        "file": "/assets/client-videos/nada/vid-3.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-4",
        "title": "ندى لايف كوتش — فيديو ريلز #4",
        "file": "/assets/client-videos/nada/vid-4.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-4.jpg",
        "width": 2160,
        "height": 3840
      },
      {
        "id": "nada-video-5",
        "title": "ندى لايف كوتش — فيديو ريلز #5",
        "file": "/assets/client-videos/nada/vid-5.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-5.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "nada-video-6",
        "title": "ندى لايف كوتش — فيديو ريلز #6",
        "file": "/assets/client-videos/nada/vid-6.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-7",
        "title": "ندى لايف كوتش — فيديو ريلز #7",
        "file": "/assets/client-videos/nada/vid-7.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-7.jpg",
        "width": 1080,
        "height": 1920
      }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'rest-1',
    title: 'مطعم وبرجر عصري',
    category: 'مطاعم ومقاهي',
    categorySlug: 'restaurants',
    result: '+180% زيادة المبيعات',
    resultLabel: 'نمو الطلبات الشهرية',
    growth: '+180%',
    description: 'إطلاق حملات فيديو شهية وإعلانات مستهدفة بدقة عالية أدت لزيادة فورية في الطلبات المباشرة والتفاعل.',
    image: '/assets/portfolio/portfolio-restaurant.png',
  },
  {
    id: 'cosm-1',
    title: 'مستحضرات تجميل وعطور فاخرة',
    category: 'مستحضرات وتجميل',
    categorySlug: 'cosmetics',
    result: '+340% نمو المبيعات',
    resultLabel: 'العائد على الحملات الإعلانية',
    growth: '+340%',
    description: 'تصميم فيديوهات Unboxing ومحتوى جمالي راقٍ حقق عائداً قياسياً ومبيعات متواصلة عبر المتجر الإلكتروني.',
    image: '/assets/portfolio/portfolio-cosmetics.png',
  },
  {
    id: 'clin-1',
    title: 'عيادات أسنان ومراكز طبية',
    category: 'عيادات وصحة',
    categorySlug: 'clinics',
    result: '+65% زيادة الحجوزات',
    resultLabel: 'نمو المراجعين الشهري',
    growth: '+65%',
    description: 'إنتاج محتوى طبي توعوي وتصوير احترافي للعيادات مع حملات استهداف دقيقة ضاعفت حجوزات الاستشارات والخدمات التجميلية.',
    image: '/assets/portfolio/portfolio-clinics.png',
  },
  {
    id: 'fit-1',
    title: 'مركز رياضي ولياقة بدنية',
    category: 'رياضة ولياقة',
    categorySlug: 'clinics',
    result: '+35% اشتراكات جديدة',
    resultLabel: 'خلال أول 3 شهور',
    growth: '+35%',
    description: 'حملة تحفيزية تركز على قصص التحول ونتائج المشتركين مع عروض موسمية جذابة جذبت مئات المشتركين الجدد.',
    image: '/assets/portfolio/portfolio-fitness.png',
  },
  {
    id: 'fash-1',
    title: 'متجر أزياء وبوتيك راقي',
    category: 'أزياء وتجزئة',
    categorySlug: 'fashion',
    result: '+210% مبيعات أونلاين',
    resultLabel: 'نمو المتجر الإلكتروني',
    growth: '+210%',
    description: 'جلسات تصوير مودلز احترافية وعروض ريلز للأقمشة الفاخرة ضاعفت معدل التحويل وسلة الشراء أونلاين.',
    image: '/assets/portfolio/portfolio-fashion.png',
  },
  {
    id: 'real-1',
    title: 'فلل ومشاريع عقارية فاخرة',
    category: 'عقارات واستثمار',
    categorySlug: 'realestate',
    result: '+250% وصول إعلاني',
    resultLabel: 'زيادة العملاء المحتملين +75%',
    growth: '+250%',
    description: 'فيديوهات جولات تصويرية بطائرات درون ومحتوى معماري فخم جلب عملاء ذوي قدرة شرائية عالية لحجز الوحدات العقارية.',
    image: '/assets/portfolio/portfolio-realestate.png',
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-bunhood',
    client: 'سلسلة مطاعم bunhood Burgers',
    category: 'قطاع المطاعم والكافيهات',
    challenge: 'المنافسة القوية بسوق البرجر والمطاعم بالكويت، والحاجة لزيادة الطلبات المباشرة على الفروع وتطبيقات التوصيل.',
    solution: 'عدّلنا خطة المحتوى بالكامل وركزنا على جودة اللحم الفرش ولقطات Close-up تفتح النفس، مع إطلاق حملات تيك توك وانستقرام مستهدفة.',
    results: [
      { label: 'زيادة المبيعات', value: '+180%' },
      { label: 'مشاهدات الريلز', value: '+1.2M' },
      { label: 'تكلفة الطلب', value: '-38%' }
    ],
    quote: 'فريق OUT ZONE عرفوا بالضبط شنو يشد الزبون الكويتي، والنتايج والطلبات زادت أسرع من اللي توقعناه.'
  },
  {
    id: 'case-lucin',
    client: 'براند العطور Atyab LUCIN',
    category: 'العطور الفاخرة والبخور والهدايا',
    challenge: 'بناء ثقة سريعة لبراند عطور فاخر وتحقيق مبيعات أونلاين مستمرة بموسم الهدايا والنقصات.',
    solution: 'أطلقنا حملات إعلانية مركزة على Meta و Snapchat بمحتوى راقي يوصف ثبات العطر وفخامة التغليف، مع إبراز آراء الزباين الصجية.',
    results: [
      { label: 'مضاعفة المبيعات', value: '5.4x' },
      { label: 'طلبات أونلاين', value: '+3,400' },
      { label: 'تكرار الشراء', value: '42%' }
    ],
    quote: 'كل دينار حطيناه مع OUT ZONE بالإعلانات رجع لنا أكثر من خمس أضعاف، شغل احترافي ويبيض الويه.'
  },
  {
    id: 'case-clinics',
    client: 'عيادات الفنار ومركز الكندي الطبي',
    category: 'القطاع الطبي والعيادات',
    challenge: 'بناء مصداقية عالية واستقطاب مراجعين للخدمات التخصصية مثل تجميل الأسنان والعلاج الطبيعي.',
    solution: 'صنعنا محتوى طبي توعوي يقدمه الدكاترة بأسلوب بسيط وواضح يجاوب على أسئلة المراجعين ويبني الثقة قبل الحجز.',
    results: [
      { label: 'زيادة الحجوزات', value: '+65%' },
      { label: 'اتصالات الاستفسار', value: '+240%' },
      { label: 'ثقة المراجعين', value: '98%' }
    ],
    quote: 'التسويق الطبي يبي له دقة والتزام، وفريق OUT ZONE أثبتوا إنهم قد المسؤولية وشغلهم فوق الممتاز.'
  }
];

export const WHY_US = [
  {
    id: 'custom',
    title: 'خطط مفصلة على مقاس مشروعك',
    description: 'ما نشتغل بقوالب جاهزة؛ نصمم لك خطة تسويقية تناسب جمهورك وميزانيتك وطبيعة شغلك بالسوق الكويتي.',
    icon: 'target'
  },
  {
    id: 'measurable',
    title: 'نتايج صجية تشوفها بالأرقام',
    description: 'تركيزنا الأساسي على المبيعات، الزباين الصجيين، والعائد على الإعلانات، مو بس مشاهدات وأرقام وهمية.',
    icon: 'chart'
  },
  {
    id: 'data',
    title: 'شغلنا مبني على تحليل السوق',
    description: 'كل حملة إعلانية نطلقها تكون مبنية على دراسة الأرقام وتجربة أكثر من إعلان عشان نوصل لأقل تكلفة وأعلى ربح.',
    icon: 'brain'
  },
  {
    id: 'team',
    title: 'فريق كامل يشتغل كأنه فريقك',
    description: 'معاك فريق متكامل من مصممين، مبرمجين مواقع، صناع محتوى، ومونتيرين، وخبراء إعلانات شايلين الشغل عنك بالكامل.',
    icon: 'team'
  }
];

export const FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    id: 'fb-7',
    clientName: 'عميل من الكويت — قطاع الأعمال',
    clientCategory: 'تصميم هوية وبوسترات احترافية',
    quote: 'الحقيقة ما شاء الله واضح شغل ناس فاهمة وعارفة المجال اللي بتشتغل فيه، والتصاميم دققت فيها كويس للأمانة عشان أشوف إذا فيه أغلاط ولكن واضح الشغل متعوب عليه. إن كان بالسابق فكرت بنسبة 1% أشتغل معاكم الآن 100% 💯',
    summary: 'إشادة بدقة التصاميم واحترافية الفريق من أول تجربة',
    image: '/assets/feedback/feedback-7.jpeg',
    rating: 5,
    badge: 'ثقة 100% 💯'
  },
  {
    id: 'fb-11',
    clientName: 'أبو محمد الكندي — مركز الكندي الطبي',
    clientCategory: 'عيادات ومراكز العلاج الطبيعي (+965)',
    quote: 'فن صحيح ❤️ ممتاز 🙏.. بس شكراً جداً على المجهود وتوفير الوقت',
    summary: 'إعجاب كبير بفيديوهات وبوسترات مركز الكندي الطبي بالكويت',
    image: '/assets/feedback/feedback-11.jpeg',
    rating: 5,
    badge: 'مركز الكندي الطبي'
  },
  {
    id: 'fb-12',
    clientName: 'أ. ناصر الزعبي — شركة مصنع أثر',
    clientCategory: 'صناعة وتغليف ومطبوعات (+965)',
    quote: 'ممتاز ❤️ — على بوستر "مو بس طباعة... هذي هويتك"',
    summary: 'رضا تام عن تصاميم الهوية والبوسترات الإعلانية لمصنع أثر',
    image: '/assets/feedback/feedback-12.jpeg',
    rating: 5,
    badge: 'شركة مصنع أثر'
  },
  {
    id: 'fb-6',
    clientName: 'عميل سوشيال ميديا — الكويت (+965)',
    clientCategory: 'إدارة حسابات وصناعة محتوى',
    quote: 'إن شاء الله أتواصل مع أكثر من حدا بعرفه محتاج إدارة سوشيال ميديا.. أنتي شغلك حلو وتعاملك جميل والله يا مريم، بإذن الله ناس كتير تحب تشتغل معكم 🙏🏻❤️',
    summary: 'توصية مباشرة وترشيح الوكالة لأصحاب المشاريع من جودة التعامل والشغل',
    image: '/assets/feedback/feedback-6.jpeg',
    rating: 5,
    badge: 'توصية وترشيح ❤️'
  },
  {
    id: 'fb-2',
    clientName: 'شريك نجاح — الكويت (+965)',
    clientCategory: 'إنتاج ومونتاج فيديوهات ريلز',
    quote: 'يا سلام... عليك — ما فيش غير كلمة واحدة: تحفة 🔥',
    summary: 'انبهار بجودة المونتاج والفيديو الإعلاني من أول نسخة',
    image: '/assets/feedback/feedback-2.jpeg',
    rating: 5,
    badge: 'مونتاج تحفة 🔥'
  },
  {
    id: 'fb-13',
    clientName: 'عميل مميز — الكويت',
    clientCategory: 'تصاميم سوشيال ميديا وهوية',
    quote: 'الله يعطيكم شغل ممتاز وتصاميم جميلة وجهود تشكرون عليها 👍❤️🙏',
    summary: 'شكر وتقدير على جودة التصاميم والالتزام العالي بالتسليم',
    image: '/assets/feedback/feedback-13.jpeg',
    rating: 5,
    badge: 'تصاميم جميلة ✨'
  },
  {
    id: 'fb-3',
    clientName: 'الكوتش ندى — NADA Lifecoach',
    clientCategory: 'استشارات تربوية ولايف كوتش (+965)',
    quote: 'حبيت 👏👏👏 — على تصميم بوستر "لأن طفلك يستحق مساحة آمنة تبني ثقته"',
    summary: 'إعجاب فوري بالهوية البصرية الراقية للبوسترات التربوية',
    image: '/assets/feedback/feedback-3.jpeg',
    rating: 5,
    badge: 'NADA Lifecoach'
  },
  {
    id: 'fb-8',
    clientName: 'عميل إدارة حسابات — الكويت',
    clientCategory: 'خطة محتوى وتصاميم شهرية',
    quote: 'ما شاء الله إلى الآن الشغل واضح وممتاز 💯',
    summary: 'متابعة مستمرة ورضا كامل عن مستوى التنظيم وجودة المحتوى',
    image: '/assets/feedback/feedback-8.jpeg',
    rating: 5,
    badge: 'شغل ممتاز 💯'
  },
  {
    id: 'fb-1',
    clientName: 'أطياب لوسين للعطور — Atyab LUCIN',
    clientCategory: 'عطور فاخرة وهدايا VIP (+965)',
    quote: 'الفيديو زين 👌 — اعتماد فوري لفيديو ريلز العطور الفاخرة',
    summary: 'اعتماد سريع لفيديوهات الريلز الخاصة ببراند أطياب لوسين بالكويت',
    image: '/assets/feedback/feedback-1.jpeg',
    rating: 5,
    badge: 'أطياب لوسين'
  },
  {
    id: 'fb-4',
    clientName: 'الكوتش ندى — Bloom Studio',
    clientCategory: 'بوسترات وكابشن تفاعلي (+965)',
    quote: 'أه البوست حلو ونشرح بالكابشن 👏👏❤️',
    summary: 'تناغم بين التصميم الجذاب وكتابة الكابشن التسويقي',
    image: '/assets/feedback/feedback-4.jpeg',
    rating: 5,
    badge: 'محتوى متكامل 👏'
  },
  {
    id: 'fb-5',
    clientName: 'شريك نجاح — الكويت (+965)',
    clientCategory: 'تصاميم تفاعلية وسوشيال ميديا',
    quote: 'حلو — حبيت — تمام ممكن حلو 👌',
    summary: 'تفاعل سريع واعتماد مستمر للبوستات التفاعلية',
    image: '/assets/feedback/feedback-5.jpeg',
    rating: 5,
    badge: 'اعتماد فوري ✅'
  },
  {
    id: 'fb-9',
    clientName: 'عميل السوشيال ميديا — الكويت (+965)',
    clientCategory: 'تصميم بوسترات وكتابة محتوى',
    quote: 'البوست حلو ونشرح بالكابشن 👏👏❤️ — متابعة خطوة بخطوة مع العميل',
    summary: 'اهتمام بأدق التفاصيل وكتابة محتوى يخدم هدف البوست',
    image: '/assets/feedback/feedback-9.jpeg',
    rating: 5,
    badge: 'دقة بالتفاصيل'
  },
  {
    id: 'fb-10',
    clientName: 'شريك نجاح — إنتاج الفيديو (+965)',
    clientCategory: 'مونتاج ريلز إعلاني HD',
    quote: 'الفيديو زين — تسليم سريع بجودة HD عالية',
    summary: 'احترافية في تسليم الفيديوهات الترويجية الجاهزة للنشر والإعلانات',
    image: '/assets/feedback/feedback-10.jpeg',
    rating: 5,
    badge: 'جودة HD 🎬'
  }
];

export const SERVICES_EN: Service[] = [
  {
    id: 'web',
    title: 'Professional Website Development + Official Business Email',
    description: 'We design and develop high-converting, blazing-fast corporate websites and e-commerce stores fully responsive across mobile and desktop — complete with an Official Business Email on your custom domain (info@yourbrand.com) to maximize brand credibility and trust.',
    iconName: 'web',
    features: [
      'Custom corporate websites & integrated e-commerce stores',
      'Official Business Email included on your company domain (info@yourbrand.com)',
      '100% responsive UI/UX across mobile phones, tablets, and desktops',
      'Full technical SEO setup, Google Search Console & WhatsApp integration'
    ],
    tag: 'Websites + Business Email',
    highlightBadge: 'Includes Official Business Email ✉️'
  },
  {
    id: 'strategy',
    title: 'Digital Marketing Strategy',
    description: 'Data-backed marketing roadmaps tailored to the Kuwaiti and GCC market, analyzing consumer behavior and competitors to hit your sales targets faster.',
    iconName: 'strategy',
    features: ['In-depth market & competitor analysis', 'High-intent audience targeting', 'Monthly & quarterly content/campaign roadmaps', 'Clear KPI & ROI tracking frameworks'],
    tag: 'Strategy & Goals'
  },
  {
    id: 'design',
    title: 'Creative Design & Visual Identity',
    description: 'Eye-catching ad creatives, social media posters, and luxury brand identities that capture attention instantly and turn viewers into buyers.',
    iconName: 'design',
    features: ['Premium social media posts & interactive stories', 'Full visual identities & brand guidelines', 'Promotional & seasonal campaign banners', 'High-end product retouching & manipulation'],
    tag: 'Brand Identity'
  },
  {
    id: 'content',
    title: 'Content Creation & Reels Production',
    description: 'Cinematic Reels production, 4K video editing, scriptwriting, and motion graphics crafted to hook viewers and drive real engagement.',
    iconName: 'content',
    features: ['4K Reels & TikTok video editing', 'Persuasive ad scripts & storyboards', 'Engaging promotional motion graphics', 'Product & service spotlight videos'],
    tag: 'Video & Reels'
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'End-to-end management for Instagram, TikTok, and Snapchat — from localized copywriting and scheduling to community engagement and profile optimization.',
    iconName: 'social',
    features: ['Consistent monthly content scheduling & publishing', 'High-converting Arabic (Kuwaiti) & English captions', 'Bio, highlights & grid aesthetic optimization', 'Active community growth & engagement'],
    tag: 'Full Management'
  },
  {
    id: 'ads',
    title: 'Paid Media Buying (Meta, TikTok & Google Ads)',
    description: 'Launch and scale high-ROAS paid ad campaigns across Meta, TikTok, Snapchat, and Google Ads with precision targeting and continuous optimization.',
    iconName: 'ads',
    features: ['Precision buyer-intent audience targeting', 'Creative A/B testing for maximum conversions', 'Multi-stage retargeting funnels', 'Lower CPA & higher Return on Ad Spend (ROAS)'],
    tag: 'Paid Campaigns'
  },
  {
    id: 'analytics',
    title: 'Performance Analytics & Monthly Reports',
    description: 'Transparent monthly reports tracking account growth, engagement metrics, and ad campaign ROI with actionable recommendations for continuous scaling.',
    iconName: 'analytics',
    features: ['Detailed monthly KPI & sales reports', 'Real-time campaign performance tracking', 'Clear Return on Investment (ROI) analysis', 'Actionable growth recommendations'],
    tag: 'Full Transparency'
  }
];

export const PACKAGES_EN: Package[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    subtitle: 'A strong, structured start for a professional digital presence',
    price: 40,
    period: 'Monthly',
    posts: 17,
    stories: 17,
    reels: 8,
    features: [
      '17 custom-designed social media posts per month',
      '17 interactive & engaging stories per month',
      '8 professionally edited Reels videos per month',
      'Brand-aligned visual designs',
      'Engaging copywriting (Captions) for all posts',
      'Account management & scheduled publishing',
      'Monthly performance summary report'
    ],
    posterPath: '/assets/packages/package-basic.png'
  },
  {
    id: 'medium',
    name: 'Growth Package',
    subtitle: 'The ideal balance of quality and rapid sales growth',
    price: 50,
    period: 'Monthly',
    isPopular: true,
    posts: 20,
    stories: 20,
    reels: 15,
    features: [
      '20 high-impact custom posts per month',
      '20 conversion-focused interactive stories',
      '15 dynamic Reels with modern editing & hooks',
      'Innovative ad creatives tailored to your brand',
      'Short & long-form video editing',
      'Persuasive copywriting & content ideation',
      'Full daily social media account management',
      'Paid ad campaign management (Meta & TikTok)',
      'Custom marketing strategy for your business',
      'Detailed monthly analytics & ROI reporting'
    ],
    posterPath: '/assets/packages/package-medium.png'
  },
  {
    id: 'pro',
    name: 'VIP Pro Package',
    subtitle: 'All-in-one market domination for ambitious brands',
    price: 70,
    period: 'Monthly',
    posts: 30,
    stories: 30,
    reels: 30,
    features: [
      '30 luxury cinematic posts per month (Daily)',
      '30 daily interactive stories throughout the month',
      '30 advanced Reels per month with VFX & motion',
      'Unlimited high-end campaign & offer designs',
      '4K short & long-form video production/editing',
      'Full copywriting & sales persuasion scripts',
      'Comprehensive multi-platform account management',
      'Advanced paid media buying (Meta, TikTok, Google)',
      'Full-funnel marketing strategy & growth roadmap',
      'Direct ongoing performance monitoring',
      'Monthly 1-on-1 strategy session with marketing lead',
      'In-depth ROI & conversion attribution reports'
    ],
    posterPath: '/assets/packages/package-pro.png'
  }
];

const CLIENTS_EN_META: Record<
  string,
  {
    arabicName: string;
    category: string;
    tagline: string;
    bio: string;
    servicesDelivered: string[];
  }
> = {
  bunhood: {
    arabicName: 'bunhood Burgers',
    category: 'Restaurants & Cafes — Specialty Burgers',
    tagline: 'BUNS • BEEF • BALANCE — Authentic Craft Burger Experience',
    bio: 'A specialty burger brand serving fresh daily-crafted burgers with premium beef and artisanal buns. We built an appetizing visual identity across social media, designed high-converting promotional posters, and produced mouth-watering Reels that boosted direct orders and delivery sales.',
    servicesDelivered: [
      'Promotional Poster Design',
      'Cinematic Reels Editing',
      'Social Media Management',
      'Paid Food Ad Campaigns'
    ]
  },
  lucin: {
    arabicName: 'Atyab LUCIN Perfumes',
    category: 'Luxury Perfumes, Oud & VIP Gifts',
    tagline: 'The Secret is in the Details — Royal Fragrances & VIP Gift Boxes',
    bio: 'A prestigious perfume house specializing in luxury Oriental and French fragrances and royal gift boxes (Lucin VIP). We crafted an opulent visual identity through luxury product posters and cinematic Reels highlighting packaging elegance and scent longevity.',
    servicesDelivered: [
      'Luxury Product Designs',
      'Reels Video Production',
      'E-Commerce Ad Campaigns',
      'Royal Visual Identity'
    ]
  },
  alkindi: {
    arabicName: 'Al-Kindi Medical & Physiotherapy Center',
    category: 'Medical Clinics & Physiotherapy Centers',
    tagline: 'Comprehensive Medical & Rehabilitation Care with Advanced Technology',
    bio: 'A specialized medical center in Kuwait for physiotherapy, sports injury rehabilitation, and spinal/joint pain treatment (separate sections for men and women). We produced 28 educational medical posters and 8 promotional Reels that built patient trust and multiplied clinic bookings.',
    servicesDelivered: [
      'Medical Awareness Content',
      '28 Custom Medical Posters',
      'Clinic Reels Production',
      'Patient Acquisition Ads'
    ]
  },
  fanar: {
    arabicName: 'Al-Fanar Dental Clinic',
    category: 'Cosmetic Dentistry & Dental Implants',
    tagline: 'For a Healthy Mouth and a Confident, Radiant Smile',
    bio: 'A leading dental clinic specializing in Hollywood smiles, dental implants, and root canal treatments using state-of-the-art equipment. We created a reassuring medical visual identity, promotional posters, and 9 engaging Reels showcasing dental care excellence.',
    servicesDelivered: [
      'Medical & Cosmetic Designs',
      'Dental Clinic Reels',
      'Social Media Management',
      'Appointment Booking Ads'
    ]
  },
  athar: {
    arabicName: 'Athar Packaging & Printing Factory',
    category: 'Custom Packaging & Commercial Printing',
    tagline: 'Not Just Printing... This Is Your Brand Identity',
    bio: 'An integrated factory in Kuwait providing custom packaging solutions for restaurants, perfumes, and retail brands — including luxury boxes, bottles, bags, and labels. We highlighted their production quality through B2B posters and 12 factory/product Reels.',
    servicesDelivered: [
      'B2B Industrial Designs',
      '12 Production & Product Reels',
      'Packaging Showcase',
      'Corporate Lead Generation'
    ]
  },
  kemet: {
    arabicName: 'Kemet Smart POS Systems',
    category: 'Smart POS & Cloud Management Software',
    tagline: 'All Roles in One System — From First Order to Final Decision',
    bio: 'A leading tech company providing smart POS and management systems for restaurants, cafes, salons, and retail stores. We designed 14 UI/UX feature posters and 9 explainer Reels demonstrating how Kemet connects cashier, kitchen, inventory, and live financial reports.',
    servicesDelivered: [
      'Tech UI/UX Poster Design',
      'System Explainer Reels',
      'B2B Software Sales Ads',
      'Conversion Copywriting'
    ]
  },
  micros: {
    arabicName: 'MICROS POS & Management Systems',
    category: 'Restaurant, Salon & Retail Cloud Solutions',
    tagline: 'Connect Every Department — One Integrated Smart System',
    bio: 'A cloud POS and enterprise management suite (MICROS by Kemet System) built for business owners to track sales, inventory, and staff permissions seamlessly. We executed a full series of problem-solving ad posters and promotional Reels targeting merchants.',
    servicesDelivered: [
      'Merchant Ad Campaigns',
      'POS Solution Posters',
      'Promotional Video Reels',
      'Digital Growth Strategy'
    ]
  },
  nada: {
    arabicName: 'Coach Nada — Parenting & Life Coach',
    category: 'Parenting Consultations & Personal Growth',
    tagline: 'A Safe Space to Build Your Child’s Confidence & Family Harmony',
    bio: 'A certified life coach and parenting consultant specializing in child behavior modification, confidence building, and positive parenting (in collaboration with Bloom Studio). We built a warm, inspiring visual identity with 13 educational posters and 7 4K Reels.',
    servicesDelivered: [
      'Educational Poster Series',
      '4K Reels Video Editing',
      'Interactive Content Creation',
      'Personal Brand Building'
    ]
  }
};

export const CASE_STUDIES_EN: CaseStudy[] = [
  {
    id: 'case-bunhood',
    client: 'bunhood Burgers Chain',
    category: 'Food & Beverage / Restaurants',
    challenge: 'Intense competition in Kuwait’s burger sector and the need to boost direct branch visits and delivery app orders.',
    solution: 'Revamped the content strategy focusing on fresh beef quality, cinematic close-up Reels, and high-converting TikTok & Instagram ad campaigns.',
    results: [
      { label: 'Sales Growth', value: '+180%' },
      { label: 'Reels Views', value: '+1.2M' },
      { label: 'Cost Per Order', value: '-38%' }
    ],
    quote: 'The OUT ZONE team understood exactly what attracts burger lovers in Kuwait, and the sales results came faster than we expected.'
  },
  {
    id: 'case-lucin',
    client: 'Atyab LUCIN Perfumes',
    category: 'Luxury Perfumes & Cosmetics',
    challenge: 'Building rapid brand trust for a luxury perfume house and driving consistent online orders during peak gifting seasons.',
    solution: 'Launched targeted Meta and Snapchat ad campaigns featuring sensory Reels describing fragrance notes, longevity, and authentic customer reviews.',
    results: [
      { label: 'ROAS Multiplier', value: '5.4x' },
      { label: 'Online Orders', value: '+3,400' },
      { label: 'Repeat Buyers', value: '42%' }
    ],
    quote: 'Every dinar we invested with OUT ZONE in ads returned more than 5x in sales. True professionalism.'
  },
  {
    id: 'case-clinics',
    client: 'Al-Fanar Clinic & Al-Kindi Medical Center',
    category: 'Healthcare & Medical Clinics',
    challenge: 'Establishing high medical authority and attracting patients for specialized dental and physiotherapy treatments.',
    solution: 'Produced educational doctor-led content answering patient questions clearly and showcasing real treatment outcomes with complete transparency.',
    results: [
      { label: 'Booking Growth', value: '+65%' },
      { label: 'Inquiry Calls', value: '+240%' },
      { label: 'Patient Trust', value: '98%' }
    ],
    quote: 'Medical marketing requires precision and credibility, and OUT ZONE proved they are the best partner for healthcare growth.'
  }
];

export const WHY_US_EN = [
  {
    id: 'custom',
    title: 'Tailored to Your Business',
    description: 'We never use cookie-cutter templates; we craft a custom marketing and website strategy built around your audience, budget, and sector in Kuwait.',
    icon: 'target'
  },
  {
    id: 'measurable',
    title: 'Measurable Real Results',
    description: 'We focus on real business KPIs: sales, qualified leads, website conversions, and ROAS — never vanity metrics.',
    icon: 'chart'
  },
  {
    id: 'data',
    title: 'Data-Driven Execution',
    description: 'Every creative and ad campaign is backed by market analytics and A/B testing to achieve the lowest cost per acquisition and highest profit.',
    icon: 'brain'
  },
  {
    id: 'team',
    title: 'Full In-House Expert Team',
    description: 'A dedicated team of designers, full-stack web developers, video editors, copywriters, and media buyers working as your growth partner.',
    icon: 'team'
  }
];

export const FEEDBACK_ITEMS_EN: FeedbackItem[] = [
  {
    id: 'fb-7',
    clientName: 'Kuwait Business Client',
    clientCategory: 'Brand Identity & Poster Design',
    quote: 'Honestly Mashallah, it is clear this is the work of experts who truly understand their craft. I inspected the designs carefully to see if there were any mistakes, and the quality is outstanding. If I previously thought 1% about working with you, now it is 100% 💯',
    summary: 'Praised design precision and agency professionalism from day one',
    image: '/assets/feedback/feedback-7.jpeg',
    rating: 5,
    badge: '100% Trust 💯'
  },
  {
    id: 'fb-11',
    clientName: 'Abu Mohammed Al-Kindi — Al-Kindi Center',
    clientCategory: 'Medical & Physiotherapy Center (+965)',
    quote: 'True art ❤️ Excellent 🙏.. Thank you very much for saving our time and effort!',
    summary: 'Delighted with the medical videos and posters created for Al-Kindi Center in Kuwait',
    image: '/assets/feedback/feedback-11.jpeg',
    rating: 5,
    badge: 'Al-Kindi Medical'
  },
  {
    id: 'fb-12',
    clientName: 'Mr. Nasser Al-Zoubi — Athar Factory',
    clientCategory: 'Packaging & Printing Industry (+965)',
    quote: 'Excellent ❤️ — Feedback on "Not Just Printing... This Is Your Identity" poster',
    summary: 'Full satisfaction with the Kuwaiti brand identity posters for Athar Factory',
    image: '/assets/feedback/feedback-12.jpeg',
    rating: 5,
    badge: 'Athar Factory'
  },
  {
    id: 'fb-6',
    clientName: 'Social Media Client — Kuwait (+965)',
    clientCategory: 'Account Management & Content',
    quote: 'I will definitely connect you with several business owners I know who need social media management.. Your work is amazing and your communication is wonderful, many people will love working with you 🙏🏻❤️',
    summary: 'Direct client referral recommending OUT ZONE to other business owners',
    image: '/assets/feedback/feedback-6.jpeg',
    rating: 5,
    badge: 'Client Referral ❤️'
  },
  {
    id: 'fb-2',
    clientName: 'Success Partner — Kuwait (+965)',
    clientCategory: 'Reels Production & Video Editing',
    quote: 'Incredible work... There is only one word to describe this video: A Masterpiece 🔥',
    summary: 'Blown away by the video editing quality from the very first draft',
    image: '/assets/feedback/feedback-2.jpeg',
    rating: 5,
    badge: 'Masterpiece 🔥'
  },
  {
    id: 'fb-13',
    clientName: 'VIP Client — Kuwait',
    clientCategory: 'Social Media Designs & Branding',
    quote: 'May God bless your efforts — excellent work, beautiful designs, and truly appreciated dedication 👍❤️🙏',
    summary: 'Appreciation for consistent design quality and reliable delivery',
    image: '/assets/feedback/feedback-13.jpeg',
    rating: 5,
    badge: 'Stunning Designs ✨'
  },
  {
    id: 'fb-3',
    clientName: 'Coach Nada — NADA Lifecoach',
    clientCategory: 'Parenting & Life Coaching (+965)',
    quote: 'Loved it 👏👏👏 — Feedback on "Because Your Child Deserves a Safe Space" poster',
    summary: 'Instant approval of the warm, inspiring visual identity',
    image: '/assets/feedback/feedback-3.jpeg',
    rating: 5,
    badge: 'NADA Lifecoach'
  },
  {
    id: 'fb-8',
    clientName: 'Retainer Client — Kuwait',
    clientCategory: 'Monthly Content & Social Media',
    quote: 'Mashallah, so far the work is super clear and excellent 💯',
    summary: 'Complete satisfaction with workflow organization and monthly content quality',
    image: '/assets/feedback/feedback-8.jpeg',
    rating: 5,
    badge: 'Excellent Work 💯'
  },
  {
    id: 'fb-1',
    clientName: 'Atyab LUCIN Perfumes',
    clientCategory: 'Luxury Perfumes & VIP Gifts (+965)',
    quote: 'The video is great 👌 — Instant approval of the luxury perfume Reels video',
    summary: 'Fast approval of promotional Reels for Atyab LUCIN in Kuwait',
    image: '/assets/feedback/feedback-1.jpeg',
    rating: 5,
    badge: 'Atyab LUCIN'
  },
  {
    id: 'fb-4',
    clientName: 'Coach Nada — Bloom Studio',
    clientCategory: 'Interactive Posters & Copywriting (+965)',
    quote: 'Yes, the post is lovely and we explain the details in the caption 👏👏❤️',
    summary: 'Seamless harmony between visual design and persuasive caption writing',
    image: '/assets/feedback/feedback-4.jpeg',
    rating: 5,
    badge: 'Complete Content 👏'
  },
  {
    id: 'fb-5',
    clientName: 'Success Partner — Kuwait (+965)',
    clientCategory: 'Interactive Social Media Posts',
    quote: 'Nice — Loved it — Looks great 👌',
    summary: 'Smooth communication and rapid approval of interactive campaign posts',
    image: '/assets/feedback/feedback-5.jpeg',
    rating: 5,
    badge: 'Instant Approval ✅'
  },
  {
    id: 'fb-9',
    clientName: 'Social Media Partner — Kuwait (+965)',
    clientCategory: 'Poster Design & Caption Strategy',
    quote: 'The post is great and works perfectly with the caption 👏👏❤️',
    summary: 'Step-by-step collaboration ensuring every post achieves its goal',
    image: '/assets/feedback/feedback-9.jpeg',
    rating: 5,
    badge: 'Detail Oriented'
  },
  {
    id: 'fb-10',
    clientName: 'Video Production Partner (+965)',
    clientCategory: 'HD Promotional Reels',
    quote: 'The video is great — Fast HD delivery ready for paid campaigns',
    summary: 'High-definition commercial video production delivered on schedule',
    image: '/assets/feedback/feedback-10.jpeg',
    rating: 5,
    badge: 'HD Quality 🎬'
  }
];

export const getServices = (lang: Language): Service[] =>
  lang === 'en' ? SERVICES_EN : SERVICES;

export const getPackages = (lang: Language): Package[] =>
  lang === 'en' ? PACKAGES_EN : PACKAGES;

export const getClients = (lang: Language): ClientItem[] => {
  if (lang === 'ar') return CLIENTS;
  return CLIENTS.map((c) => {
    const meta = CLIENTS_EN_META[c.id];
    if (!meta) return c;
    return {
      ...c,
      arabicName: meta.arabicName,
      category: meta.category,
      tagline: meta.tagline,
      bio: meta.bio,
      servicesDelivered: meta.servicesDelivered,
      posters: c.posters.map((p, idx) => ({
        ...p,
        title: `${meta.arabicName} — Design #${idx + 1}`,
      })),
      videos: c.videos.map((v, idx) => ({
        ...v,
        title: `${meta.arabicName} — Reels Video #${idx + 1}`,
      })),
    };
  });
};

export const getCaseStudies = (lang: Language): CaseStudy[] =>
  lang === 'en' ? CASE_STUDIES_EN : CASE_STUDIES;

export const getWhyUs = (lang: Language) =>
  lang === 'en' ? WHY_US_EN : WHY_US;

export const getFeedbackItems = (lang: Language): FeedbackItem[] =>
  lang === 'en' ? FEEDBACK_ITEMS_EN : FEEDBACK_ITEMS;

