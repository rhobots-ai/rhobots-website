import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center px-8">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
        noIndex
      />
      <div className="text-center space-y-8">
        <div className="inline-block px-3 py-1 bg-primary-fixed/10 border-l-4 border-primary-fixed">
          <span className="font-mono text-xs tracking-widest text-primary-fixed uppercase">ERROR_CODE: 404</span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-white uppercase">
          SIGNAL <span className="text-primary-fixed">LOST</span>
        </h1>
        <p className="text-on-surface text-sm max-w-md mx-auto">
          The requested terminal endpoint could not be located within the RHOBOTS network.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary-fixed text-on-primary-fixed px-10 py-4 font-headline font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(210,240,0,0.4)] transition-all"
        >
          _RETURN_TO_BASE
        </Link>
      </div>
    </div>
  );
}
