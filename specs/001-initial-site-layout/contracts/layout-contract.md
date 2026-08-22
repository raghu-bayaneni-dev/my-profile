# Interface & DOM Contract: Layout Components

**Feature**: `001-initial-site-layout`
**Date**: 2026-08-22

## Shared Layout Contracts

Every static HTML page (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) conforms to the following semantic contract:

### 1. Document Head & Asset Links Contract
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | [Professional Name] - Software Engineer</title>
  <meta name="description" content="[Page Description]">
  <link rel="stylesheet" href="css/styles.css">
</head>
```

### 2. Header & Navigation Contract
```html
<header class="site-header" id="site-header">
  <div class="container header-container">
    <a href="index.html" class="brand-logo">[Professional Name]</a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main Navigation">
      <ul class="nav-list">
        <li><a href="index.html" class="nav-link [active]">About</a></li>
        <li><a href="experience.html" class="nav-link [active]">Experience</a></li>
        <li><a href="projects.html" class="nav-link [active]">Projects</a></li>
        <li><a href="skills.html" class="nav-link [active]">Skills</a></li>
        <li><a href="contact.html" class="nav-link [active]">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

### 3. Main Content Container Contract
```html
<main id="main-content" class="page-content">
  <div class="container">
    <header class="section-header">
      <h1 class="section-title">[Page Heading]</h1>
      <p class="section-subtitle">[Page Subheading / Overview]</p>
    </header>
    <div class="section-body">
      <!-- Page-specific modular components (cards, timeline, skill badges) -->
    </div>
  </div>
</main>
```

### 4. Footer Contract
```html
<footer class="site-footer" id="site-footer">
  <div class="container footer-container">
    <div class="footer-info">
      <p class="copyright">&copy; 2026 [Professional Name]. All rights reserved.</p>
      <p class="footer-tagline">Built with clean HTML, CSS & JavaScript.</p>
    </div>
    <div class="footer-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="contact.html">Contact</a>
      <a href="#top" id="back-to-top" class="back-to-top" aria-label="Back to top">↑ Top</a>
    </div>
  </div>
</footer>
<script src="js/main.js"></script>
```

### 5. JavaScript DOM Interaction Contract (`js/main.js`)
- `navToggle.addEventListener('click')`: Toggles `.nav-open` class on `#site-nav` and toggles `aria-expanded` ("true"/"false").
- `backToTop.addEventListener('click')`: Triggers `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- Closing mobile nav drawer when clicking outside or pressing Escape key.
