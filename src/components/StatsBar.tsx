import React, { useEffect, useState, useRef } from 'react';
import { Users, Rocket, BarChart3, ShieldCheck } from 'lucide-react';
import { TiltCard3D } from './ScrollReveal3D';
import { useLanguage } from '../context/LanguageContext';

export const StatsBar: React.FC = () => {
  const { isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsList = [
    {
      id: 'clients',
      target: 120,
      prefix: '+',
      suffix: '',
      title: isRTL ? 'عميل وبراند يثقون فينا' : 'Brands & Clients',
      subtitle: isRTL ? 'شراكة نجاح مستمرة بالكويت' : 'Long-term success partnerships',
      icon: Users,
      color: 'from-brandOrange-500 to-amber-500',
      borderGlow: 'hover:border-brandOrange-500/50',
    },
    {
      id: 'campaigns',
      target: 350,
      prefix: '+',
      suffix: '',
      title: isRTL ? 'حملة تسويقية ناجحة' : 'Successful Campaigns',
      subtitle: isRTL ? 'على Meta وتيك توك وجوجل' : 'Across Meta, TikTok & Google',
      icon: Rocket,
      color: 'from-amber-500 to-electric-400',
      borderGlow: 'hover:border-amber-500/50',
    },
    {
      id: 'reach',
      target: 2.5,
      prefix: '+',
      suffix: 'M',
      isDecimal: true,
      title: isRTL ? 'وصول شهري للجمهور' : 'Monthly Audience Reach',
      subtitle: isRTL ? 'مشاهدات وتفاعل صجي' : 'Targeted views & real engagement',
      icon: BarChart3,
      color: 'from-electric-400 to-blue-500',
      borderGlow: 'hover:border-electric-500/50',
    },
    {
      id: 'satisfaction',
      target: 85,
      prefix: '+',
      suffix: '%',
      title: isRTL ? 'نسبة رضا عملائنا' : 'Client Satisfaction Rate',
      subtitle: isRTL ? 'نمو مستمر وتجديد عقود' : 'Sustained growth & renewals',
      icon: ShieldCheck,
      color: 'from-blue-500 to-brandOrange-500',
      borderGlow: 'hover:border-blue-500/50',
    },
  ];

  return (
    <section
      id="stats"
      ref={barRef}
      className="relative py-10 sm:py-12 bg-navy-900/60 border-y border-white/5 backdrop-blur-md w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {statsList.map((stat, idx) => (
            <TiltCard3D key={stat.id} index={idx} intensity={8}>
              <StatCard stat={stat} isVisible={isVisible} delay={idx * 120} />
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    id: string;
    target: number;
    prefix: string;
    suffix: string;
    isDecimal?: boolean;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    borderGlow: string;
  };
  isVisible: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const start = 0;
      const end = stat.target;
      const duration = 1800;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = start + (end - start) * easeOutQuad;

        if (frame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(stat.isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
        }
      }, frameRate);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, stat.target, stat.isDecimal, delay]);

  return (
    <div
      className={`glass-card rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${stat.borderGlow} group relative overflow-hidden`}
    >
      <div className="flex items-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-3">
        <div
          className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr ${stat.color} p-0.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <div className="w-full h-full bg-navy-950/80 rounded-[10px] flex items-center justify-center">
            <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
        <div className="min-w-0">
          <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-baseline truncate">
            <span>{stat.prefix}</span>
            <span>{stat.isDecimal ? count.toFixed(1) : count}</span>
            <span>{stat.suffix}</span>
          </div>
        </div>
      </div>
      <div className="text-xs sm:text-base font-bold text-slate-200 mb-0.5 truncate">{stat.title}</div>
      <div className="text-[10px] sm:text-xs text-slate-400 truncate">{stat.subtitle}</div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </div>
  );
};
