import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <main className="bg-secondary text-dark">
        <section className="bg-primary px-5 pb-16 pt-36 text-secondary sm:px-10 sm:pb-20 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              The person behind the lens
            </p>

            <h1 className="font-serif text-6xl leading-[0.85] tracking-[-0.05em] sm:text-8xl lg:text-9xl">
              Looking closer.
              <br />
              Seeing differently<span className="text-coral">.</span>
            </h1>

            <div className="mt-12 grid gap-8 border-t border-secondary/20 pt-7 md:grid-cols-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/55">
                Tanay Kardile
                <br />
                Photographer & visual storyteller
              </p>

              <p className="max-w-xl text-sm leading-7 text-secondary/75">
                Five years of exploring photography across wildlife, portraits,
                fashion, events, commercial work, and more. A continuing journey
                shaped by observation and curiosity.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="/Images/gargi.png"
                  alt="Creative portrait from Tanay's photography"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-dark/50">
                Light, emotion, perspective.
              </p>
            </motion.div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                My story
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Photography is a way of paying attention.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-dark/70">
                <p>
                  Welcome to my world of photography. Over the past five years,
                  I have explored different genres, from wildlife and macro
                  photography to portraits, fashion, food, events, products, and
                  more.
                </p>

                <p>
                  Each genre presents a different challenge. Wildlife demands
                  patience and observation. Portraits ask for an eye for
                  expression, light, and composition. Commercial photography
                  brings its own relationship between detail, design, and
                  presentation.
                </p>

                <p>
                  Through my work, I aim to evoke emotions, spark curiosity, and
                  preserve moments. I also enjoy sharing what I learn through
                  workshops, photowalks, and mentoring for beginners.
                </p>
              </div>

              <Link
                to="/portfolio"
                className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-primary"
              >
                Explore my photographs
                <FiArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-dark px-5 py-16 text-secondary sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-8 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Observe",
                text: "Notice the light, details, and moments that others might overlook.",
              },
              {
                number: "02",
                title: "Explore",
                text: "Move between genres, experiment with perspectives, and stay curious.",
              },
              {
                number: "03",
                title: "Connect",
                text: "Create photographs that invite people to feel, remember, and discover.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-secondary/20 pt-5"
              >
                <p className="text-[10px] text-accent">{item.number}</p>
                <h3 className="mt-5 font-serif text-4xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-secondary/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">
              Every photograph starts with a reason to look.
            </h2>

            <Link
              to="/contact"
              className="flex w-fit items-center gap-3 bg-coral px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
            >
              Work with me
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
