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
      className="group bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8 text-center relative bg-white group-hover:-translate-y-4 transition-transform duration-500 rounded-t-3xl -mt-6">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{specialization}</p>
        <div className="h-px w-12 bg-border mx-auto mb-4" />
        <p className="text-sm font-semibold text-muted-foreground mb-1">{degree}</p>
        <p className="text-sm text-muted-foreground/80">{credentials}</p>
      </div>
    </motion.div>
  );
}
