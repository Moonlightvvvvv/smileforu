import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function StatsCounter({ end, label, suffix = "+", duration = 2 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = end / (duration * 60);
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border shadow-sm"
    >
      <div className="text-4xl font-serif font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
