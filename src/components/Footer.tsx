import React from 'react';
import { SITE_DATA } from '../data/content';
import {
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 relative overflow-hidden text-slate-300">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandOrange-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          {/* Column 1: Brand Info & Social (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="inline-block">
              <img
                src="/assets/logo/logo-outzone.png"
                alt="OUT ZONE Beyond Limits"
                className="h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {isRTL
                ? 'وكالة تسويق رقمي وتطوير مواقع متكاملة. نصمم المواقع الإلكترونية مع إيميل بزنس رسمي، نصنع المحتوى الإبداعي، وندير الحملات الإعلانية الممولة لمضاعفة مبيعاتك.'
                : 'Full-service digital marketing & web agency. We build websites with official business email, craft viral Reels, and manage high-ROAS paid ad campaigns.'}
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
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'خدماتنا المتكاملة' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'باقات الأسعار' : 'Pricing Packages'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'أعمالنا مع العملاء' : 'Client Portfolio'}
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'آراء العملاء' : 'Client Reviews'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'ليش تختارنا؟' : 'Why Choose Us'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brandOrange-400 transition-colors">
                  {isRTL ? 'تواصل ويانا' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links (Lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isRTL ? 'أبرز خدماتنا' : 'Core Services'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-brandOrange-400 font-semibold text-amber-300 transition-colors">
                  {isRTL
                    ? 'إنشاء مواقع إلكترونية + إيميل بزنس رسمي'
                    : 'Website Development + Official Business Email'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  {isRTL
                    ? 'الإعلانات الممولة (Meta & TikTok & Google)'
                    : 'Paid Media Buying (Meta, TikTok & Google)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  {isRTL
                    ? 'صناعة المحتوى ومونتاج الريلز 4K'
                    : 'Content Creation & 4K Reels Editing'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  {isRTL
                    ? 'إدارة حسابات السوشيال ميديا'
                    : 'Full Social Media Management'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  {isRTL
                    ? 'التصميم الإبداعي والهويات البصرية'
                    : 'Creative Design & Brand Identity'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-400 transition-colors">
                  {isRTL
                    ? 'الخطط التسويقية وتقارير الأداء'
                    : 'Marketing Strategy & ROI Analytics'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Details (Lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isRTL ? 'تواصل مباشر' : 'Direct Contact'}
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
            {isRTL ? 'جميع الحقوق محفوظة © 2026 ' : 'All rights reserved © 2026 '}
            <span className="text-slate-300 font-bold">OUT ZONE</span>.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-brandOrange-400 transition-colors"
            >
              <span>{isRTL ? 'للأعلى' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
