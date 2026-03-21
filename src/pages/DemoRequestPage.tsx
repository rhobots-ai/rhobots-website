import { useMemo, useState, type FormEvent } from 'react';

const modules = [
  { id: 'operator', icon: 'settings_input_component', name: 'Operator', desc: 'Autonomous process automation for enterprise workflows' },
  { id: 'extract', icon: 'database_upload', name: 'Extract', desc: 'Unstructured data extraction from documents & media' },
  { id: 'sage', icon: 'psychology', name: 'Sage', desc: 'Natural language queries across your databases' },
  { id: 'pulse', icon: 'insights', name: 'Pulse', desc: 'Real-time AI monitoring for contact centers' },
  { id: 'copilot', icon: 'code', name: 'Copilot', desc: 'Enterprise LLM coding assistant for dev teams' },
  { id: 'studio', icon: 'dashboard_customize', name: 'Studio', desc: 'Fine-tuning, orchestration & AI safety command center' },
];

export default function DemoRequestPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (value: string) => /.+@.+\..+/.test(value);

  const isSubmitEnabled = useMemo(() => {
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      isValidEmail(email) &&
      selectedModules.length > 0
    );
  }, [firstName, lastName, email, selectedModules]);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isSubmitEnabled || status === 'submitting') return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage('Form submission is not configured. Please contact us directly.');
      return;
    }

    try {
      setStatus('submitting');
      setErrorMessage('');

      const formData = new FormData();
      formData.set('access_key', accessKey);
      formData.set('subject', `Rhobots Demo Request — ${company || `${firstName} ${lastName}`}`);
      formData.set('from_name', 'Rhobots.ai Website');
      formData.set('name', `${firstName} ${lastName}`);
      formData.set('email', email);
      formData.set('company', company);
      formData.set('modules', selectedModules.map((m) => m.toUpperCase()).join(', '));

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result?.success) {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompany('');
        setSelectedModules([]);
      } else {
        setStatus('error');
        setErrorMessage(result?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <main className="min-h-screen grid-substrate relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-container-lowest/50 to-surface-container-lowest pointer-events-none"></div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Identity & Context */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary-fixed uppercase px-2 py-1 bg-primary-fixed/10 border-l-2 border-primary-fixed">
                Inbound Terminal_v.4.0
              </span>
            </div>
            <h1 className="font-headline font-black text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tighter uppercase mb-8">
              ARCHITECT <br />THE <span className="text-primary-fixed">FUTURE</span>
            </h1>
            <div className="space-y-8 max-w-md">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Initialize a high-fidelity orchestration environment. RHOBOTS Kinetic Engine is the specialized interface for industrial AI deployment and neural architecture management.
              </p>

              {/* Testimonial Section */}
              <div className="bg-surface-container-high p-6 relative overflow-hidden">
                <div className="scanline absolute inset-0 opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-fixed"></div>
                <span className="material-symbols-outlined text-primary-fixed/40 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <blockquote className="text-white font-body italic mb-6">
                  "The level of precision and real-time observability in the RHOBOTS terminal has fundamentally shifted our deployment speed. It's not just a tool; it's our central nervous system."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-bright flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed">precision_manufacturing</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-xs uppercase tracking-wider text-white">Chief Technology Officer</p>
                    <p className="font-mono text-[10px] text-on-surface-variant uppercase">Global Neural Systems Corp.</p>
                  </div>
                </div>
              </div>

              {/* Security Protocols */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l border-outline-variant/30 pl-4 py-2">
                  <p className="font-mono text-[10px] text-primary-fixed uppercase tracking-widest mb-1">Status: SECURE</p>
                  <p className="font-headline text-sm font-bold text-white uppercase">AES-256 Protocol</p>
                </div>
                <div className="border-l border-outline-variant/30 pl-4 py-2">
                  <p className="font-mono text-[10px] text-primary-fixed uppercase tracking-widest mb-1">Access: LEVEL 5</p>
                  <p className="font-headline text-sm font-bold text-white uppercase">Air-Gapped Ops</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7 flex items-center">
            <div className="w-full bg-surface-container-low p-8 md:p-12 relative border-t-4 border-primary-fixed">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="font-headline font-black text-3xl text-white uppercase tracking-tighter">DEMO_INITIATION</h2>
                  <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Awaiting operator credentials...</p>
                </div>
                <span className="material-symbols-outlined text-primary-fixed text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Operator_First_Name</label>
                    <input
                      name="first_name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 text-white font-body placeholder:text-surface-bright uppercase transition-all"
                      placeholder="REQUIRED"
                      type="text"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Operator_Last_Name</label>
                    <input
                      name="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 text-white font-body placeholder:text-surface-bright uppercase transition-all"
                      placeholder="REQUIRED"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Work_Protocol_Email</label>
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 text-white font-body placeholder:text-surface-bright transition-all"
                      placeholder="example@system.org"
                      required
                    />
                    {!isValidEmail(email) && email.length > 0 && (
                      <p className="font-mono text-[9px] text-red-400 uppercase tracking-widest mt-1">Invalid email protocol</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Organization_ID</label>
                    <input
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 text-white font-body placeholder:text-surface-bright uppercase transition-all"
                      placeholder="COMPANY NAME"
                      type="text"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-3 block">Interest_Module_Select</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {modules.map((mod) => (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className={`group cursor-pointer text-left bg-surface-container-lowest border p-4 transition-all ${
                          selectedModules.includes(mod.id)
                            ? 'border-primary-fixed bg-primary-fixed/5'
                            : 'border-outline-variant/20 hover:border-primary-fixed/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`material-symbols-outlined mt-0.5 transition-colors ${
                              selectedModules.includes(mod.id) ? 'text-primary-fixed' : 'text-on-surface-variant'
                            }`}
                            style={{ fontSize: '20px' }}
                          >
                            {mod.icon}
                          </span>
                          <div className="min-w-0">
                            <div
                              className={`font-headline text-xs font-bold uppercase tracking-widest transition-colors ${
                                selectedModules.includes(mod.id) ? 'text-primary-fixed' : 'text-white'
                              }`}
                            >
                              {mod.name}
                            </div>
                            <div className="text-on-surface-variant/60 text-[10px] font-body leading-snug mt-1">{mod.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {status === 'success' && (
                  <div className="border border-primary-fixed/30 bg-primary-fixed/5 px-4 py-3">
                    <p className="font-mono text-[10px] text-primary-fixed uppercase tracking-widest">TRANSMISSION_COMPLETE — We'll be in touch within 1 business day.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="border border-red-500/30 bg-red-500/5 px-4 py-3">
                    <p className="font-mono text-[10px] text-red-400 uppercase tracking-widest">{errorMessage || 'Transmission failed. Please retry.'}</p>
                  </div>
                )}

                <div className="pt-6">
                  <button
                    className="w-full group relative flex items-center justify-between bg-primary-fixed px-6 py-4 transition-all hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    type="submit"
                    disabled={!isSubmitEnabled || status === 'submitting'}
                  >
                    <span className="font-headline font-black text-xl text-on-primary-fixed uppercase tracking-widest">
                      {status === 'submitting' ? 'TRANSMITTING...' : 'INITIALIZE DEMO'}
                    </span>
                    <span className="material-symbols-outlined text-on-primary-fixed group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </button>
                  <p className="mt-4 font-mono text-[9px] text-center text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">
                    BY INITIALIZING, YOU AGREE TO SYSTEM ACCESS PROTOCOLS <br /> AND DATA ENCRYPTION STANDARDS.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Deployment Sectors */}
        <div className="mt-24 border-t border-outline-variant/20 pt-12">
          <h3 className="font-mono text-[10px] text-primary-fixed uppercase tracking-[0.5em] mb-8">ACTIVE_DEPLOYMENT_SECTORS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-surface-container p-4 flex flex-col items-center justify-center gap-3 border border-outline-variant/10 grayscale hover:grayscale-0 transition-all cursor-crosshair">
              <span className="material-symbols-outlined text-primary-fixed">rocket_launch</span>
              <span className="font-label text-[10px] font-bold text-white tracking-widest uppercase">Aerospace</span>
            </div>
            <div className="bg-surface-container p-4 flex flex-col items-center justify-center gap-3 border border-outline-variant/10 grayscale hover:grayscale-0 transition-all cursor-crosshair">
              <span className="material-symbols-outlined text-primary-fixed">biotech</span>
              <span className="font-label text-[10px] font-bold text-white tracking-widest uppercase">Bio-Neural</span>
            </div>
            <div className="bg-surface-container p-4 flex flex-col items-center justify-center gap-3 border border-outline-variant/10 grayscale hover:grayscale-0 transition-all cursor-crosshair">
              <span className="material-symbols-outlined text-primary-fixed">factory</span>
              <span className="font-label text-[10px] font-bold text-white tracking-widest uppercase">Industrial</span>
            </div>
            <div className="bg-surface-container p-4 flex flex-col items-center justify-center gap-3 border border-outline-variant/10 grayscale hover:grayscale-0 transition-all cursor-crosshair">
              <span className="material-symbols-outlined text-primary-fixed">shield_lock</span>
              <span className="font-label text-[10px] font-bold text-white tracking-widest uppercase">Defense</span>
            </div>
            <div className="bg-surface-container p-4 flex flex-col items-center justify-center gap-3 border border-outline-variant/10 grayscale hover:grayscale-0 transition-all cursor-crosshair">
              <span className="material-symbols-outlined text-primary-fixed">electric_bolt</span>
              <span className="font-label text-[10px] font-bold text-white tracking-widest uppercase">Energy</span>
            </div>
            <div className="bg-surface-container p-4 flex flex-col items-center justify-center gap-3 border border-outline-variant/10 grayscale hover:grayscale-0 transition-all cursor-crosshair">
              <span className="material-symbols-outlined text-primary-fixed">database</span>
              <span className="font-label text-[10px] font-bold text-white tracking-widest uppercase">Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
