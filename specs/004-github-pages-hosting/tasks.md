# Tasks: GitHub Pages Hosting Refactor

**Branch**: `004-github-pages-hosting`
**Spec**: [spec.md](file:///Users/raghu/my-projects/my-profile-site-with-spec/specs/004-github-pages-hosting/spec.md)
**Plan**: [plan.md](file:///Users/raghu/my-projects/my-profile-site-with-spec/specs/004-github-pages-hosting/plan.md)

## Phase 1: Setup (Hosting & Deployment Infrastructure)

**Purpose**: Establish GitHub Pages configuration and automated deployment pipeline

- [X] T001 [P] Create `.nojekyll` file at repository root to disable default Jekyll processing
- [X] T002 [P] Create GitHub Actions workflow `.github/workflows/deploy.yml` for static GitHub Pages deployment

---

## Phase 2: Foundational (Subpath & Path Portability Infrastructure)

**Purpose**: Ensure universal relative asset pathing across all HTML documents for root and subpath hosting

- [X] T003 [P] Verify and standardize relative asset links in `index.html` (CSS, JS, profile image, resume)
- [X] T004 [P] Verify and standardize relative asset links in `experience.html` (CSS, JS, avatar)
- [X] T005 [P] Verify and standardize relative asset links in `skills.html` (CSS, JS, avatar)
- [X] T006 [P] Verify and standardize relative asset links in `projects.html` (CSS, JS, avatar)
- [X] T007 [P] Verify and standardize relative asset links in `contact.html` (CSS, JS, avatar)

**Checkpoint**: Base foundation and path structure verified across all existing pages.

---

## Phase 3: User Story 1 - Public Portfolio Browsing on GitHub Pages (Priority: P1) 🎯 MVP

**Goal**: Deliver a fully functional, publicly accessible profile website on GitHub Pages with clean styling, responsive layouts, and functioning media assets.

**Independent Test**: Load the root and all subpages (`index.html`, `experience.html`, `skills.html`, `projects.html`, `contact.html`) locally and in simulated subpath environments; verify 100% asset loading (200 OK) with no missing CSS, fonts, or images.

### Implementation for User Story 1

- [X] T008 [P] [US1] Create branded `404.html` error page matching site header, typography, and styling with home return link
- [X] T009 [US1] Audit navigation header links across all HTML files to ensure consistent relative intra-site routing
- [X] T010 [US1] Verify resume download link in `index.html` (`resources/resume.pdf`) functions properly on static hosting

**Checkpoint**: At this point, User Story 1 delivers the full MVP experience for GitHub Pages.

---

## Phase 4: User Story 2 - Automated GitHub Pages Deployment Workflow (Priority: P2)

**Goal**: Ensure automated GitHub Pages publishing on push to `main` branch with zero manual build steps.

**Independent Test**: Review `.github/workflows/deploy.yml` action definition and test deployment steps with `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`.

### Implementation for User Story 2

- [X] T011 [US2] Configure deployment triggers, permissions (`pages: write`, `id-token: write`), and root artifact path in `.github/workflows/deploy.yml`
- [X] T012 [US2] Add workflow validation notes and repository Pages settings setup instructions to `README.md`

**Checkpoint**: User Stories 1 and 2 deliver automated continuous deployment.

---

## Phase 5: User Story 3 - Clean Subpath & Asset Resolution Compatibility (Priority: P3)

**Goal**: Ensure resilience against varied hosting topologies (custom domains, user root pages, repository subpaths).

**Independent Test**: Verify that all stylesheets, scripts, and favicon/media resources load cleanly with no leading slashes (`/`).

### Implementation for User Story 3

- [X] T013 [P] [US3] Audit `css/styles.css` for any root-relative font or background URL references
- [X] T014 [P] [US3] Audit `js/main.js` for any DOM link manipulation or absolute URL assumptions

**Checkpoint**: All user stories complete with high portability across hosting targets.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validation, documentation, and final review against Constitution principles

- [X] T015 [P] Update `package.json` description/metadata if applicable
- [X] T016 Execute manual browser verification following `specs/004-github-pages-hosting/quickstart.md`
- [X] T017 Verify Constitution adherence (Principles I-V, Zero Automated Tests policy)

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Can run in parallel with Setup.
- **User Story 1 (Phase 3)**: Depends on Phase 1 & Phase 2.
- **User Story 2 (Phase 4)**: Depends on Phase 1.
- **User Story 3 (Phase 5)**: Depends on Phase 2 & Phase 3.
- **Polish (Phase 6)**: Depends on completion of all stories.

### Parallel Opportunities
- T001 (`.nojekyll`) and T002 (`deploy.yml`) can be created in parallel.
- T003 - T007 (auditing individual HTML files) can be executed in parallel.
- T008 (`404.html`) and T013 (`styles.css` check) can run in parallel.
