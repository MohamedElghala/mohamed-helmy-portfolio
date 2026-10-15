# Project: Mohamed Helmy Luxury 3D Portfolio

## Architecture
- Next.js 14 App Router (React 18, TypeScript, Tailwind CSS).
- Presentation Layer:
  - `PortalHero.tsx`: Cinematic 3D WebGL canvas (`HeroThreeCanvas.tsx`) mounted at `z-0` behind hero typography, powered by vanilla Three.js (Obsidian Torus Knot + Neural Stardust + 60 FPS Orbit Drag & Hover Parallax).
  - `BentoGrid.tsx`: 6 major projects in asymmetric 7/5 + 4/4/4 + 12 grid layout with pure React 3D Tilt Card and CSS Border Beam neon laser.
  - `WhatsAppDrawerModal.tsx`: Slide-Over drawer with context-aware blueprint pre-filling.
- Infrastructure & Deployment:
  - Dual-Deploy: `next.config.mjs` (conditional static export for GitHub Pages vs SSR for Vercel).
  - GitHub Actions: `.github/workflows/deploy.yml` for automated GitHub Pages 200 OK deployment.
  - Vercel: 1-click import production URL.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | 404 Diagnosis & Fix | Diagnose root causes for GitHub Pages & Vercel, configure conditional basePath | M1 | Survey (Explorer 1) |
| 2 | Automated GitHub Actions CI/CD | `.github/workflows/deploy.yml` to build static export and publish to GitHub Pages | M1 | Survey (Explorer 1) |
| 3 | Dual-Deploy `next.config.mjs` | Dynamic configuration supporting both Vercel and GitHub Pages | M1 | Survey (Explorer 1) |
| 4 | Three.js Core Setup | Install `three` and `@types/three`, create `src/lib/utils.ts` | M2 | Survey (Explorer 2) |
| 5 | Hero 3D WebGL Canvas Engine | Hybrid Torus Knot + Neural Stardust particle constellation | M2 | Survey (Explorer 2) |
| 6 | 60 FPS Performance Optimization | DPR clamp to 1.5, IntersectionObserver auto-pause offscreen | M2 | Survey (Explorer 2) |
| 7 | Interactive Orbit Drag & Parallax | Inertial drag damping + lerp hover parallax + touch-action pan-y | M2 | Survey (Explorer 2) |
| 8 | 6 Major Projects Bento Grid | Asymmetric 7/5 + 4/4/4 + 12 desktop grid for all 6 projects | M3 | Survey (Explorer 3) |
| 9 | 3D Tilt Card Effect | Mouse coordinate tracking perspective tilt with translateZ floating layers | M3 | Survey (Explorer 3) |
| 10 | Border Beam Neon Laser | Dynamic rotating border laser using CSS offset-path keyframes | M3 | Survey (Explorer 3) |
| 11 | Obsidian Glassmorphism | Specular edge highlight, backdrop-blur, brand accent ambient glow | M3 | Survey (Explorer 3) |
| 12 | Slide-Over WhatsApp Drawer | Right-hand slide-over sheet with dynamic blueprint inquiry pre-fill | M4 | Survey (Explorer 3) |
| 13 | Full Build & Zero Errors | Clean `npm run build` with exit code 0 | M4 | Survey (Explorer 3) |
| 14 | E2E Public Verification & Audit | Independent Challenger tests + Forensic Auditor verification | M5 | Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | 404 Fix & Dual Deployment Config | `next.config.mjs`, `.github/workflows/deploy.yml`, image basePath | none | DONE |
| M2 | Cinematic 3D WebGL Canvas Engine | `three` install, `src/lib/utils.ts`, `HeroThreeCanvas.tsx`, `PortalHero.tsx` | none | DONE |
| M3 | Bento Grid, 3D Tilt & Border Beam | `BentoGrid.tsx`, `tailwind.config.js` | M1 | DONE |
| M4 | WhatsApp Slide-Over Drawer & Build | `WhatsAppDrawerModal.tsx`, blueprint trigger wiring, `npm run build` | M2, M3 | DONE |
| M5 | E2E Testing, Live Verification & Audit | Challenger empirical verification + Forensic Auditor verification | M1, M2, M3, M4 | DONE |

## Interface Contracts
### HeroThreeCanvas ↔ PortalHero
- Component: `HeroThreeCanvas({ className?: string })`
- Mount: Dynamic client-only import (`ssr: false`) inside `<section id="hero">` at `z-0`.
- Pointer Events: Canvas has `pointer-events-auto touch-pan-y`; hero text container has `relative z-10 pointer-events-auto` so buttons remain clickable.

### BentoGrid ↔ WhatsAppDrawerModal
- Prop / Event: `onOpenConsultation(serviceOrProjectName?: string)`
- Format: Passes `project.title` (e.g. "Raseen Vault (رَصين)")
- Drawer Behavior: Displays "Target Project: Raseen Vault", auto-prefills message `Hello Mohamed, I am inquiring about the blueprint and architecture for Raseen Vault...`

### Build ↔ Deployment (`next.config.mjs`)
- If `process.env.GITHUB_ACTIONS === 'true'`: `output: 'export'`, `basePath: '/mohamed-helmy-portfolio'`, `images: { unoptimized: true }`.
- Else: Default Next.js mode for Vercel (`output: undefined`, `basePath: ''`).

## Code Layout
- `src/lib/utils.ts`: `cn()` helper with `clsx` and `tailwind-merge`
- `src/components/HeroThreeCanvas.tsx`: Vanilla Three.js canvas engine
- `src/components/PortalHero.tsx`: Hero container mounting 3D canvas
- `src/components/BentoGrid.tsx`: Bento grid with 3D tilt and border beam
- `src/components/WhatsAppDrawerModal.tsx`: Slide-over WhatsApp drawer
- `next.config.mjs`: Dual-deploy Next.js configuration
- `.github/workflows/deploy.yml`: GitHub Actions deployment workflow
