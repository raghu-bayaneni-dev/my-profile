# Feature Specification: Include Public Icons for Skills

**Feature Branch**: `006-skill-icons`

**Created**: 2026-08-29

**Status**: Clarified

**Input**: User description: "Include public icon for each skill under skills tab"

## Clarifications

### Session 2026-08-29
- Q: How should public technology vector icons be sourced and delivered on the static Skills page? → A: Public CDN SVGs (Devicon and Simple Icons via fast, cached CDNs like jsDelivr / unpkg) loaded via standard `<img>` tags with explicit dimensions, ensuring comprehensive tool coverage, crisp vector rendering, and zero local repository asset bloat.
- Q: For composite skill badges that mention multiple tools (e.g., "React, Next.js & Angular" or "GPT, Claude, Gemini, Llama"), how should the icons be displayed within the badge? → A: Primary Lead Icon (display the prominent leading tool's public vector icon for each composite badge to maintain clean, uniform badge dimensions, prevent line wrapping, and preserve visual rhythm).
- Q: Should the public technology icons be displayed in their authentic official brand colors or as monochrome icons that adapt to the site's accent theme? → A: Authentic Brand Colors (display official full-color logos such as Python blue/yellow, Docker blue, React cyan, and AWS orange to maximize instant visual recognition and provide rich visual engagement on the light-themed card layout).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Instant Visual Recognition of Technical Proficiencies (Priority: P1)

A technical recruiter, hiring manager, or engineering leader visiting the Skills tab (`skills.html`) wants to quickly scan Raghu's technical proficiencies across Generative AI, Vector Databases, Full-Stack Development, Cloud Infrastructure, and Tooling. Each skill badge prominently displays the official or standard public brand/technology vector icon in authentic brand colors alongside the technology name instead of a generic bullet dot, enabling instantaneous visual recognition and a richer, more polished developer portfolio experience.

**Why this priority**: Core value of the user request. Upgrading generic dot markers to recognizable technology icons dramatically improves visual engagement, readability, and scannability across all skill categories.

**Independent Test**: Can be tested by opening `skills.html` in a web browser and verifying that every skill badge across all technical categories (Generative AI, Vector DBs, Full-Stack, Cloud & Infra) renders with its respective official public technology icon in authentic brand colors with crisp visual clarity, proper alignment, and consistent scaling.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `skills.html`, **When** the page renders, **Then** all skill badges display recognizable public vector/brand icons in full authentic brand colors next to the skill label.
2. **Given** a skill badge contains a technology icon, **When** hovered or focused, **Then** the icon and badge transition smoothly without layout shifting, distortion, or color clashing.
3. **Given** a visitor uses assistive technology (e.g., screen reader), **When** reading skill items, **Then** the icons are marked with appropriate semantic presentation attributes (`aria-hidden="true"` or `alt=""`) so the technology name is read cleanly without redundant auditory clutter.

---

### User Story 2 - Consistent Responsive Layout & High-Density Visual Grid (Priority: P2)

A visitor browsing the Skills tab on any device (mobile phone, tablet, or large desktop monitor) expects the icon-enhanced skill badges to flow gracefully into responsive grids with uniform line heights, padding, and vertical centering.

**Why this priority**: Ensures the added visual assets enhance the UI without breaking layout bounds, overflowing badges, or causing irregular alignment on smaller mobile viewports.

**Independent Test**: Can be tested by resizing the browser window from 320px to 1440px+ and verifying that skill badges with icons maintain symmetrical padding, uniform icon dimensions (e.g., 16px–18px), proper text truncation/wrapping where needed, and consistent gap spacing.

**Acceptance Scenarios**:

1. **Given** a mobile viewport (320px–480px), **When** viewing skill category cards, **Then** skill badges flow naturally in the grid with icons vertically centered with the text labels without horizontal clipping.
2. **Given** a desktop viewport (1024px+), **When** viewing the two-column category layout, **Then** all badges within each category have aligned icon baselines and uniform height.

---

### User Story 3 - Resilient Icon Loading & Zero Build Overhead (Priority: P3)

A visitor accessing the site over variable network conditions or restricted networks expects skill badges to render immediately. Icons are sourced and loaded in accordance with the project constitution (pure static foundation, zero build step overhead, lightweight public CDN vector assets via Devicon/SimpleIcons with graceful fallback to skill labels if any asset fails to load).

**Why this priority**: Preserves lightning-fast page load times and strict compliance with the static architecture principles while ensuring UI resilience.

**Independent Test**: Can be tested by inspecting network payloads on `skills.html`, verifying that icon assets load with minimal byte footprint and that badges retain their structure even if individual network requests are throttled or blocked.

**Acceptance Scenarios**:

1. **Given** a visitor loads `skills.html`, **When** icon assets are fetched via CDN, **Then** page render is not blocked and assets load asynchronously as lightweight vector SVGs.
2. **Given** an icon fails to load, **When** the badge is displayed, **Then** the text label remains legible and formatted correctly.

---

### Edge Cases

- **Composite or multi-tool skill badges**: Badges representing multiple related tools or concepts (e.g., "React, Next.js & Angular", "LangChain / LangGraph", "Docker & Containers", "PostgreSQL & MySQL", "GPT, Claude, Gemini, Llama") MUST use the leading/primary tool icon (e.g., React for React/Next/Angular; OpenAI for GPT/Claude/Gemini/Llama; Docker for Docker & Containers; PostgreSQL for PostgreSQL & MySQL) in its authentic colors to maintain clean badge proportions without overcrowding.
- **Dark/Light theme contrast**: Skill icons with dark monochrome artwork (e.g., GitHub, Next.js, FastAPI) must maintain clear contrast and readability against light theme badge backgrounds (`var(--bg-subtle)` / `var(--bg-surface)`).
- **Missing or proprietary tools**: For niche or conceptual skills lacking a standard standalone brand vector (e.g., "Context Window Optimization", "TDD for LLM Systems", "Production-Grade RAG"), a high-quality contextual modern vector/SVG icon (e.g., AI/code/benchmark glyph) must be provided to maintain visual consistency across all badges.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Skills page (`skills.html`) MUST display a public, recognizable technology icon in authentic brand colors for every skill badge under all primary skill categories:
  - Generative AI & Agentic Orchestration
  - Vector DBs & AI Observability
  - Web & Full-Stack Architecture
  - Databases & Cloud Infrastructure
- **FR-002**: All skill icons MUST be sourced as public CDN SVGs (Devicon / Simple Icons) loaded via standard `<img>` elements with explicit sizing (e.g., 16px–18px square), proper aspect ratio preservation, and crisp vector rendering across high-DPI screens.
- **FR-003**: For composite skill badges containing multiple tools, the badge MUST feature the single leading/primary tool icon in its authentic brand colors to maintain clean badge dimensions.
- **FR-004**: Skill icons MUST be vertically centered and aligned with the accompanying skill text label.
- **FR-005**: Skill icons MUST be marked with `aria-hidden="true"` (or `alt=""`), ensuring screen readers announce only the skill text without redundant icon labels.
- **FR-006**: All icons MUST maintain strong contrast and visual harmony against light background cards and hover states defined in the project design system (`css/styles.css`).
- **FR-007**: Skill badges MUST support smooth hover interactions with subtle color/background shifts without causing icon flicker or misalignment.
- **FR-008**: Icon integration MUST adhere strictly to the project Constitution (Principle II: pure static HTML/CSS/JS with zero build steps, Principle IV: zero automated testing, Principle V: minimal overhead and fast static delivery).

### Key Entities

- **Skill Item**: Represents an individual technical proficiency comprising a descriptive label (e.g., "TypeScript"), a category classification, an associated public icon CDN URL, color styling, and accessibility attributes.
- **Skill Category**: Represents a thematic grouping of technical skills (e.g., "Generative AI & Agentic Orchestration") containing a category header, category icon, and a collection of skill item badges.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the individual skill badges across all four technical categories on `skills.html` feature a corresponding, recognizable public technology vector icon rendered in authentic brand colors.
- **SC-002**: Skill badges render cleanly with zero visual overlap, truncation, or layout breakage across mobile (375px), tablet (768px), and desktop (1200px+) viewports.
- **SC-003**: Total additional page weight from icons remains minimal (<50KB for all cached SVG assets combined) ensuring page load remains instantaneous.
- **SC-004**: Hover states on all skill badges trigger smooth CSS transitions without layout shifts or layout recalculation lag.

## Assumptions

- Public vector icons will be integrated using reliable, widely accessible public icon CDN sources (Devicon and Simple Icons via jsDelivr/unpkg) that require no build pipeline or client-side runtime dependencies.
- The existing skill categories and skill labels from `skills.html` will be preserved, replacing the existing generic dot elements (`<span class="skill-dot"></span>`) with rich vector icons.
- Academic degrees and professional certifications section on `skills.html` will retain their existing distinct styling with trophy/star badges.
