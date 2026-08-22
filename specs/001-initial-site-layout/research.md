# Research: Initial Site Layout

**Feature**: `001-initial-site-layout`
**Date**: 2026-08-22

## Technical Decisions & Rationale

### 1. Multi-Page Static Site Architecture
- **Decision**: Implement independent static HTML pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) sharing common CSS and JS assets.
- **Rationale**: Meets user requirement for a multi-page static site. Delivers zero-build simplicity, instant browser page loads, direct bookmarking/linking, and flawless static hosting compatibility (e.g. GitHub Pages).
- **Alternatives Considered**:
  - Single-Page Application (SPA) with JavaScript router: Rejected due to extra runtime complexity and conflict with pure static principles.
  - Tabbed DOM-swapping on single page: Rejected per user preference for multi-page static layout.

### 2. Styling System & Theme
- **Decision**: Vanilla CSS3 using CSS Custom Properties (`:root` tokens) structured with a Modern Light Theme.
- **Rationale**:
  - Crisp light aesthetic: `#f8fafc` / `#ffffff` background, `#0f172a` primary text, `#64748b` secondary text, subtle `#e2e8f0` border lines, and an elegant accent color (e.g. indigo/slate `#3b82f6` or `#2563eb`).
  - Native CSS Flexbox & CSS Grid for robust responsive layouts without external CSS runtime bloat.
  - System typography stack (Inter/system sans-serif) for instant render times.
- **Alternatives Considered**:
  - Tailwind CSS / Bootstrap CSS frameworks: Rejected to keep codebase simple, native, and maintainable without build tool requirements.
  - Dark Theme: Rejected per user selection of Clean Light Theme.

### 3. Client-Side JavaScript
- **Decision**: Plain Vanilla ES6+ JavaScript (`js/main.js`) with defensive DOM initialization.
- **Rationale**:
  - Responsibilities: Mobile menu toggle button (open/close drawer), smooth back-to-top scroll, and active navigation state fallback.
  - Keeps JS payload lightweight (<5KB), readable, and heavily commented for maintainability.
- **Alternatives Considered**:
  - Heavy JS frameworks (React, Vue, jQuery): Strictly rejected per Constitution Principle II.

### 4. Local Development & Manual Verification Server
- **Decision**: Minimal `package.json` with `npm start` and `npm run dev` scripts utilizing `serve` (e.g. `npx serve . -l 3000`).
- **Rationale**: Gives developers a one-command local HTTP preview server without any compile or bundler steps.
- **Alternatives Considered**:
  - Raw `python3 -m http.server`: Documented as a zero-install alternative in quickstart guide.

### 5. Automated Testing Exemption
- **Decision**: Zero automated test suites (no Jest, Vitest, Cypress, Playwright, or unit/e2e runners).
- **Rationale**: Strictly mandated by Constitution Principle IV to enable rapid iteration cycles and zero build overhead. Verification is conducted via direct manual browser inspection.
