import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { stats } from "@/data/siteData";

const useCountUp = (end: number, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
};

const StatItem = ({ label, value, suffix, inView }: { label: string; value: number; suffix: string; inView: boolean }) => {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-bg-subtle rounded-3xl border border-primary/10 p-12 lg:p-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
