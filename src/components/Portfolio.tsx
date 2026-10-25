import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/content';
import { Briefcase, ArrowUpLeft, TrendingUp, Eye } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';

interface PortfolioProps {
  onSelectProject: (item: PortfolioItem) => void;
  onOpenConsultation: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'الكل', slug: 'all' },
    { label: 'مطاعم ومقاهي', slug: 'restaurants' },
    { label: 'مستحضرات وتجميل', slug: 'cosmetics' },
    { label: 'عيادات ورياضة', slug: 'clinics' },
    { label: 'أزياء وتجزئة', slug: 'fashion' },
    { label: 'عقارات واستثمار', slug: 'realestate' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.categorySlug === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden w-full">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-brandOrange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with 3D Scroll Reveal */}
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-electric-500/30 text-xs font-semibold text-electric-400 mb-4 shadow-[0_0_12px_rgba(14,165,233,0.15)]">
            <Briefcase className="w-4 h-4 text-electric-400" />
            <span>معرض الأعمال والإنجازات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            شاهد بعضاً من{' '}
            <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent">
              أعمالنا وإنجازاتنا
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
            نتائج حقيقية وملموسة وصور حية من حملات ومشاريع حققناها مع شركائنا في مختلف القطاعات التجارية.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.slug
                    ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.5)] scale-105'
                    : 'bg-navy-900/90 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal3D>

        {/* Portfolio Grid with 3D Cards & Crystal-Clear HD Images */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          style={{ perspective: '1400px' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <TiltCard3D
                key={item.id}
                index={idx}
                intensity={11}
                onClick={() => onSelectProject(item)}
                className="group rounded-3xl overflow-hidden bg-navy-900/90 border border-white/15 hover:border-brandOrange-500/70 transition-colors duration-500 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.22)] flex flex-col justify-between"
              >
                {/* HD Image Container — Zero Blur, High Clarity */}
                <div className="relative aspect-[16/11] overflow-hidden bg-navy-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center brightness-105 contrast-[1.04] group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle bottom gradient only at the very bottom edge for badge readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent pointer-events-none" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-navy-950/85 text-brandOrange-400 border border-brandOrange-500/40 shadow-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Quick View Icon on Hover */}
                  <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-navy-950/80 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Eye className="w-4 h-4 text-brandOrange-400" />
                  </div>

                  {/* Growth / ROAS Badge on Image */}
                  <div className="absolute bottom-3.5 left-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/95 text-navy-950 text-xs font-black shadow-[0_4px_15px_rgba(16,185,129,0.5)]">
                    <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{item.result}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-navy-900/95 to-navy-950">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-brandOrange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-brandOrange-400 transition-colors">
                    <span>عرض تفاصيل المشروع والنتائج</span>
                    <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA for portfolio */}
        <Reveal3D delay={0.15} className="mt-12 sm:mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 rounded-2xl sm:rounded-full text-xs sm:text-base font-bold text-white bg-navy-900 hover:bg-navy-800 border border-white/15 hover:border-brandOrange-500/50 shadow-lg hover:shadow-brandOrange-500/20 transition-all group max-w-full"
          >
            <span>هل تريد نتائج مماثلة لمشروعك؟</span>
            <span className="text-brandOrange-400 group-hover:underline">تحدث معنا الآن ←</span>
          </button>
        </Reveal3D>

      </div>
    </section>
  );
};
