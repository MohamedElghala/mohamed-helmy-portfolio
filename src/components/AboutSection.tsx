"use client";

import React from "react";
import { Sparkles, Code2, Cpu, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();
  const ab = t.aboutSection;

  return (
    <section
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-24 relative bg-noir-900 border-t border-noir-700/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Philosophy & Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-850 border border-noir-700 text-xs font-mono text-champagne uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>{ab.sectionBadge}</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-bone tracking-tight mb-6">
              {ab.heading}
            </h2>

            <div className="space-y-4 text-bone-muted text-sm sm:text-base leading-relaxed font-light">
              <p>{ab.p1}</p>
              <p>{ab.p2}</p>
            </div>

            {/* 3 Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-noir-700/60 mt-8">
              <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/60">
                <Code2 className="w-5 h-5 text-champagne mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-bone mb-1">
                  {ab.tenets.zeroBloat.title}
                </h4>
                <p className="text-[11px] text-bone-dim leading-normal font-mono">
                  {ab.tenets.zeroBloat.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/60">
                <Cpu className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-bone mb-1">
                  {ab.tenets.tactilePhysics.title}
                </h4>
                <p className="text-[11px] text-bone-dim leading-normal font-mono">
                  {ab.tenets.tactilePhysics.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/60">
                <Rocket className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-bone mb-1">
                  {ab.tenets.conversionFirst.title}
                </h4>
                <p className="text-[11px] text-bone-dim leading-normal font-mono">
                  {ab.tenets.conversionFirst.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural Monogram & Technical Profile */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl bg-noir-850 border border-champagne/30 p-8 shadow-2xl text-center overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-champagne/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-noir-900 border border-champagne/40 flex items-center justify-center shadow-inner">
                <span className="font-serif font-bold text-4xl text-champagne tracking-wider">
                  MH
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-bone mb-1">
                {ab.card.title}
              </h3>
              <p className="text-xs font-mono text-champagne uppercase tracking-widest mb-6">
                {ab.card.subtitle}
              </p>

              <div className="space-y-3 text-xs font-mono text-bone-muted border-t border-noir-700/60 pt-6 text-start">
                <div className="flex justify-between py-1 border-b border-noir-800">
                  <span className="text-bone-dim">{ab.card.baseLocationLabel}</span>
                  <span className="text-bone font-medium">{ab.card.baseLocationVal}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-noir-800">
                  <span className="text-bone-dim">{ab.card.frameworkLabel}</span>
                  <span className="text-bone font-medium">{ab.card.frameworkVal}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-noir-800">
                  <span className="text-bone-dim">{ab.card.directContactLabel}</span>
                  <a
                    href="https://wa.me/201090641737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-champagne hover:underline"
                  >
                    +20 1090641737
                  </a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-bone-dim">{ab.card.inquiriesLabel}</span>
                  <span className="text-bone font-medium">mohamedalghala@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
