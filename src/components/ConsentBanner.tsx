import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent, OPEN_CONSENT_EVENT, type ConsentValue } from '../lib/consent';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (value: ConsentValue) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-surface-container-low/95 backdrop-blur border-t-2 border-primary-fixed">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1">
          <p className="font-mono text-[10px] text-primary-fixed uppercase tracking-[0.3em] mb-1">// PRIVACY</p>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
            We use essential cookies to run this site. With your consent, we also use analytics &amp; marketing
            cookies to measure traffic and improve our advertising. See our{' '}
            <Link to="/cookie" className="text-primary-fixed hover:underline">Cookie Policy</Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => choose('denied')}
            className="px-5 py-2.5 border border-outline-variant text-white font-headline font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
          >
            Reject
          </button>
          <button
            onClick={() => choose('granted')}
            className="px-5 py-2.5 bg-primary-fixed text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(210,240,0,0.3)] transition-all"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
