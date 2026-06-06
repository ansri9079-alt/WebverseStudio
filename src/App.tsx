/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Code2, 
  Activity, 
  Coins, 
  Sparkles, 
  ArrowUp,
  Flame,
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react";
import { PARTNER_LOGOS, FAQS } from "./data";
import ROICalculator from "./components/ROICalculator";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ServiceOffers from "./components/ServiceOffers";
import LeadInquiryForm from "./components/LeadInquiryForm";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("High-Ticket Custom Web Design");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Smooth scroll directly to inquiry form
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0c0d0e] text-[#f3f4f6] min-h-screen font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Structural Schema: SEO Rich Semantics & Hidden Indexing Hooks */}
      <div className="hidden" aria-hidden="true">
        <h2>Premium Custom Web Design Services for Enterprise Clients</h2>
        <h3>Conversion Optimization Strategies for Venture-Backed SaaS</h3>
        <p>Webverse Studio designs custom high-ticket web architectures that scale pipelines, increase average contract values, and lower digital ad acquisition friction.</p>
      </div>

      {/* Modern, Hamburger-Free Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0c0d0e]/80 backdrop-blur-md border-b border-zinc-900/50 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-extrabold text-lg md:text-xl font-sans tracking-tight text-white flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Globe className="w-5 h-5 text-blue-500 transition-transform group-hover:rotate-12 duration-500" /> WEBVERSE <span className="font-mono text-xs text-zinc-500 font-light">STUDIO</span>
            </span>
          </a>

          {/* Nav links: Elegant desktop list, hidden on mobile to avoid humgurger clutter */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-400">
            <a href="#work" className="hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#roi-calculator" className="hover:text-blue-400 transition-colors">ROI Calculator</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQs</a>
          </nav>

          {/* Live Spot Status representation & CTA (Mobile + Desktop optimized, zero clutter) */}
          <div className="flex items-center gap-4">
            <a
              href="#booking"
              className="flex items-center gap-2 py-1.5 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-mono tracking-wider text-emerald-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              1 SLOT REMAINING
            </a>
            
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs py-2.5 px-4.5 rounded-lg transition-all duration-200 shadow-[0_4px_10px_rgba(0,82,255,0.2)]"
            >
              Lock Project Slot
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Core Architecture Container */}
      <main>
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-24 md:pt-16 md:pb-36 overflow-hidden" id="hero">
          {/* Ambient graphic indicators */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-cyan-600/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative">
            
            {/* Visual Header Grid Accent */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950/40 to-zinc-900 border border-blue-900/30 text-blue-400 font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                CONVERSION ARCHITECTURE FOR HIGH-TICKET VENTURES
              </span>
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-8">
              
              {/* Bold benefit headline (ROI Focus, no 'We are creative' larping) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.08] text-balance">
                We design websites that secure your next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 underline decoration-blue-500/30 decoration-wavy">
                  $10M in contract value.
                </span>
              </h1>

              {/* Specific Niched Subheadline */}
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed text-balance">
                We engineer elite custom web design services and conversion optimization frameworks for fast-growing B2B SaaS, telehealth, and innovative capital funds.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="#booking"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl text-sm transition-all duration-300 shadow-[0_4px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.45)] cursor-pointer"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white font-semibold py-4 px-8 rounded-xl text-sm border border-zinc-800 transition-all duration-200 cursor-pointer"
                >
                  Analyze Case Studies
                </a>
              </div>

              {/* Conversion Statistics Strips */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12 md:pt-16 border-t border-zinc-900/60 font-mono text-center">
                <div className="space-y-1">
                  <span className="text-xs text-zinc-500 block">GOOG LIGHTHOUSE <br /> SPEED</span>
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center justify-center gap-1">
                    <Activity className="w-4 h-4 text-emerald-400" /> 100/100
                  </span>
                </div>
                <div className="space-y-1 border-x border-zinc-900/60">
                  <span className="text-xs text-zinc-500 block">AVERAGE PIPELINE <br /> LIFT</span>
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center justify-center gap-1">
                    <Coins className="w-4 h-4 text-emerald-400" /> +142%
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-zinc-500 block">CAPITAL UNLOCKED <br /> WITH</span>
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center justify-center gap-1">
                    <ArrowUp className="w-4 h-4 text-emerald-400" /> $45M+
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SOCIAL PROOF STRIP */}
        <section className="py-6 bg-zinc-950/60 border-y border-zinc-900/80">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 text-center md:text-left">
              Trusted by market leaders & venture-backed innovators:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
              {PARTNER_LOGOS.map((brand, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <span className="font-sans font-black tracking-tight text-zinc-300 group-hover:text-white transition-colors cursor-default text-base whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
                    {brand.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* THE ABOUT CORNERSTONE: "IT'S NOT ABOUT US, IT'S ABOUT YOUR REVENUE COMPOSITION" */}
        <section className="py-24 bg-[#0c0d0e] relative border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Conceptual statement */}
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0052FF] bg-blue-950/20 border border-blue-900/30 px-3 py-1 rounded-full">
                  Our Brand Architecture Mandate
                </span>
                
                {/* Reframed About copy to make it about the client */}
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
                  We bridge the gap between complex tech and conversion revenue.
                </h2>
                
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Most design agencies ramble on about their founding history and creative passions. You don't need passion lists—you need digital assets that convert complex architecture into buying confidence.
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  We translate your product's underlying engineering excellence into clean visual rhythms, intuitive micro-animations, and immediate psychological anchors that convince high-ticket enterprise buyers in under five seconds.
                </p>

                <div className="pt-4 flex gap-4">
                  <a
                    href="#booking"
                    className="group inline-flex items-center gap-2 text-sm text-blue-400 font-bold hover:text-blue-300 hover:underline"
                  >
                    Examine our tactical criteria
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Mini bento highlights explaining concrete conversion tactics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="philosophy-benchmarks">
                
                <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-900/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-900/30 flex items-center justify-center text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Sub-300ms Responses</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Every 100ms of latency drops conversions by 7%. We build natively with clean code, yielding instantaneous file loads.
                  </p>
                </div>

                <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-900/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-green-950/50 border border-green-900/30 flex items-center justify-center text-green-400">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Friction Scoring Analysis</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    We eliminate unnecessary database inquiries, progress-bar delays, and useless form fields to retain high-intent users.
                  </p>
                </div>

                <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-900/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-900/30 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Progressive Disclosures</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Instead of flooding corporate buyers with dense pricing metrics, we guide them cleanly through stepped, satisfying answers.
                  </p>
                </div>

                <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-900/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-900/30 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Psychological Positioning</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    High-ticket clients seek security and prestige. We design custom Swiss interfaces that reflect immediate institutional grade.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* THE 'PROBLEM-SOLUTION' PORTFOLIO */}
        <CaseStudiesSection />


        {/* INTERACTIVE COMPONENT: CONVERSION ROI CALCULATOR */}
        <ROICalculator />


        {/* SERVICE offerings */}
        <ServiceOffers onSelectService={handleSelectService} />


        {/* INTAKE GATEWAY */}
        <LeadInquiryForm selectedService={selectedService} setSelectedService={setSelectedService} />


        {/* TRUST SECTION: OUTCOME TESTIMONY & QUOTE RIG */}
        <section id="trust" className="py-24 bg-[#0c0d0e] border-y border-zinc-900 relative">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0052FF]">
                VERIFIED ADVISORY AUDITS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4 font-sans">
                What happens when ROI is prioritized first.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
              
              <div className="p-8 bg-zinc-900/20 border border-zinc-900 rounded-3xl space-y-6">
                <div className="flex items-center gap-1 text-emerald-400">
                  <span className="text-lg font-bold">★★★★★</span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase ml-2">CORE AUDIT RATING</span>
                </div>
                <p className="text-zinc-300 text-base leading-relaxed italic">
                  "Most agencies we worked with in the past made beautiful sites but had zero grasp of SaaS sales metrics. Webverse was clinical: we cut our pricing abandonment by half, netting $1.2M in annual recurring revenue inside 60 days of the deployment."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                  <img
                    src="https://picsum.photos/seed/sarah/150/150"
                    alt="Sarah Jenkins"
                    className="w-10 h-10 rounded-full object-cover border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sarah Jenkins</h4>
                    <span className="text-xs text-zinc-400 font-mono">VP of Growth, LogiFlow Systems</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-zinc-900/20 border border-zinc-900 rounded-3xl space-y-6">
                <div className="flex items-center gap-1 text-emerald-400">
                  <span className="text-lg font-bold">★★★★★</span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase ml-2">CONVERSION GUARANTEE APPROVED</span>
                </div>
                <p className="text-zinc-300 text-base leading-relaxed italic">
                  "The progressive disclosure wizard Webverse engineered transformed our telehealth patient sign-up rates. We went from a 22% start-to-finish rate to 64%. Our CPA dropped on Google instantly, unlocking real marketing scale."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                  <img
                    src="https://picsum.photos/seed/marcus/150/150"
                    alt="Marcus Vance"
                    className="w-10 h-10 rounded-full object-cover border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Dr. Marcus Vance</h4>
                    <span className="text-xs text-zinc-400 font-mono">Chief Product Officer, MedSphere</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* FAQs SECTION */}
        <section id="faq" className="py-24 bg-zinc-950/80 border-b border-zinc-900 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0052FF]">
                CLIENT KNOWLEDGE LAB
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mt-4 font-sans">
                Answering strategic questions before you book.
              </h2>
            </div>

            <div className="space-y-6" id="faq-blocks-container">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-6 bg-zinc-900/35 border border-zinc-900/80 rounded-2xl space-y-3">
                  <h3 className="text-base md:text-lg font-semibold text-zinc-100 flex items-start gap-3">
                    <span className="text-[#0052FF] font-mono text-sm leading-none mt-1">Q{idx + 1}.</span>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-zinc-400 pl-8 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050607] border-t border-zinc-900 text-zinc-400 py-20 px-6 md:px-12 relative overflow-hidden">
        
        {/* Urgent finalized Call-To-Action */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 font-bold">
              <Flame className="w-4 h-4" /> URGENT CONVERSION WINDOW
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans leading-tight">
              Ready to reclaim your uncaptured pipeline?
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              We operate exclusively on single-client attention cycles. Book your diagnostic call now—before our slots for this trimester close.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Lock Slot & Strategy Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Studio footer credentials */}
        <div className="max-w-6xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-sm font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-1.5">
              <Globe className="w-4 h-4 text-blue-500" /> WEBVERSE STUDIO
            </span>
            <p className="text-xs text-zinc-600 font-mono">
              © {new Date().getFullYear()} Webverse Limited. All strategy copyrights enforced. Studio 3000 Ingress.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-zinc-500 font-mono">
            <a href="#work" className="hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#roi-calculator" className="hover:text-blue-400 transition-colors">ROI Calculator</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 hover:text-white border border-zinc-850 transition-all cursor-pointer text-xs font-mono"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-4 h-4 text-zinc-500" />
            Top
          </button>

        </div>

      </footer>

    </div>
  );
}
