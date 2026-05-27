import { motion } from "framer-motion";

interface DoctorCardProps {
  name: string;
  degree: string;
  specialization: string;
  credentials: string;
  image: string;
  index: number;
}

export function DoctorCard({ name, degree, specialization, credentials, image, index }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Degree badge */}
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {degree}
        </div>
      </div>

      <div className="p-6 text-center relative bg-white group-hover:-translate-y-3 transition-transform duration-500 rounded-t-3xl -mt-6 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-serif font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-semibold text-sm mb-3">{specialization}</p>
        <div className="h-px w-10 bg-primary/30 mx-auto mb-3" />
        <p className="text-xs text-muted-foreground/80 leading-relaxed">{credentials}</p>
      </div>
    </motion.div>
  );
}
