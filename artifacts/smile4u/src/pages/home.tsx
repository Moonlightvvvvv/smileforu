import { HeroSection } from "@/components/HeroSection";
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, Stethoscope, Sparkles, Shield, Baby,
  Smile, Activity, Syringe, CheckCircle2,
  Smile as SmileIcon, Zap, Crown,
  HeartPulse, Users, Award, Star
} from "lucide-react";

import doctor1 from "@/assets/doctor1.png";
import doctor2 from "@/assets/doctor2.png";
import doctor3 from "@/assets/doctor3.png";
import doctor4 from "@/assets/doctor4.png";

import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";

const stats = [
  { end: 30587, label: "Happy Smiles Created", icon: SmileIcon },
  { end: 18256, label: "Root Canal Treatments", icon: Stethoscope },
  { end: 11254, label: "Milk Teeth Treated", icon: Baby },
  { end: 1282,  label: "Teeth Extracted", icon: Activity },
  { end: 2681,  label: "Dental Implants", icon: Shield },
  { end: 4528,  label: "Dental Braces", icon: HeartPulse },
  { end: 1589,  label: "Clear Aligners", icon: Crown },
  { end: 5,     label: "Specialized Dentists", icon: Users, suffix: "+" },
];

const featuredServices = [
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description: "Pain-free, precision root canal therapy using rotary endodontics for lasting relief.",
    image: gallery4,
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional-grade whitening for a brighter, more confident smile in just one session.",
    image: gallery2,
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Permanent, natural-looking implants anchored securely for the perfect bite.",
    image: gallery5,
  },
  {
    icon: Baby,
    title: "Pediatric Dental Care",
    description: "Gentle, child-friendly dentistry designed to make your little ones love the dentist.",
    image: gallery1,
  },
  {
    icon: Syringe,
    title: "Conscious Sedation",
    description: "Laughing gas sedation for completely anxiety-free dental experiences for all ages.",
    image: gallery6,
  },
  {
    icon: Smile,
    title: "Smile Makeover",
    description: "Comprehensive aesthetic transformation tailored to your facial structure and goals.",
    image: gallery3,
  },
];

const doctors = [
  {
    name: "Dr. Sajid S. Shaikh",
    degree: "MDS",
    specialization: "Prosthodontist & Implantologist",
    credentials: "NYU New York Cosmetic Dentistry • Italy Basal Implantology",
    image: doctor3,
  },
  {
    name: "Dr. Warisha Sajid",
    degree: "MDS",
    specialization: "Paediatric & Preventive Dentist",
    credentials: "Specialist in Children's Dental Care",
    image: doctor2,
  },
  {
    name: "Dr. Aarti Jagtap",
    degree: "MDS",
    specialization: "Orthodontist",
    credentials: "Braces & Clear Aligner Specialist",
    image: doctor4,
  },
  {
    name: "Dr. Shabista Farooqui",
    degree: "MDS",
    specialization: "Periodontist & Implantologist",
    credentials: "Gum Specialist & Implant Expert",
    image: doctor1,
  },
];

const testimonials = [
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
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
              Our Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Numbers That Speak</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <StatsCounter key={i} end={stat.end} label={stat.label} icon={stat.icon} suffix={stat.suffix ?? "+"} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Services Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
              Quality Services
            </span>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The services provided by Smile 4U Family Dental Clinic include regular oral checkups, 
              teeth cleaning, fillings and restorations, root canal treatment, fixed teeth, 
              removable teeth, complete dentures, dental implants, pediatric dental care, 
              orthodontic treatment, laser dentistry, cosmetic dentistry, and superspecialized consultations — 
              all delivered under one roof with international standards of care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
                Est. 2007
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Redefining Dental Care in Mumbai
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For 17+ years, Smile 4U Family Dental Clinic has been synonymous with trust, precision, 
                and luxury in dental healthcare. We combine international standards, imported equipment, 
                and the expertise of highly specialized MDS doctors to deliver life-changing results.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Imported, state-of-the-art equipment",
                  "All treatments under one roof",
                  "5 highly specialized MDS doctors",
                  "International-standard sterilization protocols",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-accent text-accent hover:bg-accent hover:text-white">
                  Discover Our Story
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl shadow-lg ${i === 0 ? "row-span-1" : ""}`}>
                  <img src={img} alt="Clinic" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
                Our Treatments
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">World-Class Treatments</h2>
              <p className="text-lg text-muted-foreground">From routine checkups to full mouth rehabilitation — pain-free dentistry using the latest global technologies.</p>
            </div>
            <Link href="/treatments">
              <Button className="rounded-full gap-2 bg-accent hover:bg-accent/90 text-white shrink-0">
                View All 14 Treatments <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
              Meet The Team
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Specialist Doctors</h2>
            <p className="text-lg text-muted-foreground">
              Each doctor is an MDS postgraduate specialist — masters of their craft — ensuring you receive the finest standard of dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} index={index} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 to-primary/90" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">
              Patient Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Stories of Transformation</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the thousands whose smiles and lives have been transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <TestimonialCard key={index} index={index} {...test} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white hover:text-foreground rounded-full px-8">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards / Trust Row */}
      <section className="py-16 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
            {[
              { icon: Award, label: "17+ Years of Excellence" },
              { icon: Star, label: "30,000+ Happy Patients" },
              { icon: Shield, label: "International Standards" },
              { icon: Users, label: "5 MDS Specialists" },
              { icon: Zap, label: "Advanced Laser Dentistry" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-accent via-accent/90 to-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready for Your Dream Smile?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards perfect oral health in a truly premium environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6 font-semibold" data-testid="home-cta-book">
                Book Appointment
              </Button>
            </Link>
            <a
              href="https://wa.me/918299219918?text=Hello%20Smile%204U%20Family%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="home-cta-whatsapp"
            >
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-transparent text-white border-white/40 hover:bg-white hover:text-accent font-semibold">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
