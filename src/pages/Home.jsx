import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Hero from "../components/Hero";
import PageTransition from "../components/PageTransition";

const featured = [
  {
    title: "Wild at Heart",
    category: "Wildlife",
    image: "/Images/flamingo.png",
    size: "wide",
  },
  {
    title: "Expressions",
    category: "Portraits",
    image: "/Images/gargi.png",
    size: "normal",
  },
  {
    title: "Little Details",
    category: "Macro",
    image: "/Images/chipkali.png",
    size: "normal",
  },
  {
    title: "Stories of Celebration",
    category: "Weddings",
    image: "/Images/lady_smiling.png",
    size: "wide",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <main className="bg-secondary text-dark">
        <Hero />

        <section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  A few favourites
                </p>
                <h2 className="font-serif text-5xl leading-tight sm:text-7xl">
                  Through my lens<span className="text-coral">.</span>
                </h2>
              </div>

              <Link
                to="/portfolio"
                className="flex w-fit items-center gap-3 border-b border-primary pb-2 text-[10px] font-bold uppercase tracking-[0.15em] hover:text-primary"
              >
                View all photographs
                <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
              {featured.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group ${
                    item.size === "wide" ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  <Link to="/portfolio" className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-primary/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-end justify-between border-b border-dark/15 py-4">
                      <div>
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                          {item.category}
                        </p>
                        <h3 className="font-serif text-3xl sm:text-4xl">
                          {item.title}
                        </h3>
                      </div>
                      <FiArrowRight className="mb-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-20 text-secondary sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                The person behind the camera
              </p>
              <h2 className="font-serif text-5xl leading-tight sm:text-7xl">
                More than a photograph.
                <br />A feeling to remember.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-sm leading-8 text-secondary/75">
                From the smallest details in nature to the expressions that make
                a portrait unforgettable, photography is my way of noticing the
                world. I explore wildlife, portraits, events, and commercial
                work through a personal and curious perspective.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-accent hover:text-secondary"
              >
                Discover my story
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                Have a story to tell?
              </p>
              <h2 className="font-serif text-5xl leading-tight sm:text-7xl">
                Let's create something
                <br />
                worth remembering.
              </h2>
            </div>

            <Link
              to="/contact"
              className="flex w-fit items-center gap-4 bg-coral px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-primary"
            >
              Start a conversation
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
