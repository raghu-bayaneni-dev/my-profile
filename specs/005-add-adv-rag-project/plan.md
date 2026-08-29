# Implementation Plan: Add Advanced RAG Project Showcase

**Branch**: `005-add-adv-rag-project` | **Date**: 2026-08-28 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/005-add-adv-rag-project/spec.md`

## Summary

Integrate Raghu Bayaneni's live, public **Advanced Production RAG System** project into the profile website across `projects.html` (as the lead live featured project card) and `index.html` (as a prominent live demo spotlight banner). The integration highlights multi-query retrieval, hybrid dense/sparse search, cross-encoder reranking, Role-Based Access Control (RBAC) security boundaries, and Ragas evaluation suite metrics, with direct 1-click links to the live running Streamlit app (`https://my-adv-rag.streamlit.app/`) and public GitHub repository (`https://github.com/raghu-bayaneni-dev/my-adv-rag`).

## Technical Context

**Language/Version**: HTML5, CSS3, Vanilla JavaScript (ES6+)  
**Primary Dependencies**: None (Pure static web stack)  
**Storage**: N/A (Static files)  
**Testing**: Manual visual browser inspection (Strict compliance with Constitution Principle IV)  
**Target Platform**: Any modern web browser & GitHub Pages static hosting  
**Project Type**: Static portfolio / profile web application  
**Performance Goals**: Instant initial render (<50ms), 0kb additional JS payload  
**Constraints**: Pure static HTML/CSS, responsive across mobile (375px) to widescreen (1440px+), WCAG AA contrast  
**Scale/Scope**: 2 modified HTML files (`projects.html`, `index.html`)  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Compliance Status |
|---|---|---|
| **I. Clean, Readable Code** | Semantic HTML5, structured comments | ✅ PASS |
| **II. Pure Static Foundation** | HTML/CSS/Vanilla JS only, no React/frameworks | ✅ PASS |
| **III. Modern, Responsive UX** | Light theme CSS tokens, responsive flex/grid | ✅ PASS |
| **IV. Zero Automated Testing** | Manual browser verification only | ✅ PASS |
| **V. Architectural Simplicity** | Zero build step, static file delivery | ✅ PASS |

## Project Structure

### Documentation (this feature)

```text
specs/005-add-adv-rag-project/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 research & architectural decisions
├── data-model.md        # Phase 1 content & entity model
├── quickstart.md        # Phase 1 manual verification guide
├── contracts/
│   └── ui-contracts.md  # Phase 1 HTML markup contracts
├── checklists/
│   └── requirements.md  # Specification quality checklist
└── tasks.md             # Phase 2 tasks (/speckit-tasks output)
```

### Source Code (repository root)

```text
my-profile/
├── index.html           # Landing page (Add live demo spotlight section)
├── projects.html        # Projects showcase (Add Advanced RAG project card)
├── css/
│   └── styles.css       # Existing design system tokens (already supports cards/badges)
├── resources/
└── js/
```

**Structure Decision**: Direct markup additions in `projects.html` and `index.html` utilizing existing CSS classes (`.card`, `.project-card`, `.tag`, `.tag-accent`, `.btn`, `.btn-primary`, `.btn-secondary`, `.badge-primary`).

## Complexity Tracking

*No constitutional violations. Zero additional dependencies.*
