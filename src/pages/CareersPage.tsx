import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

const openings = [
  { team: 'Engineering', title: 'Senior Backend Engineer', location: 'Remote / San Francisco', type: 'Full-time' },
  { team: 'Engineering', title: 'ML Infrastructure Engineer', location: 'Remote / San Francisco', type: 'Full-time' },
  { team: 'Engineering', title: 'Frontend Engineer (React)', location: 'Remote', type: 'Full-time' },
  { team: 'Product', title: 'Product Manager — AI Platform', location: 'San Francisco', type: 'Full-time' },
  { team: 'Design', title: 'Senior Product Designer', location: 'Remote / San Francisco', type: 'Full-time' },
  { team: 'Go-to-Market', title: 'Enterprise Account Executive', location: 'New York', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <main>
      <SEO
        title="Careers - Join the Team"
        description="Join Rhobots AI and help build the cognitive layer for enterprise. Open positions in engineering, product, design, and go-to-market across San Francisco, New York, and remote."
        path="/careers"
        jsonLd={organizationSchema()}
      />
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">COMPANY // CAREERS</span>
          </div>
          <h1 className="font-headline text-3xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Build What <br />
            <span className="text-primary-fixed">Matters.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            Join a team redefining how the world's largest organizations deploy AI — without tearing down what already works.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-16">
          Open <span className="text-primary-fixed">Positions</span>
        </h2>
        <div className="border-t border-outline">
          {openings.map((role, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-6 px-4 border-b border-outline group hover:bg-surface transition-all cursor-pointer">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase">{role.team}</span>
                <h3 className="font-headline text-lg font-black text-white uppercase tracking-tighter group-hover:text-primary-fixed transition-colors">{role.title}</h3>
              </div>
              <div className="flex items-center gap-6 mt-2 md:mt-0">
                <span className="font-mono text-xs text-on-surface opacity-50 uppercase tracking-widest">{role.location}</span>
                <span className="font-mono text-xs text-on-surface opacity-50 uppercase tracking-widest">{role.type}</span>
                <span className="material-symbols-outlined text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
          Don't See <span className="text-primary-fixed">Your Role?</span>
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          We're always looking for exceptional talent. Send us your details and we'll reach out when the right opportunity opens up.
        </p>
        <Link to="/demo" className="inline-block bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
