import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

export default function TermsPage() {
  return (
    <main>
      <SEO
        title="Terms of Service"
        description="Terms of service for the Rhobots AI enterprise platform. Read our usage policies, service agreements, and user responsibilities."
        path="/terms"
        jsonLd={organizationSchema()}
      />
      <section className="py-32 px-8 md:px-24 border-b border-outline cyber-grid relative overflow-hidden">
        <div className="scanline-animated"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">LEGAL // TERMS</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase italic">
            Terms of <span className="text-primary-fixed">Service.</span>
          </h1>
          <p className="text-on-surface text-sm opacity-50">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Acceptance of Terms</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>By accessing or using the RHOBOTS AI platform and services ("Services"), you agree to be bound by these Terms of Service. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Use of Services</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>You agree to use the Services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <p>You shall not attempt to reverse engineer, decompile, or disassemble any part of the Services, or use the Services to build a competing product or service.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Data Ownership</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>You retain all rights to the data you provide to the Services ("Customer Data"). RHOBOTS AI processes Customer Data solely to provide the Services and does not use Customer Data to train or improve models for other customers.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Limitation of Liability</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>To the maximum extent permitted by applicable law, RHOBOTS AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-6">Governing Law</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70">
              <p>These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
