export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'strategy' | 'design' | 'content' | 'social' | 'ads' | 'analytics';
  features: string[];
  tag: string;
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
  heroHeadline: 'نحوّل حضورك الرقمي إلى نُمو حقيقي ومبيعات مستدامة',
  heroSubtitle: 'حلول تسويقية متكاملة تساعد علامتك التجارية على الوصول لجمهورك الأنسب، بناء حضور قوي، وتحقيق نتائج قابلة للقياس تضاعف أرباحك.',
  phoneKuwait: '+201067989456',
  whatsappKuwait: '201067989456',
  email: 'info@outzone-kw.com',
  instagram: '@outzone',
  stats: [
    { value: 120, prefix: '+', label: 'عميل وعلامة تجارية', sub: 'ثقة متبادلة وشراكة مستمرة' },
    { value: 350, prefix: '+', label: 'حملة تسويقية ناجحة', sub: 'في مختلف المنصات والقطاعات' },
    { value: 2.5, suffix: 'M+', label: 'وصول شهري للجمهور', sub: 'تفاعل حقيقي ومستهدف' },
    { value: 85, suffix: '%+', label: 'نسبة رضا العملاء', sub: 'نمو مستدام وتجديد عقود' },
  ],
};

export const openWhatsAppDirect = (topic?: string) => {
  const baseMsg = topic
    ? `مرحباً فريق OUT ZONE 👋، أود الاستفسار والبدء بخصوص: ${topic}`
    : 'مرحباً فريق OUT ZONE 👋، أود الاستفسار عن باقات وخدمات التسويق الرقمي.';
  const url = `https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent(baseMsg)}`;
  window.open(url, '_blank');
};

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'الاستراتيجية التسويقية',
    description: 'خطط تسويقية مبنية على دراسة دقيقة للسوق وتحليل سلوك المستهلك والمنافسين لتحقيق الأهداف البيعية.',
    iconName: 'strategy',
    features: ['تحليل السوق والمنافسين', 'تحديد الجمهور المستهدف بدقة', 'خطة محتوى وحملات ربع سنوية', 'تحديد مؤشرات الأداء KPIs'],
    tag: 'بيانات وأهداف'
  },
  {
    id: 'design',
    title: 'التصميم الإبداعي',
    description: 'تصاميم إعلانية مبتكرة وهوية بصرية احترافية تبرز هوية علامتك التجارية وتجذب انتباه العملاء من النظرة الأولى.',
    iconName: 'design',
    features: ['تصاميم بوستات وستوري راقية', 'هويات بصرية وشعارات إعلانية', 'تصميم بنرات العروض الترويجية', 'رسومات وتعديل صور المنتجات'],
    tag: 'هوية بصرية'
  },
  {
    id: 'content',
    title: 'صناعة المحتوى الإبداعي',
    description: 'إنتاج فيديوهات ريلز، جلسات تصوير احترافية، وموشن جرافيك بأسلوب عصري مبتكر يخاطب عاطفة واهتمام الجمهور.',
    iconName: 'content',
    features: ['تصوير ومونتاج ريلز وتيك توك', 'كتابة نصوص وسيناريوهات مؤثرة', 'موشن جرافيك إعلاني تفاعلي', 'تغطية الفعاليات والافتتاحات'],
    tag: 'فيديو وسيناريو'
  },
  {
    id: 'social',
    title: 'إدارة السوشيال ميديا',
    description: 'إدارة متكاملة لحسابات انستقرام وتيك توك مع كتابة المحتوى الإبداعي الجذاب والجدولة ومتابعة التعليقات والتفاعل.',
    iconName: 'social',
    features: ['جدولة ونشر مستمر طوال الشهر', 'كتابة كابشن احترافي وجذاب', 'متابعة تفاعل المتابعين', 'تحسين البروفايل والبايو'],
    tag: 'نمو تفاعلي'
  },
  {
    id: 'ads',
    title: 'الإعلانات المدفوعة (Media Buying)',
    description: 'إطلاق وإدارة حملات إعلانية احترافية وممولة على Meta و TikTok و Google Ads لتحقيق أعلى عائد على الإنفاق الإعلاني.',
    iconName: 'ads',
    features: ['استهداف دقيق للجمهور المهتم بالشراء', 'اختبار A/B للحملات الإعلانية', 'إعادة استهداف العملاء المحتملين', 'تحسين تكلفة النقرة والتحويل'],
    tag: 'حملات ممولة'
  },
  {
    id: 'analytics',
    title: 'التحليل والتقارير الدورية',
    description: 'تقارير أداء دورية شفافة ترصد تطور الحسابات، تفاعل الجمهور، ونتائج الحملات الإعلانية مع توصيات عملية مستمرة.',
    iconName: 'analytics',
    features: ['تقارير شهرية مفصلة بالأرقام', 'لوحات تحكم لحظية لمتابعة الأداء', 'تحليل العائد على الاستثمار', 'توصيات تطويرية للحملة القادمة'],
    tag: 'شفافية كاملة'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'basic',
    name: 'الباقة الأساسية',
    subtitle: 'خطوة قوية لبداية حضور احترافي',
    price: 40,
    period: 'شهرياً',
    posts: 17,
    stories: 17,
    reels: 8,
    features: [
      '17 بوست شهرياً بتصاميم احترافية',
      '17 ستوري شهرياً متجددة وتفاعلية',
      '8 ريلز شهرياً مع مونتاج جذاب',
      'تصاميم احترافية متوافقة مع الهوية',
      'كتابة المحتوى (Caption) المشوق',
      'إدارة الحسابات وجدولة النشر',
      'تقارير شهرية لمتابعة الأداء'
    ],
    posterPath: '/assets/packages/package-basic.png'
  },
  {
    id: 'medium',
    name: 'الباقة المتوسطة',
    subtitle: 'توازن مثالي بين الجودة ومضاعفة النتائج',
    price: 50,
    period: 'شهرياً',
    isPopular: true,
    posts: 20,
    stories: 20,
    reels: 15,
    features: [
      '20 بوست شهرياً مميز عالي الجودة',
      '20 ستوري شهرياً محفزة للتفاعل',
      '15 ريلز احترافي بمونتاج حديث',
      'تصاميم احترافية ومميزة ومبتكرة',
      'مونتاج فيديوهات قصيرة وطويلة',
      'كتابة المحتوى الإبداعي (Caption)',
      'إدارة متكاملة للحسابات يومياً',
      'إعلانات ممولة على (Meta & TikTok)',
      'استراتيجية تسويقية مخصصة لنشاطك',
      'تقارير شهرية تفصيلية للأداء'
    ],
    posterPath: '/assets/packages/package-medium.png'
  },
  {
    id: 'pro',
    name: 'الباقة الاحترافية',
    subtitle: 'حل متكامل لتحقيق الصدارة والريادة لعلامتك',
    price: 70,
    period: 'شهرياً',
    posts: 30,
    stories: 30,
    reels: 30,
    features: [
      '30 بوست شهرياً بتصاميم سينمائية فاخرة',
      '30 ستوري تفاعلية يومية ومستمرة',
      '30 ريلز شهرياً بمونتاج متقدم ومؤثرات',
      'تصاميم احترافية عالية الجودة وغير محدودة',
      'مونتاج فيديوهات قصيرة وطويلة بدقة 4K',
      'كتابة محتوى متكامل واستراتيجيات إقناع',
      'إدارة شاملة لكافة الحسابات الرقمية',
      'إعلانات ممولة متقدمة (Meta, TikTok, Google)',
      'استراتيجية تسويقية متكاملة وخطة نمو',
      'تحليل ومتابعة الأداء بشكل دوري ومباشر',
      'جلسة استشارية شهرية مع خبير التسويق',
      'تقارير تفصيلية لقياس العائد على الاستثمار'
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
        "file": "/desgien/بان هود/1.jpg",
        "thumb": "/assets/design-thumbs/bunhood/poster-1.jpg",
        "width": 1080,
        "height": 1350
      },
      {
        "id": "bunhood-poster-2",
        "title": "بن هود برجر — تصميم #2",
        "file": "/desgien/بان هود/1.png",
        "thumb": "/assets/design-thumbs/bunhood/poster-2.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-3",
        "title": "بن هود برجر — تصميم #3",
        "file": "/desgien/بان هود/2.png",
        "thumb": "/assets/design-thumbs/bunhood/poster-3.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-4",
        "title": "بن هود برجر — تصميم #4",
        "file": "/desgien/بان هود/3.png",
        "thumb": "/assets/design-thumbs/bunhood/poster-4.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-5",
        "title": "بن هود برجر — تصميم #5",
        "file": "/desgien/بان هود/4.png",
        "thumb": "/assets/design-thumbs/bunhood/poster-5.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-6",
        "title": "بن هود برجر — تصميم #6",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.38 PM.jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-6.jpg",
        "width": 1125,
        "height": 1398
      },
      {
        "id": "bunhood-poster-7",
        "title": "بن هود برجر — تصميم #7",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.39 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-7.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-8",
        "title": "بن هود برجر — تصميم #8",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.39 PM (2).jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-8.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-9",
        "title": "بن هود برجر — تصميم #9",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.39 PM (3).jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-9.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-10",
        "title": "بن هود برجر — تصميم #10",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.39 PM (4).jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-10.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-11",
        "title": "بن هود برجر — تصميم #11",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.39 PM.jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-11.jpg",
        "width": 900,
        "height": 1600
      },
      {
        "id": "bunhood-poster-12",
        "title": "بن هود برجر — تصميم #12",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.40 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-12.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-13",
        "title": "بن هود برجر — تصميم #13",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.40 PM.jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-13.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-14",
        "title": "بن هود برجر — تصميم #14",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.41 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-14.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-15",
        "title": "بن هود برجر — تصميم #15",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.41 PM.jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-15.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-16",
        "title": "بن هود برجر — تصميم #16",
        "file": "/desgien/بان هود/WhatsApp Image 2026-10-18 at 9.09.42 PM.jpeg",
        "thumb": "/assets/design-thumbs/bunhood/poster-16.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "bunhood-poster-17",
        "title": "بن هود برجر — تصميم #17",
        "file": "/desgien/بان هود/final 5.png",
        "thumb": "/assets/design-thumbs/bunhood/poster-17.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "bunhood-poster-18",
        "title": "بن هود برجر — تصميم #18",
        "file": "/desgien/بان هود/بوست.png",
        "thumb": "/assets/design-thumbs/bunhood/poster-18.jpg",
        "width": 1122,
        "height": 1402
      }
    ],
    "videos": [
      {
        "id": "bunhood-video-1",
        "title": "بن هود برجر — فيديو ريلز #1",
        "file": "/vedio/بن هود/WhatsApp Video 2026-10-10 at 3.30.28 PM.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-1.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-2",
        "title": "بن هود برجر — فيديو ريلز #2",
        "file": "/vedio/بن هود/WhatsApp Video 2026-10-13 at 2.22.52 PM.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-2.jpg",
        "width": 576,
        "height": 1024
      },
      {
        "id": "bunhood-video-3",
        "title": "بن هود برجر — فيديو ريلز #3",
        "file": "/vedio/بن هود/WhatsApp Video 2026-10-17 at 5.09.53 PM.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-3.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-4",
        "title": "بن هود برجر — فيديو ريلز #4",
        "file": "/vedio/بن هود/WhatsApp Video 2026-10-17 at 6.20.28 PM (2).mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-4.jpg",
        "width": 464,
        "height": 832
      },
      {
        "id": "bunhood-video-5",
        "title": "بن هود برجر — فيديو ريلز #5",
        "file": "/vedio/بن هود/bun hod 1.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "bunhood-video-6",
        "title": "بن هود برجر — فيديو ريلز #6",
        "file": "/vedio/بن هود/بان هود 7.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "bunhood-video-7",
        "title": "بن هود برجر — فيديو ريلز #7",
        "file": "/vedio/بن هود/بن هود 3.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-7.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-8",
        "title": "بن هود برجر — فيديو ريلز #8",
        "file": "/vedio/بن هود/فيديو افتتاح.mp4",
        "thumb": "/assets/video-thumbs/bunhood/vid-8.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "bunhood-video-9",
        "title": "بن هود برجر — فيديو ريلز #9",
        "file": "/vedio/بن هود/نهائييييييي.mp4",
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
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.45 PM.jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-1.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-2",
        "title": "أطياب لوسين للعطور — تصميم #2",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.49 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-2.jpg",
        "width": 1092,
        "height": 1440
      },
      {
        "id": "lucin-poster-3",
        "title": "أطياب لوسين للعطور — تصميم #3",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.49 PM (2).jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-3.jpg",
        "width": 1170,
        "height": 1180
      },
      {
        "id": "lucin-poster-4",
        "title": "أطياب لوسين للعطور — تصميم #4",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.49 PM (3).jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-4.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-5",
        "title": "أطياب لوسين للعطور — تصميم #5",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.49 PM.jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "lucin-poster-6",
        "title": "أطياب لوسين للعطور — تصميم #6",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.50 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-6.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-7",
        "title": "أطياب لوسين للعطور — تصميم #7",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.50 PM (2).jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-7.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "lucin-poster-8",
        "title": "أطياب لوسين للعطور — تصميم #8",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.50 PM (3).jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "lucin-poster-9",
        "title": "أطياب لوسين للعطور — تصميم #9",
        "file": "/desgien/اطياب/WhatsApp Image 2026-10-18 at 9.34.50 PM.jpeg",
        "thumb": "/assets/design-thumbs/lucin/poster-9.jpg",
        "width": 1254,
        "height": 1254
      }
    ],
    "videos": [
      {
        "id": "lucin-video-1",
        "title": "أطياب لوسين للعطور — فيديو ريلز #1",
        "file": "/vedio/اطياب/1.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-2",
        "title": "أطياب لوسين للعطور — فيديو ريلز #2",
        "file": "/vedio/اطياب/8.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-2.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "lucin-video-3",
        "title": "أطياب لوسين للعطور — فيديو ريلز #3",
        "file": "/vedio/اطياب/final.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-3.jpg",
        "width": 480,
        "height": 848
      },
      {
        "id": "lucin-video-4",
        "title": "أطياب لوسين للعطور — فيديو ريلز #4",
        "file": "/vedio/اطياب/اطياب 2.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-5",
        "title": "أطياب لوسين للعطور — فيديو ريلز #5",
        "file": "/vedio/اطياب/اطياب 3.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-6",
        "title": "أطياب لوسين للعطور — فيديو ريلز #6",
        "file": "/vedio/اطياب/اطياب 4.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-6.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "lucin-video-7",
        "title": "أطياب لوسين للعطور — فيديو ريلز #7",
        "file": "/vedio/اطياب/اطياب 5.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "lucin-video-8",
        "title": "أطياب لوسين للعطور — فيديو ريلز #8",
        "file": "/vedio/اطياب/اطياب 6.mp4",
        "thumb": "/assets/video-thumbs/lucin/vid-8.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "lucin-video-9",
        "title": "أطياب لوسين للعطور — فيديو ريلز #9",
        "file": "/vedio/اطياب/اطياب 8.mp4",
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
        "file": "/desgien/كندي/ChatGPT Image Aug 11, 2026, 05_40_46 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-1.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-2",
        "title": "مركز الكندي الطبي — تصميم #2",
        "file": "/desgien/كندي/ChatGPT Image Aug 11, 2026, 06_52_59 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-2.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-3",
        "title": "مركز الكندي الطبي — تصميم #3",
        "file": "/desgien/كندي/ChatGPT Image Aug 11, 2026, 07_18_46 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-3.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-4",
        "title": "مركز الكندي الطبي — تصميم #4",
        "file": "/desgien/كندي/ChatGPT Image Aug 11, 2026, 07_33_16 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-4.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-5",
        "title": "مركز الكندي الطبي — تصميم #5",
        "file": "/desgien/كندي/ChatGPT Image Aug 13, 2026, 06_48_32 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-5.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-6",
        "title": "مركز الكندي الطبي — تصميم #6",
        "file": "/desgien/كندي/ChatGPT Image Aug 13, 2026, 08_48_25 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-6.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-7",
        "title": "مركز الكندي الطبي — تصميم #7",
        "file": "/desgien/كندي/ChatGPT Image Aug 13, 2026, 08_57_53 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-7.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-8",
        "title": "مركز الكندي الطبي — تصميم #8",
        "file": "/desgien/كندي/ChatGPT Image Aug 13, 2026, 09_17_42 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-8.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-9",
        "title": "مركز الكندي الطبي — تصميم #9",
        "file": "/desgien/كندي/ChatGPT Image Aug 9, 2026, 05_20_24 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-9.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-10",
        "title": "مركز الكندي الطبي — تصميم #10",
        "file": "/desgien/كندي/ChatGPT Image Sep 1, 2026, 04_36_17 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-10.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-11",
        "title": "مركز الكندي الطبي — تصميم #11",
        "file": "/desgien/كندي/ChatGPT Image Sep 1, 2026, 04_52_28 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-11.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-12",
        "title": "مركز الكندي الطبي — تصميم #12",
        "file": "/desgien/كندي/ChatGPT Image Sep 1, 2026, 04_59_06 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-12.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-13",
        "title": "مركز الكندي الطبي — تصميم #13",
        "file": "/desgien/كندي/ChatGPT Image Sep 12, 2026, 01_31_26 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-13.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-14",
        "title": "مركز الكندي الطبي — تصميم #14",
        "file": "/desgien/كندي/ChatGPT Image Sep 12, 2026, 11_14_24 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-14.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-15",
        "title": "مركز الكندي الطبي — تصميم #15",
        "file": "/desgien/كندي/ChatGPT Image Sep 19, 2026, 06_19_07 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-15.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-16",
        "title": "مركز الكندي الطبي — تصميم #16",
        "file": "/desgien/كندي/ChatGPT Image Sep 19, 2026, 11_30_00 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-16.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-17",
        "title": "مركز الكندي الطبي — تصميم #17",
        "file": "/desgien/كندي/ChatGPT Image Sep 19, 2026, 11_35_56 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-17.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-18",
        "title": "مركز الكندي الطبي — تصميم #18",
        "file": "/desgien/كندي/ChatGPT Image Sep 22, 2026, 09_56_51 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-18.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-19",
        "title": "مركز الكندي الطبي — تصميم #19",
        "file": "/desgien/كندي/ChatGPT Image Sep 23, 2026, 08_16_54 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-19.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-20",
        "title": "مركز الكندي الطبي — تصميم #20",
        "file": "/desgien/كندي/ChatGPT Image Sep 29, 2026, 08_36_39 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-20.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-21",
        "title": "مركز الكندي الطبي — تصميم #21",
        "file": "/desgien/كندي/ChatGPT Image Sep 30, 2026, 12_54_04 PM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-21.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-22",
        "title": "مركز الكندي الطبي — تصميم #22",
        "file": "/desgien/كندي/ChatGPT Image Sep 6, 2026, 12_38_42 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-22.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-23",
        "title": "مركز الكندي الطبي — تصميم #23",
        "file": "/desgien/كندي/ChatGPT Image Sep 8, 2026, 06_48_26 AM.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-23.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-24",
        "title": "مركز الكندي الطبي — تصميم #24",
        "file": "/desgien/كندي/Chronic Headache Clinic Advertisement.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-24.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-25",
        "title": "مركز الكندي الطبي — تصميم #25",
        "file": "/desgien/كندي/Knee Relief at Alkindi Center فاينال.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-25.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-26",
        "title": "مركز الكندي الطبي — تصميم #26",
        "file": "/desgien/كندي/Kuwaiti Wellness Tips for Back Pain (1).png",
        "thumb": "/assets/design-thumbs/alkindi/poster-26.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-27",
        "title": "مركز الكندي الطبي — تصميم #27",
        "file": "/desgien/كندي/Sudden Muscle Cramps Awareness Poster.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-27.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "alkindi-poster-28",
        "title": "مركز الكندي الطبي — تصميم #28",
        "file": "/desgien/كندي/إصابة الملعب والعودة الأقوى.png",
        "thumb": "/assets/design-thumbs/alkindi/poster-28.jpg",
        "width": 1254,
        "height": 1254
      }
    ],
    "videos": [
      {
        "id": "alkindi-video-1",
        "title": "مركز الكندي الطبي — فيديو ريلز #1",
        "file": "/vedio/الكندي/final 6 (2).mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-2",
        "title": "مركز الكندي الطبي — فيديو ريلز #2",
        "file": "/vedio/الكندي/final kindy 6 (2).mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-3",
        "title": "مركز الكندي الطبي — فيديو ريلز #3",
        "file": "/vedio/الكندي/final kindy17 (2).mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-4",
        "title": "مركز الكندي الطبي — فيديو ريلز #4",
        "file": "/vedio/الكندي/كندي 18 (2).mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-5",
        "title": "مركز الكندي الطبي — فيديو ريلز #5",
        "file": "/vedio/الكندي/كندي 20.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-5.jpg",
        "width": 816,
        "height": 464
      },
      {
        "id": "alkindi-video-6",
        "title": "مركز الكندي الطبي — فيديو ريلز #6",
        "file": "/vedio/الكندي/كندي 21.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-6.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "alkindi-video-7",
        "title": "مركز الكندي الطبي — فيديو ريلز #7",
        "file": "/vedio/الكندي/كندي 7.mp4",
        "thumb": "/assets/video-thumbs/alkindi/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "alkindi-video-8",
        "title": "مركز الكندي الطبي — فيديو ريلز #8",
        "file": "/vedio/الكندي/كندي.mp4",
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
        "file": "/desgien/فنار/Alfanar Dental Care Poster.png",
        "thumb": "/assets/design-thumbs/fanar/poster-1.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-2",
        "title": "عيادة الفنار لطب الأسنان — تصميم #2",
        "file": "/desgien/فنار/ChatGPT Image Aug 24, 2026, 03_23_13 AM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-2.jpg",
        "width": 1093,
        "height": 1439
      },
      {
        "id": "fanar-poster-3",
        "title": "عيادة الفنار لطب الأسنان — تصميم #3",
        "file": "/desgien/فنار/ChatGPT Image Aug 26, 2026, 01_42_40 AM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-3.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-4",
        "title": "عيادة الفنار لطب الأسنان — تصميم #4",
        "file": "/desgien/فنار/ChatGPT Image Aug 31, 2026, 03_43_14 PM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-4.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-5",
        "title": "عيادة الفنار لطب الأسنان — تصميم #5",
        "file": "/desgien/فنار/ChatGPT Image Sep 14, 2026, 12_10_38 PM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-6",
        "title": "عيادة الفنار لطب الأسنان — تصميم #6",
        "file": "/desgien/فنار/ChatGPT Image Sep 21, 2026, 09_02_55 AM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-6.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-7",
        "title": "عيادة الفنار لطب الأسنان — تصميم #7",
        "file": "/desgien/فنار/ChatGPT Image Sep 23, 2026, 08_49_04 AM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-7.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "fanar-poster-8",
        "title": "عيادة الفنار لطب الأسنان — تصميم #8",
        "file": "/desgien/فنار/ChatGPT Image Sep 7, 2026, 01_58_32 AM.png",
        "thumb": "/assets/design-thumbs/fanar/poster-8.jpg",
        "width": 1086,
        "height": 1448
      }
    ],
    "videos": [
      {
        "id": "fanar-video-1",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #1",
        "file": "/vedio/فنار/22.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-2",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #2",
        "file": "/vedio/فنار/fanar تعديل.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-3",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #3",
        "file": "/vedio/فنار/final xxxxxxx.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-4",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #4",
        "file": "/vedio/فنار/الفنار 14.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-5",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #5",
        "file": "/vedio/فنار/تحسين جودة الفيديو.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-5.jpg",
        "width": 576,
        "height": 1024
      },
      {
        "id": "fanar-video-6",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #6",
        "file": "/vedio/فنار/تعديل 2.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-6.jpg",
        "width": 816,
        "height": 560
      },
      {
        "id": "fanar-video-7",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #7",
        "file": "/vedio/فنار/فنار ايبيليب.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "fanar-video-8",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #8",
        "file": "/vedio/فنار/فنار تعديل.mp4",
        "thumb": "/assets/video-thumbs/fanar/vid-8.jpg",
        "width": 576,
        "height": 1024
      },
      {
        "id": "fanar-video-9",
        "title": "عيادة الفنار لطب الأسنان — فيديو ريلز #9",
        "file": "/vedio/فنار/فيديو تمام ان شاء الله.mp4",
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
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.49 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-1.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-2",
        "title": "شركة مصنع أثر — تصميم #2",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.49 PM.jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-2.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-3",
        "title": "شركة مصنع أثر — تصميم #3",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.50 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-3.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-4",
        "title": "شركة مصنع أثر — تصميم #4",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.50 PM.jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-4.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-5",
        "title": "شركة مصنع أثر — تصميم #5",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.52 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-5.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-6",
        "title": "شركة مصنع أثر — تصميم #6",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.52 PM (2).jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-6.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-7",
        "title": "شركة مصنع أثر — تصميم #7",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.52 PM (3).jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-7.jpg",
        "width": 1121,
        "height": 1403
      },
      {
        "id": "athar-poster-8",
        "title": "شركة مصنع أثر — تصميم #8",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.52 PM.jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-8.jpg",
        "width": 1254,
        "height": 1254
      },
      {
        "id": "athar-poster-9",
        "title": "شركة مصنع أثر — تصميم #9",
        "file": "/desgien/اثر/WhatsApp Image 2026-10-18 at 9.28.53 PM.jpeg",
        "thumb": "/assets/design-thumbs/athar/poster-9.jpg",
        "width": 1254,
        "height": 1254
      }
    ],
    "videos": [
      {
        "id": "athar-video-1",
        "title": "شركة مصنع أثر — فيديو ريلز #1",
        "file": "/vedio/اثر/WhatsApp Video 2026-10-08 at 1.45.52 PM.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-2",
        "title": "شركة مصنع أثر — فيديو ريلز #2",
        "file": "/vedio/اثر/WhatsApp Video 2026-10-12 at 2.59.14 PM (1).mp4",
        "thumb": "/assets/video-thumbs/athar/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-3",
        "title": "شركة مصنع أثر — فيديو ريلز #3",
        "file": "/vedio/اثر/WhatsApp Video 2026-10-15 at 3.45.49 PM.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-4",
        "title": "شركة مصنع أثر — فيديو ريلز #4",
        "file": "/vedio/اثر/ashar1.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-4.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-5",
        "title": "شركة مصنع أثر — فيديو ريلز #5",
        "file": "/vedio/اثر/final 3.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-5.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-6",
        "title": "شركة مصنع أثر — فيديو ريلز #6",
        "file": "/vedio/اثر/final ashar 2.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-6.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-7",
        "title": "شركة مصنع أثر — فيديو ريلز #7",
        "file": "/vedio/اثر/hev 7.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-7.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "athar-video-8",
        "title": "شركة مصنع أثر — فيديو ريلز #8",
        "file": "/vedio/اثر/اثر.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-8.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-9",
        "title": "شركة مصنع أثر — فيديو ريلز #9",
        "file": "/vedio/اثر/تعديل اثبر.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-9.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-10",
        "title": "شركة مصنع أثر — فيديو ريلز #10",
        "file": "/vedio/اثر/تعديل اثر.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-10.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-11",
        "title": "شركة مصنع أثر — فيديو ريلز #11",
        "file": "/vedio/اثر/تعديل.mp4",
        "thumb": "/assets/video-thumbs/athar/vid-11.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "athar-video-12",
        "title": "شركة مصنع أثر — فيديو ريلز #12",
        "file": "/vedio/اثر/شسفاشق 2.mp4",
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
        "file": "/desgien/كيميت/ChatGPT Image Sep 12, 2026, 01_53_54 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-1.jpg",
        "width": 1088,
        "height": 1445
      },
      {
        "id": "kemet-poster-2",
        "title": "نظام Kemet System الذكي — تصميم #2",
        "file": "/desgien/كيميت/ChatGPT Image Sep 7, 2026, 02_57_48 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-4.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "kemet-poster-3",
        "title": "نظام Kemet System الذكي — تصميم #3",
        "file": "/desgien/كيميت/ChatGPT Image Sep 8, 2026, 06_36_45 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "kemet-poster-4",
        "title": "نظام Kemet System الذكي — تصميم #4",
        "file": "/desgien/كيميت/ChatGPT Image Sep 8, 2026, 07_04_52 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-6.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "kemet-poster-5",
        "title": "نظام Kemet System الذكي — تصميم #5",
        "file": "/desgien/كيميت/ChatGPT Image Sep 21, 2026, 08_50_34 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-2.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "kemet-poster-6",
        "title": "نظام Kemet System الذكي — تصميم #6",
        "file": "/desgien/كيميت/ChatGPT Image Sep 22, 2026, 10_28_46 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-3.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "kemet-poster-7",
        "title": "نظام Kemet System الذكي — تصميم #7",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.17.33 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-7.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-8",
        "title": "نظام Kemet System الذكي — تصميم #8",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.17.34 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-9",
        "title": "نظام Kemet System الذكي — تصميم #9",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.38 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-9.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "kemet-poster-10",
        "title": "نظام Kemet System الذكي — تصميم #10",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.39 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-10.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-11",
        "title": "نظام Kemet System الذكي — تصميم #11",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.39 PM (2).jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-11.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-12",
        "title": "نظام Kemet System الذكي — تصميم #12",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.39 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-12.jpg",
        "width": 1144,
        "height": 1375
      },
      {
        "id": "kemet-poster-13",
        "title": "نظام Kemet System الذكي — تصميم #13",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.40 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-13.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "kemet-poster-14",
        "title": "نظام Kemet System الذكي — تصميم #14",
        "file": "/desgien/كيميت/نظام مطاعم ذكي بتصميم عصري.png",
        "thumb": "/assets/design-thumbs/kemet/poster-14.jpg",
        "width": 1145,
        "height": 1374
      }
    ],
    "videos": [
      {
        "id": "kemet-video-1",
        "title": "نظام Kemet System الذكي — فيديو ريلز #1",
        "file": "/vedio/كيميت/Kemet_System_luxury_brand_reveal_202608080058.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-2",
        "title": "نظام Kemet System الذكي — فيديو ريلز #2",
        "file": "/vedio/كيميت/final.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-3",
        "title": "نظام Kemet System الذكي — فيديو ريلز #3",
        "file": "/vedio/كيميت/kemet 16.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-4",
        "title": "نظام Kemet System الذكي — فيديو ريلز #4",
        "file": "/vedio/كيميت/اخير.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-5",
        "title": "نظام Kemet System الذكي — فيديو ريلز #5",
        "file": "/vedio/كيميت/تعديل 1.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-6",
        "title": "نظام Kemet System الذكي — فيديو ريلز #6",
        "file": "/vedio/كيميت/كيميت 15.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-7",
        "title": "نظام Kemet System الذكي — فيديو ريلز #7",
        "file": "/vedio/كيميت/كيميت 17.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-7.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "kemet-video-8",
        "title": "نظام Kemet System الذكي — فيديو ريلز #8",
        "file": "/vedio/كيميت/كيميت 7.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-8.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "kemet-video-9",
        "title": "نظام Kemet System الذكي — فيديو ريلز #9",
        "file": "/vedio/كيميت/كيميت.mp4",
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
        "file": "/desgien/كيميت/ChatGPT Image Sep 21, 2026, 08_50_34 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-2.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-2",
        "title": "أنظمة MICROS الذكية — تصميم #2",
        "file": "/desgien/كيميت/ChatGPT Image Sep 22, 2026, 10_28_46 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-3.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-3",
        "title": "أنظمة MICROS الذكية — تصميم #3",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.17.33 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-7.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-4",
        "title": "أنظمة MICROS الذكية — تصميم #4",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.17.34 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-5",
        "title": "أنظمة MICROS الذكية — تصميم #5",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.38 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-9.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-6",
        "title": "أنظمة MICROS الذكية — تصميم #6",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.39 PM (1).jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-10.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-7",
        "title": "أنظمة MICROS الذكية — تصميم #7",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.39 PM (2).jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-11.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-8",
        "title": "أنظمة MICROS الذكية — تصميم #8",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.39 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-12.jpg",
        "width": 1144,
        "height": 1375
      },
      {
        "id": "micros-poster-9",
        "title": "أنظمة MICROS الذكية — تصميم #9",
        "file": "/desgien/كيميت/WhatsApp Image 2026-10-18 at 9.20.40 PM.jpeg",
        "thumb": "/assets/design-thumbs/kemet/poster-13.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "micros-poster-10",
        "title": "أنظمة MICROS الذكية — تصميم #10",
        "file": "/desgien/كيميت/نظام مطاعم ذكي بتصميم عصري.png",
        "thumb": "/assets/design-thumbs/kemet/poster-14.jpg",
        "width": 1145,
        "height": 1374
      },
      {
        "id": "micros-poster-11",
        "title": "أنظمة MICROS الذكية — تصميم #11",
        "file": "/desgien/كيميت/ChatGPT Image Sep 12, 2026, 01_53_54 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-1.jpg",
        "width": 1088,
        "height": 1445
      },
      {
        "id": "micros-poster-12",
        "title": "أنظمة MICROS الذكية — تصميم #12",
        "file": "/desgien/كيميت/ChatGPT Image Sep 7, 2026, 02_57_48 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-4.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "micros-poster-13",
        "title": "أنظمة MICROS الذكية — تصميم #13",
        "file": "/desgien/كيميت/ChatGPT Image Sep 8, 2026, 06_36_45 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-5.jpg",
        "width": 1086,
        "height": 1448
      },
      {
        "id": "micros-poster-14",
        "title": "أنظمة MICROS الذكية — تصميم #14",
        "file": "/desgien/كيميت/ChatGPT Image Sep 8, 2026, 07_04_52 AM.png",
        "thumb": "/assets/design-thumbs/kemet/poster-6.jpg",
        "width": 1086,
        "height": 1448
      }
    ],
    "videos": [
      {
        "id": "micros-video-1",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #1",
        "file": "/vedio/كيميت/Kemet_System_luxury_brand_reveal_202608080058.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-2",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #2",
        "file": "/vedio/كيميت/final.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-3",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #3",
        "file": "/vedio/كيميت/kemet 16.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-4",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #4",
        "file": "/vedio/كيميت/اخير.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-4.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-5",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #5",
        "file": "/vedio/كيميت/تعديل 1.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-5.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-6",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #6",
        "file": "/vedio/كيميت/كيميت 15.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-7",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #7",
        "file": "/vedio/كيميت/كيميت 17.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-7.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "micros-video-8",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #8",
        "file": "/vedio/كيميت/كيميت 7.mp4",
        "thumb": "/assets/video-thumbs/kemet/vid-8.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "micros-video-9",
        "title": "أنظمة MICROS الذكية — فيديو ريلز #9",
        "file": "/vedio/كيميت/كيميت.mp4",
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
        "file": "/desgien/ندي/ChatGPT Image Aug 13, 2026, 06_02_48 AM.png",
        "thumb": "/assets/design-thumbs/nada/poster-1.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-2",
        "title": "ندى لايف كوتش — تصميم #2",
        "file": "/desgien/ندي/ChatGPT Image Aug 13, 2026, 06_06_47 AM.png",
        "thumb": "/assets/design-thumbs/nada/poster-2.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-3",
        "title": "ندى لايف كوتش — تصميم #3",
        "file": "/desgien/ندي/ChatGPT Image Aug 13, 2026, 06_09_23 AM.png",
        "thumb": "/assets/design-thumbs/nada/poster-3.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-4",
        "title": "ندى لايف كوتش — تصميم #4",
        "file": "/desgien/ندي/ChatGPT Image Aug 13, 2026, 06_14_49 AM.png",
        "thumb": "/assets/design-thumbs/nada/poster-4.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-5",
        "title": "ندى لايف كوتش — تصميم #5",
        "file": "/desgien/ندي/ChatGPT Image Aug 13, 2026, 06_23_05 AM.png",
        "thumb": "/assets/design-thumbs/nada/poster-5.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-6",
        "title": "ندى لايف كوتش — تصميم #6",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 08_36_00 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-6.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-7",
        "title": "ندى لايف كوتش — تصميم #7",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 08_46_26 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-7.jpg",
        "width": 1024,
        "height": 1536
      },
      {
        "id": "nada-poster-8",
        "title": "ندى لايف كوتش — تصميم #8",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 08_47_39 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-8.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-9",
        "title": "ندى لايف كوتش — تصميم #9",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 09_03_49 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-9.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-10",
        "title": "ندى لايف كوتش — تصميم #10",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 09_08_50 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-10.jpg",
        "width": 1122,
        "height": 1402
      },
      {
        "id": "nada-poster-11",
        "title": "ندى لايف كوتش — تصميم #11",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 09_53_46 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-11.jpg",
        "width": 1092,
        "height": 1440
      },
      {
        "id": "nada-poster-12",
        "title": "ندى لايف كوتش — تصميم #12",
        "file": "/desgien/ندي/ChatGPT Image Aug 3, 2026, 10_20_25 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-12.jpg",
        "width": 1092,
        "height": 1440
      },
      {
        "id": "nada-poster-13",
        "title": "ندى لايف كوتش — تصميم #13",
        "file": "/desgien/ندي/ChatGPT Image Jul 29, 2026, 08_58_07 PM.png",
        "thumb": "/assets/design-thumbs/nada/poster-13.jpg",
        "width": 1122,
        "height": 1402
      }
    ],
    "videos": [
      {
        "id": "nada-video-1",
        "title": "ندى لايف كوتش — فيديو ريلز #1",
        "file": "/vedio/nada life coach/final 1.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-1.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-2",
        "title": "ندى لايف كوتش — فيديو ريلز #2",
        "file": "/vedio/nada life coach/final 2.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-2.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-3",
        "title": "ندى لايف كوتش — فيديو ريلز #3",
        "file": "/vedio/nada life coach/final.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-3.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-4",
        "title": "ندى لايف كوتش — فيديو ريلز #4",
        "file": "/vedio/nada life coach/فيديو 3.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-4.jpg",
        "width": 2160,
        "height": 3840
      },
      {
        "id": "nada-video-5",
        "title": "ندى لايف كوتش — فيديو ريلز #5",
        "file": "/vedio/nada life coach/ندي 3.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-5.jpg",
        "width": 1080,
        "height": 1920
      },
      {
        "id": "nada-video-6",
        "title": "ندى لايف كوتش — فيديو ريلز #6",
        "file": "/vedio/nada life coach/ندي 4.mp4",
        "thumb": "/assets/video-thumbs/nada/vid-6.jpg",
        "width": 720,
        "height": 1280
      },
      {
        "id": "nada-video-7",
        "title": "ندى لايف كوتش — فيديو ريلز #7",
        "file": "/vedio/nada life coach/ندي اخير يا رب.mp4",
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
    category: 'قطاع الأغذية والمطاعم',
    challenge: 'المنافسة الشديدة في قطاع المطاعم والحاجة لزيادة الإقبال على الفروع وتطبيقات التوصيل.',
    solution: 'إعادة صياغة استراتيجية المحتوى بالتركيز على جودة اللحم الطازج ولقطات Close-up سينمائية، وإطلاق حملات تيك توك وانستقرام إبداعية.',
    results: [
      { label: 'نمو المبيعات', value: '+180%' },
      { label: 'مشاهدات ريلز', value: '+1.2M' },
      { label: 'تكلفة الطلب', value: '-38%' }
    ],
    quote: 'فريق OUT ZONE فهم طبيعة الجمهور وما يجذب الزبائن، والنتائج كانت أسرع مما توقعنا.'
  },
  {
    id: 'case-lucin',
    client: 'براند العطور Atyab LUCIN',
    category: 'العطور ومستحضرات التجميل',
    challenge: 'بناء ثقة سريعة لبراند عطور فاخر وتحقيق مبيعات أونلاين مستمرة.',
    solution: 'حملات إعلانات مركزة على Meta و Snapchat بمحتوى يصف نوتات العطر وثباته، مع تقييمات حقيقية من العملاء.',
    results: [
      { label: 'مضاعفة المبيعات', value: '5.4x' },
      { label: 'طلبات أونلاين', value: '+3,400' },
      { label: 'تكرار الشراء', value: '42%' }
    ],
    quote: 'كل استثمار وضعناه مع OUT ZONE في الإعلانات عاد بأكثر من خمسة أضعاف، احترافية حقيقية.'
  },
  {
    id: 'case-clinics',
    client: 'عيادات الفنار ومركز الكندي',
    category: 'القطاع الطبي والصحي',
    challenge: 'بناء مصداقية عالية واستقطاب مراجعين للخدمات التخصصية وعلاجات الأسنان والعلاج الطبيعي.',
    solution: 'محتوى تثقيفي يقدمه الأطباء أنفسهم للإجابة على تساؤلات المرضى وتوضيح نتائج الحالات قبل وبعد بدقة وشفافية متناهية.',
    results: [
      { label: 'زيادة الحجوزات', value: '+65%' },
      { label: 'اتصالات الاستفسار', value: '+240%' },
      { label: 'ثقة المراجعين', value: '98%' }
    ],
    quote: 'التسويق الطبي يحتاج دقة والتزام، و OUT ZONE أثبتوا أنهم على قدر المسؤولية والاحترافية.'
  }
];

export const WHY_US = [
  {
    id: 'custom',
    title: 'حلول مخصصة لنشاطك',
    description: 'لا نؤمن بالحلول الجاهزة؛ نصمم خطة تسويقية تناسب جمهورك وميزانيتك وطبيعة قطاع عملك تحديداً.',
    icon: 'target'
  },
  {
    id: 'measurable',
    title: 'نتائج قابلة للقياس',
    description: 'نركز على مؤشرات الأداء الحقيقية: المبيعات، العملاء المحتملين، والعائد على الاستثمار، وليس مجرد أرقام وهمية.',
    icon: 'chart'
  },
  {
    id: 'data',
    title: 'استراتيجية مبنية على البيانات',
    description: 'قراراتنا وحملاتنا الإعلانية تُبنى على تحليلات الأرقام واختبارات الجماهير للحصول على أعلى كفاءة وأقل تكلفة.',
    icon: 'brain'
  },
  {
    id: 'team',
    title: 'فريق متكامل وخبير',
    description: 'فريق عمل متناغم يضم مصممين، كتاب محتوى، صناع فيديو، وخبراء ميديا باينج يعملون كفريقك الداخلي.',
    icon: 'team'
  }
];
