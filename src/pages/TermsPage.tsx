import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';
import { company, companyAddress } from '../lib/company';

export default function TermsPage() {
  return (
    <main>
      <SEO
        title="Terms of service"
        description="Terms of service for Rhobots, a brand of MayvionAI Intelligence Private Limited. Read our usage policies, service agreements, and user responsibilities."
        path="/terms"
        jsonLd={organizationSchema()}
      />
      <section className="py-32 px-8 md:px-24 border-b border-outline relative overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">LEGAL / TERMS</span>
          </div>
          <h1 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface leading-[1.1] mb-8">
            Terms of <span className="text-primary-fixed">Service.</span>
          </h1>
          <p className="text-on-surface text-sm opacity-50">Last updated: October 2026</p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Acceptance of Terms</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>These Terms of Service are an agreement between you and {company.legalName} (CIN {company.cin}), a company incorporated in India with its registered office at {companyAddress()} ("{company.brand}", "we", "us"). Rhobots is a brand of {company.legalName}.</p>
              <p>By accessing or using rhobots.ai or any Rhobots product, including Insac ("Services"), you agree to be bound by these Terms of Service. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Use of Services</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>You agree to use the Services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <p>You shall not attempt to reverse engineer, decompile, or disassemble any part of the Services, or use the Services to build a competing product or service.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Data Ownership</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>You retain all rights to the data you provide to the Services ("Customer Data"). {company.legalName} processes Customer Data solely to provide the Services and does not use Customer Data to train or improve models for other customers.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Limitation of Liability</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>To the maximum extent permitted by applicable law, {company.legalName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Governing Law</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70">
              <p>These terms shall be governed by the laws of India, without regard to conflict of law principles. The courts at Gurugram, Haryana shall have exclusive jurisdiction over any dispute arising from these terms.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
