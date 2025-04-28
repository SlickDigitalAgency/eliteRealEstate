import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { Award } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import { RedefiningLuxuryRealEstateProps } from "@/types/redefiningLuxuryRealEstate/RedefiningLuxuryRealEstateTypes";

const RedefiningLuxuryRealEstate = ({
  statistics,
  awards,
  chartData,
  quote,
}: RedefiningLuxuryRealEstateProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const decorativeLineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && decorativeLineRef.current) {
      gsap.fromTo(
        decorativeLineRef.current,
        {
          width: "0%",
          opacity: 0,
        },
        {
          width: "100%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[rgb(var(--color-black))]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            <span className="text-white">Redefining </span>
            <span className="text-[rgb(var(--color-gold))]">Luxury </span>
            <span className="text-white">Real Estate</span>
          </h2>
          <div className="relative mt-4 mb-6">
            <div
              ref={decorativeLineRef}
              className="h-[2px] bg-[rgb(var(--color-gold))] mx-auto"
              style={{ maxWidth: "120px" }}
            />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            With unparalleled expertise and a commitment to excellence, we connect
            extraordinary properties with extraordinary people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className="bg-[rgb(var(--color-dark))] p-6 rounded-lg shadow-lg border border-[rgb(var(--color-navy))/30]"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[rgb(var(--color-gold))]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Recognition & Awards
              </h3>
              <ul className="space-y-4">
                {awards.map((award) => (
                  <motion.li
                    key={award.id}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <Award
                      size={20}
                      className="text-[rgb(var(--color-gold))] mt-1"
                    />
                    <span className="text-gray-300">{award.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center justify-between h-full"
          >
            <motion.div
              variants={itemVariants}
              className="w-full h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="80%" data={chartData}>
                  <PolarGrid
                    stroke="rgb(var(--color-navy))"
                  />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fill: "rgb(255 255 255 / 0.8)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: "rgb(255 255 255 / 0.8)" }}
                  />
                  <Radar
                    name="Performance"
                    dataKey="value"
                    stroke="rgb(var(--color-gold))"
                    fill="rgb(var(--color-gold) / 0.2)"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.blockquote
              variants={itemVariants}
              className="mt-8 text-gray-300 italic text-center"
            >
              "{quote}"
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RedefiningLuxuryRealEstate;