import React, { useEffect } from 'react';
import { X, Download, ZoomIn } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  posterUrl: string;
  title: string;
}

export const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  posterUrl,
  title,
}) => {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center justify-center bg-navy-900/90 border border-white/10 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-xs sm:max-w-md">
              {title}
            </h3>
            <span className="text-xs text-brandOrange-400 bg-brandOrange-500/10 px-2.5 py-0.5 rounded-full border border-brandOrange-500/20 font-semibold">
              دقة عالية
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={posterUrl}
              download
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="تحميل الصورة"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Poster Image Container */}
        <div className="w-full flex-grow flex items-center justify-center overflow-auto max-h-[75vh] rounded-2xl bg-navy-950/60 p-2">
          <img
            src={posterUrl}
            alt={title}
            className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        <div className="w-full pt-3 flex items-center justify-between text-xs text-slate-400">
          <span>OUT ZONE • تصاميم وهوية رسمية</span>
          <span>اضغط في أي مكان خارج النافذة للإغلاق</span>
        </div>
      </div>
    </div>
  );
};
