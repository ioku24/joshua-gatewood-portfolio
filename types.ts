import { LucideIcon } from 'lucide-react';

export interface ProjectAsset {
  title: string;
  type: 'image' | 'video' | 'comparison';
  url?: string; // Optional now, used for image/video types
  poster?: string; // Optional thumbnail/poster for video assets
  caption?: string; // Optional caption for visual evidence
  
  // New Comparison Fields
  beforeImage?: string;
  afterImage?: string;
  beforeVideo?: string;
  afterVideo?: string;
  beforeCaption?: string;
  afterCaption?: string;

  challenge: string; // Used as main body text for comparison type
  solution: string;
  outcome: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string; // Short summary for card
  assets: ProjectAsset[]; // List of detailed case studies within this bucket
  stats?: string;
  tags: string[];
  link?: string; // Optional external link
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlight: string;
}