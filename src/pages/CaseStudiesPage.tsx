import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  organizationSchema,
  breadcrumbSchema,
  caseStudyCollectionSchema,
} from '../lib/structuredData';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <main>
      <SEO
        title="Case Studies - Production AI in the Real World"
        description="See how enterprises put production-grade Rhobots AI to work inside their existing operations — real results, no rip-and-replace."
        path="/case-studies"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
          ]),
          caseStudyCollectionSchema(
            caseStudies.map((s) => ({ name: s.title, path: `/case-studies/${s.slug}` })),
          ),
        ]}
      />
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">RESOURCES // CASE STUDIES</span>
          </div>
          <h1 className="font-headline text-3xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Proof, <br />
            <span className="text-primary-fixed">Not Promises.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            How enterprises put production-grade AI to work inside the systems that already run their business — measurable results, zero disruption.
          </p>
        </div>
      </section>

      {/* Case study list */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-16">
          The <span className="text-primary-fixed">Work</span>
        </h2>
        <div className="border-t border-outline">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 px-4 border-b border-outline group hover:bg-surface transition-all"
            >
              <div className="md:pr-12">
                <span className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase">{study.industry}</span>
                <h3 className="font-headline text-lg md:text-xl font-black text-white uppercase tracking-tighter group-hover:text-primary-fixed transition-colors">{study.title}</h3>
              </div>
              <div className="flex items-center gap-6 mt-3 md:mt-0 shrink-0">
                <span className="font-mono text-xs text-on-surface opacity-50 uppercase tracking-widest whitespace-nowrap">{study.listingMetric}</span>
                <span className="material-symbols-outlined text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
          Your <span className="text-primary-fixed">Operation</span> Next?
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          See what production-grade AI can do inside your existing systems. Book a walkthrough with our team.
        </p>
        <Link to="/demo" className="inline-block bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all">
          Request a Demo
        </Link>
      </section>
    </main>
  );
}
