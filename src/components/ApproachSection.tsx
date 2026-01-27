import { AbstractFlowGraphic } from "./AbstractFlowGraphic";
import { useInView } from "../hooks/useInView";

export const ApproachSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden border-t border-divider"
    >
      {/* Abstract flow background */}
      <div className="absolute inset-0 pointer-events-none">
        <AbstractFlowGraphic variant="flow" />
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
          <p 
            className={`body-subtle mt-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our platform focuses on preserving signal integrity and enabling activation only under disease-relevant conditions.
          </p>
        </div>
      </div>
    </section>
  );
};
