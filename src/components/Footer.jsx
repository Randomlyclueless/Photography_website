import { Link } from "react-router-dom";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919876543210";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-secondary">
      <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-16 sm:px-10 sm:pt-20 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 border-b border-secondary/20 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">
                Tanay Kardile
              </h2>

              <span className="mt-2 block text-xs uppercase tracking-[0.3em] text-secondary/60">
                The art &amp; beyond
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-secondary/70">
              Five years of capturing stories, chasing light, and finding beauty
              in the details. Every frame has a story worth telling.
            </p>

            {/* Social Media Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/random_clicks.dng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tanay's Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/25 transition-all duration-300 hover:border-coral hover:bg-coral hover:text-dark"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Tanay on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/25 transition-all duration-300 hover:border-coral hover:bg-coral hover:text-dark"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-secondary/50">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group inline-flex items-center gap-2 text-sm text-secondary/80 transition-colors duration-300 hover:text-coral"
                >
                  {item.label}

                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-secondary/50">
              Get in touch
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-7 text-secondary/70">
              Have a story to capture, an event to remember, or an idea to bring
              to life? Let's talk.
            </p>

            <a
              href="mailto:tanaykardile@gmail.com"
              className="inline-flex items-start gap-2 break-all text-sm transition-colors duration-300 hover:text-coral"
            >
              <span>tanaykardile@gmail.com</span>
              <FiArrowUpRight size={16} className="mt-0.5 shrink-0" />
            </a>

            <div className="mt-7">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border-b border-coral pb-2 text-sm transition-colors duration-300 hover:text-coral"
              >
                Let's work together
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 tracking-wide text-secondary/55">
            © {currentYear} Tanay Kardile. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-secondary/55">
            Made with care, one frame at a time.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.2em] text-secondary/70 transition-colors duration-300 hover:text-coral sm:self-auto"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/25 transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-dark">
              <FiArrowUp size={15} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
