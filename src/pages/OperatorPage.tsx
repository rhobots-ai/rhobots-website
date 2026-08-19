import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';

export default function OperatorPage() {
  return (
    <main className=" min-h-screen">
      <SEO
        title="Operator — automate work inside your existing systems"
        description="Operator maps how a process actually runs, then takes over the repetitive and judgment-heavy parts of it — inside the systems you already have, with humans kept in the loop."
        path="/products/operator"
        jsonLd={[
          organizationSchema(),
          productSchema({ name: 'Rhobots Operator', description: 'Intelligent workflow automation for enterprise operations', path: '/products/operator' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Operator', path: '/products/operator' }]),
        ]}
      />
      {/* Hero Section: Kinetic Engine */}
      <section className="relative min-h-[60vh] md:min-h-[819px] flex items-center px-4 sm:px-6 md:px-12 py-16 md:py-0 overflow-hidden">
        <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8 md:gap-12">
          <div className="flex-1">
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-outline uppercase mb-4 md:mb-6">Operator</p>
            <h1 className="font-headline text-3xl sm:text-3xl md:text-3xl font-semibold leading-[1.1] text-on-surface mb-6 md:mb-8">
              Automate the work your other tools could not.
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed">
              Operator maps how a process actually runs, then takes over the repetitive and the judgment-heavy parts of it — inside your existing systems, with a human decision point wherever one is needed.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href="/demo" className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary font-body font-medium text-sm sm:text-base transition-all text-center">
                Start automating
              </a>
              <a href="#what-operator-does" className="px-6 sm:px-8 py-3 sm:py-4 border border-outline text-on-surface font-body font-medium text-sm sm:text-base hover:bg-surface-container transition-all text-center">
                Learn more
              </a>
            </div>
          </div>
          {/* Industrial Data Cluster (Right Side) */}
          <div className="w-full md:w-80 flex flex-row md:flex-col gap-px bg-outline-variant/20">
            <div className="flex-1 md:flex-none bg-surface-container-high p-4 sm:p-6">
              <span className="font-mono text-[10px] text-primary-fixed/60 block mb-2 uppercase tracking-widest">SPEED IMPROVEMENT</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-4xl font-headline font-semibold text-on-surface">12x</span>
                <span className="material-symbols-outlined text-primary-fixed text-sm">trending_down</span>
              </div>
            </div>
            <div className="flex-1 md:flex-none bg-surface-container-high p-4 sm:p-6">
              <span className="font-mono text-[10px] text-primary-fixed/60 block mb-2 uppercase tracking-widest">MANUAL WORK ELIMINATED</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-4xl font-headline font-semibold text-on-surface">88%</span>
                <span className="material-symbols-outlined text-primary-fixed text-sm">auto_mode</span>
              </div>
            </div>
            <div className="flex-1 md:flex-none bg-surface-container-high p-4 sm:p-6 relative overflow-hidden">
              <div className=" absolute inset-0 pointer-events-none"></div>
              <span className="font-mono text-[10px] text-on-surface-variant block mb-2 uppercase tracking-widest hidden sm:block">PERFORMANCE TREND</span>
              <div className="h-12 flex items-end gap-1">
                <div className="flex-1 bg-primary-fixed/20 h-4"></div>
                <div className="flex-1 bg-primary-fixed/40 h-8"></div>
                <div className="flex-1 bg-primary-fixed/60 h-6"></div>
                <div className="flex-1 bg-primary-fixed h-10"></div>
                <div className="flex-1 bg-primary-fixed/80 h-12"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Abstract Detail */}
        <div className="absolute top-0 right-0 w-2/3 md:w-1/2 h-full -z-0 opacity-10 md:opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary-fixed/20 to-transparent"></div>
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            alt="Abstract neural network structure with glowing nodes and digital wires"
            src="/images/neural-network.jpg"
          />
        </div>
      </section>

      {/* Precision Capabilities: Bento Grid */}
      <section id="what-operator-does" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 md:mb-16 gap-4">
          <div>
            <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">Key capabilities</span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-semibold text-on-surface tracking-tight">What Operator does</h2>
          </div>
          <div className="hidden md:block w-32 h-px bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Capability 1 */}
          <div className="md:col-span-8 group bg-surface-container-high relative p-6 md:p-8 hover:bg-surface-bright transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed scale-y-100 transition-transform"></div>
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-fixed">account_tree</span>
              <span className="font-mono text-xs text-on-surface-variant">01</span>
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface mb-4">Workflow orchestration</h3>
            <p className="text-on-surface-variant max-w-lg mb-6 md:mb-8 text-sm md:text-base">Coordinate work across all your systems — old and new — without manual handoffs or brittle integrations.</p>
          </div>
          {/* Capability 2 */}
          <div className="md:col-span-4 bg-surface-container-high p-6 md:p-8 hover:bg-surface-bright transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-fixed">explore</span>
              <span className="font-mono text-xs text-on-surface-variant">02</span>
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface mb-4">Process discovery</h3>
            <p className="text-on-surface-variant mb-6 text-sm md:text-base">Automatically identifies where your operations slow down and where the biggest opportunities for savings are.</p>
          </div>
          {/* Capability 3 */}
          <div className="md:col-span-4 bg-surface-container-high p-6 md:p-8 hover:bg-surface-bright transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-fixed">psychology</span>
              <span className="font-mono text-xs text-on-surface-variant">03</span>
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface mb-4">Intelligent decisions</h3>
            <p className="text-on-surface-variant mb-6 text-sm md:text-base">Makes smart decisions based on your business context. Handles new situations without manual programming.</p>
          </div>
          {/* Capability 4 */}
          <div className="md:col-span-8 bg-surface-container-high p-6 md:p-8 hover:bg-surface-bright transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-fixed">gavel</span>
              <span className="font-mono text-xs text-on-surface-variant">04</span>
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface mb-4">Enterprise governance</h3>
            <p className="text-on-surface-variant max-w-md mb-6 md:mb-8 text-sm md:text-base">Built-in compliance guardrails and complete audit trails so you always know what happened and why.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                className="h-16 w-full object-cover opacity-50 border border-outline-variant"
                alt="Technical security circuitry and abstract hardware components"
                src="/images/security-circuitry.jpg"
              />
              <img
                className="h-16 w-full object-cover opacity-50 border border-outline-variant"
                alt="Global satellite data visualization mapping network connectivity"
                src="/images/satellite-network.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Command Interface Preview (The Obsidian Stack) */}
      <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-semibold text-on-surface tracking-tight mb-6 md:mb-8">The Operator dashboard</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary font-bold text-xl sm:text-2xl">terminal</span>
                </div>
                <div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-on-surface mb-2">Visual workflow builder</h4>
                  <p className="text-on-surface-variant text-sm">Design and modify automation workflows visually. No coding required — your operations team can build and adjust processes directly.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed text-xl sm:text-2xl">monitoring</span>
                </div>
                <div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-on-surface mb-2">Real-time performance monitoring</h4>
                  <p className="text-on-surface-variant text-sm">See exactly what's running, what's completed, and what needs attention — all in real time.</p>
                </div>
              </div>
              <div className="pt-4">
                <a className="font-mono text-xs text-primary-fixed hover:underline underline-offset-8 transition-all" href="/case-studies/logistics-operator">Read the logistics case study</a>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-2 border border-outline-variant/30 shadow-2xl relative">
            <img
              className="w-full h-auto object-cover"
              alt="Operator product dashboard screenshot"
              src="/images/operator.png"
            />
            <div className="absolute inset-0 bg-primary-fixed/5 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 text-center bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-3xl md:text-4xl font-semibold text-on-surface mb-6 md:mb-8">Let&rsquo;s look at your process first.</h2>
          <p className="text-on-surface-variant mb-8 md:mb-12 text-base sm:text-lg">We start by mapping how the work runs today. If Operator does not belong somewhere, we will tell you.</p>
          <a
            href="/demo"
            className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-primary text-on-primary font-body font-medium text-base sm:text-lg transition-colors hover:bg-primary-fixed text-center"
          >
            Request a demo
          </a>
        </div>
      </section>
    </main>
  );
}
