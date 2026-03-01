import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/data/destinations";

const FeaturedDestinations = () => {
  const featured = destinations.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Top Picks
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured Destinations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((dest, i) => (
            <DestinationCard key={dest.id} destination={dest} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button variant="outline" size="lg" className="gap-2">
              View All Destinations <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
