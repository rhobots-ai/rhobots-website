import { useVoiceAssistant } from '@livekit/components-react';
import { motion } from 'framer-motion';

export default function PulseAgentOrb() {
  const { state: agentState } = useVoiceAssistant();

  const isSpeaking = agentState === 'speaking';
  const isListening = agentState === 'listening';
  const isThinking = agentState === 'thinking';

  const stateClass = isSpeaking
    ? 'logo-speaking'
    : isListening
      ? 'logo-listening'
      : isThinking
        ? 'logo-thinking'
        : 'logo-idle';

  const label = isSpeaking
    ? 'Speaking...'
    : isListening
      ? 'Listening...'
      : isThinking
        ? 'Thinking...'
        : 'Ready';

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <div className="logo-container">
        <div className={`logo-glow ${stateClass}-glow`} />
        <div className={`logo-wrapper ${stateClass}`}>
          <img src="/icon.png" alt="Rhobots Pulse" className="logo-img" draggable={false} />
        </div>
        <div className={`logo-ring ${stateClass}-ring`} />
        <div className={`logo-ring logo-ring-2 ${stateClass}-ring`} />
      </div>
      <motion.p
        key={label}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-xs tracking-widest uppercase text-on-surface-variant"
      >
        {label}
      </motion.p>
    </div>
  );
}
