import Layout from "@/components/Layout";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { motion } from "framer-motion";

const Destinations = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Choose Your Journey
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              All Destinations
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
              From pristine beaches to wild savannas, vibrant cities to ancient cultures — find your perfect African escape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
