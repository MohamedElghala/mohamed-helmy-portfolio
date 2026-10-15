# Handoff Report — Explorer 1: Deployment & 404 Root Cause Analysis

**Investigator**: Explorer 1 (Deployment & 404 Root Cause)  
**Target Repository**: `https://github.com/MohamedElghala/mohamed-helmy-portfolio.git`  
**Local Project Path**: `C:\Users\Mohamed Helmy\OneDrive\Desktop\mohamed-helmy-portfolio`  
**Date**: 2026-10-15  

---

## 1. Observation

### 1.1 Git Repository State & Remote Configuration
- **Command**: `git remote -v`
  - **Output**:
    ```text
    origin  https://github.com/MohamedElghala/mohamed-helmy-portfolio.git (fetch)
    origin  https://github.com/MohamedElghala/mohamed-helmy-portfolio.git (push)
    ```
- **Command**: `git branch -a`
  - **Output**:
    ```text
    * main
      remotes/origin/main
    ```
  - **Observation**: There is NO `gh-pages` branch, neither locally nor remotely (`git branch -r` returns only `origin/main`).
- **Command**: `git log -n 6 --oneline`
  - **Output**:
    ```text
    0359470 docs: add comprehensive luxury README with badges and project matrix
    90d0395 feat: integrate official Raseen platform UI and Tourvanto VIP yacht visual
    0c41f43 feat: replace static logos with context-rich lifestyle visuals
    b5a7f60 fix: replace pixelated assets with official Raseen calligraphy medallion
    884a655 feat: integrate bespoke visual photography covers and brand identity colors
    373a110 feat: initial commit for Mohamed Helmy luxury portfolio v2
    ```
  - **Observation**: 6 total commits on `main`. No release tags exist (`git tag` returns empty).

### 1.2 GitHub Actions Workflows & GitHub Pages Artifacts
- **Command**: `Test-Path .github`
  - **Output**: `False`
- **Command**: `git log --all --full-history -- ".github"`
  - **Output**: (empty)
  - **Observation**: The repository has NEVER had a `.github/` folder or any GitHub Actions deployment workflow committed.
- **Repository Root Directory Contents**:
  - `list_dir` on `C:\Users\Mohamed Helmy\OneDrive\Desktop\mohamed-helmy-portfolio`:
    Contains `.git`, `.gitignore`, `.next`, `README.md`, `next-env.d.ts`, `node_modules`, `package-lock.json`, `package.json`, `postcss.config.js`, `public`, `src`, `tailwind.config.js`, `tsconfig.json`.
  - Noticeably missing: `next.config.js`, `next.config.mjs`, `next.config.ts`, `vercel.json`, `.github/`.

### 1.3 Build Configuration & Next.js Runtime Mode
- **File**: `package.json`
  - **Lines 5-9**:
    ```json
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    }
    ```
  - **Dependencies (Lines 10-17)**: `clsx: ^2.1.1`, `lucide-react: ^0.417.0`, `next: 14.2.5`, `react: ^18.3.1`, `react-dom: ^18.3.1`, `tailwind-merge: ^2.4.0`.
  - **Observation**: There is no `"homepage"` field in `package.json`.
- **Command**: `npm run build`
  - **Output**:
    ```text
    ▲ Next.js 14.2.5
    Creating an optimized production build ...
    ✓ Compiled successfully
    Linting and checking validity of types ...
    Collecting page data ...
    ✓ Generating static pages (4/4)
    Finalizing page optimization ...
    Collecting build traces ...
    Route (app)                              Size     First Load JS
    ┌ ○ /                                    12.9 kB        99.9 kB
    └ ○ /_not-found                          871 B          87.9 kB
    + First Load JS shared by all            87 kB
    ```
  - **Command**: `Test-Path out; Test-Path .next`
    - **Output**:
      ```text
      False
      True
      ```
  - **Observation**: Next.js 14 defaults to a Node.js server build in `.next/`. Without `output: 'export'`, it does NOT generate static HTML output in `out/`.

### 1.4 Image & Path References in Application Code
- **File**: `src/app/layout.tsx` (Line 42):
  - OpenGraph URL explicitly points to: `url: "https://mohamed-helmy.vercel.app"`
