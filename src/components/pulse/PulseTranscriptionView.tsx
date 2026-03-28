import useCombinedTranscriptions from '../../hooks/useCombinedTranscriptions';
import { useRef, useEffect } from 'react';

export default function PulseTranscriptionView() {
  const combinedTranscriptions = useCombinedTranscriptions();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [combinedTranscriptions]);

  return (
    <div className="relative h-[200px] w-full max-w-[512px] mx-auto">
      {/* Fade masks */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-surface-container-high to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-container-high to-transparent z-10 pointer-events-none" />

      <div ref={containerRef} className="h-full flex flex-col gap-2 overflow-y-auto px-4 py-8">
        {combinedTranscriptions.map((segment) => (
          <div
            id={segment.id}
            key={segment.id}
            className={
              segment.role === 'assistant'
                ? 'p-2 self-start text-sm text-on-surface-variant font-mono'
                : 'bg-surface-container p-2 self-end text-sm text-on-surface font-mono border-l-2 border-primary-fixed'
            }
          >
            {segment.text}
          </div>
        ))}
      </div>
    </div>
  );
}
