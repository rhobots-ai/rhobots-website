import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';

export default function ExtractPage() {
  return (
    <main className="grid-substrate min-h-screen">
      <SEO
        title="Extract - Unstructured Data Extraction Engine"
        description="Transform unstructured documents into operational intelligence. Rhobots Extract handles complex PDF parsing, inbox streams, and legacy scan digitization with autonomous AI pipelines."
        path="/products/extract"
        jsonLd={[
          organizationSchema(),
          productSchema({ name: 'Rhobots Extract', description: 'Unstructured data extraction from documents and media', path: '/products/extract' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Extract', path: '/products/extract' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 md:pt-24 md:pb-32 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-primary-container to-transparent"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label text-primary-fixed tracking-[0.3em] uppercase text-xs">Terminal // Extract v4.0.1</span>
          <h1 className="font-headline text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none text-white uppercase">
            EXTRACT.<br />STRUCTURE.<br /><span className="text-primary-fixed">SCALE.</span>
          </h1>
          <p className="max-w-xl text-on-surface-variant font-body text-base md:text-lg leading-relaxed mt-8 border-l-4 border-primary-container pl-6">
            Turn chaos into operational intelligence. Autonomous data engine for complex PDF parsing, inbox streams, and legacy scan digitization.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-fixed text-on-primary-fixed font-headline font-black px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl tracking-tighter shadow-[0_0_20px_rgba(210,240,0,0.15)] hover:shadow-[0_0_30px_rgba(210,240,0,0.3)] transition-all">INITIALIZE PROTOCOL</button>
            <button className="border border-outline-variant text-primary font-headline font-black px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl tracking-tighter hover:bg-surface-bright transition-colors">_DOCUMENTATION</button>
          </div>
        </div>
      </section>

      {/* Technical Modules (Bento Grid) */}
      <section className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Ingestion Module */}
          <div className="md:col-span-8 bg-surface-container-high relative p-5 md:p-8 scanline overflow-hidden border-l-4 border-primary-container">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="font-headline text-3xl font-bold uppercase text-white">Universal Ingestion</h3>
                <p className="font-label text-on-surface-variant text-xs mt-1">MODULE_TYPE: MULTI_STREAM_INPUT</p>
              </div>
              <span className="material-symbols-outlined text-primary-fixed text-4xl">system_update_alt</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container p-6 space-y-4 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-fixed">picture_as_pdf</span>
                <h4 className="font-headline font-bold text-sm">COMPLEX PDFS</h4>
                <p className="text-xs text-on-surface-variant font-label leading-tight">Spatial awareness for nested tables and handwritten annotations.</p>
              </div>
              <div className="bg-surface-container p-6 space-y-4 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-fixed">mail</span>
                <h4 className="font-headline font-bold text-sm">INBOX STREAMS</h4>
                <p className="text-xs text-on-surface-variant font-label leading-tight">Real-time IMAP/SMTP monitoring for automated triage.</p>
              </div>
              <div className="bg-surface-container p-6 space-y-4 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-fixed">scanner</span>
                <h4 className="font-headline font-bold text-sm">LEGACY SCANS</h4>
                <p className="text-xs text-on-surface-variant font-label leading-tight">Multi-pass OCR with 99.9% semantic accuracy restoration.</p>
              </div>
            </div>
          </div>
          {/* API Connectivity */}
          <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/20 p-5 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-3xl font-bold uppercase text-white">Structured API</h3>
              <p className="font-label text-primary-fixed text-xs mt-2 font-bold tracking-widest">JSON_PAYLOAD_V4</p>
            </div>
            <div className="my-8 font-label text-[10px] text-primary-fixed-dim leading-relaxed bg-black p-4 opacity-80">
              <pre>{`{
  "entity": "RHOBOTS_KINETIC",
  "status": "STRUCTURED",
  "data_integrity": 0.998,
  "endpoint": "/v1/extract"
}`}</pre>
            </div>
            <button className="font-label text-xs uppercase underline underline-offset-8 hover:text-primary-fixed transition-colors">_VIEW_ENDPOINT_RECORDS</button>
          </div>
          {/* Integration Flow */}
          <div className="md:col-span-12 bg-surface-container p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="font-headline text-2xl md:text-4xl font-black uppercase tracking-tight text-white">System Integration Flow</h3>
                <p className="text-on-surface-variant max-w-lg">Native webhooks and low-latency piping for SAP, Salesforce, and custom ERP environments. Zero-buffer processing.</p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-surface-container-highest font-label text-[10px] px-3 py-1 border border-outline-variant/20">AWS_S3</span>
                  <span className="bg-surface-container-highest font-label text-[10px] px-3 py-1 border border-outline-variant/20">SNOWFLAKE</span>
                  <span className="bg-surface-container-highest font-label text-[10px] px-3 py-1 border border-outline-variant/20">POSTGRES_CDC</span>
                </div>
              </div>
              <div className="flex-1 w-full h-48 bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 gap-2 p-2 opacity-10">
                  <div className="bg-primary-fixed w-full h-full"></div>
                  <div className="bg-primary-fixed w-full h-full"></div>
                  <div className="bg-primary-fixed w-full h-full"></div>
                  <div className="bg-primary-fixed w-full h-full"></div>
                  <div className="bg-primary-fixed w-full h-full"></div>
                  <div className="bg-primary-fixed w-full h-full"></div>
                </div>
                <div className="z-10 flex items-center space-x-4 md:space-x-8">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-surface-bright flex items-center justify-center"><span className="material-symbols-outlined text-white text-xl md:text-2xl">input</span></div>
                  <div className="w-12 md:w-24 h-[2px] bg-primary-container relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary-fixed"></div>
                  </div>
                  <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-primary-fixed flex items-center justify-center animate-pulse"><span className="material-symbols-outlined text-primary-fixed text-2xl md:text-4xl">memory</span></div>
                  <div className="w-12 md:w-24 h-[2px] bg-primary-container relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary-fixed"></div>
                  </div>
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-surface-bright flex items-center justify-center"><span className="material-symbols-outlined text-white text-xl md:text-2xl">output</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Benchmarks */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-surface-container-lowest relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase text-white mb-6">Hardware<br />Benchmarks</h2>
            <p className="text-on-surface-variant font-body">Performance measured on RHOBOTS KINETIC node arrays. Optimized for H100 GPU clusters.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/20">
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4 tracking-tighter">LATENCY_MS</span>
              <div className="font-headline text-4xl md:text-5xl font-black text-white italic">0.14<span className="text-sm font-label font-normal text-on-surface-variant ml-2">MS</span></div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-[95%] h-full bg-primary-container"></div>
              </div>
            </div>
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4 tracking-tighter">THROUGHPUT</span>
              <div className="font-headline text-4xl md:text-5xl font-black text-white italic">4.8<span className="text-sm font-label font-normal text-on-surface-variant ml-2">GB/S</span></div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-[88%] h-full bg-primary-container"></div>
              </div>
            </div>
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4 tracking-tighter">RELIABILITY</span>
              <div className="font-headline text-4xl md:text-5xl font-black text-white italic">99.99<span className="text-sm font-label font-normal text-on-surface-variant ml-2">%</span></div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-[99.9%] h-full bg-primary-container"></div>
              </div>
            </div>
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4 tracking-tighter">NODE_SYNC</span>
              <div className="font-headline text-4xl md:text-5xl font-black text-white italic">INSTANT</div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-full h-full bg-primary-container"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-20 md:py-32 border-t border-outline-variant/20 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-headline text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white mb-8 md:mb-12 tracking-tighter">READY TO CONVERT?</h2>
          <button className="bg-primary-fixed text-on-primary-fixed font-headline font-black px-8 py-5 md:px-16 md:py-8 text-xl md:text-2xl tracking-tighter hover:scale-105 transition-transform">INITIALIZE PROTOCOL</button>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="font-headline text-[10rem] md:text-[30rem] font-black uppercase leading-none text-white select-none">RHBT</span>
        </div>
      </section>
    </main>
  );
}
