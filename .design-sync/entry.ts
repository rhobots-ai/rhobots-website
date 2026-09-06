// design-sync bundle entry.
// The repo is an app, not a library: every component is a default export, so
// a synthesized `export * from …` entry would pick up none of them. This file
// is the named-export surface the converter bundles.
import { createElement, type ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RoomContext } from '@livekit/components-react';
import { Room } from 'livekit-client';

const previewRoom = new Room();

// Re-exported so preview cards can build routes against the SAME react-router
// instance the bundled components read from — a separately bundled copy would
// give <Outlet/> a different context and render nothing.
export { Routes, Route } from 'react-router-dom';

// Preview cards are screenshotted within a few hundred ms of mount, before any
// framer-motion enter animation has run — every motion element would capture at
// its `initial` opacity of 0. Exported so a preview can opt the CARD out of
// animation; the shipped components animate normally in real designs.
export { MotionGlobalConfig } from 'framer-motion';

// The light-redesign primitives — the reusable vocabulary the site is now
// built from. These carry the design language (tone/variant/size axes), so the
// design agent should compose with these rather than reinventing them.
export { default as Button } from '../src/components/ui/Button';
export { default as Card } from '../src/components/ui/Card';
export { default as Eyebrow } from '../src/components/ui/Eyebrow';
export { default as Heading } from '../src/components/ui/Heading';
export { default as Hero } from '../src/components/ui/Hero';
export { default as Section } from '../src/components/ui/Section';

export { default as Layout } from '../src/components/layout/Layout';
export { default as NavbarLanding } from '../src/components/layout/NavbarLanding';
export { default as FooterLanding } from '../src/components/layout/FooterLanding';

export { default as PulseAgentOrb } from '../src/components/pulse/PulseAgentOrb';
export { default as PulseDemoWidget, PulseUseCases } from '../src/components/pulse/PulseDemoWidget';
export { default as PulseSampleRecordings } from '../src/components/pulse/PulseSampleRecordings';
export { default as PulseTranscriptionView } from '../src/components/pulse/PulseTranscriptionView';
export { default as PulseVoiceAssistant } from '../src/components/pulse/PulseVoiceAssistant';
export { default as ConversationDemo } from '../src/components/pulse/ConversationDemo';

/**
 * Preview-only wrapper. Two contexts every card needs:
 *  · react-router — the layout components render <Link>/<Outlet>.
 *  · LiveKit RoomContext — the Pulse voice components call useVoiceAssistant(),
 *    which throws outside a room. A never-connected Room puts them in their
 *    'disconnected' state, which is the state a static preview should show.
 */
export function PreviewProvider({ children }: { children?: ReactNode }) {
  return createElement(MemoryRouter, null, createElement(RoomContext.Provider, { value: previewRoom }, children));
}
