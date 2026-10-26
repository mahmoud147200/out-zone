import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star, Sparkles, CheckCircle2, Layers, TrendingUp, Award, Globe } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { isRTL } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-navy-950 w-full"
    >
      {/* Background ambient neon lighting */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-[420px] h-72 sm:h-[420px] bg-brandOrange-500/15 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-[420px] h-72 sm:h-[420px] bg-electric-500/15 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Content */}
          <div
            className={`lg:col-span-7 flex flex-col items-start ${
              isRTL ? 'text-right' : 'text-left'
            } w-full`}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-900/90 border border-brandOrange-500/35 text-brandOrange-400 text-xs sm:text-sm font-bold mb-6 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <span className="w-2 h-2 rounded-full bg-brandOrange-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-brandOrange-400 shrink-0" />
              <span>
                {isRTL
                  ? 'وكالة تسويق رقمي، صناعة محتوى، وتصميم مواقع احترافية بالكويت'
                  : 'Full-Service Digital Marketing, Content & Web Agency in Kuwait'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-black text-white tracking-normal leading-[1.4] mb-6 w-full">
              <span className="block py-1">
                {isRTL ? 'نحوّل حضورك الرقمي' : 'We Turn Your Digital Presence'}
              </span>
              <span className="block py-1.5 mt-1 bg-gradient-to-l from-brandOrange-500 via-brandOrange-400 to-amber-300 bg-clip-text text-transparent">
                {isRTL
                  ? 'حق نمو صجي ومبيعات ما توقف'
                  : 'Into Real Growth & Non-Stop Sales'}
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-[1.9] mb-8 font-normal">
              {isRTL
                ? 'نبتكر لك حلول تسويقية متكاملة، ونصمم لك مواقع إلكترونية احترافية مع إيميل بزنس رسمي باسم شركتك، ومحتوى إبداعي يخلّي براندك يوصل حق جمهورك الصح بالكويت ويضاعف مبيعاتك.'
                : 'We craft end-to-end marketing strategies, build high-converting websites with an official business email on your domain, and produce creative content that scales your brand and multiplies your revenue.'}
            </p>

            {/* Quick Feature Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brandOrange-400 shrink-0" />
                <span>{isRTL ? 'إدارة احترافية لحساباتك' : 'Pro Social Media Management'}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                <span>{isRTL ? 'مونتاج ريلز يشد الانتباه' : 'High-Impact Reels Editing'}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brandOrange-500/10 border border-brandOrange-500/35 text-xs sm:text-sm text-amber-200 font-bold">
                <Globe className="w-4 h-4 text-brandOrange-400 shrink-0" />
                <span>
                  {isRTL
                    ? 'إنشاء مواقع + إيميل بزنس رسمي'
                    : 'Websites + Official Business Email'}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isRTL ? 'إعلانات ممولة بعائد قوي' : 'High-ROAS Paid Ads'}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-brandOrange-600 via-brandOrange-500 to-amber-500 hover:from-brandOrange-500 hover:to-brandOrange-600 shadow-[0_0_28px_rgba(249,115,22,0.45)] hover:shadow-[0_0_38px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>{isRTL ? 'شوف باقاتنا وأسعارنا' : 'Explore Packages & Pricing'}</span>
                <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent(
                  isRTL
                    ? 'قوة فريق OUT ZONE 👋، حاب أستفسر عن خدماتكم وباقات التسويق الرقمي وتصميم المواقع.'
                    : 'Hello OUT ZONE team 👋, I would like to inquire about your digital marketing packages and website services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <span>{isRTL ? 'تواصل ويانا واتساب' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-white/10 w-full">
              <div className="flex items-center">
                <div className="flex -space-x-2 space-x-reverse overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-brandOrange-500/60 bg-navy-900 p-1 object-contain"
                    src="/assets/clients/client-bunhood.png"
                    alt="bunhood"
                    width={40}
                    height={40}
                  />
                  <img
                    className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-electric-500/60 bg-navy-900 p-1 object-contain"
                    src="/assets/clients/client-lucin.png"
                    alt="Atyab LUCIN"
                    width={40}
                    height={40}
                  />
                  <img
                    className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-brandOrange-500/60 bg-navy-900 p-1 object-contain"
                    src="/assets/clients/client-alkindi.png"
                    alt="ALKINDI"
                    width={40}
                    height={40}
                  />
                  <img
                    className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-electric-500/60 bg-navy-900 p-1 object-contain"
                    src="/assets/clients/client-fanar.png"
                    alt="Al Fanar"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-amber-300 mx-1.5">5.0 / 5.0</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  <span className="text-white font-bold">
                    {isRTL ? '+120 شركة وبراند بالكويت والخليج' : '+120 Brands in Kuwait & GCC'}
                  </span>{' '}
                  {isRTL ? 'يثقون فينا' : 'Trust Us'}
                </p>
              </div>
            </div>
          </div>

          {/* 3D Studio Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full">
            <div
              className="relative w-full max-w-[460px] transition-transform duration-500 ease-out"
              style={{
                transform: `perspective(1100px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Ambient Backglow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brandOrange-500/25 via-electric-500/20 to-amber-500/15 rounded-[36px] blur-2xl pointer-events-none" />

              {/* Main 3D Glass Showcase Card */}
              <div className="relative rounded-[32px] overflow-hidden p-6 sm:p-8 bg-gradient-to-b from-navy-850/95 via-navy-900/95 to-navy-950/95 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brandOrange-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-electric-400/80" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    OUT ZONE CREATIVE STUDIO
                  </span>
                </div>

                {/* Centerpiece: Official Brand Logo Stage */}
                <div className="relative py-8 px-6 rounded-2xl bg-navy-950/90 border border-white/10 flex flex-col items-center justify-center overflow-hidden shadow-inner mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brandOrange-500/10 via-transparent to-electric-500/10 pointer-events-none" />
                  <img
                    src="/assets/logo/logo-outzone.png"
                    alt="OUT ZONE Official Logo"
                    className="h-24 sm:h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(249,115,22,0.35)] transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-3 text-[11px] font-bold tracking-[0.22em] text-slate-400 uppercase">
                    BEYOND LIMITS • BEYOND IMAGINATION
                  </div>
                </div>

                {/* 3 Clean Visual Pillars Inside the 3D Card */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brandOrange-500/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-brandOrange-500/15 text-brandOrange-400 flex items-center justify-center mx-auto mb-2">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-extrabold text-white">
                      {isRTL ? 'هوية ومحتوى' : 'Brand & Content'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {isRTL ? 'تصاميم تفتح النفس' : 'Pro Creatives'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-electric-500/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-electric-500/15 text-electric-400 flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-extrabold text-white">
                      {isRTL ? 'مواقع وإيميل' : 'Web & Email'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {isRTL ? 'إيميل بزنس رسمي' : 'Official Domain'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-extrabold text-white">
                      {isRTL ? 'نتايج مضمونة' : 'Real Results'}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {isRTL ? 'تقارير بالأرقام' : 'Monthly ROI'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
