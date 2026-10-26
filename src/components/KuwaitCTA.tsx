import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';

interface KuwaitCTAProps {
  onOpenConsultation: () => void;
}

export const KuwaitCTA: React.FC<KuwaitCTAProps> = ({ onOpenConsultation }) => {
  const { isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card with 3D Flip & Tilt */}
        <Reveal3D direction="flip">
          <TiltCard3D intensity={5}>
            <div className="relative rounded-3xl overflow-hidden border border-brandOrange-500/40 shadow-2xl shadow-brandOrange-500/20 group">
              {/* Clean Digital Growth Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/cta/cta-kuwait.png"
                  alt="OUT ZONE Digital Growth"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-950" />
              </div>

              {/* Ambient Corner Glows */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-brandOrange-500/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-electric-500/20 rounded-full blur-[100px] pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-brandOrange-500/40 text-xs font-bold text-brandOrange-400 mb-6 shadow-md backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-brandOrange-400" />
                  <span>
                    {isRTL
                      ? 'خطوة وحدة تفصلك عن مضاعفة مبيعات مشروعك بالكويت'
                      : 'One Step Away From Multiplying Your Sales'}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-normal leading-[1.4] mb-6">
                  {isRTL ? 'جاهز تنقل مشروعك وبراندك ' : 'Ready to Take Your Brand '}
                  <span className="block mt-1 py-1 bg-gradient-to-l from-brandOrange-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                    {isRTL ? 'حق مستوى ثاني بالسوق؟' : 'To the Next Level?'}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
                  {isRTL
                    ? 'خلّنا نبني لك خطة تسويقية متكاملة وموقع إلكتروني احترافي مع إيميل بزنس رسمي يحقق لك مبيعات مستمرة.'
                    : 'Let us build your custom marketing strategy and professional website with an official business email to drive sustainable sales.'}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#25D366] via-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-[#25D366] shadow-[0_0_35px_rgba(37,211,102,0.45)] hover:shadow-[0_0_45px_rgba(37,211,102,0.75)] transition-all duration-300 hover:scale-105 active:scale-95 group"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>{isRTL ? 'تواصل ويانا واتساب الحين' : 'Chat on WhatsApp Now'}</span>
                    <ArrowIcon className="w-5 h-5 transition-transform" />
                  </button>

                  <a
                    href="#packages"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-slate-200 bg-navy-900/90 hover:bg-navy-800 border border-white/20 hover:border-brandOrange-400 hover:text-white backdrop-blur-md transition-all duration-300 hover:scale-105"
                  >
                    <span>{isRTL ? 'شوف الباقات والأسعار' : 'View Packages'}</span>
                  </a>
                </div>

                {/* Small note */}
                <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>{isRTL ? 'استشارة أولية مجانية' : 'Free Initial Consultation'}</span>
                  </span>
                  <span>•</span>
                  <span>
                    {isRTL ? 'رد سريع ومباشر على الواتساب' : 'Instant Direct WhatsApp Reply'}
                  </span>
                </div>
              </div>
            </div>
          </TiltCard3D>
        </Reveal3D>
      </div>
    </section>
  );
};
