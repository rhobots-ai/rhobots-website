import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';
import { Button, Eyebrow, Heading, Hero, Section } from '../components/ui';

const industries = ['Logistics', 'Insurance', 'Banking', 'Fintech', 'Industrial', 'IT services'];

/** Market context. Figures and sources mirror the Partners page. */
const whyNow = [
  {
    value: '$6 : $1',
    label: 'Services-to-software spend',
    body: 'The labour budget AI is now unlocking, far larger than the software line it sits next to.',
  },
  {
    value: '+75%',
    label: 'Annual growth in LLM budgets',
    body: 'Enterprise AI spend compounds year over year rather than plateauing.',
  },
  {
    value: '61%',
    label: 'Of global VC went to AI in 2025',
    body: 'Capital, talent and attention are concentrating in this category.',
  },
];

const delivery = [
  {
    kicker: 'Platform',
    title: 'Rhobots Studio',
    body: 'Configure, fine-tune, host and govern every agent from one place, inside your perimeter. Each engagement starts from what the last one built.',
  },
  {
    kicker: 'People',
    title: 'A small, senior team on the ground',
    body: 'One forward-deployed team works alongside yours for the life of the programme, rather than a rotating bench.',
  },
  {
    kicker: 'Commercial',
    title: 'Fixed first scope, then expand',
    body: 'We agree one painful, budgeted problem and a definition of done before we start. Scope grows role by role once it is proven.',
  },
];

/** The role-agents that sit on top of Studio. */
const layers = [
  {
    name: 'Operator',
    role: 'Runs the process',
    path: '/products/operator',
    body: 'Takes over the repetitive and judgment-heavy steps of an existing workflow, coordinating across old and new systems without brittle integrations.',
  },
  {
    name: 'Extract',
    role: 'Reads the documents',
    path: '/products/extract',
    body: 'Turns PDFs, emails, scans and handwritten notes into typed fields your systems can consume directly.',
  },
  {
    name: 'Sage',
    role: 'Answers the questions',
    path: '/products/sage',
    body: 'Answers questions about the business in plain English, against your existing data sources, with the reasoning attached.',
  },
  {
    name: 'Pulse',
    role: 'Handles the conversation',
    path: '/products/pulse',
    body: 'Listens to calls live, prompts the agent with the next best step, and flags compliance risk in the moment.',
  },
  {
    name: 'Copilot',
    role: 'Writes the software',
    path: '/products/copilot',
    body: 'Refines the ticket, writes the first pass and reviews the pull request, trained on your repositories and conventions.',
  },
];

const focusAreas = [
  ['High-volume operations', 'Data entry, document handling and the judgment-heavy work around them.'],
  ['Customer-facing conversations', 'Contact centre and support, with a human decision point kept where it counts.'],
  ['Engineering throughput', 'Ticket-to-production delivery inside your existing toolchain.'],
];

