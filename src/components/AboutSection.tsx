"use client";

import React from "react";
import { Sparkles, Code2, Cpu, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-noir-900 border-t border-noir-700/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Philosophy & Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-800 border border-noir-700 text-xs font-mono text-champagne uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>Engineering Philosophy</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-bone tracking-tight mb-6">
              Bridging High-Fashion Aesthetics with High-Performance Code
            </h2>

            <div className="space-y-4 text-bone-muted text-sm sm:text-base leading-relaxed font-light">
              <p>
                I operate at the intersection of creative direction and technical systems engineering. In an era where 90% of web projects rely on bloated generic templates, I craft bespoke digital flagships built on Next.js App Router, modern Three.js WebGL physics, and strategic conversion mechanics.
              </p>
              <p>
                Every project I architect—from international fashion storefronts to automotive 3D customizers—is designed to eliminate friction, maximize Average Order Value, and leave a permanent imprint on the user.
              </p>
            </div>

            {/* 3 Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-noir-700/60 mt-8">
              <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/60">
                <Code2 className="w-5 h-5 text-champagne mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-bone mb-1">
                  Zero Bloat
                </h4>
                <p className="text-[11px] text-bone-dim leading-normal font-mono">
                  Clean semantic code, minimal bundle sizes, and sub-second load times.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/60">
                <Cpu className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-bone mb-1">
                  Tactile Physics
                </h4>
                <p className="text-[11px] text-bone-dim leading-normal font-mono">
                  Smooth 60 FPS interactions, magnetic curves, and specular lighting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/60">
                <Rocket className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-bone mb-1">
                  Conversion First
                </h4>
                <p className="text-[11px] text-bone-dim leading-normal font-mono">
                  Every button, color swatch, and headline engineered to generate sales.
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

              <h3 className="font-serif font-bold text-2xl text-bone mb-1">Mohamed Helmy</h3>
              <p className="text-xs font-mono text-champagne uppercase tracking-widest mb-6">
                Creative Technologist & Architect
              </p>

              <div className="space-y-3 text-xs font-mono text-bone-muted border-t border-noir-700/60 pt-6 text-left">
                <div className="flex justify-between py-1 border-b border-noir-800">
                  <span className="text-bone-dim">Base Location</span>
                  <span className="text-bone font-medium">Cairo, Egypt (UTC+3)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-noir-800">
                  <span className="text-bone-dim">Primary Framework</span>
                  <span className="text-bone font-medium">Next.js 14 / TypeScript</span>
                </div>
                <div className="flex justify-between py-1 border-b border-noir-800">
                  <span className="text-bone-dim">Direct Contact</span>
                  <a href="https://wa.me/201090641737" target="_blank" rel="noopener noreferrer" className="text-champagne hover:underline">
                    +20 1090641737
                  </a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-bone-dim">Official Inquiries</span>
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
