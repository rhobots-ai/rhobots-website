import {
  DisconnectButton,
  RoomAudioRenderer,
  VoiceAssistantControlBar,
  useVoiceAssistant,
} from '@livekit/components-react';
import { AnimatePresence, motion } from 'framer-motion';
import PulseAgentOrb from './PulseAgentOrb';
import PulseTranscriptionView from './PulseTranscriptionView';

const INDUSTRIES = [
  { value: 'logistics', label: 'Logistics', icon: '📦' },
  { value: 'fintech', label: 'Fintech', icon: '🏦' },
  { value: 'insurance', label: 'Insurance', icon: '🛡️' },
];

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
];

const DEMO_HINTS: Record<string, { title: string; items: string[] }> = {
  logistics: { title: 'Demo AWB Numbers', items: ['AWB1001', 'AWB1002', 'AWB1003'] },
  fintech: { title: 'Demo Account IDs', items: ['ACC1001', 'ACC1002', 'ACC1003'] },
  insurance: {
    title: 'Demo IDs',
    items: ['POL2001', 'POL2002', 'POL2003', 'CLM3001', 'CLM3002', 'CLM3003'],
  },
};

type Props = {
  onConnectButtonClicked: () => void;
  industry: string;
  setIndustry: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  userName: string;
  setUserName: (v: string) => void;
  isFormValid: boolean;
  lockedIndustry?: string;
};

export default function PulseVoiceAssistant(props: Props) {
  const { state: agentState } = useVoiceAssistant();

  return (
    <AnimatePresence mode="wait">
      {agentState === 'disconnected' ? (
        <motion.div
          key="disconnected"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.09, 1.04, 0.245, 1.055] }}
          className="flex flex-col gap-5"
        >
          {/* Industry — hidden when locked */}
          {!props.lockedIndustry && (
            <div>
              <label className="block font-mono text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
                Select Industry
              </label>
              <div className="flex gap-2">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.value}
                    onClick={() => props.setIndustry(ind.value)}
                    className={`pulse-industry-option ${props.industry === ind.value ? 'pulse-industry-option-selected' : ''}`}
                  >
                    <span className="text-lg">{ind.icon}</span>
                    <span>{ind.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Language */}
          <div>
            <label className="block font-mono text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
              Select Language
            </label>
            <div className="flex gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => props.setLanguage(lang.value)}
                  className={`pulse-language-option ${props.language === lang.value ? 'pulse-language-option-selected' : ''}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block font-mono text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={props.userName}
              onChange={(e) => props.setUserName(e.target.value)}
              placeholder="Enter your name"
              className="pulse-name-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && props.isFormValid) props.onConnectButtonClicked();
              }}
            />
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="pulse-join-button"
            disabled={!props.isFormValid}
            onClick={props.onConnectButtonClicked}
          >
            Start Call
          </motion.button>
        </motion.div>
      ) : agentState === 'connecting' ? (
        <motion.div
          key="connecting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 py-12"
        >
          <div className="pulse-spinner" />
          <p className="font-mono text-[10px] tracking-widest uppercase text-on-surface-variant">
            Connecting...
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="connected"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.09, 1.04, 0.245, 1.055] }}
          className="flex flex-col items-center gap-4"
        >
          <PulseAgentOrb />

          {DEMO_HINTS[props.industry] && (
            <div className="bg-surface-container border border-outline-variant/20 px-4 py-2 text-center w-full">
              <p className="font-mono text-[10px] tracking-widest uppercase text-outline mb-1">
                {DEMO_HINTS[props.industry].title}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {DEMO_HINTS[props.industry].items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface-container-high text-on-surface-variant font-mono text-xs px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="w-full">
            <PulseTranscriptionView />
          </div>

          <div className="relative h-[44px] w-full flex items-center justify-center">
            <div className="flex h-8 absolute left-1/2 -translate-x-1/2 justify-center items-center gap-2">
              <VoiceAssistantControlBar controls={{ leave: false }} />
              <DisconnectButton>
                <span className="font-mono text-[10px] tracking-widest uppercase">End</span>
              </DisconnectButton>
            </div>
          </div>

          <RoomAudioRenderer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
