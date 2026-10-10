import PageTransition from "../components/PageTransition";
import { FiTarget, FiEye, FiCpu, FiAward } from "react-icons/fi";

const TIMELINE = [
  { year: "2021", title: "Freelance Launch", desc: "Started professional portrait and travel photography in Pune." },
  { year: "2023", title: "Expanding to Weddings & Events", desc: "Delivered first luxury destination wedding album in Udaipur. Shifted focus to cinematic visual stories." },
  { year: "2024", title: "Aerial Landscapes & Drone License", desc: "Incorporated advanced UAV operations. Certified DJI operator capturing stunning coastal/mountain terrain." },
  { year: "2026", title: "Frames by Tanay Studio", desc: "Launched a premium studio space, specializing in high-fashion, lookbooks, and high-end editorial campaigns." }
];

const GEAR_ITEMS = [
  { category: "Camera Bodies", items: ["Sony A7R V (61 MP Mirrorless)", "Canon EOS R5 (45 MP Mirrorless)", "Fujifilm GFX 100S (Medium Format - Studio)"] },
  { category: "Prime Lenses", items: ["Sony FE 85mm f/1.4 GM II", "Sony FE 50mm f/1.2 GM", "Canon RF 85mm f/1.2L USM", "Sony FE 135mm f/1.8 GM"] },
  { category: "Aerial & Lighting", items: ["DJI Mavic 3 Pro (Triple Camera Drone)", "Profoto B10X Plus Studio Flashes", "Godox AD600 Pro Portable Strobes"] },
  { category: "Accessories", items: ["Gitzo Carbon Fiber Tripods", "Peak Design Travel Back Packs", "Lee Filters Neutral Density Sets"] }
];

export default function About() {
  return (
    <PageTransition>
      {/* Intro Header */}
      <section className="pt-36 pb-20 bg-secondary text-dark text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-primary font-bold">
            BIOGRAPHY
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-primary tracking-wide">
            Meet Tanay Kardile
          </h1>
          <p className="font-sans text-xs tracking-[0.25em] text-accent uppercase font-semibold">
            Founder & Lead Photographer
          </p>
        </div>
      </section>

      {/* Main Bio Grid */}
      <section className="py-16 bg-secondary text-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Portrait Image */}
          <div className="relative aspect-[3/4] bg-charcoal overflow-hidden group border border-primary/5 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Tanay Kardile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </div>

          {/* Details */}
          <div className="space-y-12 text-left">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-primary">
                A Visual Essayist of Life's Fleeting Moments.
              </h2>
              <p className="font-sans text-sm text-dark/70 leading-relaxed font-light font-sans">
                Over the past 5 years, my camera has been a passport to incredible landscapes and deep human connections. Based in Pune, India, my pursuit of visual excellence has taken me from the dusty heritage corridors of Rajasthan to the pristine, thin-aired valleys of Ladakh, capturing details that others overlook.
              </p>
              <p className="font-sans text-sm text-dark/70 leading-relaxed font-light font-sans">
                For me, photography is not just about pressing a shutter button. It's about light, angles, timing, and most importantly, establishing a mutual trust with the people on the other side of my lens.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border border-primary/10 p-6 bg-secondary/40 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <FiTarget size={18} className="text-accent" />
                  <h4 className="font-serif text-lg font-medium tracking-wide">Our Mission</h4>
                </div>
                <p className="font-sans text-xs text-dark/65 leading-relaxed font-light font-sans">
                  To craft luxurious, high-end photographs that transcend standard templates, translating client stories into artistic family heirlooms.
                </p>
              </div>

              <div className="border border-primary/10 p-6 bg-secondary/40 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <FiEye size={18} className="text-accent" />
                  <h4 className="font-serif text-lg font-medium tracking-wide">Our Vision</h4>
                </div>
                <p className="font-sans text-xs text-dark/65 leading-relaxed font-light font-sans">
                  To build India's premier boutique photography agency, celebrated for technical precision, artistic depth, and flawless narrative execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-secondary text-dark border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block">
            CHRONICLES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-20 tracking-wide">
            Experience Timeline
          </h2>

          <div className="max-w-3xl mx-auto relative border-l border-primary/20 text-left pl-6 sm:pl-10 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 bg-secondary border-2 border-accent rounded-full group-hover:bg-primary transition-colors" />
                <span className="font-serif text-2xl font-semibold text-accent block mb-2">{item.year}</span>
                <h4 className="font-serif text-lg font-medium text-primary mb-2">{item.title}</h4>
                <p className="font-sans text-xs sm:text-sm text-dark/60 leading-relaxed font-light font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's In My Bag section (dark backdrop) */}
      <section className="py-24 bg-charcoal text-secondary border-t border-secondary/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-3">
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-accent font-semibold flex items-center justify-center space-x-2">
              <FiCpu size={14} />
              <span>THE ARSENAL</span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-secondary tracking-wide">
              What's In My Bag
            </h2>
            <p className="font-sans text-xs text-secondary/40 max-w-md mx-auto leading-relaxed font-light font-sans">
              We invest in state-of-the-art systems to secure razor-sharp details, rich dynamic ranges, and reliable backup contingencies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {GEAR_ITEMS.map((gear, idx) => (
              <div key={idx} className="border border-secondary/10 p-8 dark-glass-card space-y-6">
                <h4 className="font-serif text-xl font-medium tracking-wide text-accent pb-3 border-b border-secondary/10">
                  {gear.category}
                </h4>
                <ul className="space-y-3 font-sans text-xs text-secondary/70 leading-relaxed font-light font-sans">
                  {gear.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-accent mt-1">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Credentials (cream background) */}
      <section className="py-24 bg-secondary text-dark border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block">
            CREDENTIALS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-16 tracking-wide">
            Awards & Recognitions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="border border-primary/5 p-8 bg-secondary/35 text-center space-y-4">
              <FiAward size={36} className="text-accent mx-auto" />
              <h4 className="font-serif text-xl font-medium tracking-wide text-primary">Best Wedding Portfolio</h4>
              <p className="font-sans text-xs text-dark/50 font-light tracking-wide uppercase font-sans">WPA India &bull; 2024</p>
              <p className="font-sans text-xs text-dark/60 leading-relaxed font-light font-sans">
                Recognized for storytelling excellence and dramatic lighting implementation.
              </p>
            </div>

            <div className="border border-primary/5 p-8 bg-secondary/35 text-center space-y-4">
              <FiAward size={36} className="text-accent mx-auto" />
              <h4 className="font-serif text-xl font-medium tracking-wide text-primary">Top 30 Drone Artists</h4>
              <p className="font-sans text-xs text-dark/50 font-light tracking-wide uppercase font-sans">Aerial Photography India &bull; 2025</p>
              <p className="font-sans text-xs text-dark/60 leading-relaxed font-light font-sans">
                Awarded for capturing complex coastal geometries and high-altitude forest vistas.
              </p>
            </div>

            <div className="border border-primary/5 p-8 bg-secondary/35 text-center space-y-4">
              <FiAward size={36} className="text-accent mx-auto" />
              <h4 className="font-serif text-xl font-medium tracking-wide text-primary">Vogue India Contributor</h4>
              <p className="font-sans text-xs text-dark/50 font-light tracking-wide uppercase font-sans">Features &bull; 2026</p>
              <p className="font-sans text-xs text-dark/60 leading-relaxed font-light font-sans">
                Contributed multiple editorial lifestyle frames covering regional apparel collections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
