# Feature Specification: Expand & Reorganize Technical Skills

**Feature Branch**: `008-expand-technical-skills`

**Created**: 2026-09-10

**Status**: Clarified

**Input**: User description: "update skills to include Claude Code, Antigravity, Codex under IDE / AI Tools and under Web / Full stack add Frameworks SpringMVC, SpringBood and Struts, And Under Databases add AlloyDB, and organize and group related skills together (all DBs in one group instead of scattered)"

## Clarifications

### Session 2026-09-10
- Q: How should the skill categories on `skills.html` be reorganized to group all database systems and tooling into dedicated, cohesive categories? → A: **Unified 5-Category Cohesive Layout**:
  1. **Generative AI & Agentic Orchestration** (ADK, LangChain/LangGraph, CrewAI/LlamaIndex, MCP, Production RAG, PEFT/SLMs, Prompt Engineering, Agentforce, Frontier & Open LLMs)
  2. **AI Observability, Eval & Guardrails** (LangSmith, Phoenix Arize, Ragas & TruLens, DeepEval & LlamaGuard, Guardrails AI, Weights & Biases, NumPy/Pandas, TDD for LLM Systems)
  3. **Databases & Vector Stores** (PostgreSQL & MySQL, Google AlloyDB, Oracle & MongoDB, Pinecone Vector DB, ChromaDB & FAISS, Neo4j Graph DB)
  4. **Web & Full-Stack Architecture** (TypeScript & JavaScript, Python, Java, Node.js, React/Next/Angular, Spring Boot/Spring MVC/Struts, FastAPI & Flask, GraphQL & REST, SOAP & gRPC, HTML5/CSS3/Webpack, Salesforce LWC & Apex)
  5. **Cloud, DevOps & AI Developer Tools** (AWS, GCP, Docker & Containers, Kubernetes, CI/CD Actions, Git & Perforce, Claude Code/Cursor/Windsurf, Google Antigravity & OpenAI Codex)
  6. **Education, Certifications & Achievements** (Academic Degrees & Professional Certifications)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Unified Database & Vector Store Category (Priority: P1)

A database architect, engineering hiring manager, or technical visitor exploring `skills.html` wants a unified view of all database systems. Under the dedicated **Databases & Vector Stores** category (`🗄️ Databases & Vector Stores`), all relational (PostgreSQL, MySQL, Oracle), cloud-managed (Google AlloyDB for PostgreSQL), document (MongoDB), vector (Pinecone, ChromaDB & FAISS), and graph databases (Neo4j) are presented together in one cohesive card with authentic vector brand icons, eliminating scattered categorization.

**Why this priority**: Directly resolves the fragmentation of database technologies across multiple cards.

**Independent Test**: Open `skills.html` and verify the "Databases & Vector Stores" card contains PostgreSQL & MySQL, Google AlloyDB, Oracle & MongoDB, Pinecone, ChromaDB & FAISS, and Neo4j with their respective vector logos.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `skills.html`, **When** reviewing database technologies, **Then** all relational, cloud, NoSQL, vector, and graph databases are grouped within the single "Databases & Vector Stores" card.
2. **Given** the "Databases & Vector Stores" card, **When** viewing the items, **Then** `Google AlloyDB` is prominently featured with its official vector logo.

---

### User Story 2 - Dedicated AI IDEs & Modern Developer Tooling (Priority: P2)

An engineering leader assessing modern AI-accelerated developer workflows views the **Cloud, DevOps & AI Developer Tools** section on `skills.html`. They see next-generation agentic IDEs and autonomous coding tools—specifically **Claude Code**, **Google Antigravity**, **OpenAI Codex / Copilot**, **Cursor**, and **Windsurf**—alongside core cloud and DevOps foundations (AWS, GCP, Docker, Kubernetes, CI/CD, Git).

**Why this priority**: Highlights state-of-the-art proficiency in AI pair-programming and autonomous agentic IDEs.

**Independent Test**: Open `skills.html` and confirm badges for Claude Code, Cursor, Windsurf, Google Antigravity, and OpenAI Codex are clearly rendered with valid CDN vector logos.

**Acceptance Scenarios**:

1. **Given** a visitor views `skills.html`, **When** scrolling to Cloud, DevOps & AI Developer Tools, **Then** badges for `Claude Code, Cursor & Windsurf` and `Google Antigravity & OpenAI Codex` are present with their respective vector icons.

