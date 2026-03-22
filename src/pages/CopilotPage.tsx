import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';

export default function CopilotPage() {
  return (
    <main className="flex-grow">
      <SEO
        title="Copilot - AI-Powered Development Acceleration"
        description="Accelerate software delivery by 40%. Rhobots Copilot helps engineering teams ship faster with AI-powered code review, generation, and quality assurance."
        path="/products/copilot"
        jsonLd={[
          organizationSchema(),
          productSchema({ name: 'Rhobots Copilot', description: 'AI-powered development acceleration for engineering teams', path: '/products/copilot' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Copilot', path: '/products/copilot' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="bg-secondary-container text-on-secondary-container font-label text-[10px] px-2 py-0.5 uppercase tracking-widest">PRODUCT: COPILOT</span>
              <span className="text-outline-variant font-label text-[10px] uppercase tracking-widest">ENTERPRISE EDITION</span>
            </div>
            <h1 className="text-3xl sm:text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase leading-[0.85] text-white">
              ACCELERATE<br />SOFTWARE<br />DELIVERY
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
              Help your engineering teams ship faster and with fewer bugs. Copilot automates code reviews, generates solutions, and integrates with the tools your developers already use.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-primary-fixed text-on-primary-fixed px-6 sm:px-8 py-3 sm:py-4 font-headline font-black tracking-widest uppercase text-sm sm:text-base hover:ring-2 hover:ring-primary-fixed/30 transition-all active:scale-95">
                GET STARTED
              </button>
              <button className="border border-outline-variant text-primary px-6 sm:px-8 py-3 sm:py-4 font-headline font-black tracking-widest uppercase text-sm sm:text-base hover:bg-white/5 transition-all">
                SEE DETAILS
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-high p-6 sm:p-8 scanline border-l-4 border-primary-container relative">
            <div className="absolute top-4 right-4 text-primary-fixed/20">
              <span className="material-symbols-outlined text-6xl">analytics</span>
            </div>
            <div className="space-y-6">
              <div>
                <span className="font-label text-xs text-outline-variant uppercase">MEASURED IMPACT</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-mono font-bold text-primary-fixed">40%</span>
                  <span className="text-on-surface uppercase font-headline font-bold">Faster</span>
                </div>
                <span className="text-on-surface-variant text-sm font-label uppercase">Average Delivery Velocity</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
                <div>
                  <span className="block font-label text-[10px] text-outline-variant uppercase">ANNUAL SAVINGS</span>
                  <span className="font-mono text-lg text-white">$22.4K/dev</span>
                </div>
                <div>
                  <span className="block font-label text-[10px] text-outline-variant uppercase">BUG FIX TIME</span>
                  <span className="font-mono text-lg text-white">-18.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions Bento Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <span className="font-label text-primary-fixed text-sm uppercase tracking-widest">KEY CAPABILITIES</span>
            <h2 className="text-2xl sm:text-4xl font-black font-headline tracking-tight uppercase text-white mt-2">WHAT COPILOT DOES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Ticket Refinement */}
            <div className="md:col-span-2 bg-surface-container-high p-6 sm:p-10 hover:bg-surface-bright transition-colors group">
              <div className="w-12 h-12 bg-surface-container-lowest flex items-center justify-center mb-8 border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary-fixed">assignment_turned_in</span>
              </div>
              <h3 className="text-2xl font-black font-headline tracking-tighter uppercase mb-4 text-white">Ticket Refinement</h3>
              <p className="text-on-surface-variant font-body mb-8">
                Turns vague requirements into clear technical specs. Catches edge cases and dependencies your team might miss.
              </p>
              <div className="bg-surface-container-lowest p-4 border-l-2 border-primary-fixed">
                <span className="font-mono text-xs text-primary-fixed opacity-70 block mb-1">PROCESSING...</span>
                <div className="h-1 bg-outline-variant/20 w-full overflow-hidden">
                  <div className="bg-primary-fixed h-full w-2/3"></div>
                </div>
              </div>
            </div>

            {/* IDE Command */}
            <div className="bg-surface-container-low p-6 sm:p-10 flex flex-col justify-between border border-outline-variant/10 group">
              <div>
                <span className="material-symbols-outlined text-on-surface-variant mb-6">terminal</span>
                <h3 className="text-xl font-black font-headline tracking-tighter uppercase mb-4 text-white">IDE Integration</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Works directly inside your developers' tools. Refactor, debug, and explore code with AI assistance built in.
                </p>
              </div>
              <div className="mt-8">
                <a className="font-label text-xs text-primary-fixed uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  CONNECT NOW <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Logic Synthesis */}
            <div className="bg-surface-container-low p-6 sm:p-10 flex flex-col justify-between border border-outline-variant/10">
              <div>
                <span className="material-symbols-outlined text-on-surface-variant mb-6">psychology</span>
                <h3 className="text-xl font-black font-headline tracking-tighter uppercase mb-4 text-white">Code Generation</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Generates production-quality code from high-level descriptions. Handles complex business logic at enterprise scale.
                </p>
              </div>
              <div className="mt-8 font-mono text-[10px] text-outline-variant uppercase">
                Accuracy: 99.9% | Ready
              </div>
            </div>

            {/* PR Validation (Wide Bottom) */}
            <div className="md:col-span-4 flex flex-col md:flex-row bg-[#1a1a1a] relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <div className="p-6 sm:p-10 md:w-1/2 z-10">
                <h3 className="text-2xl sm:text-3xl font-black font-headline tracking-tighter uppercase mb-4 text-white">PR Validation</h3>
                <p className="text-on-surface-variant font-body mb-8 max-w-sm">
                  Every code change is automatically reviewed for security, quality, and correctness — before any human sees it.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1">
                    <span className="material-symbols-outlined text-primary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-label text-[10px] uppercase">QUALITY CHECK</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1">
                    <span className="material-symbols-outlined text-primary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    <span className="font-label text-[10px] uppercase">SECURITY CLEARED</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative bg-surface-container-highest scanline opacity-50">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full font-mono text-[10px] text-primary-fixed/40 leading-tight select-none">
                    {'{ "status": "validated", "coverage": 98.4, "vulnerabilities": 0, "complexity_delta": -12.5, "warnings": [] }'}<br />
                    &gt; REVIEWING CODE QUALITY... [PASSED]<br />
                    &gt; SCANNING FOR SECURITY ISSUES... [CLEAR]<br />
                    &gt; VALIDATING BUSINESS LOGIC... [PASSED]<br />
                    &gt; READY FOR TEAM REVIEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Ecosystem */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="font-label text-[#393939] text-sm uppercase tracking-widest">INTEGRATIONS</span>
            <h2 className="text-2xl sm:text-4xl font-black font-headline tracking-tight uppercase text-white mt-4 leading-none">WORKS WITH YOUR TOOLS</h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 grayscale opacity-40">
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">GITHUB</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">JIRA</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">AWS</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">K8S</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">DOCKER</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">SLACK</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">VSCODE</span>
            </div>
            <div className="flex items-center justify-center h-12 bg-surface-container p-4">
              <span className="font-headline font-black text-xl text-white">PYTHON</span>
            </div>
          </div>
        </div>
      </section>

      {/* Command CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-primary-fixed flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase text-on-primary-fixed mb-6 sm:mb-8 leading-[0.9]">
            READY TO SHIP FASTER?
          </h2>
          <button className="w-full sm:w-auto bg-surface-container-lowest text-white px-8 sm:px-12 py-4 sm:py-5 font-headline font-black tracking-widest uppercase hover:scale-105 transition-all">
            SCHEDULE A DEMO
          </button>
          <p className="mt-8 font-label text-on-primary-fixed uppercase tracking-widest text-sm">
            Limited availability. Request early access today.
          </p>
        </div>
      </section>
    </main>
  );
}
