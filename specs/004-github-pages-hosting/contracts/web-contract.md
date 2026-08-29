# Web Interface & Hosting Contract: GitHub Pages Hosting

**Feature**: `004-github-pages-hosting`
**Date**: 2026-08-28

## 1. Hosting Environment Contract

- **Hosting Platform**: GitHub Pages
- **Base Routing Mode**: Document-Relative HTML File Routing
- **Supported Base URL Schemes**:
  - Root User/Organization domain: `https://<username>.github.io/`
  - Project repository subpath: `https://<username>.github.io/<repository-name>/`
  - Custom Domain: `https://<custom-domain>/`
- **Jekyll Processor**: Disabled via `.nojekyll`

---

## 2. URL Routing Table & Expected HTTP Status

| Requested URL Path | Served File | Expected HTTP Status | Expected Visual Component |
| :--- | :--- | :--- | :--- |
| `/` or `/index.html` | `index.html` | 200 OK | Home / Executive Summary & Bio |
| `/experience.html` | `experience.html` | 200 OK | Career Experience Timeline |
| `/skills.html` | `skills.html` | 200 OK | Core Competencies & Skills |
| `/projects.html` | `projects.html` | 200 OK | Architectural Case Studies |
| `/contact.html` | `contact.html` | 200 OK | Contact Channels & Details |
| `/resources/resume.pdf`| `resources/resume.pdf` | 200 OK | Direct PDF Resume Download |
| `/*` (Non-existent path)| `404.html` | 404 Not Found | Branded 404 Page with return CTA |

---

## 3. GitHub Actions Workflow Contract (`deploy.yml`)

```yaml
name: Deploy static content to Pages

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
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
