import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';
import PulseDemoWidget from '../components/pulse/PulseDemoWidget';

export default function PulsePage() {
  return (
    <main className="flex-grow">
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
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="bg-secondary-container text-on-secondary-container font-label text-[10px] px-2 py-0.5 uppercase tracking-widest">PRODUCT: PULSE</span>
              <span className="text-outline-variant font-label text-[10px] uppercase tracking-widest">CONTACT CENTER EDITION</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
              EVOLVE EVERY<br />DIALOGUE
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
              Turn every customer conversation into a competitive advantage. Real-time coaching, automatic compliance monitoring, and instant insights from every call.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#try-pulse-now" className="bg-primary-fixed text-on-primary-fixed px-6 sm:px-8 py-3 sm:py-4 font-headline font-black tracking-widest uppercase text-sm sm:text-base hover:ring-2 hover:ring-primary-fixed/30 transition-all active:scale-95 text-center">
                SEE PULSE IN ACTION
              </a>
              <a href="#how-pulse-works" className="border border-outline-variant text-primary px-6 sm:px-8 py-3 sm:py-4 font-headline font-black tracking-widest uppercase text-sm sm:text-base hover:bg-white/5 transition-all text-center">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-high p-6 sm:p-8 scanline border-l-4 border-primary-container relative">
            <div className="absolute top-4 right-4 text-primary-fixed/20">
              <span className="material-symbols-outlined text-6xl">headset_mic</span>
            </div>
            <div className="space-y-6">
              <div>
                <span className="font-label text-xs text-outline-variant uppercase">HANDLE TIME REDUCTION</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-mono font-bold text-primary-fixed">-42%</span>
                  <span className="text-on-surface uppercase font-headline font-bold">Faster</span>
                </div>
                <span className="text-on-surface-variant text-sm font-label uppercase">Average Per Call</span>
              </div>
              <div className="pt-6 border-t border-outline-variant/20">
                <div>
                  <span className="block font-label text-[10px] text-outline-variant uppercase">COMPLIANCE ACCURACY</span>
                  <span className="font-mono text-lg text-white">99.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Live */}
      <section id="try-pulse-now" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <span className="font-label text-primary-fixed text-sm uppercase tracking-widest">LIVE DEMO</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-black tracking-tight text-white uppercase mt-2">TRY PULSE NOW</h2>
            <p className="text-on-surface-variant text-sm mt-2 font-body">Select an industry, speak naturally, and see Pulse in action.</p>
          </div>
          <div className="max-w-lg bg-surface-container-high border border-outline-variant/20 p-6 scanline relative">
            <PulseDemoWidget />
          </div>
        </div>
      </section>

      {/* Key Capabilities Bento Grid */}
      <section id="how-pulse-works" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <span className="font-label text-primary-fixed text-sm uppercase tracking-widest">KEY CAPABILITIES</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-black tracking-tight text-white uppercase mt-2">HOW PULSE WORKS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Live Transcription */}
            <div className="md:col-span-2 bg-surface-container-high p-6 sm:p-10 hover:bg-surface-bright transition-colors group">
              <div className="w-12 h-12 bg-surface-container-lowest flex items-center justify-center mb-8 border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary-fixed">description</span>
              </div>
              <h3 className="text-2xl font-black font-headline tracking-tighter uppercase mb-4 text-white">Live Transcription</h3>
              <p className="text-on-surface-variant font-body mb-8">
                Captures every word in real time with 99.8% accuracy. Understands intent, not just words.
              </p>
              <div className="bg-surface-container-lowest p-4 border-l-2 border-primary-fixed">
                <span className="font-mono text-xs text-primary-fixed opacity-70 block mb-1">TRANSCRIBING...</span>
                <div className="h-1 bg-outline-variant/20 w-full overflow-hidden">
                  <div className="bg-primary-fixed h-full w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Compliance Watch */}
            <div className="bg-surface-container-low p-6 sm:p-10 flex flex-col justify-between border border-outline-variant/10 group">
              <div>
                <span className="material-symbols-outlined text-on-surface-variant mb-6">verified_user</span>
                <h3 className="text-xl font-black font-headline tracking-tighter uppercase mb-4 text-white">Compliance Watch</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Automatically flags compliance risks and protects sensitive customer information in real time.
                </p>
              </div>
              <div className="mt-8 font-mono text-[10px] text-outline-variant uppercase">
                Risk Score: 0.0 | Clear
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-surface-container-low p-6 sm:p-10 flex flex-col justify-between border border-outline-variant/10">
              <div>
                <span className="material-symbols-outlined text-on-surface-variant mb-6">analytics</span>
                <h3 className="text-xl font-black font-headline tracking-tighter uppercase mb-4 text-white">Sentiment Analysis</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Track customer sentiment throughout every conversation. Know when calls are going off track before it's too late.
                </p>
              </div>
              <div className="mt-8 font-mono text-[10px] text-outline-variant uppercase">
                Sentiment: Positive | Stable
              </div>
            </div>

            {/* Live Agent Guidance (Wide Bottom) */}
            <div className="md:col-span-4 flex flex-col md:flex-row bg-[#1a1a1a] relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <div className="p-6 sm:p-10 md:w-1/2 z-10">
                <h3 className="text-2xl sm:text-3xl font-black font-headline tracking-tighter uppercase mb-4 text-white">Live Agent Guidance</h3>
                <p className="text-on-surface-variant font-body mb-8 max-w-sm">
                  Gives your agents real-time suggestions and automatically triggers follow-up workflows based on conversation outcomes.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1">
                    <span className="material-symbols-outlined text-primary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <span className="font-label text-[10px] uppercase">REAL-TIME HINTS</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1">
                    <span className="material-symbols-outlined text-primary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    <span className="font-label text-[10px] uppercase">AUTO WORKFLOWS</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative bg-surface-container-highest scanline opacity-50">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full font-mono text-[10px] text-primary-fixed/40 leading-tight select-none">
                    {'{ "agent": "PULSE", "status": "active", "sentiment": "positive", "compliance": "clear" }'}<br />
                    &gt; TRANSCRIBING CALL... [LIVE]<br />
                    &gt; SCANNING FOR COMPLIANCE RISK... [CLEAR]<br />
                    &gt; ANALYZING SENTIMENT... [POSITIVE]<br />
                    &gt; COACHING SUGGESTION READY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="font-label text-[#393939] text-sm uppercase tracking-widest">VALIDATED IMPACT</span>
            <h2 className="text-2xl sm:text-4xl font-black font-headline tracking-tight uppercase text-white mt-4 leading-none">RESULTS FROM ENTERPRISE DEPLOYMENTS</h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 bg-surface-container-high">
              <div className="font-mono text-primary-fixed text-3xl sm:text-5xl font-bold mb-2">-42%</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-widest">Handle Time Reduction</div>
            </div>
            <div className="p-6 sm:p-8 bg-surface-container-high">
              <div className="font-mono text-white text-3xl sm:text-5xl font-bold mb-2">+18%</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-widest">Customer Satisfaction Lift</div>
            </div>
            <div className="p-6 sm:p-8 bg-surface-container-high">
              <div className="font-mono text-white text-3xl sm:text-5xl font-bold mb-2">99.8%</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-widest">Compliance Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Command CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-primary-fixed flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase text-on-primary-fixed mb-6 sm:mb-8 leading-[0.9]">
            READY TO TRANSFORM YOUR CONTACT CENTER?
          </h2>
          <a href="/demo" className="w-full sm:w-auto bg-surface-container-lowest text-white px-8 sm:px-12 py-4 sm:py-5 font-headline font-black tracking-widest uppercase hover:scale-105 transition-all text-center">
            SCHEDULE A DEMO
          </a>
          <p className="mt-8 font-label text-on-primary-fixed uppercase tracking-widest text-sm">
            Limited availability. Request early access today.
          </p>
        </div>
      </section>
    </main>
  );
}
