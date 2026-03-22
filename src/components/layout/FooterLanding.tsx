import { Link } from 'react-router-dom';

export default function FooterLanding() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-white/10 mt-auto pt-20 pb-12 px-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1">
          <span className="text-lg font-bold text-white uppercase tracking-widest mb-8 block">RHOBOTS AI</span>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 leading-loose">
            Enterprise AI That Works With What You Have. Production-grade intelligence, zero disruption.
          </p>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-[#D2F000] mb-8">Products</h5>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
            <li><Link className="hover:text-white transition-all" to="/">Studio</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/operator">Operator</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/extract">Extract</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/sage">Sage</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/pulse">Pulse</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/copilot">Copilot</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-[#D2F000] mb-8">Resources</h5>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
            {/* <li><Link className="hover:text-white transition-all" to="/docs">Docs</Link></li> */}
            {/* <li><Link className="hover:text-white transition-all" to="/pricing">Pricing</Link></li> */}
            <li><Link className="hover:text-white transition-all" to="/security">Security</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-[#D2F000] mb-8">Company</h5>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
            <li><Link className="hover:text-white transition-all" to="/about">About</Link></li>
            {/* <li><Link className="hover:text-white transition-all" to="/careers">Careers</Link></li> */}
            <li><Link className="hover:text-white transition-all" to="/legal">Legal</Link></li>
            <li><Link className="hover:text-white transition-all" to="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6 font-mono text-xs uppercase tracking-widest">
        <p className="text-white/40">&copy; 2026 RHOBOTS AI. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-white/40">
          <Link className="hover:text-[#D2F000]" to="/demo">REQUEST DEMO</Link>
          <Link className="hover:text-[#D2F000]" to="/terms">TERMS</Link>
          <Link className="hover:text-[#D2F000]" to="/cookie">COOKIE</Link>
          <Link className="hover:text-[#D2F000]" to="/sla">SLA</Link>
        </div>
      </div>
    </footer>
  );
}
