import { useEffect, useState, useRef } from "react";
import { BUSINESS_STATS } from "../data/siteData";

function Counter({ target, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        if (countRef.current) observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalMiliseconds = duration;
    // Cap step interval to make it smooth
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // dynamic increments for higher numbers
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={countRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function BusinessStats() {
  return (
    <section className="bg-charcoal text-secondary py-20 border-y border-secondary/5 relative overflow-hidden">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[15vw] font-serif text-secondary/[0.01] pointer-events-none select-none tracking-[0.2em]">
        STATS
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 text-center">
          {BUSINESS_STATS.map((stat, index) => (
            <div key={index} className="space-y-2 group">
              <h3 className="text-4xl md:text-5xl font-light text-accent tracking-tight font-serif group-hover:text-secondary transition-colors duration-300">
                <Counter target={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="font-sans text-[10px] tracking-[0.25em] text-secondary/40 uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
