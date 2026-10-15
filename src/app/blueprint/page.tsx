"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppDrawerModal from "@/components/WhatsAppDrawerModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ShieldAlert,
  Cpu,
  Video,
  Volume2,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function BlueprintPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const { t, isRTL } = useLanguage();
  const bp = t.blueprint;

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setConsultationOpen(true);
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-noir-950 text-bone selection:bg-champagne selection:text-noir-950 relative pt-28 pb-16"
    >
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Strip */}
        <div className="text-center sm:text-start space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-850 border border-champagne/40 text-xs font-mono text-champagne uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-champagne" />
            <span>{bp.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-bone tracking-tight">
            {bp.title}
          </h1>
          <p className="text-sm sm:text-base text-bone-muted max-w-3xl leading-relaxed font-light">
            {bp.subtitle}
          </p>
        </div>

        {/* Executive Confidentiality Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-noir-900 via-noir-850 to-noir-900 border border-cyan-500/30 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm font-mono text-bone-muted leading-relaxed">
            <span className="text-cyan-300 font-bold block mb-1">
              {isRTL ? "معمارية تنفيذية مخصصة للمؤسسات" : "Enterprise Confidentiality Framework"}
            </span>
            {bp.confidentialNotice}
          </div>
        </div>

        {/* Interactive Visual Flow Diagram */}
        <div className="p-6 sm:p-8 rounded-2xl bg-noir-900/90 border border-white/[0.08] relative overflow-hidden">
          <div className="text-xs font-mono uppercase tracking-widest text-champagne mb-6 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-champagne" />
            <span>
              {isRTL
                ? "مخطط التدفق الهيكلي للنظام المؤتمت"
                : "End-to-End Autonomous Pipeline Architecture"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative z-10 text-center">
            <div className="p-4 rounded-xl bg-noir-850 border border-noir-700/80 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-bone-dim mb-1">01 / STAGE</span>
              <span className="text-xs font-mono font-bold text-bone">
                {isRTL ? "استيعاب أصول المنتج" : "Asset Ingestion"}
              </span>
              <span className="text-[10px] font-mono text-bone-muted mt-1">
                {isRTL ? "الصور والبيانات" : "Raw 4K & Brand Kit"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-noir-850 border border-cyan-500/30 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-cyan-400 mb-1">02 / STAGE</span>
              <span className="text-xs font-mono font-bold text-bone">
                {isRTL ? "السرد المعرفي" : "Cognitive Hook"}
              </span>
              <span className="text-[10px] font-mono text-bone-muted mt-1">
                {isRTL ? "كسر التمرير 2.5s" : "Scroll Interruption"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-noir-850 border border-champagne/40 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-champagne mb-1">03 / STAGE</span>
              <span className="text-xs font-mono font-bold text-bone">
                {isRTL ? "المحاكاة الحركية" : "Motion Synthesis"}
              </span>
              <span className="text-[10px] font-mono text-bone-muted mt-1">
                {isRTL ? "فيزياء الضوء الحقيقي" : "Specular Lighting"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-noir-850 border border-emerald-500/30 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-emerald-400 mb-1">04 / STAGE</span>
              <span className="text-xs font-mono font-bold text-bone">
                {isRTL ? "الهندسة الصوتية" : "Acoustic Cadence"}
              </span>
              <span className="text-[10px] font-mono text-bone-muted mt-1">
                {isRTL ? "نبرة بشرية + Foley" : "Human Voice + SFX"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-noir-850 border border-purple-500/30 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-purple-400 mb-1">05 / STAGE</span>
              <span className="text-xs font-mono font-bold text-bone">
                {isRTL ? "تصدير الماستر 9:16" : "9:16 Conversion"}
              </span>
              <span className="text-[10px] font-mono text-bone-muted mt-1">
                {isRTL ? "عناوين Cairo جاهزة" : "Zero Human Latency"}
              </span>
            </div>
          </div>
        </div>

        {/* The 4 Architectural Pillars */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold block mb-1">
              {bp.pillarsTitle}
            </span>
            <p className="text-xs sm:text-sm font-light text-bone-muted">
              {bp.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-noir-900 border border-noir-700/80 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {bp.pillar1.num}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-bone">
                    {bp.pillar1.title}
                  </h3>
                </div>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-xs font-mono text-champagne/90 mb-4 uppercase tracking-wider">
                {bp.pillar1.tagline}
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-bone-muted leading-relaxed">
                {bp.pillar1.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-noir-900 border border-noir-700/80 hover:border-champagne/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-bold text-champagne px-2.5 py-1 rounded bg-champagne/10 border border-champagne/20">
                    {bp.pillar2.num}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-bone">
                    {bp.pillar2.title}
                  </h3>
                </div>
                <Video className="w-4 h-4 text-champagne" />
              </div>
              <p className="text-xs font-mono text-champagne/90 mb-4 uppercase tracking-wider">
                {bp.pillar2.tagline}
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-bone-muted leading-relaxed">
                {bp.pillar2.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-noir-900 border border-noir-700/80 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {bp.pillar3.num}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-bone">
                    {bp.pillar3.title}
                  </h3>
                </div>
                <Volume2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs font-mono text-champagne/90 mb-4 uppercase tracking-wider">
                {bp.pillar3.tagline}
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-bone-muted leading-relaxed">
                {bp.pillar3.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-noir-900 border border-noir-700/80 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-bold text-purple-400 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                    {bp.pillar4.num}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-bone">
                    {bp.pillar4.title}
                  </h3>
                </div>
                <Workflow className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-xs font-mono text-champagne/90 mb-4 uppercase tracking-wider">
                {bp.pillar4.tagline}
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-bone-muted leading-relaxed">
                {bp.pillar4.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Assurance Protocols */}
        <div className="p-6 sm:p-8 rounded-2xl bg-noir-900/60 border border-noir-700/80">
          <h4 className="font-serif font-bold text-lg text-bone mb-5">
            {bp.qualityTitle}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {bp.qualityPoints.map((qp, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-noir-850 border border-noir-750">
                <span className="font-mono text-xs font-bold text-champagne block mb-1.5">
                  {qp.title}
                </span>
                <p className="text-xs text-bone-muted leading-normal">
                  {qp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Performance Multipliers */}
        <div className="p-6 sm:p-8 rounded-2xl bg-noir-900 border border-champagne/25">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-champagne" />
            <h4 className="font-mono text-xs font-bold text-champagne uppercase tracking-widest">
              {bp.metricsTitle}
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {bp.metrics.map((m, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-noir-850 border border-noir-700/60">
                <span className="font-serif text-4xl font-bold text-champagne block mb-1">
                  {m.value}
                </span>
                <span className="text-xs font-mono font-semibold text-bone block mb-1">
                  {m.label}
                </span>
                <span className="text-[11px] font-mono text-bone-dim block">
                  {m.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Direct CTA Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-noir-900 via-noir-850 to-noir-900 border border-champagne/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-start">
            <h4 className="font-serif font-bold text-2xl text-bone mb-2">
              {bp.ctaTitle}
            </h4>
            <p className="text-xs sm:text-sm text-bone-muted max-w-xl font-light">
              {bp.ctaSub}
            </p>
          </div>

          <button
            onClick={() =>
              handleOpenConsultation(
                isRTL
                  ? "استشارة هندسة الذكاء الاصطناعي وخطوط إنتاج الفيديو المؤتمت"
                  : "AI Systems & Autonomous Video Pipeline Architecture"
              )
            }
            className="px-7 py-4 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-noir-950" />
            <span>{bp.ctaBtn}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      <WhatsAppDrawerModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        preSelectedService={selectedService}
      />
    </main>
  );
}
