import { useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiCamera } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-dark/98 flex flex-col justify-between p-6 md:p-12 text-secondary">
      {/* Top bar */}
      <div className="flex justify-between items-center w-full z-10">
        <div>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent font-semibold block mb-1">
            {currentImage.category}
          </span>
          <h4 className="font-serif text-xl md:text-2xl tracking-wide font-light">
            {currentImage.title}
          </h4>
        </div>
        <button
          onClick={onClose}
          className="p-3 text-secondary hover:text-accent border border-secondary/10 hover:border-accent transition-all duration-300 rounded-full"
          aria-label="Close Lightbox"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-grow flex items-center justify-center py-4 w-full h-[60vh] md:h-[70vh]">
        {/* Navigation buttons */}
        <button
          onClick={onPrev}
          className="absolute left-2 md:left-4 p-3 bg-dark/40 hover:bg-dark/80 text-secondary hover:text-accent rounded-full border border-secondary/5 z-10 transition-colors"
          aria-label="Previous Image"
        >
          <FiChevronLeft size={24} />
        </button>

        <motion.img
          key={currentImage.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-[85%] max-h-full object-contain shadow-2xl"
        />

        <button
          onClick={onNext}
          className="absolute right-2 md:right-4 p-3 bg-dark/40 hover:bg-dark/80 text-secondary hover:text-accent rounded-full border border-secondary/5 z-10 transition-colors"
          aria-label="Next Image"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Bottom specs and metadata overlay */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6 pt-4 border-t border-secondary/10 z-10">
        {/* Location */}
        <div className="flex items-center space-x-2 text-secondary/60 text-xs tracking-wider font-sans font-light">
          <FiMapPin className="text-accent" />
          <span>{currentImage.location}</span>
        </div>

        {/* Camera specs */}
        {currentImage.specs && (
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-x-6 gap-y-2 text-secondary/50 text-[9px] sm:text-[10px] tracking-[0.2em] font-sans uppercase font-medium">
            <div className="flex items-center space-x-2">
              <FiCamera className="text-accent" size={14} />
              <span>{currentImage.specs.camera}</span>
            </div>
            <div>LENS: {currentImage.specs.lens}</div>
            <div>EXP: {currentImage.specs.shutter} @ {currentImage.specs.aperture}</div>
            <div>ISO: {currentImage.specs.iso}</div>
          </div>
        )}
      </div>
    </div>
  );
}
