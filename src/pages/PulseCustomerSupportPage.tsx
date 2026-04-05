import { useRef, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema, productSchema, breadcrumbSchema } from '../lib/structuredData';
import ConversationDemo, { type ConversationDemoHandle } from '../components/pulse/ConversationDemo';
import PulseDemoWidget from '../components/pulse/PulseDemoWidget';
import { getCustomerConfig, type CustomerConfig } from '../lib/customerConfigs';

const CHANNELS = [
  {
    num: '01',
    title: 'CHAT AI',
    icon: 'chat',
    desc: 'Resolves chat tickets in under 10 seconds with human-quality responses. Handles follow-ups, escalations, and hand-offs seamlessly.',
    tags: ['WEBSITE', 'IN-APP', 'WHATSAPP'],
    span: 'md:col-span-2',
    visual: 'chat_bubble_outline',
  },
  {
    num: '02',
    title: 'EMAIL AI',
    icon: 'mail',
    desc: 'Reads, understands, and responds to customer emails with context from past interactions. Drafts complex responses that sound like your best agent.',
    span: '',
    visual: 'forward_to_inbox',
  },
  {
    num: '03',
    title: 'VOICE AI',
    icon: 'call',
    desc: "Natural voice conversations that resolve issues without 'Press 1 for...' menus. Understands accents, slang, and context.",
    span: '',
    visual: 'record_voice_over',
    action: {
      label: 'TEST LIVE AGENT',
      href: 'https://pulse.rhobots.ai'
    }
  },
  {
    num: '04',
    title: 'SOCIAL & MESSAGING',
    icon: 'forum',
    desc: 'Instant responses on Twitter/X, Facebook, Instagram DMs. Same AI brain, native channel experience.',
    span: '',
    visual: 'share',
  },
  {
    num: '05',
    title: 'VISION AI',
    icon: 'image_search',
    desc: 'Customers send a photo of the problem. AI analyzes the image and diagnoses the issue — no description needed.',
    span: '',
    visual: 'photo_camera',
  },
];

const METRICS = [
  { value: '90%', label: 'Tickets Resolved Without Human', highlight: true },
  { value: '<8s', label: 'Average First Response', highlight: false },
  { value: '-62%', label: 'Support Operations Cost', highlight: true },
  { value: '96%', label: 'Customer Satisfaction', highlight: false },
];

const CASE_STUDY_ROWS = [
  { label: 'Support Agents', before: '400', after: '120', change: '-70%' },
  { label: 'Daily Tickets Handled', before: '50,000', after: '80,000', change: '+60%' },
  { label: 'Avg Resolution Time', before: '22 min', after: '45 sec', change: '-96%' },
  { label: 'Monthly Cost', before: '$2.4M', after: '$680K', change: '-72%' },
  { label: 'CSAT Score', before: '3.8/5', after: '4.6/5', change: '+21%' },
];

const INTEGRATIONS = [
  'Zendesk', 'Salesforce', 'Freshdesk', 'Intercom',
  'HubSpot', 'ServiceNow', 'Jira', 'Slack',
];

const TRUST_INDUSTRIES = [
  'FORTUNE 500 BANKS', 'GLOBAL TELECOMS', 'TOP 10 INSURERS',
  'LEADING E-COMMERCE', 'ENTERPRISE SAAS', 'MAJOR AIRLINES',
];

const HERO_MODES = [
  { label: 'AUTONOMOUS RESOLUTION', headline: 'AI AGENT — EVERY TICKET RESOLVED.' },
  { label: 'HUMAN + AI COLLABORATION', headline: 'AI CO-PILOT — AGENTS 3X FASTER.' },
  { label: 'INTELLIGENT AUTOMATION', headline: 'AI TICKETING — NO MANUAL ENTRY.' },
];

