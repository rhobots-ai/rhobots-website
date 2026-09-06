import { Card, Heading } from 'rhobots-website';

/** The two tones: base sits on the page, muted on a tinted container. */
export const Tones = () => (
  <div className="grid gap-6 bg-background p-8 md:grid-cols-2">
    <Card tone="base">
      <Heading level={3}>Extract</Heading>
      <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
        Turn unstructured documents into structured, validated records.
      </p>
    </Card>
    <Card tone="muted">
      <Heading level={3}>Operator</Heading>
      <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
        Runs the repetitive back-office work your team does by hand today.
      </p>
    </Card>
  </div>
);

/** Padding scale. */
export const Padding = () => (
  <div className="grid gap-6 bg-background p-8 md:grid-cols-3">
    <Card padding="sm">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Padding sm</p>
    </Card>
    <Card padding="md">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Padding md</p>
    </Card>
    <Card padding="lg">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Padding lg</p>
    </Card>
  </div>
);

/** With `to`, the whole card becomes a link with a hover affordance. */
export const AsLink = () => (
  <div className="max-w-md bg-background p-8">
    <Card to="/case-studies/insurance">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Case study</p>
      <Heading level={3} className="mt-3">
        Insurance claims, 4x faster
      </Heading>
    </Card>
  </div>
);
