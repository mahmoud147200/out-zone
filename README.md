# OUT ZONE — Beyond Limits. Beyond Imagination.

الموقع الإلكتروني الرسمي لوكالة **OUT ZONE** للتسويق الرقمي المتكامل، صناعة المحتوى الإبداعي، وإدارة الحملات الإعلانية الممولة.

---

## 📋 نبذة عن المشروع (Project Description)

تطبيق ويب أحادي الصفحة (SPA) عالي الأداء ومجهز للإنتاج (Production-Ready) بتصميم عصري داكن (**Dark Modern Aesthetic**) يدعم اللغة العربية واتجاه العرض من اليمين لليسار (**RTL**) بشكل كامل. يستعرض الموقع خدمات الوكالة، الباقات التسويقية الشهرية، معرض الأعمال، دراسات الحالة، وقنوات التواصل المباشر عبر تطبيق واتساب.

---

## 🛠️ التقنيات المستخدمة (Technologies Used)

- **React 18** + **TypeScript** — لبناء واجهة مستخدم تفاعلية وموثوقة.
- **Vite 5** — لأسرع أداء في التطوير وتجميع حزم الإنتاج (Bundling).
- **Tailwind CSS 3** — للتصميم المتجاوب، تأثيرات الـ Glassmorphism، ودعم RTL.
- **Framer Motion 11** — للحركات الانسيابية عند التمرير (Scroll Reveal) وتأثيرات المنظور ثلاثي الأبعاد (3D Tilt & Perspective) مع دعم كامل لـ `prefers-reduced-motion`.
- **Lucide React** — للأيقونات المتجهة العصرية.
- **Canvas Confetti** — للتأثيرات التفاعلية عند اختيار الباقات.

---

## ⚙️ التثبيت والتشغيل (Installation & Commands)

### 1. تثبيت الحزم (Install Dependencies)
```bash
npm install
```

### 2. تشغيل خادم التطوير المحلي (Development Server)
```bash
npm run dev
```

### 3. بناء نسخة الإنتاج (Production Build)
يقوم هذا الأمر بفحص أنواع TypeScript (`tsc`) ثم بناء الحزمة النهائية المحسنة داخل مجلد `dist/`:
```bash
npm run build
```

### 4. معاينة نسخة الإنتاج محلياً (Preview Production Build)
```bash
npm run preview
```

---

## 🔐 متغيرات البيئة (Environment Variables)

المشروع يعمل مباشرة بالإعدادات الافتراضية دون الحاجة لمتغيرات بيئة إلزامية. في حال الرغبة بتخصيص الإعدادات العامة، يمكنك نسخ ملف `.env.example` إلى `.env`:

| المتغير | الوصف |
| :--- | :--- |
| `VITE_SITE_URL` | الرابط الأساسي للموقع (مثال: `https://outzone-kw.com`) |
| `VITE_CONTACT_EMAIL` | البريد الإلكتروني الرسمي للتواصل |
| `VITE_WHATSAPP_NUMBER` | رقم الواتساب الرسمي بصيغة دولية بدون علامة `+` |

> **ملاحظة أمنية:** لا تقم أبداً برفع ملف `.env` أو أي مفاتيح سرية إلى GitHub.

---

## 🚀 ملاحظة النشر (Deployment Note)

المشروع مهيأ بالكامل ويمكن نشره مباشرة على منصة **Vercel**:
- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

بعد ربط مستودع GitHub بحسابك على **Vercel**، سيتم بناء الموقع ونشره تلقائياً، ويمكنك بعدها ربط النطاق الخاص بك (`outzone-kw.com`) من إعدادات Vercel.
