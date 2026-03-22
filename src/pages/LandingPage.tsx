import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

export default function LandingPage() {
  return (
    <main>
      <SEO
        title="Production-Grade Enterprise AI Platform"
        description="Add production-grade AI to your enterprise without replacing your existing systems. Drive revenue, cut costs, and automate operations with Rhobots AI."
        path="/"
        jsonLd={organizationSchema()}
      />
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden px-8 md:px-24 cyber-grid border-b border-outline">
        <div className="scanline-animated"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none border-l border-outline/50">
          <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent z-10"></div>
          <img className="w-full h-full object-cover grayscale contrast-125" alt="Cyber-industrial data structure" src="/images/hero-data-structure.jpg" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">PLATFORM UPDATE // NOW AVAILABLE</span>
          </div>
          <h1 className="font-headline text-3xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Production-Grade AI <br />
            <span className="text-primary-fixed bg-transparent">Without the Disruption.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body mb-12 leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            Add AI to your enterprise without replacing the systems that run your business. Rhobots works alongside your existing infrastructure — delivering results from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-0">
            <Link to="/demo" className="bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all text-center">
              Request a Demo
            </Link>
            <a href="#intelligence-suite" className="bg-surface border border-outline text-white px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-outline transition-all flex items-center justify-center gap-3">
              See How It Works
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-outline">
          <div className="p-12 border-r border-b border-outline group hover:bg-surface transition-all">
            <div className="w-10 h-10 flex items-center justify-center bg-outline text-primary-fixed mb-8 group-hover:bg-primary-fixed group-hover:text-background transition-colors">
              <span className="material-symbols-outlined">account_tree</span>
            </div>
            <h3 className="font-headline text-xl font-black text-white uppercase tracking-tighter mb-4">Legacy Integration</h3>
            <p className="text-on-surface text-xs leading-relaxed opacity-70">Connects to your existing mainframe and on-premise systems without changing the way you work today.</p>
          </div>
          <div className="p-12 border-r border-b border-outline group hover:bg-surface transition-all">
            <div className="w-10 h-10 flex items-center justify-center bg-outline text-primary-fixed mb-8 group-hover:bg-primary-fixed group-hover:text-background transition-colors">
              <span className="material-symbols-outlined">published_with_changes</span>
            </div>
            <h3 className="font-headline text-xl font-black text-white uppercase tracking-tighter mb-4">Zero Overhaul</h3>
            <p className="text-on-surface text-xs leading-relaxed opacity-70">Skip the multi-year migration. Rhobots layers on top of your current systems, delivering value in weeks, not years.</p>
          </div>
          <div className="p-12 border-r border-b border-outline group hover:bg-surface transition-all">
            <div className="w-10 h-10 flex items-center justify-center bg-outline text-primary-fixed mb-8 group-hover:bg-primary-fixed group-hover:text-background transition-colors">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h3 className="font-headline text-xl font-black text-white uppercase tracking-tighter mb-4">Enterprise Security</h3>
            <p className="text-on-surface text-xs leading-relaxed opacity-70">Built to meet the strictest compliance standards. Your sensitive data stays protected and within your control.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase: Bento Grid */}
      <section id="intelligence-suite" className="py-32 px-8 md:px-24 bg-background cyber-grid">
        <div className="mb-20 space-y-4">
          <span className="text-primary-fixed font-bold text-xs tracking-[0.3em] uppercase">// THE PLATFORM</span>
          <h2 className="font-headline text-3xl md:text-7xl font-black italic uppercase tracking-tighter text-white">The Intelligence Suite</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline">
          {/* Operator */}
          <Link to="/products/operator" className="md:col-span-8 bg-surface p-12 border-r border-b border-outline flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-fixed text-4xl">settings_input_component</span>
                  <h3 className="font-headline text-3xl font-black uppercase italic text-white tracking-tighter">Operator</h3>
                </div>
                <p className="text-on-surface text-sm max-w-lg leading-relaxed border-l border-outline pl-6">Intelligent automation that learns your business processes. Cut manual work by 84% without brittle scripts or constant maintenance.</p>
              </div>
              <span className="text-outline group-hover:text-primary-fixed transition-colors material-symbols-outlined text-5xl">arrow_outward</span>
            </div>
            <div className="mt-12 industrial-border p-2 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
              <img className="w-full h-48 object-cover" alt="Interface dashboard" src="/images/interface-dashboard.jpg" loading="lazy" />
            </div>
          </Link>
          {/* Pulse */}
          <Link to="/products/pulse" className="md:col-span-4 bg-surface p-12 border-b border-outline flex flex-col group hover:bg-[#1a1a1a] transition-all">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-8">insights</span>
            <h3 className="font-headline text-2xl font-black uppercase italic text-white mb-6">Pulse</h3>
            <p className="text-on-surface text-xs leading-relaxed flex-grow opacity-70">Real-time intelligence for your contact center. Reduce handle time by 40% and boost customer satisfaction with live agent guidance.</p>
            <div className="pt-8 mt-8 border-t border-outline flex items-center justify-between">
              <span className="text-[10px] font-bold text-primary-fixed tracking-widest uppercase">CUSTOMER EXPERIENCE</span>
              <span className="text-[10px] text-outline font-bold">MODE: ACTIVE</span>
            </div>
          </Link>
          {/* Extract */}
          <Link to="/products/extract" className="md:col-span-4 bg-surface p-12 border-r border-outline flex flex-col group hover:bg-[#1a1a1a] transition-all">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-8">database_upload</span>
            <h3 className="font-headline text-2xl font-black uppercase italic text-white mb-6">Extract</h3>
            <p className="text-on-surface text-xs leading-relaxed flex-grow opacity-70">Turn unstructured documents — PDFs, emails, handwritten notes — into clean, usable data for your business systems.</p>
            <div className="pt-8 mt-8 border-t border-outline">
              <span className="text-[10px] font-bold text-primary-fixed tracking-widest uppercase">DATA INTELLIGENCE</span>
            </div>
          </Link>
          {/* Sage */}
          <Link to="/products/sage" className="md:col-span-4 bg-surface p-12 border-r border-outline flex flex-col group hover:bg-[#1a1a1a] transition-all">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-8">psychology</span>
            <h3 className="font-headline text-2xl font-black uppercase italic text-white mb-6">Sage</h3>
            <p className="text-on-surface text-xs leading-relaxed flex-grow opacity-70">Ask questions about your business data in plain English and get answers in seconds. No dashboards to build, no analysts to wait on.</p>
            <div className="pt-8 mt-8 border-t border-outline flex justify-between items-center">
              <span className="text-[10px] font-bold text-primary-fixed tracking-widest uppercase">BUSINESS INSIGHTS</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary-fixed"></div>
                <div className="w-1.5 h-1.5 bg-outline"></div>
              </div>
            </div>
          </Link>
          {/* Dev Copilot */}
          <Link to="/products/copilot" className="md:col-span-4 bg-primary-fixed p-12 flex flex-col group relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[160px] text-background">terminal</span>
            </div>
            <span className="material-symbols-outlined text-background text-4xl mb-8">code</span>
            <h3 className="font-headline text-2xl font-black uppercase italic text-background mb-6">Dev Copilot</h3>
            <p className="text-background text-xs leading-relaxed flex-grow font-bold">AI coding assistant trained on your codebase. Accelerate delivery by 40% while keeping your code private and secure.</p>
            <div className="pt-8 mt-8 border-t border-background/20">
              <span className="inline-block px-3 py-1 bg-background text-primary-fixed text-[10px] font-bold uppercase tracking-tighter">ENTERPRISE EXCLUSIVE</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Platform Layer: Studio */}
      <section className="py-32 px-8 md:px-24 bg-surface border-y border-outline relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full"></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="text-primary-fixed text-xs font-bold tracking-[0.4em]">// COMMAND CENTER</span>
              <h2 className="font-headline text-3xl md:text-6xl font-black text-white leading-[0.9] uppercase italic tracking-tighter">
                Rhobots Studio:<br />
                <span className="text-primary-fixed">Command Center</span>
              </h2>
            </div>
            <p className="text-on-surface text-sm leading-relaxed border-l-4 border-outline pl-8">
              Every Rhobots product is managed from Studio — your single pane of glass for configuring AI, tracking performance, and ensuring governance across the organization.
            </p>
            <div className="grid grid-cols-1 gap-4 font-label">
              {['Runs in your data center or private cloud', 'Train AI on your proprietary data', 'Full audit trails for compliance'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-xs font-bold text-white uppercase group">
                  <span className="w-8 h-[1px] bg-primary-fixed transition-all group-hover:w-12"></span>
                  {item}
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button className="bg-background border border-outline text-white px-8 py-4 font-headline font-black text-xs uppercase tracking-widest hover:border-primary-fixed transition-all">Explore the Platform</button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="industrial-border p-4 bg-background">
              <div className="flex items-center justify-between mb-6 border-b border-outline pb-4 px-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-primary-fixed"></div>
                  <div className="w-2 h-2 bg-outline"></div>
                  <div className="w-2 h-2 bg-outline"></div>
                </div>
                <span className="text-[10px] text-outline uppercase font-bold tracking-[0.2em]">RHOBOTS STUDIO // LIVE</span>
              </div>
              <div className="relative">
                <img className="w-full h-auto grayscale" alt="High tech server room" src="/images/server-room.jpg" loading="lazy" />
                <div className="absolute bottom-4 right-4 bg-background border border-primary-fixed p-4 shadow-2xl">
                  <div className="text-[10px] font-bold text-primary-fixed mb-1 uppercase tracking-tighter">ACCURACY RATE</div>
                  <div className="text-4xl font-black italic text-white tracking-tighter leading-none">99.8%</div>
                  <div className="w-full h-1 bg-outline mt-3">
                    <div className="bg-primary-fixed h-full w-[99%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-32 bg-background border-b border-outline">
        <div className="max-w-7xl mx-auto px-8 md:px-24">
          <p className="text-center font-bold tracking-[0.4em] text-outline text-[10px] uppercase mb-16">TRUSTED ACROSS INDUSTRIES</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline">
            <div className="p-12 border-r border-outline hover:bg-surface transition-colors text-center group">
              <div className="w-16 h-16 bg-surface border border-outline flex items-center justify-center mx-auto mb-8 group-hover:border-primary-fixed transition-all">
                <span className="material-symbols-outlined text-primary-fixed text-3xl">account_balance</span>
              </div>
              <h4 className="font-headline text-2xl font-black italic uppercase text-white mb-6 tracking-tighter">BFSI</h4>
              <p className="text-on-surface text-xs leading-relaxed opacity-60">Automate compliance, detect fraud faster, and reduce operational risk across banking and insurance operations.</p>
            </div>
            <div className="p-12 border-r border-outline hover:bg-surface transition-colors text-center group">
              <div className="w-16 h-16 bg-surface border border-outline flex items-center justify-center mx-auto mb-8 group-hover:border-primary-fixed transition-all">
                <span className="material-symbols-outlined text-primary-fixed text-3xl">terminal</span>
              </div>
              <h4 className="font-headline text-2xl font-black italic uppercase text-white mb-6 tracking-tighter">IT Services</h4>
              <p className="text-on-surface text-xs leading-relaxed opacity-60">Ship products faster, reduce development costs, and maintain code quality with AI-powered engineering workflows.</p>
            </div>
            <div className="p-12 hover:bg-surface transition-colors text-center group">
              <div className="w-16 h-16 bg-surface border border-outline flex items-center justify-center mx-auto mb-8 group-hover:border-primary-fixed transition-all">
                <span className="material-symbols-outlined text-primary-fixed text-3xl">factory</span>
              </div>
              <h4 className="font-headline text-2xl font-black italic uppercase text-white mb-6 tracking-tighter">Operations</h4>
              <p className="text-on-surface text-xs leading-relaxed opacity-60">Streamline supply chain and warehouse operations. Reduce errors, cut processing time, and gain real-time visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8 md:px-24 bg-background cyber-grid">
        <div className="industrial-border bg-surface p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary-fixed"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="font-headline text-3xl md:text-7xl font-black italic uppercase text-white tracking-tighter leading-none">
              Lead Your <br />
              <span className="text-primary-fixed">AI Transformation.</span>
            </h2>
            <p className="text-on-surface text-sm max-w-xl mx-auto leading-relaxed border-y border-outline py-6 font-bold uppercase tracking-tight">
              Join 40+ enterprise leaders already driving measurable results with production-ready AI.
            </p>
            <div className="flex justify-center">
              <Link to="/demo" className="bg-primary-fixed text-background px-12 py-6 font-headline font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:scale-105 active:scale-95 transition-all">
                Talk to Our Team
              </Link>
            </div>
          </div>
          {/* Decorative Corners */}
          <div className="absolute bottom-4 left-4 text-[10px] text-outline font-black tracking-widest">// ENTERPRISE ACCESS</div>
          <div className="absolute bottom-4 right-4 text-[10px] text-outline font-black tracking-widest">RHOBOTS //</div>
        </div>
      </section>
    </main>
  );
}
