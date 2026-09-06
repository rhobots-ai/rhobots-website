import { Layout, Route, Routes } from 'rhobots-website';

/** The page shell every route renders inside: navbar, routed page body, footer. */
export const Default = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        index
        element={
          <section className="bg-background py-20 md:py-32">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-outline">Platform</p>
              <h1 className="max-w-3xl font-headline text-4xl font-semibold leading-[1.1] text-on-surface md:text-5xl">
                Production-grade intelligence, zero disruption
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
                Six products that plug into the systems you already run — no rip-and-replace, no migration
                project, no six-month rollout.
              </p>
            </div>
          </section>
        }
      />
    </Route>
  </Routes>
);
