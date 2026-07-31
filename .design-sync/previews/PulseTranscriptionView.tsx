import { PulseTranscriptionView } from 'rhobots-website';

/**
 * Live transcript pane. Lines are streamed from the LiveKit room's transcription
 * tracks, so outside a connected call it renders its empty scroll surface with the
 * top/bottom fade masks — which is exactly the state it shows before a call starts.
 */
export const BeforeCallStarts = () => (
  <div className="bg-background p-6">
    <div className="mx-auto max-w-lg border border-outline-variant/20 bg-surface-container-high">
      <div className="flex items-center gap-2 border-b border-outline-variant/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-primary-fixed" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-fixed">Transcript</span>
      </div>
      <PulseTranscriptionView />
    </div>
  </div>
);
