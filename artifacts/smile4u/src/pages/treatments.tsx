import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Stethoscope, Sparkles, Shield, Clock, Baby,
  Smile, Activity, Zap, ShieldCheck,
  HeartPulse, Syringe, Crown
} from "lucide-react";

const allServices = [
  { icon: Stethoscope, title: "Root Canal Treatment", description: "Pain-free, precision root canal therapy using rotary endodontics for long-lasting relief." },
  { icon: Sparkles, title: "Teeth Whitening", description: "Professional-grade whitening for a brighter, more confident smile in just one session." },
  { icon: HeartPulse, title: "Wisdom Tooth Removal", description: "Safe, gentle wisdom tooth extraction with minimal discomfort and fast recovery." },
  { icon: Shield, title: "Dental Implants", description: "Permanent, natural-looking implants anchored securely to restore your perfect bite." },
  { icon: Baby, title: "Pediatric Dentistry", description: "Gentle, child-friendly dental care designed to make your little ones love the dentist." },
  { icon: Crown, title: "Cosmetic Dentistry", description: "Smile makeovers, veneers, bonding, and aesthetic transformations for flawless teeth." },
  { icon: Activity, title: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and ensure optimal oral hygiene." },
  { icon: Smile, title: "Smile Makeover", description: "Comprehensive aesthetic transformation tailored specifically to your facial structure." },
  { icon: ShieldCheck, title: "Braces & Aligners", description: "Traditional metal braces and clear invisible aligners for perfectly straight teeth." },
  { icon: Zap, title: "Laser Dentistry", description: "Advanced laser treatments for high precision, less bleeding, and faster healing." },
  { icon: Clock, title: "Emergency Care", description: "Immediate, priority care for severe toothaches, injuries, and sudden dental emergencies." },
  { icon: Syringe, title: "Conscious Sedation", description: "Laughing gas and mild sedation options for a completely anxiety-free experience." },
];

export default function Treatments() {
  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold mb-6">World-Class Treatments</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive, specialized dental care utilizing advanced global technology for precise, pain-free results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
