import { Link } from 'react-router-dom';

export default function FooterLanding() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-white/10 mt-auto pt-20 pb-12 px-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1">
          <span className="text-lg font-bold text-white uppercase tracking-widest mb-8 block">RHOBOTS AI</span>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 leading-loose">
            Cognitive Architect for Global Enterprise. Redefining production AI without the friction.
          </p>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-[#D2F000] mb-8">Products</h5>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
            <li><Link className="hover:text-white transition-all" to="/">Studio</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/operator">Operator</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/sage">Sage</Link></li>
            <li><Link className="hover:text-white transition-all" to="/products/extract">Extract</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-[#D2F000] mb-8">Resources</h5>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
            <li><a className="hover:text-white transition-all" href="#">Docs</a></li>
            <li><a className="hover:text-white transition-all" href="#">API Ref</a></li>
            <li><a className="hover:text-white transition-all" href="#">Security</a></li>
            <li><a className="hover:text-white transition-all" href="#">Cases</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-xs uppercase tracking-widest text-[#D2F000] mb-8">Company</h5>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
            <li><a className="hover:text-white transition-all" href="#">About</a></li>
            <li><a className="hover:text-white transition-all" href="#">Careers</a></li>
            <li><a className="hover:text-white transition-all" href="#">Legal</a></li>
            <li><a className="hover:text-white transition-all" href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6 font-mono text-xs uppercase tracking-widest">
        <p className="text-white/40">&copy; 2024 RHOBOTS AI. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-white/40">
          <a className="hover:text-[#D2F000]" href="#">TERMS</a>
          <a className="hover:text-[#D2F000]" href="#">COOKIE</a>
          <a className="hover:text-[#D2F000]" href="#">SLA_V1</a>
        </div>
      </div>
    </footer>
  );
}
