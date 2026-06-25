import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PartnersThankYouPage() {
  // Conversion endpoint (T2): firing here is the robust signal for ad-platform
  // conversion config. Pixels bind to this once GTM is installed.
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'partner_lead_thank_you' });
  }, []);

  return (
    <main className="grid-substrate min-h-screen flex items-center">
      <SEO
        title="Thank you — Rhobots Partner Program"
        description="Your partner inquiry has been received. We'll be in touch within one business day."
        path="/partners/thank-you"
        ogType="website"
        ogImage="/images/partners-og.jpg"
        noIndex
      />
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-12 py-24 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-fixed/10 border border-primary-fixed/40 mb-8">
          <span className="material-symbols-outlined text-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
        </div>
        <span className="font-mono text-[10px] text-primary-fixed uppercase tracking-[0.3em] block mb-4">// REQUEST RECEIVED</span>
        <h1 className="font-headline font-black text-3xl md:text-5xl text-white uppercase tracking-tighter mb-6">You're on our radar.</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Thanks for your interest in the Rhobots delivery partnership. A member of our team will reach out within one business day to map your client base to where Rhobots wins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/20 text-left mb-10">
          {[
            { n: '01', t: 'Intro & fit call', d: 'We map your clients to where Rhobots wins.' },
            { n: '02', t: 'Lighthouse account', d: 'One client, one budgeted problem to land first.' },
            { n: '03', t: 'Co-sell', d: 'We scope and deliver alongside you, on your brand.' },
          ].map((s) => (
            <div key={s.n} className="bg-surface-container-high p-5">
              <span className="font-mono text-primary-fixed text-xs tracking-widest">{s.n}</span>
              <h3 className="font-headline text-sm font-black uppercase text-white mt-2">{s.t}</h3>
              <p className="text-on-surface-variant/70 text-xs mt-2 leading-snug">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:tech@rhobots.ai" className="px-6 py-3 bg-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] transition-all">
            tech@rhobots.ai
          </a>
          <Link to="/" className="px-6 py-3 border border-outline-variant text-white font-headline font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
            Back to Rhobots
          </Link>
        </div>
      </div>
    </main>
  );
}
