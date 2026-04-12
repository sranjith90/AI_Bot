import { Check, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for small teams and experimentation.",
    cta: "Start for free",
    highlight: false,
    features: [
      "1 chatbot",
      "Up to 1,000 conversations/month",
      "Website widget",
      "Basic analytics",
      "Email support",
      "Standard templates library",
    ],
  },
  {
    name: "Growth",
    price: "$100",
    period: "/month",
    description: "For growing businesses that need more power and channels.",
    cta: "Start free trial",
    highlight: true,
    badge: "Most popular",
    features: [
      "5 chatbots",
      "Up to 25,000 conversations/month",
      "WhatsApp + Telegram integration",
      "Advanced analytics & reporting",
      "Human handoff (Live chat)",
      "Multilingual support (30+ languages)",
      "Priority email & chat support",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organisations with complex needs and high volumes.",
    cta: "Contact sales",
    highlight: false,
    features: [
      "Unlimited chatbots",
      "Unlimited conversations",
      "All channels including Voice/IVR",
      "Dedicated account manager",
      "SLA guarantee (99.99% uptime)",
      "On-premise or private cloud",
      "SSO / SAML integration",
      "SOC 2 Type II & GDPR compliance",
      "Custom integrations & API access",
    ],
  },
];

export default function Pricing() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="pricing" className="py-24 bg-muted/30" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <span className={cn(
            "inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Pricing
          </span>
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-xl mx-auto transition-all duration-500 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Start free, scale as you grow. No hidden fees, no surprise bills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-8 transition-all duration-500",
                plan.highlight
                  ? "border-primary/40 bg-card shadow-xl shadow-primary/10 lg:-mt-4 lg:mb-4"
                  : "border-border bg-card",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-serif text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={cn(
                  "w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8",
                  plan.highlight
                    ? "gradient-primary text-white shadow-md hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                    : "border border-border text-foreground hover:bg-muted"
                )}
                data-testid={`button-plan-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans include a 14-day free trial of Growth features · Prices in SGD · GST applicable
        </p>
      </div>
    </section>
  );
}
