import { Property } from "@/types/properties/PropertiesTypes";

export const propertiesData: Property[] = [
  {
    id: "oceanfront-villa",
    title: "Oceanfront Villa",
    price: 12500000,
    location: {
      city: "Malibu",
      state: "California",
    },
    features: {
      beds: 6,
      baths: 8,
      sqft: 8200,
    },
    images: {
      main: "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gallery: [
        "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    featured: true,
    description:
      "Stunning oceanfront villa with panoramic views, infinity pool, and private beach access. Modern architecture meets luxury living.",
    amenities: [
      "Infinity Pool",
      "Private Beach",
      "Wine Cellar",
      "Home Theater",
      "Smart Home System",
    ],
  },
  {
    id: "penthouse-suite",
    title: "Penthouse Suite",
    price: 18750000,
    location: {
      city: "Manhattan",
      state: "New York",
    },
    features: {
      beds: 4,
      baths: 5,
      sqft: 6500,
    },
    images: {
      main: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gallery: [
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    featured: true,
    description:
      "Luxurious penthouse with floor-to-ceiling windows offering breathtaking city views. Features premium finishes and private terrace.",
    amenities: [
      "Private Elevator",
      "Rooftop Terrace",
      "Chef's Kitchen",
      "Smart Home",
      "Concierge Service",
    ],
  },
  {
    id: "historic-estate",
    title: "Historic Estate",
    price: 24900000,
    location: {
      city: "Beverly Hills",
      state: "California",
    },
    features: {
      beds: 8,
      baths: 10,
      sqft: 12800,
    },
    images: {
      main: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gallery: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    featured: true,
    description:
      "Magnificent historic estate showcasing timeless architecture and modern luxury. Featuring manicured gardens and resort-style amenities.",
    amenities: [
      "Tennis Court",
      "Pool House",
      "Guest House",
      "Wine Cellar",
      "Library",
    ],
  },
];
