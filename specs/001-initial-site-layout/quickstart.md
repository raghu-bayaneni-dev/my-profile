# Quickstart & Manual Validation Guide: Initial Site Layout

**Feature**: `001-initial-site-layout`
**Date**: 2026-08-22

## Prerequisites
- Node.js (v18+) for running the lightweight static preview server via `npm start`.
- Modern web browser (Chrome, Safari, Firefox, or Edge).

## Running the Local Preview Server

1. From the repository root, install dependencies (zero heavy dependencies, installs lightweight static server):
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm start
   ```

3. Open your browser to:
   ```text
   http://localhost:3000
   ```

*(Alternative without Node: run `python3 -m http.server 3000` or double-click `index.html` directly).*

---

## Manual Verification Checklist

Follow these validation steps to confirm the site layout functions as expected:

### 1. Navigation Flow & Page Verification
- [ ] **Home / About (`index.html`)**: Confirm the hero banner, professional headline, bio placeholder, and "About" active nav state are rendered.
- [ ] **Experience Page (`experience.html`)**: Click "Experience" in header. Confirm page loads, "Experience" is highlighted active, and career timeline milestones display with role titles and periods.
- [ ] **Projects Page (`projects.html`)**: Click "Projects" in header. Confirm page loads, "Projects" is highlighted active, and project cards display with descriptions, tags, and action buttons.
- [ ] **Skills Page (`skills.html`)**: Click "Skills" in header. Confirm page loads, "Skills" is highlighted active, and skills are categorized into clean badge groups.
- [ ] **Contact Page (`contact.html`)**: Click "Contact" in header. Confirm page loads, "Contact" is highlighted active, and direct contact cards (Email, LinkedIn, GitHub, Location, Resume) are displayed clearly without a form.

### 2. Responsive Mobile Navigation Verification
- [ ] In browser DevTools, switch to Mobile Device Viewport (e.g. iPhone / 375px width).
- [ ] Confirm desktop nav links collapse into the hamburger toggle button.
- [ ] Click the hamburger button: verify drawer opens smoothly.
- [ ] Click any navigation item: verify menu navigates to destination page and collapses cleanly.

### 3. Visual & Aesthetic Verification
- [ ] Confirm Clean Light Theme tokens: crisp light background, readable dark typography, clean subtle borders.
- [ ] Confirm layout renders cleanly with zero horizontal scroll overflow at widths 320px, 768px, 1024px, and 1440px.

### 4. Footer & Utility Verification
- [ ] Scroll to the bottom of any page and verify copyright text, tagline, and external profile placeholders.
- [ ] Click the "↑ Top" button: verify the page smoothly scrolls back to the top header.
