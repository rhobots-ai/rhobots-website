import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    price: 'Custom',
    desc: 'For teams evaluating cognitive automation.',
    features: ['Single product access', 'Community support', 'Standard SLA (99.5%)', '100K API calls/month', 'Shared infrastructure'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For organizations running production AI at scale.',
    features: ['Full platform access', 'Dedicated support engineer', 'Enterprise SLA (99.9%)', 'Unlimited API calls', 'Dedicated infrastructure', 'SSO & RBAC', 'Custom model fine-tuning', 'On-premise deployment'],
    cta: 'Contact Sales',
    highlight: true,
  },
  {
    name: 'Government',
    price: 'Custom',
    desc: 'For public sector and regulated industries.',
    features: ['Full platform access', 'FedRAMP pathway', 'HIPAA & SOC 2 compliance', 'Air-gapped deployment', 'Dedicated security team', 'Custom data residency'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">PLATFORM // PRICING</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Built for <span className="text-primary-fixed">Scale.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            Every plan includes enterprise-grade security, full audit trails, and zero-disruption integration with your existing infrastructure.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-outline">
          {tiers.map((tier) => (
            <div key={tier.name} className={`p-10 border-r border-b border-outline flex flex-col ${tier.highlight ? 'bg-surface' : ''}`}>
              {tier.highlight && (
                <div className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase mb-4">// RECOMMENDED</div>
              )}
              <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-2">{tier.name}</h3>
              <div className="font-headline text-4xl font-black text-primary-fixed mb-4">{tier.price}</div>
              <p className="text-on-surface text-xs leading-relaxed opacity-70 mb-8">{tier.desc}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-on-surface text-xs opacity-70">
                    <span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5" style={{ fontSize: '14px' }}>check</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className={`block text-center px-8 py-4 font-headline font-black text-sm uppercase tracking-widest transition-all ${
                  tier.highlight
                    ? 'bg-primary-fixed text-background hover:bg-white'
                    : 'bg-surface border border-outline text-white hover:bg-outline'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ-style CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
          Need a Custom <span className="text-primary-fixed">Quote?</span>
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          Our team will design a plan tailored to your organization's scale, compliance requirements, and deployment model.
        </p>
        <Link to="/demo" className="inline-block bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all">
          Request a Quote
        </Link>
      </section>
    </main>
  );
}
