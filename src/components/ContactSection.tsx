import React from 'react';
import { Phone, Mail, Clock, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const waLink = `https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent(
    'مرحباً فريق OUT ZONE 👋، أرغب في التواصل معكم والاستفسار عن الباقات والخدمات التسويقية.'
  )}`;

  const quickTopics = [
    { label: 'الباقة الأساسية (40 KD)', text: 'مرحباً فريق OUT ZONE 👋، أود الاشتراك أو الاستفسار عن الباقة الأساسية (40 KD).' },
    { label: 'الباقة المتوسطة — الأكثر طلباً (50 KD)', text: 'مرحباً فريق OUT ZONE 👋، أود الاشتراك أو الاستفسار عن الباقة المتوسطة (50 KD).' },
    { label: 'الباقة الاحترافية (70 KD)', text: 'مرحباً فريق OUT ZONE 👋، أود الاشتراك أو الاستفسار عن الباقة الاحترافية (70 KD).' },
    { label: 'استشارة تسويقية مخصصة', text: 'مرحباً فريق OUT ZONE 👋، أرغب في الحصول على استشارة تسويقية مخصصة لنشاطي التجاري.' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy-900/60 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brandOrange-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal3D direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-4 shadow-sm">
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>تواصل فوري ومباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            ابدأ رحلة نمو علامتك التجارية{' '}
            <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent py-1">
              معنا اليوم
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
            تواصل معنا مباشرة عبر تطبيق واتساب بضغطة زر واحدة لمناقشة أهدافك واختيار الخطة التسويقية الأنسب لنشاطك التجاري.
          </p>
        </Reveal3D>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main WhatsApp Direct Hub Card (Right in RTL) */}
          <div className="lg:col-span-7">
            <TiltCard3D intensity={6} className="h-full">
              <div className="glass-card h-full rounded-3xl p-7 sm:p-10 border border-emerald-500/35 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between text-right">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#25D366] to-emerald-400 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.45)] shrink-0">
                      <WhatsAppIcon className="w-9 h-9" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        القناة الرسمية للتواصل السريع
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                        تحدث معنا عبر واتساب
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    فريقنا المختص متواجد للرد الفوري على استفساراتك ومساعدتك في اختيار الباقة المناسبة وتفعيل خطة العمل لعلامتك التجارية دون أي تعقيد.
                  </p>

                  {/* Quick Topic Buttons that open WhatsApp with pre-filled topic */}
                  <div className="mb-8">
                    <div className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brandOrange-400" />
                      <span>اختر موضوع استفسارك لبدء المحادثة فوراً:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {quickTopics.map((topic, idx) => (
                        <a
                          key={idx}
                          href={`https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent(topic.text)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 rounded-xl bg-navy-950/80 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/50 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all group"
                        >
                          <span>{topic.label}</span>
                          <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Big Primary WhatsApp Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-[#25D366] text-white font-black text-base sm:text-lg shadow-[0_0_35px_rgba(37,211,102,0.4)] hover:shadow-[0_0_45px_rgba(37,211,102,0.7)] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01]"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>بدء محادثة واتساب مباشرة</span>
                  <span dir="ltr" className="text-sm sm:text-base font-mono bg-black/20 px-3 py-0.5 rounded-lg">
                    {SITE_DATA.phoneKuwait}
                  </span>
                </a>
              </div>
            </TiltCard3D>
          </div>

          {/* Direct Channels Column (Left in RTL — No Address/Location) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* WhatsApp Direct Card */}
            <TiltCard3D index={1} intensity={8}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-3xl bg-navy-850/90 border border-emerald-500/30 hover:border-emerald-400 transition-all group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold mb-1">واتساب مباشر</div>
                  <div dir="ltr" className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-400 transition-colors font-mono">
                    {SITE_DATA.phoneKuwait}
                  </div>
                </div>
              </a>
            </TiltCard3D>

            {/* Phone Direct Card */}
            <TiltCard3D index={2} intensity={8}>
              <a
                href={`tel:${SITE_DATA.phoneKuwait}`}
                className="flex items-center gap-4 p-6 rounded-3xl bg-navy-850/90 border border-white/10 hover:border-brandOrange-500/60 transition-all group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-brandOrange-500/20 text-brandOrange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold mb-1">اتصال هاتفي مباشر</div>
                  <div dir="ltr" className="text-lg sm:text-xl font-black text-white group-hover:text-brandOrange-400 transition-colors font-mono">
                    {SITE_DATA.phoneKuwait}
                  </div>
                </div>
              </a>
            </TiltCard3D>

            {/* Email Direct Card */}
            <TiltCard3D index={3} intensity={8}>
              <a
                href={`mailto:${SITE_DATA.email}`}
                className="flex items-center gap-4 p-6 rounded-3xl bg-navy-850/90 border border-white/10 hover:border-electric-500/60 transition-all group shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold mb-1">البريد الإلكتروني الرسمي</div>
                  <div dir="ltr" className="text-base sm:text-lg font-black text-white group-hover:text-electric-400 transition-colors font-mono">
                    {SITE_DATA.email}
                  </div>
                </div>
              </a>
            </TiltCard3D>

            {/* Response Time Guarantee */}
            <Reveal3D delay={0.2}>
              <div className="p-5 rounded-2xl bg-navy-950/80 border border-white/10 space-y-2.5 text-right">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                  <Clock className="w-4 h-4 text-brandOrange-400 shrink-0" />
                  <span>استجابة فورية ومباشرة</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>متابعة مستمرة وخطط تسويقية مخصصة لنشاطك التجاري.</span>
                </div>
              </div>
            </Reveal3D>

          </div>

        </div>

      </div>
    </section>
  );
};
