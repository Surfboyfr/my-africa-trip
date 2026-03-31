import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Mission from "@/components/Mission";
import WhoWeAre from "@/components/WhoWeAre";
import OurPhilosophy from "@/components/OurPhilosophy";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedDestinations />
      <Mission />
      <WhoWeAre />
      <OurPhilosophy />
      <WhatMakesUsDifferent />
      <HowItWorksSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to Explore Africa?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-lg mx-auto mb-8">
            Browse our curated packages and start planning your dream vacation today.
          </p>
          <Link to="/destinations">
            <Button size="lg" variant="secondary" className="gap-2 text-base px-8">
              Browse Packages <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
