import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft, ChevronLeft } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenConsultation: (packageName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'services', 'packages', 'portfolio', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero', id: 'hero' },
    { name: 'خدماتنا', href: '#services', id: 'services' },
    { name: 'باقاتنا', href: '#packages', id: 'packages' },
    { name: 'أعمالنا', href: '#portfolio', id: 'portfolio' },
    { name: 'من نحن', href: '#about', id: 'about' },
    { name: 'تواصل معنا', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105 shrink-0"
            >
              <img
                src="/assets/logo/logo-outzone.png"
                alt="OUT ZONE"
                className="h-9 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(249,115,22,0.35)]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-navy-900/70 border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-white/10 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-brandOrange-500 rounded-full shadow-[0_0_8px_#f97316]"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-navy-800 to-navy-700 hover:from-brandOrange-600 hover:to-brandOrange-500 border border-brandOrange-500/30 hover:border-brandOrange-400/80 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                <span>تحدث مع مستشار</span>
                <ArrowUpLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenConsultation()}
                className="px-3 py-1.5 rounded-xl bg-brandOrange-500/15 border border-brandOrange-500/40 text-brandOrange-400 text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-transform"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>تواصل</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-navy-900/98 border-l border-white/10 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <img
                src="/assets/logo/logo-outzone.png"
                alt="OUT ZONE Logo"
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-brandOrange-500/15 text-brandOrange-400 border border-brandOrange-500/30'
                        : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronLeft className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={`https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent('مرحباً فريق OUT ZONE 👋، أود الاستفسار عن باقات وخدمات التسويق الرقمي.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-emerald-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(37,211,102,0.35)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>تواصل عبر واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
