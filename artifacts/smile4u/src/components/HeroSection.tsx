import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "wouter";
import heroImg from "@/assets/hero.png";
import { Star, ShieldCheck, Award } from "lucide-react";

export function HeroSection() {
  const crimsonRed = "hsl(356 68% 47%)";

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/85 to-background/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold mb-6 border"
              style={{
                background: "hsl(356 68% 47% / 0.08)",
                color: "hsl(356 68% 47%)",
                borderColor: "hsl(356 68% 47% / 0.2)",
              }}
            >
              Premium Dental Care in Mumbai Since 2007
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.08] mb-6">
              Your Perfect Smile{" "}
              <br />
              <span style={{ color: crimsonRed }}>Awaits You.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Experience world-class dentistry with imported equipment, 5 highly specialized MDS doctors, and a luxurious calming environment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full text-base px-8 py-6 font-semibold shadow-xl"
                  data-testid="hero-book-appointment"
                >
                  Book Appointment
                </Button>
              </Link>
              <a
                href="https://wa.me/918299219918?text=Hello%20Smile%204U%20Family%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base px-8 py-6 bg-white/60 backdrop-blur-sm border-border hover:bg-white font-semibold"
                >
                  WhatsApp Now
                </Button>
              </a>
              <a href="tel:+918299219918" data-testid="hero-call">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full text-base px-8 py-6 hover:bg-white/60"
                >
                  Call Clinic
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center">
              {[
                { icon: Award, value: "17+ Years", label: "Excellence" },
                { icon: Star, value: "30,000+", label: "Happy Smiles" },
                { icon: ShieldCheck, value: "5 MDS", label: "Specialists" },
              ].map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "hsl(356 68% 47% / 0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "hsl(356 68% 47%)" }} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground leading-tight">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
