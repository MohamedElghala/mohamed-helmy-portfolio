"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PortalHero from "@/components/PortalHero";
import BentoGrid from "@/components/BentoGrid";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppDrawerModal from "@/components/WhatsAppDrawerModal";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setSelectedService(undefined);
  };

  return (
    <main className="min-h-screen bg-noir-950 text-bone selection:bg-champagne selection:text-noir-950 relative">
      {/* Global Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero with Portal Parting Mechanics */}
      <PortalHero onOpenConsultation={() => handleOpenConsultation()} />

      {/* Featured Works Bento Grid */}
      <BentoGrid
        projects={PORTFOLIO_DATA.projects}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Editorial Services & Capabilities */}
      <ServicesSection
        services={PORTFOLIO_DATA.services}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* About & Technical Philosophy */}
      <AboutSection />

      {/* Footer & Direct Inquiries */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive WhatsApp & Email Drawer Modal */}
      <WhatsAppDrawerModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        preSelectedService={selectedService}
      />
    </main>
  );
}
