export const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-divider">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="text-base font-medium tracking-tight">
              AlchemyBio
            </span>
            <p className="text-sm text-subtle mt-2">
              Precision release therapeutics
            </p>
          </div>
          <a 
            href="mailto:colin@alchemybio.co" 
            className="text-sm text-subtle hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
