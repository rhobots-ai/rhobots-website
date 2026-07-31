# Rhobots — how to build with this system

Dark cyber-industrial marketing UI. Near-black surfaces, one electric-lime accent, **square corners everywhere**, condensed uppercase headlines, monospace micro-labels.

## Setup

No provider is required for styling — the design language lives entirely in the stylesheet, so `styles.css` (and its `@import` closure) is all a page needs. Two components do need context:

- `Layout`, `NavbarLanding`, `FooterLanding` render react-router `<Link>`/`<Outlet>` — mount them inside a router. `Routes` and `Route` are exported from the bundle for exactly this; use those, not a separately imported copy of react-router, or `<Outlet/>` gets a different context and renders nothing.
- The Pulse voice components (`PulseVoiceAssistant`, `PulseAgentOrb`, `PulseTranscriptionView`) read a LiveKit `RoomContext`. Outside a room they render their pre-call / idle state, which is the correct static appearance.

```jsx
<Routes>
  <Route element={<Layout />}>
    <Route index element={
      <section className="cyber-grid bg-background px-8 py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary-fixed">Platform</p>
        <h1 className="font-headline text-5xl font-black uppercase leading-none tracking-tighter text-white">
          Production-grade intelligence, zero disruption
        </h1>
        <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-white/50">
          Six products that plug into the systems you already run.
        </p>
      </section>
    } />
  </Route>
</Routes>
```

## The styling idiom: Tailwind with a custom MD3 token scale

Style with Tailwind utility classes. Do **not** invent hex values — the palette is a fixed MD3 token set exposed as color names. Border radius is `0px` by default (`rounded-full` is the only round thing; it exists for dots and rings).

| Family | Use these names |
|---|---|
| Page / surface backgrounds | `bg-background` (`#131313`), `bg-surface`, `bg-surface-dim`, `bg-surface-bright`, `bg-surface-container-lowest`, `bg-surface-container-low`, `bg-surface-container`, `bg-surface-container-high`, `bg-surface-container-highest`, `bg-surface-variant` |
| Accent (the lime) | `bg-primary-fixed` / `text-primary-fixed` (`#D2F000`), `bg-primary-container`, `primary-fixed-dim`, `surface-tint`, `inverse-primary`, `on-primary`, `on-primary-fixed`, `on-primary-fixed-variant`, `on-primary-container` |
| Text | `text-on-surface`, `text-on-surface-variant`, `text-on-background`, `text-white`, plus opacity variants the site leans on: `text-white/70`, `text-white/50`, `text-white/40` |
| Secondary / tertiary | `secondary`, `secondary-container`, `secondary-fixed`, `secondary-fixed-dim`, `on-secondary*`, `tertiary`, `tertiary-container`, `tertiary-fixed`, `tertiary-fixed-dim`, `on-tertiary*` |
| Lines | `border-outline`, `border-outline-variant`, and the site's own hairlines `border-white/5`, `border-white/10` |
| Error | `error`, `error-container`, `on-error`, `on-error-container` |
| Type | `font-headline` (Public Sans — condensed black uppercase headings), `font-body` (Inter — prose), `font-label` (Space Grotesk), `font-mono` (JetBrains Mono — all micro-labels) |
| Motion | `animate-fade-in` (the house 0.4s enter) |

House typographic habits, worth copying: headlines are `font-headline font-black uppercase tracking-tighter`; every small label is `font-mono text-[10px] uppercase tracking-widest`, usually in `text-primary-fixed` or `text-white/40`.

## Custom effect classes (defined in the stylesheet, not Tailwind)

`cyber-grid` (dotted landing background) · `grid-substrate` (finer product-page grid) · `industrial-border` (1px border with lime corner ticks) · `scanline` / `scanline-animated` · `glow-bleed` · `blink-cursor` · `pulse-spinner` · the voice-orb set `logo-container` / `logo-wrapper` / `logo-glow` / `logo-ring` / `logo-ring-2` with state modifiers `logo-idle|listening|thinking|speaking` (+ `-glow` / `-ring` suffixes) · the Pulse form skins `pulse-industry-option`, `pulse-language-option`, `pulse-name-input`, `pulse-join-button`, `pulse-demo-widget`.

Icons are Google **Material Symbols Outlined** — `<span className="material-symbols-outlined">insights</span>`.

## Where the truth lives

- `_ds/<folder>/styles.css` and its imports — every token, font face and effect class above, compiled from the site's Tailwind build.
- `components/<group>/<Name>/<Name>.prompt.md` and `<Name>.d.ts` — per-component API and usage.

## One caveat about assets

`NavbarLanding`, `Layout` and `PulseAgentOrb` load the logo from the absolute path `/icon.svg`, and `PulseSampleRecordings` loads `/audio/pulse-demo-logistics-tracking.mov`. Those are served by the Rhobots site, not by this design system, so in a design they fall back to alt text / an "audio unavailable" notice. Supply your own asset at those paths, or place your own `<img>` where the mark should go.
