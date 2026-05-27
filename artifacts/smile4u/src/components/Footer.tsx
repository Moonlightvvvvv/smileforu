import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Smile 4U</h3>
            <p className="text-muted/80 mb-6 text-sm leading-relaxed">
              Premium family dental care in Mumbai since 2007. Experience world-class 
              treatments with advanced technology and highly specialized doctors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Gallery', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                    <div className="text-muted/80 hover:text-white transition-colors cursor-pointer text-sm">
                      {link}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Shop No.4, Siddique Sardar House, Near Karthika School, Opp. Sai Baba Building, New Hall Road, Kurla (W), Mumbai 400070</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918299219918" className="hover:text-white">+91 82992 19918</a>
                  <a href="tel:02225030850" className="hover:text-white">022 2503 0850</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:drsajidmds1@yahoo.com" className="hover:text-white">drsajidmds1@yahoo.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-muted/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-white">10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sunday</span>
                <span className="text-white">10:30 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-muted/60">
          <p>&copy; {new Date().getFullYear()} Smile 4U Family Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
