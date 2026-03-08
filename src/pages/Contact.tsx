import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = "w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <Layout>
      <section className="pt-32 pb-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">We're here to help with any questions about our services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="fade-in-up">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Mail, label: "Email", value: "info@kamolon.com", href: "mailto:info@kamolon.com" },
                  { icon: Phone, label: "Phone", value: "850-123-4567", href: "tel:8501234567" },
                  { icon: MapPin, label: "Location", value: "Panama City Beach, FL", href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Kamolon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109619.93942474256!2d-85.93!3d30.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8893e1f2ea3fded1%3A0xb30f85d3ceebf14f!2sPanama%20City%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="fade-in-up">
              <form onSubmit={handleSubmit} className="card-gradient border border-border rounded-lg p-8 space-y-6">
                <h3 className="text-xl font-bold mb-2">Send a Message</h3>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} placeholder="How can we help?" className={inputClass + " resize-none"} />
                </div>
                <button type="submit" className="w-full gold-gradient py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground rounded-sm transition-all duration-300 gold-glow gold-glow-hover">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
