/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseStudy, ServiceOffering } from "./types";

export const PARTNER_LOGOS = [
  { name: "Scribe AI", category: "B2B SaaS" },
  { name: "LogiFlow", category: "Logistics" },
  { name: "MedSphere", category: "Healthcare" },
  { name: "Croft & Pierce", category: "Finance" },
  { name: "Aria Genomics", category: "BioTech" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "logiflow",
    title: "How we engineered a 142% pipeline increase for a venture-backed supply chain SaaS",
    industry: "B2B SaaS",
    clientGoal: "Transform complex enterprise software into a self-explanatory revenue engine that doubles executive demo sign-ups.",
    strategicChallenge: "Their deep tech product had immense value but was plagued by an 82% drop-off on the pricing page. Corporate buyers were intimidated by dense engineering jargon and couldn't quickly compute their financial ROI.",
    ourSolution: "We stripped away the product-feature overload. In its place, we built a sleek interactive ROI Estimator, allowing buyers to see real operational savings in seconds. We crafted high-contrast UI layouts, integrated social proof dynamically, and optimized the layout to speak directly to the CIO's financial goals.",
    outcomeMetric: "+142%",
    outcomeMetricSubtext: "Increase in Demo Sign-ups",
    outcomeDescription: "Replaced technical friction with financial clarity, increasing demo bookings, lowering customer acquisition cost (CAC) by 44%, and shaving 12 days off the average enterprise sales cycle.",
    clientName: "Sarah Jenkins",
    clientTitle: "VP of Growth",
    clientCompany: "LogiFlow Systems",
    clientAvatarUrl: "https://picsum.photos/seed/sarah/150/150",
  },
  {
    id: "medsphere",
    title: "How we helped a premium telehealth platform cut CAC by 56% during a scale-up phase",
    industry: "Digital Health",
    clientGoal: "Establish a flawless patient registration intake system that scales digital ad campaigns efficiently.",
    strategicChallenge: "Their HIPAA-compliant intake form was exhausting—requiring 24 fields on initial load. Over 74% of high-intent mobile users abandoned the sign-up process prematurely out of frustration.",
    ourSolution: "We designed a gorgeous, multi-step progressive intake journey using motion aesthetics. By providing clean validation, contextual answers to 'Why we ask', and instant keyboard shortcuts, we turned a medical chore into a smooth, satisfying experience.",
    outcomeMetric: "-56%",
    outcomeMetricSubtext: "Customer Acquisition Cost",
    outcomeDescription: "Total intake completions jumped from 22% to 64% overnight. This halved visual ad spend waste, creating a highly qualified and secure patient pipeline.",
    clientName: "Dr. Marcus Vance",
    clientTitle: "Chief Product Officer",
    clientCompany: "MedSphere Telehealth",
    clientAvatarUrl: "https://picsum.photos/seed/marcus/150/150",
  },
  {
    id: "croft-pierce",
    title: "How we scaled a private equity firm's investor pipeline from $5M to $18M/month",
    industry: "FinTech & Enterprise",
    clientGoal: "Re-anchor the digital prestige of a global private wealth fund to appeal to family offices and institutions.",
    strategicChallenge: "The group's legacy website looked like an outdated template—eroding immediate trust. Reputable limited partners (LPs) equated low digital design sophistication with poor institutional security.",
    ourSolution: "We created a sleek, 'Functional Minimalist' investor platform. The web experience is strictly understated: sophisticated matte-black typography, interactive investor qualification metrics, and state-of-the-art responsive secure gateways.",
    outcomeMetric: "3.6x",
    outcomeMetricSubtext: "Capital Commitments Generated",
    outcomeDescription: "Elevated brand prestige to equal top-tier European private banks, unlocking $13M/mo in preconfigured, high-quality investor applications within 6 weeks.",
    clientName: "Alexander Croft",
    clientTitle: "Managing Partner",
    clientCompany: "Croft & Pierce",
    clientAvatarUrl: "https://picsum.photos/seed/alex/150/150",
  },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "custom-web-design",
    title: "High-Ticket Custom Web Design",
    tagline: "Our flagship custom web design services, engineered strictly to position your brand as a market leader and capture enterprise clients.",
    description: "A comprehensive digital transformation from the ground up. We coordinate visual direction, copywriting, and custom animations into a high-converting, performance-optimized asset.",
    timeline: "6 - 8 Weeks Sprint",
    roiGuarantee: "Targeted to 2x sales opportunities",
    deliverables: [
      "Strategic Copywriting & Visual Positioning",
      "Sophisticated Micro-Interactions (Framer Motion / React)",
      "High-Conversion UI Mockups & System Guidelines",
      "Full Custom Development & Accessibility Compliance (WCAG)",
    ],
    ctaText: "Secure Studio Slots",
    featured: true,
  },
  {
    id: "conversion-sprint",
    title: "High-Velocity Conversion Optimization Sprint",
    tagline: "Hyper-focused landing page and funnel redesigns designed to maximize paid campaign ROI and lower customer acquisition costs.",
    description: "Perfect for venture-backed companies currently wasting high ad spend. We perform an audit on your checkout or landing pages and rebuild them for maximum psychological alignment and speed.",
    timeline: "2 - 3 Weeks",
    roiGuarantee: "Guaranteed drop-off reduction",
    deliverables: [
      "Rigorous Conversion Flow & Heatmap Audit",
      "Progressive Disclosure Funnel Engineering",
      "Frictionless Form Redesign & Auto-Fill Mapping",
      "A/B Testing Framework Integration",
    ],
    ctaText: "Launch Funnel Sprint",
    featured: false,
  },
  {
    id: "growth-partnership",
    title: "Continuous Performance & Growth Retainer",
    tagline: "Continuous, data-driven optimization, speed tuning, and ongoing product UI improvements to compound your sales conversion rate.",
    description: "Conversion optimization isn't a one-time project. We act as your offsite creative team, constantly experimenting, tweaking details, and upgrading assets as you scale.",
    timeline: "Ongoing Retainer",
    roiGuarantee: "Year-over-year compounding growth",
    deliverables: [
      "Monthly UX Audit & Customer Inquiries Analysis",
      "Speed Strategy & Core Web Vitals Maintenance",
      "Landing Page Variations & Copy Writing Adjustments",
      "Quarterly Strategy Co-Lab (Product/Sales Alignment)",
    ],
    ctaText: "Partner with Us",
    featured: false,
  },
];

export const FAQS = [
  {
    question: "How do you guarantee your design will increase our revenue?",
    answer: "We do not design for award committees—we design for user psychology. Every layout choice, form field, and heading is chosen based on micro-copy efficiency, cognitive friction scoring, and responsive speeds. By creating an experience that instantly resolves buyer questions and qualifying them through custom tools, we systematically elevate your sales metrics."
  },
  {
    question: "What platforms do you build on?",
    answer: "We build fully high-fidelity, native React applications backed by custom bundlers and Tailwind CSS for unparalleled load speed (100/100 Google Lighthouse score). For clients requiring visual CMS capabilities, we integrate custom headless solutions (like Sanity or Strapi) in a decoupled configuration."
  },
  {
    question: "Do you supply the copywriting, or do we provide it?",
    answer: "We supply 100% of the copywriting. A website cannot convert on visuals alone. Our dual senior copywriters and conversion strategists draft every single word to match the specific pain points and triggers of your high-ticket audience."
  }
];
