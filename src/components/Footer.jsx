import { Link } from "react-router-dom";
import { FiInstagram, FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-dark text-secondary pt-20 pb-10 border-t border-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#5A1E2B,transparent)] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-secondary/10">
          
          {/* Brand Bio */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-serif text-3xl tracking-widest text-accent font-bold">FRAMES BY TANAY</h3>
            <p className="font-sans text-secondary/60 text-sm max-w-md leading-relaxed font-light">
              Premium visual storytelling and photography services. Capturing authentic, timeless emotions of weddings, portraits, and commercial environments across India and worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/random_clicks.dng"
                target="_blank"
                rel="noreferrer"
                className="text-secondary/80 hover:text-accent transition-colors p-3 bg-secondary/5 rounded-full hover:bg-secondary/10 border border-secondary/10"
                aria-label="Instagram Profile"
              >
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-accent font-semibold">Explore</h4>
            <ul className="space-y-4 font-sans text-xs tracking-wider">
              <li>
                <Link to="/" className="text-secondary/60 hover:text-secondary transition-colors uppercase font-light">Home</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary/60 hover:text-secondary transition-colors uppercase font-light">Portfolio</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary/60 hover:text-secondary transition-colors uppercase font-light">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary/60 hover:text-secondary transition-colors uppercase font-light">About Me</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary/60 hover:text-secondary transition-colors uppercase font-light">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-accent font-semibold">Newsletter</h4>
            <p className="font-sans text-secondary/60 text-xs leading-relaxed font-light">
              Subscribe to receive updates on destination schedules, photography tips, and travel logs.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-secondary/20 focus-within:border-accent transition-colors py-2">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-none text-xs font-sans tracking-widest text-secondary focus:outline-none w-full placeholder:text-secondary/30 pr-8"
              />
              <button
                type="submit"
                className="absolute right-0 text-secondary/60 hover:text-accent transition-colors"
                aria-label="Subscribe"
              >
                <FiArrowRight size={16} />
              </button>
            </form>
            {submitted && (
              <p className="text-[10px] text-accent font-sans tracking-wider uppercase">
                Thank you for subscribing!
              </p>
            )}
          </div>
          
        </div>

        {/* Contact Info Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-b border-secondary/10 font-sans text-xs text-secondary/60 font-light tracking-wider">
          <div className="flex items-center space-x-3">
            <FiPhone size={14} className="text-accent" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiMail size={14} className="text-accent" />
            <span>hello@framesbytanay.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiMapPin size={14} className="text-accent" />
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>

        {/* Legal Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] tracking-[0.25em] font-sans text-secondary/40 uppercase">
          <p>&copy; 2026 Frames by Tanay. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 font-light">
            Designed for <span className="text-accent">Tanay Kardile</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
