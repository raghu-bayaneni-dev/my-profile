# Feature Specification: Add Ascendion Experience & Update Salesforce Dates

**Feature Branch**: `007-add-ascendion-experience`

**Created**: 2026-09-10

**Status**: Clarified

**Input**: User description: "I have changed the job and need to update the site with latest employer Ascendion and update working dates for Salesforce from Jan 2012 to April 2026."

## Clarifications

### Session 2026-09-10
- Q: What is your exact job title and location for the Ascendion role? → A: **Lead AI & Forward Deployment Engineer - Enterprise AI Systems &bull; Ascendion &bull; San Francisco Bay Area, CA**
- Q: What are your working dates at Ascendion? → A: **Aug 2026 — Present**
- Q: What is the exact overview summary for the Ascendion role? → A: **Serve as the primary technical partner and bridge between cutting-edge Agentic AI capabilities and enterprise execution, embedding directly with customer teams to design, deploy, and scale autonomous AI-powered workflows and agents that deliver measurable business outcomes.**
- Q: What are the 6 structured responsibility areas for Ascendion? → A:
  1. **Customer Engagement & Discovery:** Partner directly with enterprise technology and business leaders to identify high-value Agentic AI opportunities, run discovery workshops, and translate complex business requirements into production-ready architectures.
  2. **Enterprise Agentic Architecture:** Design production-grade Agentic AI architectures, orchestrating LLMs, multi-agent frameworks, advanced RAG, and knowledge systems capable of autonomous reasoning, planning, and task execution.
  3. **System Integration & Microservices:** Build and deploy highly performant AI agents, copilots, and multi-agent systems in client production environments, developing secure APIs and custom connectors to link AI workflows with enterprise CRM, ERP, and ITSM platforms.
  4. **Performance & Cost Optimization:** Configure vector databases, retrieval pipelines, and agent orchestration platforms while optimizing agentic runtimes for latency, reliability, and token routing cost-efficiency at enterprise scale.
  5. **Engineering Strategy & Reusable Accelerators:** Write high-quality production code in Python, Java, and JavaScript/TypeScript, developing reusable deployment patterns, templates, and CI/CD pipelines to streamline deployment cycles.
  6. **Enterprise Transformation & Observability:** Define success metrics, ROI KPIs, and safety guardrails (including compliance, observability, and monitoring) to ensure deterministic decision-making and scale successful pilots into enterprise-wide deployments.
- Q: What are the working dates for Salesforce? → A: **Jan 2012 — Apr 2026**

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Recent Role & Responsibilities at Ascendion (Priority: P1)

A technical recruiter, hiring manager, enterprise client, or peer engineering leader visiting Raghu's profile wants to review his current role and accomplishments. Navigating to the Experience page (`experience.html`), they find **Ascendion** prominently featured as the top active milestone ("Aug 2026 — Present") detailing his leadership as **Lead AI & Forward Deployment Engineer - Enterprise AI Systems**, highlighting customer discovery, enterprise multi-agent architecture, custom ERP/CRM integrations, latency/cost optimization, engineering accelerators, and enterprise observability guardrails.

**Why this priority**: Core value of the feature request. Accurately showcases Raghu's current executive and forward-deployed AI engineering position.

**Independent Test**: Open `experience.html` in a web browser and confirm the top timeline item displays the Ascendion role with title, dates ("Aug 2026 — Present"), exact overview summary, all 6 structured responsibility bullets, and modern technology tag badges.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `experience.html`, **When** the timeline renders, **Then** Ascendion is the first milestone card with status "Aug 2026 — Present" and title "Lead AI & Forward Deployment Engineer - Enterprise AI Systems".
2. **Given** the Ascendion milestone card, **When** reviewing the overview summary, **Then** the exact text reads: "Serve as the primary technical partner and bridge between cutting-edge Agentic AI capabilities and enterprise execution, embedding directly with customer teams to design, deploy, and scale autonomous AI-powered workflows and agents that deliver measurable business outcomes."
3. **Given** the Ascendion milestone card, **When** reviewing the responsibilities, **Then** all 6 core areas (Customer Engagement & Discovery, Enterprise Agentic Architecture, System Integration & Microservices, Performance & Cost Optimization, Engineering Strategy & Reusable Accelerators, Enterprise Transformation & Observability) are clearly formatted with bold lead-ins.
4. **Given** the Ascendion card, **When** reviewing the badges, **Then** key tags (`Agentic AI`, `Forward Deployed Systems`, `Multi-Agent Frameworks`, `Advanced RAG`, `Python`, `TypeScript`, `Java`, `Vector DBs`, `AI Observability`) are rendered with proper styling.

---

### User Story 2 - Updated Historic Salesforce Milestone Tenure (Priority: P2)

A visitor reviewing Raghu's 14+ year enterprise foundation at Salesforce inspects the Salesforce milestone on `experience.html`. The tenure dates clearly show "Jan 2012 — Apr 2026" (instead of "Jan 2012 — Recent"), accurately reflecting the completed duration while maintaining all technical highlights (Agentforce, Einstein AI, RAG pipelines, LLM gateway).

**Why this priority**: Ensures chronological precision and consistency across historical career milestones.

**Independent Test**: Inspect the Salesforce card on `experience.html` and verify the date badge renders "Jan 2012 — Apr 2026".

