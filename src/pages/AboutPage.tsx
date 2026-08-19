import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

export default function AboutPage() {
  return (
    <main>
      <SEO
        title="About Rhobots"
        description="We build AI into systems that are already running. Map the process as it works today, then add AI only where it earns its place."
        path="/about"
        jsonLd={organizationSchema()}
      />
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline relative overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <p className="font-mono text-[10px] tracking-[0.18em] text-outline uppercase mb-8">About</p>
          <h1 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface leading-[1.1] mb-8">
            We build AI into systems that are already running.
          </h1>
          <p className="text-on-surface-variant text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            Most enterprise AI projects stall because they ask the business to change first. We take the opposite approach: map the process as it runs today, then add AI only where it earns its place.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline">
          <div className="p-12 border-b md:border-b-0 md:border-r border-outline">
            <h3 className="font-headline text-2xl font-semibold text-on-surface mb-6">Mission</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              To make enterprise AI accessible to every organization. We believe no company should have to rebuild from scratch to benefit from AI. Rhobots works with what you have, delivering results from day one.
            </p>
          </div>
          <div className="p-12">
            <h3 className="font-headline text-2xl font-semibold text-on-surface mb-6">Vision</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              A world where every business benefits from AI — not by replacing what works, but by making it smarter. We bridge the gap between where you are and where AI can take you.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <h2 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface mb-16">
          How we work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-outline">
          {[
            { icon: 'security', title: 'Enterprise-first security', desc: 'Meets the strictest compliance standards including SOC 2 and HIPAA. Your data stays within your control, always.' },
            { icon: 'integration_instructions', title: 'Zero-disruption integration', desc: 'Works with your mainframes, databases, and cloud systems. No code changes, no downtime, no disruption to daily operations.' },
            { icon: 'visibility', title: 'Radical transparency', desc: 'Complete audit trails, clear explanations for every AI decision, and human oversight built into every workflow.' },
          ].map((v) => (
            <div key={v.title} className="p-12 border-r border-b border-outline group hover:bg-surface transition-all">
              <div className="w-10 h-10 flex items-center justify-center bg-surface-container text-primary-fixed mb-8 group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
                <span className="material-symbols-outlined">{v.icon}</span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-on-surface mb-4">{v.title}</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface mb-8">
          Talk to us
        </h2>
        <p className="text-on-surface-variant text-sm max-w-lg mx-auto mb-12">
          Tell us about a process you would like to look at, or come and build these systems with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-0 justify-center">
          <Link to="/demo" className="bg-primary text-on-primary px-10 py-5 font-body font-medium text-sm hover:bg-primary-fixed-dim transition-all text-center">
            Request a demo
          </Link>
          <Link to="/careers" className="bg-surface border border-outline text-on-surface px-10 py-5 font-headline font-semibold text-sm hover:bg-surface-container transition-all text-center">
            View open roles
          </Link>
        </div>
      </section>
    </main>
  );
}
