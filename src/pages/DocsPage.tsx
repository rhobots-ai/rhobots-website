import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

const sections = [
  { icon: 'rocket_launch', title: 'Getting Started', desc: 'Quick start guides, SDK installation, and your first API call.', tag: 'START_HERE' },
  { icon: 'settings_input_component', title: 'Operator API', desc: 'Autonomous process automation endpoints, workflow triggers, and event hooks.', tag: 'PRODUCT' },
  { icon: 'database_upload', title: 'Extract API', desc: 'Document ingestion, schema mapping, and structured output endpoints.', tag: 'PRODUCT' },
  { icon: 'psychology', title: 'Sage API', desc: 'Natural language query interface, context management, and response streaming.', tag: 'PRODUCT' },
  { icon: 'insights', title: 'Pulse API', desc: 'Real-time analytics, alert configuration, and dashboard embedding.', tag: 'PRODUCT' },
  { icon: 'code', title: 'Copilot API', desc: 'Code completion, review automation, and IDE integration endpoints.', tag: 'PRODUCT' },
  { icon: 'key', title: 'Authentication', desc: 'API keys, OAuth 2.0, SSO integration, and RBAC configuration.', tag: 'REFERENCE' },
  { icon: 'webhook', title: 'Webhooks', desc: 'Event subscriptions, payload formats, and retry policies.', tag: 'REFERENCE' },
  { icon: 'speed', title: 'Rate Limits', desc: 'Quotas, throttling behavior, and enterprise limit increases.', tag: 'REFERENCE' },
];

export default function DocsPage() {
  return (
    <main>
      <SEO
        title="Developer Documentation"
        description="API reference, SDK guides, and quick start documentation for the Rhobots AI platform. Integrate Operator, Extract, Sage, Pulse, and Copilot into your enterprise systems."
        path="/docs"
        jsonLd={organizationSchema()}
      />
      {/* Hero */}
      <section className="py-32 px-8 md:px-24 border-b border-outline relative overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">RESOURCES / DOCUMENTATION</span>
          </div>
          <h1 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface leading-[1.1] mb-8">
            Developer <span className="text-primary-fixed">Docs.</span>
          </h1>
          <p className="text-on-surface text-sm md:text-base max-w-xl font-body leading-relaxed border-l-2 border-primary-fixed pl-6 py-2">
            Everything you need to integrate Rhobots AI into your enterprise stack — SDKs, API references, and deployment guides.
          </p>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-outline">
          {sections.map((s) => (
            <div key={s.title} className="p-8 border-r border-b border-outline group hover:bg-surface transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container text-primary-fixed group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-on-surface opacity-30 uppercase">{s.tag}</span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-on-surface mb-3 group-hover:text-primary-fixed transition-colors">{s.title}</h3>
              <p className="text-on-surface text-xs leading-relaxed opacity-70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-24 bg-surface border-b border-outline text-center">
        <h2 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface mb-8">
          Need <span className="text-primary-fixed">Help?</span>
        </h2>
        <p className="text-on-surface text-sm max-w-lg mx-auto mb-12 opacity-70">
          Our engineering team is available to help you integrate RHOBOTS into your infrastructure.
        </p>
        <Link to="/demo" className="inline-block bg-primary text-on-primary px-10 py-5 font-body font-medium text-sm hover:bg-primary-fixed-dim transition-all">
          Contact Engineering
        </Link>
      </section>
    </main>
  );
}
