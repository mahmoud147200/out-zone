import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import {
  LineChart,
  Palette,
  Video,
  Share2,
  Megaphone,
  BarChart,
  CheckCircle2,
  ArrowUpLeft,
  Maximize2,
  Layers,
  Sparkles
} from 'lucide-react';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';

interface ServicesProps {
  onOpenConsultation: (serviceName?: string) => void;
  onOpenPosterModal: (posterUrl: string, title: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation, onOpenPosterModal }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
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

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden w-full">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-brandOrange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with 3D Scroll Reveal */}
        <Reveal3D direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-brandOrange-500/30 text-xs font-semibold text-brandOrange-400 mb-4 shadow-[0_0_12px_rgba(249,115,22,0.15)]">
                <Layers className="w-4 h-4 text-brandOrange-400" />
                <span>خدماتنا المتكاملة</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                حلول تسويقية متكاملة{' '}
                <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent">
                  لنمو علامتك التجارية
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
                كل ما تحتاجه في مكان واحد، من الاستراتيجية إلى التنفيذ وصناعة المحتوى والإعلانات الممولة.
              </p>
            </div>

            {/* Button to view official design poster */}
            <div className="flex items-center">
              <button
                onClick={() =>
                  onOpenPosterModal('/assets/services/services-poster.png', 'إنفوجرافيك خدمات OUT ZONE المتكاملة')
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-white/10 hover:border-brandOrange-500/40 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all shadow-md group max-w-full"
              >
                <Maximize2 className="w-4 h-4 text-brandOrange-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>عرض بوستر الخدمات عالي الدقة</span>
              </button>
            </div>
          </div>
        </Reveal3D>

        {/* 6 Premium Service Cards with 3D Scroll & Hover Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const isHovered = hoveredCard === service.id;
            return (
              <TiltCard3D
                key={service.id}
                index={idx}
                intensity={9}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative h-full rounded-3xl p-6 sm:p-7 transition-all duration-400 flex flex-col justify-between group overflow-hidden ${
                    isHovered
                      ? 'bg-navy-850/95 border-brandOrange-500/60 shadow-[0_20px_45px_-10px_rgba(249,115,22,0.3)]'
                      : 'bg-navy-900/70 border-white/10 hover:border-white/20'
                  } border backdrop-blur-xl`}
                >
                  {/* Subtle top card glow line */}
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
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
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
                    <span>اطلب هذه الخدمة</span>
                    <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
