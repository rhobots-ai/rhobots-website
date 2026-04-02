import { useState, useEffect, useCallback } from 'react';

interface Step {
  type: 'customer' | 'ai' | 'reasoning';
  content: string;
  delay: number;
}

const DEMO_STEPS: Step[] = [
  {
    type: 'customer',
    content: "My package was supposed to arrive yesterday but the tracking hasn't updated. AWB #9928341. What's going on?",
    delay: 1200,
  },
  {
    type: 'reasoning',
    content: '> INTENT: tracking_status_inquiry\n> SENTIMENT: frustrated [0.87]\n> ACTION: lookup_awb(#9928341)',
    delay: 1800,
  },
  {
    type: 'ai',
    content: "I completely understand your frustration. Let me check on the status of AWB #9928341 right now.",
    delay: 1400,
  },
  {
    type: 'reasoning',
    content: '> RESULT: weather_delay_hub | est_delivery: today_by_8pm\n> POLICY_CHECK: proactively_notify = true\n> ACTION: setup_sms_tracking, generate_apology_credit',
    delay: 2000,
  },
  {
    type: 'ai',
    content: "I found your package — there was a brief weather delay at our transit hub, but it's out for delivery and will arrive by 8 PM today. I've set up real-time SMS updates for you and applied a $15 credit to your account for the inconvenience.",
    delay: 1800,
  },
  {
    type: 'customer',
    content: "Oh wow, that's actually great. Thanks!",
    delay: 1200,
  },
  {
    type: 'reasoning',
    content: '> SENTIMENT_SHIFT: frustrated → satisfied\n> OUTCOME: resolved | escalation: none\n> CSAT_PREDICTED: 4.8/5',
    delay: 1500,
  },
];

export default function ConversationDemo() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const play = useCallback(() => {
    setCurrentStep(-1);
    setIsPlaying(true);
    setHasStarted(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const nextStep = currentStep + 1;
    if (nextStep >= DEMO_STEPS.length) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep(nextStep);
    }, nextStep === 0 ? 600 : DEMO_STEPS[nextStep - 1].delay);

    return () => clearTimeout(timer);
  }, [currentStep, isPlaying]);

  // Auto-play on mount
  useEffect(() => {
    const timer = setTimeout(play, 800);
    return () => clearTimeout(timer);
  }, [play]);

  const visibleMessages = DEMO_STEPS.slice(0, currentStep + 1).filter(
    (s) => s.type === 'customer' || s.type === 'ai'
  );
  const visibleReasoning = DEMO_STEPS.slice(0, currentStep + 1).filter(
    (s) => s.type === 'reasoning'
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
      {/* Chat Panel */}
      <div className="bg-surface-container-high border border-outline-variant/10 flex flex-col">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-outline-variant/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-fixed rounded-full animate-pulse"></span>
            <span className="font-mono text-[9px] sm:text-[10px] text-primary-fixed tracking-widest">LIVE CHAT</span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] text-outline">AWB #9928341</span>
        </div>
        <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-[260px] sm:min-h-[380px]">
          {visibleMessages.map((step, i) => (
            <div
              key={i}
              className={`flex ${step.type === 'customer' ? 'justify-start' : 'justify-end'} animate-fade-in`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[85%] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed ${
                  step.type === 'customer'
                    ? 'bg-surface-container text-on-surface'
                    : 'bg-primary-fixed/10 text-on-surface border border-primary-fixed/20'
                }`}
              >
                <div className={`font-mono text-[9px] sm:text-[10px] mb-1 sm:mb-1.5 ${step.type === 'customer' ? 'text-outline' : 'text-primary-fixed'}`}>
                  {step.type === 'customer' ? 'CUSTOMER' : 'PULSE AI'}
                </div>
                {step.content}
              </div>
            </div>
          ))}
          {isPlaying && DEMO_STEPS[currentStep + 1]?.type === 'ai' && (
            <div className="flex justify-end">
              <div className="bg-primary-fixed/10 border border-primary-fixed/20 px-3 sm:px-4 py-2.5 sm:py-3">
                <div className="font-mono text-[9px] sm:text-[10px] text-primary-fixed mb-1 sm:mb-1.5">PULSE AI</div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-primary-fixed/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-primary-fixed/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-primary-fixed/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          {!hasStarted && (
            <div className="flex items-center justify-center h-full text-outline font-mono text-[10px] sm:text-xs">
              WAITING FOR CONVERSATION...
            </div>
          )}
        </div>
        {!isPlaying && hasStarted && currentStep >= DEMO_STEPS.length - 1 && (
          <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-t border-outline-variant/10 flex items-center justify-between">
            <span className="font-mono text-[9px] sm:text-[10px] text-primary-fixed">RESOLVED IN 12s</span>
            <button
              onClick={play}
              className="font-mono text-[9px] sm:text-[10px] text-primary-fixed hover:text-white tracking-widest transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">replay</span>
              REPLAY
            </button>
          </div>
        )}
      </div>

      {/* AI Reasoning Panel */}
      <div className="bg-surface-container-lowest border border-outline-variant/10 flex flex-col">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-outline-variant/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed text-sm">psychology</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-primary-fixed tracking-widest">AI REASONING ENGINE</span>
          </div>
          <span className={`font-mono text-[9px] sm:text-[10px] ${isPlaying ? 'text-primary-fixed' : 'text-outline'}`}>
            {isPlaying ? 'PROCESSING' : hasStarted ? 'COMPLETE' : 'STANDBY'}
          </span>
        </div>
        <div className="flex-1 p-3 sm:p-4 font-mono text-[10px] sm:text-xs space-y-2.5 sm:space-y-3 min-h-[200px] sm:min-h-[380px] overflow-auto">
          {visibleReasoning.map((step, i) => (
            <div key={i} className="animate-fade-in">
              {step.content.split('\n').map((line, j) => (
                <div key={j} className="py-0.5 break-all sm:break-normal">
                  <span className="text-outline">{line.substring(0, 2)}</span>
                  <span className="text-primary-fixed">
                    {line.substring(2, line.indexOf(':') + 1)}
                  </span>
                  <span className="text-on-surface-variant">
                    {line.substring(line.indexOf(':') + 1)}
                  </span>
                </div>
              ))}
              {i < visibleReasoning.length - 1 && (
                <div className="border-b border-outline-variant/10 my-1.5 sm:my-2"></div>
              )}
            </div>
          ))}
          {isPlaying && (
            <div className="text-primary-fixed/50 animate-pulse">{'>'} _</div>
          )}
          {!hasStarted && (
            <div className="flex items-center justify-center h-full text-outline text-[10px] sm:text-xs">
              AWAITING INPUT...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
