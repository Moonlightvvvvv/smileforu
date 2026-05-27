import { HeroSection } from "@/components/HeroSection";
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Stethoscope, Sparkles, Shield, Clock } from "lucide-react";

import doctor1 from "@/assets/doctor1.png";
import doctor2 from "@/assets/doctor2.png";
import doctor3 from "@/assets/doctor3.png";
import doctor4 from "@/assets/doctor4.png";

const services = [
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description: "Pain-free, precision root canal therapy using rotary endodontics.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional-grade whitening for a brighter, more confident smile.",
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Permanent, natural-looking implants anchored securely.",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Immediate care for toothaches, injuries, and emergencies.",
  },
];

const doctors = [
  {
    name: "Dr. Sajid",
    degree: "BDS, MDS",
    specialization: "Prosthodontist & Implantologist",
    credentials: "17+ Years Experience",
    image: doctor3,
  },
  {
    name: "Dr. Warisha",
    degree: "BDS, MDS",
    specialization: "Pediatric Dentist",
    credentials: "12+ Years Experience",
    image: doctor2,
  },
  {
    name: "Dr. Aisha",
    degree: "BDS, MDS",
    specialization: "Endodontist",
    credentials: "10+ Years Experience",
    image: doctor4,
  },
  {
    name: "Dr. Rahul",
    degree: "BDS, MDS",
    specialization: "Orthodontist",
    credentials: "15+ Years Experience",
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCounter end={10000} label="Happy Smiles" />
            <StatsCounter end={5000} label="Root Canals" />
            <StatsCounter end={500} label="Implants" />
            <StatsCounter end={6} label="MDS Specialists" suffix="" />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Redefining Dental Care in Mumbai
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            Since 2007, Smile 4U has been synonymous with trust, precision, and luxury in dental healthcare. 
            We combine international standards, imported equipment, and the expertise of highly specialized 
            MDS doctors to deliver life-changing cosmetic and therapeutic results.
          </p>
          <Link href="/about">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Discover Our Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">World-Class Treatments</h2>
              <p className="text-lg text-muted-foreground">From routine checkups to full mouth rehabilitations, experience pain-free dentistry using the latest global technologies.</p>
            </div>
            <Link href="/treatments">
              <Button className="rounded-full gap-2">
                View All Treatments <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meet Our Specialists</h2>
            <p className="text-lg text-muted-foreground">Our team comprises highly qualified MDS specialists, each a master in their respective field, ensuring you receive the highest standard of care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} index={index} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070')] bg-cover bg-fixed bg-center relative">
        <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Stories of Transformation</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Don't just take our word for it. Hear from the thousands of patients whose smiles and lives have been transformed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <TestimonialCard key={index} index={index} {...test} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-foreground rounded-full">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready for Your Dream Smile?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards perfect oral health in a truly premium environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6">
                Book Appointment
              </Button>
            </Link>
            <a href="https://wa.me/918299219918?text=Hello" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-primary">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
