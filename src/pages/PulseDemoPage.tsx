import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PulseDemoWidget, { PulseUseCases } from '../components/pulse/PulseDemoWidget';
import PulseSampleRecordings from '../components/pulse/PulseSampleRecordings';
import { getCustomerConfig, type CustomerConfig } from '../lib/customerConfigs';
import { breadcrumbSchema, organizationSchema } from '../lib/structuredData';
import { useState, useEffect } from 'react';

export default function PulseDemoPage() {
  const [searchParams] = useSearchParams();
  const [customerConfig, setCustomerConfig] = useState<CustomerConfig | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  useEffect(() => {
    const customerId = searchParams.get('customer');
    if (customerId) {
      const config = getCustomerConfig(customerId);
      setCustomerConfig(config ?? null);
      if (config?.industry) {
        setSelectedIndustry(config.industry);
      }
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

      {/* Demo Section */}
      <section id="voice-demo" className="px-4 sm:px-6 py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Sample Recording */}
            <div className="flex flex-col">
              <div className="flex flex-col mb-6 lg:mb-10">
                <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// Sample Recording</span>
                <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
                  Hear Pulse In Action
                </h2>
                <p className="text-on-surface-variant text-sm sm:text-base mt-3 max-w-lg">
                  A pre-recorded call between a customer and the Pulse AI agent.
                </p>
              </div>
              <div className="flex-1">
                <PulseSampleRecordings />
              </div>
            </div>

            {/* Right Column: Live Voice Demo */}
            <div className="flex flex-col">
              <div className="flex flex-col mb-6 lg:mb-10">
                <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// LIVE VOICE DEMO</span>
                <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
                  Talk To Pulse. Right Now.
                </h2>
                <p className="text-on-surface-variant text-sm sm:text-base mt-3 max-w-lg">
                  Pick a scenario, speak naturally, and see how Pulse resolves your query in real time.
                </p>
              </div>
              <div className="bg-surface-container-high border border-outline-variant/20 scanline">
                <PulseDemoWidget
                  lockedIndustry={'logistics'}
                  hideUseCases={true}
                  onIndustryChange={setSelectedIndustry}
                />
              </div>
            </div>

          </div>

          {/* Use Cases Section (2nd fold) */}
          <div className="mt-20 lg:mt-32 pt-16 border-t border-outline-variant/10">
            <div className="flex flex-col mb-10 text-center items-center">
              <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
                {selectedIndustry ? `${selectedIndustry.toUpperCase()} USE CASES` : 'WHAT YOU CAN ASK'}
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base mt-4 max-w-2xl">
                Here are a few common scenarios you can try during the live demo to experience the AI's capabilities.
              </p>
            </div>
            <PulseUseCases industry={selectedIndustry} />
          </div>

        </div>
      </section>
    </>
  );
}
