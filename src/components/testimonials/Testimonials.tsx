import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonialData } from "@/constants/testimonials/TestimonialsData";
import TestimonialCard from "../common/card/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;

    if (scrollContainer && container) {
      const scrollWidth = container.scrollWidth;
      const containerWidth = scrollContainer.offsetWidth;

      const distanceToScroll = scrollWidth - containerWidth;
      const scrollSpeed = 40; // px per second
      const duration = distanceToScroll / scrollSpeed;

      const tween = gsap.to(container, {
        x: -distanceToScroll,
        duration: duration,
        ease: "none",
        repeat: -1,
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  // Duplicate the data to simulate infinite loop
  const duplicatedTestimonials = [...testimonialData, ...testimonialData];

  return (
    <section className="relative w-full bg-background py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 mb-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">Client </span>
            <span className="text-gold">Testimonials</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gold mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their exceptional experience
            working with us.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling testimonials row */}
      <div ref={scrollRef} className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex space-x-8 py-8 container mx-auto px-6 lg:px-8"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
