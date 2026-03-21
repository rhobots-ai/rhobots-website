import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

export default function AboutPage() {
  return (
    <main>
      <SEO
        title="About - Building the Cognitive Layer"
        description="Rhobots AI is the structural layer between legacy enterprise systems and generative intelligence. Learn about our mission to democratize cognitive automation for global enterprise."
        path="/about"
        jsonLd={organizationSchema()}
      />
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">COMPANY // ABOUT</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Building the <br />
            <span className="text-primary-fixed">Cognitive Layer.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            RHOBOTS AI is the structural layer between legacy enterprise systems and generative intelligence — production-grade AI without the friction.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline">
          <div className="p-12 border-b md:border-b-0 md:border-r border-outline">
            <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Mission</h3>
            <p className="text-on-surface text-sm leading-relaxed opacity-70">
              To democratize cognitive automation for global enterprise. We believe every organization — regardless of technical debt or infrastructure age — deserves access to production-grade AI that works within their existing systems.
            </p>
          </div>
          <div className="p-12">
            <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Vision</h3>
            <p className="text-on-surface text-sm leading-relaxed opacity-70">
              A world where AI augments every enterprise workflow — not by replacing infrastructure, but by bridging the gap between legacy systems and next-generation intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-16">
          Core <span className="text-primary-fixed">Principles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-outline">
          {[
            { icon: 'security', title: 'Enterprise-First Security', desc: 'SOC 2 Type II, HIPAA-ready, and on-premise deployment options. Your data never leaves your perimeter unless you want it to.' },
            { icon: 'integration_instructions', title: 'Zero-Disruption Integration', desc: 'SDK wrappers that connect to mainframes, legacy databases, and modern cloud — without changing a single line of core logic.' },
            { icon: 'visibility', title: 'Radical Transparency', desc: 'Full audit trails, explainable AI outputs, and human-in-the-loop controls at every step of the automation chain.' },
          ].map((v) => (
            <div key={v.title} className="p-12 border-r border-b border-outline group hover:bg-surface transition-all">
              <div className="w-10 h-10 flex items-center justify-center bg-outline text-primary-fixed mb-8 group-hover:bg-primary-fixed group-hover:text-background transition-colors">
                <span className="material-symbols-outlined">{v.icon}</span>
              </div>
              <h3 className="font-headline text-xl font-black text-white uppercase tracking-tighter mb-4">{v.title}</h3>
              <p className="text-on-surface text-xs leading-relaxed opacity-70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
          Join the <span className="text-primary-fixed">Mission</span>
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          We're building the future of enterprise AI. Get in touch to learn more or explore open positions.
        </p>
        <div className="flex flex-col sm:flex-row gap-0 justify-center">
          <Link to="/demo" className="bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all text-center">
            Request a Demo
          </Link>
          <Link to="/careers" className="bg-surface border border-outline text-white px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-outline transition-all text-center">
            View Careers
          </Link>
        </div>
      </section>
    </main>
  );
}
