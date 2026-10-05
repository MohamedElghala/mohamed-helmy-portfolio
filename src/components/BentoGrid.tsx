"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { ExternalLink, Github, Sparkles, Layers, Box, Globe, ShieldCheck, Video } from "lucide-react";

interface BentoGridProps {
  projects: Project[];
  onOpenConsultation: (projectName?: string) => void;
}

export default function BentoGrid({ projects, onOpenConsultation }: BentoGridProps) {
  const getIconForCategory = (cat: string) => {
    if (cat.includes("Luxury") || cat.includes("Fashion")) return <Sparkles className="w-4 h-4 text-champagne" />;
    if (cat.includes("Automotive") || cat.includes("3D")) return <Box className="w-4 h-4 text-cyan-400" />;
    if (cat.includes("Travel")) return <Globe className="w-4 h-4 text-emerald-400" />;
    if (cat.includes("Digital")) return <ShieldCheck className="w-4 h-4 text-amber-400" />;
    if (cat.includes("AI")) return <Video className="w-4 h-4 text-purple-400" />;
    return <Layers className="w-4 h-4 text-champagne" />;
  };

  return (
    <section id="work" className="py-24 relative bg-noir-900 border-t border-noir-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-800 border border-noir-700 text-xs font-mono text-champagne uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-bone tracking-tight">
              Featured Flagships & Engines
            </h2>
            <p className="text-bone-muted text-sm sm:text-base mt-2 max-w-2xl font-light">
              Architected from concept to live production. Verified deployments across high-fashion, automotive WebGL, and autonomous marketing pipelines.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-bone-dim uppercase tracking-widest block">
              Curated Index
            </span>
            <span className="text-sm font-mono text-champagne font-bold">
              06 Production Artifacts
            </span>
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {projects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-noir-850 border border-noir-700/70 hover:border-champagne/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl ${
                  isFeatured
                    ? "col-span-12 p-6 sm:p-10 bg-gradient-to-br from-noir-850 via-noir-900 to-noir-850"
                    : project.id === "ai-content-engine"
                    ? "col-span-12 p-6 sm:p-8"
                    : "col-span-12 lg:col-span-6 p-6 sm:p-8"
                }`}
              >
                {/* Ambient Card Backlight */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-champagne/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                <div>
                  {/* Top Bar: Category & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-noir-800 border border-noir-700">
                        {getIconForCategory(project.category)}
                      </div>
                      <span className="text-xs font-mono text-bone-muted uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                        project.status === "coming-soon"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-bone group-hover:text-champagne transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-champagne/90 tracking-wide uppercase mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-bone-muted leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Interactive UI Mockup Snapshot (Special for Brasil Chic) */}
                  {project.id === "brasil-chic" && (
                    <div className="mb-6 p-5 rounded-xl bg-noir-950/80 border border-champagne/20">
                      <div className="flex items-center justify-between mb-3 text-xs font-mono">
                        <span className="text-bone-muted font-bold tracking-wider">
                          RESORT 2026 • 100% LINHO PURO
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-bold">
                          5% OFF no Pix
                        </span>
                      </div>
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-champagne">
                          R$ 219,90
                        </span>
                        <span className="text-xs text-bone-dim font-mono">
                          ou 12x de R$ 18,32 sem juros
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-noir-900 border border-noir-700 text-[10px] font-mono text-bone-muted overflow-hidden whitespace-nowrap">
                        <span className="text-champagne font-bold">MARQUEE TICKER:</span>{" "}
                        COLEÇÃO CARIOCA 2026 • LINHO PURO BRASILEIRO • ALGODÃO PIMA • ENVIO EXPRESSO SEDEX
                      </div>
                    </div>
                  )}

                  {/* Highlights / Metrics Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-noir-800 border border-noir-700 text-[11px] font-mono text-bone-dim"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Action Links & Tech Stack */}
                <div className="pt-6 border-t border-noir-700/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-bone-dim">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i}>
                        {tech}
                        {i < 2 ? " •" : ""}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-noir-800 hover:bg-noir-700 text-bone-muted hover:text-bone border border-noir-700 transition-colors"
                        aria-label="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                      >
                        <span>Launch Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenConsultation(project.title)}
                        className="px-4 py-2 rounded-lg bg-noir-800 hover:bg-noir-700 text-bone-muted hover:text-champagne font-mono text-xs uppercase tracking-wider transition-colors border border-noir-700"
                      >
                        Inquire Blueprint
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
