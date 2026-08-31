export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlight: string;
  mockupType: 'whatsapp' | 'po' | 'inventory' | 'audit';
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detailPoints: string[];
  iconName: string;
  previewLabel: string;
}

export interface SolutionSegment {
  id: string;
  title: string;
  targetAudience: string;
  tagline: string;
  painPoint: string;
  jaraSolution: string;
  keyFeatures: string[];
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  metric: string;
  metricLabel: string;
  avatarBg: string;
  sector: 'SME' | 'Enterprise' | 'Retail' | 'Agro';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  background: string;
  avatarColor: string;
  linkedinUrl?: string;
}

export interface WaitlistFormData {
  fullName: string;
  email: string;
  companyName: string;
  role: string;
  businessSize: string;
  primaryChannel: string;
}
