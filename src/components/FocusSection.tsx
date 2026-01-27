import { useInView } from "../hooks/useInView";

export const FocusSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const focusAreas = [
    "Barrier dysfunction",
    "Immune dysregulation",
    "Metabolic disease",
  ];

  return (
    <section 
      ref={ref}
      className="py-40 md:py-56 border-t border-divider"
    >
      <div className="section-container">
        <div className="flex flex-col items-center space-y-8 md:space-y-10">
          {focusAreas.map((area, index) => (
            <span
              key={area}
              className={`heading-section text-center transition-all duration-700 ${
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
