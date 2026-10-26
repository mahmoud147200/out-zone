import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Image as ImageIcon,
  Film,
  Sparkles,
  CheckCircle2,
  Play,
  Maximize2,
  ZoomIn,
  Layers,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Briefcase,
  LayoutGrid,
  GalleryHorizontalEnd,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CLIENTS,
  ClientItem,
  ClientPoster,
  ClientVideo,
  encodeAssetUrl,
} from '../data/content';
import { TiltCard3D } from './ScrollReveal3D';

interface ClientPortfolioStageProps {
  client: ClientItem;
  onSelectClient: (client: ClientItem) => void;
  onOpenPosterLightbox: (posters: ClientPoster[], index: number) => void;
  onOpenConsultation: (topic?: string) => void;
  isModal?: boolean;
  onOpenFullModal?: () => void;
}

export const ClientPortfolioStage: React.FC<ClientPortfolioStageProps> = ({
  client,
  onSelectClient,
  onOpenPosterLightbox,
  onOpenConsultation,
  isModal = false,
  onOpenFullModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'posters' | 'videos'>('all');
  const [posterViewMode, setPosterViewMode] = useState<'grid' | 'coverflow'>('grid');
  const [coverflowIndex, setCoverflowIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [cinemaVideoIndex, setCinemaVideoIndex] = useState<number | null>(null);
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const introCardRef = useRef<HTMLDivElement>(null);

  // Reset active video and coverflow index when switching client
  useEffect(() => {
    setPlayingVideoId(null);
    setCinemaVideoIndex(null);
    setCoverflowIndex(0);
  }, [client.id]);

  // Accent color mappings for dynamic 3D ambient glow
  const accentStyles = {
    orange: {
      badge: 'bg-brandOrange-500/15 text-brandOrange-400 border-brandOrange-500/35',
      border: 'border-brandOrange-500/40',
      glow: 'from-brandOrange-500/20 via-amber-500/10 to-transparent',
      button: 'from-brandOrange-600 to-amber-500 shadow-brandOrange-500/30',
      text: 'text-brandOrange-400',
    },
    amber: {
      badge: 'bg-amber-500/15 text-amber-300 border-amber-500/35',
      border: 'border-amber-500/40',
      glow: 'from-amber-500/20 via-brandOrange-500/10 to-transparent',
      button: 'from-amber-600 to-brandOrange-500 shadow-amber-500/30',
      text: 'text-amber-400',
    },
    electric: {
      badge: 'bg-electric-500/15 text-electric-400 border-electric-500/35',
      border: 'border-electric-500/40',
      glow: 'from-electric-500/20 via-cyan-500/10 to-transparent',
      button: 'from-electric-600 to-cyan-500 shadow-electric-500/30',
      text: 'text-electric-400',
    },
    emerald: {
      badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/35',
      border: 'border-emerald-500/40',
      glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      button: 'from-emerald-600 to-teal-500 shadow-emerald-500/30',
      text: 'text-emerald-400',
    },
    rose: {
      badge: 'bg-rose-500/15 text-rose-300 border-rose-500/35',
      border: 'border-rose-500/40',
      glow: 'from-rose-500/20 via-pink-500/10 to-transparent',
      button: 'from-rose-600 to-pink-500 shadow-rose-500/30',
      text: 'text-rose-400',
    },
  }[client.accentColor];

  const handleIntroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!introCardRef.current) return;
    const rect = introCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4.5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4.5;
    setCardTilt({
      rotateX,
      rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleIntroMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const activeCinemaVideo: ClientVideo | null =
    cinemaVideoIndex !== null && client.videos[cinemaVideoIndex]
      ? client.videos[cinemaVideoIndex]
      : null;

  return (
    <div className="w-full" style={{ perspective: '1600px' }}>
      {/* Quick 3D Client Switcher Strip */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs sm:text-sm font-bold text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brandOrange-400" />
            <span>اختر العميل للتنقل السريع ثلاثي الأبعاد:</span>
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            اضغط على أي شعار لعرض الكرت التعريفي والأعمال
          </span>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-2.5 pt-1 px-1 scrollbar-thin">
          {CLIENTS.map((c) => {
            const isSelected = c.id === client.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectClient(c)}
                className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all duration-300 shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-navy-800 to-navy-900 border-brandOrange-500 shadow-[0_0_22px_rgba(249,115,22,0.35)] scale-[1.03]'
                    : 'bg-navy-900/70 hover:bg-navy-800/90 border-white/10 hover:border-white/25 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-950/90 border border-white/10 p-1 flex items-center justify-center shrink-0">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-right">
                  <div
                    className={`text-xs font-extrabold transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {c.name}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {c.posters.length} بوستر • {c.videos.length} فيديو
                  </div>
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-brandOrange-500 animate-pulse mr-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 3D Animated Stage when switching clients */}
      <AnimatePresence mode="wait">
        <motion.div
          key={client.id}
          initial={{ opacity: 0, rotateX: 14, rotateY: -8, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, y: 0 }}
          exit={{ opacity: 0, rotateX: -10, rotateY: 8, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.85 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="space-y-8 sm:space-y-10"
        >
          {/* 1. الكرت التعريفي للعميل (3D Introductory Client Business Card) */}
          <div style={{ perspective: '1400px' }}>
            <motion.div
              ref={introCardRef}
              onMouseMove={handleIntroMouseMove}
              onMouseLeave={handleIntroMouseLeave}
              animate={{
                rotateX: cardTilt.rotateX,
                rotateY: cardTilt.rotateY,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900/95 via-navy-900/90 to-navy-950 border ${accentStyles.border} p-5 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.65)]`}
            >
              {/* Dynamic 3D Specular Light Glare */}
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255,255,255,0.07) 0%, transparent 65%)`,
                }}
              />

              {/* Ambient Glow */}
              <div
                className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${accentStyles.glow} rounded-full blur-3xl pointer-events-none`}
              />

              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brandOrange-500 via-amber-400 to-electric-500" />

              <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Right Column (in RTL): Client Logo + Business Details */}
                <div className="lg:col-span-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7 text-center sm:text-right">
                  {/* 3D Floating Client Logo Box */}
                  <div
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-navy-950/95 border border-white/15 p-4 flex flex-col items-center justify-center shrink-0 shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative group"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brandOrange-500/10 to-electric-500/10 opacity-75" />
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-20 sm:max-h-24 max-w-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="mt-2 text-[10px] font-bold text-slate-400 relative z-10">
                      شريك نجاح
                    </span>
                  </div>

                  {/* Business Info */}
                  <div className="space-y-3.5 flex-grow">
                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold border ${accentStyles.badge}`}
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>مجال العميل: {client.category}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-white/5 text-slate-300 border border-white/10">
                        <Layers className="w-3 h-3 text-amber-400" />
                        <span>كرت تعريفي للعميل</span>
                      </span>
                    </div>

                    {/* Client Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                        {client.arabicName}
                        <span className="text-sm sm:text-lg font-bold text-slate-400 mr-2.5 font-sans">
                          ({client.name})
                        </span>
                      </h3>
                      <p className={`text-xs sm:text-sm font-bold mt-1 ${accentStyles.text}`}>
                        {client.tagline}
                      </p>
                    </div>

                    {/* Business Brief */}
                    <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed bg-navy-950/60 border border-white/5 rounded-2xl p-3.5 sm:p-4">
                      {client.bio}
                    </p>

                    {/* Services Delivered Pills */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                      {client.servicesDelivered.map((srv, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{srv}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left Column (in RTL): Media Counters & Actions */}
                <div className="lg:col-span-4 flex flex-col justify-between gap-4 bg-navy-950/85 border border-white/10 rounded-3xl p-5 shadow-inner">
                  <div className="text-xs font-bold text-slate-400 border-b border-white/10 pb-2.5 flex items-center justify-between">
                    <span>إجمالي الأعمال المنفذة للعميل</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveTab('posters')}
                      className={`p-3.5 rounded-2xl border text-right transition-all ${
                        activeTab === 'posters'
                          ? 'bg-brandOrange-500/15 border-brandOrange-500/60 shadow-lg'
                          : 'bg-navy-900/90 border-white/10 hover:border-brandOrange-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <ImageIcon className="w-5 h-5 text-brandOrange-400" />
                        <span className="text-[10px] font-bold text-slate-400">desgien</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        {client.posters.length}
                      </div>
                      <div className="text-xs font-bold text-slate-300 mt-0.5">
                        بوستر وتصميم
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveTab('videos')}
                      className={`p-3.5 rounded-2xl border text-right transition-all ${
                        activeTab === 'videos'
                          ? 'bg-electric-500/15 border-electric-500/60 shadow-lg'
                          : 'bg-navy-900/90 border-white/10 hover:border-electric-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <Film className="w-5 h-5 text-electric-400" />
                        <span className="text-[10px] font-bold text-slate-400">vedio</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        {client.videos.length}
                      </div>
                      <div className="text-xs font-bold text-slate-300 mt-0.5">
                        فيديو وريلز
                      </div>
                    </button>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {!isModal && onOpenFullModal && (
                      <button
                        onClick={onOpenFullModal}
                        className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <Maximize2 className="w-4 h-4 text-brandOrange-400" />
                        <span>فتح المعرض الكامل بملء الشاشة 3D</span>
                      </button>
                    )}

                    <button
                      onClick={() =>
                        onOpenConsultation(
                          `خطة تسويق وتصميم مثل أعمالكم مع ${client.arabicName}`
                        )
                      }
                      className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${accentStyles.button} text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform`}
                    >
                      <span>اطلب خطة مماثلة لنشاطك</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 2. Filter Tabs (الكل | البوسترات والتصاميم | الفيديوهات والريلز) */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105'
                    : 'bg-navy-900 hover:bg-navy-800 text-slate-300 border border-white/10'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>كل الأعمال ({client.posters.length + client.videos.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('posters')}
                className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'posters'
                    ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105'
                    : 'bg-navy-900 hover:bg-navy-800 text-slate-300 border border-white/10'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>البوسترات والتصاميم ({client.posters.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'videos'
                    ? 'bg-gradient-to-r from-electric-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] scale-105'
                    : 'bg-navy-900 hover:bg-navy-800 text-slate-300 border border-white/10'
                }`}
              >
                <Film className="w-4 h-4" />
                <span>الفيديوهات والريلز ({client.videos.length})</span>
              </button>
            </div>

            {/* Poster View Mode Switcher (3D Grid vs 3D Coverflow) */}
            {(activeTab === 'all' || activeTab === 'posters') && (
              <div className="flex items-center gap-1.5 bg-navy-900/90 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setPosterViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    posterViewMode === 'grid'
                      ? 'bg-brandOrange-500 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>شبكة 3D</span>
                </button>
                <button
                  onClick={() => setPosterViewMode('coverflow')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    posterViewMode === 'coverflow'
                      ? 'bg-brandOrange-500 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <GalleryHorizontalEnd className="w-3.5 h-3.5" />
                  <span>منصة 3D الدوارة</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. البوسترات والتصاميم (Posters Section from `desgien`) */}
          <AnimatePresence mode="wait">
            {(activeTab === 'all' || activeTab === 'posters') && (
              <motion.div
                key={`posters-${posterViewMode}`}
                initial={{ opacity: 0, y: 20, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brandOrange-500/15 border border-brandOrange-500/30 flex items-center justify-center text-brandOrange-400">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-white">
                        البوسترات والتصاميم الإبداعية — {client.arabicName}
                      </h4>
                      <p className="text-xs text-slate-400">
                        اضغط على أي بوستر لتكبيره بدقة كاملة والتنقل ثلاثي الأبعاد
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brandOrange-500/10 text-brandOrange-400 border border-brandOrange-500/20">
                    {client.posters.length} تصميم
                  </span>
                </div>

                {posterViewMode === 'coverflow' ? (
                  /* 3D Coverflow Interactive Stage */
                  <div
                    className="relative py-8 sm:py-12 px-4 rounded-3xl bg-navy-900/70 border border-white/10 overflow-hidden flex flex-col items-center"
                    style={{ perspective: '1400px' }}
                  >
                    <div className="relative w-full h-[340px] sm:h-[440px] flex items-center justify-center">
                      {client.posters.map((poster, idx) => {
                        const offset = idx - coverflowIndex;
                        if (Math.abs(offset) > 2) return null;
                        const isCenter = offset === 0;
                        return (
                          <motion.div
                            key={poster.id}
                            onClick={() => {
                              if (isCenter) {
                                onOpenPosterLightbox(client.posters, idx);
                              } else {
                                setCoverflowIndex(idx);
                              }
                            }}
                            animate={{
                              x: `${offset * 52}%`,
                              scale: isCenter ? 1 : 0.78 - Math.abs(offset) * 0.08,
                              rotateY: offset * -28,
                              z: isCenter ? 60 : -Math.abs(offset) * 90,
                              opacity: isCenter ? 1 : 0.45,
                            }}
                            transition={{ type: 'spring', stiffness: 150, damping: 22 }}
                            style={{
                              transformStyle: 'preserve-3d',
                              zIndex: 20 - Math.abs(offset),
                            }}
                            className="absolute w-64 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden bg-navy-950 border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] cursor-pointer group"
                          >
                            <img
                              src={poster.thumb}
                              alt={poster.title}
                              className="w-full h-full object-cover"
                            />
                            {isCenter && (
                              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent flex items-center justify-between">
                                <span className="text-xs font-bold text-white truncate">
                                  {poster.title}
                                </span>
                                <span className="p-1.5 rounded-lg bg-brandOrange-500 text-white">
                                  <ZoomIn className="w-4 h-4" />
                                </span>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Coverflow Controls */}
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() =>
                          setCoverflowIndex(
                            (prev) => (prev - 1 + client.posters.length) % client.posters.length
                          )
                        }
                        className="p-2.5 rounded-full bg-navy-800 hover:bg-brandOrange-500 text-white border border-white/15 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-300">
                        {coverflowIndex + 1} / {client.posters.length}
                      </span>
                      <button
                        onClick={() =>
                          setCoverflowIndex((prev) => (prev + 1) % client.posters.length)
                        }
                        className="p-2.5 rounded-full bg-navy-800 hover:bg-brandOrange-500 text-white border border-white/15 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Responsive 3D Tilt Grid for Posters */
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5"
                    style={{ perspective: '1400px' }}
                  >
                    {client.posters.map((poster, idx) => (
                      <TiltCard3D
                        key={poster.id}
                        index={idx}
                        intensity={9}
                        onClick={() => onOpenPosterLightbox(client.posters, idx)}
                        className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-navy-900 border border-white/10 hover:border-brandOrange-500/70 transition-all duration-300 cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_40px_rgba(249,115,22,0.22)] flex flex-col"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                          <img
                            src={poster.thumb}
                            alt={poster.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                          />

                          {/* Subtle Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                          {/* Number Badge */}
                          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold bg-navy-950/85 text-brandOrange-400 border border-brandOrange-500/30 backdrop-blur-md">
                            تصميم #{idx + 1}
                          </div>

                          {/* Zoom Icon */}
                          <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-brandOrange-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                            <ZoomIn className="w-4 h-4" />
                          </div>

                          {/* Bottom Title inside Image */}
                          <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between">
                            <span className="text-[11px] sm:text-xs font-bold text-white truncate">
                              {poster.title}
                            </span>
                          </div>
                        </div>
                      </TiltCard3D>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 4. الفيديوهات والريلز (Videos Section from `vedio`) */}
          <AnimatePresence mode="wait">
            {(activeTab === 'all' || activeTab === 'videos') && (
              <motion.div
                key="videos-section"
                initial={{ opacity: 0, y: 20, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 pt-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-electric-500/15 border border-electric-500/30 flex items-center justify-center text-electric-400">
                      <Film className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-white">
                        الفيديوهات والريلز الإعلانية — {client.arabicName}
                      </h4>
                      <p className="text-xs text-slate-400">
                        اضغط على أي فيديو لتشغيله مباشرة بالصوت أو تكبيره في وضع السينما 3D
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20">
                    {client.videos.length} فيديو
                  </span>
                </div>

                {/* Responsive 3D Video / Reels Grid */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5"
                  style={{ perspective: '1400px' }}
                >
                  {client.videos.map((video, idx) => {
                    const isPlaying = playingVideoId === video.id;
                    return (
                      <div
                        key={video.id}
                        className={`${
                          isPlaying ? 'col-span-2 sm:col-span-1' : ''
                        } transition-all duration-300`}
                      >
                        <TiltCard3D
                          index={idx}
                          intensity={isPlaying ? 0 : 8}
                          className={`group rounded-2xl sm:rounded-3xl overflow-hidden bg-navy-900 border ${
                            isPlaying
                              ? 'border-electric-400 shadow-[0_0_35px_rgba(14,165,233,0.4)]'
                              : 'border-white/10 hover:border-electric-500/70 shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
                          } transition-all duration-300 flex flex-col`}
                        >
                          <div className="relative aspect-[9/16] overflow-hidden bg-black">
                            {isPlaying ? (
                              <>
                                <video
                                  key={video.id}
                                  ref={(el) => {
                                    if (el && el.dataset.started !== 'true') {
                                      el.dataset.started = 'true';
                                      el.play().catch(() => {
                                        el.muted = true;
                                        el.play().catch(() => {});
                                      });
                                    }
                                  }}
                                  src={encodeAssetUrl(video.file)}
                                  poster={video.thumb}
                                  controls
                                  autoPlay
                                  playsInline
                                  preload="auto"
                                  className="w-full h-full object-contain bg-black"
                                  onEnded={() => setPlayingVideoId(null)}
                                />
                                {/* Top Controls Bar while Playing */}
                                <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setPlayingVideoId(null);
                                      setCinemaVideoIndex(idx);
                                    }}
                                    className="pointer-events-auto px-2.5 py-1.5 rounded-xl bg-navy-950/90 hover:bg-electric-500 text-white border border-white/20 text-[11px] font-bold flex items-center gap-1 shadow-lg"
                                    title="فتح في وضع السينما"
                                  >
                                    <Maximize2 className="w-3.5 h-3.5" />
                                    <span>سينما 3D</span>
                                  </button>

                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setPlayingVideoId(null);
                                    }}
                                    className="pointer-events-auto p-1.5 rounded-xl bg-navy-950/90 hover:bg-rose-500 text-white border border-white/20 shadow-lg"
                                    title="إيقاف الفيديو"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div
                                onClick={() => setPlayingVideoId(video.id)}
                                className="w-full h-full relative cursor-pointer"
                              >
                                <img
                                  src={video.thumb}
                                  alt={video.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/25 to-navy-950/40 group-hover:via-navy-950/10 transition-colors" />

                                {/* Top Badges */}
                                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold bg-navy-950/85 text-electric-400 border border-electric-500/35 backdrop-blur-md flex items-center gap-1">
                                  <Film className="w-3 h-3" />
                                  <span>فيديو #{idx + 1}</span>
                                </div>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setPlayingVideoId(null);
                                    setCinemaVideoIndex(idx);
                                  }}
                                  className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-navy-950/85 hover:bg-electric-500 text-white border border-white/20 flex items-center justify-center transition-all shadow-lg"
                                  title="تكبير الفيديو في شاشة سينمائية"
                                >
                                  <Maximize2 className="w-3.5 h-3.5" />
                                </button>

                                {/* Center 3D Glowing Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="relative flex items-center justify-center">
                                    <span className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-electric-500/30 animate-ping" />
                                    <div className="w-13 h-13 sm:w-15 sm:h-15 p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-brandOrange-500 to-amber-500 text-white shadow-[0_0_25px_rgba(249,115,22,0.75)] group-hover:scale-115 transition-transform duration-300 flex items-center justify-center">
                                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                                    </div>
                                  </div>
                                </div>

                                {/* Bottom Video Title */}
                                <div className="absolute inset-x-0 bottom-0 p-3 text-right">
                                  <div className="text-[11px] sm:text-xs font-extrabold text-white truncate">
                                    {video.title}
                                  </div>
                                  <div className="text-[10px] text-electric-300 font-semibold mt-0.5">
                                    اضغط للتشغيل بالصوت
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </TiltCard3D>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Full-Screen 3D Video Cinema Lightbox */}
      <AnimatePresence>
        {activeCinemaVideo && cinemaVideoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6"
            style={{ perspective: '1600px' }}
            onClick={() => setCinemaVideoIndex(null)}
          >
            <motion.div
              key={activeCinemaVideo.id}
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 150, damping: 22 }}
              className="relative w-full max-w-4xl max-h-[94vh] bg-navy-900/95 border border-white/15 rounded-3xl p-3 sm:p-5 flex flex-col items-center justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cinema Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-3 py-1 rounded-full bg-electric-500/15 border border-electric-500/30 text-electric-400 text-xs font-bold shrink-0">
                    سينما 3D
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-white truncate">
                    {activeCinemaVideo.title}
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-white/10 px-2.5 py-0.5 rounded-full shrink-0">
                    {cinemaVideoIndex + 1} / {client.videos.length}
                  </span>
                </div>

                <button
                  onClick={() => setCinemaVideoIndex(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 text-slate-200 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cinema Video Player Stage */}
              <div className="relative w-full flex-grow flex items-center justify-center bg-black rounded-2xl overflow-hidden max-h-[76vh]">
                {client.videos.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCinemaVideoIndex(
                          (cinemaVideoIndex - 1 + client.videos.length) % client.videos.length
                        )
                      }
                      className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-900/90 hover:bg-electric-500 text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all"
                      title="الفيديو السابق"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() =>
                        setCinemaVideoIndex((cinemaVideoIndex + 1) % client.videos.length)
                      }
                      className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-900/90 hover:bg-electric-500 text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all"
                      title="الفيديو التالي"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </>
                )}

                <video
                  key={activeCinemaVideo.file}
                  ref={(el) => {
                    if (el && el.dataset.started !== 'true') {
                      el.dataset.started = 'true';
                      el.play().catch(() => {
                        el.muted = true;
                        el.play().catch(() => {});
                      });
                    }
                  }}
                  src={encodeAssetUrl(activeCinemaVideo.file)}
                  poster={activeCinemaVideo.thumb}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="max-h-[74vh] max-w-full object-contain"
                />
              </div>

              <div className="w-full pt-3 flex items-center justify-between text-xs text-slate-400">
                <span>{client.arabicName} • إنتاج ومونتاج OUT ZONE</span>
                <span>استخدم الأسهم للتنقل بين فيديوهات العميل</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ClientShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: ClientItem | null;
  onSelectClient: (client: ClientItem) => void;
  onOpenPosterLightbox: (posters: ClientPoster[], index: number) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const ClientShowcaseModal: React.FC<ClientShowcaseModalProps> = ({
  isOpen,
  onClose,
  client,
  onSelectClient,
  onOpenPosterLightbox,
  onOpenConsultation,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [client?.id]);

  if (!isOpen || !client) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[65] bg-black/88 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 lg:p-6"
        style={{ perspective: '1600px' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, rotateX: 14, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
          exit={{ opacity: 0, rotateX: -12, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', stiffness: 130, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full max-w-7xl max-h-[94vh] rounded-3xl bg-navy-950/98 border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-right"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Modal Header */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4 bg-navy-900/95 backdrop-blur-xl border-b border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-navy-950 border border-white/10 p-1.5 flex items-center justify-center shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-black text-white truncate">
                  ملف أعمال العميل: {client.arabicName}
                </h3>
                <p className="text-[11px] sm:text-xs text-brandOrange-400 font-semibold truncate">
                  {client.category} • {client.posters.length} بوستر و {client.videos.length}{' '}
                  فيديو
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-slate-200 hover:text-white flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-all shrink-0"
            >
              <span>إغلاق</span>
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Scrollable 3D Content Body */}
          <div
            ref={scrollContainerRef}
            className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-8"
          >
            <ClientPortfolioStage
              client={client}
              onSelectClient={onSelectClient}
              onOpenPosterLightbox={onOpenPosterLightbox}
              onOpenConsultation={(topic) => {
                onClose();
                onOpenConsultation(topic);
              }}
              isModal={true}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
