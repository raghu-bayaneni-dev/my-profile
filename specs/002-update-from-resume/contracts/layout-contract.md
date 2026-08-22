# Interface & DOM Contract: Resume Data & Download Links

**Feature**: `002-update-from-resume`
**Date**: 2026-08-22

## Layout & Link Contracts

### 1. Resume Download Action Links
```html
<!-- In Hero Section (index.html) and Contact Page (contact.html) -->
<a href="resources/resume.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
  📄 View / Download Resume &rarr;
</a>
```

### 2. Contact Channel Anchor Contract
```html
<!-- Direct Email -->
<a href="mailto:raghu.bayaneni@gmail.com" class="card contact-card">
  <div class="contact-channel-value">raghu.bayaneni@gmail.com</div>
</a>

<!-- Direct Phone -->
<a href="tel:+12095978323" class="card contact-card">
  <div class="contact-channel-value">(209) 597 8323</div>
</a>

<!-- LinkedIn Profile -->
<a href="https://www.linkedin.com/in/raghuramz" target="_blank" rel="noopener noreferrer" class="card contact-card">
  <div class="contact-channel-value">linkedin.com/in/raghuramz</div>
</a>
```

### 3. Footer Links Contract
```html
<footer class="site-footer" id="site-footer">
  <div class="container footer-container">
    <div class="footer-info">
      <p class="copyright">&copy; 2026 Raghu Bayaneni. All rights reserved.</p>
      <p class="footer-tagline">Lead Staff Engineer | Full-Stack, AI &amp; Forward Deployed Systems.</p>
    </div>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/raghuramz" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="resources/resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
      <a href="contact.html">Contact</a>
      <a href="#top" id="back-to-top" class="back-to-top">↑ Top</a>
    </div>
  </div>
</footer>
```
