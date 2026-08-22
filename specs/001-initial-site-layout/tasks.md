# Tasks: Initial Site Layout

**Feature**: `001-initial-site-layout`
**Date**: 2026-08-22
**Spec**: [spec.md](spec.md) | **Plan**: [plan.md](plan.md)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic folder structure

- [ ] T001 Create project directory structure for css/ and js/ assets
- [ ] T002 Configure minimal package.json with local dev preview server script in package.json

---

## Phase 2: Foundational (Design Tokens, Base CSS & Shared Scripts)

**Purpose**: Core design tokens, layout utilities, and base script structure that all pages depend on

**⚠️ CRITICAL**: Foundational styles and scripts must be ready before assembling individual page contents

- [ ] T003 Implement CSS custom properties, reset, typography, and base layout in css/styles.css
- [ ] T004 Implement shared header, navigation bar, and active link styles in css/styles.css
- [ ] T005 Implement shared card containers, tag badges, and timeline layout styles in css/styles.css
- [ ] T006 Initialize shared vanilla JavaScript foundation and DOMContentLoaded listener in js/main.js

**Checkpoint**: Foundation ready — individual page layouts and interactive features can now be built.

---

## Phase 3: User Story 1 - Header Navigation & Multi-Page Content Viewing (Priority: P1) 🎯 MVP

**Goal**: Implement the 5 core static HTML pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) with persistent header navigation and structured placeholder content.

**Independent Test**: Open any page directly in the browser, click each header navigation link, and verify the destination page loads with the active navigation state and formatted placeholder content.

### Implementation for User Story 1

- [ ] T007 [P] [US1] Create Home/About page with hero section and bio placeholder in index.html
- [ ] T008 [P] [US1] Create Experience timeline page with career milestone cards in experience.html
- [ ] T009 [P] [US1] Create Projects showcase page with featured project grid in projects.html
- [ ] T010 [P] [US1] Create Skills page with categorized technical badges in skills.html
- [ ] T011 [P] [US1] Create Contact page with direct reach-out cards in contact.html

**Checkpoint**: User Story 1 is fully functional — all 5 pages exist, link to one another, and present structured placeholder content (Viable MVP).

---

## Phase 4: User Story 2 - Responsive Mobile Navigation (Priority: P2)

**Goal**: Implement a responsive navigation drawer and hamburger button for mobile and tablet viewports.

**Independent Test**: On a mobile viewport (<768px), click the hamburger button to toggle the menu drawer, select a navigation link, and verify navigation occurs with the drawer cleanly reset.

### Implementation for User Story 2

- [ ] T012 [P] [US2] Implement responsive mobile navigation and hamburger button styles in css/styles.css
- [ ] T013 [US2] Implement mobile menu toggle, aria-expanded attribute, and auto-close event listeners in js/main.js

**Checkpoint**: User Stories 1 and 2 work seamlessly together across mobile and desktop screen sizes.

---

## Phase 5: User Story 3 - Professional Footer & Quick Links (Priority: P3)

**Goal**: Provide a consistent footer across all pages with copyright information, social links, and smooth back-to-top scrolling.

**Independent Test**: Scroll to the bottom of any page, verify footer metadata and links, click the "↑ Top" button, and verify smooth viewport scrolling back to the top header.

### Implementation for User Story 3

- [ ] T014 [P] [US3] Implement footer layout, social links, and back-to-top button styles in css/styles.css
- [ ] T015 [US3] Implement smooth scroll-to-top click handler in js/main.js
- [ ] T016 [US3] Add consistent semantic footer markup across index.html, experience.html, projects.html, skills.html, and contact.html

**Checkpoint**: Complete multi-page layout wrapper (Header + Content + Footer) is active across all 5 pages.

---

## Phase 6: User Story 4 - Local Verification & Server Startup (Priority: P2)

**Goal**: Provide a one-command local HTTP preview server (`npm start`) for rapid manual browser verification.

**Independent Test**: Run `npm start` from repository root, confirm preview server boots on `http://localhost:3000`, and browse all pages without errors.

### Implementation for User Story 4

- [ ] T017 [US4] Install serve dependency and verify npm start command launches static preview server in package.json

**Checkpoint**: Local development and verification workflow is fully operable.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Documentation compliance, code formatting, and cross-browser manual verification

- [ ] T018 [P] Add file header documentation and explanatory inline comments across all HTML, CSS, and JS files per Constitution Principle I
- [ ] T019 Run manual verification checklist across mobile, tablet, and desktop viewports per specs/001-initial-site-layout/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 — BLOCKS all user stories.
- **User Story 1 (Phase 3 - MVP)**: Depends on Phase 2 Foundational styles/scripts.
- **User Story 2 (Phase 4)**: Depends on Phase 2 & Phase 3 (enhances header navigation for mobile).
- **User Story 3 (Phase 5)**: Depends on Phase 3 (applies consistent footer across all pages).
- **User Story 4 (Phase 6)**: Depends on Phase 1 & Phase 3.
- **Polish (Phase 7)**: Depends on all user stories being complete.

### Parallel Opportunities

- Phase 1: `T001` and `T002` can be executed sequentially or in parallel.
- Phase 2: Base CSS (`T003`, `T004`, `T005`) and JS skeleton (`T006`) can be written in parallel.
- Phase 3: All 5 HTML pages (`T007`, `T008`, `T009`, `T010`, `T011`) can be created in parallel once base CSS is established.
- Phase 4 & 5: Mobile drawer CSS (`T012`) and footer CSS (`T014`) can be authored in parallel.

---

## Parallel Example: User Story 1 (Pages Creation)

```bash
# Create all static HTML pages in parallel:
Task: "Create Home/About page with hero section in index.html"
Task: "Create Experience timeline page in experience.html"
Task: "Create Projects showcase page in projects.html"
Task: "Create Skills page in skills.html"
Task: "Create Contact page in contact.html"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete **Phase 1: Setup** (`package.json`, directories).
2. Complete **Phase 2: Foundational** (`css/styles.css` base tokens and layout).
3. Complete **Phase 3: User Story 1** (5 HTML pages with desktop header navigation).
4. **STOP and VALIDATE**: Open `index.html` in browser and test page links. (Viable MVP).

### Incremental Delivery
1. Add **User Story 2** → Responsive mobile navigation drawer.
2. Add **User Story 3** → Complete footer with social links & back-to-top scroll.
3. Add **User Story 4** → Verify `npm start` one-command preview server.
4. Run **Phase 7: Polish** → Complete documentation headers and validation per `quickstart.md`.
