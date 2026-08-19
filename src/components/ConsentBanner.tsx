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
    <div className="fixed bottom-0 inset-x-0 z-[60] border-t border-outline-variant bg-background shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:px-10 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="max-w-3xl font-body text-sm leading-relaxed text-on-surface-variant">
            We use essential cookies to run this site. With your consent, we also use analytics &amp; marketing
            cookies to measure traffic and improve our advertising. See our{' '}
            <Link to="/cookie" className="text-on-surface underline underline-offset-4">Cookie Policy</Link>.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose('denied')}
            className="border border-outline px-5 py-2.5 font-body text-sm font-medium text-on-surface transition-colors hover:bg-surface-container"
          >
            Reject
          </button>
          <button
            onClick={() => choose('granted')}
            className="bg-primary px-5 py-2.5 font-body text-sm font-medium text-on-primary transition-colors hover:bg-primary-fixed"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