const engagements = [
  {
    industry: 'Logistics',
    title: 'One of India’s largest logistics companies',
    summary:
      'High-volume data entry and document handling automated inside the existing operation. $2M saved and 300 people redeployed in year one, with no process overhaul. Targeting $10M and 700 people in year two.',
    to: '/case-studies/logistics-operator',
  },
  {
    industry: 'Insurance / BFSI',
    title: 'On-premise document AI, fine-tuned',
    summary:
      'Field extraction accuracy raised from under 60% to 99% on a fine-tuned model running entirely inside the customer’s own environment.',
    to: '/case-studies/insurance-extract',
  },
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
        title={
          <>
            AI built into the operation you already run.
            <br />
            In production in weeks, not years.
          </>
        }
        subtitle="Keep the systems, the process and the people that already work. Rhobots works alongside your teams to map, deploy and run production-grade AI inside your own perimeter — one small, purpose-built model per role, rather than one general model for everything."
        actions={
          <>
            <Button to="/demo" size="lg">
              Work with us
            </Button>
            <Button to="/case-studies" variant="ghost" size="lg">
              Read the case studies
            </Button>
          </>
        }
      />

      {/* Headline proof, in the position hangten gives its funding stat */}
      <section className="border-y border-outline-variant bg-surface-container-low py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-baseline md:gap-14">
            <p className="font-headline text-5xl font-semibold text-on-surface md:text-6xl">$2M</p>
            <p className="max-w-xl font-body text-base leading-relaxed text-on-surface-variant">
              Operating cost saved in year one for a national logistics operator, with 300 people
              redeployed off data entry and zero changes to the underlying process.{' '}
              <Link
                to="/case-studies/logistics-operator"
                className="text-primary-fixed underline underline-offset-4"
              >
                Read the case study
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="border-b border-outline-variant bg-background py-8">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-outline">
            <span className="text-on-surface-variant">In production across</span>
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — Offering */}
      <Section id="offering">
        <Eyebrow number="01" className="mb-4">
          Offering
        </Eyebrow>
        <Heading level={2} className="max-w-3xl">
          More output from the operations you already fund.
        </Heading>
        <div className="mt-8 grid gap-6 md:max-w-3xl">
          <p className="font-body text-base leading-relaxed text-on-surface-variant">
            We take a process your business already runs and already budgets for, and we make it run
            far more efficiently — without a migration, a re-platform, or a rewrite of how the work
            is done.
          </p>
          <p className="font-body text-base leading-relaxed text-on-surface-variant">
            That value takes different shapes. On some engagements it shows up mostly as cost taken
            out, on others as people freed for higher-value work, and often as both. We agree which
            one matters to you before we scope anything.
          </p>
          <p className="font-body text-base leading-relaxed text-on-surface-variant">
            Where AI does not genuinely fit, we say so. That judgment is the first thing we deliver.
          </p>
        </div>

        {/* Why now */}
        <div className="mt-20">
          <Heading level={3} as="h3" className="mb-4">
            Why now
          </Heading>
          <p className="max-w-3xl font-body text-base leading-relaxed text-on-surface-variant">
            The cost of building software around how a specific business actually works is falling
            fast. For years that cost was the labour needed to bend generic products into shape.
            Purpose-built models now do much of that work, and the budget it unlocks sits in the
            services line, not the software line.
          </p>
          <div className="mt-10 grid gap-px border border-outline-variant bg-outline-variant md:grid-cols-3">
            {whyNow.map((stat) => (
              <div key={stat.value} className="bg-background p-6">
                <p className="font-headline text-3xl font-semibold text-on-surface">{stat.value}</p>
                <p className="mt-3 font-body text-sm font-medium text-on-surface">{stat.label}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                  {stat.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-outline">
            Sources: Sequoia � a16z CIO survey � OECD venture data � 2025–26
          </p>
        </div>

        {/* How we deliver it */}
        <div className="mt-20">
          <Heading level={3} as="h3" className="mb-10">
            How we deliver it
          </Heading>
          <dl className="grid gap-px border border-outline-variant bg-outline-variant md:grid-cols-3">
            {delivery.map((item) => (
              <div key={item.kicker} className="bg-background p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">
                  {item.kicker}
                </p>
                <dt className="mt-3 font-headline text-base font-semibold text-on-surface">
                  {item.title}
                </dt>
                <dd className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 02 — Platform */}
      <Section id="platform" tone="muted" divided>
        <Eyebrow number="02" className="mb-4">
          Platform
        </Eyebrow>
        <Heading level={2} className="max-w-3xl">
          One model per role, not one model for everything.
        </Heading>
        <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-on-surface-variant">
          Rhobots Studio is the foundation: it configures, fine-tunes, hosts and governs every agent
          inside your environment. On top of it sit small, purpose-built models, each trained on
          exactly what one role does. They cost a fraction of a general-purpose model, they can be
          audited, and the weights and data stay yours.
        </p>
        <div className="mt-14 border-t border-outline-variant">
          {layers.map((layer) => (
            <Link
              key={layer.path}
              to={layer.path}
              className="group grid gap-2 border-b border-outline-variant py-7 transition-colors hover:bg-background md:grid-cols-[7rem_14rem_1fr] md:items-baseline md:gap-8"
            >
              <span className="font-headline text-lg font-semibold text-on-surface">
                {layer.name}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-outline">
                {layer.role}
              </span>
              <span className="font-body text-sm leading-relaxed text-on-surface-variant">
                {layer.body}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-3xl font-body text-sm leading-relaxed text-on-surface-variant">
          Work flows down into the agents from the systems you already run. Results flow back into
          those same systems, and Studio records every step for audit.
        </p>
        <div className="mt-10">
          <Button to="/security" variant="secondary">
            See our security posture
          </Button>
        </div>
      </Section>

      {/* 03 — Case studies */}
      <Section id="case-studies" divided>
        <Eyebrow number="03" className="mb-4">
          Case studies
        </Eyebrow>
        <Heading level={2} className="max-w-3xl">
          Where it goes to work.
        </Heading>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant">
          Three areas of focus, and the engagements running against them today.
        </p>

        <div className="mt-14">
          <Eyebrow className="mb-6">Three areas of focus</Eyebrow>
          <dl className="grid gap-px border border-outline-variant bg-outline-variant md:grid-cols-3">
            {focusAreas.map(([term, description]) => (
              <div key={term} className="bg-background p-6">
                <dt className="font-headline text-base font-semibold text-on-surface">{term}</dt>
                <dd className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <Eyebrow className="mb-6">Selected engagements</Eyebrow>
          <div className="border-t border-outline-variant">
            {engagements.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group block border-b border-outline-variant py-8 transition-colors hover:bg-surface-container-low"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">
                  {item.industry}
                </p>
                <p className="mt-3 font-headline text-lg font-semibold text-on-surface">{item.title}</p>
                <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-on-surface-variant">{item.summary}</p>
                <span className="mt-4 inline-block font-mono text-xs text-outline transition-colors group-hover:text-on-surface">
                  Read the case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Hiring */}
      <Section tone="muted" divided>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Heading level={3} as="h2">
              We&rsquo;re hiring
            </Heading>
            <p className="mt-4 font-body text-base leading-relaxed text-on-surface-variant">
              We&rsquo;re growing across delivery, engineering and research.
            </p>
          </div>
          <Button to="/careers" variant="secondary">
            See our open roles
          </Button>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section divided container="narrow">
        <Heading level={2} align="center">
          Let&rsquo;s look at your process first.
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-center font-body text-base leading-relaxed text-on-surface-variant">
          We start by mapping how the work runs today. If AI does not belong somewhere, we will tell
          you.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/demo" size="lg">
            Work with us
          </Button>
        </div>
      </Section>
    </main>
  );
}
