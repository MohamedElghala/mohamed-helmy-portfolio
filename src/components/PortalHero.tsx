"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, MessageSquare, Sparkles, Compass } from "lucide-react";

interface PortalHeroProps {
  onOpenConsultation: () => void;
}

export default function PortalHero({ onOpenConsultation }: PortalHeroProps) {
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    // Trigger portal parting animation smoothly on mount
    const timer = setTimeout(() => {
      setPortalOpen(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-noir-950">
      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-champagne/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-noir-700/20 rounded-full blur-[120px]" />
      </div>

      {/* Cinematic Frame Border Guidelines (16:9 Letterbox Vibe) */}
      <div className="absolute inset-x-8 top-24 bottom-12 border border-noir-700/30 rounded-2xl pointer-events-none hidden md:block" />

      {/* PORTAL SHUTTERS (Superdesign #1: Two panels that part outward) */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          portalOpen ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-1/2 bg-noir-950 border-b border-noir-700/50 flex items-end justify-center pb-6">
          <span className="font-mono text-xs text-champagne/60 tracking-[0.3em] uppercase">
            Entering The Portfolio
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-noir-950 border-t border-noir-700/50 flex items-start justify-center pt-6">
          <span className="font-mono text-xs text-bone-dim tracking-[0.3em] uppercase">
            Mohamed Helmy
          </span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-850 border border-noir-700/80 mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-bone-muted">
            Available for Q4 2026 Contracts
          </span>
          <span className="text-noir-600">•</span>
          <span className="text-[11px] font-mono text-champagne">Cairo, EG</span>
        </div>

        {/* Cinematic Monolithic Headline */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-bone mb-6 leading-[1.05]">
          Mohamed <span className="italic font-normal text-champagne">Helmy</span>
        </h1>

        {/* Role & Core Value Proposition */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-champagne/90 mb-4 font-semibold">
            Creative Technologist & Full-Stack Architect
          </p>
          <p className="text-base sm:text-lg text-bone-muted leading-relaxed font-light">
            Engineering high-conversion digital flagships, bespoke luxury e-commerce platforms,
            and cinematic 3D web experiences that elevate brands and drive measurable business growth.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-champagne/20"
          >
            <Compass className="w-4 h-4 text-noir-950" />
            <span>Explore Selected Works</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-noir-850 hover:bg-noir-800 border border-noir-700 hover:border-champagne/50 text-bone hover:text-champagne font-mono font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-champagne" />
            <span>Book a Project Consultation</span>
          </button>
        </div>

        {/* Minimal Signature Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-noir-700/60 w-full max-w-4xl text-left">
          <div className="p-4 rounded-xl bg-noir-850/50 border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              Architecture
            </span>
            <span className="block text-sm font-bold text-bone">Next.js 14 App Router</span>
            <span className="block text-[11px] text-bone-dim font-mono">TypeScript & APIs</span>
          </div>

          <div className="p-4 rounded-xl bg-noir-850/50 border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              Interactive
            </span>
            <span className="block text-sm font-bold text-bone">Three.js & WebGL</span>
            <span className="block text-[11px] text-bone-dim font-mono">Physics & GSAP</span>
          </div>

          <div className="p-4 rounded-xl bg-noir-850/50 border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              Commerce
            </span>
            <span className="block text-sm font-bold text-bone">Luxury CRO Stores</span>
            <span className="block text-[11px] text-bone-dim font-mono">Headless & Custom</span>
          </div>

          <div className="p-4 rounded-xl bg-noir-850/50 border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              Automation
            </span>
            <span className="block text-sm font-bold text-bone">AI Video Pipelines</span>
            <span className="block text-[11px] text-bone-dim font-mono">9:16 Cloud Commercials</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#work"
          className="mt-12 text-bone-dim hover:text-champagne transition-colors flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll to projects"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
