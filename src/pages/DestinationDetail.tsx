import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Check, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { destinations } from "@/data/destinations";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Destination not found</h1>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 container mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-background/70 text-sm mb-4 hover:text-background transition-colors font-body">
            <ArrowLeft size={16} /> Back
          </button>
          <Badge className="mb-3 bg-primary/90 text-primary-foreground">{destination.category}</Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background">{destination.name}</h1>
          <p className="flex items-center gap-1 text-background/70 font-body mt-2">
            <MapPin size={16} /> {destination.country}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl font-bold mb-4">About {destination.name}</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{destination.description}</p>
            </motion.div>

            <div>
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-primary" /> Best Time to Visit
              </h3>
              <p className="font-body text-muted-foreground">{destination.bestTime}</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-4">Sample Itinerary</h3>
              <div className="space-y-3">
                {destination.itinerary.map((day, i) => (
                  <div key={i} className="flex gap-4 font-body text-sm">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Available Packages</h3>
            {destination.packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-5 space-y-4"
              >
                <div>
                  <h4 className="font-display text-lg font-bold">{pkg.name}</h4>
                  <p className="font-body text-muted-foreground text-sm">{pkg.duration}</p>
                </div>
                <div className="font-display text-3xl font-bold text-primary">
                  ${pkg.price}
                  <span className="text-sm text-muted-foreground font-body font-normal"> / person</span>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Included</p>
                  <div className="space-y-1">
                    {pkg.included.map((item) => (
                      <p key={item} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                        <Check size={14} className="text-secondary flex-shrink-0" /> {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Not Included</p>
                  <div className="space-y-1">
                    {pkg.excluded.map((item) => (
                      <p key={item} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                        <X size={14} className="text-accent flex-shrink-0" /> {item}
                      </p>
                    ))}
                  </div>
                </div>

                <Link to={`/book/${pkg.id}`}>
                  <Button className="w-full mt-2">Book This Package</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationDetail;
