import { MotionGlobalConfig, PulseVoiceAssistant } from 'rhobots-website';

// The whole panel enters through <AnimatePresence> at opacity 0; a static card is
// captured before the animation runs, so without this the card is blank.
MotionGlobalConfig.skipAnimations = true;

const noop = () => {};

/** Pre-call setup form: industry, language, caller name, and the start-call CTA (disabled until valid). */
export const Disconnected = () => (
  <div className="bg-background p-6">
    <PulseVoiceAssistant
      onConnectButtonClicked={noop}
      industry=""
      setIndustry={noop}
      language=""
      setLanguage={noop}
      userName=""
      setUserName={noop}
      isFormValid={false}
    />
  </div>
);

/** Everything filled in — the CTA is live. */
export const ReadyToConnect = () => (
  <div className="bg-background p-6">
    <PulseVoiceAssistant
      onConnectButtonClicked={noop}
      industry="logistics"
      setIndustry={noop}
      language="en"
      setLanguage={noop}
      userName="Priya"
      setUserName={noop}
      isFormValid
    />
  </div>
);

/** Product-page embed: the vertical is fixed, so the industry selector is dropped. */
export const IndustryLocked = () => (
  <div className="bg-background p-6">
    <PulseVoiceAssistant
      onConnectButtonClicked={noop}
      industry="insurance"
      setIndustry={noop}
      language="en"
      setLanguage={noop}
      userName="Arjun"
      setUserName={noop}
      isFormValid
      lockedIndustry="insurance"
    />
  </div>
);
