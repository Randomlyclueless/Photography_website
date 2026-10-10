import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCamera,
  FiAperture,
  FiUsers,
  FiBox,
  FiBookOpen,
  FiMap,
} from "react-icons/fi";
import PageTransition from "../components/PageTransition";

const services = [
  {
    number: "01",
    title: "Wildlife & Nature",
    description:
      "Photographs that celebrate the details, behaviours, and fleeting moments found in the natural world.",
    image: "/Images/flamingo.png",
    icon: FiAperture,
  },
  {
    number: "02",
    title: "Portraits & Fashion",
    description:
      "Expressive portraits built around personality, composition, natural emotion, and the play of light.",
    image: "/Images/gargi.png",
    icon: FiCamera,
  },
  {
    number: "03",
    title: "Weddings & Events",
    description:
      "Documenting celebrations, candid expressions, meaningful details, and moments worth revisiting.",
    image: "/Images/lady_smiling.png",
    icon: FiUsers,
  },
  {
    number: "04",
    title: "Commercial & Products",
    description:
      "Visual content for products, food, fashion, and brands, with an emphasis on detail and presentation.",
    image: "/Images/soap.jpg",
    icon: FiBox,
  },
  {
    number: "05",
    title: "Photography Workshops",
    description:
      "Learn the fundamentals of photography, understand your camera, and develop your creative eye.",
    image: "/Images/speed.jpg",
    icon: FiBookOpen,
  },
  {
    number: "06",
    title: "Photowalks & Mentoring",
    description:
      "Explore photography in practice, learn to observe light, and build confidence through guided sessions.",
    image: "/Images/ajoba.png",
    icon: FiMap,
  },
];

export default function Services() {
  return (
    <PageTransition>
      <main className="bg-secondary text-dark">
        <section className="bg-primary px-5 pb-16 pt-36 text-secondary sm:px-10 sm:pb-20 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              What I do
            </p>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h1 className="font-serif text-6xl leading-[0.85] tracking-[-0.05em] sm:text-8xl">
                  Work with
                  <br />
                  intention<span className="text-coral">.</span>
                </h1>
              </div>

              <p className="max-w-lg text-sm leading-7 text-secondary/75 lg:col-span-4 lg:col-start-9">
                From wildlife and portraits to commercial photography and
                creative education, every project starts with curiosity and a
                story worth telling.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center justify-between border-b border-dark/15 pb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Photography & creative services
              </p>
              <span className="text-xs text-dark/50">06 services</span>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <span className="absolute left-4 top-4 bg-secondary px-3 py-2 text-[9px] font-bold tracking-[0.15em] text-primary">
                        {service.number}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-dark/15 py-4">
                      <h2 className="font-serif text-3xl">{service.title}</h2>
                      <Icon size={20} className="text-primary" />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-dark/65">
                      {service.description}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:text-coral"
                    >
                      Enquire about this service
                      <FiArrowRight size={14} />
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-16 text-secondary sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Have something in mind?
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl">
                Let's discuss your project.
              </h2>
            </div>

            <Link
              to="/contact"
              className="flex w-fit items-center gap-4 bg-coral px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white hover:bg-secondary hover:text-primary"
            >
              Get in touch
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
