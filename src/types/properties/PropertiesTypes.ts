export interface PropertyFeature {
  icon: string;
  value: number;
  label: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    city: string;
    state: string;
  };
  features: {
    beds: number;
    baths: number;
    sqft: number;
  };
  images: {
    main: string;
    gallery: string[];
  };
  featured: boolean;
  description: string;
  amenities: string[];
}

export interface PropertyCardProps {
  property: Property;
}
