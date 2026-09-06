# Rhobots — how to build with this system

Light enterprise UI. White surfaces, near-black text and buttons, one olive accent, **square corners everywhere** (radius is `0px`), sentence-case headings, monospace micro-labels.

## Build from the primitives first

`Section`, `Hero`, `Heading`, `Eyebrow`, `Card` and `Button` carry the design language. Compose these before writing your own markup — a page is normally a stack of `Section`s, each opening with an `Eyebrow` + `Heading`.

```jsx
<Section tone="muted" divided>
  <Eyebrow tone="accent">Platform</Eyebrow>
  <Heading level={2} className="mt-5">Six products, one platform</Heading>
  <div className="mt-10 grid gap-6 md:grid-cols-2">
    <Card tone="base" padding="lg">
      <Heading level={3}>Extract</Heading>
      <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
        Structured, validated records from any document.
      </p>
    </Card>
  </div>
  <Button variant="primary" to="/demo" className="mt-10">Request a demo</Button>
</Section>
```

## Setup

Styling needs no provider — `styles.css` and its `@import` closure is all a page needs. Two contexts matter:

- **Router.** `Layout`, `NavbarLanding`, `FooterLanding`, and any `Button`/`Card` given a `to` prop render react-router `<Link>`/`<Outlet>`. Use the `Routes` and `Route` exported from this bundle, not a separately imported copy of react-router — a second copy gives `<Outlet/>` a different context and renders nothing.
- **LiveKit.** `PulseVoiceAssistant`, `PulseAgentOrb` and `PulseTranscriptionView` read a LiveKit room context. Outside a room they render their pre-call / idle state, which is the correct static appearance.

## The styling idiom: Tailwind with a custom MD3 token scale

Style with Tailwind utilities and **never invent hex values** — the palette is a fixed token set exposed as colour names.

| Family | Use these names |
|---|---|
| Page / surface backgrounds | `bg-background` (`#ffffff`), `bg-surface`, `bg-surface-dim`, `bg-surface-bright`, `bg-surface-container-lowest`, `bg-surface-container-low`, `bg-surface-container`, `bg-surface-container-high`, `bg-surface-container-highest`, `bg-surface-variant` |
| Text | `text-on-surface` (near-black body/headings), `text-on-surface-variant` (secondary copy), `text-on-background`, `text-outline` (micro-labels) |
| Accent (olive) | `text-primary-fixed` / `bg-primary-fixed` (`#4c5a00`), `bg-primary-container`, `text-on-primary-container`, `focus` |
| Buttons / inverse | `bg-primary` (near-black surface) with `text-on-primary`; `bg-inverse-surface` with `text-inverse-on-surface` |
| Lines | `border-outline-variant` (hairlines), `border-outline` |
| Secondary / tertiary / error | `secondary`, `tertiary`, `error` |
| Type | `font-headline` (Public Sans), `font-body` (Inter), `font-label` (Space Grotesk), `font-mono` (JetBrains Mono — all micro-labels) |
| Motion | `animate-fade-in` |

**Headings are sentence case.** No uppercase, italic, heavy weight or negative tracking — the redesign removed them deliberately. Prefer `<Heading>`; hand-rolled headings should read `font-headline text-on-surface font-semibold`.

**Micro-labels** are the one place uppercase survives: `font-mono text-xs uppercase tracking-[0.18em] text-outline` (that is what `Eyebrow` renders).

### Two gotchas

- `Heading` applies `text-on-surface`, which sits later in the stylesheet than `text-inverse-on-surface` and therefore wins over any plain `text-*` you pass. On `Section tone="inverse"` force it: `<Heading className="!text-inverse-on-surface">`.
- The dark-era effect classes `cyber-grid`, `grid-substrate`, `industrial-border`, `scanline`, `glow-bleed` **were deleted**. Do not use them; they resolve to nothing.

## Still available

`blink-cursor`, `pulse-spinner`, the voice-orb set (`logo-container`, `logo-wrapper`, `logo-glow`, `logo-ring`, `logo-ring-2` with `logo-idle|listening|thinking|speaking`), and the Pulse form skins (`pulse-industry-option`, `pulse-language-option`, `pulse-name-input`, `pulse-join-button`, `pulse-demo-widget`). Icons are Google **Material Symbols Outlined**: `<span className="material-symbols-outlined">insights</span>`.

## Where the truth lives

- `_ds/<folder>/styles.css` and its imports — every token, font face and effect class above.
- `components/<group>/<Name>/<Name>.prompt.md` and `<Name>.d.ts` — per-component API and usage.

## One caveat about assets

`PulseAgentOrb` loads a logo from the absolute path `/icon.svg`, and `PulseSampleRecordings` loads `/audio/pulse-demo-logistics-tracking.mov`. Those are served by the Rhobots site, not by this design system, so they fall back to alt text and an "audio unavailable" notice. Supply your own asset at those paths, or place your own `<img>` where the mark should go. (`NavbarLanding` and `FooterLanding` now render a text wordmark and need no asset.)
