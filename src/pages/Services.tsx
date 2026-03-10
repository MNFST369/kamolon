import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logoSilver from "@/assets/logo-silver.jpeg";

const Services = () => {
  useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <img src={logoSilver} alt="Kamolon Logo" className="w-32 md:w-40 mx-auto mb-6 rounded-lg" />
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your premium transfer experience and book in seconds.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="fade-in-up card-gradient border border-border rounded-lg p-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-lg">✦</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Private Transfers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Exclusive, door-to-door service for business travelers. Your dedicated chauffeur handles everything—from meet-and-greet at arrivals to seamless drop-off at your destination.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Personalized meet & greet</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Door-to-door luxury</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Flight monitoring included</li>
              </ul>
            </div>
            <div className="fade-in-up card-gradient border border-border rounded-lg p-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-lg">✈</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Airport Shuttle</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Personalized pickups from ECP Airport with the comfort and care your family deserves. No shared rides—just you and your loved ones.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> ECP Airport specialization</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Family-friendly vehicles</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Luggage assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="fade-in-up text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Service Area</p>
            <h2 className="text-3xl font-bold">80-Mile Radius Coverage</h2>
            <p className="text-muted-foreground text-sm mt-2">Panama City Beach · 30A · Alys Beach · Rosemary Beach · Seaside · Destin · Panama City & more</p>
          </div>
          <div className="fade-in-up max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
            <iframe
              title="Kamolon Service Area - 80 Mile Radius around ECP Airport"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440000!2d-85.795!3d30.357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889379e58302a7d1%3A0x5e44a3d9d4e7b0e!2sNorthwest%20Florida%20Beaches%20International%20Airport!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
