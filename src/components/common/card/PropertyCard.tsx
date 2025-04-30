import { Link } from "react-router-dom";

import { Bed, Bath, Square, Badge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Property } from "@/types/properties/PropertiesTypes";
import { Separator } from "@radix-ui/react-context-menu";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/property/${property.id}`}>
      <Card className="overflow-hidden group transition-all duration-300 hover:scale-[1.02] bg-navy/50 backdrop-blur-md border border-gold/10">
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={property.images.main}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {property.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-gold text-black rounded-full">
                Featured
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-serif font-bold text-foreground">
              {property.title}
            </h3>
            <p className="text-lg font-bold text-gold">
              ${property.price.toLocaleString()}
            </p>
          </div>

          <p className="text-sm text-foreground/70 mb-4">
            {property.location.city}, {property.location.state}
          </p>

          <Separator className="my-4 bg-gold/10" />

          <div className="flex justify-between items-center text-foreground/70">
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-gold" />
              <span className="text-sm">{property.features.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-gold" />
              <span className="text-sm">{property.features.baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="h-4 w-4 text-gold" />
              <span className="text-sm">{property.features.sqft} SqFt</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;
