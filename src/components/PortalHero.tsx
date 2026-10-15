"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowDown, MessageSquare, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Dynamically import 3D WebGL Canvas to prevent SSR hydration mismatches
const HeroThreeCanvas = dynamic(() => import("./HeroThreeCanvas"), {
  ssr: false,
  loading: () => null,
});

interface PortalHeroProps {
  onOpenConsultation: () => void;
}

export default function PortalHero({ onOpenConsultation }: PortalHeroProps) {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalDone, setPortalDone] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Trigger portal parting animation smoothly on mount
    const timer = setTimeout(() => {
      setPortalOpen(true);
    }, 350);
    const doneTimer = setTimeout(() => {
      setPortalDone(true);
    }, 1400);
    return () => {
      clearTimeout(timer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-noir-950"
    >
      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-champagne/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-noir-700/20 rounded-full blur-[120px]" />
      </div>

      {/* Interactive 3D WebGL Canvas Engine (Obsidian Torus Knot + Neural Stardust) */}
      <HeroThreeCanvas className="z-0 opacity-75 hover:opacity-100 transition-opacity duration-700" />

      {/* Vignette Gradient Mask to guarantee typography contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-noir-950/40 via-transparent to-noir-950 z-0" />

      {/* Cinematic Frame Border Guidelines (16:9 Letterbox Vibe) */}
      <div className="absolute inset-x-8 top-24 bottom-12 border border-noir-700/30 rounded-2xl pointer-events-none hidden md:block z-10" />

      {/* PORTAL SHUTTERS (Superdesign #1: Two panels that part outward) */}
      {!portalDone && (
        <div
          className={`absolute inset-0 z-30 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            portalOpen ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-noir-950 border-b border-noir-700/50 flex items-end justify-center pb-6">
            <span className="font-mono text-xs text-champagne/60 tracking-[0.3em] uppercase">
              {t.hero.portalEntering}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-noir-950 border-t border-noir-700/50 flex items-start justify-center pt-6">
            <span className="font-mono text-xs text-bone-dim tracking-[0.3em] uppercase">
              {isRTL ? "محمد حلمي" : "Mohamed Helmy"}
            </span>
          </div>
        </div>
      )}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-850/80 backdrop-blur-md border border-noir-700/80 mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-bone-muted">
            {t.hero.badge}
          </span>
          <span className="text-noir-600">•</span>
          <span className="text-[11px] font-mono text-champagne">{t.hero.location}</span>
        </div>

        {/* Cinematic Monolithic Headline */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-bone mb-6 leading-[1.05]">
          {t.hero.firstName}{" "}
          <span className="italic font-normal text-champagne">{t.hero.lastName}</span>
        </h1>

        {/* Role & Core Value Proposition */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-champagne/90 mb-4 font-semibold">
            {t.hero.role}
          </p>
          <p className="text-base sm:text-lg text-bone-muted leading-relaxed font-light">
            {t.hero.description}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-champagne/20"
          >
            <Compass className="w-4 h-4 text-noir-950" />
            <span>{t.hero.exploreBtn}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-noir-850/90 hover:bg-noir-800 border border-noir-700 hover:border-champagne/50 text-bone hover:text-champagne font-mono font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all backdrop-blur-md"
          >
            <MessageSquare className="w-4 h-4 text-champagne" />
            <span>{t.hero.bookBtn}</span>
          </button>
        </div>

        {/* Signature Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-noir-700/60 w-full max-w-4xl text-start">
          <div className="p-4 rounded-xl bg-noir-850/60 backdrop-blur-md border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              {isRTL ? "المنصات الكبرى" : "Architecture"}
            </span>
            <span className="block text-sm font-bold text-bone">
              {t.hero.metrics.flagships.value} {t.hero.metrics.flagships.label}
            </span>
            <span className="block text-[11px] text-bone-dim font-mono">
              {isRTL ? "مشاريع كاملة منشورة" : "Ultra-Fast & Stable"}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-noir-850/60 backdrop-blur-md border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              {isRTL ? "الفيزياء التفاعلية" : "Interactive"}
            </span>
            <span className="block text-sm font-bold text-bone">Three.js & WebGL</span>
            <span className="block text-[11px] text-bone-dim font-mono">
              {t.hero.metrics.physics.label}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-noir-850/60 backdrop-blur-md border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              {isRTL ? "التجارة الفاخرة" : "Commerce"}
            </span>
            <span className="block text-sm font-bold text-bone">
              {isRTL ? "متاجر هندسة التحويل CRO" : "Luxury CRO Stores"}
            </span>
            <span className="block text-[11px] text-bone-dim font-mono">
              {isRTL ? "مخصصة وبدون قوالب" : "Headless & Custom"}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-noir-850/60 backdrop-blur-md border border-noir-700/40">
            <span className="block text-[11px] font-mono text-champagne font-semibold tracking-wider uppercase mb-1">
              {isRTL ? "الأتمتة والذكاء" : "Automation"}
            </span>
            <span className="block text-sm font-bold text-bone">
              {isRTL ? "خط إنتاج الفيديو 9:16" : "AI Video Pipelines"}
            </span>
            <span className="block text-[11px] text-bone-dim font-mono">
              {t.hero.metrics.videoAds.label}
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#work"
          className="mt-12 text-bone-dim hover:text-champagne transition-colors flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll to projects"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">
            {isRTL ? "تمرير لأسفل" : "Scroll"}
          </span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
