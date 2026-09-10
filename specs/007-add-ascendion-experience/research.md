# Phase 0 Research: Ascendion Milestone & Salesforce Timeline Update

**Feature**: Add Ascendion Experience & Update Salesforce Dates  
**Branch**: `007-add-ascendion-experience`  
**Date**: 2026-09-10  

## Technical Decisions & Layout Analysis

### 1. Timeline Structure & Component Integration

- **Decision**: Insert Ascendion as the first `<article class="timeline-item">` inside `<div class="timeline-wrapper">` on `experience.html`.
- **Rationale**:
  - The existing timeline in `experience.html` orders roles reverse-chronologically with `.timeline-marker`, `.timeline-header`, `.timeline-role`, `.timeline-company`, `.timeline-date`, `.timeline-responsibilities`, and `.tag-list`.
  - Adding Ascendion at the top immediately establishes Raghu's current professional identity as **Lead AI & Forward Deployment Engineer - Enterprise AI Systems** (`Aug 2026 — Present`).
  - Updating Salesforce dates to `Jan 2012 — Apr 2026` provides seamless chronological continuity.
- **Alternatives Considered**:
  - *Adding a separate "Current Role" spotlight banner*: Rejected because the unified timeline layout cleanly conveys career progression and hierarchy without cluttering the page.

---

### 2. Semantic Markup & Typography Consistency

- **Decision**: Format all 6 responsibilities as `<li><strong>Lead-In:</strong> Description</li>` inside `<ul class="timeline-responsibilities">`.
- **Rationale**:
  - Matches the established pattern used across the Salesforce, BlackRock, and Yahoo! milestones.
  - Ensures scannability for recruiters, hiring managers, and enterprise leaders.
  - Preserves accessibility and responsive text flow across mobile and desktop viewports.

---

### 3. Tag Selection & Visual Weight

- **Decision**: Apply `.tag.tag-accent` to top primary keywords (`Agentic AI`, `Forward Deployed Systems`, `Multi-Agent Frameworks`, `Advanced RAG`) and standard `.tag` to supplementary technologies (`Python`, `TypeScript`, `Java`, `Vector DBs`, `AI Observability`).
- **Rationale**:
  - Maintains visual hierarchy and highlights forward-deployed Generative AI specializations.
