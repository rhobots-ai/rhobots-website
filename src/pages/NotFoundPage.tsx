import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center px-8">
      <SEO
        title="Page not found"
        description="The page you are looking for does not exist."
        path="/404"
        noIndex
      />
      <div className="text-center space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Error 404</p>
        <h1 className="font-headline text-4xl md:text-5xl font-semibold leading-[1.1] text-on-surface">
          Page not found
        </h1>
        <p className="mx-auto max-w-md font-body text-base leading-relaxed text-on-surface-variant">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block bg-primary px-6 py-3 font-body text-sm font-medium text-on-primary transition-colors hover:bg-primary-fixed"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
