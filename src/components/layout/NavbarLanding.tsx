import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Operator', path: '/products/operator', icon: 'settings_input_component', desc: 'Autonomous process automation' },
  { name: 'Extract', path: '/products/extract', icon: 'database_upload', desc: 'Unstructured data extraction' },
  { name: 'Sage', path: '/products/sage', icon: 'psychology', desc: 'Natural language database queries' },
  { name: 'Pulse', path: '/products/pulse', icon: 'insights', desc: 'Contact center AI monitoring' },
  { name: 'Copilot', path: '/products/copilot', icon: 'code', desc: 'Enterprise LLM coding assistant' },
];

export default function NavbarLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-[#0E0E0E] sticky top-0 z-50 w-full max-w-none border-b border-white/5">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
            <img src="/icon.svg" alt="Rhobots AI" className="h-8 sm:h-9 w-auto" />
            RHOBOTS AI
          </Link>
          <div className="hidden md:flex gap-8 items-center h-full font-headline font-bold tracking-tighter uppercase">
            <Link className="text-[#D2F000] border-b-2 border-[#D2F000] pb-1 transition-colors duration-150" to="/">Platform</Link>

            {/* Products dropdown */}
            <div className="relative group">
              <button className="text-white/70 hover:text-[#D2F000] transition-colors duration-150 flex items-center gap-1">
                PRODUCTS
                <span className="material-symbols-outlined text-sm" style={{ fontSize: '16px' }}>expand_more</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#0E0E0E] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-[#1a1a1a] border-b border-white/5 last:border-0 group/item"
                  >
                    <span className="material-symbols-outlined text-[#D2F000] mt-0.5" style={{ fontSize: '18px' }}>{product.icon}</span>
                    <div>
                      <div className="text-white text-xs font-bold tracking-widest uppercase group-hover/item:text-[#D2F000] transition-colors">{product.name}</div>
                      <div className="text-white/40 text-[10px] font-normal normal-case tracking-normal mt-0.5">{product.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link className="text-white/70 hover:text-[#D2F000] transition-colors duration-150" to="/docs">Docs</Link> */}
            {/* <Link className="text-white/70 hover:text-[#D2F000] transition-colors duration-150" to="/pricing">Pricing</Link> */}
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex gap-4 text-white/50">
            {/* <span className="material-symbols-outlined cursor-pointer hover:text-[#D2F000] transition-all">search</span> */}
            <Link to="/demo" className="material-symbols-outlined cursor-pointer hover:text-[#D2F000] transition-all">terminal</Link>
          </div>
          <Link to="/demo" className="hidden sm:inline-block bg-[#D2F000] text-[#0E0E0E] px-6 py-2 rounded-none font-headline font-bold text-xs uppercase tracking-widest hover:opacity-80 active:opacity-70 transition-all">
            Request Demo
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0E0E0E] border-t border-white/5 px-4 pb-6">
          <div className="flex flex-col gap-1 font-headline font-bold tracking-tighter uppercase py-4">
            <Link
              className="text-[#D2F000] py-3 border-b border-white/5"
              to="/"
              onClick={() => setMobileOpen(false)}
            >
              Platform
            </Link>

            {/* Products accordion */}
            <button
              className="text-white/70 py-3 border-b border-white/5 flex justify-between items-center w-full text-left"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              PRODUCTS
              <span className="material-symbols-outlined text-sm" style={{ fontSize: '16px' }}>
                {productsOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {productsOpen && (
              <div className="flex flex-col gap-1 pl-2 pb-2">
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="flex items-center gap-3 px-3 py-3 hover:bg-[#1a1a1a] border-b border-white/5 last:border-0"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[#D2F000]" style={{ fontSize: '18px' }}>{product.icon}</span>
                    <div>
                      <div className="text-white text-xs font-bold tracking-widest uppercase">{product.name}</div>
                      <div className="text-white/40 text-[10px] font-normal normal-case tracking-normal mt-0.5">{product.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/demo"
            className="block w-full text-center bg-[#D2F000] text-[#0E0E0E] px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:opacity-80 active:opacity-70 transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
