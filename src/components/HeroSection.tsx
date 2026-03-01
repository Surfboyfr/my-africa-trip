import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-safari.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Discover Africa
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6">
            Your Next Great
            <br />
            Adventure Awaits
          </h1>
          <p className="font-body text-background/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Curated vacation packages across Africa's most breathtaking destinations. Safari, beach, city, culture — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/destinations">
              <Button size="lg" className="text-base px-8 gap-2">
                Explore Destinations <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-base px-8 bg-background/10 border-background/30 text-background hover:bg-background/20">
                How It Works
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
