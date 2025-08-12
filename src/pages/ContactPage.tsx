import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Send, User, Building2, MessageSquareMore, Rocket } from 'lucide-react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';

const ContactPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const isValidEmail = (value: string) => /.+@.+\..+/.test(value);

  const isSubmitEnabled = useMemo(() => {
    return (
      fullName.trim().length > 1 &&
      isValidEmail(emailAddress) &&
      messageBody.trim().length > 10
    );
  }, [fullName, emailAddress, messageBody]);

  const handleSubmit = () => {
    if (!isSubmitEnabled) return;

    const subject = encodeURIComponent(`Rhobots Contact — ${companyName || fullName}`);
    const bodyLines = [
      `Name: ${fullName}`,
      `Email: ${emailAddress}`,
      companyName ? `Company: ${companyName}` : undefined,
      projectScope ? `Scope: ${projectScope}` : undefined,
      '',
      messageBody,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:tech@rhobots.ai?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="relative z-20">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <BrandLogo variant="sm"/>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-24 -left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-[28rem] h-[28rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>

        <div className="relative z-10 container mx-auto px-6 pt-16 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
              <Rocket className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-gray-200">Let’s build something brilliant together</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Tell us about your use case.
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">We’ll reply within 1 business day.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you’re exploring agents, automating a process, or aiming for enterprise-grade deployment with governance and SLAs, we’ve got you.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Start the conversation</h2>
              <p className="text-gray-400">A short brief is perfect. We’ll follow up with the right specialist.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Full name</label>
                <div className="flex items-center bg-gray-900 border border-white/10 rounded-xl px-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent px-3 py-3 outline-none text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Work email</label>
                <div className="flex items-center bg-gray-900 border border-white/10 rounded-xl px-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent px-3 py-3 outline-none text-white placeholder:text-gray-500"
                  />
                </div>
                {!isValidEmail(emailAddress) && emailAddress.length > 0 && (
                  <div className="text-xs text-amber-300 mt-1">Please enter a valid email.</div>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Company</label>
                  <div className="flex items-center bg-gray-900 border border-white/10 rounded-xl px-3">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full bg-transparent px-3 py-3 outline-none text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Project scope</label>
                  <select
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-gray-300"
                  >
                    <option value="">Select one</option>
                    <option>Discovery / Strategy</option>
                    <option>Pilot / POC</option>
                    <option>Production rollout</option>
                    <option>MLOps / Governance</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Tell us more</label>
                <div className="flex items-start bg-gray-900 border border-white/10 rounded-xl px-3">
                  <MessageSquareMore className="w-5 h-5 text-gray-400 mt-3" />
                  <textarea
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    placeholder="What problem are you solving? What does success look like? Any timelines we should know about?"
                    rows={6}
                    className="w-full bg-transparent px-3 py-3 outline-none text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>We’ll keep it confidential.</span>
                  <span>{messageBody.length} chars</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!isSubmitEnabled}
                className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 disabled:from-gray-700 disabled:to-gray-700 text-white font-semibold px-5 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform" />
                Send to Rhobots
              </button>

              <div className="text-xs text-gray-400 text-center">Or email us directly at <a href="mailto:tech@rhobots.ai" className="text-blue-300 hover:underline">tech@rhobots.ai</a></div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm mb-8">
              <h3 className="text-xl font-bold mb-2">Prefer a quick chat?</h3>
              <p className="text-gray-300 mb-4">Grab time with an engineer. No sales fluff.</p>
              <a
                href="tel:+917042008497"
                className="inline-flex items-center bg-white text-gray-900 font-semibold px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span>Call +91 (704) 200-8497</span>
              </a>
            </div>

            <ContactUs variant="compact" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;


