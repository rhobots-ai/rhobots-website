import { MotionGlobalConfig, PulseDemoWidget } from 'rhobots-website';

// The widget's voice panel enters through <AnimatePresence> at opacity 0 — without
// this the "LIVE VOICE DEMO" half of the card captures empty.
MotionGlobalConfig.skipAnimations = true;

/** The full self-serve demo: industry + language pickers, name field, and the connect CTA. */
export const Default = () => (
  <div className="bg-background p-6">
    <PulseDemoWidget />
  </div>
);

/** Embedded on a product page for one vertical — the industry picker is hidden and pinned. */
export const LockedToLogistics = () => (
  <div className="bg-background p-6">
    <PulseDemoWidget lockedIndustry="logistics" defaultUserName="Priya" />
  </div>
);

/** Compact placement: just the form, no example-query panels. */
export const WithoutUseCases = () => (
  <div className="bg-background p-6">
    <PulseDemoWidget hideUseCases />
  </div>
);
