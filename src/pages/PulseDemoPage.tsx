import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PulseDemoWidget from '../components/pulse/PulseDemoWidget';
import PulseSampleRecordings from '../components/pulse/PulseSampleRecordings';
import { getCustomerConfig, type CustomerConfig } from '../lib/customerConfigs';
import { breadcrumbSchema, organizationSchema } from '../lib/structuredData';
import { useState, useEffect } from 'react';

export default function PulseDemoPage() {
  const [searchParams] = useSearchParams();
  const [customerConfig, setCustomerConfig] = useState<CustomerConfig | null>(null);

  useEffect(() => {
    const customerId = searchParams.get('customer');
    if (customerId) {
      const config = getCustomerConfig(customerId);
      setCustomerConfig(config ?? null);
    }
  }, [searchParams]);

  return (
    <>
      <SEO
        title="Pulse Live Demo — Try AI Voice Support Now"
        description="Experience Pulse in action. Pick an industry scenario, speak naturally, and watch our AI voice agent resolve customer queries in real time — no sign-up required."
        path="/pulse/demo"
        noIndex
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pulse', path: '/products/pulse' },
            { name: 'Live Demo', path: '/pulse/demo' },
          ]),
        ]}
      />

      {/* Sample Recording */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-surface border-b border-outline-variant/10">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col mb-6">
            <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// Sample Recording</span>
            <h2 className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              Hear Pulse In Action
            </h2>
            <p className="text-on-surface-variant text-sm mt-2">
              A pre-recorded call between a customer and the Pulse AI agent.
            </p>
          </div>
          <PulseSampleRecordings />
        </div>
      </section>

      {/* Live Voice Demo */}
      <section id="voice-demo" className="px-4 sm:px-6 py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10 sm:mb-16">
            <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// LIVE VOICE DEMO</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Talk To Pulse. Right Now.
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-3 max-w-2xl">
              Pick a scenario, speak naturally, and see how Pulse resolves your query in real time.
            </p>
          </div>
          <div className="bg-surface-container-high border border-outline-variant/20 scanline">
            <PulseDemoWidget lockedIndustry={customerConfig?.industry} defaultUserName="Rubal" />
          </div>
        </div>
      </section>
    </>
  );
}
