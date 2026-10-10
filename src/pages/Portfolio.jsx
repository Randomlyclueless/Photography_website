import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowDown,
  FiArrowDownRight,
  FiArrowLeft,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import PageTransition from "../components/PageTransition";

const PHOTOS = [
  {
    id: 1,
    src: "/Images/chipkali.png",
    title: "A Closer Look",
    category: "Wildlife",
    description: "The intricate details of the natural world.",
    size: "tall",
  },
  {
    id: 2,
    src: "/Images/flamingo.png",
    title: "Wings at Golden Hour",
    category: "Wildlife",
    description: "Movement and stillness beside the water.",
    size: "wide",
  },
  {
    id: 3,
    src: "/Images/flamingo2.png",
    title: "Together in Stillness",
    category: "Wildlife",
    description: "A quiet moment reflected in the water.",
    size: "normal",
  },
  {
    id: 4,
    src: "/Images/ajoba.png",
    title: "A Moment on the Street",
    category: "Street",
    description: "Finding stories in everyday life.",
    size: "wide",
  },
  {
    id: 5,
    src: "/Images/gargi.png",
    title: "Colour After Dark",
    category: "Portraits",
    description: "Portraiture through colour, light, and expression.",
    size: "tall",
  },
  {
    id: 6,
    src: "/Images/lady_2.png",
    title: "The Little Details",
    category: "Weddings",
    description: "Celebrating the details that make a moment personal.",
    size: "normal",
  },
  {
    id: 7,
    src: "/Images/lady_smiling.png",
    title: "A Joyful Frame",
    category: "Weddings",
    description: "Natural expressions and unforgettable celebrations.",
    size: "tall",
  },
  {
    id: 8,
    src: "/Images/ajji.jpg",
    title: "Stories in Every Line",
    category: "Portraits",
    description: "Character, expression, and lived experience.",
    size: "normal",
  },
  {
    id: 9,
    src: "/Images/bug.png",
    title: "Small Worlds",
    category: "Wildlife",
    description: "A closer perspective on the smallest subjects.",
    size: "normal",
  },
  {
    id: 10,
    src: "/Images/speed.jpg",
    title: "In Motion",
    category: "Automotive",
    description: "Form, texture, and mechanical detail.",
    size: "wide",
  },
  {
    id: 11,
    src: "/Images/soap.jpg",
    title: "The Art of Objects",
    category: "Commercial",
    description: "Product photography with a focus on form and light.",
    size: "normal",
  },
];

