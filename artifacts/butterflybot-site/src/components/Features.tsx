import {
  Bot,
  Globe,
  Zap,
  BarChart3,
  ShieldCheck,
  RefreshCcw,
  Workflow,
  Languages,
  Headphones,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const FEATURES = [
  {
    icon: Bot,
    title: "Natural Language Understanding",
    description:
      "Powered by state-of-the-art LLMs, your bot understands intent, context, and nuance — not just keywords.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Globe,
    title: "Omni-channel Deployment",
    description:
      "Deploy on your website, WhatsApp, Telegram, Instagram DM, and more — from a single platform.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "Sub-second response times so customers never wait. Our edge infrastructure handles millions of concurrent sessions.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Drill into conversation flows, drop-off points, satisfaction scores, and resolution rates with live dashboards.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified. End-to-end encryption, data residency controls, and GDPR/PDPB compliance built in.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: RefreshCcw,
    title: "Seamless Handoff",
    description:
      "When the bot can't handle it, it hands off to your human agents instantly — with full context and conversation history.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Workflow,
    title: "No-code Builder",
    description:
      "Drag-and-drop flow builder means your product team can update conversation scripts without a developer.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Support customers in 30+ languages including Hindi, Tamil, Bengali, and all major Indian regional languages.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    icon: Headphones,
    title: "Voice & Text Unified",
    description:
      "Handle voice calls, IVR flows, and text chats from the same intelligent brain — consistently.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bg: string;
  index: number;
  isVisible: boolean;
}

function FeatureCard({ icon: Icon, title, description, color, bg, index, isVisible }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-2xl p-6 card-glow transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-testid={`feature-card-${index}`}
    >
      <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-4", bg)}>
        <Icon className={cn("w-5 h-5", color)} />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="features" className="py-24 bg-muted/30" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <span className={cn(
            "inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Platform Features
          </span>
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Everything you need to{" "}
            <span className="gradient-text">automate conversations</span>
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            From no-code flow builders to enterprise-grade security — ButterflySG has every tool
            your team needs to deliver outstanding automated customer experiences.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
