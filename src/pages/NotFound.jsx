import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="h-screen w-full flex flex-col justify-center items-center bg-charcoal text-secondary text-center px-6 relative overflow-hidden">
        
        {/* Abstract design watermark */}
        <div className="absolute top-[20%] text-[30vw] font-serif text-secondary/[0.015] select-none pointer-events-none tracking-widest font-bold">
          404
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5A1E2B,transparent)] opacity-10 pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-md">
          <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-accent font-semibold block">
            OUT OF FOCUS
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-secondary">
            404
          </h1>
          <p className="font-serif text-xl italic text-secondary/80 font-light">
            "Lost in perspective. This frame does not exist."
          </p>
          <p className="font-sans text-xs text-secondary/50 leading-relaxed font-light pb-8 font-sans">
            The page you are looking for has been moved, deleted, or never existed. Let's redirect your lens back to home.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-3 px-8 py-3.5 bg-accent text-dark hover:bg-secondary transition-all duration-300 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:scale-[1.02]"
          >
            <FiArrowLeft size={15} />
            <span>Return to Home</span>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
