# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint TypeScript/React code
npm run lint
```

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **State Management**: Zustand (for solution selection/hover state)
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei, @react-three/postprocessing)
- **Animation**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis
- **Audio**: Howler.js
- **Analytics**: Vercel Analytics

## Architecture Overview

### Routing Structure

The app has three main routes defined in [src/main.tsx](src/main.tsx):
- `/` - Landing page (OnePager layout with hero, solutions, differentiators, CTA)
- `/contact` - Contact form page
- `/mission-control` - Interactive 3D solutions explorer (lazy-loaded for performance)

### Mission Control Page (3D Experience)

The Mission Control page ([src/pages/MissionControlPage.tsx](src/pages/MissionControlPage.tsx)) is the most complex feature, implementing an adaptive 3D experience based on device capabilities.

#### Performance Tiers

The `useDeviceCapabilities` hook ([src/components/mission-control/hooks/useDeviceCapabilities.ts](src/components/mission-control/hooks/useDeviceCapabilities.ts)) determines which experience tier to render:

- **`full`**: High-end desktop - full post-processing effects (bloom, chromatic aberration), high particle counts, antialiasing
- **`reduced`**: Mid-range devices or tablets - lower particle counts, no post-processing, basic rendering
- **`static`**: Mobile/low-power devices - no WebGL, shows `MobileHubFallback` component instead

Detection considers: WebGL support, GPU capabilities, screen width, device memory, mobile detection, and `prefers-reduced-motion`.

#### 3D Scene Structure

The interactive 3D hub is organized as:

1. **Central Core** ([CentralCore.tsx](src/components/mission-control/three/CentralCore.tsx)): The glowing sphere at the center
2. **Solution Nodes** ([SolutionNode.tsx](src/components/mission-control/three/SolutionNode.tsx)): 5 orbiting nodes representing products, each with unique geometry (octahedron, icosahedron, dodecahedron, torus, torusKnot)
3. **Orbital Rig**: Parent group that slowly rotates all solution nodes (rotation stops when a node is selected)
4. **Data Streams** ([DataStreams.tsx](src/components/mission-control/three/DataStreams.tsx)): Animated particles flowing between nodes
5. **Particle Field** ([ParticleField.tsx](src/components/mission-control/three/ParticleField.tsx)): Background ambient particles

#### Solution Data

All solution metadata lives in [src/components/mission-control/utils/solutionsData.ts](src/components/mission-control/utils/solutionsData.ts):
- Product names, descriptions, features
- Color gradients (hex and Tailwind classes)
- Orbital positions (degrees)
- 3D geometry types
- Deep-dive content (stats, use cases)

#### State Management

Solution interaction state is managed via Zustand in [useSolutionStore.ts](src/components/mission-control/hooks/useSolutionStore.ts):
- `selectedId`: Currently selected solution (locked focus)
- `hoveredId`: Currently hovered solution
- Controls camera behavior, UI panels, and orbital rotation

### Component Organization

```
src/
├── components/
│   ├── mission-control/           # 3D experience components
│   │   ├── three/                 # React Three Fiber components
│   │   ├── ui/                    # UI overlays (panels, toggles, indicators)
│   │   ├── sections/              # Page sections (hero, deep-dive, CTA, footer)
│   │   ├── hooks/                 # Zustand stores and custom hooks
│   │   └── utils/                 # Data and utilities
│   └── [other components]         # Landing page sections, shared components
├── pages/                          # Route-level page components
└── main.tsx                        # App entry point with routing
```

## Code Conventions

### File References
When creating components in the mission-control directory, follow the existing patterns:
- Three.js components go in `three/`
- UI overlays go in `ui/`
- Page sections go in `sections/`
- Shared hooks/stores go in `hooks/`

### Import Patterns
- Use relative imports within feature directories
- Import types from `@react-three/fiber` and Three.js when working with 3D components
- The `ExperienceTier` type is central to adaptive rendering

### 3D Performance
- Always respect the `tier` prop when adding effects or particles
- Use conditional rendering for expensive post-processing
- Keep particle counts configurable based on tier
- Leverage `dpr` (device pixel ratio) settings in Canvas based on tier

### State Management
- Global 3D interaction state uses Zustand (`useSolutionStore`)
- Keep solution data read-only in `solutionsData.ts`
- Device capabilities are computed once on mount and window resize

## Key Technical Patterns

### Lazy Loading
Mission Control is lazy-loaded to avoid blocking the landing page with heavy Three.js bundles:
```typescript
const MissionControlPage = lazy(() => import('./pages/MissionControlPage.tsx'));
```

### Smooth Scrolling
Lenis smooth scroll is initialized in Mission Control but disabled for `static` tier and reduced motion preferences.

### React Three Fiber
- Use `useFrame` for animation loops
- Use `useRef` for direct Three.js object manipulation
- Leverage `@react-three/drei` helpers (Environment, Preload)
- Post-processing via `@react-three/postprocessing`

## Brand Assets & Design Documentation

### Icon & Logo Guidelines
Comprehensive brand icon generation guidelines are available at [docs/branding/icon-generation-prompt.md](docs/branding/icon-generation-prompt.md).

**Brand Colors:**
- Primary: Rhobots Blue (#088DFF, #3b82f6)
- Accent: Cyan/Teal (#14b8a6, #60a5fa)

**Solution-Specific Gradients:**
- Studio: Purple-to-Pink (#9333ea to #ec4899)
- Extract: Emerald-to-Teal (#10b981 to #14b8a6)
- Sage: Blue-to-Indigo (#3b82f6 to #6366f1)
- Pulse: Pink-to-Red (#ec4899 to #ef4444)
- Operator: Orange-to-Amber (#f97316 to #f59e0b)

**Asset Locations:**
- Current logo: [src/components/BrandLogo.tsx](src/components/BrandLogo.tsx)
- Public assets: `public/` directory
- Future icons: `public/icons/` (to be created)
