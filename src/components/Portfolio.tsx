import React, { useState } from 'react';
import {
  getClients,
  ClientItem,
  ClientPoster,
} from '../data/content';
import {
  Briefcase,
  Image as ImageIcon,
  Film,
  Sparkles,
  ArrowUpLeft,
  ArrowUpRight,
  Eye,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { ClientPortfolioStage } from './ClientShowcaseModal';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {
  activeClient: ClientItem;
  onSelectClient: (client: ClientItem, openModal?: boolean) => void;
  onOpenPosterLightbox: (posters: ClientPoster[], index: number) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  activeClient,
  onSelectClient,
  onOpenPosterLightbox,
  onOpenConsultation,
}) => {
  const { lang, isRTL } = useLanguage();
  const clientsList = getClients(lang);
  const [activeSector, setActiveSector] = useState<string>('all');

  const localizedActiveClient =
    clientsList.find((c) => c.id === activeClient.id) || clientsList[0];

  const sectors = isRTL
    ? [
        { label: 'كل عملائنا', slug: 'all' },
        { label: 'مطاعم وكافيهات', slug: 'restaurants' },
        { label: 'عطور وتجميل', slug: 'cosmetics' },
        { label: 'عيادات ومراكز طبية', slug: 'clinics' },
        { label: 'أنظمة وتقنية ذكية', slug: 'tech' },
        { label: 'صناعة وتدريب', slug: 'other' },
      ]
    : [
        { label: 'All Clients', slug: 'all' },
        { label: 'Restaurants & Cafes', slug: 'restaurants' },
        { label: 'Perfumes & Beauty', slug: 'cosmetics' },
        { label: 'Medical & Clinics', slug: 'clinics' },
        { label: 'Smart Tech & POS', slug: 'tech' },
        { label: 'Industry & Coaching', slug: 'other' },
      ];

  const filteredClients =
    activeSector === 'all'
      ? clientsList
      : activeSector === 'other'
      ? clientsList.filter(
          (c) => c.categorySlug === 'industry' || c.categorySlug === 'coaching'
        )
      : clientsList.filter((c) => c.categorySlug === activeSector);

  const totalPosters = clientsList.reduce((acc, c) => acc + c.posters.length, 0);
  const totalVideos = clientsList.reduce((acc, c) => acc + c.videos.length, 0);

  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden w-full border-t border-white/5"
    >
      {/* Background 3D Ambient Lighting */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-brandOrange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-brandOrange-500/35 text-xs font-bold text-brandOrange-400 mb-4 shadow-[0_0_16px_rgba(249,115,22,0.18)]">
            <Briefcase className="w-4 h-4 text-brandOrange-400" />
            <span>
              {isRTL
                ? `شغلنا مع شركاء النجاح • +${totalPosters} تصميم و +${totalVideos} فيديو`
                : `Our Client Portfolio • +${totalPosters} Designs & +${totalVideos} Videos`}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {isRTL ? 'اضغط على لوجو أي عميل ' : 'Click Any Client Logo to '}
            <span className="bg-gradient-to-l from-brandOrange-400 via-amber-300 to-electric-400 bg-clip-text text-transparent">
              {isRTL ? 'وشوف شغلنا معاه بالكامل' : 'Explore Our Full Work Together'}
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
            {isRTL
              ? 'لما تضغط على لوجو أي عميل يظهر لك الكرت التعريفي بمجال البزنس، وكل البوسترات الإعلانية والفيديوهات اللي صممناها وأنتجناها له بعرض 3D أنيق.'
              : 'Clicking any client logo reveals a 3D business profile card along with all promotional posters and Reels videos we crafted for them.'}
          </p>

          {/* Sector Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            {sectors.map((sec) => (
              <button
                key={sec.slug}
                onClick={() => setActiveSector(sec.slug)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeSector === sec.slug
                    ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.5)] scale-105'
                    : 'bg-navy-900/90 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </Reveal3D>

        {/* Interactive 3D Client Logo Cards Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 mb-14 sm:mb-18"
          style={{ perspective: '1400px' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client, idx) => {
              const isSelected = localizedActiveClient.id === client.id;
              return (
                <TiltCard3D
                  key={client.id}
                  index={idx}
                  intensity={12}
                  onClick={() => onSelectClient(client, true)}
                  className={`group rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col justify-between p-4 sm:p-6 border ${
                    isSelected
                      ? 'bg-gradient-to-b from-navy-800/95 to-navy-950 border-brandOrange-500 shadow-[0_20px_50px_rgba(249,115,22,0.28)] ring-1 ring-brandOrange-400/50'
                      : 'bg-navy-900/85 hover:bg-navy-900 border-white/10 hover:border-brandOrange-500/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(249,115,22,0.2)]'
                  }`}
                >
                  {/* Top Row: Active Badge & Quick View Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-extrabold bg-brandOrange-500/15 text-brandOrange-400 border border-brandOrange-500/30 truncate max-w-[78%]">
                      {client.category}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 group-hover:bg-brandOrange-500 text-slate-300 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Center: 3D Elevated Official Client Logo */}
                  <div className="my-2 py-5 sm:py-6 px-4 rounded-2xl bg-navy-950/90 border border-white/10 group-hover:border-brandOrange-500/30 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brandOrange-500/5 via-transparent to-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-14 sm:h-20 max-w-full object-contain group-hover:scale-112 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.18)]"
                    />
                  </div>

                  {/* Client Name & Counters */}
                  <div className={`mt-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-sm sm:text-lg font-black text-white group-hover:text-brandOrange-400 transition-colors truncate">
                      {client.arabicName}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {client.tagline}
                    </p>

                    {/* Posters & Videos Count Badges */}
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-white/[0.04] border border-white/5 text-[10px] sm:text-xs font-bold text-slate-200">
                        <ImageIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brandOrange-400 shrink-0" />
                        <span>
                          {client.posters.length} {isRTL ? 'بوستر' : 'Posters'}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-white/[0.04] border border-white/5 text-[10px] sm:text-xs font-bold text-slate-200">
                        <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric-400 shrink-0" />
                        <span>
                          {client.videos.length} {isRTL ? 'فيديو' : 'Videos'}
                        </span>
                      </div>
                    </div>

                    {/* Click Prompt */}
                    <div className="mt-3 flex items-center justify-between text-[10px] sm:text-xs font-extrabold text-brandOrange-400 group-hover:text-amber-300">
                      <span>{isRTL ? 'عرض الكرت والأعمال' : 'View Profile & Works'}</span>
                      <ArrowIcon className="w-3.5 h-3.5 transition-transform" />
                    </div>
                  </div>
                </TiltCard3D>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Inline 3D Client Portfolio Stage */}
        <div
          id="client-works-stage"
          className="pt-8 sm:pt-10 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-brandOrange-500 animate-ping" />
              <h3 className="text-lg sm:text-2xl font-black text-white flex items-center gap-2 flex-wrap">
                <Sparkles className="w-5 h-5 text-brandOrange-400" />
                <span>
                  {isRTL
                    ? 'استعراض مباشر لأعمال العميل المختار:'
                    : 'Live Portfolio Showcase for:'}
                </span>
                <span className="text-brandOrange-400">{localizedActiveClient.arabicName}</span>
              </h3>
            </div>
          </div>

          <ClientPortfolioStage
            client={localizedActiveClient}
            onSelectClient={(c) => onSelectClient(c, false)}
            onOpenPosterLightbox={onOpenPosterLightbox}
            onOpenConsultation={onOpenConsultation}
            isModal={false}
            onOpenFullModal={() => onSelectClient(localizedActiveClient, true)}
          />
        </div>
      </div>
    </section>
  );
};
