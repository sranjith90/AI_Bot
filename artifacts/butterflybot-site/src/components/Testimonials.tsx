import { Star, Quote } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const TESTIMONIALS = [
  {
    name: "Divya Nair",
    role: "Head of CX, RetailNow",
    initials: "DN",
    rating: 5,
    quote:
      "ButterflySG handles over 80% of our inbound queries without any human involvement. Our CSAT improved by 34 points in the first quarter alone.",
  },
  {
    name: "Sahil Gupta",
    role: "CTO, LoanKart",
    initials: "SG",
    rating: 5,
    quote:
      "We evaluated six platforms before choosing ButterflySG. The multilingual support for Mandarin, Malay, and Tamil was the deciding factor — nothing else came close.",
  },
  {
    name: "Ananya Pillai",
    role: "VP Growth, StyleHive",
    initials: "AP",
    rating: 5,
    quote:
      "Deploying on WhatsApp took us literally 15 minutes. We saw a 3x increase in lead conversions from WhatsApp within the first month. Absolutely magical.",
  },
  {
    name: "Rajat Bose",
    role: "Director, TechOps at HealthBridge",
    initials: "RB",
    rating: 5,
    quote:
      "The enterprise compliance features — data residency, HIPAA-ready logging, audit trails — gave our legal team confidence. Rare to see this level of maturity in an Indian SaaS product.",
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 bg-muted/30" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <span className={cn(
            "inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Customer Stories
          </span>
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Loved by{" "}
            <span className="gradient-text">2,400+ businesses</span>
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-xl mx-auto transition-all duration-500 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Don't take our word for it — hear from the teams transforming their customer experience.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.name}
              className={cn(
                "bg-card border border-border rounded-2xl p-7 card-glow transition-all duration-500 relative",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed text-sm mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
