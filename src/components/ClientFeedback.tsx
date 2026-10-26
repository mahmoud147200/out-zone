import React, { useState, useEffect } from 'react';
import {
  Star,
  MessageSquareHeart,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  CheckCircle2,
  Quote,
  LayoutGrid,
  GalleryHorizontalEnd,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClientPoster,
  getFeedbackItems,
} from '../data/content';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ClientFeedbackProps {
  onOpenPosterLightbox: (posters: ClientPoster[], index: number) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const ClientFeedback: React.FC<ClientFeedbackProps> = ({
  onOpenPosterLightbox,
  onOpenConsultation,
}) => {
  const { lang, isRTL } = useLanguage();
  const feedbackItems = getFeedbackItems(lang);

  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'both' | 'carousel' | 'grid'>('both');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Convert feedback items to ClientPoster[] format so clicking any screenshot opens the 3D multi-image Lightbox
  const feedbackGalleryPosters: ClientPoster[] = feedbackItems.map((item, idx) => ({
    id: item.id,
    title: `${item.clientName} — ${item.badge} (#${idx + 1})`,
    file: item.image,
    thumb: item.image,
    width: 1080,
    height: 1920,
  }));

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % feedbackItems.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [isAutoPlaying, feedbackItems.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + feedbackItems.length) % feedbackItems.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % feedbackItems.length);
  };

  const activeFeedback = feedbackItems[activeIndex] || feedbackItems[0];

  return (
    <section
      id="feedback"
      className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden w-full border-t border-white/5"
    >
      {/* Ambient 3D Neon Glows */}
      <div className="absolute top-1/4 right-0 w-80 sm:w-[460px] h-80 sm:h-[460px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 sm:w-[460px] h-80 sm:h-[460px] bg-brandOrange-500/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-emerald-500/35 text-xs font-extrabold text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <MessageSquareHeart className="w-4 h-4 text-emerald-400" />
            <span>
              {isRTL
                ? `آراء عملائنا بالكويت • +${feedbackItems.length} محادثة وتقييم موثّق`
                : `Verified Client Reviews • +${feedbackItems.length} Real WhatsApp Testimonials`}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {isRTL ? 'شنو يقولون عملاؤنا عن ' : 'What Our Clients Say About '}
            <span className="bg-gradient-to-l from-brandOrange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              {isRTL ? 'شغلنا وتصاميمنا؟' : 'OUT ZONE’s Work'}
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
            {isRTL
              ? 'ثقة عملائنا بالكويت هي أكبر مكسب لنا. تقدر تشوف بنفسك رسائل وتقييمات عملائنا الصجية على الواتساب بعد استلام التصاميم والفيديوهات وإدارة حساباتهم.'
              : 'Our clients’ trust in Kuwait is our greatest achievement. Explore real, unedited WhatsApp conversations and feedback from business owners after receiving their designs, Reels, and campaigns.'}
          </p>

          {/* View Mode Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode('both')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                viewMode === 'both'
                  ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRTL ? 'العرض المتكامل 3D' : 'Full 3D Showcase'}</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              <GalleryHorizontalEnd className="w-3.5 h-3.5" />
              <span>{isRTL ? 'منصة العرض الدوارة 3D' : '3D Carousel Stage'}</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-brandOrange-600 to-amber-500 text-white shadow-lg shadow-brandOrange-500/30'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{isRTL ? 'شبكة كل الآراء (13)' : 'All Reviews Grid (13)'}</span>
            </button>
          </div>
        </Reveal3D>

        {/* 1. Interactive 3D Coverflow / Spotlight Carousel */}
        {(viewMode === 'both' || viewMode === 'carousel') && (
          <div className="mb-16 sm:mb-20">
            <div
              className="relative rounded-3xl bg-gradient-to-b from-navy-900/90 via-navy-900/75 to-navy-950 border border-white/15 p-5 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.75)] overflow-hidden"
              style={{ perspective: '1600px' }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-brandOrange-500 to-amber-400" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* 3D Phone Mockup Carousel Stage (7 cols) */}
                <div className="lg:col-span-7 relative flex flex-col items-center">
                  <div
                    className="relative w-full h-[390px] sm:h-[470px] flex items-center justify-center"
                    style={{ perspective: '1400px' }}
                  >
                    {feedbackItems.map((item, idx) => {
                      let offset = idx - activeIndex;
                      const half = Math.floor(feedbackItems.length / 2);
                      if (offset > half) offset -= feedbackItems.length;
                      if (offset < -half) offset += feedbackItems.length;

                      if (Math.abs(offset) > 2) return null;
                      const isCenter = offset === 0;

                      return (
                        <motion.div
                          key={item.id}
                          onClick={() => {
                            if (isCenter) {
                              onOpenPosterLightbox(feedbackGalleryPosters, idx);
                            } else {
                              setIsAutoPlaying(false);
                              setActiveIndex(idx);
                            }
                          }}
                          animate={{
                            x: `${offset * (isRTL ? -48 : 48)}%`,
                            scale: isCenter ? 1 : 0.8 - Math.abs(offset) * 0.08,
                            rotateY: offset * (isRTL ? 26 : -26),
                            z: isCenter ? 70 : -Math.abs(offset) * 90,
                            opacity: isCenter ? 1 : 0.4,
                          }}
                          transition={{ type: 'spring', stiffness: 150, damping: 22 }}
                          style={{
                            transformStyle: 'preserve-3d',
                            zIndex: 30 - Math.abs(offset),
                          }}
                          className={`absolute w-60 sm:w-72 h-[370px] sm:h-[450px] rounded-[28px] overflow-hidden bg-navy-950 border-2 ${
                            isCenter
                              ? 'border-emerald-400/80 shadow-[0_25px_65px_rgba(16,185,129,0.35)]'
                              : 'border-white/15 shadow-2xl'
                          } cursor-pointer flex flex-col group`}
                        >
                          {/* Phone Notch / WhatsApp Verified Header */}
                          <div className="px-3.5 py-2 bg-[#075E54] text-white flex items-center justify-between text-[11px] font-bold shrink-0">
                            <div className="flex items-center gap-1.5 truncate">
                              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                              <span className="truncate">{item.badge}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-black/25 text-[9px] text-emerald-300 font-mono">
                              +965 KW
                            </span>
                          </div>

                          {/* Screenshot Image */}
                          <div className="relative flex-grow bg-navy-950 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.clientName}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            {isCenter && (
                              <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-navy-950/85 text-white border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-brandOrange-500 transition-colors">
                                <ZoomIn className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* 3D Carousel Navigation Controls */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={isRTL ? handlePrev : handleNext}
                      className="w-10 h-10 rounded-full bg-navy-800 hover:bg-brandOrange-500 text-white border border-white/15 flex items-center justify-center transition-all shadow-md"
                      aria-label="Previous feedback"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {feedbackItems.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setIsAutoPlaying(false);
                            setActiveIndex(idx);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === activeIndex
                              ? 'w-7 bg-brandOrange-500 shadow-[0_0_10px_#f97316]'
                              : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={isRTL ? handleNext : handlePrev}
                      className="w-10 h-10 rounded-full bg-navy-800 hover:bg-brandOrange-500 text-white border border-white/15 flex items-center justify-center transition-all shadow-md"
                      aria-label="Next feedback"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Active Review Details Card (5 cols) */}
                <div className="lg:col-span-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeedback.id}
                      initial={{ opacity: 0, y: 18, rotateX: 8 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-3xl bg-navy-950/90 border border-white/10 p-6 sm:p-8 shadow-inner space-y-5 ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold">
                          <ShieldCheck className="w-4 h-4" />
                          <span>
                            {isRTL ? 'محادثة واتساب موثقة' : 'Verified WhatsApp Chat'}
                          </span>
                        </span>

                        <div className="flex items-center gap-1">
                          {[...Array(activeFeedback.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {activeFeedback.clientName}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-brandOrange-400 mt-1">
                          {activeFeedback.clientCategory}
                        </p>
                      </div>

                      <div className="relative p-4 sm:p-5 rounded-2xl bg-navy-900/90 border border-brandOrange-500/25">
                        <Quote className="w-6 h-6 text-brandOrange-400/50 mb-2" />
                        <p className="text-sm sm:text-base text-slate-100 font-semibold leading-relaxed">
                          "{activeFeedback.quote}"
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{activeFeedback.summary}</span>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() =>
                            onOpenPosterLightbox(feedbackGalleryPosters, activeIndex)
                          }
                          className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                        >
                          <ZoomIn className="w-4 h-4 text-brandOrange-400" />
                          <span>
                            {isRTL ? 'تكبير المحادثة بوضوح كامل' : 'Zoom Full Screenshot'}
                          </span>
                        </button>

                        <button
                          onClick={() =>
                            onOpenConsultation(
                              isRTL
                                ? 'البدء مع فريق OUT ZONE مثل قصص نجاح عملائكم'
                                : 'Getting started with OUT ZONE like your client success stories'
                            )
                          }
                          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-emerald-500 hover:from-emerald-400 hover:to-[#25D366] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>{isRTL ? 'تواصل ويانا الحين' : 'Chat With Us Now'}</span>
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Full 3D Tilt Grid of All 13 Client Feedback Screenshots */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  {isRTL
                    ? 'جدار ثقة عملائنا — اضغط على أي صورة لتكبيرها (3D)'
                    : 'Wall of Client Trust — Click Any Screenshot to Zoom (3D)'}
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {feedbackItems.length} {isRTL ? 'تقييم حقيقي' : 'Verified Reviews'}
              </span>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              style={{ perspective: '1400px' }}
            >
              {feedbackItems.map((item, idx) => (
                <TiltCard3D
                  key={item.id}
                  index={idx}
                  intensity={10}
                  onClick={() => onOpenPosterLightbox(feedbackGalleryPosters, idx)}
                  className="group rounded-3xl overflow-hidden bg-navy-900/90 border border-white/10 hover:border-emerald-500/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.22)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Top WhatsApp Style Bar */}
                    <div className="px-3.5 py-2.5 bg-gradient-to-r from-[#075E54] to-emerald-800 text-white flex items-center justify-between text-[10px] sm:text-xs font-bold">
                      <div className="flex items-center gap-1.5 truncate">
                        <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                        <span className="truncate">{item.badge}</span>
                      </div>
                      <div className="flex items-center gap-0.5 shrink-0">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="relative aspect-[9/14] overflow-hidden bg-navy-950">
                      <img
                        src={item.image}
                        alt={item.clientName}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                      {/* Zoom Button */}
                      <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <ZoomIn className="w-4 h-4" />
                      </div>

                      {/* Quote Overlay at Bottom of Image */}
                      <div
                        className={`absolute inset-x-0 bottom-0 p-3.5 ${
                          isRTL ? 'text-right' : 'text-left'
                        }`}
                      >
                        <div className="text-[11px] sm:text-xs font-extrabold text-emerald-300 truncate">
                          {item.clientName}
                        </div>
                        <p className="text-[11px] sm:text-xs font-bold text-white line-clamp-2 mt-0.5 leading-snug">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
