// Tailwind config used ONLY to compile the design-system stylesheet.
//
// The site's own build purges to the classes the site happens to use, which is
// wrong for a design system: the design agent composes new layouts, so any
// utility it writes must already exist in the shipped CSS. This config reuses the
// repo's real theme (single source of truth for the tokens) and safelists a broad,
// generic utility surface on top.
import base from '../tailwind.config.js';

const colors = [
  ...Object.keys(base.theme.extend.colors),
  'white',
  'black',
  'transparent',
  'current',
];
const opacities = ['', '/5', '/10', '/20', '/30', '/40', '/50', '/60', '/70', '/80', '/90'];
const colorPrefixes = ['bg', 'text', 'border'];
const plainColorPrefixes = ['ring', 'from', 'to', 'via', 'fill', 'stroke', 'outline', 'decoration', 'divide', 'placeholder', 'accent', 'caret', 'shadow'];

const spacing = [
  '0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '56', '64', '72', '80', '96',
];
const spacePrefixes = [
  'p', 'px', 'py', 'pt', 'pb', 'pl', 'pr',
  'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
  'gap', 'gap-x', 'gap-y', 'space-x', 'space-y',
  'top', 'bottom', 'left', 'right', 'inset', 'inset-x', 'inset-y',
];
const sizes = [...spacing, 'auto', 'full', 'screen', 'min', 'max', 'fit', '1/2', '1/3', '2/3', '1/4', '3/4'];

const fixed = `
  block inline-block inline flex inline-flex grid inline-grid hidden contents flow-root table
  flex-row flex-row-reverse flex-col flex-col-reverse flex-wrap flex-nowrap flex-1 flex-auto flex-initial flex-none
  grow grow-0 shrink shrink-0 basis-0 basis-full basis-1/2 basis-1/3
  items-start items-center items-end items-baseline items-stretch
  justify-start justify-center justify-end justify-between justify-around justify-evenly
  self-start self-center self-end self-stretch content-center content-between place-items-center place-content-center
  grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-12 grid-flow-row grid-flow-col
  col-span-1 col-span-2 col-span-3 col-span-4 col-span-6 col-span-full row-span-1 row-span-2 row-span-3
  static relative absolute fixed sticky isolate
  z-0 z-10 z-20 z-30 z-40 z-50 z-auto
  overflow-hidden overflow-auto overflow-x-auto overflow-y-auto overflow-visible overflow-scroll
  text-left text-center text-right text-justify align-top align-middle align-bottom
  text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl
  text-[10px] text-[11px] text-[13px]
  font-thin font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
  font-headline font-body font-label font-mono font-sans font-serif
  italic not-italic uppercase lowercase capitalize normal-case underline line-through no-underline
  tracking-tighter tracking-tight tracking-normal tracking-wide tracking-wider tracking-widest
  leading-none leading-tight leading-snug leading-normal leading-relaxed leading-loose
  truncate whitespace-nowrap whitespace-pre-line break-words break-all
  border border-0 border-2 border-4 border-8 border-t border-b border-l border-r
  border-t-2 border-b-2 border-l-2 border-r-2 border-solid border-dashed border-dotted border-none
  rounded-none rounded rounded-sm rounded-md rounded-lg rounded-xl rounded-2xl rounded-3xl rounded-full
  shadow-none shadow-sm shadow shadow-md shadow-lg shadow-xl shadow-2xl shadow-inner
  opacity-0 opacity-5 opacity-10 opacity-20 opacity-30 opacity-40 opacity-50 opacity-60 opacity-70 opacity-80 opacity-90 opacity-100
  cursor-pointer cursor-default cursor-not-allowed pointer-events-none pointer-events-auto select-none
  transition transition-all transition-colors transition-opacity transition-transform
  duration-75 duration-100 duration-150 duration-200 duration-300 duration-500 duration-700 duration-1000
  ease-linear ease-in ease-out ease-in-out delay-100 delay-150 delay-300
  animate-none animate-spin animate-ping animate-pulse animate-bounce animate-fade-in
  scale-95 scale-100 scale-105 scale-110 rotate-45 rotate-90 rotate-180 -rotate-45 translate-x-full -translate-x-full translate-y-full -translate-y-full
  object-cover object-contain object-center aspect-square aspect-video
  backdrop-blur backdrop-blur-sm backdrop-blur-md blur blur-sm blur-md blur-lg blur-xl
  bg-gradient-to-t bg-gradient-to-b bg-gradient-to-l bg-gradient-to-r bg-gradient-to-br bg-gradient-to-tr
  bg-none bg-cover bg-contain bg-center bg-no-repeat mix-blend-screen mix-blend-overlay
  container mx-auto list-none list-disc uppercase w-full h-full min-h-screen
  cyber-grid grid-substrate industrial-border scanline scanline-animated glow-bleed blink-cursor
  material-symbols-outlined pulse-spinner pulse-demo-widget
  pulse-industry-option pulse-industry-option-selected pulse-language-option pulse-language-option-selected
  pulse-name-input pulse-join-button
  logo-container logo-wrapper logo-img logo-glow logo-ring logo-ring-2
  logo-idle logo-idle-glow logo-idle-ring logo-listening logo-listening-glow logo-listening-ring
  logo-thinking logo-thinking-glow logo-thinking-ring logo-speaking logo-speaking-glow logo-speaking-ring
`
  .split(/\s+/)
  .filter(Boolean);

// Variants are assigned per group rather than globally — a full variant matrix
// over every colour × opacity combination triples the stylesheet for rules
// nothing will use.
const groups = [
  [fixed, ['sm', 'md', 'lg', 'xl', 'hover', 'focus', 'active', 'disabled', 'group-hover']],
  [colors.flatMap((c) => plainColorPrefixes.map((p) => `${p}-${c}`)), ['hover', 'focus', 'active', 'disabled']],
  [
    colors.flatMap((c) => colorPrefixes.flatMap((p) => opacities.map((o) => `${p}-${c}${o}`))),
    ['hover', 'group-hover'],
  ],
  [spacePrefixes.flatMap((p) => spacing.map((s) => `${p}-${s}`)), ['sm', 'md', 'lg']],
  [
    [
      ...['w', 'h', 'min-w', 'min-h', 'max-w', 'max-h'].flatMap((p) => sizes.map((s) => `${p}-${s}`)),
      ...['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'prose', 'none'].map((s) => `max-w-${s}`),
    ],
    ['sm', 'md', 'lg'],
  ],
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
const seen = new Set();
const safelist = [];
for (const [names, variants] of groups) {
  for (const n of names) {
    if (seen.has(n)) continue;
    seen.add(n);
    safelist.push({ pattern: new RegExp(`^${esc(n)}$`), variants });
  }
}

export default { ...base, safelist };
