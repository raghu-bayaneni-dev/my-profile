# Tasks: Expand & Reorganize Technical Skills

**Feature**: `008-expand-technical-skills`  
**Input**: Feature specification from [spec.md](file:///Users/raghu/my-projects/my-profile/specs/008-expand-technical-skills/spec.md) and design artifacts  
**Constitution Compliance**: Principle II (Pure Static HTML/CSS/JS) & Principle IV (Zero Automated Testing — Manual Browser Verification)  

---

## Phase 1: Setup & Foundational

**Purpose**: Verify asset endpoints and layout structure

- [x] T001 Verify CDN endpoints and asset availability for all newly added icons
- [x] T002 Review existing skills.html structure and prepare unified 5-category layout in `skills.html`

---

## Phase 2: User Story 1 - Unified Database & Vector Store Category (Priority: P1) 🎯 MVP

**Goal**: Consolidate all database systems (relational, cloud-managed, NoSQL, vector, and graph) into a single dedicated "Databases & Vector Stores" category card on `skills.html`.

**Independent Test**: Load `http://localhost:60213/skills.html` and inspect the "Databases & Vector Stores" card. Verify all relational, cloud, NoSQL, vector, and graph badges (PostgreSQL & MySQL, AlloyDB, Oracle & MongoDB, Pinecone, ChromaDB & FAISS, Neo4j) are unified in this single section with accurate vector logos.

- [x] T003 [US1] Create the dedicated `🗄️ Databases & Vector Stores` category section in `skills.html`
- [x] T004 [US1] Add Google AlloyDB (for PostgreSQL) badge with official vector icon in `skills.html`
- [x] T005 [US1] Consolidate PostgreSQL, MySQL, Oracle, MongoDB, Pinecone, ChromaDB, FAISS, and Neo4j badges into Databases & Vector Stores in `skills.html`

**Checkpoint**: User Story 1 is complete and all database technologies are consolidated into one card.

---

## Phase 3: User Story 2 - Dedicated AI IDEs & Modern Developer Tooling (Priority: P2)

**Goal**: Showcase next-generation agentic IDEs and autonomous coding tools (Claude Code, Google Antigravity, OpenAI Codex, Cursor, Windsurf) alongside cloud and DevOps tooling on `skills.html`.

**Independent Test**: Load `http://localhost:60213/skills.html` and inspect the "Cloud, DevOps & AI Developer Tools" card. Verify badges for Claude Code, Cursor & Windsurf and Google Antigravity & OpenAI Codex are rendered with valid vector logos.

- [x] T006 [US2] Update Cloud & DevOps section to `☁️ Cloud, DevOps & AI Developer Tools` in `skills.html`
- [x] T007 [US2] Add Claude Code, Cursor & Windsurf badge with Anthropic vector icon in `skills.html`
- [x] T008 [US2] Add Google Antigravity & OpenAI Codex badge with Google vector icon in `skills.html`

**Checkpoint**: User Story 2 is complete and all AI developer tools are visible under Cloud, DevOps & AI Developer Tools.

---

## Phase 4: User Story 3 - Enterprise Java Web Frameworks in Full-Stack (Priority: P3)

**Goal**: Showcase enterprise Java frameworks (Spring Boot, Spring MVC & Struts) alongside modern web and microservice technologies in Web & Full-Stack Architecture on `skills.html`.

**Independent Test**: Load `http://localhost:60213/skills.html` and inspect the "Web & Full-Stack Architecture" card. Verify `Spring Boot, Spring MVC & Struts` is rendered with the official Spring vector logo.

- [x] T009 [US3] Add `Spring Boot, Spring MVC & Struts` badge with official Spring vector icon in `skills.html`
- [x] T010 [US3] Reorganize Web & Full-Stack Architecture items for consistent full-stack ordering in `skills.html`

**Checkpoint**: User Story 3 is complete with full-stack enterprise Java frameworks showcased.

---

## Phase 5: Polish & Cross-Cutting Verification

**Purpose**: Ensure taxonomic consistency, accessibility compliance, and visual responsiveness across all viewports.

- [x] T011 Update Generative AI and AI Observability card headings and descriptions for consistent taxonomy in `skills.html`
- [x] T012 Verify all skill badge attributes (width, height, alt, aria-hidden, loading="lazy") in `skills.html`
- [x] T013 Execute manual browser validation across desktop, tablet, and mobile viewports against `quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies
- **Phase 1 (Setup)**: Pre-requisite check before modifying markup.
- **Phase 2 (US1 - MVP)**: Unifies database technologies into Category 3.
- **Phase 3 (US2)**: Updates Category 5 with AI developer tooling.
- **Phase 4 (US3)**: Updates Category 4 with enterprise Java frameworks.
- **Phase 5 (Polish)**: Validates responsive styling and accessibility.

### Implementation Strategy
1. **MVP**: Complete Phase 1 & Phase 2 (User Story 1 - Unified Databases).
2. **Incremental Delivery**: Complete Phase 3 (AI Dev Tools) and Phase 4 (Java Frameworks).
3. **Validation & Polish**: Complete Phase 5 (Responsive & Accessibility validation).
