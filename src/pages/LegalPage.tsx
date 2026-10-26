import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';
import { company, companyAddress } from '../lib/company';

export default function LegalPage() {
  return (
    <main>
      <SEO
        title="Legal"
        description={`Legal information and corporate disclosures for Rhobots, a brand of ${company.legalName}.`}
        path="/legal"
        jsonLd={organizationSchema()}
      />
      <section className="py-32 px-8 md:px-24 border-b border-outline relative overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary-fixed/30 px-4 py-1 mb-8">
            <span className="w-2 h-2 bg-primary-fixed"></span>
            <span className="text-label text-[10px] font-bold tracking-[0.2em] text-primary-fixed uppercase">COMPANY / LEGAL</span>
          </div>
          <h1 className="font-headline text-3xl md:text-3xl font-semibold text-on-surface leading-[1.1] mb-8">
            Legal <span className="text-primary-fixed">Notices.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-24 bg-background border-b border-outline max-w-4xl">
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Corporate Information</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>This website and all Rhobots products are operated by {company.legalName}, a private limited company incorporated in India under the Companies Act, 2013. Rhobots is a brand of {company.legalName}.</p>
              <p>Registered office: {companyAddress()}. CIN: {company.cin}.{company.gstin && ` GSTIN: ${company.gstin}.`}</p>
              <p>All content on this website, including text, graphics, logos, and software, is the property of {company.legalName} and is protected by international copyright and trademark laws.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Intellectual Property</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>RHOBOTS, the RHOBOTS logo, Studio, Operator, Extract, Sage, Pulse, Copilot, and Insac are trademarks of {company.legalName}. All other trademarks are the property of their respective owners.</p>
              <p>No license to any intellectual property is granted by this website, whether by implication, estoppel, or otherwise.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Limitation of Liability</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70 space-y-4">
              <p>The information on this website is provided "as is" without warranty of any kind. {company.legalName} shall not be liable for any damages arising from the use of this website or the information contained herein.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-semibold text-on-surface mb-6">Contact</h2>
            <div className="text-on-surface text-sm leading-relaxed opacity-70">
              <p>For legal inquiries, contact us at <span className="text-primary-fixed">tech@rhobots.ai</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
