import { AbstractFlowGraphic } from "./AbstractFlowGraphic";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        <AbstractFlowGraphic variant="hero" />
      </div>

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h1 className="heading-hero animate-fade-in">
            Programmable therapeutic materials
          </h1>
          <p className="body-subtle mt-8 max-w-2xl animate-fade-in-delay-1">
            Building next-generation systems for therapeutic signals to function where they historically fail.
          </p>
        </div>
      </div>
    </section>
  );
};