function useTyping(text: string, trigger: number, speed = 35) {
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    setCharIndex(0);
    const id = setInterval(() => {
      setCharIndex(i => {
        if (i >= text.length) { clearInterval(id); return i; }
        return i + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, trigger, speed]);
  return { displayed: text.slice(0, charIndex), done: charIndex >= text.length };
}

export default function PulseCustomerSupportPage() {
  const demoRef = useRef<ConversationDemoHandle>(null);
  const [searchParams] = useSearchParams();
  const rawSlug = searchParams.get('customer');
  const customerConfig: CustomerConfig | null = rawSlug ? getCustomerConfig(rawSlug) : null;

  const [modeIndex, setModeIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setModeIndex(i => (i + 1) % HERO_MODES.length);
      setTick(t => t + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [customerConfig]);

  const currentMode = HERO_MODES[modeIndex];
  const typing = useTyping(currentMode.headline, tick);

  const scrollToDemo = () => {
    document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' });
    demoRef.current?.replay();
  };

  return (
    <main className="min-h-screen grid-substrate">
      <SEO
        title={customerConfig?.seoTitle ?? 'AI Customer Support Automation - Pulse'}
        description="Resolve 90% of support tickets automatically across chat, email, voice, and social. Reduce support costs by 62% while improving customer satisfaction to 96%. Powered by Rhobots Pulse."
        path="/pulse/customer-support"
        jsonLd={[
          organizationSchema(),
          productSchema({
            name: 'Rhobots Pulse - Customer Support',
            description: 'AI-powered customer support automation that resolves 90% of tickets across all channels',
            path: '/pulse/customer-support',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pulse', path: '/products/pulse' },
            { name: 'Customer Support', path: '/pulse/customer-support' },
          ]),
        ]}
      />

      {/* ===================== SECTION 1: HERO ===================== */}
      <section className="relative px-4 sm:px-6 pt-12 pb-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 font-mono text-[10px] tracking-widest uppercase mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-primary-fixed animate-pulse"></span>
              AI CUSTOMER SUPPORT // ACTIVE
            </div>
            <h1 className="font-headline text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl sm:leading-[1.0] font-black tracking-tighter uppercase mb-5">
              <span className="text-white block">
                {customerConfig?.hero?.headline ?? 'RESOLVE 90% OF TICKETS.'}
              </span>
              <span className="text-primary-fixed block" style={{ minHeight: '1.1em' }}>
                {typing.displayed}<span className="blink-cursor">|</span>
              </span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed">
              {customerConfig?.hero?.subheadline ?? 'Your customers get instant, accurate answers across every channel — chat, email, voice, and social. Your agents get freed from repetitive tickets to handle what actually needs a human.'}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={scrollToDemo}
                className="bg-primary-fixed text-on-primary-fixed px-5 sm:px-8 py-3 sm:py-4 font-mono font-bold tracking-widest text-xs sm:text-base hover:glow-bleed transition-all"
              >
                SEE IT RESOLVE A TICKET
              </button>
              <Link
                to="/demo"
                className="border border-outline-variant/20 text-primary-fixed px-5 sm:px-8 py-3 sm:py-4 font-mono font-bold tracking-widest text-xs sm:text-base hover:bg-surface-bright/20 transition-all text-center"
              >
                TALK TO OUR TEAM
              </Link>
            </div>
          </div>
          {/* Right panel — system connectivity for customer pages, generic feed otherwise */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            {customerConfig ? (
              <div className="bg-surface-container-high p-3 sm:p-4 border-l-4 border-primary-fixed relative scanline">
                <div className="flex justify-between items-center mb-3 sm:mb-4 border-b border-outline-variant/10 pb-2">
                  <span className="font-mono text-[10px] text-primary-fixed">SYSTEM CONNECTIVITY</span>
                  <span className="font-mono text-[10px] text-outline">ACTIVE</span>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  {[
                    { name: 'SAFEXPRESS TMS', status: 'CONNECTED', color: 'text-primary-fixed', pulse: true },
                    { name: 'SALESFORCE CRM', status: 'SYNCING', color: 'text-yellow-400', pulse: true },
                    { name: 'WAREHOUSE WMS', status: 'CONNECTED', color: 'text-primary-fixed', pulse: true },
                  ].map((sys) => (
                    <div key={sys.name} className="flex items-center justify-between bg-surface-container-lowest p-2.5 sm:p-3 gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <span className="material-symbols-outlined text-primary-fixed text-base shrink-0">hub</span>
                        <span className="text-on-surface-variant text-[11px] sm:text-xs font-mono tracking-wider">{sys.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${sys.color.replace('text-', 'bg-')} animate-pulse`}></span>
                        <span className={`font-mono text-[9px] sm:text-[10px] ${sys.color}`}>{sys.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-surface-container-lowest p-2.5 sm:p-3 border-l-2 border-primary-fixed mb-3">
                  <div className="font-mono text-[9px] text-outline mb-1">LATEST TICKET</div>
                  <div className="font-mono text-[10px] sm:text-xs text-on-surface-variant">AWB#SFX-8842917 · PRIORITY</div>
                  <div className="font-mono text-[10px] sm:text-xs text-primary-fixed mt-0.5">RESOLVED <span className="text-outline">in</span> 9s</div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-surface-container-lowest p-2.5 sm:p-3 font-mono">
                    <div className="text-[10px] text-outline">AVG RESOLUTION</div>
                    <div className="text-xl sm:text-2xl text-primary-fixed">9s</div>
                  </div>
                  <div className="bg-surface-container-lowest p-2.5 sm:p-3 font-mono">
                    <div className="text-[10px] text-outline">TICKETS TODAY</div>
                    <div className="text-xl sm:text-2xl text-white">12,400</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-surface-container-high p-3 sm:p-4 border-l-4 border-primary-container relative scanline">
                <div className="flex justify-between items-center mb-3 sm:mb-4 border-b border-outline-variant/10 pb-2">
                  <span className="font-mono text-[10px] text-primary-fixed">LIVE RESOLUTION FEED</span>
                  <span className="font-mono text-[10px] text-outline">CONNECTED</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { subject: 'Shipping delay inquiry', channel: 'mail', status: 'RESOLVED', time: '6s' },
                    { subject: 'Password reset request', channel: 'chat', status: 'RESOLVED', time: '3s' },
                    { subject: 'Billing discrepancy', channel: 'call', status: 'PROCESSING', time: '...' },
                  ].map((ticket, i) => (
                    <div key={i} className="flex items-center justify-between bg-surface-container-lowest p-2.5 sm:p-3 gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <span className="material-symbols-outlined text-primary-fixed text-base shrink-0">{ticket.channel}</span>
                        <span className="text-on-surface-variant text-[11px] sm:text-xs truncate">{ticket.subject}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <span className={`font-mono text-[9px] sm:text-[10px] ${ticket.status === 'RESOLVED' ? 'text-primary-fixed' : 'text-outline animate-pulse'}`}>
                          {ticket.status}
                        </span>
                        <span className="font-mono text-[9px] sm:text-[10px] text-outline">{ticket.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-surface-container-lowest p-2.5 sm:p-3 font-mono">
                    <div className="text-[10px] text-outline">AVG RESOLUTION</div>
                    <div className="text-xl sm:text-2xl text-primary-fixed">8s</div>
                  </div>
                  <div className="bg-surface-container-lowest p-2.5 sm:p-3 font-mono">
                    <div className="text-[10px] text-outline">CSAT</div>
                    <div className="text-xl sm:text-2xl text-white">96%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: LIVE VOICE DEMO ===================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 border-t border-outline-variant/10 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10 sm:mb-16">
            <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// LIVE VOICE DEMO</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Talk To Pulse. Right Now.
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-3 max-w-2xl">
              Pick a scenario, speak naturally, and see how Pulse resolves your query in real time.
            </p>
          </div>
          <div className="bg-surface-container-high border border-outline-variant/20 scanline">
            <PulseDemoWidget lockedIndustry={customerConfig?.industry} />
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4: SOCIAL PROOF ===================== */}
      <section className="border-t border-b border-outline-variant/10 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-mono text-[9px] sm:text-xs text-outline tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-8">
            TRUSTED BY SUPPORT TEAMS PROCESSING 500M+ CONVERSATIONS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
            {TRUST_INDUSTRIES.map((name) => (
              <div
                key={name}
                className="bg-surface-container-high px-3 sm:px-6 py-2 sm:py-3 font-mono text-[9px] sm:text-[10px] text-outline tracking-wider sm:tracking-widest text-center"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5: CHANNEL MODULES ===================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10 sm:mb-16">
            <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// RESOLUTION STACK</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Every Channel. One AI.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CHANNELS.map((ch) => (
              <div
                key={ch.num}
                className={`${ch.span || ''} bg-surface-container-high p-5 sm:p-8 relative group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-3 sm:p-4 font-mono text-[10px] text-outline-variant">{ch.num}</div>
                {/* Channel visual illustration */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-fixed/5 border border-primary-fixed/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-fixed/10 group-hover:border-primary-fixed/40 transition-all">
                  <span className="material-symbols-outlined text-primary-fixed text-2xl sm:text-3xl">{ch.icon}</span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase mb-3 sm:mb-4">{ch.title}</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-4 leading-relaxed">{ch.desc}</p>
                {ch.tags && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {ch.tags.map((tag) => (
                      <span key={tag} className="bg-surface-container-lowest px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-outline tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {ch.action && (
                  <div className="mt-4">
                    <a
                      href={ch.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed px-3 py-1.5 sm:px-4 sm:py-2 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest transition-all uppercase"
                    >
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></span>
                      {ch.action.label}
                    </a>
                  </div>
                )}
                {/* Decorative corner accent on hover */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-fixed/0 group-hover:border-primary-fixed/30 transition-all"></div>
              </div>
            ))}
            {/* Key Differentiator Banner */}
            <div className="md:col-span-3 lg:col-span-4 bg-surface-container-highest p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-12 border-l-4 border-primary-fixed">
              <div className="flex-1">
                <span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 font-mono text-[10px] font-bold mb-4 inline-block uppercase">
                  KEY DIFFERENTIATOR
                </span>
                <h3 className="font-headline text-xl sm:text-3xl font-black text-white uppercase mb-4">
                  Unified Memory Across Channels
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-lg leading-relaxed">
                  Customer starts on chat, follows up by email, calls in. The AI remembers everything. No "Can you explain your issue again?" — ever.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <img
                    alt="Neural network data connections"
                    className="w-full h-32 sm:h-40 object-cover opacity-40 grayscale"
                    src="/images/neural-network.jpg"
                  />
                  <div className="absolute inset-0 bg-primary-fixed/5 scanline"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                    {['chat → email → call', 'CONTEXT: PRESERVED', 'HANDOFFS: 0'].map((line, i) => (
                      <div key={i} className="bg-surface-container-lowest/90 px-3 py-1.5 font-mono text-[10px] sm:text-xs">
                        <span className={i === 0 ? 'text-on-surface-variant' : 'text-primary-fixed'}>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6: CONVERSATION DEMO ===================== */}
      <section id="live-demo" className="px-4 sm:px-6 py-16 sm:py-24 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10 sm:mb-16">
            <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-2 uppercase">// LIVE DEMONSTRATION</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Watch The AI Resolve A Real Ticket
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-3 max-w-2xl">
              See how Pulse handles a frustrated customer — from intent detection to resolution — with full reasoning transparency.
            </p>
          </div>
          <ConversationDemo ref={demoRef} steps={customerConfig?.demoSteps} />
        </div>
      </section>

      {/* ===================== SECTION 7: IMPACT METRICS ===================== */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-12">
          <div className="max-w-lg">
            <h2 className="font-headline text-2xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-2 sm:mb-4">
              Validated Impact
            </h2>
            <p className="text-on-surface-variant font-mono uppercase text-[10px] sm:text-xs tracking-widest">
              Results from Enterprise Deployments
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full md:w-auto">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center p-3 sm:p-6 bg-surface-container-high">
                <div className={`font-mono text-xl sm:text-4xl font-bold mb-1 ${m.highlight ? 'text-primary-fixed' : 'text-white'}`}>
                  {m.value}
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-outline text-center uppercase tracking-wider sm:tracking-widest">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 8: CASE STUDY ===================== */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-6 block uppercase">// CASE STUDY</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-4 sm:mb-6">
                Leading Telecom Provider
              </h2>
              <div className="border-l-4 border-primary-fixed pl-4 sm:pl-6 mb-6 sm:mb-8">
                <p className="text-on-surface-variant text-sm sm:text-lg leading-relaxed italic">
                  "We went from 400 support agents handling 50,000 tickets a day to 120 agents handling 80,000 tickets a day — with higher customer satisfaction scores than before."
                </p>
                <p className="font-mono text-[10px] text-outline tracking-widest uppercase mt-3 sm:mt-4">
                  VP of Customer Experience
                </p>
              </div>
            </div>
            <div className="bg-surface-container-high p-3 sm:p-6 relative scanline">
              <div className="flex justify-between items-center mb-3 sm:mb-4 border-b border-outline-variant/10 pb-2">
                <span className="font-mono text-[9px] sm:text-[10px] text-primary-fixed">TRANSFORMATION METRICS</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-outline">BEFORE → AFTER</span>
              </div>
              <div className="space-y-0">
                {CASE_STUDY_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between gap-2 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs ${i < CASE_STUDY_ROWS.length - 1 ? 'border-b border-outline-variant/10' : ''}`}
                  >
                    <div className="text-outline text-[9px] sm:text-[10px] uppercase shrink-0 w-24 sm:w-auto">{row.label}</div>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="text-on-surface-variant">{row.before}</span>
                      <span className="text-outline">→</span>
                      <span className="text-primary-fixed font-bold">{row.after}</span>
                      <span className="text-primary-fixed font-bold text-[9px] sm:text-xs">{row.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 9: AI + HUMAN PHILOSOPHY ===================== */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-4 sm:mb-6 block uppercase text-center">// PHILOSOPHY</span>
          <h2 className="font-headline text-xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-center mb-2 sm:mb-4 leading-tight">
            AI Handles The Volume.
          </h2>
          <h2 className="font-headline text-xl sm:text-4xl md:text-5xl font-black text-primary-fixed uppercase tracking-tighter text-center mb-8 sm:mb-16 leading-tight">
            Your Team Handles The Moments That Matter.
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Smart Escalation',
                icon: 'swap_horiz',
                desc: 'The AI knows when to hand off. Complex emotional situations, VIP customers, edge cases — routed to your best agents with full context.',
              },
              {
                title: 'Agent Copilot Mode',
                icon: 'assistant',
                desc: 'For tickets the AI doesn\'t auto-resolve, it drafts responses and surfaces relevant knowledge — so your agents respond 3x faster.',
              },
              {
                title: 'Continuous Learning',
                icon: 'trending_up',
                desc: 'Every agent correction makes the AI smarter. Your team\'s expertise becomes the AI\'s training data.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-primary-fixed/30 pl-6 sm:pl-8 py-4 hover:border-primary-fixed transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary-fixed text-xl">{item.icon}</span>
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-white uppercase">{item.title}</h3>
                </div>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 10: INTEGRATIONS & DEPLOYMENT ===================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-primary-fixed text-xs tracking-[0.3em] mb-6 block uppercase">// DEPLOYMENT</span>
          <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Live In Days. <span className="text-primary-fixed">Not Months.</span>
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mb-10 sm:mb-14 max-w-xl mx-auto">
            Connects to your existing helpdesk, CRM, and knowledge base. No migration required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {INTEGRATIONS.map((name) => (
              <div
                key={name}
                className="bg-surface-container-high border border-outline-variant/10 px-5 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-sm text-on-surface-variant tracking-wider hover:border-primary-fixed/30 hover:text-primary-fixed transition-all"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              { value: '2 DAYS', label: 'Average Time to Go Live' },
              { value: 'ZERO', label: 'Lines of Code Required' },
              { value: '99.99%', label: 'Uptime SLA' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 sm:p-6 bg-surface-container-high">
                <div className="font-mono text-primary-fixed text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="font-mono text-[10px] text-outline uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 11: CTA ===================== */}
      <section className="py-14 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden border-t border-outline-variant/10">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-5xl md:text-7xl font-black uppercase text-white mb-2 sm:mb-4 leading-tight">
            Stop Scaling Headcount.
          </h2>
          <h2 className="font-headline text-2xl sm:text-5xl md:text-7xl font-black uppercase text-primary-fixed mb-5 sm:mb-8 leading-tight">
            Start Scaling Intelligence.
          </h2>
          <p className="text-on-surface-variant mb-8 md:mb-12 text-base sm:text-lg max-w-xl mx-auto">
            Join enterprise support teams resolving 500M+ conversations with AI. See it handle your tickets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-primary-fixed text-on-primary-fixed font-mono font-bold tracking-widest text-sm sm:text-base hover:glow-bleed transition-all"
            >
              SCHEDULE A DEMO
            </Link>
            <Link
              to="/pricing"
              className="font-mono text-sm text-primary-fixed hover:text-white tracking-widest transition-colors"
            >
              Or see pricing →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
