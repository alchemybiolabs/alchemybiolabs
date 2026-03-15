import flowVisual from "@/assets/flow-visual.jpg";
import { useInView } from "../hooks/useInView";
import { useParallax } from "@/hooks/useParallax";

export const ApproachSection = () => {
  const { ref: inViewRef, isInView } = useInView({ threshold: 0.3 });
  const { ref: parallaxRef, offset } = useParallax<HTMLElement>(0.3);

  return (
    <section 
      ref={(el) => {
        (inViewRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (parallaxRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-32 md:py-40 overflow-hidden border-t border-divider"
    >
      {/* Abstract flow background with parallax */}
      <div className="absolute inset-0">
        <img
          src={flowVisual}
          alt=""
          className="w-full h-full object-cover opacity-50 scale-110"
          style={{ transform: `translateY(${offset}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-background/60" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl ml-auto text-right">
          <p 
            className={`body-large transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We design therapeutic systems that are stable where they should be and responsive where they must be.
          </p>
        </div>
      </div>
    </section>
  );
};
