import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';

export default function SagePage() {
  return (
    <main className="min-h-screen grid-substrate">
      <SEO
        title="Sage - Business Intelligence in Plain English"
        description="Get instant answers from your business data in plain English. Rhobots Sage eliminates the wait for reports and dashboards — just ask questions and get answers."
        path="/products/sage"
        jsonLd={[
          organizationSchema(),
          productSchema({ name: 'Rhobots Sage', description: 'Business intelligence in plain English for enterprise data', path: '/products/sage' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Sage', path: '/products/sage' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-20 sm:pt-24 pb-12 flex flex-col items-start max-w-7xl mx-auto">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-primary-fixed bg-primary-fixed/10 px-3 py-1 border-l-4 border-primary-fixed">PRODUCT: SAGE</span>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-surface-bright">STATUS: OPERATIONAL</span>
        </div>
        <h1 className="font-headline font-black text-3xl sm:text-6xl md:text-8xl leading-tight tracking-tighter text-white max-w-4xl uppercase mb-4 sm:mb-6">
          Talk to Data.<br />
          <span className="text-primary-fixed">Skip the Dashboard.</span>
        </h1>
        <p className="font-body text-secondary text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          Ask questions about your business in plain English. Get instant answers from all your data sources — no analyst queue, no waiting for reports.
        </p>
        {/* Terminal Interface */}
        <div className="w-full max-w-5xl bg-surface-container shadow-2xl overflow-hidden relative group">
          <div className="h-10 bg-surface-bright flex items-center px-4 gap-2">
            <div className="w-3 h-3 bg-surface-container-highest"></div>
            <div className="w-3 h-3 bg-surface-container-highest"></div>
            <div className="w-3 h-3 bg-surface-container-highest"></div>
            <span className="font-mono text-[10px] text-on-surface-variant ml-4 tracking-widest uppercase hidden sm:inline">Sage // Live</span>
          </div>
          <div className="p-4 sm:p-8 scanline border-l-4 border-primary-fixed">
            <div className="flex gap-2 sm:gap-4 font-mono text-primary-fixed mb-4">
              <span>&gt;</span>
              <span className="text-on-surface text-xs sm:text-base break-words">Show me the top revenue drivers by region for Q4 and compare against last year's forecast...</span>
            </div>
            <div className="h-px w-full bg-outline-variant/20 my-4 sm:my-6"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button className="bg-primary-fixed text-on-primary-fixed px-6 sm:px-8 py-3 font-headline font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-primary-fixed-dim transition-colors w-full sm:w-auto text-center">
                RUN QUERY
              </button>
              <span className="font-mono text-[10px] text-surface-bright uppercase animate-pulse">Waiting for system call...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Command Specs & Bento Grid */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8">
          {/* Temporal Analysis */}
          <div className="md:col-span-8 bg-surface-container-high p-6 sm:p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/5 -mr-16 -mt-16 rounded-full blur-3xl transition-all group-hover:bg-primary-fixed/10"></div>
            <div>
              <div className="font-mono text-[10px] text-primary-fixed mb-4 sm:mb-6 tracking-widest uppercase">01 // PREDICTIVE ANALYTICS</div>
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white uppercase mb-4 tracking-tighter">Predictive Drift <br />Detection</h3>
              <p className="text-on-surface-variant text-sm max-w-md">Spot trends and anomalies in your data before they become problems. Get early warnings on revenue dips, cost spikes, and operational issues.</p>
            </div>
            <div className="mt-8 sm:mt-12 flex items-end justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-8 bg-primary-fixed"></div>
                <div className="w-2 h-12 bg-primary-fixed/40"></div>
                <div className="w-2 h-6 bg-primary-fixed/60"></div>
                <div className="w-2 h-10 bg-primary-fixed/20"></div>
              </div>
              <span className="font-mono text-primary-fixed text-xs sm:text-sm">99.8% ACCURACY</span>
            </div>
          </div>

          {/* Semantic Indexing */}
          <div className="md:col-span-4 bg-surface-bright p-6 sm:p-8 border-l-4 border-primary-fixed">
            <div className="font-mono text-[10px] text-primary-fixed mb-4 sm:mb-6 tracking-widest uppercase">02 // CONTEXTUAL SEARCH</div>
            <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white uppercase mb-4 tracking-tighter">Deep Context Understanding</h3>
            <p className="text-on-surface-variant text-sm mb-6 sm:mb-8">Sage understands your business context, not just keywords. It knows that "revenue" in your sales database relates to "bookings" in your CRM.</p>
            <div className="p-3 sm:p-4 bg-surface-container-lowest border border-outline-variant/20">
              <span className="font-mono text-[10px] text-primary-fixed block mb-2">DATA CONNECTED:</span>
              <div className="font-mono text-[10px] text-on-surface-variant leading-relaxed">
                84M+ Records<br />
                14 Data Sources<br />
                Real-Time Access
              </div>
            </div>
          </div>

          {/* Stack Integration */}
          <div className="md:col-span-12 bg-surface-container p-6 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="max-w-xl text-left">
              <h3 className="font-headline font-black text-2xl sm:text-4xl text-white uppercase tracking-tighter mb-4">Connects to All Your Data Sources</h3>
              <p className="text-on-surface-variant text-sm sm:text-base">Works with Snowflake, BigQuery, Redshift, Databricks, and more. Connect once, query everything.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full md:w-auto">
              <div className="bg-surface-container-highest px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant text-xs sm:text-base tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">SNOWFLAKE</div>
              <div className="bg-surface-container-highest px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant text-xs sm:text-base tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">BIGQUERY</div>
              <div className="bg-surface-container-highest px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant text-xs sm:text-base tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">DATABRICKS</div>
              <div className="bg-surface-container-highest px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center font-headline font-bold text-on-surface-variant text-xs sm:text-base tracking-widest border-b-4 border-surface-bright grayscale hover:grayscale-0 transition-all">AWS S3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Protocols Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-container-lowest relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-surface border border-outline-variant/10 p-1 relative overflow-hidden">
              <div className="absolute inset-0 scanline opacity-30"></div>
              <img
                alt="Technical server hardware with glowing green lights"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/server-hardware-green.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary-fixed/90 p-6 sm:p-8">
                  <span className="material-symbols-outlined text-on-primary-fixed text-4xl sm:text-6xl">lock_open</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-surface-bright p-4 sm:p-6 border-l-4 border-primary-fixed shadow-2xl">
              <div className="font-mono text-primary-fixed text-[10px] sm:text-xs mb-2 tracking-widest">SECURITY STATUS</div>
              <div className="font-mono text-on-surface text-sm sm:text-lg">FULLY ENCRYPTED</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline font-black text-3xl sm:text-5xl text-white uppercase tracking-tighter mb-6 sm:mb-8 leading-[0.9]">Enterprise-Grade Security Built In.</h2>
            <ul className="space-y-6 sm:space-y-8">
              <li className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-surface-bright flex items-center justify-center font-mono text-primary-fixed font-bold text-sm sm:text-base">01</div>
                <div>
                  <h4 className="font-headline font-bold text-lg sm:text-xl text-white uppercase tracking-tight mb-2">End-to-End Encryption</h4>
                  <p className="text-on-surface-variant text-sm">All your queries and data are encrypted end-to-end. Your information never leaves your security perimeter.</p>
                </div>
              </li>
              <li className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-surface-bright flex items-center justify-center font-mono text-primary-fixed font-bold text-sm sm:text-base">02</div>
                <div>
                  <h4 className="font-headline font-bold text-lg sm:text-xl text-white uppercase tracking-tight mb-2">SOC2 Type II Compliant</h4>
                  <p className="text-on-surface-variant text-sm">Regular external audits ensure our infrastructure meets the highest global security standards for data handling.</p>
                </div>
              </li>
              <li className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-surface-bright flex items-center justify-center font-mono text-primary-fixed font-bold text-sm sm:text-base">03</div>
                <div>
                  <h4 className="font-headline font-bold text-lg sm:text-xl text-white uppercase tracking-tight mb-2">Role-Based Access Control</h4>
                  <p className="text-on-surface-variant text-sm">Fine-grained access controls mapped to your existing SSO and directory services.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 bg-primary-fixed flex flex-col items-center text-center">
        <h2 className="font-headline font-black text-3xl sm:text-6xl md:text-8xl text-on-primary-fixed uppercase tracking-tighter mb-6 sm:mb-8">Ready for Instant Business Answers?</h2>
        <p className="font-body text-on-primary-container text-base sm:text-xl max-w-xl mb-8 sm:mb-12 font-medium">Go live in under 15 minutes. Stop waiting for reports. Start getting answers.</p>
        <button className="bg-on-primary-fixed text-white px-8 sm:px-12 py-4 sm:py-5 font-headline font-black text-lg sm:text-2xl uppercase tracking-[0.2em] hover:bg-black transition-colors active:scale-95 duration-75 w-full sm:w-auto">
          SCHEDULE A DEMO
        </button>
      </section>
    </main>
  );
}
