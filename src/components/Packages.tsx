import React, { useState } from 'react';
import { PACKAGES, Package } from '../data/content';
import {
  Check,
  Crown,
  ArrowLeft,
  Maximize2,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';

interface PackagesProps {
  onSelectPackage: (pkgName: string) => void;
  onOpenPosterModal: (posterUrl: string, title: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage, onOpenPosterModal }) => {
  const [, setHoveredPackage] = useState<string | null>('medium');

  const handlePackageClick = (pkg: Package) => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF5E14', '#0EA5E9', '#FBBF24', '#FFFFFF']
      });
    } catch {
      // ignore
    }
    onSelectPackage(pkg.name);
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-navy-900/40 relative overflow-hidden w-full">
      {/* Background neon ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[400px] bg-brandOrange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with 3D Scroll Reveal */}
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-brandOrange-500/30 text-xs font-semibold text-brandOrange-400 mb-4 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <Crown className="w-4 h-4 text-brandOrange-400" />
            <span>باقات مرنة ومدروسة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            اختر الباقة المناسبة{' '}
            <span className="bg-gradient-to-l from-brandOrange-400 via-amber-300 to-electric-400 bg-clip-text text-transparent">
              لنمو علامتك التجارية
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
            باقات مرنة تناسب جميع الأنشطة والأحجام، بأعلى معايير الجودة والإتقان.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() =>
                onOpenPosterModal('/assets/packages/packages-all.png', 'بوستر باقات OUT ZONE التسويقية الرسمية')
              }
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800/80 hover:bg-navy-800 border border-white/10 hover:border-brandOrange-500/40 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all shadow-md group max-w-full"
            >
              <Maximize2 className="w-4 h-4 text-brandOrange-400 group-hover:scale-110 transition-transform shrink-0" />
              <span>عرض بوستر الباقات بدقة عالية</span>
            </button>
          </div>
        </Reveal3D>

        {/* 3 Pricing Packages with 3D Scroll & Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {PACKAGES.map((pkg, idx) => {
            const isMedium = pkg.isPopular;

            return (
              <TiltCard3D
                key={pkg.id}
                index={idx}
                intensity={8}
                className={`h-full ${isMedium ? 'lg:-translate-y-3 z-20' : 'z-10'}`}
              >
                <div
                  onMouseEnter={() => setHoveredPackage(pkg.id)}
                  className={`relative h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-400 ${
                    isMedium
                      ? 'bg-gradient-to-b from-navy-850 to-navy-900 border-2 border-brandOrange-500 shadow-[0_0_35px_rgba(249,115,22,0.35)]'
                      : 'bg-navy-900/70 border border-white/10 hover:border-electric-500/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]'
                  } backdrop-blur-2xl group`}
                >
                  {/* Popular Badge for Medium Package */}
                  {isMedium && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white text-[11px] font-extrabold shadow-lg shadow-brandOrange-500/50 flex items-center gap-1.5 whitespace-nowrap z-30">
                      <Crown className="w-3.5 h-3.5" />
                      <span>الأكثر طلباً ومبيعاً ★</span>
                    </div>
                  )}

                  <div>
                    {/* Top package header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                          <span>{pkg.name}</span>
                          {isMedium && <Flame className="w-5 h-5 text-brandOrange-500 animate-pulse" />}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">{pkg.subtitle}</p>
                      </div>

                      <button
                        onClick={() => onOpenPosterModal(pkg.posterPath, `بوستر ${pkg.name}`)}
                        title="عرض بوستر الباقة بدقة عالية"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-brandOrange-400 transition-colors"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price display */}
                    <div className="py-4 my-3 border-y border-white/10 flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-5xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                          {pkg.price}
                        </span>
                        <span className="text-lg sm:text-2xl font-bold text-brandOrange-400 ml-1">KD</span>
                        <span className="text-xs text-slate-400">/ {pkg.period}</span>
                      </div>

                      <div className="text-left text-[10px] sm:text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        شامل الإدارة والتقارير
                      </div>
                    </div>

                    {/* Monthly Deliverables Badges (Posts, Stories, Reels) */}
                    <div className="grid grid-cols-3 gap-2 my-4 text-center">
                      <div className="p-2 rounded-xl bg-navy-800/80 border border-white/5">
                        <div className="text-lg sm:text-2xl font-black text-brandOrange-400">{pkg.posts}</div>
                        <div className="text-[10px] text-slate-300 font-semibold mt-0.5">بوست شهرياً</div>
                      </div>
                      <div className="p-2 rounded-xl bg-navy-800/80 border border-white/5">
                        <div className="text-lg sm:text-2xl font-black text-electric-400">{pkg.stories}</div>
                        <div className="text-[10px] text-slate-300 font-semibold mt-0.5">ستوري شهرياً</div>
                      </div>
                      <div className="p-2 rounded-xl bg-navy-800/80 border border-white/5">
                        <div className="text-lg sm:text-2xl font-black text-amber-400">{pkg.reels}</div>
                        <div className="text-[10px] text-slate-300 font-semibold mt-0.5">ريل شهرياً</div>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="mt-5">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                        ما تتضمنه الباقة:
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <div
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isMedium
                                  ? 'bg-brandOrange-500/20 text-brandOrange-400 border border-brandOrange-500/40'
                                  : 'bg-electric-500/20 text-electric-400 border border-electric-500/40'
                              }`}
                            >
                              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="mt-7 pt-5 border-t border-white/10">
                    <button
                      onClick={() => handlePackageClick(pkg)}
                      className={`w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 ${
                        isMedium
                          ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 hover:from-brandOrange-500 hover:to-amber-400 text-white shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-[1.02]'
                          : 'bg-navy-800 hover:bg-electric-600 text-white border border-white/10 hover:border-electric-400 shadow-md hover:scale-[1.02]'
                      }`}
                    >
                      <span>اختر {pkg.name}</span>
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-2">
                      بدون عقود احتكارية • إمكانية الترقية في أي وقت
                    </p>
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
