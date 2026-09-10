# Implementation Plan: Add Ascendion Experience & Update Salesforce Dates

**Branch**: `007-add-ascendion-experience` | **Date**: 2026-09-10 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/007-add-ascendion-experience/spec.md`

## Summary

Integrate Raghu Bayaneni's latest career milestone at **Ascendion** as **Lead AI & Forward Deployment Engineer - Enterprise AI Systems** (`Aug 2026 — Present`) into `experience.html` as the top timeline entry, including his executive summary, 6 core responsibility areas, and technology tags. Concurrently, update the historical tenure dates for **Salesforce** from `Jan 2012 — Recent` to `Jan 2012 — Apr 2026`, maintaining complete chronological accuracy and pure static compliance across the portfolio.

## Technical Context

**Language/Version**: Semantic HTML5, CSS3, Vanilla JavaScript (ES6+)  
**Primary Dependencies**: None (Pure static web stack)  
**Storage**: N/A (Static files)  
**Testing**: Manual visual browser inspection (Constitution Principle IV: Zero Automated Testing Policy)  
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge) & GitHub Pages  
**Project Type**: Static portfolio web application  
**Performance Goals**: Instant page render, 0kb added JS runtime overhead  
**Constraints**: Pure static HTML/CSS, responsive from 320px to 1440px+, zero build steps  
**Scale/Scope**: 1 modified HTML file (`experience.html`)  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Compliance Status |
|---|---|---|
| **I. Clean, Readable Code** | Semantic HTML5 markup, structured comments | ✅ PASS |
| **II. Pure Static Foundation** | HTML/CSS only, zero build steps or JS frameworks | ✅ PASS |
| **III. Modern, Responsive UX** | Fluid timeline, bold lead-ins, accent tags | ✅ PASS |
| **IV. Zero Automated Testing** | Manual browser inspection & devtools viewport testing | ✅ PASS |
| **V. Architectural Simplicity** | Flat directory structure, zero dependencies | ✅ PASS |

## Project Structure

### Documentation (this feature)

```text
specs/007-add-ascendion-experience/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 research & layout decisions
├── data-model.md        # Phase 1 content & entity model
├── quickstart.md        # Phase 1 manual validation guide
├── contracts/
│   └── ui-contracts.md  # Phase 1 HTML markup contract
├── checklists/
│   └── requirements.md  # Specification quality checklist
└── tasks.md             # Phase 2 tasks (/speckit-tasks output)
```

### Source Code (repository root)

```text
my-profile/
├── experience.html      # Add Ascendion timeline item & update Salesforce dates
├── index.html
├── projects.html
├── skills.html
├── contact.html
├── css/
│   └── styles.css       # Existing design system tokens (already supports timeline)
├── resources/
└── js/
```

**Structure Decision**: Direct markup additions in `experience.html` utilizing existing timeline classes (`.timeline-wrapper`, `.timeline-item`, `.timeline-marker`, `.timeline-content`, `.timeline-header`, `.timeline-role`, `.timeline-company`, `.timeline-date`, `.timeline-responsibilities`, `.tag-list`, `.tag`, `.tag-accent`).

## Complexity Tracking

*No constitutional violations. Zero external build dependencies.*
