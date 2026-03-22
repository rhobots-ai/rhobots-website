import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

export default function LegalPage() {
  return (
    <main>
      <SEO
        title="Legal"
        description="Legal information and corporate disclosures for Rhobots AI."
        path="/legal"
        jsonLd={organizationSchema()}
      />
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">COMPANY // LEGAL</span>
          </div>
          <h1 className="font-headline text-3xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Legal <span className="text-primary-fixed">Notices.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Corporate Information</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>RHOBOTS AI, Inc. is a Delaware corporation headquartered in San Francisco, California.</p>
              <p>All content on this website, including text, graphics, logos, and software, is the property of RHOBOTS AI, Inc. and is protected by international copyright and trademark laws.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Intellectual Property</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>RHOBOTS, the RHOBOTS logo, Operator, Extract, Sage, Pulse, and Copilot are trademarks of RHOBOTS AI, Inc. All other trademarks are the property of their respective owners.</p>
              <p>No license to any intellectual property is granted by this website, whether by implication, estoppel, or otherwise.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Limitation of Liability</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>The information on this website is provided "as is" without warranty of any kind. RHOBOTS AI, Inc. shall not be liable for any damages arising from the use of this website or the information contained herein.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Contact</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70">
              <p>For legal inquiries, contact us at <span className="text-primary-fixed">tech@rhobots.ai</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
