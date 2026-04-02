import { RoomContext } from '@livekit/components-react';
import { Room, RoomEvent } from 'livekit-client';
import { useCallback, useEffect, useState } from 'react';
import PulseVoiceAssistant from './PulseVoiceAssistant';

const CONN_DETAILS_URL =
  import.meta.env.VITE_PULSE_API_URL ?? 'http://localhost:3000/api/connection-details';

export default function PulseDemoWidget() {
  const [room] = useState(() => new Room());
  const [industry, setIndustry] = useState('');
  const [language, setLanguage] = useState('');
  const [userName, setUserName] = useState('');

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

  return (
    <div className="pulse-demo-widget" data-lk-theme="default">
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
        />
      </RoomContext.Provider>
    </div>
  );
}

function onDeviceFailure(error: Error) {
  console.error(error);
  alert(
    'Error acquiring microphone permissions. Please grant the necessary permissions in your browser and reload the tab.',
  );
}
