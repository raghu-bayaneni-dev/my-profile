# Implementation Plan: Include Public Icons for Skills

**Branch**: `006-skill-icons` | **Date**: 2026-08-29 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/006-skill-icons/spec.md`

## Summary

Upgrade the technical skill badges on `skills.html` across all four core skill categories (Generative AI & Agentic Orchestration, Vector DBs & AI Observability, Web & Full-Stack Architecture, Databases & Cloud Infrastructure) by replacing generic dot markers with official, high-resolution public technology vector icons sourced from fast, cached CDNs (Devicon & Simple Icons via jsDelivr). The implementation ensures authentic brand color fidelity, 18px uniform vertical alignment, responsive mobile grid flow, accessible `aria-hidden="true"` attributes, and strict compliance with the pure static site constitution.

## Technical Context

**Language/Version**: Semantic HTML5, CSS3, Vanilla JavaScript (ES6+)  
**Primary Dependencies**: None (External SVG vectors referenced via public CDN endpoints: Devicon & Simple Icons)  
**Storage**: N/A (Static files)  
**Testing**: Manual visual browser inspection & responsive devtools validation (Constitution Principle IV: Zero Automated Testing)  
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge) & GitHub Pages  
**Project Type**: Static portfolio web application  
**Performance Goals**: Instant page render, <50KB total cached SVG asset footprint, zero layout shift  
**Constraints**: Pure static HTML/CSS, responsive grid from 320px to 1440px+, WCAG contrast, zero build pipeline  
**Scale/Scope**: 1 modified HTML file (`skills.html`), 1 modified CSS file (`css/styles.css`)  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Compliance Status |
|---|---|---|
| **I. Clean, Readable Code** | Semantic HTML5 markup, structured comments | ✅ PASS |
| **II. Pure Static Foundation** | HTML/CSS only, zero build steps or JS frameworks | ✅ PASS |
| **III. Modern, Responsive UX** | Fluid responsive grid, authentic brand colors, smooth hover states | ✅ PASS |
| **IV. Zero Automated Testing** | Manual browser inspection & devtools viewport testing only | ✅ PASS |
| **V. Architectural Simplicity** | Sourced via CDN SVGs, 0kb repo asset bloat, zero build overhead | ✅ PASS |

## Project Structure

### Documentation (this feature)

```text
specs/006-skill-icons/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 research & CDN icon mapping
├── data-model.md        # Phase 1 content & entity model
├── quickstart.md        # Phase 1 manual validation guide
├── contracts/
│   └── ui-contracts.md  # Phase 1 HTML markup & CSS contracts
├── checklists/
│   └── requirements.md  # Specification quality checklist
└── tasks.md             # Phase 2 tasks (/speckit-tasks output)
```

### Source Code (repository root)

```text
my-profile/
├── skills.html          # Upgrade skill badges with <img class="skill-icon">
├── css/
│   └── styles.css       # Add .skill-icon rules (18px x 18px, object-fit contain)
├── index.html
├── projects.html
├── experience.html
├── contact.html
├── resources/
└── js/
```

**Structure Decision**: Replace legacy `<span class="skill-dot"></span>` elements in `skills.html` with `<img src="..." class="skill-icon" ...>` tags and add `.skill-icon` CSS styles to `css/styles.css`.

## Complexity Tracking

*No constitutional violations. Zero external build dependencies.*
