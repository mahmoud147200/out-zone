import React, { useEffect } from 'react';
import { X, TrendingUp, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../data/content';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: PortfolioItem | null;
  onOpenConsultation: (projectTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  onOpenConsultation,
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

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-navy-900 border border-brandOrange-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-navy-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-navy-950/80 backdrop-blur-md text-brandOrange-400 border border-brandOrange-500/30">
            {project.category}
          </div>
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.result}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Metrics Highlight */}
        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-navy-950 border border-white/5 mb-6">
          <div>
            <div className="text-xs text-slate-400 mb-1">النتيجة الرئيسية</div>
            <div className="text-xl sm:text-2xl font-black text-amber-400">
              {project.result}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400 mb-1">نوع المقياس</div>
            <div className="text-sm sm:text-base font-bold text-slate-200">
              {project.resultLabel}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation(project.title);
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brandOrange-600 to-amber-500 hover:from-brandOrange-500 hover:to-amber-400 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2"
          >
            <span>طلب خطة عمل مشابهة لمشروعك</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
