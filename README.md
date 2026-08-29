# Raghu Bayaneni - Profile & Portfolio Site

Modern, responsive, pure static profile website and portfolio showcasing engineering leadership, Generative AI platforms, autonomous agent runtimes, RAG pipelines, and full-stack systems architecture.

---

## 🚀 Live Hosting on GitHub Pages

This project is built and optimized for direct static hosting on **GitHub Pages** with zero build pipeline dependencies.

### GitHub Pages Setup Instructions

1. **Push Repository to GitHub**:
   Ensure all files are committed and pushed to your GitHub repository (e.g. `main` branch).

2. **Configure Pages Source**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. **Automatic Deployment**:
   - On every push to `main`, the [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow runs automatically.
   - It packages the root static assets (with `.nojekyll` enabled) and deploys directly to `https://<username>.github.io/my-profile/`.

4. **Custom Domain (Optional)**:
   - If using a custom domain (e.g. `https://raghubayaneni.com`), enter it under **Custom domain** in Settings > Pages.
   - All internal assets and page links use document-relative paths, ensuring 100% compatibility across custom domains and repository subpaths.

---

## 🛠️ Local Development Preview

To preview the website locally:

```bash
# Start local static server
npm start

# Or with npx directly
npx serve . -l 3000
```

Then visit `http://localhost:3000` in your web browser.

---

## 📂 Project Structure

```text
my-profile/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions static Pages deployment
├── .nojekyll                   # Disables Jekyll processing on GitHub Pages
├── 404.html                    # Branded fallback error page
├── index.html                  # Landing page (Bio, Pillars, Resume)
├── experience.html             # Career timeline & achievements
├── skills.html                 # Technical skills & certifications
├── projects.html               # Featured AI systems & architectures
├── contact.html                # Contact links & information
├── css/
│   └── styles.css              # Responsive stylesheet & design system
├── js/
│   └── main.js                 # Header scroll & responsive mobile nav
└── resources/
    ├── profile.jpeg            # Profile headshot
    └── resume.pdf              # Downloadable resume document
```

---

## 📜 Constitution & Principles

This project adheres strictly to the **My Profile Site Constitution**:
- **Pure Static Foundation**: Built entirely in HTML5, CSS3, and Vanilla JS.
- **Architectural Simplicity**: Zero build pipelines or heavy client framework dependencies.
- **Zero Automated Testing Policy**: Verified exclusively through manual browser inspection.
