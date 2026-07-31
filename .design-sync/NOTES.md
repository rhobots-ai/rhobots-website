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

- Node 24 (`.nvmrc` says `v24`). Both `package-lock.json` and `pnpm-lock.yaml` exist; `node_modules` was already installed and was used as-is.
- Playwright: chromium builds 1187/1208/1234 were already in `~/Library/Caches/ms-playwright`. **playwright@1.58.2 pins chromium 1208**, so that exact version was installed into `.ds-sync/` with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`. Don't install a different playwright — it will download 200MB or fail with "Executable doesn't exist".

## CSS: why there's a separate Tailwind config

The site's own compiled CSS is **purged to the classes the site happens to use**. That is wrong for a design system — the design agent composes new layouts, so `bg-surface-dim`, `px-24`, `md:grid-cols-3` etc. must already exist in the shipped stylesheet.

`.design-sync/tailwind.designsync.config.js` reuses the repo's real theme (single source of truth for tokens) and safelists a broad generic utility surface: the full MD3 colour scale × bg/text/border × opacity steps, the spacing/size scales, and a fixed list of layout/type/effect utilities, with per-group variants. Result: **~1.4MB `ds.css`** (was 76KB purged). Variants are assigned per group on purpose — a global variant matrix over every colour × opacity tripled the file for rules nothing will use.

`build-css.sh` also prepends the two Google Fonts `@import`s from `index.html`, so `[FONT_REMOTE]` is expected and correct — the brand families load from fonts.googleapis.com at runtime, nothing ships in `fonts/`.

## Preview gotchas discovered this run (all fixed in `.design-sync/previews/`)

- **framer-motion**: preview cards are screenshotted a few hundred ms after mount, before any enter animation runs, so every `motion.*` element captured at its `initial` opacity of 0 — `PulseVoiceAssistant` and `PulseDemoWidget` came out as blank dark boxes and `PulseAgentOrb` lost its status label. Fix: `MotionGlobalConfig.skipAnimations = true` at the top of those preview files (card-local; shipped components animate normally).
- **`ConversationDemo` is timer-driven** (800ms after mount, then 600ms, then per-step delays, ~11s total) so it always captured "WAITING FOR CONVERSATION…". Fix: the preview clamps `window.setTimeout` to 1ms for the card.
- **LiveKit components** (`PulseAgentOrb`, `PulseTranscriptionView`, `PulseVoiceAssistant`) throw outside a room. `PreviewProvider` supplies a never-connected `Room`, which puts them in their `disconnected`/idle state — the right static appearance. Without it they fell back to the floor card.
- **`Layout` grouping**: its src dir segment is a generic name, so it landed in group `general`. Pinned to `layout` with a frontmatter stub at `.design-sync/docs/Layout.md` via `cfg.docsMap`.
- `cfg.overrides.<Name>.cardMode = "column"` is set for every full-width component (Layout, Navbar, Footer, ConversationDemo, PulseDemoWidget, PulseVoiceAssistant, PulseUseCases) — without it the product's grid view crops them.

## Known render warns

- `[FONT_REMOTE]` on Public Sans / Inter / Space Grotesk / JetBrains Mono / Cambria — expected, see CSS section. Not a new warn.
- `[DOCS_UNMAPPED]` for 9 of 10 components — the repo has no per-component docs, so `.prompt.md` is synthesized from the `.d.ts` + the authored preview. Informational.

## Accepted, unresolved

- **Site-root assets don't exist in the design project.** `NavbarLanding`, `Layout` and `PulseAgentOrb` load `/icon.svg`; `PulseSampleRecordings` loads `/audio/pulse-demo-logistics-tracking.mov`. Both are absolute paths served by the Rhobots site. In the design project the logo falls back to alt text and the player shows "AUDIO UNAVAILABLE". Documented in `conventions.md`. Two possible fixes for a future run: (a) change the source components to `import` the SVG so it inlines into the bundle — the proper fix; (b) widen the upload plan to include root `icon.svg` / `audio/`, which needs a fresh `finalize_plan` approval and only works if the app serves project files from the URL root.
- **`PulseTranscriptionView` has no populated state.** Its lines stream from LiveKit transcription tracks; nothing short of a live call fills it. Its card is deliberately the pre-call empty surface, framed with a header so it reads as a transcript pane.

## Re-sync risks

- `.design-sync/entry.ts` is a **hand-maintained export list**. Add a component to `src/components/` and it will NOT appear until it is added both there and to `cfg.componentSrcMap`. There is no discovery to fall back on — `exportedNames` finds 0 (no `.d.ts` tree).
- The safelist in `tailwind.designsync.config.js` is curated, not exhaustive. If a design comes out unstyled for a specific utility, that utility is missing from the safelist — add it there and re-run `build-css.sh`.
- `ConversationDemo`'s preview hard-codes a copy of the component's own default script (with 10ms delays). If the real `DEMO_STEPS` in the source change, the card silently shows the old copy.
- `PulseVoiceAssistant`'s preview passes its full required prop set literally; a prop rename in the source breaks that card only (TypeScript is not checked at preview-compile time — a bad preview just drops the component to the floor card).
- The bundle inlines 9 npm packages including livekit-client and framer-motion (1.4MB JS). A major bump in either is the thing most likely to change render output.
