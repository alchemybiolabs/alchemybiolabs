import { useInView } from "../hooks/useInView";

export const PhilosophySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 border-t border-divider bg-surface-elevated"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p 
            className={`body-large transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We believe delivery is not a downstream problem.
          </p>
          <p 
            className={`body-large mt-4 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            It is a core constraint on therapeutic discovery.
          </p>
        </div>
      </div>
    </section>
  );
};
