"use client";

import React, { useRef, useState } from "react";
import { Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Box,
  Globe,
  ShieldCheck,
  Video,
  ArrowUpRight,
  Cpu,
  FileCode,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface BentoGridProps {
  projects: Project[];
  onOpenConsultation: (projectName?: string) => void;
  onOpenBlueprint?: () => void;
}

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

function BorderBeam({
  className,
  size = 280,
  duration = 14,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#C8A96A",
  colorTo = "#38BDF8",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(1rem))]",
        className
      )}
    />
  );
}

interface TiltCardContainerProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCardContainer({ children, className = "" }: TiltCardContainerProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 28;
    const y = (e.clientY - rect.top - rect.height / 2) / 28;
    setRotate({ x: -y, y: x });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: isHovered ? "transform 0.12s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
}

export default function BentoGrid({
  projects,
  onOpenConsultation,
  onOpenBlueprint,
}: BentoGridProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { t, isRTL } = useLanguage();

  const getIconForCategory = (cat: string) => {
    if (cat.includes("Luxury") || cat.includes("Fashion") || cat.includes("فاخرة") || cat.includes("أزياء"))
      return <Sparkles className="w-4 h-4 text-champagne" />;
    if (cat.includes("Automotive") || cat.includes("3D") || cat.includes("سيارات"))
      return <Box className="w-4 h-4 text-orange-400" />;
    if (cat.includes("Travel") || cat.includes("سياحة"))
      return <Globe className="w-4 h-4 text-teal-400" />;
    if (cat.includes("Digital") || cat.includes("رقمية"))
      return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    if (cat.includes("AI") || cat.includes("ذكاء") || cat.includes("أتمتة"))
      return <Cpu className="w-4 h-4 text-cyan-400" />;
    return <Layers className="w-4 h-4 text-champagne" />;
  };

  // Grid spans for balanced desktop layout
  const getGridSpan = (projectId: string, index: number) => {
    switch (projectId) {
      case "brasil-chic":
        return "col-span-12 lg:col-span-7";
      case "aura-glow-up":
        return "col-span-12 lg:col-span-5";
      case "solvo-auto":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      case "tourvanto":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      case "raseen":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      case "ai-content-engine":
        return "col-span-12";
      default:
        return index === 0 ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-6";
    }
  };

  return (
    <section
      id="work"
      dir={isRTL ? "rtl" : "ltr"}
      className="py-28 relative bg-noir-950 border-t border-noir-700/60 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-850/90 border border-noir-700 text-xs font-mono text-champagne uppercase tracking-widest mb-3 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>{t.bento.sectionBadge}</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-bone tracking-tight">
              {t.bento.heading}
            </h2>
            <p className="text-bone-muted text-sm sm:text-base mt-2 max-w-2xl font-light">
              {t.bento.subheading}
            </p>
          </div>

          <div className="text-start md:text-end hidden md:block">
            <span className="text-xs font-mono text-bone-dim uppercase tracking-widest block">
              {t.bento.curatedIndex}
            </span>
            <span className="text-sm font-mono text-champagne font-bold">
              {t.bento.deploymentCount}
            </span>
          </div>
        </div>

        {/* 6 Major Projects Bento Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const gridSpan = getGridSpan(project.id, index);
            const isBrasilChic = project.id === "brasil-chic";
            const isCortex = project.id === "ai-content-engine";

            // Localized project data lookup
            const loc = t.projects[project.id];
            const title = loc?.title || project.title;
            const tagline = loc?.tagline || project.tagline;
            const category = loc?.category || project.category;
            const description = loc?.description || project.description;
            const metrics = loc?.metrics || project.metrics;

            return (
              <div key={project.id} className={gridSpan}>
                <TiltCardContainer className="h-full">
                  <div
                    className={cn(
                      "group relative h-full rounded-2xl bg-noir-900/80 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.8)]",
                      isBrasilChic || isCortex ? "p-6 sm:p-10" : "p-6 sm:p-8"
                    )}
                  >
                    {/* Rotating Border Beam Neon Laser Effect */}
                    <BorderBeam
                      colorFrom={project.brandColor || "#C8A96A"}
                      colorTo={project.brandColor ? `${project.brandColor}66` : "#C8A96A66"}
                      duration={isBrasilChic || isCortex ? 11 : 15}
                      borderWidth={1.5}
                    />

                    {/* Ambient Card Backlight matching Brand Color */}
                    <div
                      className="absolute -right-24 -top-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity duration-700"
                      style={{ backgroundColor: project.brandColor || "#C8A96A" }}
                    />

                    {/* Floating 3D Interior Layer */}
                    <div style={{ transform: "translateZ(20px)" }} className="[transform-style:preserve-3d]">
                      {/* Top Bar: Category & Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-noir-800/80 border border-white/[0.06] backdrop-blur-sm">
                            {getIconForCategory(category)}
                          </div>
                          <span className="text-xs font-mono text-bone-muted uppercase tracking-wider">
                            {category}
                          </span>
                        </div>

                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full border backdrop-blur-sm ${
                            project.status === "coming-soon"
                              ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                              : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 font-semibold"
                          }`}
                        >
                          {project.status === "coming-soon" ? t.bento.previewBadge : t.bento.liveBadge}
                        </span>
                      </div>

                      {/* Visual Cover Frame with Studio Bezel & Ambient Lighting */}
                      {project.coverImage && (
                        <div
                          className={cn(
                            "relative w-full overflow-hidden rounded-xl border border-white/10 group-hover:border-champagne/40 transition-colors duration-500 mb-6 bg-noir-950 shadow-[0_10px_30px_rgba(0,0,0,0.6)]",
                            isBrasilChic
                              ? "h-64 sm:h-80"
                              : isCortex
                              ? "h-64 sm:h-80"
                              : "h-52 sm:h-64"
                          )}
                        >
                          <img
                            src={`${basePath}${project.coverImage}`}
                            alt={title}
                            className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          {/* Rich Graduated Film Shade (preserves image vibrancy) */}
                          <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/25 to-transparent opacity-80 group-hover:opacity-45 transition-opacity duration-500" />

                          {/* Brand Label Floating Overlay */}
                          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-none">
                            <span
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-bone backdrop-blur-md border border-white/15 shadow-sm"
                              style={{ backgroundColor: `${project.brandColor || "#C8A96A"}40` }}
                            >
                              {title}
                            </span>
                            <span className="text-[10px] font-mono text-bone/90 backdrop-blur-md px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10">
                              {project.status === "coming-soon"
                                ? t.bento.previewBadge
                                : t.bento.liveBadge}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Title & Tagline */}
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-bone group-hover:text-champagne transition-colors mb-2">
                        {title}
                      </h3>
                      <p className="text-xs font-mono text-champagne/90 tracking-wide uppercase mb-4">
                        {tagline}
                      </p>

                      <p className="text-sm text-bone-muted leading-relaxed font-light mb-6">
                        {description}
                      </p>

                      {/* Interactive UI Mockup Snapshot for Brasil Chic */}
                      {isBrasilChic && (
                        <div className="mb-6 p-5 rounded-xl bg-noir-950/90 border border-champagne/20 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-3 text-xs font-mono">
                            <span className="text-bone-muted font-bold tracking-wider">
                              {t.bento.brasilMockup.tag}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                              {t.bento.brasilMockup.discount}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-champagne">
                              {t.bento.brasilMockup.price}
                            </span>
                            <span className="text-xs text-bone-dim font-mono">
                              {t.bento.brasilMockup.installments}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-noir-900 border border-noir-700 text-[10px] font-mono text-bone-muted overflow-hidden whitespace-nowrap">
                            <span className="text-champagne font-bold">
                              {t.bento.brasilMockup.tickerLabel}
                            </span>{" "}
                            {t.bento.brasilMockup.tickerText}
                          </div>
                        </div>
                      )}

                      {/* Executive Enterprise Architecture Snapshot for Cortex AI (No Tool Leaks) */}
                      {isCortex && (
                        <div className="mb-6 p-5 rounded-xl bg-noir-950/90 border border-cyan-500/30 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                              <Video className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="text-start">
                              <span className="text-xs font-mono text-bone font-bold block">
                                {t.bento.cortexMockup.title}
                              </span>
                              <span className="text-[11px] font-mono text-bone-dim">
                                {t.bento.cortexMockup.subtitle}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-noir-800 text-cyan-300 border border-cyan-500/20">
                              {t.bento.cortexMockup.badge1}
                            </span>
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-noir-800 text-emerald-300 border border-emerald-500/20">
                              {t.bento.cortexMockup.badge2}
                            </span>
                            {onOpenBlueprint && (
                              <button
                                onClick={onOpenBlueprint}
                                className="text-[10px] font-mono px-3 py-1 rounded bg-champagne hover:bg-champagne-light text-noir-950 font-bold transition-colors shadow-sm"
                              >
                                {t.bento.cortexMockup.viewBlueprintBtn}
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Highlights / Metrics Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-noir-800/80 border border-white/[0.06] text-[11px] font-mono text-bone-dim"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Bar: Action Links & Tech Stack */}
                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 [transform-style:preserve-3d]"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-bone-dim">
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <span key={i}>
                            {tech}
                            {i < Math.min(3, project.techStack.length - 1) ? " •" : ""}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2.5">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-noir-800/80 hover:bg-noir-700 text-bone-muted hover:text-bone border border-white/[0.06] transition-colors"
                            aria-label="View Source on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {isCortex && onOpenBlueprint && (
                          <button
                            onClick={onOpenBlueprint}
                            className="px-3.5 py-2 rounded-lg bg-noir-800 hover:bg-noir-750 text-cyan-300 border border-cyan-500/40 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                          >
                            <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{t.bento.blueprintBtn}</span>
                          </button>
                        )}

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:shadow-champagne/20"
                          >
                            <span>{t.bento.launchBtn}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <button
                            onClick={() => onOpenConsultation(title)}
                            className="px-4 py-2 rounded-lg bg-noir-800/90 hover:bg-noir-700 text-bone-muted hover:text-champagne font-mono text-xs uppercase tracking-wider transition-colors border border-champagne/30 flex items-center gap-1.5 shadow-sm"
                          >
                            <span>{t.bento.inquireBtn}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-champagne" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCardContainer>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
