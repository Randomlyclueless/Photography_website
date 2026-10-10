import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80", // Wedding
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80", // Travel
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=80", // Fashion
  "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1920&q=80"  // Wildlife
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Tanay%2C%20I%20would%20love%20to%20book%20a%20photography%20session%20with%20you%21";

  // Framer Motion reveal variants
  const revealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: custom * 0.25
      }
    })
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      
      {/* Background Ken Burns Zoom Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentSlide]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-secondary">
        
        {/* Brand Label */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="font-sans text-[11px] sm:text-xs tracking-[0.4em] uppercase text-accent font-semibold mb-4"
        >
          Frames by Tanay
        </motion.p>

        {/* Primary Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="font-serif text-4xl sm:text-6xl md:text-8xl font-normal leading-[1.1] mb-6 tracking-wide"
        >
          Because Every Moment <br /> Has a Story.
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="font-sans text-sm sm:text-lg text-secondary/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
        >
          Capturing timeless moments through light, emotion, and perspective.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-dark hover:bg-secondary transition-all duration-300 font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:shadow-2xl hover:scale-[1.02]"
          >
            Explore Portfolio
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-secondary text-secondary hover:bg-secondary hover:text-dark transition-all duration-300 font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:scale-[1.02]"
          >
            Book a Shoot
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 z-10 text-secondary/60 flex flex-col items-center select-none cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase mb-2">Scroll Down</span>
        <FiArrowDown size={14} className="text-accent" />
      </motion.div>
    </section>
  );
}
