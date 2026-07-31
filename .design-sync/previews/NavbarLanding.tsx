import { NavbarLanding } from 'rhobots-website';

/** The site header as it appears on every page: wordmark, Platform tab, Products dropdown, Request Demo CTA. */
export const Default = () => <NavbarLanding />;

/** On a page body — the navbar is sticky and sits above the cyber-grid background. */
export const OverPageBackground = () => (
  <div className="bg-background cyber-grid min-h-[220px]">
    <NavbarLanding />
    <div className="px-8 py-16">
      <h1 className="font-headline text-4xl font-black uppercase tracking-tighter text-white">
        Enterprise AI that works
        <br />
        with what you have
      </h1>
    </div>
  </div>
);
