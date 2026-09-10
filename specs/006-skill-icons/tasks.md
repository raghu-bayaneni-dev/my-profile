# Tasks: Include Public Icons for Skills

**Feature**: Include Public Icons for Skills (`006-skill-icons`)  
**Status**: Completed  
**Spec**: [spec.md](spec.md) | **Plan**: [plan.md](plan.md) | **Quickstart**: [quickstart.md](quickstart.md)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify asset endpoints and prepare styling baseline

- [x] T001 Verify CDN endpoints and asset availability for Devicon and Simple Icons SVG resources per research.md
- [x] T002 [P] Review existing CSS styling in css/styles.css for .skill-badge, .skill-items-grid, and .skill-category-card

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core CSS rules for skill icons and badge alignment that MUST be complete before HTML updates

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Add .skill-icon CSS rule (18px × 18px, object-fit: contain, flex-shrink: 0, inline-block) to css/styles.css
- [x] T004 [P] Update .skill-badge styling in css/styles.css to support flexible gap spacing, baseline centering, and smooth hover transitions with embedded icons

**Checkpoint**: Foundation ready - HTML badge modernization across user stories can now begin

---

## Phase 3: User Story 1 - Instant Visual Recognition of Technical Proficiencies (Priority: P1) 🎯 MVP

**Goal**: Replace generic bullet dots with official, high-resolution public technology vector icons in authentic brand colors across all 4 skill categories in `skills.html`.

**Independent Test**: Open `skills.html` in a web browser and confirm every skill badge renders with its authentic full-color vector logo, replacing `<span class="skill-dot"></span>` with `<img class="skill-icon">`.

### Implementation for User Story 1

- [x] T005 [P] [US1] Update Generative AI & Agentic Orchestration skill badges in skills.html with official public vector icons (ADK, LangChain, CrewAI, MCP, PEFT, Prompt Engineering, Agentforce, GPT/Claude/Gemini, Mistral)
- [x] T006 [P] [US1] Update Vector DBs & AI Observability skill badges in skills.html with official public vector icons (Pinecone, ChromaDB, LangSmith, Phoenix, Ragas, DeepEval, Guardrails AI, Weights & Biases, NumPy, TDD)
- [x] T007 [P] [US1] Update Web & Full-Stack Architecture skill badges in skills.html with official public vector icons (TypeScript, JavaScript, Python, Java, Node.js, React, FastAPI, GraphQL, gRPC, HTML5, Salesforce LWC/Apex)
- [x] T008 [P] [US1] Update Databases & Cloud Infrastructure skill badges in skills.html with official public vector icons (PostgreSQL, MongoDB, Neo4j, AWS, GCP, Docker, Kubernetes, GitHub Actions, Git, Claude/Cursor)

**Checkpoint**: At this point, User Story 1 (MVP) is fully functional with 100% of skill badges upgraded to public vector icons.

---

## Phase 4: User Story 2 - Consistent Responsive Layout & High-Density Grid (Priority: P2)

**Goal**: Ensure skill badge grids flow smoothly across mobile, tablet, and desktop screens with uniform padding and vertical centering.

**Independent Test**: Resize browser viewport between 320px and 1440px and verify badges adapt without overflow, clipping, or uneven heights.

### Implementation for User Story 2

- [x] T009 [US2] Verify and adjust grid spacing and minmax column rules in css/styles.css for .skill-items-grid across mobile (320px–480px), tablet (640px–1024px), and desktop (1024px+)
- [x] T010 [US2] Validate that composite badges with primary lead icons (e.g., "React, Next.js & Angular", "GPT, Claude, Gemini, Llama") wrap and align without clipping or overflow in skills.html

**Checkpoint**: User Story 2 complete - responsive layout validated across all screen sizes.

---

## Phase 5: User Story 3 - Resilient Icon Loading & Zero Build Overhead (Priority: P3)

**Goal**: Ensure fast, asynchronous icon loading, complete accessibility attributes (`aria-hidden="true"`, `alt=""`), and graceful text label fallback.

**Independent Test**: Inspect DOM and network tab on `skills.html` to confirm accessibility tags, lazy loading attributes, and immediate fallback legibility.

### Implementation for User Story 3

- [x] T011 [US3] Ensure all <img> tags in skills.html include loading="lazy", width="18", height="18", alt="", and aria-hidden="true" for accessible and fast rendering
- [x] T012 [US3] Verify graceful text label fallback and high-contrast legibility on light card backgrounds in skills.html

**Checkpoint**: All user stories complete with resilient, accessible, and fast static loading.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final manual visual validation and specification checklist confirmation

- [x] T013 [P] Perform manual visual browser inspection of skills.html per quickstart.md across all viewports
- [x] T014 [P] Re-validate specification quality checklist in specs/006-skill-icons/checklists/requirements.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories.
- **User Story 1 (Phase 3 - MVP)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion.
- **User Story 3 (Phase 5)**: Depends on User Story 1 and 2 completion.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### Parallel Opportunities

- In Phase 1: `T002` can run in parallel with `T001`.
- In Phase 2: `T004` can run in parallel with `T003`.
- In Phase 3: `T005`, `T006`, `T007`, and `T008` can be edited in parallel across the distinct category sections of `skills.html`.
- In Phase 6: `T013` and `T014` can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Update category markup blocks concurrently:
Task: "Update Generative AI skill badges in skills.html" (T005)
Task: "Update Vector DBs skill badges in skills.html" (T006)
Task: "Update Web & Full-Stack skill badges in skills.html" (T007)
Task: "Update Databases & Cloud skill badges in skills.html" (T008)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 (Setup) & Phase 2 (Foundational CSS rules in `css/styles.css`).
2. Complete Phase 3 (Upgrade all 44 skill badges in `skills.html`).
3. **Validate MVP**: Open `skills.html` and visually inspect the rendered vector icons.

### Incremental Polish

1. Apply responsive adjustments in Phase 4 (`css/styles.css`).
2. Verify accessibility attributes and loading resilience in Phase 5 (`skills.html`).
3. Complete final inspection and checklist verification in Phase 6.
