"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
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
          <div className="hidden sm:block">
            <span className="font-serif text-base tracking-wide text-bone group-hover:text-champagne transition-colors">
              Mohamed Helmy
            </span>
            <span className="block text-[10px] font-mono text-bone-dim uppercase tracking-widest">
              Digital Flagships
            </span>
          </div>
        </a>

        {/* Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-bone-muted">
          <a href="#work" className="hover:text-champagne transition-colors">
            Selected Works
          </a>
          <a href="#services" className="hover:text-champagne transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-champagne transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-champagne transition-colors">
            Contact
          </a>
        </nav>

        {/* Direct WhatsApp Funnel CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation()}
            className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-noir-850 hover:bg-champagne border border-champagne/40 hover:border-champagne text-xs font-mono uppercase tracking-wider text-champagne hover:text-noir-950 transition-all duration-300 shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5 text-champagne group-hover:text-noir-950 transition-colors" />
            <span className="font-bold">Book a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </header>
  );
}
