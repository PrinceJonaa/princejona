export interface ProjectCardData {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  isPrivate?: boolean;
  badge?: string;
}

export interface ServiceCardData {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SkillRowData {
  label: string;
  iconIds: string;
  iconUrl: string;
  iconWidth: number;
  iconHeight: number;
}
