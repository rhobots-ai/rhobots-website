import { Button, Hero } from 'rhobots-website';

/** The canonical page hero: eyebrow, title, subtitle, actions. */
export const Default = () => (
  <Hero
    eyebrow="Platform"
    title="Enterprise AI that works with what you have"
    subtitle="Six products that plug into the systems you already run — no rip-and-replace, no migration project, no six-month rollout."
    actions={
      <>
        <Button variant="primary">Request a demo</Button>
        <Button variant="secondary">Read the docs</Button>
      </>
    }
  />
);

/** Centered variant, for landing and campaign pages. */
export const Centered = () => (
  <Hero
    align="center"
    eyebrow="Case studies"
    title="What teams ship with Rhobots"
    subtitle="Deployments in insurance, logistics and financial services."
  />
);

/** With a right-hand media column the hero becomes two columns. */
export const WithMedia = () => (
  <Hero
    eyebrow="Extract"
    title="Documents in, structured records out"
    subtitle="Validated against your own schema, with a human in the loop where it matters."
    actions={<Button>Request a demo</Button>}
    media={
      <div className="aspect-[4/3] w-full border border-outline-variant bg-surface-container p-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-outline">Preview</p>
      </div>
    }
  />
);
