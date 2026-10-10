import Gallery from "../components/Gallery";
import PageTransition from "../components/PageTransition";

export default function Portfolio() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 pb-12 bg-secondary text-dark text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-primary font-bold">
            CREATIVE WORKS
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-primary tracking-wide">
            Portfolio
          </h1>
          <p className="font-sans text-xs text-dark/50 max-w-md mx-auto leading-relaxed tracking-wider font-light">
            An immersive gallery of editorial moments, landscapes, and commercial designs. Hover to inspect parameters, click to trigger lightbox.
          </p>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="pb-28 bg-secondary text-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Gallery />
        </div>
      </section>
    </PageTransition>
  );
}
