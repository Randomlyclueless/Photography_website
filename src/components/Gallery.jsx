import { useState } from "react";
import { CATEGORIES, PORTFOLIO_ITEMS } from "../data/siteData";
import ImageLightbox from "./ImageLightbox";
import { motion, AnimatePresence } from "framer-motion";
import { FiCamera } from "react-icons/fi";

export default function Gallery({ limit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((img) => img.category === selectedCategory);

  // Slice image array if limit is active (featured elements on Home)
  const displayedImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      {!limit && (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-16 overflow-x-auto pb-4 max-w-5xl mx-auto px-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-[10px] tracking-[0.25em] font-sans uppercase transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-primary text-secondary border-primary"
                  : "bg-transparent text-dark/70 border-dark/10 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Images */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 px-4"
      >
        <AnimatePresence mode="popLayout">
          {displayedImages.map((img, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative break-inside-avoid group overflow-hidden bg-charcoal cursor-pointer border border-primary/5 shadow-md"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Luxury editorial hover overlay */}
              <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-secondary">
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-accent font-bold">
                  {img.category}
                </span>
                
                <div className="space-y-2 text-left">
                  <h4 className="font-serif text-xl font-light tracking-wide">
                    {img.title}
                  </h4>
                  <p className="font-sans text-[10px] tracking-wider text-secondary/60 flex items-center space-x-1.5">
                    <FiCamera size={12} className="text-accent" />
                    <span>{img.specs?.camera}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {displayedImages.length === 0 && (
        <div className="text-center py-20 font-serif text-xl font-light text-dark/40">
          No works in this category yet.
        </div>
      )}

      {/* Lightbox trigger wrapper */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={displayedImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
