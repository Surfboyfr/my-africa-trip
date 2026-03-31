import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-3">
              The<span className="text-primary">Roam Circle</span>
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Curated African vacations for explorers, dreamers, and adventurers. Discover the continent like never before.
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Explore</h4>
            <div className="space-y-2">
              <Link to="/destinations" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Destinations</Link>
              <Link to="/how-it-works" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">How It Works</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:hello@roamcircle.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail size={14} /> hello@roamcircle.com
              </a>
              <a href="tel:+2348137110581" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone size={14} /> +234 813 711 0581
              </a>
              <a
                href="https://wa.me/2348137110581"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Legal</h4>
            <div className="space-y-2">
              <span className="block text-sm opacity-70">Terms of Service</span>
              <span className="block text-sm opacity-70">Privacy Policy</span>
              <span className="block text-sm opacity-70">Refund Policy</span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} The Roam Circle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
