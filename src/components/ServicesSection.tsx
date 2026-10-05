"use client";

import React from "react";
import { Service } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  services: Service[];
  onOpenConsultation: (serviceName?: string) => void;
}

export default function ServicesSection({ services, onOpenConsultation }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 relative bg-noir-950 border-t border-noir-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-800 border border-noir-700 text-xs font-mono text-champagne uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>Services & Scope</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-bone tracking-tight">
              Bespoke Digital Capabilities
            </h2>
            <p className="text-bone-muted text-sm sm:text-base mt-2 max-w-2xl font-light">
              Tailored client engagements with zero generic templates. Every engagement focuses strictly on speed, conversion, and undeniable brand authority.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-champagne hover:bg-champagne-light text-noir-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg self-start md:self-auto"
          >
            <MessageSquare className="w-4 h-4 text-noir-950" />
            <span>Request Custom Scope</span>
          </button>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-noir-700/60 border-y border-noir-700/60">
          {services.map((service) => (
            <div
              key={service.id}
              className="py-10 group transition-all duration-300 hover:bg-noir-900/50 px-4 sm:px-6 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number & Basic Info */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-champagne/80 group-hover:text-champagne transition-colors">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-bone group-hover:text-champagne transition-colors mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-bone-dim uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-bone-muted leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-noir-850 border border-noir-700/80 text-[11px] font-mono text-bone-muted"
                      >
                        <CheckCircle2 className="w-3 h-3 text-champagne" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline & Inquire Action */}
                <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 self-stretch">
                  <div className="text-left lg:text-right">
                    <span className="text-[10px] font-mono text-bone-dim uppercase tracking-wider block">
                      Estimated Turnaround
                    </span>
                    <span className="text-xs font-mono text-bone font-semibold">
                      {service.timeline}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-noir-800 hover:bg-champagne border border-noir-700 hover:border-champagne text-xs font-mono text-bone hover:text-noir-950 font-semibold tracking-wide transition-all shadow-md"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
