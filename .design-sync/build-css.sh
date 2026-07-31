#!/usr/bin/env bash
# Compiles the site's Tailwind stylesheet into a single stable file for design-sync.
# The repo ships no library CSS — dist/assets/index-<hash>.css is the only compiled
# output and its name changes every build, so cfg.cssEntry points here instead.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p .design-sync/assets
FONTS="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&family=Public+Sans:wght@700;800;900&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap"
SYMBOLS="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
npx tailwindcss -c .design-sync/tailwind.designsync.config.js -i src/index.css -o .design-sync/assets/.tw.css --postcss postcss.config.js
{
  printf "@import url('%s');\n" "$FONTS"
  printf "@import url('%s');\n" "$SYMBOLS"
  cat .design-sync/assets/.tw.css
} > .design-sync/assets/ds.css
rm -f .design-sync/assets/.tw.css
echo "wrote .design-sync/assets/ds.css ($(wc -c < .design-sync/assets/ds.css) bytes)"
