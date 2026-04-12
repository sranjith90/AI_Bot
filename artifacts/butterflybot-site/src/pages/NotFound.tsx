import { Link } from "wouter";
import { ArrowLeft, SearchX } from "lucide-react";

/**
 * 404 Not Found page.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 gradient-hero" data-testid="page-not-found">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-serif text-6xl font-bold gradient-text mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-3">Page not found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link href="/">
          <button
            className="inline-flex items-center gap-2 gradient-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
            data-testid="button-go-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
