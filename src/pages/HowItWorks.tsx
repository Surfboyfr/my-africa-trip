import { motion } from "framer-motion";
import { Search, CalendarDays, CreditCard, Plane, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const steps = [
  { icon: Search, title: "1. Browse Destinations", description: "Explore our handpicked African destinations. Each comes with photos, descriptions, best travel times, and sample itineraries to help you decide." },
  { icon: CalendarDays, title: "2. Choose a Package", description: "Select a curated vacation package that fits your style and budget. Each package clearly shows what's included and excluded — no hidden surprises." },
  { icon: CreditCard, title: "3. Submit Your Booking", description: "Fill out a simple booking form with your details and preferred dates. Our team reviews every request personally within 24 hours." },
  { icon: MessageCircle, title: "4. Confirm & Pay", description: "We'll reach out via email or WhatsApp to confirm availability. Pay securely via bank transfer or mobile money — we'll guide you through it." },
  { icon: ShieldCheck, title: "5. Get Your Confirmation", description: "Once payment is verified, you'll receive your full booking confirmation with all trip details, meeting points, and emergency contacts." },
  { icon: Plane, title: "6. Enjoy Your Trip!", description: "Pack your bags and experience Africa like never before. Our local partners ensure every detail is taken care of so you can focus on the adventure." },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Your Journey</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">How It Works</h1>
            <p className="font-body text-muted-foreground text-lg">
              Booking your dream African vacation is simple, transparent, and stress-free.
            </p>
          </motion.div>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <step.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/destinations">
              <Button size="lg" className="text-base px-8">Start Exploring</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
