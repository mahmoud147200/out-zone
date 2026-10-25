import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { Award, TrendingUp, Quote, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';

interface CaseStudiesProps {
  onOpenConsultation: (projectTitle?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = CASE_STUDIES[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-navy-900/60 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-electric-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with 3D Scroll Reveal */}
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 border border-brandOrange-500/30 text-xs font-semibold text-brandOrange-400 mb-4 shadow-[0_0_12px_rgba(249,115,22,0.15)]">
            <Award className="w-4 h-4 text-brandOrange-400" />
            <span>دراسات حالة بالأرقام</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            قصص نجاح واقعية{' '}
            <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent">
              مع شركاء النجاح
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            كيف ساعدت استراتيجيات OUT ZONE العلامات التجارية على مضاعفة مبيعاتها وبناء جمهور وفيّ.
          </p>
        </Reveal3D>

        {/* Case Study Switcher Tabs */}
        <Reveal3D delay={0.1} className="flex flex-wrap justify-center gap-3 mb-10">
          {CASE_STUDIES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.35)] scale-105'
                  : 'bg-navy-800/80 hover:bg-navy-800 text-slate-300 border border-white/5'
              }`}
            >
              <span>{item.client}</span>
              <span className="text-[10px] opacity-75 font-normal">({item.category})</span>
            </button>
          ))}
        </Reveal3D>

        {/* Active Case Study Detail Card with 3D Tilt & Tab Flip */}
        <TiltCard3D intensity={5}>
          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Subtle accent border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brandOrange-500 via-amber-400 to-electric-500" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase.id}
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -15, rotateX: -8 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Story Details (Right in RTL layout) */}
                <div className="lg:col-span-7 space-y-6 text-right">
                  <div>
                    <span className="text-xs font-bold text-brandOrange-400 uppercase tracking-wider">
                      {currentCase.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {currentCase.client}
                    </h3>
                  </div>

                  {/* Challenge */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xs font-bold text-slate-400 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      <span>التحدي قبل البدء:</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-2xl bg-brandOrange-500/10 border border-brandOrange-500/20">
                    <div className="text-xs font-bold text-brandOrange-300 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>استراتيجية OUT ZONE وحلول التنفيذ:</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="flex items-start gap-3 pt-2 text-slate-300 italic text-xs sm:text-sm">
                    <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p>"{currentCase.quote}"</p>
                  </div>
                </div>

                {/* Results Counters (Left in RTL) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                  <div className="p-6 rounded-3xl bg-navy-950/80 border border-white/10 shadow-inner space-y-5">
                    <div className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>المؤشرات المحققة في الحملة</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                      {currentCase.results.map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-4 rounded-2xl bg-navy-900 border border-brandOrange-500/20 hover:border-brandOrange-500/50 transition-all flex items-center justify-between"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-slate-300">
                            {res.label}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-amber-400 text-glow-orange">
                            {res.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(currentCase.client)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-brandOrange-600 to-brandOrange-500 hover:from-brandOrange-500 hover:to-amber-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brandOrange-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <span>ابدأ قصة نجاح علامتك معنا</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};
