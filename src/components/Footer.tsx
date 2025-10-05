import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">PICC WIS</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Peninsula Weekend Islamic School - Planting the seeds of faith, knowledge, and friendships
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">1217 Todds Lane, Hampton VA 23666</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">Contact PICC for inquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">Payment via Zelle: PICC</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Programs</a></li>
              <li><a href="#register" className="opacity-90 hover:opacity-100 transition-opacity">Register</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Peninsula Islamic Community Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
