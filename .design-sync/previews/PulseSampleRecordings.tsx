import { PulseSampleRecordings } from 'rhobots-website';

/**
 * Sample-call player: waveform scrubber, timecode, and an expandable transcript.
 * The audio file is served by the site at /audio/…, so a card outside the site
 * shows the player in its unplayed state.
 */
export const Default = () => (
  <div className="bg-background p-6">
    <PulseSampleRecordings />
  </div>
);
