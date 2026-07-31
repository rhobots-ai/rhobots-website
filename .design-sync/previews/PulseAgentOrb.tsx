import { MotionGlobalConfig, PulseAgentOrb } from 'rhobots-website';

// The status label enters with a framer-motion fade; a static card is captured
// before it plays, so without this the label is invisible.
MotionGlobalConfig.skipAnimations = true;

/**
 * The voice-agent status orb. Its state (Ready / Listening / Thinking / Speaking)
 * comes from the LiveKit room, so a static card always shows the idle "Ready" state.
 */
export const Ready = () => (
  <div className="flex justify-center bg-surface-container-high p-6">
    <PulseAgentOrb />
  </div>
);

/** In its usual home — centred in the dark call panel. */
export const InCallPanel = () => (
  <div className="bg-background p-6">
    <div className="mx-auto max-w-md border border-outline-variant/20 bg-surface-container-high p-8">
      <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
        Pulse Voice Agent
      </p>
      <PulseAgentOrb />
    </div>
  </div>
);
