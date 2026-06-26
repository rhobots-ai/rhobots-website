import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { breadcrumbSchema, caseStudySchema } from '../lib/structuredData';
import { getCaseStudy } from '../data/caseStudies';

/** Render the title with `highlight` (if present) wrapped in the accent color. */
function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-primary-fixed">{highlight}</span>
      {after}
    </>
  );
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const path = `/case-studies/${study.slug}`;

  return (
    <main>
      <SEO
        title={`Case Study - ${study.industry}`}
        description={study.summary}
        path={path}
        ogType="article"
        jsonLd={[
          caseStudySchema({
            title: study.title,
            description: study.summary,
            industry: study.industry,
            path,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: study.industry, path },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <Link to="/case-studies" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-on-surface opacity-60 hover:opacity-100 hover:text-primary-fixed uppercase transition-all mb-10">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
            All case studies
          </Link>
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8 ml-1 md:ml-4">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">CASE STUDY // {study.industry} · {study.eyebrow}</span>
          </div>
          <h1 className="font-headline text-3xl md:text-6xl font-black tracking-tighter text-white leading-[1.05] mb-8 uppercase">
            {renderTitle(study.title, study.highlight)}
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-2xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-8 md:px-24 py-16 md:py-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {study.metrics.map((m) => (
            <div key={m.label} className="bg-surface-container-high p-7 md:p-10">
              <span className="block font-headline text-5xl md:text-6xl font-black text-primary-fixed leading-none">{m.value}</span>
              <p className="font-headline text-xs font-bold uppercase tracking-widest text-white mt-4">{m.label}</p>
              {m.sub && <p className="text-on-surface-variant text-sm mt-3">{m.sub}</p>}
              {m.subDim && <p className="font-mono text-[11px] text-on-surface opacity-40 uppercase tracking-wider mt-1">{m.subDim}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Approach */}
      <section className="px-8 md:px-24 py-16 md:py-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline">
          <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-outline">
            <span className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase">// The Challenge</span>
            <p className="text-on-surface text-sm md:text-base leading-relaxed opacity-80 mt-6">{study.challenge}</p>
          </div>
          <div className="p-10 md:p-12">
            <span className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase">// The Approach</span>
            <p className="text-on-surface text-sm md:text-base leading-relaxed opacity-80 mt-6">{study.approach}</p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="px-8 md:px-24 py-16 md:py-24 bg-surface border-b border-outline">
        <div className="max-w-4xl border-l-4 border-primary-fixed pl-8 md:pl-12 py-2">
          <p className="font-headline text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-6">{study.pullQuote.heading}</p>
          <p className="text-on-surface text-sm md:text-base leading-relaxed opacity-70 max-w-2xl">{study.pullQuote.body}</p>
        </div>
      </section>

      {/* Powered by */}
      <section className="px-8 md:px-24 py-16 md:py-24 bg-background border-b border-outline">
        <span className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase">// Powered By</span>
        <Link
          to={study.poweredBy.path}
          className="group mt-6 block bg-surface-container-high p-8 md:p-12 hover:bg-surface-bright transition-colors relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed"></div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
            <span className="font-headline text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-primary-fixed transition-colors">{study.poweredBy.product}</span>
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">{study.poweredBy.tagline}</span>
          </div>
          <p className="text-on-surface text-sm md:text-base leading-relaxed opacity-70 max-w-2xl">{study.poweredBy.description}</p>
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-primary-fixed uppercase mt-8 opacity-70 group-hover:opacity-100 transition-opacity">
            Explore {study.poweredBy.product}
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </span>
        </Link>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
          See What <span className="text-primary-fixed">Operator</span> Can Do
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          In your operation, inside your existing systems. Book a walkthrough with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-0 justify-center">
          <Link to="/demo" className="bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all text-center">
            Request a Demo
          </Link>
          <Link to="/products/operator" className="bg-surface border border-outline text-white px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-outline transition-all text-center">
            Explore Operator
          </Link>
        </div>
      </section>
    </main>
  );
}
