export interface CTAButton {
  label: string;
  icon: string;
  href: string;
}

export interface CTAData {
  title: string;
  tagline: string;
  description: string;
  buttons: CTAButton[];
}

export interface CTASectionProps {
  data: CTAData;
}
