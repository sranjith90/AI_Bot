import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Zap } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold font-serif tracking-tight">
                <span className="gradient-text">Butterfly</span>
                <span className="text-foreground">Bot</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-all duration-200"
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-signin"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="gradient-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              data-testid="button-get-started"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4"
          data-testid="nav-mobile"
        >
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full text-sm font-medium text-muted-foreground py-2 hover:text-foreground transition-colors"
                data-testid="mobile-button-signin"
              >
                Sign In
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full gradient-primary text-white text-sm font-semibold py-3 rounded-xl shadow hover:opacity-90 transition-all"
                data-testid="mobile-button-get-started"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
