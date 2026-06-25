// Consent-gated analytics. No tracking script loads until the user grants
// consent (GDPR/PECR-safe: opt-in, not opt-out). GTM is injected only on
// 'granted'; if VITE_GTM_ID is unset, nothing loads regardless.

const KEY = 'rh_consent_v1';

export type ConsentValue = 'granted' | 'denied';

export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* localStorage unavailable (private mode) — choice is session-only */
  }
  if (value === 'granted') loadGtm();
}

let gtmLoaded = false;

// Inject Google Tag Manager. The container (configured in the GTM web UI)
// holds the actual ad pixels — they fire only after this runs, i.e. only
// after consent. Conversion events pushed to window.dataLayer before load
// are replayed by GTM on init.
export function loadGtm(): void {
  const id = import.meta.env.VITE_GTM_ID;
  if (!id || gtmLoaded || typeof document === 'undefined') return;
  gtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}

// Call once on app boot — loads analytics only if consent was already granted.
export function initConsentedAnalytics(): void {
  if (getConsent() === 'granted') loadGtm();
}

// Lets any page (e.g. the Cookie Policy) re-open the consent banner so users
// can withdraw or change consent at any time.
export const OPEN_CONSENT_EVENT = 'rh:open-consent';

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
