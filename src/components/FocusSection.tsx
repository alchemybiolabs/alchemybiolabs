import { useInView } from "../hooks/useInView";

export const FocusSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-40 md:py-56 border-t border-divider"
    >
      <div className="section-container">
        <div className="flex justify-center">
          <span
            className={`heading-section text-center transition-all duration-700 ${
              isInView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
          >
            More Soon.
          </span>
        </div>
      </div>
    </section>
  );
};
