import { useEffect, useRef, useState } from 'react';

interface TranscriptLine {
  time: number;
  speaker: 'customer' | 'agent';
  text: string;
}

const TRANSCRIPT: TranscriptLine[] = [
  { time: 0,  speaker: 'customer', text: "Hi, I placed an order last week and it still hasn't arrived. Can you check?" },
  { time: 6,  speaker: 'agent',    text: "Of course! Could you share your AWB or order number so I can look into this for you?" },
  { time: 13, speaker: 'customer', text: "Sure, it's AWB1001." },
  { time: 17, speaker: 'agent',    text: "I can see your shipment AWB1001. It's currently at our Delhi hub and was delayed due to a weather disruption. Estimated delivery is tomorrow by 6 PM." },
  { time: 30, speaker: 'customer', text: "Can I change the delivery address?" },
  { time: 34, speaker: 'agent',    text: "I can update that for you. Please note that address changes on out-for-delivery shipments may add one business day. Would you still like to proceed?" },
  { time: 44, speaker: 'customer', text: "Yes, please go ahead." },
];

const DURATION = 47;
const AUDIO_SRC = '/audio/pulse-demo-logistics-tracking.mov';

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

const BAR_HEIGHTS = Array.from({ length: 48 }, (_, i) => {
  const seed = ((i * 7 + 13) % 17) / 17;
  return Math.max(15, Math.min(95, 20 + seed * 70 + Math.sin(i * 0.4) * 15));
});

export default function PulseSampleRecordings() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  const [audioError, setAudioError] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
      let idx = -1;
      for (let i = 0; i < TRANSCRIPT.length; i++) {
        if (TRANSCRIPT[i].time <= audio.currentTime) idx = i;
        else break;
      }
      setActiveLineIndex(idx);
    };

    const onEnded = () => { setPlaying(false); setProgress(1); };
    const onError = () => { setAudioError(true); setPlaying(false); };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setAudioError(true));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const activeBars = Math.floor(progress * BAR_HEIGHTS.length);

  return (
    <div className="bg-surface-container-high border border-outline-variant/20">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-outline-variant/10">
        <span className="material-symbols-outlined text-primary-fixed text-xl">local_shipping</span>
        <div className="flex-1 min-w-0">
          <div className="font-headline text-sm font-bold text-white uppercase tracking-tight">
            Shipment Tracking
          </div>
          <div className="font-mono text-[10px] text-outline tracking-widest uppercase">
            Sample call · Logistics
          </div>
        </div>
        <div className="font-mono text-[10px] text-outline tracking-wider">{formatTime(DURATION)}</div>
      </div>

      {/* Player */}
      <div className="px-5 py-4 border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-9 h-9 bg-primary-fixed flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <span className="material-symbols-outlined text-black text-lg">
              {playing ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-[2px] h-8 w-full cursor-pointer" onClick={handleSeek}>
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-colors duration-100"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i < activeBars ? '#D2F000' : 'rgba(210,240,0,0.18)',
                    minHeight: '15%',
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-[10px] text-outline">{formatTime(currentTime)}</span>
              <span className="font-mono text-[10px] text-outline">{formatTime(DURATION)}</span>
            </div>
          </div>
        </div>
        {audioError && (
          <p className="mt-2 font-mono text-[10px] text-red-400 tracking-widest uppercase">Audio unavailable</p>
        )}
      </div>

      {/* Transcript toggle */}
      <div className="px-5 py-3 border-b border-outline-variant/10">
        <button
          onClick={() => setShowTranscript(v => !v)}
          className="flex items-center gap-2 font-mono text-[10px] text-outline tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-sm">{showTranscript ? 'expand_less' : 'expand_more'}</span>
          {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
        </button>
      </div>

      {showTranscript && (
        <div className="px-5 py-4 space-y-2.5">
          {TRANSCRIPT.map((line, i) => (
            <div
              key={i}
              className={`flex gap-3 transition-opacity duration-200 ${
                activeLineIndex === -1 || i <= activeLineIndex ? 'opacity-100' : 'opacity-20'
              }`}
            >
              <span className={`font-mono text-[9px] tracking-widest uppercase shrink-0 mt-0.5 w-12 ${
                line.speaker === 'agent' ? 'text-primary-fixed' : 'text-outline'
              }`}>
                {line.speaker === 'agent' ? 'AI' : 'User'}
              </span>
              <p className={`text-xs leading-relaxed ${
                line.speaker === 'agent' ? 'text-white' : 'text-on-surface-variant'
              }`}>
                {line.text}
              </p>
            </div>
          ))}
        </div>
      )}

      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />
    </div>
  );
}
