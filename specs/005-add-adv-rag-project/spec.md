# Feature Specification: Add Advanced RAG Project Showcase

**Feature Branch**: `005-add-adv-rag-project`

**Created**: 2026-08-28

**Status**: Clarified

**Input**: User description: "I now have a portfolio project that is hosted on github public repo https://github.com/raghu-bayaneni-dev/my-adv-rag and also live demo available at https://my-adv-rag.streamlit.app/. Please include this project in my profile site and add nice title and description etc and link to live demo and source"

## Clarifications

### Session 2026-08-28
- Q: What specific architectural capabilities should be highlighted in the project description, tagline, and badges? → A: Explicitly include **Role-Based Access Control (RBAC)** (multi-tenant permission filtering) and **Ragas Evaluation Suite** (faithfulness, answer relevancy, and context recall benchmarking) alongside hybrid retrieval, reranking, and live Streamlit deployment.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover and Launch Live Advanced RAG Demo from Projects Showcase (Priority: P1)

A technical recruiter, hiring manager, or engineering leader browsing Raghu's portfolio projects wants to see live, working demonstrations of his Generative AI engineering work. On the Projects page (`projects.html`), they find the "Advanced Production RAG System" prominently featured as a live project with an eye-catching preview, clear architectural highlights (multi-query retrieval, cross-encoder reranking, RBAC filtering, and Ragas evaluation), and direct 1-click action buttons to launch the live Streamlit interactive demo and browse the open-source GitHub repository.

**Why this priority**: Directly showcases hands-on GenAI implementation capabilities with verifiable live running software, enterprise access security (RBAC), evaluation rigor (Ragas), and public code access.

**Independent Test**: Can be tested by opening `projects.html`, confirming the new project card renders cleanly at the top of the showcase with proper title, tagline, description highlighting RBAC and Ragas, technology tags (`RBAC`, `Ragas Eval`, `Streamlit Live App`, `Python`, `Advanced RAG`), and that clicking "Launch Live Demo" opens `https://my-adv-rag.streamlit.app/` and "GitHub Repo" opens `https://github.com/raghu-bayaneni-dev/my-adv-rag` in new tabs.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `projects.html`, **When** the projects grid renders, **Then** the Advanced RAG project is prominently visible with a "Live Application" badge, comprehensive summary of multi-query retrieval, reranking, RBAC multi-tenant security, and Ragas evaluation benchmarking, plus clear action links.
2. **Given** a visitor clicks "Launch Live Demo", **When** activated, **Then** the live Streamlit application opens in a new browser tab with `rel="noopener noreferrer"`.
3. **Given** a visitor clicks "GitHub Repo", **When** activated, **Then** the public GitHub repository page opens in a new browser tab with `rel="noopener noreferrer"`.

---

### User Story 2 - Landing Page Live Project Spotlight (Priority: P2)

A visitor exploring the landing page (`index.html`) sees a dedicated featured live application spotlight section or prominent callout directing them to test the live Advanced RAG application directly from the homepage with highlights of RBAC and Ragas evaluation.

**Why this priority**: Enhances the first impression of the homepage by providing immediate social proof, enterprise security features, and an interactive artifact without requiring deep navigation.

**Independent Test**: Can be tested by opening `index.html`, verifying the featured project spotlight displays clearly with live links and responsive mobile/desktop formatting.

**Acceptance Scenarios**:

1. **Given** a visitor views `index.html`, **When** scrolling past the core engineering pillars, **Then** a highlighted live demo banner showcases the Advanced RAG system (highlighting hybrid search, RBAC, and Ragas) with direct links to the live demo and GitHub repository.

---

### Edge Cases

- **Broken link handling**: All external links MUST specify valid HTTPS URLs with `target="_blank"` and `rel="noopener noreferrer"` attributes for security and tab isolation.
- **Mobile responsiveness**: Project card layout, action buttons, and badges MUST gracefully wrap on narrow screen viewports (320px - 768px) without horizontal clipping or overflow.
- **Visual hierarchy**: The live application card should be visually distinct (e.g. badge, subtle accent border) to differentiate it from theoretical architectural case studies.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST feature the Advanced RAG project on the Projects showcase page (`projects.html`) with an informative title, architecture tagline, descriptive summary highlighting **RBAC security** and **Ragas evaluation metrics**, and technology badges.
- **FR-002**: The project card MUST provide a direct primary action link targeting the live Streamlit application (`https://my-adv-rag.streamlit.app/`).
- **FR-003**: The project card MUST provide a secondary action link targeting the public GitHub repository (`https://github.com/raghu-bayaneni-dev/my-adv-rag`).
- **FR-004**: The project technology tags MUST explicitly include `RBAC` and `Ragas Eval` alongside `Streamlit Live App`, `Python`, `Advanced RAG`, and `Hybrid Search`.
- **FR-005**: The landing page (`index.html`) MUST highlight the live application via a dedicated featured project section or link with references to its enterprise guardrails (RBAC) and evaluation harness (Ragas).
- **FR-006**: All external links MUST use `target="_blank"` and `rel="noopener noreferrer"` to protect visitor privacy and security.
- **FR-007**: All markup and styling MUST adhere to the existing pure static foundation (HTML5/CSS3/Vanilla JS) without introducing external build dependencies or client-side frameworks.

### Key Entities

- **Portfolio Project Item**: Represents an engineering work showcase item containing title, subtitle/tagline, description, tags (including RBAC and Ragas), and action links (Live Demo URL, GitHub Repository URL).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of links pointing to the live demo and GitHub repository open their respective destinations correctly with secure rel attributes.
- **SC-002**: Both `RBAC` and `Ragas` are clearly represented in the project description and tag badges across `projects.html` and `index.html`.
- **SC-003**: Project showcase and spotlight components maintain complete responsive visual fidelity across mobile (375px), tablet (768px), and desktop (1200px+) viewports.
- **SC-004**: Page load performance and zero-dependency static delivery are fully preserved with 0kb added client-side JS runtime overhead.

## Assumptions

- The Streamlit live demo at `https://my-adv-rag.streamlit.app/` and public repo at `https://github.com/raghu-bayaneni-dev/my-adv-rag` are publicly accessible and incorporate RBAC access control features and Ragas evaluation benchmarks.
- The project card should fit seamlessly into the existing light theme CSS design system tokens defined in `css/styles.css`.
