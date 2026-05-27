import { Phone, MessageCircle } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:+918299219918" 
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-medium"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a 
        href="https://wa.me/918299219918?text=Hello%20Smile%204U%20Family%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-medium"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
