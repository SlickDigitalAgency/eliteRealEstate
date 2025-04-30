import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

import { HomeHeroProps } from "@/types/hero/HeroTypes";

const HomeHero = ({ slides }: HomeHeroProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(212, 175, 55, 0.3)", // minor exception; not in theme
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      id="hero-section"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: activeSlide === index ? 1 : 0,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: activeSlide === index ? 1 : 0,
            }}
            aria-hidden={activeSlide !== index}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20">
        {/* Wrapping the content inside a container class */}
        <div className="container mx-auto max-w-6xl" ref={heroTextRef}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              custom={0}
              variants={textVariants}
              className="text-foreground"
            >
              Discover
            </motion.div>
            <motion.div
              custom={1}
              variants={textVariants}
              className="text-gold"
            >
              Extraordinary
            </motion.div>
            <motion.div
              custom={2}
              variants={textVariants}
              className="text-foreground"
            >
              Properties
            </motion.div>
          </motion.h1>

          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 md:mt-8 text-foreground/90 text-lg md:text-xl max-w-2xl"
          >
            Curating the finest luxury real estate portfolio for the most
            discerning clients worldwide.
          </motion.p>

          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4"
          >
            <Link to="/properties">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-gold text-secondary font-medium rounded-md"
              >
                Explore Properties
              </motion.button>
            </Link>

            <Link to="/team">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-secondary/20 backdrop-blur-sm text-foreground font-medium rounded-md flex items-center space-x-2 border-gold hover:border-transparent hover:bg-secondary/30 transition-all duration-300"
              >
                <Users size={18} />
                <span>Meet Our Team</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
