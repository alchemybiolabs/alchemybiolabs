import { AbstractFlowGraphic } from "./AbstractFlowGraphic";
import { useInView } from "../hooks/useInView";

export const ProblemSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Abstract disruption background */}
      <div className="absolute inset-0 pointer-events-none">
        <AbstractFlowGraphic variant="disruption" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl">
          <p 
            className={`body-large transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Many promising therapies fail not because the biology is wrong, but because the environment is hostile.
          </p>
          <p 
            className={`body-subtle mt-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Inflammation, barrier breakdown, and dysregulation degrade fragile signals before they can act.
          </p>
        </div>
      </div>
    </section>
  );
};
