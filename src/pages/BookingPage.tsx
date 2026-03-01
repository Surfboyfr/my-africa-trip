import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { destinations } from "@/data/destinations";
import { toast } from "sonner";

const BookingPage = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // Find the package
  let foundPkg: any = null;
  let foundDest: any = null;
  for (const dest of destinations) {
    const pkg = dest.packages.find((p) => p.id === packageId);
    if (pkg) {
      foundPkg = pkg;
      foundDest = dest;
      break;
    }
  }

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "1",
    travelDate: "",
    notes: "",
  });

  if (!foundPkg || !foundDest) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Package not found</h1>
          <Link to="/destinations"><Button>Back to Destinations</Button></Link>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.travelDate) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request submitted!");
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center max-w-lg">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
              <Check size={40} className="text-secondary" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4">Booking Request Received!</h1>
            <p className="font-body text-muted-foreground mb-2">
              Thank you, <strong>{form.fullName}</strong>! We've received your booking request for <strong>{foundPkg.name}</strong> in <strong>{foundDest.name}</strong>.
            </p>
            <p className="font-body text-muted-foreground mb-8">
              Our team will confirm availability and reach out via email or WhatsApp within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/destinations"><Button variant="outline">Explore More</Button></Link>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                <Button>Chat on WhatsApp</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-muted-foreground text-sm mb-6 hover:text-foreground transition-colors font-body">
          <ArrowLeft size={16} /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Book Your Trip</h1>
          <p className="font-body text-muted-foreground mb-8">
            {foundPkg.name} · {foundDest.name}, {foundDest.country} · <span className="text-primary font-semibold">${foundPkg.price}/person</span>
          </p>

          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <h3 className="font-display text-lg font-bold mb-3">Package Summary</h3>
            <div className="grid grid-cols-2 gap-3 text-sm font-body">
              <div><span className="text-muted-foreground">Duration:</span> <strong>{foundPkg.duration}</strong></div>
              <div><span className="text-muted-foreground">Destination:</span> <strong>{foundDest.name}</strong></div>
              <div className="col-span-2">
                <span className="text-muted-foreground">Highlights:</span>{" "}
                <strong>{foundPkg.highlights.join(", ")}</strong>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-body">Full Name *</Label>
                <Input id="fullName" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="John Doe" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" required maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body">Phone / WhatsApp</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 700 000 000" maxLength={20} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelers" className="font-body">Number of Travelers</Label>
                <Input id="travelers" type="number" min="1" max="20" value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="travelDate" className="font-body">Preferred Travel Date *</Label>
                <Input id="travelDate" type="date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes" className="font-body">Special Requests or Questions</Label>
              <Textarea id="notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any dietary needs, accessibility requirements, or special requests..." rows={4} maxLength={1000} />
            </div>

            <div className="bg-muted rounded-lg p-4 text-sm font-body text-muted-foreground">
              <strong className="text-foreground">Payment Info:</strong> After we confirm availability, we'll send payment instructions via email. We accept bank transfer and mobile money.
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              Submit Booking Request
            </Button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
};

export default BookingPage;
