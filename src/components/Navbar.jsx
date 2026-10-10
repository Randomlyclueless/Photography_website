import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Update navbar appearance when scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when the route changes,
  // without setting state inside an effect.
  const closeMenu = () => setIsOpen(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling while the menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Keep the menu closed if browser navigation changes the route.
  // The key also resets the menu component on navigation.
  return (
    <div key={location.pathname}>
      {/* Desktop and mobile header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-dark/10 py-3"
            : "bg-primary py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            {/* Typographic brand — no icon */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group shrink-0 font-serif text-xl sm:text-2xl tracking-tight text-secondary transition-colors hover:text-accent"
              aria-label="Frames by Tanay — Home"
            >
              Frames by Tanay<span className="text-accent">.</span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-9"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative py-2 text-[10px] xl:text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-accent"
                        : "text-secondary/80 hover:text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop booking button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 border border-secondary/60 px-4 xl:px-5 py-2.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary transition-all duration-300 hover:bg-secondary hover:text-primary"
            >
              Book a shoot
              <FiArrowUpRight size={14} />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="lg:hidden flex items-center justify-center p-2 text-secondary transition-colors hover:text-accent"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <FiMenu size={25} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: "-2%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-2%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-primary px-6 py-7 text-secondary sm:px-10 sm:py-9"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Decorative background lettering */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[28%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[25vw] leading-none text-secondary/[0.035]"
            >
              TANAY
            </div>

            {/* Menu header */}
            <div className="relative z-10 flex items-center justify-between border-b border-secondary/20 pb-5">
              <Link
                to="/"
                onClick={closeMenu}
                className="font-serif text-xl tracking-tight"
              >
                Frames by Tanay<span className="text-accent">.</span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="p-2 text-secondary transition-colors hover:text-accent"
                aria-label="Close navigation menu"
              >
                <FiX size={27} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu links */}
            <nav
              className="relative z-10 flex flex-1 flex-col justify-center gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.35,
                  }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-secondary/10 py-4 font-serif text-3xl transition-colors sm:text-4xl ${
                        isActive
                          ? "text-accent"
                          : "text-secondary hover:text-accent"
                      }`
                    }
                  >
                    {link.name}
                    <FiArrowUpRight size={20} strokeWidth={1.3} />
                  </NavLink>
                </motion.div>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-7 flex items-center justify-center gap-2 bg-coral px-6 py-4 text-sm font-semibold tracking-[0.14em] uppercase text-white transition-colors hover:bg-secondary hover:text-primary"
              >
                Book a photography session
                <FiArrowUpRight size={17} />
              </Link>
            </nav>

            {/* Menu footer */}
            <div className="relative z-10 flex items-center justify-between border-t border-secondary/20 pt-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-secondary/50">
                  Photography & visual storytelling
                </p>

                <p className="mt-2 text-[10px] tracking-wider text-secondary/70">
                  © {new Date().getFullYear()} Frames by Tanay
                </p>
              </div>

              <a
                href="https://www.instagram.com/random_clicks.dng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="flex h-11 w-11 items-center justify-center border border-secondary/30 text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <FiInstagram size={19} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
