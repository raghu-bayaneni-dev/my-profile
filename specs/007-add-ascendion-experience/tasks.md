# Tasks: Add Ascendion Experience & Update Salesforce Dates

**Feature**: Add Ascendion Experience & Update Salesforce Dates (`007-add-ascendion-experience`)  
**Status**: Completed  
**Spec**: [spec.md](spec.md) | **Plan**: [plan.md](plan.md) | **Quickstart**: [quickstart.md](quickstart.md)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Review existing timeline component and verify markup patterns

- [x] T001 Review existing timeline structure and styling classes in experience.html and css/styles.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core timeline styling verification that MUST be complete before markup changes

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Verify CSS styling for .timeline-item, .timeline-role, .timeline-company, .timeline-date, .timeline-responsibilities, and .tag-list in css/styles.css

**Checkpoint**: Foundation ready - timeline markup implementation can now begin

---

## Phase 3: User Story 1 - Discover Recent Role & Responsibilities at Ascendion (Priority: P1) 🎯 MVP

**Goal**: Feature Ascendion as the top active milestone on `experience.html` with title, dates ("Aug 2026 — Present"), overview summary, 6 responsibility areas, and technology tags.

**Independent Test**: Open `experience.html` in a web browser and confirm the top timeline item displays the Ascendion role with all 6 bullet points, executive overview, and technology pills.

### Implementation for User Story 1

- [x] T003 [US1] Insert Ascendion milestone article as the first item in .timeline-wrapper in experience.html with title, company, dates (Aug 2026 — Present), and overview summary
- [x] T004 [US1] Add all 6 structured responsibility bullets (Customer Engagement & Discovery, Enterprise Agentic Architecture, System Integration & Microservices, Performance & Cost Optimization, Engineering Strategy & Reusable Accelerators, Enterprise Transformation & Observability) to the Ascendion milestone in experience.html
- [x] T005 [US1] Add technology tag pills (Agentic AI, Forward Deployed Systems, Multi-Agent Frameworks, Advanced RAG, Python, TypeScript, Java, Vector DBs, AI Observability) to the Ascendion milestone in experience.html

**Checkpoint**: At this point, User Story 1 (MVP) is fully functional with the Ascendion milestone prominently displayed at the top of the Career Experience timeline.

---

## Phase 4: User Story 2 - Updated Historic Salesforce Milestone Tenure (Priority: P2)

**Goal**: Update the Salesforce milestone date badge on `experience.html` to reflect the completed tenure of `Jan 2012 — Apr 2026`.

**Independent Test**: Inspect the Salesforce card on `experience.html` and verify the date badge renders "Jan 2012 — Apr 2026".

### Implementation for User Story 2

- [x] T006 [US2] Update Salesforce milestone date badge in experience.html from 'Jan 2012 — Recent' to 'Jan 2012 — Apr 2026'

**Checkpoint**: User Story 2 complete - Salesforce tenure accurately reflects completed dates.

---

## Phase 5: User Story 3 - Site-Wide Alignment & Hero Overview Consistency (Priority: P3)

**Goal**: Verify home page hero summary and career milestones for consistent storytelling.

**Independent Test**: Open `index.html` and verify hero headlines and career experience overview align with the updated timeline without contradictory tenures.

### Implementation for User Story 3

- [x] T007 [P] [US3] Verify index.html hero summary and highlights to ensure consistency with updated forward-deployed leadership profile

**Checkpoint**: All user stories complete with cohesive site-wide experience representation.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final manual visual validation and specification checklist confirmation

- [x] T008 [P] Perform manual visual browser inspection of experience.html across mobile, tablet, and desktop viewports per quickstart.md
- [x] T009 [P] Re-validate specification quality checklist in specs/007-add-ascendion-experience/checklists/requirements.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories.
- **User Story 1 (Phase 3 - MVP)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion.
- **User Story 3 (Phase 5)**: Can run in parallel with User Story 2.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### Parallel Opportunities

- In Phase 5: `T007` can run in parallel with `T006`.
- In Phase 6: `T008` and `T009` can run in parallel.

---

## Parallel Example: User Story 1 & User Story 3

```bash
# Verify home page while updating experience timeline:
Task: "Update Salesforce milestone date badge in experience.html" (T006)
Task: "Verify index.html hero summary" (T007)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 (Setup) & Phase 2 (Foundational verification).
2. Complete Phase 3 (Add Ascendion milestone to `experience.html`).
3. **Validate MVP**: Open `experience.html` and visually inspect the new top milestone.

### Incremental Polish

1. Complete Phase 4 (Update Salesforce date to `Jan 2012 — Apr 2026`).
2. Complete Phase 5 (Verify `index.html` alignment).
3. Complete final inspection and checklist verification in Phase 6.
