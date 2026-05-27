import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Sparkles, Shield, Baby, Smile, Activity,
  Syringe, Crown, Zap, HeartPulse, ClipboardCheck,
  Wrench, AlignCenter, Layers
} from "lucide-react";

import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";

const allServices = [
  {
    icon: ClipboardCheck,
    title: "Regular Oral Checkups",
    description: "Comprehensive oral health examinations to detect issues early and maintain optimal dental wellness. Recommended every 6 months for preventive care.",
    image: gallery1,
    tag: "Preventive",
  },
  {
    icon: Activity,
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to remove stubborn plaque, tartar, and surface stains. Leaves your teeth visibly cleaner and breath fresher.",
    image: gallery2,
    tag: "Preventive",
  },
  {
    icon: Wrench,
    title: "Fillings & Restorations",
    description: "Tooth-coloured composite and ceramic fillings that restore decayed or damaged teeth with natural aesthetics and durable strength.",
    image: gallery3,
    tag: "Restorative",
  },
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description: "Pain-free, precision root canal therapy using advanced rotary endodontics. Saves infected teeth from extraction with lasting results.",
    image: gallery4,
    tag: "Restorative",
  },
  {
    icon: Layers,
    title: "Fixed Teeth",
    description: "Permanent crowns and bridges that replace missing or severely damaged teeth with a strong, natural-looking, and comfortable fixed solution.",
    image: gallery5,
    tag: "Prosthetic",
  },
  {
    icon: Smile,
    title: "Removable Teeth",
    description: "Custom-crafted removable partial dentures designed for comfort and aesthetics, restoring function and confidence to your smile.",
    image: gallery6,
    tag: "Prosthetic",
  },
  {
    icon: HeartPulse,
    title: "Complete Dentures",
    description: "Full upper and lower dentures fabricated with precision for a secure fit, natural appearance, and comfortable everyday use.",
    image: gallery7,
    tag: "Prosthetic",
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Titanium implants permanently anchored to the jawbone, providing the gold standard in tooth replacement with natural look, feel, and function.",
    image: gallery8,
    tag: "Implantology",
  },
  {
    icon: Baby,
    title: "Pediatric Dental Care",
    description: "Gentle, child-friendly dentistry in a warm, calming environment. Preventive care, fluoride treatments, and cavity management for children of all ages.",
    image: gallery1,
    tag: "Paediatric",
  },
  {
    icon: Crown,
    title: "Extractions",
    description: "Safe, gentle tooth extractions — from simple cases to complex surgical procedures — performed with precise technique to minimize discomfort and recovery time.",
    image: gallery2,
    tag: "Oral Surgery",
  },
  {
    icon: Sparkles,
    title: "Instant Teeth Whitening",
    description: "Professional in-chair whitening delivering dramatically brighter results in a single session, using clinic-grade safe bleaching agents.",
    image: gallery3,
    tag: "Cosmetic",
  },
  {
    icon: AlignCenter,
    title: "Orthodontic Treatment",
    description: "Metal braces, ceramic braces, and crystal-clear invisible aligners to gradually straighten teeth and correct bites for a perfectly aligned smile.",
    image: gallery4,
    tag: "Orthodontics",
  },
  {
    icon: Zap,
    title: "Superspecialized Consultations",
    description: "Expert second opinions and advanced treatment planning from our team of MDS specialists across prosthodontics, periodontics, orthodontics, and more.",
    image: gallery5,
    tag: "Specialist Care",
  },
  {
    icon: Syringe,
    title: "Conscious Sedation",
    description: "Laughing gas (nitrous oxide) sedation for adults and children — enabling a calm, anxiety-free dental experience without the side effects of general anaesthesia.",
    image: gallery6,
    tag: "Sedation",
  },
];

const tagColors: Record<string, string> = {
  Preventive: "bg-green-50 text-green-700",
  Restorative: "bg-blue-50 text-blue-700",
  Prosthetic: "bg-purple-50 text-purple-700",
  Implantology: "bg-cyan-50 text-cyan-700",
  Paediatric: "bg-orange-50 text-orange-700",
  "Oral Surgery": "bg-red-50 text-red-700",
  Cosmetic: "bg-pink-50 text-pink-700",
  Orthodontics: "bg-indigo-50 text-indigo-700",
  "Specialist Care": "bg-amber-50 text-amber-700",
  Sedation: "bg-teal-50 text-teal-700",
};

export default function Treatments() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/8 to-background py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
              14 Specialist Treatments
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">World-Class Treatments</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive, specialized dental care under one roof — from preventive checkups to full smile transformations, all at international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="group bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[service.tag] ?? "bg-primary/10 text-primary"}`}>
                        {service.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-11 h-11 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/25">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <Link href="/contact">
                      <Button
                        size="sm"
                        className="rounded-full bg-accent hover:bg-accent/90 text-white text-xs px-5"
                        data-testid={`treatment-book-${index}`}
                      >
                        Book This Treatment
                      </Button>
                    </Link>
                  </div>

                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Not Sure Which Treatment You Need?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free consultation with one of our MDS specialists. We'll assess your needs and recommend the perfect treatment plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-white" data-testid="treatments-cta-book">
                  Book a Free Consultation
                </Button>
              </Link>
              <a
                href="https://wa.me/918299219918?text=Hello%20Smile%204U%20Family%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="treatments-cta-whatsapp"
              >
                <Button size="lg" variant="outline" className="rounded-full px-8 border-accent text-accent hover:bg-accent hover:text-white">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
