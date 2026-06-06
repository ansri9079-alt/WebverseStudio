/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  clientGoal: string;
  strategicChallenge: string;
  ourSolution: string;
  outcomeMetric: string;
  outcomeMetricSubtext: string;
  outcomeDescription: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientAvatarUrl: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  timeline: string;
  roiGuarantee: string;
  deliverables: string[];
  ctaText: string;
  featured: boolean;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  challenge: string; // The "Invisible Salesperson" qualifier field
  serviceNeeded: string;
  budgetRange: string;
  submittedAt: string;
  status: "new" | "reviewing" | "contacted";
}
