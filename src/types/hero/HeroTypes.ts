export interface SlideType {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface HomeHeroProps {
  slides: SlideType[];
}