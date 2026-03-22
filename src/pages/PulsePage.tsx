import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';

export default function PulsePage() {
  return (
    <main className="min-h-screen grid-substrate">
      <SEO
        title="Pulse - Real-Time Contact Center Intelligence"
        description="Transform your contact center with real-time AI. Reduce handle time by 42%, boost satisfaction by 18%, and ensure 99.8% compliance accuracy with Rhobots Pulse."
        path="/products/pulse"
        jsonLd={[
          organizationSchema(),
          productSchema({ name: 'Rhobots Pulse', description: 'Real-time contact center intelligence and agent guidance', path: '/products/pulse' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Pulse', path: '/products/pulse' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 font-mono text-[10px] tracking-widest uppercase mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-primary-fixed animate-pulse"></span>
              REAL-TIME INTELLIGENCE ACTIVE
            </div>
            <h1 className="font-headline text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-6 sm:mb-8">
              EVOLVE EVERY <span className="text-primary-fixed">DIALOGUE.</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              Turn every customer conversation into a competitive advantage. Real-time coaching, automatic compliance monitoring, and instant insights from every call.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="bg-primary-fixed text-on-primary-fixed px-6 sm:px-8 py-3 sm:py-4 font-mono font-bold tracking-widest text-sm sm:text-base hover:glow-bleed transition-all">
                SEE PULSE IN ACTION
              </button>
              <button className="border border-outline-variant/20 text-primary-fixed px-6 sm:px-8 py-3 sm:py-4 font-mono font-bold tracking-widest text-sm sm:text-base hover:bg-surface-bright/20 transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="bg-surface-container-high p-4 border-l-4 border-primary-container relative scanline">
              <div className="flex justify-between items-center mb-4 border-b border-outline-variant/10 pb-2">
                <span className="font-mono text-[10px] text-primary-fixed">LIVE PERFORMANCE</span>
                <span className="font-mono text-[10px] text-[#393939]">CONNECTED</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-surface-container-highest">
                  <div className="h-full bg-primary-fixed w-[78%]"></div>
                </div>
                <div className="h-2 w-full bg-surface-container-highest">
                  <div className="h-full bg-primary-fixed w-[45%]"></div>
                </div>
                <div className="h-2 w-full bg-surface-container-highest">
                  <div className="h-full bg-primary-fixed w-[92%]"></div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-3 font-mono">
                  <div className="text-[10px] text-[#393939]">HANDLE TIME</div>
                  <div className="text-2xl text-primary-fixed">-42.00%</div>
                </div>
                <div className="bg-surface-container-lowest p-3 font-mono">
                  <div className="text-[10px] text-[#393939]">RESPONSE</div>
                  <div className="text-2xl text-white">0.084</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Stack - Bento Grid */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10 sm:mb-16">
            <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">KEY CAPABILITIES</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">How Pulse Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Precision Transcript */}
            <div className="md:col-span-2 bg-surface-container-high p-6 sm:p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-outline-variant">01</div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl sm:text-4xl mb-4 sm:mb-6">description</span>
              <h3 className="font-headline text-xl font-bold text-white uppercase mb-4">Live Transcription</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Captures every word in real time with 99.8% accuracy. Understands intent, not just words.
              </p>
            </div>

            {/* Compliance Watch */}
            <div className="bg-surface-container p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-outline-variant">02</div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl sm:text-4xl mb-4 sm:mb-6">verified_user</span>
              <h3 className="font-headline text-xl font-bold text-white uppercase mb-4">Compliance Watch</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Automatically flags compliance risks and protects sensitive customer information in real time.
              </p>
            </div>

            {/* Pulse Mapping */}
            <div className="bg-surface-container p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-outline-variant">03</div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl sm:text-4xl mb-4 sm:mb-6">analytics</span>
              <h3 className="font-headline text-xl font-bold text-white uppercase mb-4">Sentiment Analysis</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Track customer sentiment throughout every conversation. Know when calls are going off track before it's too late.
              </p>
            </div>

            {/* Dynamic Orchestration */}
            <div className="md:col-span-3 lg:col-span-4 bg-surface-container-highest p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 sm:gap-12 border-l-4 border-primary-fixed">
              <div className="flex-1">
                <span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 font-mono text-[10px] font-bold mb-4 inline-block uppercase">KEY FEATURE</span>
                <h3 className="font-headline text-2xl sm:text-3xl font-black text-white uppercase mb-4">Live Agent Guidance</h3>
                <p className="text-on-surface-variant text-base sm:text-lg">
                  Gives your agents real-time suggestions and automatically triggers follow-up workflows based on conversation outcomes.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-surface-container-lowest border border-outline-variant/10 p-2 relative">
                <img
                  alt="Abstract cyber industrial digital grid and data streams"
                  className="w-full h-full object-cover opacity-50 grayscale"
                  src="/images/cyber-grid-datastreams.jpg"
                />
                <div className="absolute inset-0 bg-primary-fixed/5 scanline"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="max-w-lg">
            <h2 className="font-headline text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Validated Impact</h2>
            <p className="text-on-surface-variant font-mono uppercase text-xs tracking-widest">Results from Enterprise Deployments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full md:w-auto">
            <div className="text-center p-4 sm:p-6 bg-surface-container-high">
              <div className="font-mono text-primary-fixed text-2xl sm:text-4xl font-bold mb-1">-42%</div>
              <div className="font-mono text-[10px] text-outline text-center uppercase tracking-widest">Handle Time Reduction</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-surface-container-high">
              <div className="font-mono text-white text-2xl sm:text-4xl font-bold mb-1">+18%</div>
              <div className="font-mono text-[10px] text-outline text-center uppercase tracking-widest">Customer Satisfaction Lift</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-surface-container-high col-span-2 md:col-span-1">
              <div className="font-mono text-white text-2xl sm:text-4xl font-bold mb-1">99.8%</div>
              <div className="font-mono text-[10px] text-outline text-center uppercase tracking-widest">Compliance Accuracy</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
