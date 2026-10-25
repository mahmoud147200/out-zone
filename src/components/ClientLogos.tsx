import React from 'react';
import { CLIENTS } from '../data/content';
import { Award } from 'lucide-react';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-14 bg-navy-950 relative overflow-hidden border-b border-white/5">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-brandOrange-500/5 rounded-full blur-3xl pointer-events-none" />

      <Reveal3D direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-3">
          <Award className="w-3.5 h-3.5 text-brandOrange-400" />
          <span>شركاء النجاح والنمو</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          علامات تجارية نعتز ببناء وتطوير حضورها الرقمي
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          من قطاع المطاعم والتجزئة، إلى العيادات الطبية والشركات الصناعية والتقنية
        </p>
      </Reveal3D>

      {/* Grid of Client Logos with 3D Scroll & Hover Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {CLIENTS.map((client, idx) => (
            <TiltCard3D key={client.id} index={idx} intensity={12}>
              <div className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-navy-900/70 hover:bg-navy-900 border border-white/10 hover:border-brandOrange-500/50 transition-all duration-300 hover:shadow-[0_12px_30px_-5px_rgba(249,115,22,0.2)] h-full">
                <div className="h-14 w-full flex items-center justify-center p-1">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-[11px] font-bold text-slate-200 group-hover:text-white transition-colors truncate max-w-[120px]">
                    {client.name}
                  </div>
                  <div className="text-[9px] text-slate-400 group-hover:text-brandOrange-400 transition-colors">
                    {client.category}
                  </div>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};
