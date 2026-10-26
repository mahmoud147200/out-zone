import React, { useState } from 'react';
import { getServices } from '../data/content';
import {
  LineChart,
  Palette,
  Video,
  Share2,
  Megaphone,
  BarChart,
  CheckCircle2,
  ArrowUpLeft,
  ArrowUpRight,
  Maximize2,
  Layers,
  Sparkles,
  Globe,
  MailCheck,
  ShieldCheck,
  MonitorSmartphone,
} from 'lucide-react';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onOpenConsultation: (serviceName?: string) => void;
  onOpenPosterModal: (posterUrl: string, title: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation, onOpenPosterModal }) => {
  const { lang, isRTL } = useLanguage();
  const servicesList = getServices(lang);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const webService = servicesList.find((s) => s.id === 'web');
  const coreServices = servicesList.filter((s) => s.id !== 'web');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'web':
        return <Globe className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'strategy':
        return <LineChart className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'design':
        return <Palette className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'content':
        return <Video className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'social':
        return <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'ads':
        return <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'analytics':
        return <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden w-full">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-brandOrange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header with 3D Scroll Reveal */}
        <Reveal3D direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className={`max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-brandOrange-500/30 text-xs font-semibold text-brandOrange-400 mb-4 shadow-[0_0_12px_rgba(249,115,22,0.15)]">
                <Layers className="w-4 h-4 text-brandOrange-400" />
                <span>{isRTL ? 'شنو نقدم لك في OUT ZONE؟' : 'Our Integrated Services'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {isRTL ? 'حلول رقمية وتسويقية شاملة ' : 'Complete Digital & Marketing Solutions '}
                <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent">
                  {isRTL ? 'تكبّر مشروعك وتزيد مبيعاتك' : 'Built to Scale Your Brand'}
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
                {isRTL
                  ? 'كل اللي يحتاجه مشروعك بمكان واحد: من تصميم وإنشاء المواقع الإلكترونية مع إيميل بزنس رسمي، لي إدارة السوشيال ميديا، مونتاج الريلز، والحملات الإعلانية الممولة.'
                  : 'Everything your business needs under one roof: from custom website development with an official business email to social media management, 4K Reels, and high-ROAS paid ads.'}
              </p>
            </div>

            {/* Button to view official design poster */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() =>
                  onOpenPosterModal(
                    '/assets/services/services-poster.png',
                    isRTL
                      ? 'إنفوجرافيك خدمات OUT ZONE المتكاملة'
                      : 'OUT ZONE Integrated Services Infographic'
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-white/10 hover:border-brandOrange-500/40 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all shadow-md group"
              >
                <Maximize2 className="w-4 h-4 text-brandOrange-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>
                  {isRTL ? 'عرض بوستر الخدمات عالي الدقة' : 'View HD Services Poster'}
                </span>
              </button>
            </div>
          </div>
        </Reveal3D>

        {/* 1. Featured Full-Width Card: Website Development + Official Business Email */}
        {webService && (
          <div className="mb-8 lg:mb-10 w-full">
            <TiltCard3D index={0} intensity={5} wrapperClassName="w-full">
              <div
                className={`relative w-full rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-navy-850/95 via-navy-900/95 to-navy-950 border-2 border-brandOrange-500/60 shadow-[0_20px_55px_-10px_rgba(249,115,22,0.28)] overflow-hidden backdrop-blur-xl ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brandOrange-500 via-amber-400 to-electric-500" />

                {/* Subtle Ambient Corner Glow */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-brandOrange-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-electric-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Right/Main Column (7 cols): Title, Description & 2x2 Features */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30 flex items-center justify-center shrink-0">
                        {getServiceIcon('web')}
                      </div>

                      {webService.highlightBadge && (
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-extrabold">
                          <MailCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{webService.highlightBadge}</span>
                        </span>
                      )}

                      <span className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-brandOrange-500/15 border border-brandOrange-500/30 text-brandOrange-300">
                        {webService.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug">
                      {webService.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {webService.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {webService.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-navy-950/75 border border-white/10 text-xs sm:text-sm text-slate-100 font-semibold"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Left Column (5 cols): Official Domain + Business Email Visual Card & CTA */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-5 p-6 sm:p-7 rounded-3xl bg-navy-950/90 border border-white/15 shadow-inner">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-brandOrange-400" />
                          <span>
                            {isRTL
                              ? 'حضور رسمي متكامل لشركتك'
                              : 'Complete Official Corporate Presence'}
                          </span>
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          SSL + SEO Ready
                        </span>
                      </div>

                      {/* Official Website Badge Box */}
                      <div className="p-4 rounded-2xl bg-navy-900/90 border border-white/10 flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-electric-500/15 text-electric-400 flex items-center justify-center shrink-0">
                          <MonitorSmartphone className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-slate-400 font-semibold">
                            {isRTL
                              ? 'موقع إلكتروني سريع ومتجاوب 100%'
                              : 'Blazing-Fast Responsive Website'}
                          </div>
                          <div
                            dir="ltr"
                            className="text-sm sm:text-base font-mono font-bold text-white truncate"
                          >
                            https://www.yourbrand.com
                          </div>
                        </div>
                      </div>

                      {/* Official Business Email Badge Box */}
                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <MailCheck className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-emerald-300 font-bold">
                            {isRTL
                              ? 'إيميل بزنس رسمي باسم شركتك (مشمول)'
                              : 'Official Business Email Included'}
                          </div>
                          <div
                            dir="ltr"
                            className="text-sm sm:text-base font-mono font-black text-white truncate"
                          >
                            info@yourbrand.com
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                        <ShieldCheck className="w-4 h-4 text-brandOrange-400 shrink-0" />
                        <span>
                          {isRTL
                            ? 'ربط مباشر مع محركات البحث Google والواتساب'
                            : 'Direct Google Search Console & WhatsApp integration'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenConsultation(webService.title)}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brandOrange-600 via-brandOrange-500 to-amber-500 hover:from-brandOrange-500 hover:to-amber-400 text-white font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span>
                        {isRTL
                          ? 'اطلب موقعك الإلكتروني + إيميل البزنس الحين'
                          : 'Order Your Website + Business Email Now'}
                      </span>
                      <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>
        )}

        {/* 2. Symmetrical 3x2 Grid for Core Marketing Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, idx) => {
            const isHovered = hoveredCard === service.id;

            return (
              <TiltCard3D
                key={service.id}
                index={idx + 1}
                intensity={8}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative h-full rounded-3xl p-6 sm:p-7 transition-all duration-400 flex flex-col justify-between group overflow-hidden ${
                    isHovered
                      ? 'bg-navy-850/95 border-brandOrange-500/60 shadow-[0_20px_45px_-10px_rgba(249,115,22,0.3)]'
                      : 'bg-navy-900/70 border-white/10 hover:border-white/20'
                  } border backdrop-blur-xl ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {/* Top card glow line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brandOrange-500 to-transparent transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div>
                    {/* Top Header: Icon & Tag */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isHovered
                            ? 'bg-gradient-to-tr from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30 rotate-6 scale-110'
                            : 'bg-navy-800 text-brandOrange-400 border border-white/5'
                        }`}
                      >
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-amber-300 group-hover:border-amber-500/30 transition-colors">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Button */}
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-r from-brandOrange-600 to-brandOrange-500 text-white shadow-md shadow-brandOrange-500/30'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{isRTL ? 'اطلب هالخدمة الحين' : 'Request This Service'}</span>
                    <ArrowIcon className="w-4 h-4 transition-transform" />
                  </button>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};
