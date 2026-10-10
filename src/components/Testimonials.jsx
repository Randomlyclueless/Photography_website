import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../data/siteData";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary text-dark relative border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block">
          TESTIMONIALS
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-16 tracking-wide text-primary">
          Trusted by Couples & Brands
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="pb-16"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="flex flex-col items-center max-w-2xl mx-auto px-4">
                <FaQuoteLeft className="text-accent/30 text-4xl mb-6" />
                <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-dark/90 mb-8 font-light">
                  "{t.comment}"
                </p>
                <div className="flex justify-center mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-accent mx-0.5 text-xs sm:text-sm" />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-accent/20"
                  />
                  <div className="text-left">
                    <h4 className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary">
                      {t.name}
                    </h4>
                    <p className="font-sans text-[10px] sm:text-xs text-dark/50 tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
