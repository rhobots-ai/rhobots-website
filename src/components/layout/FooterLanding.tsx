import { Link } from 'react-router-dom';

const columns = [
  {
    heading: 'Products',
    links: [
      { label: 'Studio', to: '/' },
      { label: 'Operator', to: '/products/operator' },
      { label: 'Extract', to: '/products/extract' },
      { label: 'Sage', to: '/products/sage' },
      { label: 'Pulse', to: '/products/pulse' },
      { label: 'Copilot', to: '/products/copilot' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Case studies', to: '/case-studies' },
      { label: 'Security', to: '/security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Legal', to: '/legal' },
      { label: 'Privacy', to: '/privacy' },
    ],
  },
];

export default function FooterLanding() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-4 block font-headline text-base font-semibold text-on-surface">
              Rhobots AI
            </Link>
            <p className="max-w-xs font-body text-sm leading-relaxed text-on-surface-variant">
              Enterprise AI that works with the systems you already have.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h5 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-outline">
                {column.heading}
              </h5>
              <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                {column.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link className="transition-colors hover:text-on-surface" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-outline-variant pt-8 font-body text-sm text-on-surface-variant md:flex-row md:items-center">
          <p>&copy; 2026 Rhobots AI. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link className="transition-colors hover:text-on-surface" to="/demo">Request a demo</Link>
            <Link className="transition-colors hover:text-on-surface" to="/terms">Terms</Link>
            <Link className="transition-colors hover:text-on-surface" to="/cookie">Cookie</Link>
            <Link className="transition-colors hover:text-on-surface" to="/sla">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
