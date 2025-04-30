export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  testimonial: string;
  rating: number;
  image: {
    src: string;
    alt: string;
  };
}

export interface TestimonialProps {
  testimonials: TestimonialItem[];
}
