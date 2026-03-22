import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

export default function SlaPage() {
  return (
    <main>
      <SEO
        title="Service Level Agreement"
        description="Rhobots AI SLA details. Review our uptime commitments, support response times, and service availability guarantees for enterprise customers."
        path="/sla"
        jsonLd={organizationSchema()}
      />
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">LEGAL // SLA_V1</span>
          </div>
          <h1 className="font-headline text-3xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Service Level <span className="text-primary-fixed">Agreement.</span>
          </h1>
          <p className="text-on-surface text-sm opacity-50">Version 1.0 — Effective March 2026</p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Uptime Commitment</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>RHOBOTS AI commits to 99.9% uptime for all production API endpoints, measured monthly. Scheduled maintenance windows are excluded from uptime calculations and will be communicated at least 72 hours in advance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline mt-8">
              {[
                { metric: '99.9%', label: 'API Uptime' },
                { metric: '<200ms', label: 'P95 Latency' },
                { metric: '< 15 min', label: 'Incident Response' },
              ].map((item) => (
                <div key={item.label} className="p-8 border-r border-b border-outline last:border-r-0 text-center">
                  <div className="font-headline text-3xl font-black text-primary-fixed mb-2">{item.metric}</div>
                  <div className="font-mono text-[10px] tracking-widest text-on-surface opacity-50 uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Support Tiers</h2>
            <div className="space-y-4">
              {[
                { severity: 'P0 — Critical', response: '15 minutes', resolution: '4 hours', desc: 'Complete service outage or data loss' },
                { severity: 'P1 — High', response: '1 hour', resolution: '8 hours', desc: 'Major feature degradation affecting production' },
                { severity: 'P2 — Medium', response: '4 hours', resolution: '24 hours', desc: 'Non-critical feature issues' },
                { severity: 'P3 — Low', response: '1 business day', resolution: '5 business days', desc: 'General inquiries and minor issues' },
              ].map((tier) => (
                <div key={tier.severity} className="border border-outline p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-lg font-black text-white uppercase tracking-tighter">{tier.severity}</h3>
                    <p className="text-on-surface text-xs opacity-50 mt-1">{tier.desc}</p>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-on-surface opacity-50 uppercase">Response</div>
                      <div className="font-headline text-sm font-black text-primary-fixed">{tier.response}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-on-surface opacity-50 uppercase">Resolution</div>
                      <div className="font-headline text-sm font-black text-white">{tier.resolution}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Service Credits</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>If monthly uptime falls below the committed threshold, affected customers are eligible for service credits applied to their next billing cycle:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="before:content-['//'] before:text-primary-fixed before:mr-2">99.0% – 99.9%: 10% service credit</li>
                <li className="before:content-['//'] before:text-primary-fixed before:mr-2">95.0% – 99.0%: 25% service credit</li>
                <li className="before:content-['//'] before:text-primary-fixed before:mr-2">Below 95.0%: 50% service credit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
