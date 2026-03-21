import { Link, useLocation } from 'react-router-dom';

const productLinks = [
  { name: 'Operator', path: '/products/operator' },
  { name: 'Extract', path: '/products/extract' },
  { name: 'Sage', path: '/products/sage' },
  { name: 'Pulse', path: '/products/pulse' },
  { name: 'Copilot', path: '/products/copilot' },
];

export default function NavbarProduct() {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center w-full px-6 h-16 bg-[#0E0E0E] fixed top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-black tracking-widest text-white uppercase font-headline">RHOBOTS</Link>
        <div className="hidden md:flex items-center gap-6 font-headline font-bold tracking-tighter uppercase text-sm">
          {productLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={
                  isActive
                    ? 'text-[#D2F000] border-b-2 border-[#D2F000] pb-1 font-bold'
                    : 'text-[#393939] hover:text-white transition-colors'
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#393939] hover:text-[#D2F000] transition-colors p-2">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="text-[#393939] hover:text-[#D2F000] transition-colors p-2 relative">
          <span className="material-symbols-outlined">notifications_active</span>
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#D2F000] rounded-full"></span>
        </button>
        <Link to="/demo" className="ml-4 px-4 py-1.5 bg-transparent border border-[#393939] text-[#D2F000] font-mono text-xs hover:bg-[#D2F000] hover:text-black transition-all active:scale-95 duration-75">
          _INITIATE
        </Link>
      </div>
    </nav>
  );
}
