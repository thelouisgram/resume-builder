export interface TitleProps {
  title: string;
  description: string;
}

interface CardData {
  image: string;
  name: string;
  handle: string;
}

export interface CreateCardProps {
  card: CardData;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterLinks {
  product: FooterLink[];
  resources: FooterLink[];
  legal: FooterLink[];
}