"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  Mail,
  Phone,
  Check,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WhatsAppDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const SERVICE_OPTIONS_EN = [
  "UI/UX & Interactive Design",
  "Full-Stack Web Engineering",
  "Luxury E-Commerce & CRO",
  "Brand Identity & Ad Creatives",
  "Cinematic 9:16 Video Ads",
  "AI Systems & Automation",
];

const SERVICE_OPTIONS_AR = [
  "تصميم واجهات وتجارب المستخدم",
  "هندسة وتطوير الويب المتكامل",
  "متاجر التجارة الإلكترونية الفاخرة (CRO)",
  "الهوية البصرية وتصاميم الإعلانات",
  "الفيديو الإعلاني السينمائي 9:16",
  "أنظمة الذكاء الاصطناعي والأتمتة",
];

export default function WhatsAppDrawerModal({
  isOpen,
  onClose,
  preSelectedService,
}: WhatsAppDrawerModalProps) {
  const { t, isRTL } = useLanguage();
  const dr = t.drawer;
  const serviceOptions = isRTL ? SERVICE_OPTIONS_AR : SERVICE_OPTIONS_EN;

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>(
    isRTL ? "خلال شهر (الجدول القياسي)" : "Standard (Within 1 month)"
  );
  const [clientName, setClientName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [targetBlueprint, setTargetBlueprint] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const timelineOptions = isRTL
    ? [
        "فوري (خلال 1-2 أسبوع)",
        "خلال شهر (الجدول القياسي)",
        "مرن / رؤية طويلة الأجل",
      ]
    : [
        "Immediate (Within 1-2 weeks)",
        "Standard (Within 1 month)",
        "Flexible / Long-Term Vision",
      ];

  useEffect(() => {
    if (preSelectedService) {
      if (
        SERVICE_OPTIONS_EN.includes(preSelectedService) ||
        SERVICE_OPTIONS_AR.includes(preSelectedService)
      ) {
        if (!selectedServices.includes(preSelectedService)) {
          setSelectedServices([preSelectedService]);
        }
        setTargetBlueprint(null);
      } else {
        // Project or blueprint inquiry
        setTargetBlueprint(preSelectedService);
        const blueprintLabel = isRTL ? "استعراض آلية وهندسة النظام" : "Architecture Blueprint";
        if (!selectedServices.includes(blueprintLabel)) {
          setSelectedServices([blueprintLabel]);
        }
      }
    } else {
      setTargetBlueprint(null);
    }
  }, [preSelectedService, isOpen, isRTL]);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const generateWhatsAppMessage = () => {
    const servicesList =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : isRTL
        ? "استشارة هندسة وبرمجة المنصات الرقمية"
        : "Digital Architecture Consultation";
    const namePart = clientName ? (isRTL ? `الاسم: ${clientName}\n` : `Name: ${clientName}\n`) : "";
    const blueprintPart = targetBlueprint
      ? isRTL
        ? `المشروع المستهدف: ${targetBlueprint}\n`
        : `Project Blueprint: ${targetBlueprint}\n`
      : "";
    const briefPart = projectBrief
      ? isRTL
        ? `نبذة عن نطاق المشروع: ${projectBrief}\n`
        : `Project Scope / Goals: ${projectBrief}\n`
      : "";

    let greeting = isRTL ? "مرحباً مهندس محمد،" : "Hello Mohamed,";
    if (targetBlueprint) {
      greeting = isRTL
        ? `مرحباً مهندس محمد،\n\nأود الاستفسار ومناقشة تفاصيل وهندسة مشروع *${targetBlueprint}*.`
        : `Hello Mohamed,\n\nI am inquiring about the blueprint and architecture for *${targetBlueprint}*.`;
    } else {
      greeting = isRTL
        ? "مرحباً مهندس محمد،\n\nأود مناقشة مشروع جديد معك."
        : "Hello Mohamed,\n\nI would like to discuss a project with you.";
    }

    const text = `${greeting}\n\n${namePart}${blueprintPart}${
      isRTL ? "الخدمات المطلوبة:" : "Interested Services:"
    } ${servicesList}\n${
      isRTL ? "الجدول الزمني المفضل:" : "Timeline:"
    } ${timeline}\n${briefPart}\n${
      isRTL ? "يرجى إفادتي بموعد متاح لمناقشة التفاصيل." : "Please let me know your availability for a discussion."
    }`;

    return encodeURIComponent(text);
  };

  const handleLaunchWhatsApp = () => {
    const url = `https://wa.me/201090641737?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  const handleLaunchEmail = () => {
    const subjectTitle =
      targetBlueprint ||
      (selectedServices.length > 0
        ? selectedServices.join(", ")
        : isRTL
        ? "مشروع جديد"
        : "General Project");
    const subject = encodeURIComponent(
      `Project Inquiry: ${subjectTitle} - Mohamed Helmy Portfolio`
    );
    const body = encodeURIComponent(
      `Hello Mohamed,\n\nName: ${clientName || "Client"}\n${
        targetBlueprint ? `Target Project: ${targetBlueprint}\n` : ""
      }Services: ${selectedServices.join(", ") || "General"}\nTimeline: ${timeline}\n\nProject Scope:\n${projectBrief}\n`
    );
    window.location.href = `mailto:mohamedalghala@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+201090641737");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`fixed inset-0 z-50 flex ${
        isRTL ? "justify-start" : "justify-end"
      } bg-noir-950/80 backdrop-blur-md transition-opacity duration-300`}
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Slide-Over Sheet / Drawer */}
      <div
        className={`relative z-10 w-full max-w-xl h-full bg-noir-900/95 backdrop-blur-2xl ${
          isRTL ? "border-r" : "border-l"
        } border-champagne/30 shadow-[-20px_0_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto`}
      >
        <div>
          {/* Top Bar: Close & Direct Action */}
          <div className="flex items-center justify-between pb-6 border-b border-noir-700/60 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs font-mono">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{dr.title}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-noir-800 text-bone-muted hover:text-bone hover:bg-noir-700 transition-colors border border-white/5"
              aria-label={dr.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dynamic Target Project Blueprint Banner */}
          {targetBlueprint && (
            <div className="mb-6 p-4 rounded-xl bg-champagne/10 border border-champagne/40 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Code2 className="w-4 h-4 text-champagne animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-champagne font-bold">
                  {isRTL ? "المشروع المستهدف" : "Target Project Blueprint"}
                </span>
              </div>
              <p className="text-sm sm:text-base font-serif font-bold text-bone">
                {targetBlueprint}
              </p>
              <p className="text-xs text-bone-dim mt-1">
                {isRTL
                  ? "سيتم تضمين استفسار هذا المشروع كأولوية في رسالة الواتساب."
                  : "Your message will include a priority architecture inquiry for this deployment."}
              </p>
            </div>
          )}

          {/* Drawer Title & Description */}
          <div className="mb-8">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-bone">
              {dr.title}
            </h3>
            <p className="text-xs sm:text-sm text-bone-muted mt-2 font-light leading-relaxed">
              {dr.subtitle}
            </p>
          </div>

          {/* Service Selector Pills */}
          <div className="mb-6">
            <label className="block text-xs font-mono uppercase tracking-wider text-bone-muted mb-2.5">
              {dr.serviceLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              {targetBlueprint && (
                <button
                  type="button"
                  onClick={() =>
                    toggleService(
                      isRTL ? "استعراض آلية وهندسة النظام" : "Architecture Blueprint"
                    )
                  }
                  className={`px-3 py-2 rounded-lg text-xs font-mono transition-all border ${
                    selectedServices.includes(
                      isRTL ? "استعراض آلية وهندسة النظام" : "Architecture Blueprint"
                    )
                      ? "bg-champagne text-noir-950 border-champagne font-bold shadow-md"
                      : "bg-noir-800 text-bone-muted border-noir-700 hover:border-champagne/50"
                  }`}
                >
                  {isRTL ? "استعراض آلية وهندسة النظام" : "Architecture Blueprint"}
                </button>
              )}

              {serviceOptions.map((srv) => {
                const isSelected = selectedServices.includes(srv);
                return (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => toggleService(srv)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono transition-all border ${
                      isSelected
                        ? "bg-champagne text-noir-950 border-champagne font-bold shadow-md"
                        : "bg-noir-800 text-bone-muted border-noir-700 hover:border-champagne/50"
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Selector */}
          <div className="mb-6">
            <label className="block text-xs font-mono uppercase tracking-wider text-bone-muted mb-2.5">
              {isRTL ? "الجدول الزمني المفضل للتنفيذ" : "Target Deployment Timeline"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {timelineOptions.map((timeOpt) => {
                const isSelected = timeline === timeOpt;
                return (
                  <button
                    key={timeOpt}
                    type="button"
                    onClick={() => setTimeline(timeOpt)}
                    className={`p-3 rounded-lg text-start text-xs font-mono transition-all border ${
                      isSelected
                        ? "bg-noir-700 text-champagne border-champagne/80 font-bold"
                        : "bg-noir-800 text-bone-dim border-noir-700 hover:text-bone"
                    }`}
                  >
                    {timeOpt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-bone-muted mb-1.5">
                {isRTL ? "الاسم أو علامتك التجارية (اختياري)" : "Your Name / Brand (Optional)"}
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={isRTL ? "مثال: مروان القاضي أو استوديو براند" : "e.g. Alex Vance or Brand Studio"}
                className="w-full px-4 py-3 rounded-xl bg-noir-950/80 border border-noir-700 text-bone text-sm focus:outline-none focus:border-champagne transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-bone-muted mb-1.5">
                {dr.notesLabel}
              </label>
              <textarea
                rows={3}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder={dr.notesPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-noir-950/80 border border-noir-700 text-bone text-sm focus:outline-none focus:border-champagne transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-6 border-t border-noir-700/60 flex flex-col gap-3">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full py-3.5 px-6 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-champagne/20"
          >
            <Send className="w-4 h-4 text-noir-950" />
            <span>{dr.sendBtn}</span>
            <ArrowIcon className="w-4 h-4 text-noir-950" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLaunchEmail}
              className="flex-1 py-3 px-4 rounded-xl bg-noir-800 hover:bg-noir-700 border border-noir-700 text-bone font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-champagne" />
              <span>{isRTL ? "إرسال بريد إلكتروني" : "Send Email"}</span>
            </button>

            <button
              onClick={handleCopyPhone}
              className="py-3 px-4 rounded-xl bg-noir-800 hover:bg-noir-700 border border-noir-700 text-bone-muted hover:text-bone font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
              title="Copy Direct Phone Number"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Phone className="w-4 h-4 text-bone-dim" />
              )}
              <span>{copied ? (isRTL ? "تم النسخ!" : "Copied!") : "+20 1090641737"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
