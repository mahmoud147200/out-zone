import React from 'react';
import { WHY_US } from '../data/content';
import { Target, BarChart2, Cpu, Users2, Sparkles, Maximize2, CheckCircle2 } from 'lucide-react';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';

interface WhyUsProps {
  onOpenPosterModal: (posterUrl: string, title: string) => void;
  onOpenConsultation: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenPosterModal, onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'target':
        return <Target className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'chart':
        return <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'brain':
        return <Cpu className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'team':
        return <Users2 className="w-6 h-6 sm:w-7 sm:h-7" />;
      default:
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden w-full">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brandOrange-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-electric-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with 3D Scroll Reveal */}
        <Reveal3D direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-brandOrange-500/30 text-xs font-semibold text-brandOrange-400 mb-4 shadow-[0_0_12px_rgba(249,115,22,0.15)]">
                <Sparkles className="w-4 h-4 text-brandOrange-400" />
                <span>لماذا تختار Out Zone؟</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                شريكك الحقيقي للنمو الرقمي{' '}
                <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent">
                  ومضاعفة المبيعات
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
                مش بس تنفيذ.. لكن بناء استراتيجية مستدامة تمنح علامتك التجارية تميزاً حقيقياً ومبيعات مستمرة.
              </p>
            </div>

            <button
              onClick={() =>
                onOpenPosterModal('/assets/about/about-poster.png', 'هوية ورؤية OUT ZONE الرسمية — Beyond Limits')
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-white/10 hover:border-brandOrange-500/40 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all shadow-md group self-start md:self-auto max-w-full"
            >
              <Maximize2 className="w-4 h-4 text-brandOrange-400 group-hover:scale-110 transition-transform shrink-0" />
              <span>عرض بوستر الرؤية والهوية</span>
            </button>
          </div>
        </Reveal3D>

        {/* 4 Core Pillars Grid with 3D Scroll & Hover Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {WHY_US.map((item, idx) => (
            <TiltCard3D key={item.id} index={idx} intensity={10} className="h-full">
              <div className="glass-card h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-brandOrange-500/50 transition-all duration-400 group shadow-xl relative overflow-hidden">
                {/* Top ambient highlight on card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brandOrange-500/10 to-transparent rounded-bl-3xl pointer-events-none" />

                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-navy-800 to-navy-700 border border-white/10 flex items-center justify-center text-brandOrange-400 group-hover:text-white group-hover:from-brandOrange-600 group-hover:to-amber-500 group-hover:shadow-lg group-hover:shadow-brandOrange-500/30 transition-all duration-300 mb-5 sm:mb-6 shrink-0 group-hover:rotate-6">
                    {getIcon(item.icon)}
                  </div>

                  <div className="text-xs font-bold text-slate-400 mb-1">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>معيار أساسي في عملنا</span>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Brand Promise Banner with 3D Flip Reveal */}
        <Reveal3D direction="flip" delay={0.1}>
          <div className="glass-card rounded-3xl p-6 sm:p-12 border border-brandOrange-500/30 relative overflow-hidden bg-gradient-to-r from-navy-900/90 via-navy-850/80 to-navy-900/90">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-8 text-right">
                <span className="text-[10px] sm:text-xs font-bold text-brandOrange-400 uppercase tracking-widest">
                  OUT ZONE • BEYOND LIMITS, BEYOND IMAGINATION
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-2 leading-snug">
                  نحن لا ندير حملات فقط.. نحن نبني أصولاً رقمية تدوم لسنوات
                </h3>
                <p className="text-xs sm:text-base text-slate-300 mt-2 sm:mt-3 leading-relaxed">
                  التميز يتطلب محتوى جريء وإعلانات ذكية مدروسة. انضم لأكثر من 120 علامة تجارية تثق بنا اليوم.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-brandOrange-600 to-amber-500 hover:from-brandOrange-500 hover:to-amber-400 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brandOrange-500/30 hover:scale-105 transition-all text-center"
                >
                  تحدث مع فريقنا الآن
                </button>
              </div>
            </div>
          </div>
        </Reveal3D>

      </div>
    </section>
  );
};
