import { Users, Award, MapPin, Lightbulb } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Customer-first innovation",
    description: "Every feature we ship is driven by real customer problems — not product roadmap vanity.",
  },
  {
    icon: Users,
    title: "Built for Singapore, ready for the world",
    description: "Designed with Singaporean languages, regulations, and business workflows at the core.",
  },
  {
    icon: Award,
    title: "Reliability you can trust",
    description: "99.99% uptime SLA backed by a distributed infrastructure built for enterprise scale.",
  },
];

const TEAM_MEMBERS = [
  { name: "Aryan Mehta", role: "Co-founder & CEO", initials: "AM" },
  { name: "Priya Sharma", role: "Co-founder & CTO", initials: "PS" },
  { name: "Ravi Kumar", role: "VP of Product", initials: "RK" },
  { name: "Neha Joshi", role: "Head of Design", initials: "NJ" },
];

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – text content */}
          <div ref={ref}>
            <span className={cn(
              "inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              About Us
            </span>
            <h2 className={cn(
              "font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              We're on a mission to make{" "}
              <span className="gradient-text">AI accessible</span> to every business
            </h2>
            <p className={cn(
              "text-muted-foreground leading-relaxed mb-8 transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Founded in 2021 in Singapore, ButterflySG was born from a simple frustration: 
              building intelligent chatbots required a team of ML engineers, months of effort, 
              and enormous budgets. We set out to change that.
            </p>
            <p className={cn(
              "text-muted-foreground leading-relaxed mb-10 transition-all duration-500 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Today, over 2,400 businesses — from startups to Fortune 500 enterprises — use 
              ButterflySG to handle customer queries, generate leads, and deliver experiences that 
              feel genuinely human.
            </p>

            {/* Values */}
            <div className="space-y-5">
              {VALUES.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className={cn(
                      "flex items-start gap-4 transition-all duration-500",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                    data-testid={`about-value-${index}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right – team & location */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {/* Team grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-card border border-border rounded-2xl p-5 card-glow"
                  data-testid={`team-member-${member.initials.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm mb-3">
                    {member.initials}
                  </div>
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Company info card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Headquartered in Singapore</p>
                  <p className="text-xs text-muted-foreground">CBD · One-North · Jurong East</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {[
                  { label: "Founded", value: "2021" },
                  { label: "Team size", value: "80+" },
                  { label: "Funding", value: "Series A" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-bold font-serif text-lg gradient-text">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
