import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

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
        className="relative w-full max-w-xl rounded-3xl bg-navy-900 border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-brandOrange-400" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
          {type === 'privacy' ? (
            <>
              <p>
                في وكالة <strong>OUT ZONE</strong>، نلتزم بحماية خصوصية عملائنا وزوارنا وفق أعلى المعايير القانونية والأخلاقية.
              </p>
              <h4 className="font-bold text-white text-sm">1. جمع البيانات</h4>
              <p>
                نقوم بجمع البيانات التي تزودنا بها طواعية عبر نماذج الاستشارة مثل الاسم ورقم الهاتف واسم النشاط التجاري لغرض التواصل وتقديم الحلول التسويقية المطلوبة.
              </p>
              <h4 className="font-bold text-white text-sm">2. سرية المعلومات</h4>
              <p>
                جميع بيانات حسابات التواصل الاجتماعي، مؤشرات الأداء، وحملاتك الإعلانية تُعامل بسرية تامة وتخضع لاتفاقية عدم إفصاح متبادلة (NDA) عند التعاقد.
              </p>
              <h4 className="font-bold text-white text-sm">3. عدم مشاركة البيانات</h4>
              <p>
                لا نقوم ببيع أو تأجير أو مشاركة أي من بيانات عملائنا مع أي طرف ثالث لأغراض تسويقية خارجية.
              </p>
            </>
          ) : (
            <>
              <p>
                أهلاً بكم في <strong>OUT ZONE</strong>. يحدد هذا العقد التزامات تقديم الخدمات التسويقية الرقمية لعملائنا الكرام.
              </p>
              <h4 className="font-bold text-white text-sm">1. نطاق العمل</h4>
              <p>
                تلتزم الوكالة بتسليم المواد المتفق عليها ضمن الباقة المختارة (بوستات، ستوري، ريلز، حملات إعلانية) وفق جدول زمني متفق عليه مسبقاً.
              </p>
              <h4 className="font-bold text-white text-sm">2. ميزانيات الإعلانات</h4>
              <p>
                تكلفة الباقات الشهرية تغطي إدارة الحملات والاستراتيجية وصناعة المحتوى، بينما يتم سداد ميزانية الإنفاق الإعلاني للمنصات (Meta, TikTok, Google) مباشرة عبر بطاقة العميل.
              </p>
              <h4 className="font-bold text-white text-sm">3. الملكية الفكرية</h4>
              <p>
                تؤول ملكية كافة التصاميم والمواد الإعلانية المعتمدة والمنتجة للعميل بمجرد سداد المستحقات المتفق عليها.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-xs font-bold text-slate-200 hover:text-white transition-colors"
          >
            فهمت وموافق
          </button>
        </div>
      </div>
    </div>
  );
};
