import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-collected', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Information' },
  { id: 'information-sharing', title: '4. Information Sharing' },
  { id: 'data-security', title: '5. Data Security' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'your-rights', title: '7. Your Rights' },
  { id: 'cookies', title: '8. Cookies & Tracking' },
  { id: 'international', title: '9. International Transfers' },
  { id: 'children', title: '10. Children\'s Privacy' },
  { id: 'changes', title: '11. Changes to Policy' },
  { id: 'contact', title: '12. Contact Information' },
];

const PrivacyPage = () => {
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
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">Last updated: March 11, 2026</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
              Privacy
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Your privacy is fundamental to how we build and operate our services. Here's exactly what we collect and why.
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

              <section id="introduction">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Rhobots AI Technologies Private Limited ("Rhobots", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    We are committed to complying with applicable data protection laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (GDPR) for European Union residents, and the California Consumer Privacy Act (CCPA) for California residents.
                  </p>
                  <p>
                    Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.
                  </p>
                </div>
              </section>

              <section id="information-collected">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p><span className="font-semibold text-gray-800">Information you provide directly:</span></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact details (name, email, phone number, company name) when you submit inquiries or sign up</li>
                    <li>Account credentials and profile information when you register for our services</li>
                    <li>Communications you send us, including support requests and feedback</li>
                    <li>Payment information (processed securely by third-party payment processors; we do not store card details)</li>
                  </ul>
                  <p><span className="font-semibold text-gray-800">Information collected automatically:</span></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Log data: IP address, browser type, pages visited, time and date of visits, referring URLs</li>
                    <li>Device information: hardware model, operating system, unique device identifiers</li>
                    <li>Usage data: features accessed, actions taken, performance metrics</li>
                    <li>Cookies and similar tracking technologies (see Section 8)</li>
                  </ul>
                  <p><span className="font-semibold text-gray-800">Customer Data:</span></p>
                  <p>
                    Data you upload, input, or process through our services ("Customer Data") remains yours. We process it only as necessary to provide the services and as described in any applicable Data Processing Agreement.
                  </p>
                </div>
              </section>

              <section id="how-we-use">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Information</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and improve our services and platform</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative communications, such as service updates and security alerts</li>
                    <li>Send marketing communications where you have opted in or where permitted by law</li>
                    <li>Monitor and analyze usage patterns to improve user experience</li>
                    <li>Detect, prevent, and address fraud, abuse, and security incidents</li>
                    <li>Comply with legal obligations and enforce our Terms of Service</li>
                    <li>Conduct research and development to enhance our AI capabilities</li>
                  </ul>
                  <p>
                    We rely on the following legal bases for processing: contract performance, legitimate interests, legal compliance, and consent where required.
                  </p>
                </div>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>We do not sell your personal information. We may share information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold text-gray-800">Service providers:</span> Trusted third parties that assist us in operating our services (cloud hosting, analytics, payment processing, email delivery), bound by confidentiality obligations</li>
                    <li><span className="font-semibold text-gray-800">Business transfers:</span> In connection with a merger, acquisition, or sale of assets, subject to standard confidentiality protections</li>
                    <li><span className="font-semibold text-gray-800">Legal requirements:</span> When required by law, court order, or governmental authority</li>
                    <li><span className="font-semibold text-gray-800">Protection of rights:</span> To protect the rights, property, or safety of Rhobots, our customers, or others</li>
                    <li><span className="font-semibold text-gray-800">With your consent:</span> For any other purpose disclosed at the time of collection with your explicit agreement</li>
                  </ul>
                </div>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    We implement and maintain industry-standard technical and organizational measures to protect your information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                    <li>SOC 2 Type II certified infrastructure and processes</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Role-based access controls and least-privilege principles</li>
                    <li>Multi-factor authentication for internal systems</li>
                    <li>24/7 security monitoring and incident response</li>
                  </ul>
                  <p>
                    Despite our best efforts, no security measures are perfect or impenetrable. In the event of a data breach that affects your rights, we will notify you and relevant authorities as required by applicable law.
                  </p>
                </div>
              </section>

              <section id="data-retention">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold text-gray-800">Account data:</span> Retained for the duration of your account plus 90 days after closure for backup purposes</li>
                    <li><span className="font-semibold text-gray-800">Customer Data:</span> Deleted within 30 days of contract termination unless otherwise required by law</li>
                    <li><span className="font-semibold text-gray-800">Financial records:</span> Retained for 7 years as required by law</li>
                    <li><span className="font-semibold text-gray-800">Communication records:</span> Retained for 3 years after last interaction for support and legal purposes</li>
                    <li><span className="font-semibold text-gray-800">Usage logs:</span> Retained for 12 months for security and analytics purposes</li>
                  </ul>
                </div>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold text-gray-800">Access:</span> Request a copy of the personal information we hold about you</li>
                    <li><span className="font-semibold text-gray-800">Correction:</span> Request correction of inaccurate or incomplete information</li>
                    <li><span className="font-semibold text-gray-800">Deletion:</span> Request deletion of your personal information ("right to be forgotten")</li>
                    <li><span className="font-semibold text-gray-800">Portability:</span> Receive your data in a structured, machine-readable format</li>
                    <li><span className="font-semibold text-gray-800">Restriction:</span> Request restriction of processing in certain circumstances</li>
                    <li><span className="font-semibold text-gray-800">Objection:</span> Object to processing based on legitimate interests or for direct marketing</li>
                    <li><span className="font-semibold text-gray-800">Withdrawal of consent:</span> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p>
                    To exercise these rights, contact us at <a href="mailto:tech@rhobots.ai" className="text-blue-600 hover:underline">tech@rhobots.ai</a>. We will respond within 30 days. We may need to verify your identity before fulfilling your request.
                  </p>
                  <p>
                    California residents have additional rights under the CCPA, including the right to know what personal information is sold or disclosed and to opt out of the sale of personal information (we do not sell personal information).
                  </p>
                </div>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies &amp; Tracking</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold text-gray-800">Essential cookies:</span> Required for the services to function correctly. Cannot be disabled.</li>
                    <li><span className="font-semibold text-gray-800">Analytics cookies:</span> Help us understand how visitors interact with our website (e.g., Vercel Analytics). These are aggregated and anonymized.</li>
                    <li><span className="font-semibold text-gray-800">Preference cookies:</span> Remember your settings and preferences for a better experience.</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our services. We do not use third-party advertising cookies or sell cookie data to advertisers.
                  </p>
                </div>
              </section>

              <section id="international">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Transfers</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Rhobots is headquartered in India. If you access our services from outside India, your information may be transferred to, stored, and processed in India and other countries where our service providers operate.
                  </p>
                  <p>
                    For transfers of personal data from the European Economic Area (EEA), United Kingdom, or Switzerland, we rely on appropriate transfer mechanisms such as Standard Contractual Clauses (SCCs) approved by the European Commission, or other legally approved mechanisms.
                  </p>
                  <p>
                    By using our services, you acknowledge and consent to such transfers. We take steps to ensure your information receives the same level of protection regardless of where it is processed.
                  </p>
                </div>
              </section>

              <section id="children">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Our services are intended for business use by adults and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                  </p>
                  <p>
                    If we become aware that we have collected personal information from a child under 18 without parental consent, we will take steps to delete such information. If you believe we may have collected information from a minor, please contact us at <a href="mailto:tech@rhobots.ai" className="text-blue-600 hover:underline">tech@rhobots.ai</a>.
                  </p>
                </div>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Policy</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of material changes by updating the "Last updated" date at the top of this page and, where appropriate, by sending you an email or providing a prominent notice on our website.
                  </p>
                  <p>
                    We encourage you to review this policy periodically. Your continued use of our services after any changes constitutes your acceptance of the updated policy.
                  </p>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection team:</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-gray-900">Rhobots AI Technologies Private Limited</p>
                    <p>Email: <a href="mailto:tech@rhobots.ai" className="text-blue-600 hover:underline">tech@rhobots.ai</a></p>
                    <p>Phone: <a href="tel:+917042008497" className="text-blue-600 hover:underline">+91 (704) 200-8497</a></p>
                    <p>Website: <a href="https://rhobots.ai" className="text-blue-600 hover:underline">rhobots.ai</a></p>
                  </div>
                  <p>
                    You also have the right to lodge a complaint with your local data protection authority if you believe we have not handled your information in accordance with applicable law.
                  </p>
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

export default PrivacyPage;