const CATEGORIES = [
  "All work",
  "Wildlife",
  "Portraits",
  "Weddings",
  "Street",
  "Automotive",
  "Commercial",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All work") return PHOTOS;

    return PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const showPrevious = () => {
    if (!selectedPhoto || filteredPhotos.length === 0) return;

    const index = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id,
    );

    const previous =
      filteredPhotos[
        (index - 1 + filteredPhotos.length) % filteredPhotos.length
      ];

    setSelectedPhoto(previous);
  };

  const showNext = () => {
    if (!selectedPhoto || filteredPhotos.length === 0) return;

    const index = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id,
    );

    const next = filteredPhotos[(index + 1) % filteredPhotos.length];

    setSelectedPhoto(next);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-secondary text-dark">
        {/* Editorial introduction */}
        <section className="relative overflow-hidden bg-primary px-5 pb-16 pt-36 text-secondary sm:px-10 sm:pb-20 md:pt-40 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full border border-secondary/10"
          />

          <div className="relative mx-auto max-w-[1400px]">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent"
            >
              The art & beyond
            </motion.p>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <h1 className="font-serif text-[clamp(4rem,10vw,9rem)] font-normal leading-[0.8] tracking-[-0.06em]">
                  The art
                  <br />& beyond<span className="text-coral">.</span>
                </h1>
              </motion.div>

              {/* Description moved closer to the heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="lg:col-span-4 lg:col-start-8 lg:pb-2 lg:pl-2"
              >
                <p className="max-w-md text-sm leading-7 text-secondary/75">
                  Five years of looking closer, chasing light, and finding
                  stories in unexpected places. Explore the world through Tanay
                  Kardile&apos;s lens.
                </p>

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-secondary/50">
                  Wildlife · Portraits · Celebrations · More
                </p>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-secondary/20 pt-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-secondary/60">
                Selected photographs
              </span>

              <a
                href="#portfolio-gallery"
                className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-accent transition-colors hover:text-secondary"
              >
                Explore the collection
                <FiArrowDown size={13} />
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio gallery */}
        <section
          id="portfolio-gallery"
          className="px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1400px]">
            {/* Category filters */}
            <div className="mb-10 flex flex-wrap gap-2 sm:mb-14">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`border px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors sm:px-5 ${
                    activeCategory === category
                      ? "border-primary bg-primary text-secondary"
                      : "border-dark/15 text-dark/65 hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Responsive gallery */}
            <motion.div
              layout
              className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo, index) => (
                  <motion.article
                    layout
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.025,
                    }}
                    className={`group ${
                      photo.size === "tall"
                        ? "lg:mt-12"
                        : photo.size === "wide"
                          ? "sm:col-span-2 lg:col-span-2"
                          : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedPhoto(photo)}
                      className="block w-full text-left"
                      aria-label={`View ${photo.title}`}
                    >
                      <div
                        className={`relative overflow-hidden bg-primary/10 ${
                          photo.size === "wide"
                            ? "aspect-[16/9]"
                            : photo.size === "tall"
                              ? "aspect-[3/4]"
                              : "aspect-[4/5]"
                        }`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-secondary text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <FiArrowDownRight size={20} />
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4 border-b border-dark/15 py-4">
                        <div>
                          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-primary">
                            {photo.category}
                          </p>

                          <h2 className="font-serif text-2xl leading-tight sm:text-3xl">
                            {photo.title}
                          </h2>

                          <p className="mt-2 max-w-sm text-xs leading-5 text-dark/55">
                            {photo.description}
                          </p>
                        </div>

                        <span className="mt-1 shrink-0 text-[10px] text-dark/40">
                          {String(photo.id).padStart(2, "0")}
                        </span>
                      </div>
                    </button>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredPhotos.length === 0 && (
              <p className="py-16 text-center font-serif text-2xl">
                More photographs coming soon.
              </p>
            )}
          </div>
        </section>

        {/* About Tanay */}
        <section className="bg-primary px-5 py-16 text-secondary sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
                Behind the photographs
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
                A camera, a point of view, and a thousand stories.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm leading-7 text-secondary/70">
                From the intricacies of macro photography to the emotion of
                portraits and the unpredictability of wildlife, Tanay explores
                different worlds through his camera. His work is driven by
                observation, patience, and a desire to preserve moments worth
                remembering.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent transition-colors hover:text-secondary"
              >
                More about Tanay
                <FiArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 border-b border-dark/15 pb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                Have a project in mind?
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
                Let&apos;s make something
                <br />
                worth remembering.
              </h2>
            </div>

            <a
              href="mailto:tanaykardile@gmail.com"
              className="inline-flex w-fit items-center gap-5 bg-coral px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-primary"
            >
              Contact Tanay
              <FiArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* Photograph lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 p-4 sm:p-8"
              onClick={() => setSelectedPhoto(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Photograph viewer"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photograph"
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-dark"
              >
                <FiX size={22} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-dark sm:left-6"
              >
                <FiArrowLeft size={20} />
              </button>

              <div
                className="flex max-h-[90vh] max-w-6xl flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[76vh] max-w-full object-contain"
                />

                <div className="mt-4 flex w-full items-end justify-between gap-5 text-white">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-accent">
                      {selectedPhoto.category}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl sm:text-3xl">
                      {selectedPhoto.title}
                    </h3>
                  </div>

                  <span className="text-xs text-white/60">
                    {filteredPhotos.findIndex(
                      (photo) => photo.id === selectedPhoto.id,
                    ) + 1}{" "}
                    / {filteredPhotos.length}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-dark sm:right-6"
              >
                <FiArrowRight size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
}
