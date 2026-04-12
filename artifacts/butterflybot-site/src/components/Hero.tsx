import { ArrowRight, MessageSquare, Sparkles, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const STATS = [
  { label: "Conversations handled", value: "50M+" },
  { label: "Businesses powered", value: "2,400+" },
  { label: "Avg response time", value: "< 1s" },
  { label: "Customer satisfaction", value: "97%" },
];

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen gradient-hero flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />
      </div>

      <div
        ref={ref}
        className={cn(
          "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8" data-testid="hero-badge">
          <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI-Powered Conversational Automation</span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6 text-foreground"
          data-testid="hero-headline"
        >
          Build smarter{" "}
          <span className="gradient-text block sm:inline">chatbots</span>{" "}
          <span className="block">in minutes</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          data-testid="hero-subheadline"
        >
          ButterflyBot lets you deploy intelligent, multi-channel AI assistants that understand 
          your customers, resolve queries instantly, and hand off seamlessly to your human team.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToContact}
            className="group gradient-primary text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex items-center gap-2 text-base"
            data-testid="button-hero-cta-primary"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToFeatures}
            className="text-foreground font-semibold px-8 py-4 rounded-2xl border border-border hover:bg-muted transition-all duration-200 flex items-center gap-2 text-base"
            data-testid="button-hero-cta-secondary"
          >
            <MessageSquare className="w-4 h-4" />
            See how it works
          </button>
        </div>

        {/* Floating chat preview */}
        <div className="relative max-w-md mx-auto mb-16 float-animation" data-testid="hero-preview">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-5 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">ButterflyBot</p>
                <p className="text-xs text-muted-foreground">Online · Typical reply in &lt;1s</p>
              </div>
              <div className="ml-auto w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3">
              <div className="bg-muted rounded-xl rounded-tl-sm px-4 py-2.5 text-sm text-foreground max-w-[85%]">
                Hi! How can I help you today? 👋
              </div>
              <div className="gradient-primary rounded-xl rounded-tr-sm px-4 py-2.5 text-sm text-white ml-auto max-w-[85%]">
                I need help tracking my order #4892
              </div>
              <div className="bg-muted rounded-xl rounded-tl-sm px-4 py-2.5 text-sm text-foreground max-w-[90%]">
                Found it! Your order is out for delivery and will arrive by 4 PM today. 📦
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 pt-3 border-t border-border">
              <input
                readOnly
                placeholder="Type a message..."
                className="flex-1 text-sm text-muted-foreground bg-transparent outline-none"
              />
              <button className="gradient-primary text-white p-1.5 rounded-lg">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          data-testid="hero-stats"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <p className="text-3xl font-bold font-serif gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust logos */}
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>Trusted by teams at Razorpay, Swiggy, HDFC, Nykaa and 2,400+ others</span>
        </div>
      </div>
    </section>
  );
}
