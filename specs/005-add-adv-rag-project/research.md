# Phase 0: Research & Technical Analysis

**Feature**: Add Advanced RAG Project Showcase (`005-add-adv-rag-project`)  
**Date**: 2026-08-28  

## Key Architectural Decisions

### Decision 1: Showcase Card Presentation on `projects.html`
- **Chosen**: Place the "Advanced Production RAG System" at the top of the Projects grid as the first featured card with a distinct `🌟 Live Application` badge and custom border accent.
- **Rationale**: Demonstrates direct hands-on proof of running GenAI code before static/theoretical architecture case studies.
- **Alternatives Considered**:
  - *Adding at the bottom*: Less impactful for hiring managers and technical recruiters looking for immediate live demonstrations.
  - *Separate tab/page for live apps*: Overcomplicates navigation and violates Constitution Principle V (Architectural Simplicity).

### Decision 2: Landing Page (`index.html`) Live Spotlight Callout
- **Chosen**: Add an eye-catching, responsive callout banner just below the "Core Engineering Pillars" on `index.html`.
- **Rationale**: Maximizes homepage engagement by giving visitors immediate 1-click access to launch the live Streamlit app without requiring deeper navigation.
- **Alternatives Considered**:
  - *Hero button only*: Already has Resume and section navigation buttons; a distinct spotlight section provides space for architectural highlights (RBAC, Ragas, Hybrid Search).

### Decision 3: Highlighting RBAC and Ragas Evaluation Suite
- **Chosen**: Explicitly integrate RBAC and Ragas into the project title/tagline, description body, and tag badges (`RBAC`, `Ragas Eval`, `Streamlit Live App`, `Python`, `Advanced RAG`, `Hybrid Search`).
- **Rationale**: Differentiates standard toy RAG tutorials from production-grade enterprise implementations that feature multi-tenant security boundaries and rigorous automated evaluation metrics (faithfulness, answer relevancy, context precision/recall).
- **Alternatives Considered**:
  - *Generic RAG tags only*: Fails to convey enterprise depth.

### Decision 4: Pure Static Compliance (Constitution Check)
- **Chosen**: Use pure semantic HTML5 elements and existing CSS design system variables (`--bg-surface`, `--accent-primary`, `--accent-border`, `--shadow-md`, `--radius-lg`, `--text-sm`).
- **Rationale**: 100% compliant with Constitution Principles I, II, III, IV, and V. Zero dependencies, zero build steps, zero automated test overhead.
