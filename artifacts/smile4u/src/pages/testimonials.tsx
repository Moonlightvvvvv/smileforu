import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/TestimonialCard";

const allTestimonials = [
  {
    name: "Priya K.",
    location: "Mumbai",
    treatment: "Dental Implants",
    quote: "Dr. Sajid transformed my smile completely. The implants look and feel like natural teeth! Highly recommend this clinic for premium care.",
  },
  {
    name: "Rahul M.",
    location: "Kurla",
    treatment: "Pediatric Care",
    quote: "My daughter used to fear dentists. Dr. Warisha made her love coming here. The environment is so calming and professional.",
  },
  {
    name: "Fatima A.",
    location: "Mumbai",
    treatment: "Root Canal",
    quote: "Best root canal experience ever — completely painless! The clinic is spotless and feels like a luxury medical spa.",
  },
  {
    name: "Aisha S.",
    location: "Bandra",
    treatment: "Teeth Whitening",
    quote: "The whitening results were incredible, I got compliments from everyone! The whole process was smooth and the staff was extremely polite.",
  },
  {
    name: "Vikram D.",
    location: "Andheri",
    treatment: "Wisdom Tooth Extraction",
    quote: "I was terrified of the extraction, but the team here made it so simple. Barely any pain, and recovery was surprisingly fast. World-class indeed.",
  },
  {
    name: "Meera T.",
    location: "Juhu",
    treatment: "Smile Makeover",
    quote: "The aesthetic transformation is beyond what I imagined. The attention to detail that Dr. Sajid puts into his work is unmatched in Mumbai.",
  },
  {
    name: "Anand R.",
    location: "Kurla",
    treatment: "General Checkup",
    quote: "I've been coming here with my family for 10 years. Trustworthy, honest, and they never recommend unnecessary treatments.",
  },
  {
    name: "Sanya P.",
    location: "Colaba",
    treatment: "Invisible Aligners",
    quote: "Started my aligner journey here. The digital scanning and planning were top-notch. I felt like I was in a high-tech tech startup, not a clinic!",
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20 pb-24 bg-muted/20">
      <section className="bg-primary/5 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Patient Stories</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real experiences from our patients. See why thousands of families trust us with their smiles.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((test, index) => (
            <TestimonialCard key={index} index={index} {...test} />
          ))}
        </div>
      </div>
    </div>
  );
}
