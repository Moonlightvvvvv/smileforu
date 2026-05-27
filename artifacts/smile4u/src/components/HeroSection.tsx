import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "wouter";
import heroImg from "@/assets/hero.png";
import { Star, ShieldCheck, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Premium Dental Care in Mumbai
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Your Perfect Smile <br/>
              <span className="text-primary">Awaits You.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience world-class dentistry with imported equipment, highly specialized doctors, and a luxurious calming environment. Since 2007.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-base px-8 py-6 shadow-lg shadow-primary/20">
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/918299219918?text=Hello" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 bg-white/50 backdrop-blur-sm border-border hover:bg-white/80">
                  WhatsApp Now
                </Button>
              </a>
              <a href="tel:+918299219918">
                <Button size="lg" variant="ghost" className="rounded-full text-base px-8 py-6">
                  Call Clinic
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">17+ Years</div>
                  <div className="text-xs text-muted-foreground">Excellence</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">10,000+</div>
                  <div className="text-xs text-muted-foreground">Happy Smiles</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">6 MDS</div>
                  <div className="text-xs text-muted-foreground">Specialists</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
