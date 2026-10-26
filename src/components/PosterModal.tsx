import React, { useEffect, useState } from 'react';
import { X, Download, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClientPoster, encodeAssetUrl } from '../data/content';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  posterUrl: string;
  title: string;
  posters?: ClientPoster[];
  currentIndex?: number;
  onChangeIndex?: (newIndex: number) => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  posterUrl,
  title,
  posters,
  currentIndex = 0,
  onChangeIndex,
}) => {
  const [direction, setDirection] = useState<number>(0);

  const hasGallery = Boolean(posters && posters.length > 1 && onChangeIndex);
  const activePoster =
    hasGallery && posters ? posters[currentIndex] || posters[0] : null;

  const displayUrl = activePoster
    ? encodeAssetUrl(activePoster.file)
    : encodeAssetUrl(posterUrl);
  const displayTitle = activePoster ? activePoster.title : title;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!hasGallery || !posters || !onChangeIndex) return;
    setDirection(-1);
    const nextIdx = (currentIndex - 1 + posters.length) % posters.length;
    onChangeIndex(nextIdx);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!hasGallery || !posters || !onChangeIndex) return;
    setDirection(1);
    const nextIdx = (currentIndex + 1) % posters.length;
    onChangeIndex(nextIdx);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasGallery) {
        handleNext();
      } else if (e.key === 'ArrowRight' && hasGallery) {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, hasGallery, posters]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4 bg-black/92 backdrop-blur-2xl"
        style={{ perspective: '1600px' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, rotateX: 16, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
          exit={{ opacity: 0, rotateX: -12, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 140, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative max-w-5xl max-h-[95vh] w-full flex flex-col items-center justify-between bg-navy-900/95 border border-white/15 rounded-3xl p-3 sm:p-6 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)] text-right"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header */}
          <div className="w-full flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-brandOrange-400 bg-brandOrange-500/15 px-3 py-1 rounded-full border border-brandOrange-500/30 font-bold shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>تصميم عالي الدقة HD</span>
              </span>
              <h3 className="text-sm sm:text-lg font-extrabold text-white truncate">
                {displayTitle}
              </h3>
              {hasGallery && posters && (
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-amber-300 shrink-0">
                  {currentIndex + 1} / {posters.length}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={displayUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 hover:bg-brandOrange-500/20 border border-white/10 hover:border-brandOrange-500/40 text-slate-200 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                title="تحميل التصميم بجودة أصلية"
              >
                <Download className="w-4 h-4 sm:w-4 sm:h-4 text-brandOrange-400" />
                <span className="hidden sm:inline">تحميل HD</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-slate-200 hover:text-white transition-colors"
                title="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main 3D Poster Stage with Next/Prev Controls */}
          <div
            className="relative w-full flex-grow flex items-center justify-center overflow-hidden rounded-2xl bg-navy-950/80 border border-white/5 p-2 sm:p-4 min-h-[50vh] max-h-[70vh]"
            style={{ perspective: '1400px' }}
          >
            {hasGallery && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-900/90 hover:bg-brandOrange-500 text-white border border-white/20 hover:border-brandOrange-400 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
                  title="التصميم السابق"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-900/90 hover:bg-brandOrange-500 text-white border border-white/20 hover:border-brandOrange-400 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
                  title="التصميم التالي"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </>
            )}

            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={displayUrl}
                src={displayUrl}
                alt={displayTitle}
                initial={{
                  opacity: 0,
                  rotateY: direction >= 0 ? 25 : -25,
                  scale: 0.88,
                  z: -100,
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                  z: 0,
                }}
                exit={{
                  opacity: 0,
                  rotateY: direction >= 0 ? -25 : 25,
                  scale: 0.88,
                  z: -100,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 160,
                  damping: 22,
                }}
                style={{ transformStyle: 'preserve-3d' }}
                onError={(e) => {
                  if (activePoster?.thumb && !e.currentTarget.src.endsWith(activePoster.thumb)) {
                    e.currentTarget.src = activePoster.thumb;
                  }
                }}
                className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] select-none"
              />
            </AnimatePresence>
          </div>

          {/* Thumbnail Strip for Multi-Poster Gallery */}
          {hasGallery && posters && (
            <div className="w-full mt-3 pt-2 overflow-x-auto flex items-center gap-2 pb-1 scrollbar-thin">
              {posters.map((p, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      onChangeIndex?.(idx);
                    }}
                    className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                      isSelected
                        ? 'border-brandOrange-500 scale-105 shadow-[0_0_15px_rgba(249,115,22,0.6)]'
                        : 'border-white/10 opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={p.thumb}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          )}

          {/* Footer */}
          <div className="w-full pt-2.5 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
            <span>OUT ZONE • معرض التصاميم الإبداعية</span>
            <span>
              {hasGallery
                ? 'استخدم الأسهم للتنقل ثلاثي الأبعاد بين البوسترات'
                : 'اضغط في أي مكان خارج النافذة للإغلاق'}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
