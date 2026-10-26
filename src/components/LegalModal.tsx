import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
}) => {
  const { isRTL } = useLanguage();

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-xl rounded-3xl bg-navy-900 border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto ${
          isRTL ? 'text-right' : 'text-left'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-5 ${
            isRTL ? 'left-5' : 'right-5'
          } p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-brandOrange-400" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
          {type === 'privacy' ? (
            isRTL ? (
              <>
                <p>
                  في وكالة <strong>OUT ZONE</strong>، نلتزم بحماية خصوصية عملائنا وزوارنا وفق أعلى المعايير المهنية والأخلاقية.
                </p>
                <h4 className="font-bold text-white text-sm">1. جمع البيانات</h4>
                <p>
                  نجمع فقط البيانات اللي تزودنا فيها بنفسك عبر التواصل المباشر مثل الاسم ورقم الهاتف واسم المشروع بهدف تقديم الاستشارة والحلول التسويقية وتصميم المواقع.
                </p>
                <h4 className="font-bold text-white text-sm">2. سرية المعلومات</h4>
                <p>
                  كل بيانات حسابات التواصل الاجتماعي، المواقع الإلكترونية، الإيميلات الرسمية، وحملاتك الإعلانية تُعامل بسرية تامة.
                </p>
                <h4 className="font-bold text-white text-sm">3. عدم مشاركة البيانات</h4>
                <p>
                  ما نبيع أو نشارك أي من بيانات عملائنا مع أي طرف ثالث لأي غرض كان.
                </p>
              </>
            ) : (
              <>
                <p>
                  At <strong>OUT ZONE</strong>, we are committed to protecting the privacy and data confidentiality of our clients and visitors.
                </p>
                <h4 className="font-bold text-white text-sm">1. Data Collection</h4>
                <p>
                  We only collect information you voluntarily provide when contacting us (such as name, phone number, and business details) to deliver tailored marketing and web solutions.
                </p>
                <h4 className="font-bold text-white text-sm">2. Confidentiality</h4>
                <p>
                  All social media credentials, website assets, official business emails, and ad campaign metrics are treated with strict confidentiality under mutual NDA standards.
                </p>
                <h4 className="font-bold text-white text-sm">3. Zero Third-Party Sharing</h4>
                <p>
                  We never sell, rent, or share client information with third parties.
                </p>
              </>
            )
          ) : isRTL ? (
            <>
              <p>
                حياكم الله في <strong>OUT ZONE</strong>. يوضح هذا القسم التزامات تقديم خدمات التسويق الرقمي وتطوير المواقع لعملائنا الكرام.
              </p>
              <h4 className="font-bold text-white text-sm">1. نطاق العمل</h4>
              <p>
                تلتزم الوكالة بتسليم كافة المواد المتفق عليها ضمن الباقة أو خدمة تصميم الموقع الإلكتروني مع الإيميل الرسمي وفق الجدول الزمني المحدد.
              </p>
              <h4 className="font-bold text-white text-sm">2. ميزانيات الإعلانات الممولة</h4>
              <p>
                قيمة الباقات الشهرية تشمل الإدارة الكاملة، صناعة المحتوى، التصميم، والمونتاج، بينما يتم تحديد ميزانية الإنفاق الإعلاني للمنصات (Meta, TikTok, Google) حسب رغبة العميل.
              </p>
              <h4 className="font-bold text-white text-sm">3. الملكية الفكرية</h4>
              <p>
                تنتقل ملكية كافة التصاميم، الفيديوهات، والمواقع الإلكترونية والدومين الرسمي للعميل فور إتمام الاتفاق.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>OUT ZONE</strong>. These terms outline our commitment in delivering digital marketing and website development services.
              </p>
              <h4 className="font-bold text-white text-sm">1. Scope of Work</h4>
              <p>
                The agency delivers all agreed-upon monthly deliverables (posts, stories, Reels, ad management) or custom website + official business email projects according to the scheduled timeline.
              </p>
              <h4 className="font-bold text-white text-sm">2. Ad Spend Budgets</h4>
              <p>
                Monthly package fees cover strategy, content creation, design, editing, and campaign management, while platform ad spend (Meta, TikTok, Google) is allocated directly according to the client’s budget.
              </p>
              <h4 className="font-bold text-white text-sm">3. Intellectual Property</h4>
              <p>
                Full ownership of all approved designs, videos, websites, and domain emails transfers to the client upon completion of payment.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-xs font-bold text-slate-200 hover:text-white transition-colors"
          >
            {isRTL ? 'واضح وموافق' : 'Understood'}
          </button>
        </div>
      </div>
    </div>
  );
};
