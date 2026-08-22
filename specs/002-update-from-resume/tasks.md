# Tasks: Update From Resume

**Feature**: `002-update-from-resume`
**Date**: 2026-08-22
**Spec**: [spec.md](spec.md) | **Plan**: [plan.md](plan.md)

## Phase 1: Setup & Asset Standardization

**Purpose**: Standardize the downloadable resume file in the resources directory

- [X] T001 Synchronize uploaded resume by copying resources/RaghuAIEng.pdf to resources/resume.pdf

---

## Phase 2: User Story 1 - Real Resume Data Integration Across All Pages (Priority: P1) 🎯 MVP

**Goal**: Replace all generic placeholder text across all 5 pages with Raghu Bayaneni's authentic credentials, career milestones, projects, and technical skills extracted from the resume.

**Independent Test**: Navigate to each of the 5 pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) and verify that all sections present authentic, verified details from `RaghuAIEng.pdf`.

### Implementation for User Story 1

- [X] T002 [P] [US1] Update Home/About page with Lead Staff AI Engineer headline, 15+ years experience bio, and 3 Core Engineering Pillars in index.html
- [X] T003 [P] [US1] Update Career Experience page with Salesforce, BlackRock, Yahoo!, and Prompt Technologies timeline milestones in experience.html
- [X] T004 [P] [US1] Update Projects Showcase page with Agentforce, Enterprise RAG, LLM Cost-Router, SpecKit Studio, and Yahoo APT cards in projects.html
- [X] T005 [P] [US1] Update Technical Skills page with Generative AI, Vector DBs, Full-Stack, Education, Stanford ML cert, and Agentblazer Champion badges in skills.html

**Checkpoint**: User Story 1 complete — the website now displays 100% authentic resume data across all pages (Viable MVP).

---

## Phase 3: User Story 2 - Dedicated Resources Folder & Resume Download / View (Priority: P2)

**Goal**: Provide 1-click access to view and download `resources/resume.pdf` from the Home hero banner, Contact page, and global footer.

**Independent Test**: Click the resume access link on the Home page, Contact page, and footer, and verify that `resources/resume.pdf` opens or downloads reliably in the browser.

### Implementation for User Story 2

- [X] T006 [P] [US2] Add primary "View / Download Resume" CTA button linking to resources/resume.pdf in index.html
- [X] T007 [P] [US2] Add dedicated Resume Download card linking to resources/resume.pdf in contact.html
- [X] T008 [US2] Add direct "Resume (PDF)" download link in site-footer across index.html, experience.html, projects.html, skills.html, and contact.html

**Checkpoint**: User Stories 1 and 2 work seamlessly — visitors can read authentic content and download the complete PDF resume.

---

## Phase 4: User Story 3 - Contact & Social Profile Link Accuracy (Priority: P3)

**Goal**: Ensure all direct contact channels (email, phone, LinkedIn, location) link to verified destinations without broken or mock URLs.

**Independent Test**: Click each contact link and verify that email opens `mailto:raghu.bayaneni@gmail.com`, phone opens `tel:+12095978323`, and LinkedIn connects to `https://www.linkedin.com/in/raghuramz`.

### Implementation for User Story 3

- [X] T009 [US3] Update verified email (raghu.bayaneni@gmail.com), phone ((209) 597 8323), LinkedIn URL, and SF Bay Area location in contact.html
- [X] T010 [US3] Update verified LinkedIn profile link (https://www.linkedin.com/in/raghuramz) in site-footer across index.html, experience.html, projects.html, skills.html, and contact.html

**Checkpoint**: All external communication channels and metadata are verified and active.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation compliance, code cleanliness, and manual browser verification

- [X] T011 [P] Update file header documentation and explanatory inline comments across all modified HTML files per Constitution Principle I
- [X] T012 Run full manual verification checklist across desktop, tablet, and mobile viewports per specs/002-update-from-resume/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately.
- **User Story 1 (Phase 2 - MVP)**: Depends on Phase 1 (Resume asset in place).
- **User Story 2 (Phase 3)**: Depends on Phase 1 & Phase 2.
- **User Story 3 (Phase 4)**: Depends on Phase 2 & Phase 3.
- **Polish (Phase 5)**: Depends on all user story implementations being complete.

### Parallel Opportunities

- Phase 2: All page content updates (`T002`, `T003`, `T004`, `T005`) can be authored in parallel once resume facts are mapped.
- Phase 3: Resume CTA button (`T006`) and Resume Card (`T007`) can be created in parallel.
- Phase 5: Documentation header updates (`T011`) can run in parallel with review.

---

## Parallel Example: User Story 1 (Page Content Updates)

```bash
# Update all HTML pages in parallel with resume content:
Task: "Update Home/About page with Lead Staff AI Engineer bio in index.html"
Task: "Update Career Experience page with Salesforce, BlackRock, Yahoo! milestones in experience.html"
Task: "Update Projects Showcase page with Agentforce & RAG project cards in projects.html"
Task: "Update Technical Skills page with Generative AI & Vector DB badges in skills.html"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete **Phase 1: Setup** (copy `resources/RaghuAIEng.pdf` → `resources/resume.pdf`).
2. Complete **Phase 2: User Story 1** (update all 5 HTML pages with authentic data).
3. **STOP and VALIDATE**: Open local preview server and confirm authentic resume content renders across all pages (Viable MVP).

### Incremental Delivery
1. Add **User Story 2** → Connect resume download buttons and footer links to `resources/resume.pdf`.
2. Add **User Story 3** → Connect real email, phone, and LinkedIn anchors.
3. Run **Phase 5: Polish** → Update documentation headers and execute `quickstart.md` validation.
