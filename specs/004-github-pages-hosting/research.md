# Phase 0 Research: GitHub Pages Hosting Refactor

**Feature**: `004-github-pages-hosting`
**Date**: 2026-08-28

## 1. Hosting Architecture & Publishing Strategy

### Decision
Deploy the pure static site to GitHub Pages using standard GitHub Actions with `actions/deploy-pages@v4` and `actions/upload-pages-artifact@v3`.

### Rationale
- **Zero Build Overhead**: Since the project is pure static HTML/CSS/JS without bundling steps, the GitHub Actions workflow simply packages the root repository assets and deploys directly to the GitHub Pages environment.
- **Granular Control**: GitHub Actions deployment is the modern default for GitHub Pages (replacing legacy branch publishing) and allows deterministic deployment runs, security permission management (`permissions: pages: write, id-token: write`), and instant deploy feedback.
- **Constitution Compliance**: Fully adheres to Constitution Principle II (Pure Static Foundation) and Principle V (Architectural Simplicity & Minimal Dependencies).

### Alternatives Considered
- *Direct branch publishing (`gh-pages` branch)*: Requires branch management scripts or force-pushing artifacts to a dedicated branch; more prone to stale branch divergence compared to standard GitHub Actions deployment from `main`.
- *Static Site Generators (Jekyll / Hugo / Astro)*: Rejected because the constitution forbids build tools and complex client runtimes; the site is natively static HTML5.

---

## 2. Jekyll Processing Bypass (.nojekyll)

### Decision
Add a `.nojekyll` file at the root of the repository.

### Rationale
- By default, GitHub Pages runs Jekyll on static repositories unless told otherwise. Jekyll automatically ignores files or folders starting with underscores (e.g., `_site`, `.well-known`), and can attempt to parse Liquid syntax in HTML/markdown files.
- Adding an empty `.nojekyll` file completely disables Jekyll, ensuring all static files, dotfiles, and assets are served raw and unmodified.

### Alternatives Considered
- Relying on default behavior without `.nojekyll`: Risks unexpected asset omission or parsing quirks.

---

## 3. Subpath vs Root Domain Relative Asset Resolution

### Decision
Ensure all asset links (`<link rel="stylesheet">`, `<script src="...">`, `<img src="...">`, `<a href="...">`) use document-relative paths (e.g., `css/styles.css`, `js/main.js`, `resources/profile.jpeg`, `experience.html`) rather than root-relative paths (`/css/...`).

### Rationale
- GitHub Pages sites deployed to user project repositories are hosted at `https://<username>.github.io/<repo-name>/`.
- If assets use root-relative paths like `/css/styles.css`, the browser attempts to fetch `https://<username>.github.io/css/styles.css`, resulting in 404 errors.
- Document-relative paths work identically in both root domains (`https://raghubayaneni.com/` or `https://<username>.github.io/`) and repository subpaths (`https://<username>.github.io/my-profile-site/`).

### Alternatives Considered
- Absolute URL prefixes: Fragile when changing domains or repositories.
- `<base href>` tag: Can introduce quirks with relative hash anchors and requires dynamic adjustment if repo name changes.

---

## 4. Custom 404 Error Handling

### Decision
Create a dedicated `404.html` in the root directory styled with the site's header, navigation, typography, and theme.

### Rationale
- GitHub Pages automatically serves `404.html` located at the root for any unmatched routes.
- Providing a custom `404.html` maintains brand consistency, gives visitors a clear message, and provides quick navigation back to `index.html`.

### Alternatives Considered
- Default GitHub 404 page: Poor user experience, breaks visitor navigation flow.

---

## 5. Constitution & Zero Automated Testing Gate

### Decision
Adhere strictly to Constitution Principle IV: Zero Automated Testing Policy.

### Rationale
- Verification is done exclusively via manual browser inspection across desktop and mobile viewports, testing live links and asset loads.
