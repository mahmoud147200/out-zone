import React from 'react';
import { SITE_DATA } from '../data/content';
import {
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 relative overflow-hidden text-slate-300">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandOrange-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Social (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-right">
            <a href="#hero" className="inline-block">
              <img
                src="/assets/logo/logo-outzone.png"
                alt="OUT ZONE Beyond Limits"
                className="h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              وكالة تسويق رقمي متكاملة. نصنع المحتوى الإبداعي، ندير الحملات الإعلانية الممولة، ونقود علامتك التجارية نحو الصدارة ومضاعفة المبيعات.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${SITE_DATA.whatsappKuwait}`}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 hover:border-[#25D366] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] transition-all hover:scale-110 shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                href={`tel:${SITE_DATA.phoneKuwait}`}
                title="Call Us"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 hover:border-brandOrange-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brandOrange-600 transition-all hover:scale-110 shadow-md"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SITE_DATA.email}`}
                title="Email Us"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 hover:border-electric-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-electric-600 transition-all hover:scale-110 shadow-md"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-brandOrange-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brandOrange-400 transition-colors">
                  خدماتنا المتكاملة
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brandOrange-400 transition-colors">
                  باقات الأسعار
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brandOrange-400 transition-colors">
                  معرض الأعمال
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brandOrange-400 transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brandOrange-400 transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links (Lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              خدماتنا التسويقية
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  الإعلانات الممولة (Meta & TikTok)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  صناعة المحتوى وتصوير ريلز
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  إدارة السوشيال ميديا والتفاعل
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  التصميم الإبداعي والهويات
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  الاستراتيجيات التسويقية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  التحليل وتقارير الأداء الشهرية
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Details (Lg: 3 cols — No Newsletter, No Address) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              تواصل مباشر
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${SITE_DATA.whatsappKuwait}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/90 border border-white/5 hover:border-emerald-500/40 transition-colors group"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                <span dir="ltr" className="font-mono font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {SITE_DATA.phoneKuwait}
                </span>
              </a>

              <a
                href={`mailto:${SITE_DATA.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/90 border border-white/5 hover:border-electric-500/40 transition-colors group"
              >
                <Mail className="w-5 h-5 text-electric-400 shrink-0" />
                <span dir="ltr" className="font-mono font-bold text-slate-200 group-hover:text-electric-400 transition-colors">
                  {SITE_DATA.email}
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            جميع الحقوق محفوظة © 2026 <span className="text-slate-300 font-bold">OUT ZONE</span>.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              سياسة الخصوصية
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              الشروط والأحكام
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-brandOrange-400 transition-colors"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
