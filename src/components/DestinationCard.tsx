import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Destination } from "@/data/destinations";

const DestinationCard = ({ destination, index }: { destination: Destination; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/destinations/${destination.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs">
            {destination.category}
          </Badge>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-2xl font-bold text-background mb-1">
              {destination.name}
            </h3>
            <p className="flex items-center gap-1 text-background/70 text-sm font-body">
              <MapPin size={14} /> {destination.country}
            </p>
            <p className="text-background/60 text-sm font-body mt-2 line-clamp-2">
              {destination.tagline}
            </p>
            <p className="text-primary font-semibold text-sm mt-3 font-body">
              From ${destination.packages[0]?.price ?? "—"}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;
