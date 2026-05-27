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
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/15 hover:border-white/25 hover:bg-white/15 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-5">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-white/20" />
      </div>

      <p className="text-white/85 text-base italic leading-relaxed mb-6 flex-grow">
        "{quote}"
      </p>

      <div className="mt-auto border-t border-white/15 pt-4">
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-white/60 mt-0.5">
          {location} &bull;{" "}
          <span className="text-primary font-medium">{treatment}</span>
        </div>
      </div>
    </motion.div>
  );
}
