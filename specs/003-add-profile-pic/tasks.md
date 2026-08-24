# Tasks: Add Profile Picture

**Feature**: Add Profile Picture | **Branch**: `003-add-profile-pic` | **Spec**: [`specs/003-add-profile-pic/spec.md`](file:///Users/raghu/my-projects/my-profile-site-with-spec/specs/003-add-profile-pic/spec.md) | **Plan**: [`specs/003-add-profile-pic/plan.md`](file:///Users/raghu/my-projects/my-profile-site-with-spec/specs/003-add-profile-pic/plan.md)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Asset verification and preparation

- [X] T001 Verify profile picture asset availability and file permissions at resources/profile.jpeg

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Design system and core CSS styling for squircle geometry, glassmorphism framing, and avatar components

**⚠️ CRITICAL**: Must complete before HTML pages can render avatar styles properly

- [X] T002 Implement CSS rules for squircle geometry, glassmorphism cards, ambient radial glow, and navigation thumbnail in css/styles.css
- [X] T003 Add responsive media queries and fallback styling for avatar components across mobile, tablet, and desktop viewports in css/styles.css

**Checkpoint**: Foundation ready - HTML page updates can now begin

---

## Phase 3: User Story 1 - Engaging Hero Avatar on Home Page (Priority: P1) 🎯 MVP

**Goal**: Integrate the candidate's portrait in a rounded squircle glassmorphic container with ambient glow into the Home page hero section.

**Independent Test**: Open `index.html` in browser and confirm the squircle hero portrait renders cleanly with hover elevation and ambient glow alongside the headline and bio.

### Implementation for User Story 1

- [X] T004 [US1] Integrate hero squircle avatar container and resources/profile.jpeg image markup into index.html

**Checkpoint**: User Story 1 complete - Home page hero displays the authentic profile portrait.

---

## Phase 4: User Story 2 - Profile Picture on Contact Card and Global Navigation (Priority: P2)

**Goal**: Add compact brand avatar thumbnail to the top navigation header on all pages and add a portrait card on the Contact page.

**Independent Test**: Navigate through all 5 site pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) to verify nav brand avatar thumbnail, and check the portrait card on `contact.html`.

### Implementation for User Story 2

- [X] T005 [P] [US2] Update navigation header brand link to include avatar thumbnail in index.html
- [X] T006 [P] [US2] Update navigation header brand link to include avatar thumbnail in experience.html
- [X] T007 [P] [US2] Update navigation header brand link to include avatar thumbnail in projects.html
- [X] T008 [P] [US2] Update navigation header brand link to include avatar thumbnail in skills.html
- [X] T009 [US2] Update navigation header brand link to include avatar thumbnail and add squircle portrait card into contact.html

**Checkpoint**: User Story 2 complete - Global navigation header and Contact page display profile branding.

---

## Phase 5: User Story 3 - Resilient Asset Delivery & Accessible Fallback (Priority: P3)

**Goal**: Ensure high accessibility standards with descriptive alt text, explicit dimensions to eliminate CLS, and responsive layout resilience.

**Independent Test**: Inspect all image elements in browser dev tools to verify non-empty `alt` attributes, explicit `width`/`height` constraints, and verify mobile layout scaling without overflow.

### Implementation for User Story 3

- [X] T010 [US3] Verify and audit all profile image tags across all HTML pages for descriptive alt text and explicit dimensions to prevent CLS in index.html, experience.html, projects.html, skills.html, and contact.html

**Checkpoint**: User Story 3 complete - All accessibility and layout stability criteria verified.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Cross-viewport manual verification and final cleanup

- [X] T011 Execute manual validation procedures across desktop, tablet, and mobile viewports per specs/003-add-profile-pic/quickstart.md
- [X] T012 Perform code cleanup, comment review, and ensure 100% compliance with constitution principles in css/styles.css and all HTML files

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 - BLOCKS all HTML integration tasks.
- **User Story 1 (Phase 3)**: Depends on Phase 2 - delivers MVP.
- **User Story 2 (Phase 4)**: Depends on Phase 2 - can execute after or alongside US1.
- **User Story 3 (Phase 5)**: Depends on Phases 3 & 4 completion.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### Parallel Opportunities

- Within Phase 4: `T005`, `T006`, `T007`, `T008` touch separate HTML files and can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 (Setup: T001)
2. Complete Phase 2 (Foundational CSS: T002, T003)
3. Complete Phase 3 (Home Page Hero Avatar: T004)
4. Validate Home page in browser → MVP ready!

### Incremental Delivery
1. Foundation (T001 - T003)
2. MVP: Hero Avatar on Home Page (T004)
3. Global Branding: Nav Avatar across all 5 pages + Contact card (T005 - T009)
4. Accessibility & Layout Stability (T010)
5. Full Cross-Device Manual Verification (T011 - T012)
