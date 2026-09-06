import { Button } from 'rhobots-website';

/** The three variants side by side — primary is the solid near-black CTA. */
export const Variants = () => (
  <div className="flex flex-wrap items-center gap-4 bg-background p-8">
    <Button variant="primary">Request a demo</Button>
    <Button variant="secondary">Read the docs</Button>
    <Button variant="ghost">See case studies</Button>
  </div>
);

/** Three sizes, primary variant. */
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4 bg-background p-8">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

/** Disabled and full-width states. */
export const States = () => (
  <div className="flex max-w-sm flex-col gap-4 bg-background p-8">
    <Button disabled>Unavailable</Button>
    <Button variant="secondary" fullWidth>
      Full width
    </Button>
  </div>
);
