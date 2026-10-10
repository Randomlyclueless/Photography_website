import { useState } from "react";
import { FAQS } from "../data/siteData";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-secondary text-dark border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-6">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block text-center">
          FAQ
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-16 tracking-wide text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="border-b border-dark/10 pb-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left py-2 font-serif text-lg md:text-xl tracking-wide text-primary hover:text-accent transition-colors focus:outline-none"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <span className="text-accent flex-shrink-0">
                    {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 font-sans text-xs sm:text-sm text-dark/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
