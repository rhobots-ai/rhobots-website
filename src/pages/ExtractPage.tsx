import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';

export default function ExtractPage() {
  return (
    <main className=" min-h-screen">
      <SEO
        title="Extract — turn documents into structured data"
        description="Extract reads PDFs, emails, scans and handwritten notes and returns typed fields your systems can consume directly. Runs on your infrastructure."
        path="/products/extract"
        jsonLd={[
          organizationSchema(),
          productSchema({ name: 'Rhobots Extract', description: 'Automated document processing for enterprise data', path: '/products/extract' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Extract', path: '/products/extract' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 md:pt-24 md:pb-32 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-primary-container to-transparent"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label text-outline tracking-[0.18em] uppercase text-xs">Extract</span>
          <h1 className="font-headline text-4xl md:text-5xl font-semibold leading-[1.1] text-on-surface">
            Every document your business runs on, as structured data.
          </h1>
          <p className="max-w-xl text-on-surface-variant font-body text-base md:text-lg leading-relaxed mt-8 border-l-4 border-primary-container pl-6">
            Extract reads PDFs, emails, scans and handwritten notes and returns typed fields your systems can consume directly — on your infrastructure, not someone else&rsquo;s API.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
            <a href="/demo" className="bg-primary text-on-primary font-body font-medium px-6 py-3 text-sm transition-all text-center">Get started</a>
            <a href="#what-extract-does" className="border border-outline text-on-surface font-body font-medium px-6 py-3 text-sm hover:bg-surface-bright transition-colors text-center">Learn more</a>
          </div>
        </div>
      </section>

      {/* Technical Modules (Bento Grid) */}
      <section id="what-extract-does" className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Ingestion Module */}
          <div className="md:col-span-8 bg-surface-container-high relative p-5 md:p-8 overflow-hidden border-l-4 border-primary-container">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="font-headline text-3xl font-bold text-on-surface">Universal ingestion</h3>
                <p className="font-label text-on-surface-variant text-xs mt-1">Handles any document format</p>
              </div>
              <span className="material-symbols-outlined text-primary-fixed text-4xl">system_update_alt</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container p-6 space-y-4 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-fixed">picture_as_pdf</span>
                <h4 className="font-headline font-bold text-sm">Complex PDFs</h4>
                <p className="text-xs text-on-surface-variant font-label leading-tight">Reads multi-column layouts, nested tables and handwritten annotations, not just clean digital text.</p>
              </div>
              <div className="bg-surface-container p-6 space-y-4 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-fixed">mail</span>
                <h4 className="font-headline font-bold text-sm">Inbox streams</h4>
                <p className="text-xs text-on-surface-variant font-label leading-tight">Automatically processes incoming emails and routes them to the right team or system.</p>
              </div>
              <div className="bg-surface-container p-6 space-y-4 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-fixed">scanner</span>
                <h4 className="font-headline font-bold text-sm">Legacy scans</h4>
                <p className="text-xs text-on-surface-variant font-label leading-tight">Digitizes legacy paper documents with 99.9% accuracy — even faded or low-quality scans.</p>
              </div>
            </div>
          </div>
          {/* API Connectivity */}
          <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/20 p-5 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface">Structured API</h3>
              <p className="font-label text-on-surface-variant text-xs mt-2">Every document comes back as typed fields your systems can consume directly.</p>
            </div>
            <div className="my-8 font-mono text-[10px] text-on-surface leading-relaxed bg-surface-container p-4 border border-outline-variant">
              <pre>{`{
  "document_type": "invoice",
  "invoice_number": "INV-40912",
  "total": 148250.00,
  "currency": "INR",
  "line_items": 14
}`}</pre>
            </div>
          </div>
          {/* Integration Flow */}
          <div className="md:col-span-12 bg-surface-container p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="font-headline text-2xl md:text-4xl font-semibold tracking-tight text-on-surface">Connects to your business systems</h3>
                <p className="text-on-surface-variant max-w-lg">Works directly with SAP, Salesforce, and your custom ERP systems. Data flows automatically — no manual exports or imports needed.</p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-surface-container-highest font-label text-[10px] px-3 py-1 border border-outline-variant/20">AWS</span>
                  <span className="bg-surface-container-highest font-label text-[10px] px-3 py-1 border border-outline-variant/20">SNOWFLAKE</span>
                  <span className="bg-surface-container-highest font-label text-[10px] px-3 py-1 border border-outline-variant/20">DATABASES</span>
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
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-surface-bright flex items-center justify-center"><span className="material-symbols-outlined text-on-surface text-xl md:text-2xl">input</span></div>
                  <div className="w-12 md:w-24 h-[2px] bg-primary-container relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary-fixed"></div>
                  </div>
                  <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-primary-fixed flex items-center justify-center animate-pulse"><span className="material-symbols-outlined text-primary-fixed text-2xl md:text-4xl">memory</span></div>
                  <div className="w-12 md:w-24 h-[2px] bg-primary-container relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary-fixed"></div>
                  </div>
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-surface-bright flex items-center justify-center"><span className="material-symbols-outlined text-on-surface text-xl md:text-2xl">output</span></div>
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
            <h2 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface mb-6">Performance you can count on</h2>
            <p className="text-on-surface-variant font-body">Built for enterprise-scale workloads. Handles millions of documents without slowing down.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/20">
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4">RESPONSE TIME</span>
              <div className="font-headline text-4xl md:text-3xl font-semibold text-on-surface">Real-time</div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-[95%] h-full bg-primary-container"></div>
              </div>
            </div>
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4">PROCESSING SPEED</span>
              <div className="font-headline text-4xl md:text-3xl font-semibold text-on-surface">4.8<span className="text-sm font-label font-normal text-on-surface-variant ml-2">GB/S</span></div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-[88%] h-full bg-primary-container"></div>
              </div>
            </div>
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4">UPTIME</span>
              <div className="font-headline text-4xl md:text-3xl font-semibold text-on-surface">99.99<span className="text-sm font-label font-normal text-on-surface-variant ml-2">%</span></div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="w-[99.9%] h-full bg-primary-container"></div>
              </div>
            </div>
            <div className="bg-surface p-8">
              <span className="font-label text-primary-fixed text-xs block mb-4">SYNC SPEED</span>
              <div className="font-headline text-4xl md:text-3xl font-semibold text-on-surface">INSTANT</div>
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
          <h2 className="font-headline text-3xl sm:text-4xl md:text-3xl font-semibold text-on-surface mb-8">Bring us your hardest documents.</h2>
          <p className="mx-auto max-w-xl text-on-surface-variant font-body text-base leading-relaxed mb-8 md:mb-12">
            Send a sample of the formats your team handles today and we will show you what comes back structured.
          </p>
          <a href="/demo" className="inline-block bg-primary text-on-primary font-body font-medium px-8 py-4 text-base hover:bg-primary-fixed transition-colors text-center">Request a demo</a>
        </div>
      </section>
    </main>
  );
}
