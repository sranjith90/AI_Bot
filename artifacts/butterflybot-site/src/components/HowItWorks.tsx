import { Settings, Rocket, BarChart3 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const STEPS = [
  {
    step: "01",
    icon: Settings,
    title: "Configure your bot",
    description:
      "Use our visual flow builder to define conversation paths, connect to your knowledge base, and set escalation rules — no code required.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    step: "02",
    icon: Rocket,
    title: "Deploy in one click",
    description:
      "Publish your bot to your website, WhatsApp Business, Telegram, and more simultaneously. Your live bot is ready in under 60 seconds.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Analyse & optimise",
    description:
      "Review real conversation logs, drop-off funnels, and satisfaction scores. Use AI suggestions to continuously improve bot performance.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function HowItWorks() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-24 bg-background" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <span className={cn(
            "inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            How It Works
          </span>
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            From idea to{" "}
            <span className="gradient-text">live bot in minutes</span>
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-xl mx-auto transition-all duration-500 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Three simple steps to transform how you handle customer conversations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className={cn(
                    "relative text-center transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  data-testid={`step-${step.step}`}
                >
                  {/* Step number + icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-2",
                      step.bg
                    )}>
                      <Icon className={cn("w-9 h-9", step.color)} />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground/60 tracking-widest uppercase">
                      Step {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold font-serif text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-primary text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            data-testid="button-how-it-works-cta"
          >
            Get started — it's free
          </button>
          <p className="text-sm text-muted-foreground mt-3">No credit card required · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
