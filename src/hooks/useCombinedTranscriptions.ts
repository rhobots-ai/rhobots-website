import { useTrackTranscription, useVoiceAssistant } from '@livekit/components-react';
import { useMemo } from 'react';
import useLocalMicTrack from './useLocalMicTrack';

export default function useCombinedTranscriptions() {
  const { agentTranscriptions } = useVoiceAssistant();

  const micTrackRef = useLocalMicTrack();
  const { segments: userTranscriptions } = useTrackTranscription(micTrackRef);

  const combinedTranscriptions = useMemo(() => {
    return [
      ...agentTranscriptions.map((val) => ({ ...val, role: 'assistant' as const })),
      ...userTranscriptions.map((val) => ({ ...val, role: 'user' as const })),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
  }, [agentTranscriptions, userTranscriptions]);

  return combinedTranscriptions;
}
