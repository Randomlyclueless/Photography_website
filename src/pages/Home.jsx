import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import BusinessStats from "../components/BusinessStats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import InstagramFeed from "../components/InstagramFeed";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-28 bg-secondary text-dark relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden group border border-primary/5 bg-charcoal">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Tanay Kardile Portrait"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="space-y-8 text-left">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold block">
              ABOUT THE ARTIST
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-primary leading-tight">
              Capturing light, <br />
              preserving emotion.
            </h2>
            <p className="font-sans text-sm text-dark/70 leading-relaxed font-light">
              Hi, I'm Tanay Kardile. Over the past 5+ years, I have traveled across India and beyond, documenting raw human emotions, cinematic landscapes, and high-fashion aesthetics. My creative philosophy is rooted in minimalism, letting the subject tell their story through natural lighting and organic perspective.
            </p>
            <p className="font-sans text-sm text-dark/70 leading-relaxed font-light">
              Whether it's the grandeur of a destination wedding, an intimate studio portrait session, or the wild, untamed expressions of nature, I believe in creating frames that feel timeless and editorial.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 text-xs font-sans font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors group"
              >
                <span>Read Full Biography</span>
                <FiArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-24 bg-secondary text-dark border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
            <div>
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold block mb-3">
                PORTFOLIO PREVIEW
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-primary tracking-wide">
                Featured Photographs
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-3 text-xs font-sans font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors group"
            >
              <span>View Full Gallery</span>
              <FiArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          <Gallery limit={6} />
        </div>
      </section>

      {/* Business Stats Counter (dark backdrop) */}
      <BusinessStats />

      {/* Services Preview Section */}
      <section className="py-28 bg-secondary text-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
            <div>
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold block mb-3">
                SERVICES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-primary tracking-wide">
                Creative Offerings
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 text-xs font-sans font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors group"
            >
              <span>View All Services</span>
              <FiArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Wedding Card */}
            <div className="border border-primary/5 p-8 flex flex-col justify-between h-[380px] hover:border-primary/20 transition-all duration-300 bg-secondary/30 relative group">
              <div>
                <h3 className="font-serif text-2xl font-light text-primary mb-4">Wedding Storytelling</h3>
                <p className="font-sans text-xs text-dark/60 leading-relaxed font-light">
                  Cinematic, luxurious wedding coverage documenting the grand celebration and intimate raw emotion. Available for travel worldwide.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold">Starting from ₹1,50,000</p>
                <Link
                  to="/services"
                  className="font-sans text-[10px] tracking-widest text-primary uppercase font-bold inline-flex items-center space-x-2 group-hover:text-accent transition-colors"
                >
                  <span>Explore Details</span>
                  <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Portraits Card */}
            <div className="border border-primary/5 p-8 flex flex-col justify-between h-[380px] hover:border-primary/20 transition-all duration-300 bg-secondary/30 relative group">
              <div>
                <h3 className="font-serif text-2xl font-light text-primary mb-4">Editorial Portraits</h3>
                <p className="font-sans text-xs text-dark/60 leading-relaxed font-light">
                  Personal, business, or lifestyle portraits crafted with beautiful natural lighting or specialized studio setups.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold">Starting from ₹25,000</p>
                <Link
                  to="/services"
                  className="font-sans text-[10px] tracking-widest text-primary uppercase font-bold inline-flex items-center space-x-2 group-hover:text-accent transition-colors"
                >
                  <span>Explore Details</span>
                  <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Drone Landscape Card */}
            <div className="border border-primary/5 p-8 flex flex-col justify-between h-[380px] hover:border-primary/20 transition-all duration-300 bg-secondary/30 relative group">
              <div>
                <h3 className="font-serif text-2xl font-light text-primary mb-4">Drone Aerials</h3>
                <p className="font-sans text-xs text-dark/60 leading-relaxed font-light">
                  Breathtaking high-altitude perspectives for luxury properties, tourism boards, destinations, and creative films.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold">Starting from ₹40,000</p>
                <Link
                  to="/services"
                  className="font-sans text-[10px] tracking-widest text-primary uppercase font-bold inline-flex items-center space-x-2 group-hover:text-accent transition-colors"
                >
                  <span>Explore Details</span>
                  <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* CTA Banner (dark background) */}
      <section className="bg-charcoal text-secondary py-28 relative border-t border-secondary/5">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">
            WORK WITH US
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide leading-tight">
            Have a project in mind? <br />
            Let’s create something timeless.
          </h2>
          <p className="font-sans text-sm text-secondary/60 font-light max-w-lg mx-auto leading-relaxed">
            Reach out today to discuss your vision, check availability for specific dates, or request a custom pricing package.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-dark hover:bg-secondary transition-all duration-300 font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:scale-[1.02]"
            >
              Inquire Booking
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Mock */}
      <InstagramFeed />
    </PageTransition>
  );
}
