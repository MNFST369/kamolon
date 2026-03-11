import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Main", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setQuoteOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (quoteRef.current && !quoteRef.current.contains(e.target as Node)) {
        setQuoteOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-display font-bold tracking-[0.15em]">
            <span className="gold-gradient-text-animated">KAMOLON</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative" ref={quoteRef}>
              <button
                onClick={() => setQuoteOpen(!quoteOpen)}
                className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary text-primary"
              >
                Get a Quote <ChevronDown className={`w-4 h-4 transition-transform ${quoteOpen ? "rotate-180" : ""}`} />
              </button>
              {quoteOpen && (
                <div className="absolute right-0 top-full mt-4 w-[420px] bg-card border border-border rounded-sm shadow-2xl overflow-hidden z-50">
                  <iframe
                    src="https://customer.moovs.app/kamolon/iframe"
                    title="Moovs App"
                    className="w-full border-0"
                    style={{ height: "500px" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[800px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setQuoteOpen(!quoteOpen)}
              className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-primary text-left"
            >
              Get a Quote <ChevronDown className={`w-4 h-4 transition-transform ${quoteOpen ? "rotate-180" : ""}`} />
            </button>
            {quoteOpen && (
              <div className="border border-border rounded-sm overflow-hidden">
                <iframe
                  src="https://customer.moovs.app/kamolon/iframe"
                  title="Moovs App"
                  className="w-full border-0"
                  style={{ height: "450px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
