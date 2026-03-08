import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const FloatingBookNow = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on services page (already has booking form)
  if (location.pathname === "/services") return null;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        to="/services"
        className="gold-gradient-animated px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground rounded-sm shadow-2xl transition-all duration-300 gold-glow gold-glow-hover hover:scale-105 block font-body"
      >
        Book Now
      </Link>
    </div>
  );
};

export default FloatingBookNow;