---

### User Story 3 - Enterprise Java Web Frameworks in Full-Stack (Priority: P3)

An enterprise engineering reviewer inspects the **Web & Full-Stack Architecture** section. They find enterprise Java frameworks—**Spring Boot, Spring MVC & Struts**—with the official Spring vector icon alongside modern frontend and microservice frameworks (React, Next.js, Angular, Node.js, FastAPI, GraphQL, Salesforce LWC & Apex).

**Why this priority**: Demonstrates comprehensive full-stack expertise spanning modern TypeScript/Python stacks and robust enterprise Java backends.

**Independent Test**: Open `skills.html` and verify `Spring Boot, Spring MVC & Struts` is rendered with the official Spring logo (`spring-original.svg`).

**Acceptance Scenarios**:

1. **Given** a visitor views Web & Full-Stack Architecture, **When** inspecting backend frameworks, **Then** `Spring Boot, Spring MVC & Struts` is displayed with proper icon and label formatting.

---

### Edge Cases

- **5-Card Grid Balance**: With 5 technical category cards (plus the full-width Education & Certifications card at the bottom), ensure the CSS grid gracefully balances 2 columns on desktop and collapses to 1 column on mobile.
- **Icon Sizing & Aspect Ratio**: Ensure newly added icons (Spring, Google Cloud/AlloyDB, Anthropic/Claude Code, Google Antigravity, OpenAI Codex) adhere to 18px square dimensions with `object-fit: contain` and `aria-hidden="true"`.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Skills page (`skills.html`) MUST reorganize the technical skills inventory into 5 distinct categories plus the Education & Certifications card:
  1. `Generative AI & Agentic Orchestration`
  2. `AI Observability, Eval & Guardrails`
  3. `Databases & Vector Stores`
  4. `Web & Full-Stack Architecture`
  5. `Cloud, DevOps & AI Developer Tools`
- **FR-002**: The `Databases & Vector Stores` card MUST unify:
  - `PostgreSQL & MySQL`
  - `Google AlloyDB (PostgreSQL)`
  - `Oracle & MongoDB`
  - `Pinecone Vector DB`
  - `ChromaDB & FAISS`
  - `Neo4j (Graph DB)`
- **FR-003**: The `Web & Full-Stack Architecture` card MUST include:
  - `Spring Boot, Spring MVC & Struts` with the official Spring vector icon (`spring-original.svg`) alongside existing languages, React/Next, Node, FastAPI, GraphQL, and Salesforce LWC/Apex.
- **FR-004**: The `Cloud, DevOps & AI Developer Tools` card MUST include:
  - `Claude Code, Cursor & Windsurf` (Anthropic icon)
  - `Google Antigravity & OpenAI Codex` (Google / OpenAI icon)
  - `Amazon Web Services (AWS)`
  - `Google Cloud Platform (GCP)`
  - `Docker & Containers`
  - `Kubernetes (K8s)`
  - `CI/CD (Maven, Ant, Actions)`
  - `Git & Perforce`
- **FR-005**: All skill badges MUST include `loading="lazy"`, `width="18"`, `height="18"`, `alt=""`, and `aria-hidden="true"`.
- **FR-006**: The responsive grid layout MUST render symmetrically across mobile (375px), tablet (768px), and desktop (1200px+) viewports.
- **FR-007**: Implementation MUST comply with Constitution Principle II (pure static HTML/CSS) and Principle IV (zero automated testing).

### Key Entities

- **Skill Category**: Logical group comprising title, icon glyph, and ordered collection of `SkillItem` pills.
- **Skill Item**: Technical badge comprising label, CDN SVG URL, and accessibility attributes.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of all databases (PostgreSQL, MySQL, AlloyDB, Oracle, MongoDB, Pinecone, ChromaDB, Neo4j) are unified in the single "Databases & Vector Stores" card.
- **SC-002**: Claude Code, Antigravity, Codex, Spring Boot, Spring MVC, Struts, and AlloyDB are all present on `skills.html`.
- **SC-003**: 100% of skill icons load with HTTP 200 OK from public CDN endpoints.
- **SC-004**: Zero layout shifts or horizontal clipping across mobile, tablet, and desktop viewports.

## Assumptions

- Reorganizing categories improves visual clarity and recruiter scannability without removing existing verified skills.
- The 5-card layout cleanly integrates with the existing `.grid-2` layout in `css/styles.css`.
