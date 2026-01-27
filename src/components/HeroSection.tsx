import heroVisual from "@/assets/hero-visual.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background image */}
      <div className="absolute inset-0">
        <img
          src={heroVisual}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h1 className="heading-hero animate-fade-in">
            Programmable Therapeutic Precision
          </h1>
          <p className="body-subtle mt-8 max-w-2xl animate-fade-in-delay-1">
            Building next-generation systems for therapeutic signals to function where they historically fail.
          </p>
        </div>
      </div>
    </section>
  );
};
