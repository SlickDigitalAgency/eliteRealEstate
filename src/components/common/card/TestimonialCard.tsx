import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialItem } from "@/types/testimonials/TestimonialsTypes";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex-none w-[400px] p-6 mx-4 rounded-lg overflow-hidden bg-navy/50 backdrop-blur-xl border border-foreground/10"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-2 ring-offset-navy/50">
            <img
              src={testimonial.image.src}
              alt={testimonial.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-serif text-foreground/90">
              {testimonial.clientName}
            </h3>
            <p className="text-sm text-gold">{testimonial.clientRole}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-gold text-gold" />
          ))}
        </div>

        <p className="text-foreground/80 italic leading-relaxed">
          "{testimonial.testimonial}"
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold opacity-10 rounded-full blur-xl" />
      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gold opacity-10 rounded-full blur-lg" />
    </motion.div>
  );
};

export default TestimonialCard;
