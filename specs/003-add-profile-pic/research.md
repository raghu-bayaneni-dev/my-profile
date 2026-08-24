# Research: Add Profile Picture

## Research Findings & Architectural Decisions

### 1. Image Asset Source & Format Handling

- **Decision**: Directly link and reference `resources/profile.jpeg` as the standard profile picture asset across the portfolio pages.
- **Rationale**: The user uploaded `resources/profile.jpeg` (2.66 MB high-resolution JPEG). Linking directly to `resources/profile.jpeg` in static HTML maintains zero build-step overhead and stays 100% compliant with the project constitution.
- **Alternatives Considered**:
  - *Automated build-step image compression / WebP generation*: Rejected because the constitution strictly mandates pure static foundation with zero build pipelines. Modern browsers handle direct JPEG rendering with standard CSS dimension constraints seamlessly.
  - *PDF extraction*: Rejected per user clarification (Option C: direct image upload).

---

### 2. Hero Section Squircle & Glassmorphism Styling

- **Decision**: Implement a modern rounded squircle container using CSS `border-radius: 28px` (or `2rem`), smooth gradient border outline (`linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.2))`), subtle ambient glow (`box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.35)`), and `object-fit: cover`.
- **Rationale**: Directly delivers the user's selected choice from clarification (rounded squircle with glassmorphism card frame). Matches the existing aesthetic defined in `css/styles.css` while elevating the visual hierarchy of the Home page hero section.
- **Alternatives Considered**:
  - *Circular avatar*: Evaluated and offered in clarification; user selected squircle with glassmorphism card frame.
  - *Raw unstyled img tag*: Rejected as basic and underwhelming.

---

### 3. Global Navigation Header Brand Avatar

- **Decision**: Embed a compact thumbnail (`36px` x `36px`) avatar inside the existing `.nav-brand` anchor link across all 5 HTML pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`).
- **Rationale**: Delivers universal identity cohesion across all pages without crowding the navigation bar or interfering with the mobile navigation hamburger toggle.
- **Alternatives Considered**:
  - *Separate nav icon item*: Rejected because attaching it inside the brand anchor makes the entire identity clickable back to `index.html`.

---

### 4. Contact Page Portrait Integration

- **Decision**: Integrate a dedicated squircle portrait card (`160px` x `160px` or `180px` x `180px`) inside the contact header/card on `contact.html` alongside the contact methods, headline, and resume download link.
- **Rationale**: Personalizes the direct reach-out experience and creates visual symmetry with the Home page hero card.

---

### 5. Performance, Layout Stability & Accessibility

- **Decision**:
  - Explicit `width` and `height` attributes and CSS `aspect-ratio: 1/1` on all image tags to guarantee zero Cumulative Layout Shift (CLS < 0.05).
  - Meaningful `alt="Raghu - AI Engineer Profile Photo"` on all images for 100% accessibility compliance.
  - Native `loading="eager"` on hero avatar and navigation avatar; `loading="lazy"` on contact card image.
  - Graceful fallback styling with CSS background color and initials container if image fails to load.
- **Rationale**: Ensures top-tier Core Web Vitals and accessibility standard compliance.