**Acceptance Scenarios**:

1. **Given** a visitor views `experience.html`, **When** scrolling to the Salesforce section, **Then** the date badge shows "Jan 2012 — Apr 2026".

---

### User Story 3 - Site-Wide Alignment & Hero Overview Consistency (Priority: P3)

A visitor exploring the landing page (`index.html`) or reading page descriptions sees consistent alignment with Raghu's current forward-deployed AI engineering role and overall industry experience.

**Why this priority**: Ensures seamless storytelling across the multi-page static site.

**Independent Test**: Open `index.html` and verify hero headlines and career experience overview align with the updated timeline without contradictory tenures.

**Acceptance Scenarios**:

1. **Given** a visitor views `index.html`, **When** reading the hero and highlight sections, **Then** career experience callouts align with the updated timeline.

---

### Edge Cases

- **Date formatting consistency**: Ensure all milestones on `experience.html` follow the uniform format (`MMM YYYY — Present` or `MMM YYYY — MMM YYYY`).
- **Mobile responsiveness**: The 6 responsibility bullet points and tag badges must wrap gracefully on narrow viewports (320px–480px) without overflowing the `.timeline-wrapper` or `.timeline-content` cards.
- **Semantic hierarchy**: Ascendion milestone must use `<h2 class="timeline-role">` and standard `.timeline-company`, `.timeline-date`, and `.timeline-responsibilities` markup matching existing cards.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Career Experience page (`experience.html`) MUST display Ascendion as the top, first milestone item in the timeline.
- **FR-002**: The Ascendion milestone MUST include:
  - Role Title: `Lead AI & Forward Deployment Engineer - Enterprise AI Systems`
  - Company & Location: `Ascendion • San Francisco Bay Area, CA`
  - Dates: `Aug 2026 — Present`
  - Summary: `Serve as the primary technical partner and bridge between cutting-edge Agentic AI capabilities and enterprise execution, embedding directly with customer teams to design, deploy, and scale autonomous AI-powered workflows and agents that deliver measurable business outcomes.`
  - 6 Structured Responsibilities:
    1. **Customer Engagement & Discovery:** Partner directly with enterprise technology and business leaders to identify high-value Agentic AI opportunities, run discovery workshops, and translate complex business requirements into production-ready architectures.
    2. **Enterprise Agentic Architecture:** Design production-grade Agentic AI architectures, orchestrating LLMs, multi-agent frameworks, advanced RAG, and knowledge systems capable of autonomous reasoning, planning, and task execution.
    3. **System Integration & Microservices:** Build and deploy highly performant AI agents, copilots, and multi-agent systems in client production environments, developing secure APIs and custom connectors to link AI workflows with enterprise CRM, ERP, and ITSM platforms.
    4. **Performance & Cost Optimization:** Configure vector databases, retrieval pipelines, and agent orchestration platforms while optimizing agentic runtimes for latency, reliability, and token routing cost-efficiency at enterprise scale.
    5. **Engineering Strategy & Reusable Accelerators:** Write high-quality production code in Python, Java, and JavaScript/TypeScript, developing reusable deployment patterns, templates, and CI/CD pipelines to streamline deployment cycles.
    6. **Enterprise Transformation & Observability:** Define success metrics, ROI KPIs, and safety guardrails (including compliance, observability, and monitoring) to ensure deterministic decision-making and scale successful pilots into enterprise-wide deployments.
  - Technology Tags: `Agentic AI`, `Forward Deployed Systems`, `Multi-Agent Frameworks`, `Advanced RAG`, `Python`, `TypeScript`, `Java`, `Vector DBs`, `AI Observability`.
- **FR-003**: The Salesforce milestone date badge on `experience.html` MUST be updated from `Jan 2012 — Recent` to `Jan 2012 — Apr 2026`.
- **FR-004**: All milestone markup MUST strictly utilize the existing semantic HTML and design system classes (`.timeline-item`, `.timeline-content`, `.timeline-header`, `.timeline-role`, `.timeline-company`, `.timeline-date`, `.timeline-responsibilities`, `.tag-list`, `.tag`, `.tag-accent`) defined in `css/styles.css`.
- **FR-005**: All markup changes MUST adhere to the project Constitution (Principle II: pure static HTML5/CSS3/Vanilla JS, Principle IV: zero automated testing).

### Key Entities

- **Experience Milestone**: Represents a professional employment period containing company name, role title, location, date range, descriptive overview, structured responsibilities, and associated technology tags.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Ascendion is prominently displayed as the lead timeline milestone on `experience.html` with complete role description, 6 responsibility bullet points, and technology tags.
- **SC-002**: Salesforce working dates on `experience.html` accurately reflect `Jan 2012 — Apr 2026`.
- **SC-003**: 100% of timeline elements render with clean typography, proper spacing, and zero layout overflow across mobile (375px), tablet (768px), and desktop (1200px+) viewports.
- **SC-004**: Zero added external runtime dependencies, preserving pure static file loading.

## Assumptions

- The new milestone for Ascendion seamlessly integrates into the existing light theme timeline component without requiring new global CSS classes.
- Existing historical milestones (Salesforce, BlackRock, Yahoo!, Prompt Technologies) remain intact, with only the Salesforce date tenure string modified.
