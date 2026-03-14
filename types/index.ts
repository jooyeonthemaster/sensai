// ============================================================
// Space & Technology Categories
// ============================================================

export type SpaceCategory = 'exhibition' | 'festival' | 'commercial';

export type Technology =
  | 'computer-vision'
  | 'generative-ai'
  | 'motion-sensing'
  | 'projection'
  | 'sound-generation'
  | 'bio-sensing';

// ============================================================
// Work (작품)
// ============================================================

export interface WorkSpecs {
  minArea: string;
  idealArea: string;
  ceilingHeight: string;
  equipment: string[];
  setupTime: string;
  power: string;
  darkRoom: boolean;
}

export interface Work {
  slug: string;
  title: string;
  titleEn: string;
  question: string;
  medium: string;
  year: number;
  description: string[];
  spaceCategory: SpaceCategory;
  technologies: Technology[];
  specs: WorkSpecs;
  featured: boolean;
}

// ============================================================
// Navigation
// ============================================================

export interface NavSubItem {
  label: string;
  labelEn: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
  children?: NavSubItem[];
}

// ============================================================
// Solutions
// ============================================================

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string[];
  features: string[];
  process: ProcessStep[];
}

// ============================================================
// Team
// ============================================================

export interface TeamMember {
  name: string;
  nameEn: string;
  position: string;
  major: string;
  role: string;
  career: string;
  workType: string;
}

// ============================================================
// Contact Wizard (UI only)
// ============================================================

export type InquiryType = 'festival' | 'permanent' | 'custom' | 'other';

export interface ContactFormData {
  inquiryType: InquiryType | null;
  budgetRange: string;
  deadline: string;
  spaceSize: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
}

// ============================================================
// News
// ============================================================

export interface NewsItem {
  title: string;
  date: string;
  url?: string;
  source?: string;
}

// ============================================================
// Common UI
// ============================================================

export interface SectionProps {
  id?: string;
  className?: string;
}
