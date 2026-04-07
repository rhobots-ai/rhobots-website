import { RoomContext } from '@livekit/components-react';
import { Room, RoomEvent } from 'livekit-client';
import { useCallback, useEffect, useState } from 'react';
import PulseVoiceAssistant from './PulseVoiceAssistant';

const CONN_DETAILS_URL =
  import.meta.env.VITE_PULSE_API_URL ?? 'http://localhost:3000/api/connection-details';

export const USE_CASES: Record<string, { icon: string; title: string; queries: string[] }[]> = {
  logistics: [
    {
      icon: 'local_shipping',
      title: 'Shipment Tracking',
      queries: ['Where is my package AWB1001?', 'Why is my shipment delayed?', 'Update delivery address'],
    },
    {
      icon: 'inventory_2',
      title: 'Claims & Damage',
      queries: ['File a damage claim for AWB1002', 'My parcel arrived open', 'Request insurance payout'],
    }
  ],
  fintech: [
    {
      icon: 'account_balance',
      title: 'Account Queries',
      queries: ['Check balance on ACC1001', 'Why was my transaction blocked?', 'Update KYC documents'],
    },
    {
      icon: 'credit_card',
      title: 'Card & Payments',
      queries: ['Report a suspicious charge', 'Increase credit limit', 'Activate a new card'],
    }
  ],
  insurance: [
    {
      icon: 'health_and_safety',
      title: 'Policy Information',
      queries: ['Coverage details for POL2001', 'Renewal date for my policy', 'Add a family member'],
    },
    {
      icon: 'assignment',
      title: 'Claims',
      queries: ['File a claim for CLM3001', 'Status of claim CLM3002', 'Upload claim documents'],
    }
  ],
};

export const DEFAULT_USE_CASES: { icon: string; title: string; queries: string[] }[] = [
  {
    icon: 'chat',
    title: 'General Support',
    queries: ['Track my order status', 'Update account details', 'Request a refund'],
  },
  {
    icon: 'help_outline',
    title: 'Common Queries',
    queries: ['Reset my password', 'Speak to a human agent', 'Cancel my subscription'],
  },
];

export function PulseUseCases({ industry }: { industry: string }) {
  const useCases = (industry && USE_CASES[industry]) ? USE_CASES[industry] : DEFAULT_USE_CASES;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {useCases.map((uc) => (
          <div key={uc.title} className="bg-surface-container-lowest border border-outline-variant/10 p-4 lg:p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary-fixed text-2xl lg:text-3xl">{uc.icon}</span>
              <span className="font-headline text-lg font-bold text-white uppercase tracking-tight">{uc.title}</span>
            </div>
            <div className="flex flex-col gap-2">
              {uc.queries.map((q) => (
                <div key={q} className="flex items-center gap-2 bg-surface-container px-4 py-3">
                  <span className="text-primary-fixed text-sm font-bold shrink-0">›</span>
                  <span className="text-on-surface-variant text-sm lg:text-base leading-snug">"{q}"</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!industry && (
        <p className="mt-6 font-mono text-[10px] text-outline tracking-widest uppercase text-center">
          ← Select an industry above to see tailored examples
        </p>
      )}
    </div>
  );
}

interface PulseDemoWidgetProps {
  lockedIndustry?: string;
  defaultUserName?: string;
  hideUseCases?: boolean;
  onIndustryChange?: (industry: string) => void;
}

export default function PulseDemoWidget({ lockedIndustry, defaultUserName = '', hideUseCases = false, onIndustryChange }: PulseDemoWidgetProps = {}) {
  const [room] = useState(() => new Room());
  const [industry, setIndustry] = useState(lockedIndustry ?? '');
  const [language, setLanguage] = useState('');
  const [userName, setUserName] = useState(defaultUserName);

  useEffect(() => {
    if (onIndustryChange) {
      onIndustryChange(industry);
    }
  }, [industry, onIndustryChange]);

  useEffect(() => {
    room.on(RoomEvent.MediaDevicesError, onDeviceFailure);
    return () => {
      room.off(RoomEvent.MediaDevicesError, onDeviceFailure);
    };
  }, [room]);

  const onConnectButtonClicked = useCallback(async () => {
    const agentType = `${industry}-${language}`;
    const url = new URL(CONN_DETAILS_URL);
    url.searchParams.set('agent_type', agentType);
    url.searchParams.set('name', userName);

    const response = await fetch(url.toString());
    const data = await response.json();

    await room.connect(data.serverUrl, data.participantToken);
    await room.localParticipant.setMicrophoneEnabled(true);
  }, [room, industry, language, userName]);

  const isFormValid = industry !== '' && language !== '' && userName.trim() !== '';

  const demoContent = (
    <div className="p-4 sm:p-6" data-lk-theme="default">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full animate-pulse"></span>
        <span className="font-mono text-[10px] text-primary-fixed tracking-widest uppercase">// LIVE VOICE DEMO</span>
      </div>
      <RoomContext.Provider value={room}>
        <PulseVoiceAssistant
          onConnectButtonClicked={onConnectButtonClicked}
          industry={industry}
          setIndustry={setIndustry}
          language={language}
          setLanguage={setLanguage}
          userName={userName}
          setUserName={setUserName}
          isFormValid={isFormValid}
          lockedIndustry={lockedIndustry}
        />
      </RoomContext.Provider>
    </div>
  );

  if (hideUseCases) {
    return <div className="w-full">{demoContent}</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/10">
      {/* Left: Use Cases */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full shrink-0"></span>
          <span className="font-mono text-[10px] text-primary-fixed tracking-widest uppercase">
            {industry ? `// ${industry.toUpperCase()} USE CASES` : '// WHAT YOU CAN ASK'}
          </span>
        </div>
        <PulseUseCases industry={industry} />
      </div>

      {/* Right: Voice Demo */}
      {demoContent}
    </div>
  );
}

function onDeviceFailure(error: Error) {
  console.error(error);
  alert(
    'Error acquiring microphone permissions. Please grant the necessary permissions in your browser and reload the tab.',
  );
}
