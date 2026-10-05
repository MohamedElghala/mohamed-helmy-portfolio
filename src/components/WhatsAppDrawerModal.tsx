"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Mail, Phone, Check, MessageSquare } from "lucide-react";

interface WhatsAppDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const SERVICE_OPTIONS = [
  "UI/UX & Interactive Design",
  "Full-Stack Web Engineering",
  "Luxury E-Commerce & CRO",
  "Brand Identity & Ad Creatives",
  "Cinematic 9:16 Video Ads",
  "AI Systems & Automation",
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 1-2 weeks)",
  "Standard (Within 1 month)",
  "Flexible / Long-Term Vision",
];

export default function WhatsAppDrawerModal({
  isOpen,
  onClose,
  preSelectedService,
}: WhatsAppDrawerModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>("Standard (Within 1 month)");
  const [clientName, setClientName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preSelectedService && !selectedServices.includes(preSelectedService)) {
      setSelectedServices([preSelectedService]);
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const generateWhatsAppMessage = () => {
    const servicesList = selectedServices.length > 0 ? selectedServices.join(", ") : "Digital Consultation";
    const namePart = clientName ? `Name: ${clientName}\n` : "";
    const briefPart = projectBrief ? `Details: ${projectBrief}\n` : "";

    const text = `Hello Mohamed,\n\nI would like to discuss a project with you:\n${namePart}Services: ${servicesList}\nTimeline: ${timeline}\n${briefPart}\nPlease let me know your availability for a call.`;

    return encodeURIComponent(text);
  };

  const handleLaunchWhatsApp = () => {
    const url = `https://wa.me/201090641737?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  const handleLaunchEmail = () => {
    const servicesList = selectedServices.length > 0 ? selectedServices.join(", ") : "General Project";
    const subject = encodeURIComponent(`Project Inquiry: ${servicesList} - Mohamed Helmy Portfolio`);
    const body = encodeURIComponent(
      `Hello Mohamed,\n\nName: ${clientName || "Client"}\nInterested Services: ${servicesList}\nTimeline: ${timeline}\n\nProject Scope:\n${projectBrief}\n`
    );
    window.location.href = `mailto:mohamedalghala@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+201090641737");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-noir-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl bg-noir-850 border border-champagne/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-noir-800 text-bone-muted hover:text-bone hover:bg-noir-700 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs font-mono mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Client Consultation</span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-bone">
            Start a Direct Project Discussion
          </h3>
          <p className="text-xs sm:text-sm text-bone-muted mt-1 font-light">
            Select your required scope below. Your brief will be formatted into a direct message to Mohamed Helmy on WhatsApp.
          </p>
        </div>

        {/* Service Selector Pills */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-bone-muted mb-2.5">
            Select Required Services
          </label>
          <div className="flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((srv) => {
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
            Target Deployment Timeline
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TIMELINE_OPTIONS.map((timeOpt) => {
              const isSelected = timeline === timeOpt;
              return (
                <button
                  key={timeOpt}
                  type="button"
                  onClick={() => setTimeline(timeOpt)}
                  className={`p-3 rounded-lg text-left text-xs font-mono transition-all border ${
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
              Your Name / Brand (Optional)
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="e.g. Alex Vance or Brand Studio"
              className="w-full px-4 py-3 rounded-xl bg-noir-900 border border-noir-700 text-bone text-sm focus:outline-none focus:border-champagne transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-bone-muted mb-1.5">
              Project Brief / Goals (Optional)
            </label>
            <textarea
              rows={3}
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              placeholder="Briefly describe your vision, target audience, or reference websites..."
              className="w-full px-4 py-3 rounded-xl bg-noir-900 border border-noir-700 text-bone text-sm focus:outline-none focus:border-champagne transition-colors resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-noir-700/60">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl"
          >
            <Send className="w-4 h-4 text-noir-950" />
            <span>Launch WhatsApp Discussion</span>
          </button>

          <button
            onClick={handleLaunchEmail}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-noir-800 hover:bg-noir-700 border border-noir-700 text-bone font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <Mail className="w-4 h-4 text-champagne" />
            <span>Send Email</span>
          </button>

          <button
            onClick={handleCopyPhone}
            className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-noir-800 hover:bg-noir-700 border border-noir-700 text-bone-muted hover:text-bone font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            title="Copy Direct Phone"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4 text-bone-dim" />}
            <span>{copied ? "Copied!" : "+20 1090641737"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
