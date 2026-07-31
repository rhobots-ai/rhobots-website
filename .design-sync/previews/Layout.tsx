import { Layout, Route, Routes } from 'rhobots-website';

/** The page shell every route renders inside: navbar, routed page body, footer. */
export const Default = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        index
        element={
          <div className="cyber-grid bg-background px-8 py-20">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#D2F000]">Platform</p>
            <h1 className="max-w-3xl font-headline text-5xl font-black uppercase leading-none tracking-tighter text-white">
              Production-grade intelligence, zero disruption
            </h1>
            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-white/50">
              Six products that plug into the systems you already run — no rip-and-replace, no migration
              project, no six-month rollout.
            </p>
          </div>
        }
      />
    </Route>
  </Routes>
);
