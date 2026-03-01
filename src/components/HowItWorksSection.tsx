import { motion } from "framer-motion";
import { Search, CalendarDays, CreditCard, Plane } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse", description: "Explore our curated African destinations and vacation packages." },
  { icon: CalendarDays, title: "Choose", description: "Pick a package, select your travel dates, and customize your trip." },
  { icon: CreditCard, title: "Book", description: "Submit your booking request and complete payment securely." },
  { icon: Plane, title: "Travel", description: "Receive your confirmation, pack your bags, and enjoy the adventure!" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-body text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Simple & Easy
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon size={28} className="text-primary" />
              </div>
              <div className="font-body text-xs font-bold text-primary mb-2">Step {i + 1}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
