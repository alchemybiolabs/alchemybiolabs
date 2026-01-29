import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-divider" 
          : "py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="text-base font-medium tracking-tight hover:opacity-70 transition-opacity">
          AlchemyBio
        </Link>
        <Link 
          to="/our-story" 
          className="text-sm text-subtle hover:text-foreground transition-colors duration-300"
        >
          Our Story
        </Link>
      </div>
    </header>
  );
};