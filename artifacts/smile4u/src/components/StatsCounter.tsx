import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
  icon?: LucideIcon;
  prefix?: string;
}

export function StatsCounter({ end, label, suffix = "+", duration = 2.5, icon: Icon, prefix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const totalFrames = duration * 60;
      const step = end / totalFrames;
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group text-center p-6 rounded-2xl bg-white border border-border/60 shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300"
    >
      {Icon && (
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">
        <span className="text-accent">{prefix}</span>
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-tight">
        {label}
      </div>
    </motion.div>
  );
}