- **File**: `src/data/portfolioData.ts` (Lines 58, 73, 88, 103, 117, 131):
  - Cover images use absolute root paths:
    - `coverImage: "/images/brasil_chic.jpg"`
    - `coverImage: "/images/aura.jpg"`
    - `coverImage: "/images/solvo.jpg"`
    - `coverImage: "/images/tourvanto_luxury_yacht.jpg"`
    - `coverImage: "/images/raseen_platform_hero.jpg"`
    - `coverImage: "/images/ai_platform_official.jpg"`
- **File**: `src/components/BentoGrid.tsx` (Lines 100-104):
  - Raw HTML `<img>` tag:
    ```tsx
    <img
      src={project.coverImage}
      alt={project.title}
      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
    />
    ```
  - **Observation**: If served from a subdirectory on GitHub Pages (`https://mohamedelghala.github.io/mohamed-helmy-portfolio/`), raw `<img>` tags pointing to `/images/...` will resolve against the root domain `https://mohamedelghala.github.io/images/...` and result in HTTP 404 for all cover images, unless prefixed or rewritten.

### 1.5 Vercel CLI & Local Deployment State
- **Command**: `Test-Path .vercel`
  - **Output**: `False`
  - **Observation**: The project directory has never been linked to a Vercel project locally (`.vercel/project.json` is absent).
- **Vercel CLI**: Installed globally/npx via `Vercel CLI 64.2.0 (Node.js 26.4.0)`.
- **Peer Projects on Same Machine**:
  - `C:\Users\Mohamed Helmy\OneDrive\Desktop\brazil_fashion_store`: Git origin `MohamedElghala/brazil-fashion-store.git`, live at `https://brazil-fashion-store.vercel.app`.
  - All sister projects in the portfolio (`solvo-store.vercel.app`, `tourvanto.vercel.app`, `brazil-fashion-store.vercel.app`) are hosted on Vercel under Mohamed Helmy's GitHub/Vercel account.

---

## 2. Logic Chain

1. **Premise 1 (GitHub Pages 404 Cause)**:
   - For GitHub Pages to serve a repository at `https://<user>.github.io/<repo>`, the repository must have GitHub Pages enabled in Repository Settings.
   - The repository currently has NO GitHub Actions workflow (`Test-Path .github` is False) and NO `gh-pages` branch (`git branch -a` shows only `main`).
   - If Pages is not configured, GitHub returns an HTTP 404 Page Not Found.
   - Even if GitHub Pages were pointed to the `main` branch root, Next.js source code has no root `index.html` (only `src/app/page.tsx`), resulting in 404.
   - Even if `next build` is executed, without `output: 'export'`, Next.js outputs Node.js server bundles to `.next/` and does not generate `out/index.html`. GitHub Pages is a static host and cannot run Node.js.
   - Furthermore, GitHub Pages for project repos serves under subpath `/<repo-name>/`. Without `basePath: '/mohamed-helmy-portfolio'` and `assetPrefix: '/mohamed-helmy-portfolio/'`, all CSS and JS asset bundles request `/_next/...` at root and 404.

2. **Premise 2 (Vercel 404 Cause)**:
   - The user noted: "أو توجيهات Vercel القديمة لمشروع الـ Backend API".
   - Locally, `Test-Path .vercel` is False, showing the repository is not currently linked.
   - If visiting `mohamed-helmy-portfolio.vercel.app` produced a 404:
     - Either no Vercel project was ever created with that name.
     - Or a previous project by that name was deployed from an old backend API repository with custom route rewrites (e.g. routing to an Express backend or `/api`), resulting in 404 on the web root `/`.
     - Or the domain was never connected to the current Next.js 14 frontend repository `MohamedElghala/mohamed-helmy-portfolio`.

3. **Synthesis (The Clean Solution)**:
   - Next.js 14 App Router is natively built for Vercel: zero configuration needed for `basePath`, full serverless edge support, image optimization works automatically, and all sibling projects (`brazil-fashion-store.vercel.app`, etc.) already use Vercel.
   - Concurrently, by creating a dynamic `next.config.mjs` that checks `process.env.GITHUB_ACTIONS === 'true'`, the project can support BOTH GitHub Pages (with static export & subpath) AND Vercel (with root domain `/`) simultaneously with zero friction and 200 OK on both.

