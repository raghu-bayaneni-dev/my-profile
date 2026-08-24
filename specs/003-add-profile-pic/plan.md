# Implementation Plan: Add Profile Picture

**Branch**: `003-add-profile-pic` | **Date**: 2026-08-23 | **Spec**: [`specs/003-add-profile-pic/spec.md`](file:///Users/raghu/my-projects/my-profile-site-with-spec/specs/003-add-profile-pic/spec.md)

**Input**: Feature specification from `/specs/003-add-profile-pic/spec.md`

## Summary

Incorporate the candidate's authentic profile picture asset (`resources/profile.jpeg`) across the personal portfolio website. This includes:
1. A prominent rounded squircle avatar with glassmorphism card frame and ambient gradient glow in the Home page (`index.html`) hero section.
2. A compact brand avatar thumbnail inside the navigation header brand link across all 5 pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`).
3. A complementary portrait card within the Contact page (`contact.html`) to enhance personal connection.
4. Comprehensive CSS3 styling in `css/styles.css` with responsive scaling, aspect-ratio preservation, zero layout shift (CLS), and accessible `alt` descriptions.

---

## Technical Context

**Language/Version**: HTML5, CSS3 (Custom Properties, Flexbox, Grid, Backdrop-Filter), Vanilla JavaScript (ES6+)

**Primary Dependencies**: None (Zero external framework dependencies)

**Storage**: Static asset files in `resources/` (`resources/profile.jpeg`)

**Testing**: Manual browser verification only (Strict compliance with Constitution Principle IV: Zero Automated Testing Policy)

**Target Platform**: Modern standard desktop and mobile web browsers (Chrome, Safari, Firefox, Edge)

**Project Type**: Static Personal Portfolio Web Application

**Performance Goals**: Image render < 500ms, zero Cumulative Layout Shift (CLS < 0.05)

**Constraints**: Pure static HTML/CSS/JS with zero build steps or bundling pipelines

**Scale/Scope**: 5 HTML pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`), 1 main stylesheet (`css/styles.css`)

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status | Notes |
| :--- | :--- | :---: | :--- |
| **I. Clean & Documented Code** | Clear comments and readable semantic markup | ✅ PASS | Semantic markup and well-documented CSS classes |
| **II. Pure Static Foundation** | HTML5, CSS3, Vanilla JS only; no React/Vue/Angular | ✅ PASS | Pure HTML/CSS updates; no heavy frameworks |
| **III. Modern, Responsive UX** | Responsive layouts, squircle glassmorphic styling | ✅ PASS | Squircle geometry, ambient glow, backdrop blur |
| **IV. Zero Automated Testing** | Strictly zero test frameworks/suites | ✅ PASS | Manual browser validation via `quickstart.md` |
| **V. Architectural Simplicity** | Flat, predictable structure with minimal dependencies | ✅ PASS | Uses existing `resources/` and `css/styles.css` |

---

## Project Structure

### Documentation (this feature)

```text
specs/003-add-profile-pic/
├── spec.md                  # Feature Specification
├── plan.md                  # This implementation plan
├── research.md              # Phase 0 research and architectural decisions
├── data-model.md            # Phase 1 entity & component definitions
├── quickstart.md            # Phase 1 manual validation guide
├── contracts/
│   └── ui-contracts.md      # UI markup & CSS class specifications
└── checklists/
    └── requirements.md      # Specification quality checklist
```

### Source Code (repository root)

```text
resources/
├── profile.jpeg             # Master profile picture asset (2.66 MB JPEG)
├── resume.pdf               # Downloadable PDF resume
└── RaghuAIEng.pdf           # Source PDF resume

css/
└── styles.css               # Core design tokens, squircle card, avatar & glow styling

index.html                   # Home page with hero squircle avatar & nav avatar
experience.html              # Experience page with nav brand avatar
projects.html                # Projects page with nav brand avatar
skills.html                  # Skills page with nav brand avatar
contact.html                 # Contact page with portrait card & nav avatar
```

---

## Complexity Tracking

*No constitutional violations or unjustified complexity introduced.*

| Aspect | Decision | Rationale |
| :--- | :--- | :--- |
| Frameworks | None (Vanilla CSS/HTML) | Direct browser support with zero runtime overhead |
| Testing | Manual Browser Verification | Strict alignment with Constitution Principle IV |
