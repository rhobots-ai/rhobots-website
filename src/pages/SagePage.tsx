export default function SagePage() {
  return (
    <main className="min-h-screen grid-substrate">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-12 flex flex-col items-start max-w-7xl mx-auto">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary-fixed bg-primary-fixed/10 px-3 py-1 border-l-4 border-primary-fixed">CORE_MODULE://SAGE</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-surface-bright">STATUS: OPERATIONAL</span>
        </div>
        <h1 className="font-headline font-black text-6xl md:text-8xl leading-tight tracking-tighter text-white max-w-4xl uppercase mb-6">
          Talk to Data.<br />
          <span className="text-primary-fixed">Kill the Dashboard.</span>
        </h1>
        <p className="font-body text-secondary text-lg max-w-2xl mb-12 leading-relaxed">
          Sage bypasses traditional BI visual constraints. Query multi-petabyte stacks with natural language and receive immediate engineering-grade intelligence.
        </p>
        {/* Terminal Interface */}
        <div className="w-full max-w-5xl bg-surface-container shadow-2xl overflow-hidden relative group">
          <div className="h-10 bg-surface-bright flex items-center px-4 gap-2">
            <div className="w-3 h-3 bg-surface-container-highest"></div>
            <div className="w-3 h-3 bg-surface-container-highest"></div>
            <div className="w-3 h-3 bg-surface-container-highest"></div>
            <span className="font-mono text-[10px] text-on-surface-variant ml-4 tracking-widest uppercase">Terminal_V4.2.0</span>
          </div>
          <div className="p-8 scanline border-l-4 border-primary-fixed">
            <div className="flex gap-4 font-mono text-primary-fixed mb-4">
              <span>&gt;</span>
              <span className="text-on-surface">Analyze the correlation between cloud latency spikes and transactional volume in Snowflake across EU-WEST-1...</span>
            </div>
            <div className="h-px w-full bg-outline-variant/20 my-6"></div>
            <div className="flex items-center gap-6">
              <button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 font-headline font-black uppercase text-sm tracking-widest hover:bg-primary-fixed-dim transition-colors">
                EXECUTE_QUERY
              </button>
              <span className="font-mono text-[10px] text-surface-bright uppercase animate-pulse">Waiting for system call...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Command Specs & Bento Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Temporal Analysis */}
          <div className="md:col-span-8 bg-surface-container-high p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/5 -mr-16 -mt-16 rounded-full blur-3xl transition-all group-hover:bg-primary-fixed/10"></div>
            <div>
              <div className="font-mono text-[10px] text-primary-fixed mb-6 tracking-widest uppercase">MOD_01 // TEMPORAL ANALYSIS</div>
              <h3 className="font-headline font-bold text-3xl text-white uppercase mb-4 tracking-tighter">Predictive Drift <br />Detection</h3>
              <p className="text-on-surface-variant text-sm max-w-md">Identify anomalies in time-series data before they breach threshold limits using neural-engine regression.</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-8 bg-primary-fixed"></div>
                <div className="w-2 h-12 bg-primary-fixed/40"></div>
                <div className="w-2 h-6 bg-primary-fixed/60"></div>
                <div className="w-2 h-10 bg-primary-fixed/20"></div>
              </div>
              <span className="font-mono text-primary-fixed text-sm">99.8% ACCURACY</span>
            </div>
          </div>

          {/* Semantic Indexing */}
          <div className="md:col-span-4 bg-surface-bright p-8 border-l-4 border-primary-fixed">
            <div className="font-mono text-[10px] text-primary-fixed mb-6 tracking-widest uppercase">MOD_02 // SEMANTIC</div>
            <h3 className="font-headline font-bold text-3xl text-white uppercase mb-4 tracking-tighter">Vector-Mapped Context</h3>
            <p className="text-on-surface-variant text-sm mb-8">Sage doesn't just match keywords. It understands the operational context of your entire schema.</p>
            <div className="p-4 bg-surface-container-lowest border border-outline-variant/20">
              <span className="font-mono text-[10px] text-primary-fixed block mb-2">LAST_INDEXED_NODES:</span>
              <div className="font-mono text-[10px] text-on-surface-variant leading-relaxed">
                84,120,443_RECORDS<br />
                14_DATABASES<br />
                0.02ms_LATENCY
              </div>
            </div>
          </div>

          {/* Stack Integration */}
          <div className="md:col-span-12 bg-surface-container p-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-left">
              <h3 className="font-headline font-black text-4xl text-white uppercase tracking-tighter mb-4">Native Data Mesh Integration</h3>
              <p className="text-on-surface-variant">Seamlessly tether Sage to your existing stack. High-speed drivers for Snowflake, BigQuery, Redshift, and Databricks. Zero-latency synchronization.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-surface-container-highest px-8 py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">SNOWFLAKE</div>
              <div className="bg-surface-container-highest px-8 py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">BIGQUERY</div>
              <div className="bg-surface-container-highest px-8 py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">DATABRICKS</div>
              <div className="bg-surface-container-highest px-8 py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">S3_LAKE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Protocols Section */}
      <section className="px-6 py-24 bg-surface-container-lowest relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-surface border border-outline-variant/10 p-1 relative overflow-hidden">
              <div className="absolute inset-0 scanline opacity-30"></div>
              <img
                alt="Technical server hardware with glowing green lights"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/server-hardware-green.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary-fixed/90 p-8">
                  <span className="material-symbols-outlined text-on-primary-fixed text-6xl">lock_open</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-surface-bright p-6 border-l-4 border-primary-fixed shadow-2xl">
              <div className="font-mono text-primary-fixed text-xs mb-2 tracking-widest">_ENCRYPTION_KEY</div>
              <div className="font-mono text-on-surface text-lg">RSA_4096_ACTIVE</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline font-black text-5xl text-white uppercase tracking-tighter mb-8 leading-[0.9]">Military Grade Intelligence Infrastructure.</h2>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-bright flex items-center justify-center font-mono text-primary-fixed font-bold">01</div>
                <div>
                  <h4 className="font-headline font-bold text-xl text-white uppercase tracking-tight mb-2">End-to-End Encryption</h4>
                  <p className="text-on-surface-variant text-sm">All queries and resulting datasets are encrypted at rest and in transit using AES-256 protocols.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-bright flex items-center justify-center font-mono text-primary-fixed font-bold">02</div>
                <div>
                  <h4 className="font-headline font-bold text-xl text-white uppercase tracking-tight mb-2">SOC2 Type II Compliant</h4>
                  <p className="text-on-surface-variant text-sm">Regular external audits ensure our infrastructure meets the highest global security standards for data handling.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-bright flex items-center justify-center font-mono text-primary-fixed font-bold">03</div>
                <div>
                  <h4 className="font-headline font-bold text-xl text-white uppercase tracking-tight mb-2">Role-Based Gatekeeping</h4>
                  <p className="text-on-surface-variant text-sm">Fine-grained access controls mapped to your existing SSO and directory services.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 bg-primary-fixed flex flex-col items-center text-center">
        <h2 className="font-headline font-black text-6xl md:text-8xl text-on-primary-fixed uppercase tracking-tighter mb-8">Ready to Evolve?</h2>
        <p className="font-body text-on-primary-container text-xl max-w-xl mb-12 font-medium">Deploy Sage into your private cloud cluster in under 15 minutes. Stop building dashboards. Start asking questions.</p>
        <button className="bg-on-primary-fixed text-white px-12 py-5 font-headline font-black text-2xl uppercase tracking-[0.2em] hover:bg-black transition-colors active:scale-95 duration-75">
          INITIATE DEPLOYMENT
        </button>
      </section>
    </main>
  );
}
