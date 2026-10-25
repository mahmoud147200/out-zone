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

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  logo: string;
  lightModeInverted?: boolean;
}

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
  { id: 'bunhood', name: 'bunhood Burgers', category: 'مطاعم ومقاهي', logo: '/assets/clients/client-bunhood.png' },
  { id: 'lucin', name: 'Atyab LUCIN', category: 'عطور ومستحضرات تجميل', logo: '/assets/clients/client-lucin.png' },
  { id: 'alkindi', name: 'مركز الكندي ALKINDI', category: 'عيادات ومراكز طبية', logo: '/assets/clients/client-alkindi.png' },
  { id: 'fanar', name: 'الفنار لطب الأسنان', category: 'عيادات أسنان', logo: '/assets/clients/client-fanar.png' },
  { id: 'athar', name: 'شركة مصنع أثر', category: 'صناعة وتجارة', logo: '/assets/clients/client-athar.png' },
  { id: 'micros', name: 'MICROS Systems', category: 'حلول وتقنية', logo: '/assets/clients/client-micros.png' },
  { id: 'kemet', name: 'Kemet Systems', category: 'أنظمة ذكية', logo: '/assets/clients/client-kemet.png' },
  { id: 'nada', name: 'NADA Lifecoach', category: 'استشارات وتدريب', logo: '/assets/clients/client-nada.png' },
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
