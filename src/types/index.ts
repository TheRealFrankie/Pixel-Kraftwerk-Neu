export interface NavItem {
  title: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type BusinessType = 
  | 'E-Commerce'
  | 'Gastronomie'
  | 'SaaS'
  | 'Gesundheitswesen'
  | 'Finanzen'
  | 'Produktion'
  | 'Einzelhandel'
  | 'Beratung / Agentur'
  | 'SaaS / IT'
  | 'Sonstiges';

export type HowFoundUs = 
  | 'Empfehlung'
  | 'Google'
  | 'LinkedIn'
  | 'Instagram'
  | 'Facebook'
  | 'Sonstiges';

export interface ContactFormData {
  name: string;
  email: string;
  telephone?: string;
  company: string;
  tasksToAutomate: string;
  privacyAccepted: boolean;
}

export type CookieType = 'necessary' | 'analytics' | 'marketing' | 'preferences';