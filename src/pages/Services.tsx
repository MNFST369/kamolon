import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Simulated unavailable dates (March 10-15, 2026)
const unavailableDates = ["2026-03-10", "2026-03-11", "2026-03-12", "2026-03-13", "2026-03-14", "2026-03-15"];

const timeSlots = Array.from({ length: 33 }, (_, i) => {
  const hour = Math.floor(i / 2) + 6;
  const min = i % 2 === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${min}`;
}).filter((t) => {
  const h = parseInt(t.split(":")[0]);
  return h < 22 || (h === 22 && t.endsWith("00"));
});

// Block 9-11 AM slots
const unavailableTimes = ["09:00", "09:30", "10:00", "10:30"];

const Services = () => {
  useScrollAnimation();
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    passengers: "1",
    vehicle: "sedan",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: Real booking requires backend integration to check/update availability
    alert("Booking submitted! We will confirm your reservation shortly. (Frontend simulation—backend integration needed for real availability.)");
  };

  const isDateUnavailable = (date: string) => unavailableDates.includes(date);
  const isTimeUnavailable = (time: string) => unavailableTimes.includes(time);

  const inputClass = "w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors";
  const labelClass = "block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide";

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Booking</h1>
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

          {/* Booking Form */}
          <div className="fade-in-up max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Reserve</p>
              <h2 className="text-3xl md:text-4xl font-bold">Book Your Ride</h2>
            </div>

            <form onSubmit={handleSubmit} className="card-gradient border border-border rounded-lg p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Pickup Location</label>
                  <select name="pickup" value={form.pickup} onChange={handleChange} required className={inputClass}>
                    <option value="">Select pickup</option>
                    <option value="ecp">ECP Airport</option>
                    <option value="hotel">Panama City Beach Hotels</option>
                    <option value="residence">Private Residence</option>
                    <option value="other">Other Location</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Drop-off Location</label>
                  <select name="dropoff" value={form.dropoff} onChange={handleChange} required className={inputClass}>
                    <option value="">Select drop-off</option>
                    <option value="ecp">ECP Airport</option>
                    <option value="hotel">Panama City Beach Hotels</option>
                    <option value="residence">Private Residence</option>
                    <option value="other">Other Location</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Passengers</label>
                  <select name="passengers" value={form.passengers} onChange={handleChange} className={inputClass}>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? "passenger" : "passengers"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Vehicle Type</label>
                  <select name="vehicle" value={form.vehicle} onChange={handleChange} className={inputClass}>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={(e) => {
                      if (isDateUnavailable(e.target.value)) {
                        alert("This date is unavailable. Please select another date.");
                        return;
                      }
                      handleChange(e);
                    }}
                    required
                    min="2026-03-08"
                    className={inputClass}
                  />
                  {form.date && isDateUnavailable(form.date) && (
                    <p className="text-destructive text-xs mt-1">This date is unavailable</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Time</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={(e) => {
                      if (isTimeUnavailable(e.target.value)) {
                        alert("This time slot is unavailable. Please select another time.");
                        return;
                      }
                      handleChange(e);
                    }}
                    required
                    className={inputClass}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} disabled={isTimeUnavailable(t)}>
                        {t} {isTimeUnavailable(t) ? "(Unavailable)" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="850-123-4567" className={inputClass} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground rounded-sm transition-all duration-300 gold-glow gold-glow-hover hover:scale-[1.02]"
              >
                Book Now
              </button>
              <p className="text-xs text-muted-foreground text-center">
                * This is a booking request. We will confirm availability via email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="fade-in-up text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Service Area</p>
            <h2 className="text-3xl font-bold">Our Coverage</h2>
          </div>
          <div className="fade-in-up max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
            <iframe
              title="Kamolon Service Area - Panama City Beach"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109619.93942474256!2d-85.93!3d30.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8893e1f2ea3fded1%3A0xb30f85d3ceebf14f!2sPanama%20City%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1"
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
