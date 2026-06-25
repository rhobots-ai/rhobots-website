import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema } from '../lib/structuredData';

// --- Swappable ad copy (A12: clone a variant route without hunting through JSX) ---
const HERO = {
  eyebrow: '// RHOBOTS PARTNER PROGRAM · 2026',
  headline_a: 'Sell the AI your clients',
  headline_b: 'are asking for.',
  headline_tail: "Without building a team to deliver it.",
  subcopy:
    'Rhobots is your white-label AI delivery arm. You own the client and the relationship; we ship production-grade, self-hosted AI under your brand — in days, not quarters, with no system overhaul.',
  cta_primary: 'Become a delivery partner',
  cta_secondary: 'How it works',
};

const HERO_BENEFITS = [
  { icon: 'paid', label: 'Recurring revenue share', desc: 'Lands as a retainer; your share compounds as scope grows.' },
  { icon: 'handshake', label: 'You own the account', desc: 'Delivered under your brand. The trust stays yours.' },
  { icon: 'bolt', label: 'Zero hiring', desc: 'No ML/MLOps team to build. A shipping role-agent in days.' },
];

const HERO_STATS = [
  { label: 'EXTRACTION ACCURACY', value: '91%', note: 'vs 83% GPT-4o', icon: 'verified' },
  { label: 'COST REDUCTION', value: '90%', note: 'vs generic LLMs', icon: 'trending_down' },
  { label: 'ROLES FREED', value: '750+', note: 'in production', icon: 'groups' },
];

const REGIONS = ['UAE', 'UK', 'US', 'Other'];
const FIRM_TYPES = ['Consulting', 'Systems Integrator', 'Agency', 'VAR', 'Other'];

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'hotmail.com',
  'live.com', 'aol.com', 'icloud.com', 'proton.me', 'protonmail.com', 'mail.com', 'gmx.com', 'yandex.com',
];

// --- UTM / click-id attribution (A8) ---
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'li_fat_id'];
type Attribution = Record<string, string>;

function readAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const out: Attribution = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) out[key] = val;
  }
  return out;
}

const TOGGLE_LABEL_CLS = 'font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block';