---

## 3. Caveats

1. **GitHub Repository Settings**: Enabling GitHub Pages with GitHub Actions requires repository admin permissions in the GitHub Web UI (Settings -> Pages -> Build and deployment -> Source: "GitHub Actions"). If deploying via GitHub Actions, this one-time UI toggle must be confirmed.
2. **Vercel Account Token / Webhook**: Connecting the repository to Vercel production can be done in 1 click via the Vercel Dashboard (`Import Project`), or via `npx vercel --prod` if a `VERCEL_TOKEN` is supplied.
3. **Asset Base Path Handling**: In `BentoGrid.tsx`, images are rendered with `<img>` rather than Next.js `<Image>`. In static export to GitHub Pages, these URLs must be made base-path-aware (e.g., using `process.env.NEXT_PUBLIC_BASE_PATH || ''`).

---

## 4. Conclusion & Actionable Recommendations

### Recommendation A: Recommended Primary Route — Deploy to Vercel (200 OK in 1 minute)
Because this is a Next.js 14 App Router flagship, deploying to Vercel provides:
- Clean root URL (`https://mohamed-helmy-portfolio.vercel.app`).
- Zero path rewriting headaches.
- Native image optimization and sub-second TTFB.
- Immediate continuity with all other sister projects.

**Step-by-step verification plan for Vercel**:
1. Open [vercel.com/new](https://vercel.com/new).
2. Select GitHub account `MohamedElghala` and import `mohamed-helmy-portfolio`.
3. Framework Preset: `Next.js` (auto-detected).
4. Click **Deploy**.
5. Result: Live 200 OK at `https://mohamed-helmy-portfolio.vercel.app`.

---

### Recommendation B: Dual-Deployment / GitHub Pages Route (200 OK on GitHub Pages)
To eliminate the 404 on `https://mohamedelghala.github.io/mohamed-helmy-portfolio` and keep it automated on every git push:

#### Step 1: Create `next.config.mjs` at Project Root
```javascript
/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'mohamed-helmy-portfolio';

const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : '',
  },
};

export default nextConfig;
```

#### Step 2: Update Image Helper in `src/components/BentoGrid.tsx`
Ensure `<img>` tags prepend `process.env.NEXT_PUBLIC_BASE_PATH || ''`:
```tsx
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
// In card render:
<img
  src={`${basePath}${project.coverImage}`}
  alt={project.title}
  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
/>
```

#### Step 3: Create GitHub Actions Workflow `.github/workflows/deploy.yml`
```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next

      - name: Install dependencies
        run: npm ci

      - name: Build static export
        run: npm run build
        env:
          GITHUB_ACTIONS: "true"

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 4: Configure GitHub Pages in Repository Settings
In GitHub Web UI for `MohamedElghala/mohamed-helmy-portfolio`:
- Go to **Settings** -> **Pages**.
- Under **Build and deployment** -> **Source**, select **GitHub Actions**.

---

## 5. Verification Method

### How to Independently Verify:
1. **Local Build Verification**:
   ```powershell
   cd "C:\Users\Mohamed Helmy\OneDrive\Desktop\mohamed-helmy-portfolio"
   $env:GITHUB_ACTIONS="true"
   npm run build
   ```
   **Pass Condition**:
   - Exit code must be 0.
   - `Test-Path out\index.html` must return `True`.
   - `Test-Path out\images\brasil_chic.jpg` must return `True`.
   - `Select-String -Path out\index.html -Pattern "/mohamed-helmy-portfolio/_next/"` must find matching prefixed script/CSS links.

2. **Public Live Deployment Status Verification**:
   - For Vercel:
     `curl.exe -I https://mohamed-helmy-portfolio.vercel.app` returns `HTTP/2 200`.
   - For GitHub Pages:
     `curl.exe -I https://mohamedelghala.github.io/mohamed-helmy-portfolio/` returns `HTTP/2 200`.
