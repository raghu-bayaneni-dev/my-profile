# Implementation Plan: Expand & Reorganize Technical Skills

**Branch**: `008-expand-technical-skills` | **Date**: 2026-09-10 | **Spec**: [spec.md](file:///Users/raghu/my-projects/my-profile/specs/008-expand-technical-skills/spec.md)

**Input**: Feature specification from `/specs/008-expand-technical-skills/spec.md`

## Summary

Reorganize the technical skills directory on `skills.html` into a unified 5-category layout, consolidating all database systems (relational, cloud-managed, NoSQL, vector, and graph) into a single dedicated card `🗄️ Databases & Vector Stores`. Add Google AlloyDB (for PostgreSQL), Claude Code, Google Antigravity, OpenAI Codex, and enterprise Java frameworks (Spring Boot, Spring MVC & Struts) with authentic CDN vector icons.

## Technical Context

**Language/Version**: HTML5, CSS3, Vanilla JavaScript (ES6+)  
**Primary Dependencies**: Devicon & Simple Icons via public jsDelivr CDN  
**Storage**: N/A (Static Web Application)  
**Testing**: Zero Automated Testing Policy (Constitution Principle IV) - Verified exclusively via manual browser inspection  
**Target Platform**: Modern Evergreen Browsers (Chrome, Safari, Firefox, Edge; Desktop & Mobile)  
**Project Type**: Static Web Application  
**Performance Goals**: Instant initial paint; lazy-loaded SVG icons (<5KB each); zero layout shift  
**Constraints**: Pure static HTML/CSS; zero npm build step or runtime dependencies; WCAG 2.1 AA accessible  
**Scale/Scope**: 1 primary file modified (`skills.html`), 5 category cards, ~46 skill badges  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I: Clean, Readable, and Well-Documented Code**: PASS. Semantic HTML5 markup with descriptive comments and clean indentation.
- **Principle II: Pure Static Foundation**: PASS. Pure static HTML5/CSS3 with zero JavaScript framework dependencies.
- **Principle III: Modern, Responsive Design & UX**: PASS. Responsive 2-column grid collapsing gracefully to 1 column on mobile.
- **Principle IV: Zero Automated Testing Policy (NON-NEGOTIABLE)**: PASS. No automated test suites; verification via manual browser inspection.
- **Principle V: Architectural Simplicity & Minimal Dependencies**: PASS. Uses established CDN vector icons without local build tools.

## Project Structure

### Documentation (this feature)

```text
specs/008-expand-technical-skills/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
│   └── ui-contracts.md  # UI HTML & Accessibility contracts
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
/Users/raghu/my-projects/my-profile/
├── skills.html          # Modified: 5-category layout, new skills & CDN icons
├── css/
│   └── styles.css       # Existing design system (grid, cards, badges)
└── js/
    └── main.js          # Existing client interactivity
```

**Structure Decision**: Direct modification of `skills.html` following existing markup patterns.

## Complexity Tracking

> **Constitution Check passed with zero violations. No complexity tracking exceptions required.**
