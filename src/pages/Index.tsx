import { Link } from "react-router-dom";
import { Shield, Users, Car, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAirport from "@/assets/service-airport.jpg";
import servicePrivate from "@/assets/service-private.jpg";

const Index = () => {
  useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              Panama City Beach, FL
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="gold-gradient-text">Kamolon</span>
              <br />
              <span className="text-foreground">Premium Shuttle Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience exclusive, tailored transfers where quality and safety come first—we don't chase quantity, we chase your comfort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="gold-gradient px-10 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground rounded-sm transition-all duration-300 gold-glow gold-glow-hover hover:scale-105"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="border border-primary/40 px-10 py-4 text-sm font-medium uppercase tracking-wider text-foreground rounded-sm transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </section>

      {/* About */}
      <section className="section-gradient py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="fade-in-up text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">4+ Years of Excellence</h2>
            <p className="text-muted-foreground leading-relaxed">
              Proudly serving Northwest Florida Beaches International Airport (ECP) and the greater Panama City Beach area.
              We've built our reputation on personalized service, not volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="fade-in-up card-gradient rounded-lg overflow-hidden border border-border group">
              <div className="aspect-video overflow-hidden">
                <img src={servicePrivate} alt="Private transfer meet and greet service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Private Transfers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Exclusive door-to-door service tailored for business travelers. Your personal chauffeur awaits with a meet-and-greet at arrivals.
                </p>
              </div>
            </div>
            <div className="fade-in-up card-gradient rounded-lg overflow-hidden border border-border group">
              <div className="aspect-video overflow-hidden">
                <img src={serviceAirport} alt="Airport shuttle service vehicle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Airport Shuttle</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Personalized pickups from ECP Airport. Comfort and reliability for families and travelers—your journey starts the moment you land.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="fade-in-up text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold">Quality Over Quantity</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Meet & Greet", desc: "Personal welcome at arrivals with your name on display." },
              { icon: Car, title: "Luxury Vehicles", desc: "Premium sedans and SUVs, always immaculate." },
              { icon: Shield, title: "Safety First", desc: "Vetted drivers, sanitized vehicles, real-time monitoring." },
              { icon: Clock, title: "Always On Time", desc: "Flight tracking ensures we're there when you are." },
            ].map((item, i) => (
              <div key={i} className="fade-in-up card-gradient border border-border rounded-lg p-8 text-center transition-all duration-300 hover:border-primary/40">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full flex items-center justify-center bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 section-gradient">
        <div className="fade-in-up container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ride in Style?</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Book your premium transfer today and experience the Kamolon difference.
          </p>
          <Link
            to="/services"
            className="inline-block gold-gradient px-12 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground rounded-sm transition-all duration-300 gold-glow gold-glow-hover hover:scale-105"
          >
            Book Your Ride
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
