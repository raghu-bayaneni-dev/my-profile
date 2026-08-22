# Feature Specification: Update From Resume

**Feature Branch**: `002-update-from-resume`

**Created**: 2026-08-22

**Status**: Ready for Planning

**Input**: User description: "Update From Resume - Update the created site with real data from the resume. Need a resourse folder to upload latest resume."

## Clarifications

### Session 2026-08-22
- Q: How should the resume text data be provided for updating the site pages? → A: User uploads/places their resume file (PDF, TXT, or Markdown) in `resources/` for extraction and populating all site pages (Option A).
- Q: What document formats and filename convention should the resources folder support for resume viewing and downloads? → A: Standard `resources/resume.pdf` with direct browser view/download links across the site (Option A).
- Q: How should the uploaded resume file (`resources/RaghuAIEng.pdf`) be linked and named for public viewing and downloads across the website? → A: Standardize as `resources/resume.pdf` (copying/aliasing the uploaded resume `RaghuAIEng.pdf` as `resume.pdf`) so all site links remain clean, predictable, and resilient to future filename variations (Option A).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Real Resume Data Integration Across All Pages (Priority: P1)

As a site visitor, prospective employer, or recruiter, I want to view accurate, authentic professional credentials, experience milestones, technical skills, and project descriptions derived directly from the candidate's actual resume (`resources/RaghuAIEng.pdf`) so that I can evaluate the candidate's real capabilities and career trajectory.

**Why this priority**: Replacing placeholder text with genuine professional data transforms the website from an empty layout shell into an active, functional personal portfolio.

**Independent Test**: Navigate through every page (About, Experience, Projects, Skills, Contact) and verify that all placeholder cards, timeline bullets, and skills reflect the candidate's real resume data.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the Home/About page, **When** they read the hero and summary sections, **Then** they see authentic professional bio details, current title, primary focus areas, and career highlights extracted from `RaghuAIEng.pdf`.
2. **Given** a visitor navigates to the Experience page, **When** they view the career timeline, **Then** all positions display real company names, job titles, employment dates, and specific achievements from the resume.
3. **Given** a visitor navigates to the Projects and Skills pages, **When** they inspect the cards and badge groups, **Then** they see real project summaries, verified technical proficiencies, and authentic tooling domains.

---

### User Story 2 - Dedicated Resources Folder & Resume Download / View (Priority: P2)

As a prospective employer or recruiter, I want to access and download a complete, printable copy of the latest resume file directly from the website so that I can review it offline or share it with hiring committees.

**Why this priority**: Recruiters and hiring managers standardly require an offline PDF copy of a candidate's resume during hiring workflows.

**Independent Test**: Click the resume access link on the Home/About and Contact pages, and confirm that `resources/resume.pdf` opens or downloads reliably.

**Acceptance Scenarios**:

1. **Given** the uploaded resume file (`resources/RaghuAIEng.pdf`), **When** standardized as `resources/resume.pdf`, **Then** the file is safely stored and accessible via relative website links.
2. **Given** a site visitor on the Contact or Home page, **When** they click the "Download Resume" or "View Resume" button, **Then** the browser opens or downloads `resources/resume.pdf` from the resources directory.

---

### User Story 3 - Contact & Social Profile Link Accuracy (Priority: P3)

As a recruiter or collaborator, I want all contact cards and profile links to point to the candidate's verified communication channels (actual email, LinkedIn profile URL, GitHub profile URL, location) so that I can directly reach out without encountering broken or mock URLs.

**Why this priority**: Ensures seamless communication and verification of candidate credentials.

**Independent Test**: Click each social and contact link to verify they route to valid, candidate-specific destinations.

**Acceptance Scenarios**:

1. **Given** a visitor on the Contact page or footer, **When** they click the email, LinkedIn, or GitHub links, **Then** they are connected to the candidate's real channels.

---

### Edge Cases

- **Missing Resume File Fallback**: If a user clicks the resume download button before `resources/resume.pdf` is present, the site provides a clear fallback message or redirects to the direct Contact page.
- **Resume File Updates**: When a newer version of the resume is placed into `resources/`, refreshing `resources/resume.pdf` automatically serves the updated file without requiring changes to existing HTML links.
- **Cross-Browser PDF Viewing**: Links to `resources/resume.pdf` specify standard `target="_blank"` and `rel="noopener noreferrer"` attributes to allow seamless inline browser viewing or downloading across modern browsers.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a dedicated resources folder (`resources/`) in the project root to host downloadable document assets, including `resources/resume.pdf`.
- **FR-002**: The Home/About page (`index.html`) MUST display the candidate's actual professional identity, including real name, professional headline, summary bio, and core highlights sourced from `resources/RaghuAIEng.pdf`.
- **FR-003**: The Experience page (`experience.html`) MUST display the candidate's real employment history, including company names, roles, date ranges, and achievement bullet points.
- **FR-004**: The Projects page (`projects.html`) MUST showcase authentic projects, problem descriptions, technologies used, and real source/demo links.
- **FR-005**: The Skills page (`skills.html`) MUST reflect the candidate's genuine technical skills organized into logical domains (languages, frameworks, cloud, databases, tools).
- **FR-006**: The Contact page (`contact.html`) MUST display the candidate's actual contact information and verified social/professional profile links.
- **FR-007**: The system MUST provide prominent, accessible links on both the Home page hero section and the Contact page allowing visitors to view and download `resources/resume.pdf`.
- **FR-008**: The system MUST ingest and parse candidate resume content from `resources/RaghuAIEng.pdf` to update content across all static pages.
- **FR-009**: The downloadable resume asset MUST use the standardized relative path `resources/resume.pdf` across all pages.

### Key Entities

- **Resume Asset**: A static PDF document located at `resources/resume.pdf` representing the printable curriculum vitae.
- **Professional Profile**: The candidate's real identity, summary, career focus, and headline.
- **Career Milestone**: A historical employment record with company, job title, duration, and measurable achievements.
- **Project Item**: A featured software system or tool with summary, tech stack, and reference links.
- **Skill Domain**: A category grouping verified technical proficiencies.
- **Contact Channel**: A direct communication path (Email, LinkedIn, GitHub, Location).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of generic placeholder texts across all 5 site pages are replaced with authentic candidate resume data from `resources/RaghuAIEng.pdf`.
- **SC-002**: Visitors can access, view, or download `resources/resume.pdf` within 1 click from both the Home hero section and the Contact page.
- **SC-003**: All contact channels (Email, LinkedIn, GitHub, Location) route to valid, candidate-specific endpoints with zero broken links.
- **SC-004**: Updating `resources/resume.pdf` immediately updates the downloadable asset across the website without requiring HTML code changes.

---

## Assumptions

- The website maintains its existing pure static architecture (HTML5, CSS3, Vanilla JS) and clean light theme per the project constitution.
- The `resources/` directory exists at the repository root containing `RaghuAIEng.pdf`.
- The standardized `resources/resume.pdf` file is synchronized from `resources/RaghuAIEng.pdf`.
