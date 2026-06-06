/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import { CheckCircle2, TrendingUp, ArrowUpRight, Award, Flame, Quote } from "lucide-react";

export default function CaseStudiesSection() {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number>(0);

  const activeStudy = CASE_STUDIES[activeStudyIndex];

  return (
    <section id="work" className="py-24 bg-zinc-950 text-white relative border-b border-zinc-900 scroll-mt-20">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-900/40 px-3 py-1 rounded-full">
              Case Studies & Strategy Outcomes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-6 mb-4 font-sans">
              How we help startups & brands scale revenue.
            </h2>
            <p className="text-zinc-400 text-lg">
              We focus 100% on results. Here is the exact breakdown of how we transformed digital performance for our flagship partners.
            </p>
          </div>

          {/* Quick industry selector */}
          <div className="flex flex-wrap gap-2 md:self-end bg-zinc-900/40 p-1.5 rounded-xl border border-zinc-900">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                id={`btn-study-${study.id}`}
                onClick={() => setActiveStudyIndex(idx)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeStudyIndex === idx
                    ? "bg-zinc-800 text-cyan-400 shadow-md border border-zinc-700/50"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                }`}
              >
                {study.industry}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study Active Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="case-study-active-display">
          
          {/* Main Strategic Details */}
          <div className="lg:col-span-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-10 flex flex-col justify-between space-y-8 backdrop-blur-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-blue-500 to-cyan-400" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStudy.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Heading */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono py-1 px-2.5 rounded bg-blue-950/50 border border-blue-900/30 text-blue-400">
                      {activeStudy.industry}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      Case #{activeStudyIndex + 1}
                    </span>
                  </div>
                  <h3 id={`study-title-${activeStudy.id}`} className="text-2xl md:text-3xl font-bold tracking-tight text-white font-sans leading-tight">
                    {activeStudy.title}
                  </h3>
                </div>

                {/* Problem-Solution Core Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-900/80">
                  
                  {/* Left Column: Context & Srtategic Challenge */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Client Goal
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                        {activeStudy.clientGoal}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-red-400 flex items-center gap-1.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        The Strategic Challenge
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {activeStudy.strategicChallenge}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Solution & Outcome detail */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-blue-400 flex items-center gap-1.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Our Solution
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {activeStudy.ourSolution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Outcome Breakdown
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {activeStudy.outcomeDescription}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Client Quote Strip */}
                <div className="p-5 bg-zinc-900/60 border border-zinc-850/60 rounded-2xl flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-zinc-800 shrink-0">
                    <Quote className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-300 text-sm italic leading-relaxed">
                      "Webverse Studio did what normal agencies could never do—they tied their web engineering directly to our bank statements. The conversion bump alone paid for their fees index within 20 days."
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <img
                        src={activeStudy.clientAvatarUrl}
                        alt={activeStudy.clientName}
                        className="w-6 h-6 rounded-full object-cover border border-zinc-700"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-xs font-semibold text-zinc-200">
                        {activeStudy.clientName}, {activeStudy.clientTitle} at {activeStudy.clientCompany}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Large Highlight Outcome Metric Card */}
          <div className="lg:col-span-4 bg-zinc-900/10 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xs min-h-[350px]">
            {/* Background Grid Pattern for high-tech aesthetic */}
            <div className="absolute inset-0 opacity-[0.02] bg-radial-to-t from-blue-500 to-transparent pointer-events-none" />
            
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block">
                Primary KPI Uplift
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStudy.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <div id="active-outcome-metric" className="text-6xl md:text-7xl lg:text-8xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-emerald-400 to-teal-400 tracking-tight">
                    {activeStudy.outcomeMetric}
                  </div>
                  <div className="text-sm font-semibold text-zinc-200 font-mono tracking-tight flex items-center gap-1.5">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    {activeStudy.outcomeMetricSubtext}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-4 pt-8 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <Award className="w-4 h-4 text-blue-500" />
                Verified Conversion Analysis
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Determined via 30-day post-launch split-testing. Client data fully privacy-sanitized and documented to ROI standards.
              </p>
              <a
                href="#booking"
                className="group inline-flex items-center gap-2 text-sm text-cyan-400 font-semibold hover:text-cyan-300 mt-2 hover:underline"
              >
                Request dynamic proof dossier
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Small Navigation helper for mobile experience */}
        <div className="mt-8 grid grid-cols-3 gap-3 md:hidden">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id + "-mob"}
              onClick={() => setActiveStudyIndex(idx)}
              className={`p-3 rounded-xl border text-center font-mono text-[10px] uppercase transition-all duration-200 ${
                activeStudyIndex === idx
                  ? "bg-zinc-900 border-cyan-500/40 text-cyan-400"
                  : "bg-zinc-950 border-zinc-900 text-zinc-500"
              }`}
            >
              {study.industry}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
