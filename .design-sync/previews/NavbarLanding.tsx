import { NavbarLanding } from 'rhobots-website';

/** The site header as it appears on every page: wordmark, Platform tab, Products dropdown, Request Demo CTA. */
export const Default = () => <NavbarLanding />;

/** Sticky over a page body — the header sits on the white page surface. */
export const OverPageBackground = () => (
  <div className="min-h-[220px] bg-background">
    <NavbarLanding />
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <h1 className="font-headline text-4xl font-semibold leading-[1.1] text-on-surface">
        Enterprise AI that works
        <br />
        with what you have
      </h1>
    </div>
  </div>
);
