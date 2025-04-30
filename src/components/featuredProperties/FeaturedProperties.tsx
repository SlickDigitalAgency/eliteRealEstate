import { Property } from "@/types/properties/PropertiesTypes";
import { motion } from "framer-motion";
import PropertyCard from "../common/card/PropertyCard";
import { Button } from "../ui/button";

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  return (
    <section className="py-20 bg-background" id="properties">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12 flex-col md:flex-row gap-8 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="text-gold">Properties</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-4" />
            <p className="max-w-xl text-lg text-foreground/80">
              Discover our handpicked selection of the most exceptional
              properties on the market.
            </p>
          </motion.div>

          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-background transition-colors"
          >
            View All Properties
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
