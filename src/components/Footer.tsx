"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, Phone, ArrowUp, Check } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const [cairoTime, setCairoTime] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCairoTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Cairo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohamedalghala@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-noir-950 border-t border-noir-700/60 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-noir-900 via-noir-850 to-noir-900 border border-champagne/30 p-8 sm:p-14 mb-16 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block">
              Have a Project in Mind?
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-bone">
              Let&apos;s Build Something Unforgettable.
            </h3>
            <p className="text-sm text-bone-muted max-w-xl font-light">
              Direct developer-to-client consultation. Fast response on WhatsApp and prompt turnarounds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 text-noir-950" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-noir-800 hover:bg-noir-700 border border-noir-700 text-bone font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-champagne" />}
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* Large Decorative Wordmark */}
        <div className="py-12 border-b border-noir-800 text-center select-none overflow-hidden">
          <span className="font-serif font-black text-5xl sm:text-8xl md:text-9xl lg:text-[140px] tracking-tighter text-noir-800/80 hover:text-noir-700 transition-colors block">
            MOHAMED HELMY
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-bone-dim">
          <div className="flex items-center gap-4">
            <span>© 2026 Mohamed Helmy. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-bone-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Cairo, EG: {cairoTime || "Live Time"}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/201090641737"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:mohamedalghala@gmail.com"
              className="hover:text-champagne transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-bone transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
