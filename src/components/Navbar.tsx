"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-noir-950/85 backdrop-blur-xl border-b border-noir-700/60 py-3.5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-lg bg-noir-850 border border-noir-700 group-hover:border-champagne/60 flex items-center justify-center transition-all duration-300">
            <span className="font-serif font-bold text-lg text-champagne tracking-wider group-hover:scale-105 transition-transform">
              MH
            </span>
          </div>
          <div className="hidden sm:block text-start">
            <span className="font-serif text-base tracking-wide text-bone group-hover:text-champagne transition-colors">
              {isRTL ? "محمد حلمي" : "Mohamed Helmy"}
            </span>
            <span className="block text-[10px] font-mono text-bone-dim uppercase tracking-widest">
              {t.nav.brandSub}
            </span>
          </div>
        </a>

        {/* Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-bone-muted">
          <a href="#work" className="hover:text-champagne transition-colors">
            {t.nav.works}
          </a>
          <a href="#services" className="hover:text-champagne transition-colors">
            {t.nav.services}
          </a>
          <a href="#about" className="hover:text-champagne transition-colors">
            {t.nav.about}
          </a>
          <a href="#contact" className="hover:text-champagne transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Action Controls: Language Switcher + Consultation CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Bilingual Switcher Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-noir-850/90 hover:bg-noir-800 border border-noir-700/80 hover:border-champagne/50 text-xs font-mono text-bone-muted hover:text-champagne transition-all shadow-sm"
            aria-label="Toggle Language"
            title={language === "en" ? "تبديل إلى العربية" : "Switch to English"}
          >
            <Globe className="w-3.5 h-3.5 text-champagne" />
            <span className="font-bold uppercase tracking-wider text-[11px]">
              {language === "en" ? "عربي" : "EN"}
            </span>
          </button>

          {/* Direct WhatsApp Funnel CTA */}
          <button
            onClick={() => onOpenConsultation()}
            className="group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-noir-850 hover:bg-champagne border border-champagne/40 hover:border-champagne text-xs font-mono uppercase tracking-wider text-champagne hover:text-noir-950 transition-all duration-300 shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5 text-champagne group-hover:text-noir-950 transition-colors" />
            <span className="font-bold text-[11px] sm:text-xs">{t.nav.bookProject}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
}
