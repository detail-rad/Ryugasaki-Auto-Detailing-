export enum Tier {
  UME = 'A',
  TAKE = 'B',
  MATSU = 'C',
}

export interface ServiceItem {
  tier: Tier;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  recommendedFor: string;
  colorClass: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
