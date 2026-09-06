import { Eyebrow } from 'rhobots-website';

/** The one place uppercase survives the redesign: a short mono label above a heading. */
export const Tones = () => (
  <div className="flex flex-col gap-6 bg-background p-8">
    <Eyebrow tone="accent">Platform</Eyebrow>
    <Eyebrow tone="muted">Case study</Eyebrow>
  </div>
);

/** Numbered, for stepped or ordered sections. */
export const Numbered = () => (
  <div className="flex flex-col gap-6 bg-background p-8">
    <Eyebrow number="01">Ingest</Eyebrow>
    <Eyebrow number="02">Extract</Eyebrow>
    <Eyebrow number="03">Validate</Eyebrow>
  </div>
);
