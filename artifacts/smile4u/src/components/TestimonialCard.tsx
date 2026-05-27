import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  treatment: string;
  quote: string;
  index?: number;
}

export function TestimonialCard({ name, location, treatment, quote, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-primary/20" />
      </div>
      
      <p className="text-muted-foreground text-lg italic leading-relaxed mb-8 flex-grow">
        "{quote}"
      </p>
      
      <div className="mt-auto">
        <div className="font-bold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{location} • {treatment}</div>
      </div>
    </motion.div>
  );
}
