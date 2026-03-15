import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { ApproachSection } from "../components/ApproachSection";
import { FocusSection } from "../components/FocusSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <FocusSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
