import { useState } from "react";
import { Send, CheckCircle, Mail, MessageSquare, Phone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CONTACT_INFO = [
  { icon: Mail, label: "Email us", value: "hello@butterflybot.in", href: "mailto:hello@butterflybot.in" },
  { icon: Phone, label: "Call us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MessageSquare, label: "Live chat", value: "Chat with us on the site", href: "#" },
];

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      /*
       * TODO: Replace with real API call when backend is ready:
       * await contactService.sendMessage(formData);
       */
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitted(true);
    } catch {
      /* handle error */
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div ref={ref}>
            <span className={cn(
              "inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3 transition-all duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              Contact
            </span>
            <h2 className={cn(
              "font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Let's start a{" "}
              <span className="gradient-text">conversation</span>
            </h2>
            <p className={cn(
              "text-muted-foreground leading-relaxed mb-10 transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Ready to transform your customer experience? Our team will help you get set up 
              with a personalised demo and onboarding support.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              {CONTACT_INFO.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted transition-all duration-200 group",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                    data-testid={`contact-method-${index}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right – form */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" data-testid="contact-success">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", message: "" }); }}
                    className="mt-6 text-primary text-sm font-medium hover:underline"
                    data-testid="button-send-another"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">Send us a message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Priya Sharma"
                        className={cn(
                          "w-full px-4 py-2.5 rounded-xl text-sm border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all",
                          errors.name ? "border-destructive" : "border-border"
                        )}
                        data-testid="input-name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="priya@company.com"
                        className={cn(
                          "w-full px-4 py-2.5 rounded-xl text-sm border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all",
                          errors.email ? "border-destructive" : "border-border"
                        )}
                        data-testid="input-email"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      data-testid="input-company"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your use case, team size, and what you're hoping to achieve..."
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-sm border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none",
                        errors.message ? "border-destructive" : "border-border"
                      )}
                      data-testid="textarea-message"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full gradient-primary text-white font-semibold py-3.5 rounded-xl shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    data-testid="button-submit-contact"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
