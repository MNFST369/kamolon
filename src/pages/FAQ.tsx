import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "How does the meet-and-greet service work?",
    a: "Upon arrival at ECP Airport, your personal chauffeur will be waiting at the arrivals area with a sign displaying your name. They'll assist with your luggage and escort you directly to your premium vehicle."
  },
  {
    q: "What if my flight is delayed?",
    a: "We monitor all flights in real-time. If your flight is delayed, your chauffeur will automatically adjust their schedule—no extra charges, no stress. We'll be there when you land."
  },
  {
    q: "What safety measures do you have in place?",
    a: "All drivers are thoroughly vetted with background checks and professional training. Our vehicles are sanitized between every ride and maintained to the highest safety standards."
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Northwest Florida Beaches International Airport (ECP) and the greater Panama City Beach area, including hotels, resorts, and private residences throughout Bay County."
  },
  {
    q: "Can I book for a group or family?",
    a: "Absolutely. We offer both premium sedans and spacious SUVs to accommodate families and groups of up to 10 passengers. Child seats are available upon request."
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 24 hours in advance to guarantee availability, though we do our best to accommodate last-minute requests. Peak seasons may require earlier booking."
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer free cancellation up to 12 hours before your scheduled pickup. Cancellations within 12 hours may incur a fee. Contact us directly for special circumstances."
  },
];

const FAQ = () => {
  useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <section className="pt-32 pb-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Support</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to know about our premium shuttle service.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="fade-in-up card-gradient border border-border rounded-lg overflow-hidden transition-colors hover:border-primary/30">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-6" : "max-h-0"}`}>
                  <p className="px-6 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
