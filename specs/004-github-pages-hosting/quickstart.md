# Quickstart Validation Guide: GitHub Pages Hosting

**Feature**: `004-github-pages-hosting`
**Date**: 2026-08-28

This guide outlines how to validate the GitHub Pages hosting setup both locally (simulating root and subpath hosting) and in production on GitHub Pages.

---

## 1. Local Verification (Subpath & Root Hosting Simulation)

In accordance with Constitution Principle IV, testing is conducted through manual browser verification.

### Scenario A: Local Root Preview
1. Start the local server:
   ```bash
   npm start
   ```
2. Open `http://localhost:3000` in a desktop browser.
3. Verify:
   - Profile image in header and bio renders cleanly.
   - All navigation links (`Experience`, `Skills`, `Projects`, `Contact`) navigate smoothly.
   - Download Resume link triggers PDF retrieval.
   - Mobile viewport (responsive drawer) opens and navigates properly.

### Scenario B: 404 Error Page Preview
1. Open `http://localhost:3000/404.html` (or any non-existent route if served with fallback).
2. Verify:
   - Branded 404 message and navigation bar render.
   - "Back to Home" button brings the user back to `index.html`.

---

## 2. GitHub Pages Deployment Verification

### Prerequisites
1. Repository pushed to GitHub (e.g., `https://github.com/<username>/<repo-name>`).
2. In Repository **Settings** > **Pages**:
   - Source: **GitHub Actions**.

### Deployment Trigger & Verification
1. Push changes to `main` branch.
2. In the GitHub **Actions** tab, verify the `Deploy static content to Pages` workflow runs and passes.
3. Open the generated GitHub Pages URL (e.g. `https://<username>.github.io/<repo-name>/`).
4. Click through all navigation pages and verify:
   - No broken images or failed CSS requests in DevTools Network tab.
   - All links retain proper repository subpath structure.
