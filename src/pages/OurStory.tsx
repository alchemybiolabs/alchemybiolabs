import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useInView } from "../hooks/useInView";

const OurStory = () => {
  const { ref: introRef, isInView: introInView } = useInView({ threshold: 0.3 });
  const { ref: missionRef, isInView: missionInView } = useInView({ threshold: 0.3 });
  const { ref: visionRef, isInView: visionInView } = useInView({ threshold: 0.3 });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="section-container">
            <h1 className="heading-hero animate-fade-in">Our Story</h1>
          </div>
        </section>

        {/* Introduction */}
        <section 
          ref={introRef as React.RefObject<HTMLElement>}
          className="py-20 md:py-28"
        >
          <div className="section-container">
            <div className="max-w-2xl">
              <p 
                className={`body-large transition-all duration-700 ${
                  introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                AlchemyBio was founded on a simple observation: the most promising therapeutics often fail not because of flawed biology, but because of hostile delivery environments.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section 
          ref={missionRef as React.RefObject<HTMLElement>}
          className="py-20 md:py-28 bg-surface-elevated"
        >
          <div className="section-container">
            <div className="max-w-2xl">
              <h2 
                className={`heading-section mb-8 transition-all duration-700 ${
                  missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Our Mission
              </h2>
              <p 
                className={`body-subtle transition-all duration-700 delay-100 ${
                  missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                We're building programmable systems that restore the conditions for therapeutic success. By addressing barrier dysfunction, immune dysregulation, and metabolic instability at their source, we enable signals to function where they historically fail.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section 
          ref={visionRef as React.RefObject<HTMLElement>}
          className="py-20 md:py-28"
        >
          <div className="section-container">
            <div className="max-w-2xl">
              <h2 
                className={`heading-section mb-8 transition-all duration-700 ${
                  visionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Looking Ahead
              </h2>
              <p 
                className={`body-subtle transition-all duration-700 delay-100 ${
                  visionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                We see a future where therapeutic precision is no longer constrained by environmental chaos. Where delivery is not an afterthought, but a fundamental layer of design.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
