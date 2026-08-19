import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';
import { Button, Eyebrow, Heading, Hero, Section } from '../components/ui';

const industries = ['Logistics', 'Insurance', 'Banking', 'Fintech', 'Industrial', 'IT services'];

const steps = [
  {
    title: 'We map how the work actually runs',
    body: 'Before any model is deployed, we go into the process and find where AI genuinely fits — and where it does not.',
  },
  {
    title: 'We deploy inside your stack',
    body: 'On your infrastructure, alongside the mainframes, databases and cloud systems you already run. No migration, no process rewrite.',
  },
  {
    title: 'Humans stay in the loop',
    body: 'Every judgment-heavy step keeps a human decision point, with full audit trails behind it.',
  },
];

const proof = [
  {
    value: '$2M',
    label: 'Operating cost saved in year one',
    source: 'National logistics operator',
    to: '/case-studies/logistics-operator',
  },
  {
    value: '300',
    label: 'People redeployed from data entry',
    source: 'National logistics operator',
    to: '/case-studies/logistics-operator',
  },
  {
    value: '99%',
    label: 'Field extraction accuracy, up from under 60%',
    source: 'Insurance / BFSI, on-prem',
    to: '/case-studies/insurance-extract',
  },
  {
    value: '0',
    label: 'Process changes required',
    source: 'National logistics operator',
    to: '/case-studies/logistics-operator',
  },
];

const products = [
  {
    name: 'Operator',
    path: '/products/operator',
    body: 'Automates repetitive and judgment-heavy work inside your existing processes, and improves the longer it runs.',
  },
  {
    name: 'Extract',
    path: '/products/extract',
    body: 'Turns PDFs, emails and handwritten notes into clean, structured data your systems can use.',
  },
  {
    name: 'Sage',
    path: '/products/sage',
    body: 'Answers questions about your business data in plain English — no dashboard to build, no analyst to wait on.',
  },
  {
    name: 'Pulse',
    path: '/products/pulse',
    body: 'Guides contact centre agents live, so calls resolve faster and quality stays consistent.',
  },
  {
    name: 'Copilot',
    path: '/products/copilot',
    body: 'A coding assistant trained on your codebase, running where your code already lives.',
  },
];

const studioPoints: [string, string][] = [
  ['Runs where your data lives', 'Your data centre or private cloud. Nothing leaves your environment.'],
  ['Trained on your proprietary data', 'Models fine-tuned on your documents and processes, kept private.'],
  ['Full audit trails', 'Every decision traceable, for compliance review and internal sign-off.'],
];

export default function LandingPage() {
  return (
    <main>
      <SEO
        title="Enterprise AI that runs inside your existing systems"
        description="Rhobots puts AI to work inside the systems you already run — no migration, no process change. $2M saved and 300 people redeployed in year one for a national logistics operator."
        path="/"
        jsonLd={organizationSchema()}
      />

      <Hero
        title="Put AI to work inside the systems you already run."
        subtitle="We layer AI onto your existing operations — no migration, no process rewrite, no rip-and-replace. First results in weeks, not years."
        actions={
          <>
            <Button to="/demo" size="lg">
              Request a demo
            </Button>
            <Button to="/case-studies" variant="ghost" size="lg">
              Read the case studies
            </Button>
          </>
        }
      />

      {/* Industries */}
      <section className="border-y border-outline-variant bg-background py-8">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-outline">
            <span className="text-on-surface-variant">In production across</span>
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — How it works */}
      <Section id="how-it-works">
        <Eyebrow number="01" className="mb-4">
          How it works
        </Eyebrow>
        <Heading level={2} className="max-w-2xl">
          AI added to the operation, not bolted over it.
        </Heading>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <div key={step.title}>
              <p className="mb-4 font-mono text-xs text-outline">{String(i + 1).padStart(2, '0')}</p>
              <Heading level={4} as="h3" className="mb-3">
                {step.title}
              </Heading>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 02 — Proof */}
      <Section tone="muted" divided>
        <Eyebrow number="02" className="mb-4">
          Proof
        </Eyebrow>
        <Heading level={2} className="max-w-2xl">
          Results from live deployments.
        </Heading>
        <div className="mt-14 grid gap-px border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <Link
              key={item.value + item.label}
              to={item.to}
              className="bg-background p-6 transition-colors hover:bg-surface-container-low"
            >
              <p className="font-headline text-4xl font-semibold text-on-surface">{item.value}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-on-surface">{item.label}</p>
              <p className="mt-4 font-mono text-xs text-outline">{item.source}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 font-body text-sm text-on-surface-variant">
          Every figure above links to the case study it came from.
        </p>
      </Section>

      {/* 03 — Products */}
      <Section id="products" divided>
        <Eyebrow number="03" className="mb-4">
          Products
        </Eyebrow>
        <Heading level={2} className="max-w-2xl">
          Five products. One platform underneath.
        </Heading>
        <div className="mt-14 border-t border-outline-variant">
          {products.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              className="group grid gap-2 border-b border-outline-variant py-7 transition-colors hover:bg-surface-container md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="font-headline text-lg font-semibold text-on-surface">{product.name}</span>
              <span className="font-body text-sm leading-relaxed text-on-surface-variant">{product.body}</span>
              <span className="font-mono text-xs text-outline transition-colors group-hover:text-on-surface">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 04 — Studio */}
      <Section tone="muted" divided>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow number="04" className="mb-4">
              Studio
            </Eyebrow>
            <Heading level={2}>Governance is not an afterthought.</Heading>
            <p className="mt-6 font-body text-base leading-relaxed text-on-surface-variant">
              Every Rhobots product is configured, monitored and audited from Studio — one place to see what
              the AI is doing across the organisation, and to prove it.
            </p>
            <div className="mt-8">
              <Button to="/security" variant="secondary">
                See our security posture
              </Button>
            </div>
          </div>
          <dl className="divide-y divide-outline-variant border-t border-outline-variant">
            {studioPoints.map(([term, description]) => (
              <div key={term} className="py-6">
                <dt className="font-headline text-base font-semibold text-on-surface">{term}</dt>
                <dd className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section divided container="narrow">
        <Heading level={2} align="center">
          Let&rsquo;s look at your process first.
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-center font-body text-base leading-relaxed text-on-surface-variant">
          We start by mapping how the work runs today. If AI does not belong somewhere, we will tell you.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/demo" size="lg">
            Request a demo
          </Button>
        </div>
      </Section>
    </main>
  );
}
