import { INSTAGRAM_POSTS } from "../data/siteData";
import { FiInstagram, FiHeart, FiMessageCircle } from "react-icons/fi";

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-secondary text-dark border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block">
          INSTAGRAM FEED
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 tracking-wide text-primary">
          @random_clicks.dng
        </h2>
        <p className="font-sans text-xs text-dark/50 tracking-wider mb-12 max-w-md mx-auto leading-relaxed">
          Follow our creative journey behind the lens. Daily frames, previews, and stories.
        </p>

        {/* Grid of posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden group border border-primary/5 bg-charcoal"
            >
              <img
                src={post.src}
                alt={`Instagram Post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 text-secondary">
                <div className="flex items-center space-x-1.5 text-xs sm:text-sm">
                  <FiHeart className="text-accent fill-accent" size={14} />
                  <span className="font-sans font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs sm:text-sm">
                  <FiMessageCircle className="text-secondary fill-secondary" size={14} />
                  <span className="font-sans font-medium">{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/random_clicks.dng"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-3 px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-secondary transition-colors duration-300 font-sans text-xs font-bold tracking-[0.25em] uppercase hover:scale-[1.02] transform transition-transform"
        >
          <FiInstagram size={15} />
          <span>Follow Tanay</span>
        </a>
      </div>
    </section>
  );
}
