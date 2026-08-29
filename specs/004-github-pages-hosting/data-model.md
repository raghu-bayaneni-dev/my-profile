# Data Model & Site Assets Architecture: GitHub Pages Hosting

**Feature**: `004-github-pages-hosting`
**Date**: 2026-08-28

## 1. Entities & Site Structure

As a pure static web application, the data model consists of structured static markup documents, design stylesheets, behavioral scripts, media assets, and hosting metadata.

```text
my-profile-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow for Pages
├── .nojekyll                   # Flag file disabling Jekyll static processing
├── 404.html                    # Branded error page for unmatched URLs
├── index.html                  # Landing / Executive Bio page
├── experience.html             # Career timeline & achievements
├── skills.html                 # Technical competencies & core domains
├── projects.html               # Architecture case studies & AI systems
├── contact.html                # Contact links & professional profiles
├── css/
│   └── styles.css              # Unified responsive design stylesheet
├── js/
│   └── main.js                 # Vanilla JS for header, theme & mobile nav
└── resources/
    ├── profile.jpeg            # Professional headshot image
    └── resume.pdf              # Downloadable resume document
```

---

## 2. Entity Definitions & Specifications

### 2.1 Web Page Entity (`*.html`)
- **Fields**:
  - `Document Title`: Descriptive page title following standard format (`Raghu Bayaneni | <Page Topic>`).
  - `Meta Description`: SEO & preview summary tag.
  - `Header & Navigation Component`: Uniform responsive nav bar with relative links to all pages.
  - `Main Content Area`: Semantic HTML5 sections (`<main>`, `<section>`, `<article>`).
  - `Footer Component`: Copyright notice, quick links, and social links.
- **Pathing Constraint**: All asset links (`href`, `src`) MUST use relative pathing (e.g., `css/styles.css`, `resources/profile.jpeg`).

### 2.2 Error Page Entity (`404.html`)
- **Fields**:
  - `Hero Status Code`: Clear 404 graphic/heading.
  - `Explanatory Message`: Friendly notice explaining the page was not found or moved.
  - `Return Actions`: Prominent button/link back to `index.html` and primary navigation menu.
- **Pathing Constraint**: Document-relative paths to all stylesheets and navigation targets.

### 2.3 Pages Deployment Entity (`.github/workflows/deploy.yml`)
- **Triggers**: `push` to `main` branch (or manual `workflow_dispatch`).
- **Permissions**: `contents: read`, `pages: write`, `id-token: write`.
- **Concurrency**: Group `pages`, cancel-in-progress `false`.
- **Steps**:
  1. `actions/checkout@v4`
  2. `actions/configure-pages@v5`
  3. `actions/upload-pages-artifact@v3` (targeting repository root `./`)
  4. `actions/deploy-pages@v4`

### 2.4 Hosting Flag Entity (`.nojekyll`)
- **Type**: Empty text file.
- **Function**: Signals GitHub Pages infrastructure to serve raw files directly without running the Jekyll build engine.
