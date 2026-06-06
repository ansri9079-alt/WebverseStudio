/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Calculator, ArrowRight, DollarSign } from "lucide-react";

export default function ROICalculator() {
  const [visitors, setVisitors] = useState<number>(20000);
  const [conversionRate, setConversionRate] = useState<number>(1.2);
  const [dealValue, setDealValue] = useState<number>(5000);

  // Webverse Studio design uplift coefficient (conservative target)
  // We model a realistic 1.6x - 2.2x increase in conversion rate via cognitive optimization
  const optimizedConversion = Math.min(10, +(conversionRate * 1.8).toFixed(2));
  
  const currentLeads = Math.round(visitors * (conversionRate / 100));
  const currentRevenue = currentLeads * dealValue;

  const optimizedLeads = Math.round(visitors * (optimizedConversion / 100));
  const optimizedRevenue = optimizedLeads * dealValue;

  const monthlyLift = optimizedRevenue - currentRevenue;
  const yearlyLift = monthlyLift * 12;

  return (
    <section id="roi-calculator" className="relative py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
      {/* Background gradients for visual depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-600/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-500 bg-blue-950/40 border border-blue-900/40 px-3 py-1 rounded-full">
            Core Conversion Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-6 mb-4 font-sans leading-tight">
            Stop guessing your web ROI. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Calculate the leakage.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            See exactly how many high-ticket clients you are losing to confusing layouts and slow speeds—and what happens when we fix them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-zinc-900/50 backdrop-blur-md border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-8" id="roi-inputs">
            <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-blue-500" />
              Your Website Parameters
            </h3>

            {/* Visitors Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-zinc-400 font-medium">Monthly Unique Visitors</label>
                <span className="font-mono text-white text-base font-semibold bg-zinc-800/80 px-3 py-1 rounded border border-zinc-700/50">
                  {visitors.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>1k/mo</span>
                <span>50k/mo</span>
                <span>100k/mo</span>
              </div>
            </div>

            {/* Conversion Rate Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-zinc-400 font-medium">Current Conversion Rate (Leads/Sales)</label>
                <span className="font-mono text-white text-base font-semibold bg-zinc-800/80 px-3 py-1 rounded border border-zinc-700/50">
                  {conversionRate}%
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="10.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>0.1%</span>
                <span>5.0%</span>
                <span>10.0%</span>
              </div>
            </div>

            {/* Deal Value Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-zinc-400 font-medium">Average Deal or Contract Value (ACV/LTV)</label>
                <span className="font-mono text-white text-base font-semibold bg-zinc-800/80 px-3 py-1 rounded border border-zinc-700/50">
                  ${dealValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>$500</span>
                <span>$25k</span>
                <span>$50k</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/50 flex items-center gap-3 text-sm text-zinc-400 leading-relaxed">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <span>We target a conservative **+80% conversion increase** utilizing frictionless progressive onboarding and premium visual positioning.</span>
            </div>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-linear-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 rounded-2xl p-6 md:p-8" id="roi-outputs">
            <div className="space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                Uncaptured Revenue Estimate
              </h3>

              {/* Huge Metric Card */}
              <div className="p-6 bg-blue-950/20 border border-blue-900/30 rounded-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 text-blue-500/5 select-none font-sans font-bold text-9xl">
                  $
                </div>
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                  Leaving on the table (Monthly)
                </div>
                <div className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                  +${monthlyLift.toLocaleString()}
                </div>
                <div className="text-xs text-zinc-400 mt-2">
                  Optimized conversions yield <span className="text-white font-semibold font-mono">{optimizedLeads} leads</span> vs. current {currentLeads} leads.
                </div>
              </div>

              {/* Contrast Metrics Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/60 border border-zinc-800/50 rounded-lg">
                  <div className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider mb-1">
                    Current Monthly Sales
                  </div>
                  <div className="text-lg font-bold text-zinc-300 font-mono">
                    ${currentRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">
                    {conversionRate}% Rate
                  </div>
                </div>
                
                <div className="p-4 bg-zinc-900/60 border border-zinc-850 rounded-lg">
                  <div className="text-[10px] uppercase font-mono text-blue-400 tracking-wider mb-1 font-semibold">
                    Webverse Optimized
                  </div>
                  <div className="text-lg font-bold text-blue-400 font-mono">
                    ${optimizedRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">
                    {optimizedConversion}% Rate (+80% Up)
                  </div>
                </div>
              </div>

              {/* Annual projection */}
              <div className="flex justify-between items-center py-4 px-1 border-t border-b border-zinc-800/50">
                <span className="text-sm text-zinc-400 font-medium">Estimated Annual Revenue Boost</span>
                <span className="text-xl font-bold text-green-400 font-mono">
                  +${yearlyLift.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#booking"
                className="group relative flex items-center justify-between w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,82,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,82,255,0.4)]"
              >
                <span>Capture This Revenue</span>
                <span className="flex items-center gap-2 font-mono text-xs font-normal border-l border-white/20 pl-4 py-1 text-blue-100 group-hover:text-white">
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <span className="block text-center text-[10px] text-zinc-500 font-mono mt-3">
                No billing strings. Custom diagnostic proposal ready in 30 minutes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
