import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'services', title: '2. Services Description' },
  { id: 'acceptable-use', title: '3. Acceptable Use' },
  { id: 'intellectual-property', title: '4. Intellectual Property' },
  { id: 'confidentiality', title: '5. Confidentiality' },
  { id: 'data-privacy', title: '6. Data and Privacy' },
  { id: 'payment', title: '7. Payment Terms' },
  { id: 'disclaimers', title: '8. Disclaimers & Limitation of Liability' },
  { id: 'indemnification', title: '9. Indemnification' },
  { id: 'termination', title: '10. Termination' },
  { id: 'governing-law', title: '11. Governing Law' },
  { id: 'changes', title: '12. Changes to Terms' },
  { id: 'contact', title: '13. Contact Information' },
];

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="relative z-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <BrandLogo variant="sm" />
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-24 -left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="absolute inset-0 bg-grid-gray-900/[0.03] bg-[size:50px_50px]"></div>

        <div className="relative z-10 container mx-auto px-6 pt-16 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">Last updated: March 11, 2026</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
              Terms of
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Please read these terms carefully before using Rhobots products and services.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 container mx-auto px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Table of Contents */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors leading-snug"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-lg space-y-12">

              <section id="acceptance">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    By accessing or using any products, services, or platforms provided by Rhobots AI Technologies Private Limited ("Rhobots", "we", "us", or "our"), you ("Customer", "you", or "your") agree to be bound by these Terms of Service ("Terms"). If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                  </p>
                  <p>
                    If you do not agree to these Terms, you may not access or use our services. These Terms apply to all visitors, users, and customers of our services.
                  </p>
                </div>
              </section>

              <section id="services">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Rhobots provides enterprise-grade AI software and solutions, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold text-gray-800">Rhobots Studio</span> — AI workflow automation and agent builder</li>
                    <li><span className="font-semibold text-gray-800">Rhobots Extract</span> — Intelligent document processing and data extraction</li>
                    <li><span className="font-semibold text-gray-800">Rhobots Sage</span> — AI-powered analytics and business intelligence</li>
                    <li><span className="font-semibold text-gray-800">Rhobots Pulse</span> — Conversational AI and voice intelligence platform</li>
                    <li><span className="font-semibold text-gray-800">Rhobots Operator</span> — Autonomous AI operations and orchestration</li>
                  </ul>
                  <p>
                    The specific features, capabilities, and service levels available to you depend on your subscription plan or enterprise agreement. We reserve the right to modify, update, or discontinue any aspect of our services at any time with reasonable notice.
                  </p>
                </div>
              </section>

              <section id="acceptable-use">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations. You must not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the services to process, store, or transmit data in violation of any applicable law or regulation</li>
                    <li>Attempt to gain unauthorized access to our systems, networks, or other customers' data</li>
                    <li>Use the services to develop competing products or services without prior written consent</li>
                    <li>Reverse engineer, decompile, or disassemble any part of our software or services</li>
                    <li>Use the services to transmit malware, spam, or other harmful content</li>
                    <li>Resell or sublicense access to our services without explicit written authorization</li>
                    <li>Use our services in any manner that could damage, disable, or impair the services or interfere with other customers' use</li>
                  </ul>
                  <p>
                    Violation of this section may result in immediate suspension or termination of your access to our services.
                  </p>
                </div>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    All intellectual property rights in the services, including but not limited to software, algorithms, models, documentation, trademarks, and trade secrets, are and remain the exclusive property of Rhobots or its licensors.
                  </p>
                  <p>
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the services solely for your internal business purposes during the subscription term.
                  </p>
                  <p>
                    You retain all rights, title, and ownership in and to your data and content submitted to our services ("Customer Data"). You grant Rhobots a limited license to process Customer Data solely as necessary to provide the services as described in our Privacy Policy.
                  </p>
                  <p>
                    Any feedback, suggestions, or improvements you provide regarding our services may be used by Rhobots without any obligation to you.
                  </p>
                </div>
              </section>

              <section id="confidentiality">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Each party agrees to keep confidential all non-public information disclosed by the other party that is designated as confidential or that should reasonably be understood to be confidential ("Confidential Information").
                  </p>
                  <p>
                    Confidential Information does not include information that: (a) is or becomes publicly known through no breach of these Terms; (b) was rightfully known before disclosure; (c) is independently developed without reference to the other party's Confidential Information; or (d) must be disclosed by law or court order, provided the disclosing party gives prompt notice where legally permissible.
                  </p>
                  <p>
                    Each party agrees to use Confidential Information only to fulfill its obligations under these Terms and to protect it with at least the same degree of care it uses to protect its own confidential information, but no less than reasonable care.
                  </p>
                </div>
              </section>

              <section id="data-privacy">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data and Privacy</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Our collection and use of personal information is governed by our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of information as described in the Privacy Policy.
                  </p>
                  <p>
                    For enterprise customers, data processing activities are governed by the Data Processing Agreement ("DPA") executed as part of your enterprise contract, which takes precedence over general privacy terms where applicable.
                  </p>
                  <p>
                    We maintain SOC 2 Type II certification and implement industry-standard security measures to protect your data. For details about our security practices, please contact us at <a href="mailto:tech@rhobots.ai" className="text-blue-600 hover:underline">tech@rhobots.ai</a>.
                  </p>
                </div>
              </section>

              <section id="payment">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Fees for our services are specified in your order form or enterprise agreement. All fees are quoted in and payable in Indian Rupees (INR) or US Dollars (USD) as specified in your agreement, unless otherwise agreed in writing.
                  </p>
                  <p>
                    For subscription services, fees are billed in advance on a monthly or annual basis as selected. All fees are non-refundable except as expressly set forth in these Terms or your enterprise agreement.
                  </p>
                  <p>
                    Overdue amounts accrue interest at 1.5% per month (or the maximum rate permitted by law, whichever is lower). We reserve the right to suspend services for accounts with overdue balances after providing 30 days' written notice.
                  </p>
                  <p>
                    All fees are exclusive of applicable taxes. You are responsible for all taxes, levies, or duties imposed by taxing authorities, excluding taxes based on our net income.
                  </p>
                </div>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers &amp; Limitation of Liability</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p className="uppercase text-sm font-semibold text-gray-700">
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p>
                    We do not warrant that the services will be uninterrupted, error-free, or free of harmful components, or that any defects will be corrected. AI-generated outputs may contain errors and should be reviewed by qualified personnel before reliance.
                  </p>
                  <p className="uppercase text-sm font-semibold text-gray-700">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RHOBOTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                  </p>
                  <p>
                    Our aggregate liability to you for all claims arising out of or relating to these Terms or the services shall not exceed the total fees paid by you in the twelve (12) months preceding the claim.
                  </p>
                </div>
              </section>

              <section id="indemnification">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    You agree to defend, indemnify, and hold harmless Rhobots and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from: (a) your use of the services in violation of these Terms; (b) your violation of any third-party rights, including intellectual property rights; or (c) any Customer Data you submit to the services that infringes or misappropriates third-party rights.
                  </p>
                  <p>
                    Rhobots will defend you against third-party claims alleging that the services, as provided by Rhobots, infringe a third party's intellectual property rights, provided that you promptly notify us of such claims and cooperate in the defense.
                  </p>
                </div>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Either party may terminate these Terms with 30 days' written notice. Either party may terminate immediately if the other party materially breaches these Terms and fails to cure such breach within 15 days of written notice.
                  </p>
                  <p>
                    Upon termination, your license to use the services immediately ceases. You may export your Customer Data within 30 days of termination, after which we may delete it in accordance with our data retention policies. Fees paid prior to termination are non-refundable unless termination is due to Rhobots' material breach.
                  </p>
                  <p>
                    Sections relating to intellectual property, confidentiality, limitation of liability, indemnification, and governing law shall survive termination.
                  </p>
                </div>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
                  </p>
                  <p>
                    For enterprise customers operating under specific jurisdictional requirements, alternative governing law provisions may be agreed upon in writing as part of your enterprise agreement.
                  </p>
                </div>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide at least 30 days' notice of material changes via email to your registered address or via a prominent notice on our website.
                  </p>
                  <p>
                    Your continued use of the services after the effective date of any changes constitutes your acceptance of the revised Terms. If you do not agree to the changes, you must stop using the services and notify us in writing.
                  </p>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>If you have any questions about these Terms, please contact us:</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-gray-900">Rhobots AI Technologies Private Limited</p>
                    <p>Email: <a href="mailto:tech@rhobots.ai" className="text-blue-600 hover:underline">tech@rhobots.ai</a></p>
                    <p>Phone: <a href="tel:+917042008497" className="text-blue-600 hover:underline">+91 (704) 200-8497</a></p>
                    <p>Website: <a href="https://rhobots.ai" className="text-blue-600 hover:underline">rhobots.ai</a></p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
