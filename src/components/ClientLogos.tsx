import React from 'react';
import { getClients, ClientItem } from '../data/content';
import { Award, Eye } from 'lucide-react';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { useLanguage } from '../context/LanguageContext';

interface ClientLogosProps {
  onSelectClient: (client: ClientItem) => void;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ onSelectClient }) => {
  const { lang, isRTL } = useLanguage();
  const clientsList = getClients(lang);

  return (
    <section className="py-14 bg-navy-950 relative overflow-hidden border-b border-white/5">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-brandOrange-500/5 rounded-full blur-3xl pointer-events-none" />

      <Reveal3D direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-3">
          <Award className="w-3.5 h-3.5 text-brandOrange-400" />
          <span>
            {isRTL
              ? 'شركاء النجاح والنمو — اضغط على أي لوجو عشان تشوف شغلنا معاه'
              : 'Success Partners — Click Any Logo to Explore Our Work Together'}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {isRTL
            ? 'براندات وشركات نفتخر بتطوير حضورها الرقمي ومبيعاتها'
            : 'Brands We Proudly Empower & Scale'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          {isRTL
            ? 'اضغط على لوجو أي عميل يبطّل لك الكرت التعريفي وكل البوسترات والفيديوهات اللي نفذناها له'
            : 'Click any client logo to open their 3D business profile card, posters, and Reels videos'}
        </p>
      </Reveal3D>

      {/* Grid of Client Logos with 3D Scroll & Hover Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {clientsList.map((client, idx) => (
            <TiltCard3D
              key={client.id}
              index={idx}
              intensity={12}
              onClick={() => onSelectClient(client)}
            >
              <div className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-navy-900/70 hover:bg-navy-900 border border-white/10 hover:border-brandOrange-500/60 transition-all duration-300 hover:shadow-[0_12px_30px_-5px_rgba(249,115,22,0.25)] h-full cursor-pointer">
                <div className="h-14 w-full flex items-center justify-center p-1 relative">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center w-full">
                  <div className="text-[11px] font-bold text-slate-200 group-hover:text-white transition-colors truncate max-w-full">
                    {client.arabicName}
                  </div>
                  <div className="text-[9px] text-slate-400 group-hover:text-brandOrange-400 transition-colors truncate">
                    {client.posters.length} {isRTL ? 'بوستر' : 'Posters'} • {client.videos.length}{' '}
                    {isRTL ? 'فيديو' : 'Videos'}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-extrabold text-brandOrange-400 opacity-80 group-hover:opacity-100">
                    <Eye className="w-2.5 h-2.5" />
                    <span>{isRTL ? 'شوف الشغل' : 'View Work'}</span>
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
