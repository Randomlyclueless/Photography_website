import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Set initial states
    gsap.set([textRef.current, subTextRef.current], { opacity: 0, y: 40 });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2
    })
    .to(subTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power3.out"
    }, "-=0.6")
    .to([textRef.current, subTextRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power4.in",
      delay: 1.0
    })
    .to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.2,
      ease: "power4.inOut"
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-charcoal text-secondary"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="text-center select-none pointer-events-none px-6">
        <h1
          ref={textRef}
          className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-[0.2em] uppercase text-accent font-light"
        >
          Frames by Tanay
        </h1>
        <p
          ref={subTextRef}
          className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.5em] uppercase text-secondary/60 mt-4 font-light"
        >
          Capturing Moments. Creating Stories.
        </p>
      </div>
    </div>
  );
}
