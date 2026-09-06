import { Heading } from 'rhobots-website';

/** The four visual levels. Sentence case, medium weight — never uppercase. */
export const Levels = () => (
  <div className="flex flex-col gap-6 bg-background p-8">
    <Heading level={1}>Enterprise AI that works with what you have</Heading>
    <Heading level={2}>Six products, one platform</Heading>
    <Heading level={3}>Deploy alongside your stack</Heading>
    <Heading level={4}>No rip-and-replace</Heading>
  </div>
);

/** Centered alignment, for centered hero and section headers. */
export const Centered = () => (
  <div className="bg-background p-8">
    <Heading level={2} align="center">
      Built for the systems you already run
    </Heading>
  </div>
);
