# design-sync notes — rhobots-website

## What this repo is, from the converter's point of view

- It is an **app, not a library**. No `main`/`module`/`exports`, no built `dist/` library entry (`dist/` is the built *site*), no Storybook. `shape: "package"` with a hand-written entry.
- Every component is a **default export**, so the converter's synthesized `export * from …` entry would have found zero components. `.design-sync/entry.ts` is the named-export surface; it is passed with `--entry` and is part of the sync inputs (committed).
- `entry.ts` also exports three preview-only things: `PreviewProvider` (react-router `MemoryRouter` + LiveKit `RoomContext`), `Routes`/`Route` (so preview cards build routes against the *same* router instance the bundle reads — a separately bundled copy gives `<Outlet/>` a different context and renders nothing), and `MotionGlobalConfig`.

## The build command

```sh
bash .design-sync/build-css.sh    # cfg.buildCmd — regenerates .design-sync/assets/ds.css
node .ds-sync/package-build.mjs --config .design-sync/config.json \
  --node-modules ./node_modules --entry ./.design-sync/entry.ts --out ./ds-bundle
node .ds-sync/package-validate.mjs ./ds-bundle
```

- Node 24 (`.nvmrc` says `v24`). Both `package-lock.json` and `pnpm-lock.yaml` exist. **Use `npm ci`** — `package-lock.json` is the maintained one (it tracks the current dep set; `pnpm-lock.yaml` is stale, from March). On a fresh clone `node_modules` is absent and `build-css.sh` fails with `npm error could not determine executable to run` (that is just missing tailwind, not a config problem) — run `npm ci` first.
- Playwright: chromium builds 1187/1208/1234 were already in `~/Library/Caches/ms-playwright`. **playwright@1.58.2 pins chromium 1208**, so that exact version was installed into `.ds-sync/` with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`. Don't install a different playwright — it will download 200MB or fail with "Executable doesn't exist".

## The light redesign (2026-09-06, main @ 51ba3b4)

The site was rebuilt as a **light enterprise theme**. This invalidated a lot of the dark-era notes below — read this section first.

- `background` is now `#ffffff`, `on-surface` `#131313`, `primary` a near-black button surface, and the accent is olive `primary-fixed` `#4c5a00`. **`#D2F000` no longer exists anywhere in the theme.**
- `cyber-grid`, `grid-substrate`, `industrial-border`, `scanline`/`scanline-animated` and `glow-bleed` **were deleted**; `src/index.css` says so explicitly ("Do not reintroduce them"). The voice-orb classes, Pulse form skins, `blink-cursor`, `pulse-spinner` and `animate-fade-in` all survive.
- Headings are **sentence case, semibold** — `Heading`'s docstring bans uppercase/italic/heavy/negative-tracking. The old "font-black uppercase tracking-tighter" habit is gone.
- **The `src/components/ui/` primitives (`Button`, `Card`, `Eyebrow`, `Heading`, `Hero`, `Section`) are now synced**, in group `primitives` (pinned via `cfg.docsMap` stubs in `.design-sync/docs/`, because `ui` is a generic dir name that otherwise lands in `general`).
- **Gotcha worth keeping:** `Heading` hardcodes `text-on-surface`, and that rule sits LATER in the compiled stylesheet than `text-inverse-on-surface` — so on `Section tone="inverse"` a plain `className="text-inverse-on-surface"` loses and the heading renders black-on-black. It needs the important modifier: `!text-inverse-on-surface`. The site never uses `tone="inverse"` today, so this is latent, but the design agent will hit it.
- `NavbarLanding`/`FooterLanding` now render a **text wordmark**, so the old broken-`/icon.svg` caveat no longer applies to them. It still applies to `PulseAgentOrb`.
- `.design-sync/tailwind.designsync.config.js` now also scans `.design-sync/previews/**/*.tsx`. Without it, an arbitrary value used only in a preview (`aspect-[4/3]`, `min-h-[220px]`) is never generated and the card renders unstyled while the site looks fine. **Re-run `build-css.sh` after adding a new arbitrary class to a preview** — `preview-rebuild.mjs` does not regenerate the stylesheet.

## CSS: why there's a separate Tailwind config

The site's own compiled CSS is **purged to the classes the site happens to use**. That is wrong for a design system — the design agent composes new layouts, so `bg-surface-dim`, `px-24`, `md:grid-cols-3` etc. must already exist in the shipped stylesheet.

`.design-sync/tailwind.designsync.config.js` reuses the repo's real theme (single source of truth for tokens) and safelists a broad generic utility surface: the full MD3 colour scale × bg/text/border × opacity steps, the spacing/size scales, and a fixed list of layout/type/effect utilities, with per-group variants. Result: **~1.4MB `ds.css`** (was 76KB purged). It also scans `.design-sync/previews/**/*.tsx` — see the light-redesign section above. Variants are assigned per group on purpose — a global variant matrix over every colour × opacity tripled the file for rules nothing will use.

`build-css.sh` also prepends the two Google Fonts `@import`s from `index.html`, so `[FONT_REMOTE]` is expected and correct — the brand families load from fonts.googleapis.com at runtime, nothing ships in `fonts/`.

## Preview gotchas discovered this run (all fixed in `.design-sync/previews/`)

