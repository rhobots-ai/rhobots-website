import { Card, Heading, Section } from 'rhobots-website';

/** The three tones — base, muted, and the inverse (dark) band. */
export const Tones = () => (
  <div>
    <Section tone="base">
      <Heading level={2}>Base — the default page surface</Heading>
    </Section>
    <Section tone="muted">
      <Heading level={2}>Muted — a tinted band to separate sections</Heading>
    </Section>
    <Section tone="inverse">
      {/* Heading hardcodes text-on-surface, which sits later in the stylesheet
          than text-inverse-on-surface — so on the inverse band the colour must be
          forced with `!`, or the heading renders black-on-black. */}
      <Heading level={2} className="!text-inverse-on-surface">
        Inverse — the dark band, used sparingly
      </Heading>
    </Section>
  </div>
);

/** `divided` draws a hairline rule along the top edge. */
export const Divided = () => (
  <div>
    <Section tone="base">
      <Heading level={3}>Preceding section</Heading>
    </Section>
    <Section tone="base" divided>
      <Heading level={3}>Divided section</Heading>
    </Section>
  </div>
);

/** Container widths control the measure of the content inside. */
export const Containers = () => (
  <div>
    <Section container="narrow" tone="muted">
      <Card>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Narrow</p>
      </Card>
    </Section>
    <Section container="wide" tone="base">
      <Card>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Wide</p>
      </Card>
    </Section>
  </div>
);
