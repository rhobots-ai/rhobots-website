export default function OperatorPage() {
  return (
    <main className="grid-substrate min-h-screen">
      {/* Hero Section: Kinetic Engine */}
      <section className="relative min-h-[819px] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-primary-fixed/10 border-l-4 border-primary-fixed mb-6">
              <span className="font-mono text-xs tracking-widest text-primary-fixed uppercase">SYSTEM_STATE: ACTIVE_ORCHESTRATION</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
              ARCHITECTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-primary-fixed-dim">AUTONOMOUS OPS</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              High-performance terminal for enterprise-grade AI orchestration. Deploy specialized agents to discover, reason, and govern complex business processes at machine scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] transition-all">
                INITIALIZE AUTOMATION
              </button>
              <button className="px-8 py-4 border border-outline-variant text-white font-headline font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                _VIEW_DOCUMENTATION
              </button>
            </div>
          </div>
          {/* Industrial Data Cluster (Right Side) */}
          <div className="w-full md:w-80 flex flex-col gap-px bg-outline-variant/20">
            <div className="bg-surface-container-high p-6">
              <span className="font-mono text-[10px] text-primary-fixed/60 block mb-2 uppercase tracking-widest">LATENCY_REDUCTION</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-headline font-black text-white">12x</span>
                <span className="material-symbols-outlined text-primary-fixed text-sm">trending_down</span>
              </div>
            </div>
            <div className="bg-surface-container-high p-6">
              <span className="font-mono text-[10px] text-primary-fixed/60 block mb-2 uppercase tracking-widest">TASK_REDUCTION</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-headline font-black text-white">84%</span>
                <span className="material-symbols-outlined text-primary-fixed text-sm">auto_mode</span>
              </div>
            </div>
            <div className="bg-surface-container-high p-6 relative overflow-hidden">
              <div className="scanline absolute inset-0 pointer-events-none"></div>
              <span className="font-mono text-[10px] text-on-surface-variant block mb-2 uppercase tracking-widest">NEURAL_THROUGHPUT</span>
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
        <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary-fixed/20 to-transparent"></div>
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            alt="Abstract neural network structure with glowing nodes and digital wires"
            src="/images/neural-network.jpg"
          />
        </div>
      </section>

      {/* Precision Capabilities: Bento Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">CORE_MODULES</span>
            <h2 className="font-headline text-4xl font-black uppercase text-white tracking-tight">PRECISION CAPABILITIES</h2>
          </div>
          <div className="hidden md:block w-32 h-px bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Capability 1 */}
          <div className="md:col-span-8 group bg-surface-container-high relative p-8 hover:bg-surface-bright transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed scale-y-100 transition-transform"></div>
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary-fixed">account_tree</span>
              <span className="font-mono text-xs text-on-surface-variant">MOD_01</span>
            </div>
            <h3 className="font-headline text-2xl font-black text-white mb-4 uppercase">Workflow Orchestration</h3>
            <p className="text-on-surface-variant max-w-lg mb-8">Complex multi-agent coordination across disparate legacy systems and modern cloud architectures.</p>
            <div className="flex gap-4">
              <span className="px-2 py-1 bg-surface-container-lowest font-mono text-[10px] text-primary-fixed border border-primary-fixed/20 uppercase tracking-tighter">PARALLEL_EXECUTION</span>
              <span className="px-2 py-1 bg-surface-container-lowest font-mono text-[10px] text-primary-fixed border border-primary-fixed/20 uppercase tracking-tighter">FAULT_TOLERANCE</span>
            </div>
          </div>
          {/* Capability 2 */}
          <div className="md:col-span-4 bg-surface-container-high p-8 hover:bg-surface-bright transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary-fixed">explore</span>
              <span className="font-mono text-xs text-on-surface-variant">MOD_02</span>
            </div>
            <h3 className="font-headline text-2xl font-black text-white mb-4 uppercase">Process Discovery</h3>
            <p className="text-on-surface-variant mb-6">Autonomous mapping of organizational bottlenecks through real-time telemetry analysis.</p>
          </div>
          {/* Capability 3 */}
          <div className="md:col-span-4 bg-surface-container-high p-8 hover:bg-surface-bright transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary-fixed">psychology</span>
              <span className="font-mono text-xs text-on-surface-variant">MOD_03</span>
            </div>
            <h3 className="font-headline text-2xl font-black text-white mb-4 uppercase">Neural Reasoning</h3>
            <p className="text-on-surface-variant mb-6">Context-aware decision making leveraging proprietary industrial LLMs for zero-shot task execution.</p>
          </div>
          {/* Capability 4 */}
          <div className="md:col-span-8 bg-surface-container-high p-8 hover:bg-surface-bright transition-colors relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary-fixed">gavel</span>
              <span className="font-mono text-xs text-on-surface-variant">MOD_04</span>
            </div>
            <h3 className="font-headline text-2xl font-black text-white mb-4 uppercase">Enterprise Governance</h3>
            <p className="text-on-surface-variant max-w-md mb-8">Hard-coded compliance rails and immutable audit trails for complete operational oversight.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                className="h-16 w-full object-cover grayscale opacity-50 border border-outline-variant"
                alt="Technical security circuitry and abstract hardware components"
                src="/images/security-circuitry.jpg"
              />
              <img
                className="h-16 w-full object-cover grayscale opacity-50 border border-outline-variant"
                alt="Global satellite data visualization mapping network connectivity"
                src="/images/satellite-network.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Command Interface Preview (The Obsidian Stack) */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-black uppercase text-white tracking-tight mb-8">SYSTEM_TERMINAL_V4.0</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-black font-bold">terminal</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-white uppercase mb-2">Low-Code Logic Engine</h4>
                  <p className="text-on-surface-variant text-sm">Design complex logic flows with mathematical precision using our visual node-based editor.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed">monitoring</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-white uppercase mb-2">Real-Time Telemetry</h4>
                  <p className="text-on-surface-variant text-sm">Monitor every neural pathway and execution cycle with sub-millisecond granularity.</p>
                </div>
              </div>
              <div className="pt-4">
                <a className="font-mono text-xs text-primary-fixed hover:underline underline-offset-8 transition-all" href="#">_EXPLORE_ARCHITECTURES</a>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-2 border border-outline-variant/30 shadow-2xl relative">
            <div className="absolute -top-4 -left-4 bg-primary-fixed text-on-primary-fixed px-3 py-1 font-mono text-[10px] uppercase font-bold">LIVE_PREVIEW</div>
            <img
              className="w-full h-auto object-cover grayscale brightness-75"
              alt="Digital dashboard showing complex data graphs and node connections"
              src="/images/dashboard-data-graphs.jpg"
            />
            <div className="absolute inset-0 bg-primary-fixed/5 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-substrate opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-headline text-5xl md:text-7xl font-black uppercase text-white mb-8 tracking-tighter">READY FOR <span className="text-primary-fixed">AUTONOMY?</span></h2>
          <p className="text-on-surface-variant mb-12 text-lg">Shift your operational core from manual intervention to neural orchestration. Deploy RHOBOTS Operator today.</p>
          <button className="px-12 py-5 bg-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-[0.2em] text-lg hover:shadow-[0_0_30px_rgba(210,240,0,0.4)] transition-all">
            _INITIALIZE_AUTOMATION
          </button>
        </div>
      </section>
    </main>
  );
}
