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

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'web':
        return <Globe className="w-5 h-5 sm:w-6 sm:h-6" />;
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
            <div className="flex items-center">
              <button
                onClick={() =>
                  onOpenPosterModal(
                    '/assets/services/services-poster.png',
                    isRTL
                      ? 'إنفوجرافيك خدمات OUT ZONE المتكاملة'
                      : 'OUT ZONE Integrated Services Infographic'
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-white/10 hover:border-brandOrange-500/40 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all shadow-md group max-w-full"
              >
                <Maximize2 className="w-4 h-4 text-brandOrange-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>
                  {isRTL ? 'عرض بوستر الخدمات عالي الدقة' : 'View HD Services Poster'}
                </span>
              </button>
            </div>
          </div>
        </Reveal3D>

        {/* Service Cards Grid with Featured Website + Business Email Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, idx) => {
            const isHovered = hoveredCard === service.id;
            const isWebService = service.id === 'web';

            return (
              <TiltCard3D
                key={service.id}
                index={idx}
                intensity={8}
                className={`h-full ${
                  isWebService ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative h-full rounded-3xl p-6 sm:p-8 transition-all duration-400 flex flex-col justify-between group overflow-hidden ${
                    isWebService
                      ? 'bg-gradient-to-br from-navy-850/98 via-navy-900/95 to-navy-950 border-2 border-brandOrange-500/70 shadow-[0_20px_55px_-10px_rgba(249,115,22,0.32)]'
                      : isHovered
                      ? 'bg-navy-850/95 border-brandOrange-500/60 shadow-[0_20px_45px_-10px_rgba(249,115,22,0.3)]'
                      : 'bg-navy-900/70 border-white/10 hover:border-white/20'
                  } border backdrop-blur-xl ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {/* Top card glow line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brandOrange-500 via-amber-400 to-electric-500 transition-opacity duration-300 ${
                      isHovered || isWebService ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className={isWebService ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center' : ''}>
                    <div className={isWebService ? 'lg:col-span-7' : ''}>
                      {/* Top Header: Icon & Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-5 sm:mb-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                              isHovered || isWebService
                                ? 'bg-gradient-to-tr from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30 rotate-3 scale-105'
                                : 'bg-navy-800 text-brandOrange-400 border border-white/5'
                            }`}
                          >
                            {getServiceIcon(service.iconName)}
                          </div>

                          {service.highlightBadge && (
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold shadow-sm">
                              <MailCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{service.highlightBadge}</span>
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] sm:text-xs font-extrabold px-3.5 py-1 rounded-full bg-brandOrange-500/15 border border-brandOrange-500/30 text-brandOrange-300">
                          {service.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-amber-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed mb-5 sm:mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className={isWebService ? 'lg:col-span-5 bg-navy-950/80 border border-white/10 rounded-2xl p-5' : ''}>
                      {/* Features list */}
                      <ul className="space-y-2.5 sm:space-y-3 mb-6">
                        {service.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom Action Button */}
                      <button
                        onClick={() => onOpenConsultation(service.title)}
                        className={`w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all duration-300 ${
                          isHovered || isWebService
                            ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30 hover:scale-[1.02]'
                            : 'bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white'
                        }`}
                      >
                        <span>
                          {isWebService
                            ? isRTL
                              ? 'اطلب موقعك الإلكتروني + إيميل البزنس الحين'
                              : 'Order Your Website + Official Business Email'
                            : isRTL
                            ? 'اطلب هالخدمة الحين'
                            : 'Request This Service'}
                        </span>
                        <ArrowIcon className="w-4 h-4 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};
