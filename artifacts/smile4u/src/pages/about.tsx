import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";
import clinicImg from "@/assets/gallery6.png";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Legacy of Excellence</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Established in 2007, Smile 4U has been the cornerstone of premium dental care in Mumbai, combining international medical standards with compassionate family dentistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={clinicImg} alt="Smile 4U Clinic" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif font-bold">17 Years of Transforming Lives</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a vision to bring world-class dentistry to Mumbai has grown into a trusted institution. We believe that premium healthcare shouldn't be intimidating — it should be a calming, empowering experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clinic is equipped with the finest imported technology, operated by highly specialized MDS doctors. Every treatment protocol strictly adheres to international sterilization and clinical guidelines.
              </p>
              <div className="pt-6">
                <div className="flex gap-4 items-center border-l-4 border-primary pl-6 py-2">
                  <p className="text-xl font-serif font-medium italic text-foreground">
                    "Our mission is to deliver flawless, pain-free dental care that makes every patient proud to smile."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">The Smile 4U Difference</h2>
            <p className="text-lg text-muted-foreground">We don't just treat teeth; we care for people. Here's why thousands of families trust us.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "International Standards", desc: "Global protocols for safety, hygiene, and treatment excellence." },
              { icon: Users, title: "MDS Specialists", desc: "A team of highly qualified experts for every specific dental need." },
              { icon: CheckCircle2, title: "Imported Equipment", desc: "State-of-the-art machinery for precise, pain-free treatments." },
              { icon: Heart, title: "Compassionate Care", desc: "A luxurious, calming environment designed to eliminate dental anxiety." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
