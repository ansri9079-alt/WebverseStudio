/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Mail, Building2, User, ChevronRight, Sparkles, Loader2, FileCode, CheckCircle } from "lucide-react";
import { ContactInquiry } from "../types";

interface LeadInquiryFormProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
}

export default function LeadInquiryForm({ selectedService, setSelectedService }: LeadInquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [challenge, setChallenge] = useState("");
  const [budgetRange, setBudgetRange] = useState("$10,000 - $25,000");
  
  const [submitting, setSubmitting] = useState(false);
  const [submittedDossier, setSubmittedDossier] = useState<ContactInquiry | null>(null);
  const [pipelinePhase, setPipelinePhase] = useState("");
  const [savedInquiries, setSavedInquiries] = useState<ContactInquiry[]>([]);

  // Load previous inquiries from localStorage for continuous local validation
  useEffect(() => {
    try {
      const saved = localStorage.getItem("webverse_inquiries");
      if (saved) {
        setSavedInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  const BUDGET_OPTIONS = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const SERVICE_OPTIONS = [
    "High-Ticket Custom Web Design",
    "High-Velocity Conversion Optimization Sprint",
    "Continuous Performance & Growth Retainer",
    "General Strategy Consultation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !challenge) return;

    setSubmitting(true);
    
    // Simulate real strategic diagnostic pipeline analysis
    const phases = [
      "Securing SSL handshake...",
      "Extracting website challenge metadata...",
      "Mapping cognitive-friction spots...",
      "Drafting potential CRO layout pivots...",
      "Configuring priority strategy docket..."
    ];

    let currentPhaseIdx = 0;
    setPipelinePhase(phases[0]);

    const interval = setInterval(() => {
      currentPhaseIdx++;
      if (currentPhaseIdx < phases.length) {
        setPipelinePhase(phases[currentPhaseIdx]);
      } else {
        clearInterval(interval);
        
        const newInquiry: ContactInquiry = {
          id: `inq_${Date.now()}`,
          name,
          email,
          company: company || "Undisclosed Venture",
          challenge,
          serviceNeeded: selectedService || "High-Ticket Custom Web Design",
          budgetRange,
          submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: "new"
        };

        const updated = [newInquiry, ...savedInquiries];
        setSavedInquiries(updated);
        localStorage.setItem("webverse_inquiries", JSON.stringify(updated));
        
        setSubmittedDossier(newInquiry);
        setSubmitting(false);
        
        // Reset form inputs
        setName("");
        setEmail("");
        setCompany("");
        setChallenge("");
      }
    }, 700);
  };

  return (
    <section id="booking" className="py-24 bg-zinc-950 text-white border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Briefing Column */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0052FF]">
                LEAD INTAKE GATEWAY
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-6 mb-4 font-sans leading-tight">
                Let's secure your revenue lift.
              </h2>
              <p className="text-zinc-400 leading-relaxed text-base font-sans">
                Our custom slots are strictly limited to two launches per month to maintain clinical focus. Complete this strategic request docket to lock in our initial 1-on-1 performance audit.
              </p>
            </div>

            {/* Strategic Value Items */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/30 text-blue-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-100">Zero Technical Fluff during strategy call</h4>
                  <p className="text-xs text-zinc-400 leading-normal mt-0.5">We dive straight into user conversion metrics, layout constraints, and your historical CPA data.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-900/30 text-cyan-400 shrink-0 mt-0.5">
                  <FileCode className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-100">Custom UX Blueprint included</h4>
                  <p className="text-xs text-zinc-400 leading-normal mt-0.5">You will walk away with a functional high-fidelity roadmap explaining why your active buyers are bouncing.</p>
                </div>
              </div>
            </div>

            {/* Micro-notice of Active bookings */}
            <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-2xl flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Studio Status: <span className="text-emerald-400 font-bold uppercase tracking-wider">Bookings Open</span> (1 Slot Remaining for June)
              </span>
            </div>
          </div>

          {/* Form Interactive Workspace Column */}
          <div className="lg:col-span-7" id="intake-form-workspace">
            <AnimatePresence mode="wait">
              
              {/* Form loader during dynamic diagnosis */}
              {submitting ? (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-zinc-900/40 border border-zinc-900 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
                >
                  <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-6" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">Analyzing dossier</span>
                  <p className="text-lg font-semibold text-white mb-4 animate-pulse">{pipelinePhase}</p>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                    Webverse's automated conversion profiling agent is cataloging your core friction metrics index to prep our creative director's consultation call sheet.
                  </p>
                </motion.div>
              ) : submittedDossier ? (
                /* Success Case Study Dossier Presentation */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-zinc-900/40 border border-blue-900/40 rounded-3xl p-6 md:p-10 space-y-6"
                >
                  <div className="flex items-center gap-3 pb-4 border-b border-zinc-900">
                    <div className="p-3 bg-emerald-950/50 rounded-2xl border border-emerald-900/30 text-emerald-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                        Dossier Confirmed & Synced
                      </span>
                      <h3 className="text-xl font-bold text-white font-sans">
                        Lead pre-qualified for strategy review
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{submittedDossier.name}</span>. Our Conversion Director has locked in your challenge summary for review. A calendar scheduler was dispatched privately to <span className="text-blue-400 font-mono text-xs">{submittedDossier.email}</span>.
                    </p>

                    <div className="p-5 bg-zinc-950/80 rounded-2xl border border-zinc-900/80 space-y-4">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                        Webverse Diagnostics Intake Snapshot:
                      </span>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-zinc-500 block">Lead Company:</span>
                          <span className="text-zinc-200 font-semibold">{submittedDossier.company}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 block">Tier Requested:</span>
                          <span className="text-zinc-200 font-semibold">{submittedDossier.serviceNeeded}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Stated Budget:</span>
                          <span className="text-zinc-200 font-mono font-semibold">{submittedDossier.budgetRange}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Intake Hash:</span>
                          <span className="text-blue-500 font-mono text-[10px] uppercase truncate block">{submittedDossier.id}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-zinc-900 text-xs">
                        <span className="text-red-400 font-semibold uppercase tracking-wider block mb-1">
                          Diagnosed Leakage Factor:
                        </span>
                        <p className="text-zinc-300 italic leading-relaxed">
                          "{submittedDossier.challenge}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <button
                      onClick={() => setSubmittedDossier(null)}
                      className="py-2.5 px-5 bg-zinc-900 hover:bg-zinc-850 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      Submit Another Diagnostic
                    </button>
                    <a
                      href="#roi-calculator"
                      className="py-2.5 px-5 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-semibold text-white transition-all duration-200"
                    >
                      Verify ROI Lift Target
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Primary Intake Form UI */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                        <User className="w-3 h-3 text-[#0052FF]" />
                        Your Full Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John C. Miller"
                        className="w-full bg-zinc-950/60 border border-zinc-850/60 rounded-xl py-3.5 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                        <Mail className="w-3 h-3 text-[#0052FF]" />
                        Business Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full bg-zinc-950/60 border border-zinc-850/60 rounded-xl py-3.5 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                        <Building2 className="w-3 h-3 text-[#0052FF]" />
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="LogiFlow Inc."
                        className="w-full bg-zinc-950/60 border border-zinc-850/60 rounded-xl py-3.5 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>

                    {/* Service Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                        Target Strategic Pathway
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-zinc-950/60 border border-zinc-850/60 rounded-xl py-4 px-4 text-sm text-zinc-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-zinc-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Stated Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Target Project Deployment Budget
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {BUDGET_OPTIONS.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setBudgetRange(range)}
                          className={`py-3 px-3 rounded-xl border text-center text-xs font-medium transition-all duration-200 cursor-pointer ${
                            budgetRange === range
                              ? "bg-blue-600/10 border-blue-500 text-blue-400 font-semibold"
                              : "bg-zinc-950/60 border-zinc-850/60 text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* The CRITICAL qualification field (The Invisible Salesperson) */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-300 flex justify-between items-center bg-zinc-900/80 p-3 rounded-t-xl border-x border-t border-zinc-850">
                      <span className="flex items-center gap-2 text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        The Qualification Variable
                      </span>
                      <span className="text-[10px] text-zinc-500 font-normal">REQUIRED</span>
                    </label>
                    <div className="bg-zinc-950/80 border-x border-b border-zinc-850 p-4 rounded-b-xl space-y-3">
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                        <strong className="text-zinc-200 font-medium">"What is your absolute biggest challenge with your current website?"</strong> (e.g. "We raised a seed round but our pricing page bounce rate is 85%", "Competitors copy our content and we look identical").
                      </p>
                      <textarea
                        required
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        placeholder="Our technical product is extremely strong, but corporate leads fail to understand our ROI in the first 5 seconds. Our landing page conversion rate is under 0.9% right now..."
                        rows={4}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 leading-relaxed resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.35)]"
                    >
                      <span className="text-sm tracking-wider uppercase">Initialize Private strategy Consultation</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="block text-center text-[10px] text-zinc-500 font-mono mt-3 leading-normal">
                      By submitting, you agree to secure pipeline priority. Complete confidence assured under studio non-disclosure policies.
                    </span>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>

            {/* List of submitted local inquiries to act as local sandbox feedback */}
            {savedInquiries.length > 0 && !submittedDossier && !submitting && (
              <div className="mt-10 p-5 bg-zinc-900/10 border border-zinc-900 rounded-2xl" id="local-sandbox-leads">
                <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-2">
                  <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                    Sandbox pipeline status ({savedInquiries.length})
                  </span>
                  <button
                    onClick={() => {
                      localStorage.removeItem("webverse_inquiries");
                      setSavedInquiries([]);
                    }}
                    className="text-[10px] font-mono text-zinc-600 hover:text-zinc-400 underline cursor-pointer"
                  >
                    Clear sandbox logs
                  </button>
                </div>
                <div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
                  {savedInquiries.map((inq) => (
                    <div key={inq.id} className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-900 flex justify-between items-center text-xs gap-3">
                      <div className="truncate">
                        <span className="font-semibold text-zinc-300 block leading-tight">{inq.company}</span>
                        <span className="text-zinc-500 font-mono text-[10px] truncate block max-w-[280px]">{inq.challenge}</span>
                      </div>
                      <div className="shrink-0 text-right font-mono">
                        <span className="text-[10px] text-zinc-400 block">{inq.submittedAt}</span>
                        <span className="text-[9px] uppercase tracking-wider text-green-400 font-bold">Pending Review</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
