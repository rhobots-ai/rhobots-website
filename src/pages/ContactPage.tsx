import { useMemo, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Send, User, Building2, Rocket } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';

const ContactPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (value: string) => /.+@.+\..+/.test(value);

  const isSubmitEnabled = useMemo(() => {
    return (
      fullName.trim().length > 1 &&
      isValidEmail(emailAddress) &&
      isValidPhoneNumber(phoneValue || '')
    );
  }, [fullName, emailAddress, phoneValue]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isSubmitEnabled || status === 'submitting') return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage('Missing Web3Forms access key. Set VITE_WEB3FORMS_ACCESS_KEY in your environment.');
      return;
    }

    try {
      setStatus('submitting');
      setErrorMessage('');

      const formElement = event.currentTarget;
      const formData = new FormData(formElement);

      // Ensure required fields are present in the payload
      formData.set('access_key', accessKey);
      formData.set('subject', `Rhobots Contact — ${companyName || fullName}`);
      formData.set('from_name', 'Rhobots.ai Website');
      formData.set('phone', phoneValue);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result?.success) {
        setStatus('success');
        // Clear form inputs
        setFullName('');
        setEmailAddress('');
        setCompanyName('');
        setPhoneValue('');
        // Reset the hidden honeypot field
        const botInput = formElement.querySelector<HTMLInputElement>('input[name="botcheck"]');
        if (botInput) botInput.checked = false;
      } else {
        setStatus('error');
        setErrorMessage(result?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

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
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">Let's build something brilliant together</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
              Share your details.
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">We'll reply within 1 business day.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">We just need a few basics to get in touch.</p>
          </div>
        </div>
      </section>

      <main className="relative z-10 container mx-auto px-6 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Start the conversation</h2>
              <p className="text-gray-600">A short brief is perfect. We'll follow up with the right specialist.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot to reduce spam */}
              <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Full name</label>
                <div className="flex items-center bg-gray-50 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <User className="w-5 h-5 text-gray-400" />
                  <input
                    name="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent px-3 py-3 outline-none text-gray-900 placeholder:text-gray-400"
                    required
                    minLength={2}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Work email</label>
                <div className="flex items-center bg-gray-50 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent px-3 py-3 outline-none text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>
                {!isValidEmail(emailAddress) && emailAddress.length > 0 && (
                  <div className="text-xs text-amber-600 mt-1">Please enter a valid email.</div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Phone number</label>
                <div className="bg-gray-50 border border-gray-300 rounded-xl p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <PhoneInput
                    name="phone"
                    value={phoneValue || ''}
                    onChange={(v) => setPhoneValue(v || '')}
                    defaultCountry="US"
                    international
                    className="text-gray-900"
                    numberInputProps={{
                      className: 'PhoneInputInput bg-transparent w-full outline-none text-gray-900 placeholder:text-gray-400',
                      required: true,
                    }}
                  />
                </div>
                {!(!phoneValue || isValidPhoneNumber(phoneValue)) && (
                  <div className="text-xs text-amber-600 mt-1">Please enter a valid phone number.</div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Company</label>
                <div className="flex items-center bg-gray-50 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <input
                    name="company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-transparent px-3 py-3 outline-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="text-xs text-gray-500">We'll keep your details confidential.</div>

              {status === 'success' && (
                <div className="rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-700 text-sm px-4 py-3">
                  Thanks! Your message has been sent. We'll be in touch within 1 business day.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-xl border border-rose-500 bg-rose-50 text-rose-700 text-sm px-4 py-3">
                  {errorMessage || 'There was an error sending your message.'}
                </div>
              )}

              <button
                type="submit"
                disabled={!isSubmitEnabled || status === 'submitting'}
                className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold px-5 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform" />
                {status === 'submitting' ? 'Sending…' : 'Send to Rhobots'}
              </button>

              <div className="text-xs text-gray-600 text-center">Or email us directly at <a href="mailto:tech@rhobots.ai" className="text-blue-600 hover:underline">tech@rhobots.ai</a></div>
            </form>
          </div>

          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prefer a quick chat?</h3>
              <p className="text-gray-600 mb-4">Grab time with an engineer. No sales fluff.</p>
              <a
                href="tel:+917042008497"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-5 py-3 rounded-xl hover:shadow-lg transition-all"
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


