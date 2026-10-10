import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiInstagram } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  // Check if current route is dark section (e.g. 404 is dark, or we could customize header text style)
  const isDarkNavbarNeeded = location.pathname === "/404" || location.pathname === "/not-found";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-secondary/5 py-4 shadow-lg text-secondary"
            : isDarkNavbarNeeded
            ? "bg-transparent py-6 text-secondary"
            : "bg-transparent py-6 text-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.15em] font-bold text-primary hover:text-accent transition-colors duration-300"
            style={{ color: scrolled ? '#C8A96A' : '' }}
          >
            FRAMES BY TANAY
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-[11px] tracking-[0.2em] uppercase transition-colors relative py-1 font-medium ${
                    isActive
                      ? scrolled
                        ? "text-accent"
                        : "text-primary"
                      : scrolled
                      ? "text-secondary/80 hover:text-accent"
                      : "text-dark/80 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                          scrolled ? "bg-accent" : "bg-primary"
                        }`}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2 border text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 ${
                scrolled
                  ? "border-accent text-accent hover:bg-accent hover:text-dark"
                  : "border-primary text-primary hover:bg-primary hover:text-secondary"
              }`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className={`transition-colors focus:outline-none ${
                scrolled ? "text-secondary hover:text-accent" : "text-dark hover:text-primary"
              }`}
              aria-label="Open Menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
            className="fixed inset-0 z-50 bg-dark/98 flex flex-col justify-between px-6 py-12 text-secondary"
          >
            {/* Background elements */}
            <div className="absolute top-[20%] right-[10%] text-[20vw] font-serif text-secondary/[0.015] uppercase pointer-events-none select-none">
              TANAY
            </div>

            <div className="flex justify-between items-center border-b border-secondary/10 pb-6">
              <span className="font-serif text-xl tracking-[0.1em] text-accent">FRAMES BY TANAY</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary hover:text-accent transition-colors"
                aria-label="Close Menu"
              >
                <FiX size={26} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-center my-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl tracking-wider text-secondary hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-3 bg-accent text-dark font-sans text-sm tracking-[0.2em] uppercase transition-colors hover:bg-secondary hover:text-dark"
                >
                  Book a Session
                </Link>
              </motion.div>
            </nav>

            <div className="flex flex-col items-center space-y-4 border-t border-secondary/10 pt-6">
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/random_clicks.dng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-accent transition-colors p-2 border border-secondary/10 rounded-full hover:border-accent"
                >
                  <FiInstagram size={20} />
                </a>
              </div>
              <p className="text-secondary/40 text-[9px] tracking-[0.25em] font-sans uppercase">
                &copy; 2026 Frames By Tanay. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
