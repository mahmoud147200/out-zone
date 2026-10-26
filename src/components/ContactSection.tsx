import React from 'react';
import { Phone, Mail, Clock, Sparkles, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import { Reveal3D, TiltCard3D } from './ScrollReveal3D';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const { isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const waLink = `https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent(
    isRTL
      ? 'قوة فريق OUT ZONE 👋، حاب أتواصل معاكم وأستفسر عن الباقات وخدمات التسويق وتصميم المواقع.'
      : 'Hello OUT ZONE team 👋, I would like to inquire about your marketing packages and website development services.'
  )}`;

  const quickTopics = isRTL
    ? [
        {
          label: 'إنشاء موقع إلكتروني + إيميل بزنس رسمي',
          text: 'قوة فريق OUT ZONE 👋، حاب أستفسر عن خدمة تصميم وإنشاء موقع إلكتروني احترافي مع إيميل بزنس رسمي باسم شركتي.',
        },
        {
          label: 'الباقة المتوسطة — الأكثر طلباً (50 KD)',
          text: 'قوة فريق OUT ZONE 👋، حاب أشترك أو أستفسر عن الباقة المتوسطة (50 KD).',
        },
        {
          label: 'الباقة الاحترافية VIP (70 KD)',
          text: 'قوة فريق OUT ZONE 👋، حاب أشترك أو أستفسر عن الباقة الاحترافية VIP (70 KD).',
        },
        {
          label: 'الباقة الأساسية (40 KD)',
          text: 'قوة فريق OUT ZONE 👋، حاب أشترك أو أستفسر عن الباقة الأساسية (40 KD).',
        },
      ]
    : [
        {
          label: 'Website Development + Official Business Email',
          text: 'Hello OUT ZONE team 👋, I would like to inquire about developing a professional website with an Official Business Email.',
        },
        {
          label: 'Growth Package — Most Popular (50 KD)',
          text: 'Hello OUT ZONE team 👋, I would like to inquire about the Growth Package (50 KD).',
        },
        {
          label: 'VIP Pro Package (70 KD)',
          text: 'Hello OUT ZONE team 👋, I would like to inquire about the VIP Pro Package (70 KD).',
        },
        {
          label: 'Basic Package (40 KD)',
          text: 'Hello OUT ZONE team 👋, I would like to inquire about the Basic Package (40 KD).',
        },
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
            <span>{isRTL ? 'تواصل سريع ومباشر ويانا' : 'Instant Direct Communication'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {isRTL ? 'ابدي رحلة نجاح مشروعك ' : 'Start Growing Your Brand '}
            <span className="bg-gradient-to-l from-brandOrange-400 to-amber-300 bg-clip-text text-transparent py-1">
              {isRTL ? 'ويانا اليوم' : 'With Us Today'}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-4 leading-relaxed">
            {isRTL
              ? 'كلّمنا مباشرة على الواتساب بضغطة زر عشان نناقش أهداف مشروعك ونختار لك الخطة التسويقية أو الموقع الإلكتروني الأنسب لك.'
              : 'Reach out directly via WhatsApp with a single click to discuss your business goals and choose the best marketing package or website solution.'}
          </p>
        </Reveal3D>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main WhatsApp Direct Hub Card */}
          <div className="lg:col-span-7">
            <TiltCard3D intensity={6} className="h-full">
              <div
                className={`glass-card h-full rounded-3xl p-7 sm:p-10 border border-emerald-500/35 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#25D366] to-emerald-400 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.45)] shrink-0">
                      <WhatsAppIcon className="w-9 h-9" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        {isRTL ? 'القناة الرسمية للتواصل السريع' : 'Official Fast-Track Channel'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                        {isRTL ? 'كلّمنا على الواتساب' : 'Chat With Us on WhatsApp'}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {isRTL
                      ? 'فريقنا جاهز يرد على كل استفساراتك ويساعدك تختار الباقة المناسبة أو نجهز لك موقعك الإلكتروني مع الإيميل الرسمي بأسرع وقت.'
                      : 'Our specialists are ready to answer your questions immediately and help you launch your marketing campaign or corporate website.'}
                  </p>

                  {/* Quick Topic Buttons */}
                  <div className="mb-8">
                    <div className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brandOrange-400" />
                      <span>
                        {isRTL
                          ? 'اختار الخدمة أو الباقة عشان نبدي المحادثة فوراً:'
                          : 'Select a topic to start chatting immediately:'}
                      </span>
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
                          <ArrowIcon className="w-4 h-4 text-emerald-400 transition-transform shrink-0" />
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
                  <span>
                    {isRTL ? 'ابدي محادثة واتساب الحين' : 'Start WhatsApp Chat Now'}
                  </span>
                  <span dir="ltr" className="text-sm sm:text-base font-mono bg-black/20 px-3 py-0.5 rounded-lg">
                    {SITE_DATA.phoneKuwait}
                  </span>
                </a>
              </div>
            </TiltCard3D>
          </div>

          {/* Direct Channels Column */}
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
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-xs text-slate-400 font-semibold mb-1">
                    {isRTL ? 'واتساب مباشر' : 'Direct WhatsApp'}
                  </div>
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
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-xs text-slate-400 font-semibold mb-1">
                    {isRTL ? 'اتصال هاتفي مباشر' : 'Direct Phone Call'}
                  </div>
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
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-xs text-slate-400 font-semibold mb-1">
                    {isRTL ? 'الإيميل الرسمي للوكالة' : 'Official Business Email'}
                  </div>
                  <div dir="ltr" className="text-base sm:text-lg font-black text-white group-hover:text-electric-400 transition-colors font-mono">
                    {SITE_DATA.email}
                  </div>
                </div>
              </a>
            </TiltCard3D>

            {/* Response Time Guarantee */}
            <Reveal3D delay={0.2}>
              <div
                className={`p-5 rounded-2xl bg-navy-950/80 border border-white/10 space-y-2.5 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                  <Clock className="w-4 h-4 text-brandOrange-400 shrink-0" />
                  <span>{isRTL ? 'رد فوري ومتابعة مستمرة' : 'Fast Response & Dedicated Support'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isRTL
                      ? 'خطط تسويقية ومواقع إلكترونية مفصلة خصيصاً لمشروعك.'
                      : 'Tailored marketing strategies and web solutions for your brand.'}
                  </span>
                </div>
              </div>
            </Reveal3D>
          </div>
        </div>
      </div>
    </section>
  );
};
