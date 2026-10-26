import type { ReactNode } from 'react';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';
import { company, companyAddress, companyTel } from '../lib/company';
import { Button, Eyebrow, Heading, Hero, Section } from '../components/ui';

const linkClass = 'text-on-surface underline decoration-outline-variant underline-offset-4 hover:decoration-on-surface';

export default function ContactPage() {
  const rows: [string, ReactNode][] = [
    ['Company', company.legalName],
    ['Brand', `${company.brand} (a brand of ${company.legalName})`],
    [
      'Email',
      <a className={linkClass} href={`mailto:${company.email}`}>
        {company.email}
      </a>,
    ],
    ...(company.phone
      ? ([
          [
            'Phone',
            <a className={linkClass} href={`tel:${companyTel()}`}>
              {company.phone}
            </a>,
          ],
        ] as [string, ReactNode][])
      : []),
    ['Registered office', companyAddress()],
    ['CIN', company.cin],
    ...(company.gstin ? ([['GSTIN', company.gstin]] as [string, ReactNode][]) : []),
  ];

  return (
    <main>
      <SEO
        title="Contact"
        description={`Contact Rhobots, a brand of ${company.legalName}. Email, registered office and company details.`}
        path="/contact"
        jsonLd={organizationSchema()}
      />
      <Hero
        eyebrow="Contact"
        title="Get in touch with Rhobots."
        subtitle="For support, product questions, partnerships or legal matters, write to us and a person will reply."
      />

      <Section divided>
        <Eyebrow className="mb-4">Company details</Eyebrow>
        <Heading level={2}>{company.legalName}</Heading>
        <dl className="mt-10 border-t border-outline-variant">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-1 border-b border-outline-variant py-5 md:grid-cols-[14rem_1fr] md:gap-8"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-outline">{label}</dt>
              <dd className="font-body text-base text-on-surface">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10">
          <Button to="/demo">Request a demo</Button>
        </div>
      </Section>
    </main>
  );
}
