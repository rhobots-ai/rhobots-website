import { Link } from 'react-router-dom';

export default function SecurityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">RESOURCES // SECURITY</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Security <span className="text-primary-fixed">First.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            Enterprise-grade security is not a feature — it's our foundation. Your data never leaves your perimeter unless you want it to.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-16">
          Compliance & <span className="text-primary-fixed">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-outline">
          {[
            { cert: 'SOC 2 Type II', desc: 'Annual audit of security, availability, and confidentiality controls.' },
            { cert: 'HIPAA', desc: 'Full compliance for healthcare and protected health information workloads.' },
            { cert: 'GDPR', desc: 'EU data protection regulation compliance with DPA available.' },
            { cert: 'ISO 27001', desc: 'Information security management system certification.' },
          ].map((c) => (
            <div key={c.cert} className="p-8 border-r border-b border-outline group hover:bg-surface transition-all">
              <h3 className="font-headline text-xl font-black text-primary-fixed uppercase tracking-tighter mb-4">{c.cert}</h3>
              <p className="text-on-surface text-xs leading-relaxed opacity-70">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-16">
          Security <span className="text-primary-fixed">Architecture</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-outline">
          {[
            { icon: 'lock', title: 'Encryption', desc: 'AES-256 encryption at rest, TLS 1.3 in transit. Customer-managed encryption keys available for enterprise plans.' },
            { icon: 'shield', title: 'Network Isolation', desc: 'VPC peering, private endpoints, and air-gapped deployment options. No shared tenancy on enterprise plans.' },
            { icon: 'admin_panel_settings', title: 'Access Controls', desc: 'RBAC, SSO via SAML 2.0 / OIDC, MFA enforcement, and session management with configurable timeouts.' },
            { icon: 'monitoring', title: 'Audit & Monitoring', desc: 'Complete audit trails for all API calls, data access events, and administrative actions. Real-time alerting on anomalies.' },
            { icon: 'bug_report', title: 'Vulnerability Management', desc: 'Continuous dependency scanning, penetration testing, and a responsible disclosure program with bug bounty.' },
            { icon: 'backup', title: 'Data Residency', desc: 'Choose your data region. On-premise deployment ensures data never leaves your infrastructure.' },
          ].map((f) => (
            <div key={f.title} className="p-10 border-r border-b border-outline group hover:bg-surface transition-all">
              <div className="w-10 h-10 flex items-center justify-center bg-outline text-primary-fixed mb-6 group-hover:bg-primary-fixed group-hover:text-background transition-colors">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white uppercase tracking-tighter mb-3">{f.title}</h3>
              <p className="text-on-surface text-xs leading-relaxed opacity-70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
          Security <span className="text-primary-fixed">Questions?</span>
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          Request our full security whitepaper or schedule a call with our security engineering team.
        </p>
        <Link to="/demo" className="inline-block bg-primary-fixed text-background px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all">
          Request Security Review
        </Link>
      </section>
    </main>
  );
}