- **framer-motion**: preview cards are screenshotted a few hundred ms after mount, before any enter animation runs, so every `motion.*` element captured at its `initial` opacity of 0 — `PulseVoiceAssistant` and `PulseDemoWidget` came out as blank dark boxes and `PulseAgentOrb` lost its status label. Fix: `MotionGlobalConfig.skipAnimations = true` at the top of those preview files (card-local; shipped components animate normally).
- **`ConversationDemo` is timer-driven** (800ms after mount, then 600ms, then per-step delays, ~11s total) so it always captured "WAITING FOR CONVERSATION…". Fix: the preview clamps `window.setTimeout` to 1ms for the card.
- **LiveKit components** (`PulseAgentOrb`, `PulseTranscriptionView`, `PulseVoiceAssistant`) throw outside a room. `PreviewProvider` supplies a never-connected `Room`, which puts them in their `disconnected`/idle state — the right static appearance. Without it they fell back to the floor card.
- **`Layout` grouping**: its src dir segment is a generic name, so it landed in group `general`. Pinned to `layout` with a frontmatter stub at `.design-sync/docs/Layout.md` via `cfg.docsMap`.
- `cfg.overrides.<Name>.cardMode = "column"` is set for every full-width component (Navbar, Footer, ConversationDemo, PulseDemoWidget, PulseVoiceAssistant, PulseUseCases) — without it the product's grid view crops them.
- **`Layout` is `cardMode: "single"`, not `column`** (with `primaryStory: "Default"`). Its fixed-position navbar is a portal/fixed escape that positions content outside any grid cell, which `column` cannot fix — validate raises `[GRID_OVERFLOW] … (fixed/portal)` and prescribes `single`. Applied 2026-09-06. Do not "restore" it to `column`.

## Known render warns

- `[FONT_REMOTE]` on Public Sans / Inter / Space Grotesk / JetBrains Mono / Cambria — expected, see CSS section. Not a new warn.
- `[DOCS_UNMAPPED]` for 9 of 10 components — the repo has no per-component docs, so `.prompt.md` is synthesized from the `.d.ts` + the authored preview. Informational.

## Accepted, unresolved

- **Site-root assets don't exist in the design project.** `NavbarLanding`, `Layout` and `PulseAgentOrb` load `/icon.svg`; `PulseSampleRecordings` loads `/audio/pulse-demo-logistics-tracking.mov`. Both are absolute paths served by the Rhobots site. In the design project the logo falls back to alt text and the player shows "AUDIO UNAVAILABLE". Documented in `conventions.md`. Two possible fixes for a future run: (a) change the source components to `import` the SVG so it inlines into the bundle — the proper fix; (b) widen the upload plan to include root `icon.svg` / `audio/`, which needs a fresh `finalize_plan` approval and only works if the app serves project files from the URL root.
- **`PulseTranscriptionView` has no populated state.** Its lines stream from LiveKit transcription tracks; nothing short of a live call fills it. Its card is deliberately the pre-call empty surface, framed with a header so it reads as a transcript pane.

## Re-sync history

- **2026-09-06, second pass — the light redesign.** The first pass this day synced the DARK theme, because the working branch (`design-sync-setup`) predated `51ba3b4 Rebuild site as light enterprise theme (#7)` on main. **Lesson: check `git log HEAD..origin/main` for theme/source drift before trusting an "all unchanged" verdict.** Note the anchor legitimately reported all 10 `unchanged` even after the theme flip — sourceKeys track the component CONTRACT (`.jsx` stub, `.d.ts`, `.prompt.md`) and authored previews, and styling churn deliberately never invalidates grades. A whole-theme inversion is exactly the "major bump / suspicion" case that needs `package-capture.mjs --force`, not a diff you can read off the verdict.
- Two authored previews (`Layout`, `NavbarLanding`) hardcoded `text-white` and went invisible on the new white background. Both rewritten against the site's real light idiom. **Any preview that hardcodes a colour instead of a token is a theme-flip liability.**
- **2026-09-06 first pass (dark).** Fresh clone (no `node_modules`). All 10 components came back `unchanged` against the project's `_ds_sync.json` anchor — zero re-grading needed; only `Layout` re-rendered, from the `cardMode` change below, and its canary sheet was confirmed by eye. `conventions.md` was re-validated name-by-name against the fresh build (every colour/effect class, the four `font-*` families, all component names, and the bundle-only `Routes`/`Route`/`PreviewProvider`/`MotionGlobalConfig` exports): **no drift, file left untouched.** The project had been missing `guidelines/` — the full-writes upload added it.

## Re-sync risks

- `.design-sync/entry.ts` is a **hand-maintained export list**. Add a component to `src/components/` and it will NOT appear until it is added both there and to `cfg.componentSrcMap`. There is no discovery to fall back on — `exportedNames` finds 0 (no `.d.ts` tree).
- The safelist in `tailwind.designsync.config.js` is curated, not exhaustive. If a design comes out unstyled for a specific utility, that utility is missing from the safelist — add it there and re-run `build-css.sh`.
- `ConversationDemo`'s preview hard-codes a copy of the component's own default script (with 10ms delays). If the real `DEMO_STEPS` in the source change, the card silently shows the old copy.
- `PulseVoiceAssistant`'s preview passes its full required prop set literally; a prop rename in the source breaks that card only (TypeScript is not checked at preview-compile time — a bad preview just drops the component to the floor card).
- The bundle inlines 9 npm packages including livekit-client and framer-motion (1.4MB JS). A major bump in either is the thing most likely to change render output.
