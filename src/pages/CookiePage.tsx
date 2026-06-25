import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';
import { openConsentSettings } from '../lib/consent';

export default function CookiePage() {
  return (
    <main>
      <SEO
        title="Cookie Policy"
        description="Rhobots AI cookie policy. Understand how we use cookies and similar technologies on our website."
        path="/cookie"
        jsonLd={organizationSchema()}
      />
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">LEGAL // COOKIES</span>
          </div>
          <h1 className="font-headline text-3xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Cookie <span className="text-primary-fixed">Policy.</span>
          </h1>
          <p className="text-on-surface text-sm opacity-50">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">What Are Cookies</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Cookies We Use</h2>
            <div className="space-y-6">
              {[
                { name: 'Essential Cookies', desc: 'Required for basic site functionality such as security and remembering your cookie choice. These are always on and cannot be disabled.' },
                { name: 'Analytics Cookies', desc: 'Set only with your consent, via Google Tag Manager / Google Analytics. They help us understand how visitors interact with our site. Data is aggregated and anonymized.' },
                { name: 'Marketing Cookies', desc: 'Set only with your consent. Advertising pixels (such as LinkedIn, Meta and Google Ads) measure ad performance and support retargeting. Not loaded until you accept.' },
              ].map((cookie) => (
                <div key={cookie.name} className="border border-outline p-6">
                  <h3 className="font-headline text-lg font-black text-white uppercase tracking-tighter mb-2">{cookie.name}</h3>
                  <p className="text-on-surface text-sm leading-relaxed opacity-70">{cookie.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Managing Cookies</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>Analytics and marketing cookies load only after you accept them. You can withdraw or change your consent at any time using the button below, or control cookies through your browser settings. Disabling essential cookies may affect site functionality.</p>
              <p>For questions about our cookie practices, contact us at <span className="text-primary-fixed">tech@rhobots.ai</span></p>
            </div>
            <button
              onClick={openConsentSettings}
              className="mt-6 px-5 py-3 bg-primary-fixed text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] transition-all"
            >
              Manage cookie consent
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
