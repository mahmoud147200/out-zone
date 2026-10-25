import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { WhyUs } from './components/WhyUs';
import { KuwaitCTA } from './components/KuwaitCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PosterModal } from './components/PosterModal';
import { ProjectModal } from './components/ProjectModal';
import { LegalModal } from './components/LegalModal';
import { ScrollProgress3D } from './components/ScrollReveal3D';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { PortfolioItem, SITE_DATA, openWhatsAppDirect } from './data/content';

export const App: React.FC = () => {
  const [posterModalState, setPosterModalState] = useState<{
    isOpen: boolean;
    posterUrl: string;
    title: string;
  }>({
    isOpen: false,
    posterUrl: '',
    title: '',
  });

  const [projectModalState, setProjectModalState] = useState<{
    isOpen: boolean;
    project: PortfolioItem | null;
  }>({
    isOpen: false,
    project: null,
  });

  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    title: '',
    type: 'privacy',
  });

  // Direct WhatsApp handler — No form modals, opens WhatsApp directly on +201067989456
  const handleOpenConsultation = (topicOrPackage?: string) => {
    openWhatsAppDirect(topicOrPackage);
  };

  const handleOpenPosterModal = (posterUrl: string, title: string) => {
    setPosterModalState({
      isOpen: true,
      posterUrl,
      title,
    });
  };

  const handleOpenProjectModal = (project: PortfolioItem) => {
    setProjectModalState({
      isOpen: true,
      project,
    });
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-arabic relative selection:bg-brandOrange-500 selection:text-white">
      {/* Top 3D Scroll Progress & Parallax Ambient Shapes */}
      <ScrollProgress3D />

      {/* Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. Client Partners */}
        <ClientLogos />

        {/* 4. Integrated Marketing Services */}
        <Services
          onOpenConsultation={handleOpenConsultation}
          onOpenPosterModal={handleOpenPosterModal}
        />

        {/* 5. Packages & Pricing */}
        <Packages
          onSelectPackage={handleOpenConsultation}
          onOpenPosterModal={handleOpenPosterModal}
        />

        {/* 6. Portfolio Showcase */}
        <Portfolio
          onSelectProject={handleOpenProjectModal}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 7. Case Studies */}
        <CaseStudies onOpenConsultation={handleOpenConsultation} />

        {/* 8. Why OUT ZONE / About Us */}
        <WhyUs
          onOpenPosterModal={handleOpenPosterModal}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 9. Digital Growth CTA */}
        <KuwaitCTA onOpenConsultation={() => handleOpenConsultation()} />

        {/* 10. Direct WhatsApp & Contact Channels (No Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() =>
          setLegalModalState({
            isOpen: true,
            title: 'سياسة الخصوصية وسرية البيانات',
            type: 'privacy',
          })
        }
        onOpenTerms={() =>
          setLegalModalState({
            isOpen: true,
            title: 'الشروط والأحكام والتعاقد',
            type: 'terms',
          })
        }
      />

      {/* Floating Official WhatsApp Action Button */}
      <a
        href={`https://wa.me/${SITE_DATA.whatsappKuwait}?text=${encodeURIComponent('مرحباً فريق OUT ZONE 👋، أود الاستفسار عن باقات وخدمات التسويق الرقمي.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_28px_rgba(37,211,102,0.55)] hover:shadow-[0_0_38px_rgba(37,211,102,0.85)] transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2.5"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white shrink-0" />
        <span className="hidden sm:inline-block text-xs sm:text-sm font-extrabold">
          واتساب مباشر
        </span>
      </a>

      {/* Interactive Modals (Posters, Projects, Legal) */}
      <PosterModal
        isOpen={posterModalState.isOpen}
        onClose={() =>
          setPosterModalState((prev) => ({ ...prev, isOpen: false }))
        }
        posterUrl={posterModalState.posterUrl}
        title={posterModalState.title}
      />

      <ProjectModal
        isOpen={projectModalState.isOpen}
        onClose={() =>
          setProjectModalState((prev) => ({ ...prev, isOpen: false }))
        }
        project={projectModalState.project}
        onOpenConsultation={handleOpenConsultation}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={() =>
          setLegalModalState((prev) => ({ ...prev, isOpen: false }))
        }
        title={legalModalState.title}
        type={legalModalState.type}
      />
    </div>
  );
};

export default App;
