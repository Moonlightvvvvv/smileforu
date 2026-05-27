import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918299219918?text=Hello%20Smile%204U%20Family%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Contact on WhatsApp"
      data-testid="whatsapp-floating-button"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
