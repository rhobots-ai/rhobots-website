import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const products = [
  { name: 'Operator', path: '/products/operator', desc: 'Intelligent workflow automation' },
  { name: 'Extract', path: '/products/extract', desc: 'Automated document processing' },
  { name: 'Sage', path: '/products/sage', desc: 'Business intelligence in plain English' },
  { name: 'Pulse', path: '/products/pulse', desc: 'Real-time contact center intelligence' },
  { name: 'Copilot', path: '/products/copilot', desc: 'AI-powered development acceleration' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'transition-colors duration-150',
    isActive ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface',
  ].join(' ');

export default function NavbarLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 w-full border-b border-outline-variant">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 font-headline text-lg font-semibold text-on-surface">
            <img src="/icon.svg" alt="" className="h-7 w-auto" />
            Rhobots AI
          </Link>
          <div className="hidden items-center gap-8 font-body text-sm font-medium md:flex">
            <NavLink end className={linkClass} to="/">
              Platform
            </NavLink>

            {/* Products dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-on-surface-variant transition-colors duration-150 hover:text-on-surface">
                Products
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  expand_more
                </span>
              </button>
              <div className="invisible absolute left-0 top-full mt-2 w-72 border border-outline-variant bg-background opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block border-b border-outline-variant px-4 py-3 last:border-0 hover:bg-surface-container"
                  >
                    <div className="text-sm font-medium text-on-surface">{product.name}</div>
                    <div className="mt-0.5 text-xs font-normal text-on-surface-variant">{product.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink className={linkClass} to="/case-studies">
              Case studies
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/demo"
            className="hidden bg-primary px-5 py-2.5 font-body text-sm font-medium text-on-primary transition-colors hover:bg-primary-fixed sm:inline-block"
          >
            Request a demo
          </Link>
          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center text-on-surface md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-outline-variant bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col py-2 font-body text-sm font-medium">
            <NavLink
              end
              className="border-b border-outline-variant py-3 text-on-surface"
              to="/"
              onClick={() => setMobileOpen(false)}
            >
              Platform
            </NavLink>

            {/* Products accordion */}
            <button
              className="flex w-full items-center justify-between border-b border-outline-variant py-3 text-left text-on-surface-variant"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                {productsOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {productsOpen && (
              <div className="flex flex-col pl-3">
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="border-b border-outline-variant py-3 last:border-0"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="text-sm text-on-surface">{product.name}</div>
                    <div className="mt-0.5 text-xs font-normal text-on-surface-variant">{product.desc}</div>
                  </Link>
                ))}
              </div>
            )}

            <NavLink
              className="border-b border-outline-variant py-3 text-on-surface-variant"
              to="/case-studies"
              onClick={() => setMobileOpen(false)}
            >
              Case studies
            </NavLink>
          </div>

          <Link
            to="/demo"
            className="mt-4 block w-full bg-primary px-5 py-3 text-center font-body text-sm font-medium text-on-primary"
            onClick={() => setMobileOpen(false)}
          >
            Request a demo
          </Link>
        </div>
      )}
    </nav>
  );
}
