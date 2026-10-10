import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowRight, FiInstagram } from "react-icons/fi";

const PHOTOS = {
  creative: "/Images/gargi.png",
  macro: "/Images/bug.png",
  bridal: "/Images/lady_2.png",
  bride: "/Images/lady_smiling.png",
  portrait: "/Images/ajji.jpg",
  automotive: "/Images/speed.jpg",
  product: "/Images/soap.jpg",
  reptile: "/Images/chipkali.png",
  bird: "/Images/flamingo.png",
  birds: "/Images/flamingo2.png",
  street: "/Images/ajoba.png",
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Photo({ src, alt, className = "", loading = "lazy" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919876543210?text=Hi%20Tanay%2C%20I%20would%20love%20to%20book%20a%20photography%20session.";

  return (
    <section className="bg-secondary p-2 pt-20 sm:p-4 sm:pt-24 lg:p-6 lg:pt-24">
      <div className="mx-auto max-w-[1600px] overflow-hidden bg-primary text-secondary">
        {/* Editorial hero composition */}
        <div className="relative grid grid-cols-1 lg:min-h-[690px] lg:grid-cols-12">
          {/* Main photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="relative order-1 h-[420px] sm:h-[560px] lg:col-span-8 lg:h-[690px]"
          >
            <Photo
              src={PHOTOS.creative}
              alt="Creative portrait photographed by Tanay"
              loading="eager"
              className="object-cover object-center"
            />

            {/* Image treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-primary/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary/25" />

            {/* Small editorial label */}
            <div className="absolute left-5 top-5 sm:left-9 sm:top-9">
              <span className="border border-white/50 bg-primary/20 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                Behind the lens
              </span>
            </div>

            {/* Floating yellow badge */}
            <motion.div
              initial={{ scale: 0.65, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="absolute right-5 top-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-accent text-center text-primary sm:right-10 sm:top-10 sm:h-28 sm:w-28 lg:-right-12 lg:top-16 lg:z-20"
            >
              <span className="text-[8px] font-bold uppercase leading-4 tracking-[0.15em]">
                Moments
                <br />
                worth keeping
              </span>
              <FiArrowRight className="mt-1 -rotate-45" size={17} />
            </motion.div>

            {/* Main heading on image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={0.2}
              className="absolute bottom-7 left-5 max-w-[95%] sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12 lg:max-w-[620px]"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/85">
                Frames by Tanay presents
              </p>

              <h1 className="font-serif text-[clamp(3.7rem,9vw,8rem)] font-normal leading-[0.78] tracking-[-0.055em] text-white">
                Life,
                <br />
                in a frame<span className="text-accent">.</span>
              </h1>

              <p className="mt-5 max-w-sm text-xs leading-6 text-white/85 sm:text-sm">
                People, places, and fleeting moments. Captured with feeling,
                remembered forever.
              </p>
            </motion.div>
          </motion.div>

          {/* Right olive editorial panel */}
          <aside className="relative order-2 flex flex-col justify-between gap-8 px-6 py-9 sm:px-10 lg:col-span-4 lg:px-8 lg:py-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={0.3}
            >
              <p className="mb-3 font-serif text-5xl leading-none text-coral">
                “
              </p>

              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Not just photographs.
                <br />
                <span className="italic text-accent">
                  Little pieces of life.
                </span>
              </h2>

              <p className="mt-4 max-w-xs text-xs leading-6 text-secondary/70">
                Every photograph tells a different story. Explore mine through
                portraits, celebrations, nature, and the details we often miss.
              </p>
            </motion.div>

            {/* Bridal photograph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-[1fr_auto] items-end gap-4"
            >
              <Link
                to="/portfolio"
                className="group relative block h-[260px] overflow-hidden sm:h-[340px] lg:h-[340px]"
              >
                <Photo src={PHOTOS.bridal} alt="Traditional bridal portrait" />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/70">
                    Selected work
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Portraits
                  </p>
                </div>

                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-hover:rotate-45">
                  <FiArrowRight size={17} />
                </span>
              </Link>

              <div className="flex flex-col items-center gap-4 pb-1">
                <span className="h-12 w-px bg-secondary/30" />
                <a
                  href="https://www.instagram.com/random_clicks.dng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-secondary/40 transition-colors hover:border-accent hover:text-accent"
                >
                  <FiInstagram size={18} />
                </a>
                <span className="h-12 w-px bg-secondary/30" />
              </div>
            </motion.div>

            {/* Contact block */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-coral px-5 py-5 text-white transition-colors hover:bg-secondary hover:text-primary sm:px-6"
            >
              <span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Have a story to tell?
                </span>
                <span className="mt-1 block font-serif text-2xl sm:text-3xl">
                  Let's create.
                </span>
              </span>

              <FiArrowRight
                size={23}
                className="shrink-0 transition-transform group-hover:translate-x-2"
              />
            </a>
          </aside>

          {/* Dark bottom strip */}
          <div className="order-3 grid grid-cols-1 gap-6 border-t border-secondary/10 bg-dark px-5 py-7 sm:px-9 sm:py-8 lg:col-span-12 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-10">
            <div className="lg:col-span-4">
              <p className="max-w-sm font-serif text-2xl leading-tight text-accent sm:text-3xl">
                The world is full of things worth noticing.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
              aria-label="Scroll to explore the website"
              className="group flex h-20 w-20 flex-col items-center justify-center rounded-full border border-secondary/35 transition-colors hover:border-accent hover:text-accent lg:col-span-2 lg:mx-auto"
            >
              <span className="text-[8px] uppercase tracking-[0.14em]">
                Scroll down
              </span>
              <FiArrowDown
                className="mt-2 transition-transform group-hover:translate-y-1"
                size={15}
              />
            </button>

            {/* Three real portfolio categories */}
            <div className="grid grid-cols-3 gap-3 lg:col-span-6">
              <Link to="/portfolio" className="group">
                <div className="aspect-[4/5] overflow-hidden">
                  <Photo
                    src={PHOTOS.portrait}
                    alt="Environmental portrait"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-secondary/75 sm:text-[9px]">
                  People
                </p>
              </Link>

              <Link to="/portfolio" className="group">
                <div className="aspect-[4/5] overflow-hidden">
                  <Photo
                    src={PHOTOS.macro}
                    alt="Macro insect photography"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-secondary/75 sm:text-[9px]">
                  Nature
                </p>
              </Link>

              <Link to="/portfolio" className="group">
                <div className="aspect-[4/5] overflow-hidden">
                  <Photo
                    src={PHOTOS.automotive}
                    alt="Motorcycle detail photography"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-secondary/75 sm:text-[9px]">
                  Details
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
