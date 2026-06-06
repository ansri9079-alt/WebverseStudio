/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { SERVICE_OFFERINGS } from "../data";
import { CheckCircle2, Zap, Hourglass, ShieldCheck, ArrowRight } from "lucide-react";

interface ServiceOffersProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServiceOffers({ onSelectService }: ServiceOffersProps) {
  return (
    <section id="services" className="py-24 bg-zinc-950 text-white border-b border-zinc-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-500 bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full">
            Elite Architectural Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-6 mb-4 font-sans leading-tight">
            Our Core Client Engagement Channels.
          </h2>
          <p className="text-zinc-400 text-lg">
            No complex retainer bundles. We offer three streamlined service paths engineered to optimize positioning and unlock commercial conversion.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="services-grid">
          {SERVICE_OFFERINGS.map((offer) => {
            return (
              <div
                key={offer.id}
                id={`offer-card-${offer.id}`}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 border backdrop-blur-xs group ${
                  offer.featured
                    ? "bg-zinc-900/40 border-blue-600/40 shadow-[0_10px_30px_rgba(0,82,255,0.08)] lg:scale-105 z-10"
                    : "bg-zinc-950 border-zinc-900/80 hover:border-zinc-800"
                }`}
              >
                {/* Featured Badge */}
                {offer.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold font-mono py-1 px-3.5 rounded-full uppercase tracking-widest shadow-md">
                    Most Popular / Highest ROI
                  </div>
                )}

                <div className="space-y-6">
                  {/* Service identity */}
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1 uppercase tracking-wider">
                      {offer.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Secondary stats strip: Speed/Timeline and ROI */}
                  <div className="grid grid-cols-2 gap-2 py-4 border-y border-zinc-900/80 font-mono text-xs">
                    <div className="space-y-1">
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Hourglass className="w-3 h-3 text-cyan-400" /> TIMELINE
                      </span>
                      <span className="text-zinc-200 font-semibold">{offer.timeline}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-zinc-500 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" /> GUARANTEE
                      </span>
                      <span className="text-zinc-200 font-semibold">{offer.roiGuarantee}</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 pb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
                      Core Scope Elements
                    </span>
                    <ul className="space-y-2.5">
                      {offer.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call To Action */}
                <div className="pt-6">
                  <button
                    onClick={() => onSelectService(offer.title)}
                    className={`w-full py-4 px-6 rounded-xl text-center text-xs font-bold font-sans uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                      offer.featured
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_15px_rgba(0,82,255,0.2)]"
                        : "bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {offer.ctaText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  <span className="block text-center text-[9px] text-zinc-500 mt-2 font-mono">
                    Subject to designer workload capacity
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
