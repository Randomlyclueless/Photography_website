import { SERVICES } from "../data/siteData";
import PageTransition from "../components/PageTransition";
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
  const handleInquiry = (prefix) => {
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(prefix)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 pb-20 bg-secondary text-dark text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-primary font-bold">
            CREATIVE SESSIONS
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-primary tracking-wide">
            Services & Investment
          </h1>
          <p className="font-sans text-xs text-dark/50 max-w-md mx-auto leading-relaxed tracking-wider font-light font-sans">
            Crafting tailored visual narratives for couples, creators, and premium brands. Select a session below to inquire via WhatsApp.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-28 bg-secondary text-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-charcoal overflow-hidden group border border-primary/5 shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                    INVESTMENT FROM {service.price}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-primary tracking-wide font-serif">
                    {service.title}
                  </h2>
                  <p className="font-sans text-sm text-dark/70 leading-relaxed font-light font-sans">
                    {service.description}
                  </p>

                  <div className="py-4 border-t border-dark/10">
                    <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold mb-4">
                      WHAT'S INCLUDED:
                    </h4>
                    <ul className="space-y-3 font-sans text-xs text-dark/65 leading-relaxed font-light font-sans">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-accent mt-1">&bull;</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleInquiry(service.whatsappPrefix)}
                    className="inline-flex items-center space-x-3 px-8 py-3.5 bg-primary text-secondary hover:bg-accent hover:text-dark transition-all duration-300 font-sans text-xs font-bold tracking-[0.25em] uppercase hover:scale-[1.02]"
                  >
                    <span>Inquire via WhatsApp</span>
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
