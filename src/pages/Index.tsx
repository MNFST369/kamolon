import { Link } from "react-router-dom";
import { Shield, Users, Car, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAirport from "@/assets/service-airport.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import logoGold from "@/assets/logo-gold.jpeg";

const Index = () => {
  useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }} />
        
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-xs font-body font-semibold uppercase tracking-[0.4em] mb-8">
              Panama City Beach · 30A · Alys Beach · Panama City & Beyond
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.1] mb-8">
              <span className="gold-gradient-text-animated">Kamolon</span>
              <br />
              <span className="text-foreground text-4xl md:text-5xl lg:text-6xl font-light">Premium Shuttle Services</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-body">
              Experience exclusive, tailored transfers where quality and safety come first—we don't chase quantity, we chase your comfort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                to="/services"
                className="border border-primary/30 px-12 py-4 text-sm font-body font-medium uppercase tracking-[0.2em] text-foreground rounded-sm transition-all duration-300 hover:border-primary hover:text-primary">
                
                Our Services
              </Link>
              <Link
                to="/contact"
                className="border border-primary/30 px-12 py-4 text-sm font-body font-medium uppercase tracking-[0.2em] text-foreground rounded-sm transition-all duration-300 hover:border-primary hover:text-primary">
                
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* About */}
      <section className="section-gradient py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-8">
          <div className="fade-in-up text-center max-w-2xl mx-auto mb-20">
            <p className="text-primary text-xs font-body font-semibold uppercase tracking-[0.3em] mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-display mb-6">4+ Years of Excellence</h2>
            <p className="text-muted-foreground leading-relaxed font-body">
              Proudly serving an 80-mile radius around Northwest Florida Beaches International Airport (ECP)—including Panama City Beach, 30A, Alys Beach, Rosemary Beach, Seaside, Destin, Panama City, and beyond.
              We've built our reputation on personalized service, not volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="fade-in-up card-gradient rounded-sm overflow-hidden border border-border group">
              <div className="aspect-video overflow-hidden">
                <img alt="Premium SUV private transfer service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/lovable-uploads/e1394f09-5782-4ecc-a63c-981686de898c.jpg" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display mb-3">Private Transfers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  Exclusive door-to-door service tailored for business travelers. Your personal chauffeur awaits with a meet-and-greet at arrivals.
                </p>
              </div>
            </div>
            <div className="fade-in-up card-gradient rounded-sm overflow-hidden border border-border group">
              <div className="aspect-video overflow-hidden">
                <img alt="Airport shuttle minivan service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/lovable-uploads/ebb9d17a-6c06-4002-b8c0-4ea1c00079c4.jpg" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display mb-3">Airport Shuttle</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  Personalized pickups from ECP Airport. Comfort and reliability for families and travelers—your journey starts the moment you land.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-8">
          <div className="fade-in-up text-center max-w-2xl mx-auto mb-20">
            <p className="text-primary text-xs font-body font-semibold uppercase tracking-[0.3em] mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-display">Quality Over Quantity</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
            { icon: Users, title: "Meet & Greet", desc: "Personal welcome at arrivals with your name on display." },
            { icon: Car, title: "Premium SUVs", desc: "Luxury SUVs and minivans, always immaculate." },
            { icon: Shield, title: "Safety First", desc: "Vetted drivers, sanitized vehicles, real-time monitoring." },
            { icon: Clock, title: "Always On Time", desc: "Flight tracking ensures we're there when you are." }].
            map((item, i) =>
            <div key={i} className="fade-in-up card-gradient border border-border rounded-sm p-8 text-center transition-all duration-300 hover:border-primary/30">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Get a Quote */}
      <section id="get-a-quote" className="py-28 md:py-36 section-gradient">
        <div className="fade-in-up container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-xs font-body font-semibold uppercase tracking-[0.3em] mb-4">Book Your Ride</p>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Get a Quote</h2>
            <p className="text-muted-foreground font-body">
              Experience the Kamolon difference—get an instant quote for your premium transfer.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-sm overflow-hidden border border-border">
            <iframe
              src="https://customer.moovs.app/kamolon/iframe"
              title="Moovs App"
              className="w-full border-0"
              style={{ minHeight: "600px" }} />
            
          </div>
        </div>
      </section>
    </Layout>);

};

export default Index;