// Single-select toggle group (re-click deselects). Toggle semantics, so
// aria-pressed — not radiogroup/radio, which forbid deselection.
function ToggleGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className={TOGGLE_LABEL_CLS}>
        {legend} <span className="text-on-surface-variant/40">(optional)</span>
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(selected ? '' : opt)}
              className={`px-3 py-2 border font-headline text-[11px] font-bold uppercase tracking-widest transition-all ${
                selected
                  ? 'border-primary-fixed bg-primary-fixed/5 text-primary-fixed'
                  : 'border-outline-variant/20 text-white hover:border-primary-fixed/50'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const isValidEmail = (value: string) => /.+@.+\..+/.test(value);
const isBusinessEmail = (value: string) => {
  const domain = value.split('@')[1]?.toLowerCase().trim();
  return !!domain && !FREE_EMAIL_DOMAINS.includes(domain);
};

export default function PartnersPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [region, setRegion] = useState('');
  const [firmType, setFirmType] = useState('');
  const [clientSegment, setClientSegment] = useState('');
  const [message, setMessage] = useState('');
  const [attribution, setAttribution] = useState<Attribution>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [showErrors, setShowErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setAttribution(readAttribution());
  }, []);

  // A2: sticky CTA appears once the hero scrolls out of view.
  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-120px 0px 0px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const emailError = useMemo(() => {
    if (!email) return '';
    if (!isValidEmail(email)) return 'Enter a valid email';
    if (!isBusinessEmail(email)) return 'Use your work email';
    return '';
  }, [email]);

  const isSubmitEnabled = useMemo(
    () =>
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      isValidEmail(email) &&
      isBusinessEmail(email) &&
      company.trim().length > 0,
    [firstName, lastName, email, company]
  );

  const scrollToForm = () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToHow = () => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isSubmitEnabled) {
      setShowErrors(true);
      return;
    }
    if (status === 'submitting') return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage('Form submission is not configured. Please email tech@rhobots.ai directly.');
      return;
    }

    try {
      setStatus('submitting');
      setErrorMessage('');

      const formData = new FormData();
      formData.set('access_key', accessKey);
      formData.set('subject', `Rhobots Partner Inquiry — ${company}`);
      formData.set('from_name', 'Rhobots.ai Website');
      formData.set('name', `${firstName} ${lastName}`);
      formData.set('email', email);
      formData.set('company', company);
      formData.set('region', region || 'Not specified');
      formData.set('firm_type', firmType || 'Not specified');
      formData.set('client_segment', clientSegment || 'Not specified');
      formData.set('message', message || '—');
      for (const [key, val] of Object.entries(attribution)) formData.set(key, val);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result?.success) {
        // A8: conversion signal for any future GTM/pixel binding.
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'partner_lead_submit', region: region || undefined, firm_type: firmType || undefined });
        // T2: dedicated thank-you route is the robust conversion endpoint.
        navigate('/partners/thank-you');
      } else {
        setStatus('error');
        setErrorMessage(result?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const inputCls =
    'w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 text-white font-body placeholder:text-surface-bright transition-all';
  const labelCls = 'font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block';

  return (
    <main className="grid-substrate min-h-screen">
      <SEO
        title="Partner Program — White-Label Enterprise AI Delivery | Rhobots"
        description="Become a Rhobots delivery partner. You own the client; we deliver production-grade, self-hosted AI under your brand — in days, not quarters. UAE · UK · US."
        path="/partners"
        ogType="website"
        ogImage="/images/partners-og.jpg"
        noIndex
        jsonLd={organizationSchema()}
      />

      {/* ===================== HERO (A1: partner-WIIFM-first + proof in first fold) ===================== */}
      <section ref={heroRef} className="relative flex items-center px-4 sm:px-6 md:px-12 py-16 md:py-24 overflow-hidden">
        <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-10 md:gap-12">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-primary-fixed/10 border-l-4 border-primary-fixed mb-6">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-primary-fixed uppercase">{HERO.eyebrow}</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase text-white mb-6">
              {HERO.headline_a} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-primary-fixed-dim">{HERO.headline_b}</span>
            </h1>
            <p className="font-headline text-lg sm:text-xl text-white/80 uppercase tracking-tight mb-5">{HERO.headline_tail}</p>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-xl mb-8 leading-relaxed">{HERO.subcopy}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button onClick={scrollToForm} className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-widest text-sm sm:text-base hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] transition-all text-center">
                {HERO.cta_primary}
              </button>
              <button onClick={scrollToHow} className="px-6 sm:px-8 py-3 sm:py-4 border border-outline-variant text-white font-headline font-black uppercase tracking-widest text-sm sm:text-base hover:bg-white hover:text-black transition-all text-center">
                {HERO.cta_secondary}
              </button>
            </div>
            {/* Partner benefits — front-loaded WIIFM */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/20 mt-10">
              {HERO_BENEFITS.map((b) => (
                <div key={b.label} className="bg-surface-container-high p-4">
                  <span className="material-symbols-outlined text-primary-fixed mb-2 block" style={{ fontSize: '22px' }}>{b.icon}</span>
                  <p className="font-headline text-xs font-bold uppercase tracking-widest text-white mb-1">{b.label}</p>
                  <p className="text-on-surface-variant/70 text-[11px] leading-snug">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Proof data cluster */}
          <div className="w-full md:w-72 flex flex-row md:flex-col gap-px bg-outline-variant/20">
            {HERO_STATS.map((s, i) => (
              <div key={s.label} className="flex-1 md:flex-none bg-surface-container-high p-4 sm:p-6 relative overflow-hidden">
                {i === 0 && <div className="scanline absolute inset-0 opacity-20 pointer-events-none" />}
                <span className="font-mono text-[10px] text-primary-fixed/60 block mb-2 uppercase tracking-widest">{s.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-headline font-black text-white">{s.value}</span>
                  <span className="material-symbols-outlined text-primary-fixed text-sm">{s.icon}</span>
                </div>
                <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">{s.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 md:w-1/2 h-full -z-0 opacity-10 md:opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary-fixed/20 to-transparent" />
          <img className="w-full h-full object-cover mix-blend-overlay" alt="Abstract data grid" src="/images/cyber-grid-datastreams.jpg" />
        </div>
      </section>

      {/* ===================== THE OPPORTUNITY (asymmetric big stat) ===================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// WHY NOW · THE MARKET</span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Your clients are asking for AI. It lands on your desk.</h2>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">Enterprises spend roughly $6 on services for every $1 on software — and AI budgets are compounding. The demand is real, the budgets are funded, and the work flows to the advisors who can actually deliver.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/20">
          <div className="md:col-span-6 bg-surface-container-high p-8 md:p-10 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
            <span className="text-5xl md:text-7xl font-headline font-black text-primary-fixed">$6 : $1</span>
            <p className="font-headline text-sm font-bold uppercase tracking-widest text-white mt-4">Services-to-software spend</p>
            <p className="text-on-surface-variant/70 text-sm mt-2 leading-snug">The labour budget AI is now unlocking — far larger than the software line.</p>
          </div>
          <div className="md:col-span-3 bg-surface-container-high p-8">
            <span className="text-4xl md:text-5xl font-headline font-black text-white">+75%</span>
            <p className="font-headline text-xs font-bold uppercase tracking-widest text-white mt-3">Annual growth in LLM budgets</p>
            <p className="text-on-surface-variant/70 text-xs mt-2 leading-snug">Enterprise AI spend compounds year over year. (a16z CIO survey.)</p>
          </div>
          <div className="md:col-span-3 bg-surface-container-high p-8">
            <span className="text-4xl md:text-5xl font-headline font-black text-white">61%</span>
            <p className="font-headline text-xs font-bold uppercase tracking-widest text-white mt-3">Of global VC went to AI in 2025</p>
            <p className="text-on-surface-variant/70 text-xs mt-2 leading-snug">Capital, talent and attention are concentrating in this category.</p>
          </div>
        </div>
        <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest mt-6">Sources: Sequoia · a16z · OECD venture data · 2025–26</p>
      </section>

      {/* ===================== THE GAP (numbered list, banded) ===================== */}
      <section className="bg-surface-container-low border-y border-outline-variant/10">
        <div className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// THE DELIVERY GAP</span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Demand you can sell. Delivery you can't staff.</h2>
            <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">Three reasons the AI line item slips away from the firm that already owns the client relationship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {[
              { n: '01', t: 'Build a team', tag: '12+ months, $$$', d: 'Hiring ML, MLOps and infra talent is slow and costly — and your clients won’t wait a year to start.' },
              { n: '02', t: 'Generic LLMs', tag: 'Wrong tool for the job', d: 'ChatGPT-class models hallucinate, run at ~100× the cost, and leak data — non-starters in regulated work.' },
              { n: '03', t: 'POCs stall', tag: 'Die in a deck', d: 'Without production delivery the engagement stalls — and a competitor quietly takes the account.' },
            ].map((c) => (
              <div key={c.n} className="bg-surface-container-high p-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
                <span className="font-mono text-primary-fixed text-sm tracking-widest">{c.n}</span>
                <h3 className="font-headline text-xl font-black uppercase text-white mt-3">{c.t}</h3>
                <p className="font-mono text-[10px] text-primary-fixed uppercase tracking-widest mt-1">{c.tag}</p>
                <p className="text-on-surface-variant/80 text-sm mt-4 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE PARTNERSHIP (bento + chip row) ===================== */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-10 md:mb-14">
          <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// HOW WE FIT · WHITE-LABEL DELIVERY</span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white tracking-tight">You own the client. <span className="text-primary-fixed">We deliver the AI.</span></h2>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">Our wedge is LaaP — LLM-as-a-Person: small, purpose-built models, each trained on exactly what one role does, self-hosted inside your client's perimeter.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/20">
          {[
            { span: 'md:col-span-4', icon: 'verified_user', t: 'Delivered under your brand', d: 'We sit behind you; the relationship and the trust stay yours.' },
            { span: 'md:col-span-4', icon: 'rocket_launch', t: 'Production, not POCs', d: 'A shipping role-agent in days, not quarters — in your client’s data centre.' },
            { span: 'md:col-span-4', icon: 'lock', t: 'Owned & sovereign', d: 'Your client owns the weights, data and IP — at ~90% less than generic LLMs.' },
          ].map((c) => (
            <div key={c.t} className={`${c.span} bg-surface-container-high p-8`}>
              <span className="material-symbols-outlined text-primary-fixed mb-4 block" style={{ fontSize: '28px' }}>{c.icon}</span>
              <h3 className="font-headline text-lg font-black uppercase text-white">{c.t}</h3>
              <p className="text-on-surface-variant/80 text-sm mt-3 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.3em] block mb-3">// ONE MODEL PER ROLE</span>
          <div className="flex flex-wrap gap-2">
            {['Underwriter', 'Loan Officer', 'Support Agent', 'Reviewer', 'Data Analyst', 'Developer', 'QA Engineer', 'Auditor', 'Ops Manager'].map((r) => (
              <span key={r} className="px-3 py-1 border border-primary-fixed/20 font-mono text-[11px] text-white/80 uppercase tracking-widest">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE SUITE (2x2 bento, banded) ===================== */}
      <section className="bg-surface-container-low border-y border-outline-variant/10">
        <div className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// PRODUCTIZED SERVICES · WHAT YOU DELIVER</span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Four productized engagements. One platform underneath.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
            {[
              { tag: 'FOUNDATION PLATFORM', name: 'Rhobots Studio', d: 'Configure, fine-tune, host and govern AI inside your client’s perimeter. The platform under every engagement.' },
              { tag: 'WORKFLOW AUTOMATION', name: 'Rhobots Operator', d: 'Put time-consuming business processes on autopilot — without ripping out the systems already in place.' },
              { tag: 'DOCUMENT AI · YOUR WEDGE', name: 'Rhobots Extractor', d: 'Reads documents, emails, scanned & handwritten files into clean, structured data. 91% vs GPT-4o’s 83%.', wedge: true },
              { tag: 'AGENTIC ENGINEERING', name: 'Rhobots CoPilot', d: 'From ticket to production code — a multi-agent pipeline of reviewers, developers, QA and security.' },
            ].map((c) => (
              <div key={c.name} className={`bg-surface-container-high p-8 md:p-10 relative ${c.wedge ? 'overflow-hidden' : ''}`}>
                {c.wedge && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />}
                <span className={`font-mono text-[10px] uppercase tracking-widest ${c.wedge ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>{c.tag}</span>
                <h3 className="font-headline text-2xl font-black uppercase text-white mt-2">{c.name}</h3>
                <p className="text-on-surface-variant/80 text-sm mt-3 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE WEDGE (split + big number) ===================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// EASY TO LAND · LAND-AND-EXPAND</span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Start with one painful, budgeted problem.</h2>
            <p className="text-on-surface-variant mt-4 leading-relaxed">Document AI is the cleanest first sale: universal pain, fixed scope, fast ROI. Land it, prove it, then expand across the suite in the same account.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/20 mt-8">
              {[
                { n: '01 · LAND', d: 'One role-agent — a fixed engagement that ships in production.' },
                { n: '02 · EXPAND', d: 'Converts to a recurring retainer; scope grows role by role.' },
                { n: '03 · COMPOUND', d: 'Every new role lifts the revenue you book on the account.' },
              ].map((s) => (
                <div key={s.n} className="bg-surface-container-high p-5">
                  <p className="font-mono text-[11px] text-primary-fixed uppercase tracking-widest">{s.n}</p>
                  <p className="text-on-surface-variant/80 text-xs mt-2 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-high p-10 relative overflow-hidden border-t-4 border-primary-fixed">
            <div className="scanline absolute inset-0 opacity-10 pointer-events-none" />
            <span className="font-mono text-[10px] text-primary-fixed uppercase tracking-widest">// EXTRACTOR · LIVE PROOF</span>
            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-7xl md:text-8xl font-headline font-black text-primary-fixed">91%</span>
              <span className="font-mono text-sm text-on-surface-variant">vs 83%<br />GPT-4o</span>
            </div>
            <p className="text-on-surface-variant/80 text-sm mt-4 leading-relaxed">Invoice extraction accuracy — at ~1/10 the cost, faster response, and data that never leaves the perimeter.</p>
          </div>
        </div>
      </section>

      {/* ===================== PROOF (dense metric grid + trust, banded) ===================== */}
      <section className="bg-surface-container-low border-y border-outline-variant/10">
        <div className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// IN PRODUCTION · MARQUEE ENTERPRISES</span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Already live in marquee enterprises.</h2>
            <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">Live, recurring, expanding contracts. Customers anonymized here — named references available to qualified partners.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20">
            {[
              { v: '750+', l: 'Roles freed', d: 'India’s largest logistics — finance & ops automation, 3-year contract.' },
              { v: '80% ↓', l: 'Policy turnaround', d: 'India’s largest insurer — end-to-end policy processing, recurring retainer.' },
              { v: '15%', l: 'Targeted sales lift', d: 'Top-10 e-commerce — pricing & coverage across millions of SKUs.' },
              { v: '5×', l: 'Throughput target', d: 'Government EPC — design automation, +5% margin; POC → retainer.' },
            ].map((m) => (
              <div key={m.l} className="bg-surface-container-high p-7">
                <span className="text-4xl font-headline font-black text-primary-fixed">{m.v}</span>
                <p className="font-headline text-xs font-bold uppercase tracking-widest text-white mt-2">{m.l}</p>
                <p className="text-on-surface-variant/70 text-xs mt-3 leading-snug">{m.d}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20 mt-px">
            {[['100%', 'Data residency'], ['50%', 'Fewer errors'], ['100%', 'Client ownership'], ['90%', 'Cost reduction']].map(([v, l]) => (
              <div key={l} className="bg-surface-container-high p-5 text-center">
                <span className="text-2xl font-headline font-black text-white">{v}</span>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{l}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-surface-container-high p-8 relative overflow-hidden mt-8">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-fixed" />
            <span className="material-symbols-outlined text-primary-fixed/40 mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <blockquote className="text-white font-body italic text-lg max-w-3xl">
              "We sold the AI engagement our client was already asking for — Rhobots shipped it under our brand in weeks. It converted into a retainer, and we kept the account."
            </blockquote>
            <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-4">Managing Partner · Enterprise Advisory Firm</p>
          </div>

          {/* Trust / compliance badges (T4) */}
          <div className="mt-10">
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.3em] block mb-4">// SECURITY & SOVEREIGNTY</span>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'dns', t: 'Self-hosted' },
                { icon: 'public_off', t: 'Data never leaves perimeter' },
                { icon: 'shield', t: 'SOC 2-ready' },
                { icon: 'verified_user', t: 'ISO 27001 controls' },
                { icon: 'gavel', t: 'GDPR-aligned' },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-2 px-3 py-2 border border-outline-variant/20 bg-surface-container">
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontSize: '18px' }}>{b.icon}</span>
                  <span className="font-label text-[11px] font-bold text-white tracking-widest uppercase">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE MODEL (horizontal flow) ===================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-4 block">// HOW WE PARTNER</span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Recurring revenue. You own the account.</h2>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">A simple, repeatable model: co-sell, co-deliver, and earn a recurring share that compounds as scope expands.</p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {[
            { n: '01 · CO-SELL', t: 'You bring the relationship', d: 'We enable your team with pitch assets, live demos and solution scoping. You bring the client and the trust.' },
            { n: '02 · CO-DELIVER', t: 'We deliver, white-label', d: 'A production role-agent in days not quarters, inside your client’s perimeter — under your brand.' },
            { n: '03 · RECURRING SHARE', t: 'Revenue that grows', d: 'Lands as an annual retainer; you earn a recurring share that expands as we automate the next role.' },
          ].map((s, i, arr) => (
            <div key={s.n} className="flex items-stretch flex-1">
              <div className="bg-surface-container-high p-7 flex-1 border-t-2 border-primary-fixed/40">
                <p className="font-mono text-[11px] text-primary-fixed uppercase tracking-widest">{s.n}</p>
                <h3 className="font-headline text-lg font-black uppercase text-white mt-2">{s.t}</h3>
                <p className="text-on-surface-variant/80 text-sm mt-3 leading-relaxed">{s.d}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:flex items-center px-2 text-primary-fixed">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest mt-6">Economics are tailored per partner — structured around who owns the client, delivery and IP.</p>
      </section>

      {/* ===================== LEAD FORM (#apply) ===================== */}
      <section id="apply" className="bg-surface-container-low border-y border-outline-variant/10 scroll-mt-24">
        <div className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-3xl mx-auto">
          <div className="bg-surface-container-low p-6 md:p-10 border-t-4 border-primary-fixed bg-surface-container">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="font-mono text-[10px] text-primary-fixed uppercase tracking-[0.3em] block mb-2">// LET'S PARTNER</span>
                <h2 className="font-headline font-black text-2xl md:text-3xl text-white uppercase tracking-tighter">Become a delivery partner</h2>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">UAE · UK · US — we'll be in touch within 1 business day</p>
              </div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl hidden sm:block" style={{ fontVariationSettings: "'FILL' 0" }}>handshake</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label className={labelCls}>First Name</label>
                  <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`${inputCls} uppercase`} placeholder="REQUIRED" type="text" />
                  {showErrors && !firstName.trim() && <p className="font-mono text-[9px] text-red-400 uppercase tracking-widest mt-1">Required</p>}
                </div>
                <div>
                  <label className={labelCls}>Last Name</label>
                  <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={`${inputCls} uppercase`} placeholder="REQUIRED" type="text" />
                  {showErrors && !lastName.trim() && <p className="font-mono text-[9px] text-red-400 uppercase tracking-widest mt-1">Required</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label className={labelCls}>Work Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@firm.com" type="email" />
                  {((email.length > 0 && emailError) || (showErrors && !email)) && (
                    <p className="font-mono text-[9px] text-red-400 uppercase tracking-widest mt-1">{emailError || 'Required'}</p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>Company</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} className={`${inputCls} uppercase`} placeholder="REQUIRED" type="text" />
                  {showErrors && !company.trim() && <p className="font-mono text-[9px] text-red-400 uppercase tracking-widest mt-1">Required</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <ToggleGroup legend="Region" options={REGIONS} value={region} onChange={setRegion} />
                <ToggleGroup legend="Firm Type" options={FIRM_TYPES} value={firmType} onChange={setFirmType} />
              </div>

              <div>
                <label className={labelCls}>Client Segment <span className="text-on-surface-variant/40">(optional)</span></label>
                <input value={clientSegment} onChange={(e) => setClientSegment(e.target.value)} className={inputCls} placeholder="e.g. BFSI, logistics, healthcare" type="text" />
              </div>

              <div>
                <label className={labelCls}>Anything else? <span className="text-on-surface-variant/40">(optional)</span></label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className={`${inputCls} resize-none`} placeholder="Tell us about your client base or a problem to land first." />
              </div>

              {status === 'error' && (
                <div className="border border-red-500/30 bg-red-500/5 px-4 py-3">
                  <p className="font-mono text-[10px] text-red-400 uppercase tracking-widest">{errorMessage}</p>
                </div>
              )}

              <div className="pt-2">
                <button type="submit" disabled={status === 'submitting'} className="w-full group relative flex items-center justify-between bg-primary-fixed px-6 py-4 transition-all hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed">
                  <span className="font-headline font-black text-lg md:text-xl text-on-primary-fixed uppercase tracking-widest">{status === 'submitting' ? 'SUBMITTING...' : 'Become a delivery partner'}</span>
                  <span className="material-symbols-outlined text-on-primary-fixed group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
                {!isSubmitEnabled && (
                  <p className="mt-3 font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-widest">Complete the required fields to continue.</p>
                )}
                <p className="mt-3 font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">
                  By submitting, you agree to our <a href="/terms" className="text-primary-fixed/70 hover:text-primary-fixed">Terms</a> and <a href="/privacy" className="text-primary-fixed/70 hover:text-primary-fixed">Privacy Policy</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===================== NEXT STEPS STRIP ===================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-mono text-primary-fixed tracking-[0.3em] uppercase text-xs mb-6 block">// NEXT STEPS</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
          {[
            { n: '01', t: 'Intro & fit call', d: 'Map your client base to where Rhobots wins.' },
            { n: '02', t: 'Pick a lighthouse account', d: 'One client, one budgeted problem to land first.' },
            { n: '03', t: 'Co-sell the first engagement', d: 'We scope and deliver alongside you, on your brand.' },
          ].map((s) => (
            <div key={s.n} className="bg-surface-container-high p-7">
              <span className="font-mono text-primary-fixed text-sm tracking-widest">{s.n}</span>
              <h3 className="font-headline text-lg font-black uppercase text-white mt-2">{s.t}</h3>
              <p className="text-on-surface-variant/80 text-sm mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-high p-6 border-l-4 border-primary-fixed">
          <p className="font-headline text-lg font-black uppercase text-white tracking-tight">Become a Rhobots delivery partner.</p>
          <a href="mailto:tech@rhobots.ai" className="font-mono text-sm text-primary-fixed hover:underline">tech@rhobots.ai</a>
        </div>
      </section>

      {/* ===================== STICKY CTA (A2) ===================== */}
      <div className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-surface-container-low/95 backdrop-blur border-t-2 border-primary-fixed px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <p className="font-headline text-xs sm:text-sm font-black uppercase tracking-tight text-white hidden sm:block">You own the client. We deliver the AI.</p>
            <button onClick={scrollToForm} className="w-full sm:w-auto bg-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-widest text-sm px-6 py-3 hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] transition-all">
              Become a delivery partner
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
