import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, index, image }: ServiceCardProps) {
  if (image) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
        className="group relative bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
      >
        {/* Image with zoom */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-serif font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{description}</p>

          <Link href="/treatments">
            <div className="inline-flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all cursor-pointer">
              Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary transition-all duration-500" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="group relative bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 group-hover:bg-accent/5" />

      <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 relative z-10">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-serif font-bold mb-3 text-foreground relative z-10">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-sm">{description}</p>

      <Link href="/treatments">
        <div className="inline-flex items-center text-accent font-semibold text-sm group-hover:underline cursor-pointer relative z-10 gap-1 transition-all">
          Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary transition-all duration-500" />
    </motion.div>
  );
}
