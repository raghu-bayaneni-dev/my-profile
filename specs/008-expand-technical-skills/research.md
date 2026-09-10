# Research: Expand & Reorganize Technical Skills

**Feature**: `008-expand-technical-skills`  
**Date**: 2026-09-10  
**Status**: Completed  

---

## 1. Skill Taxonomy & Category Reorganization

### Context
Previously on `skills.html`, database technologies were fragmented across multiple cards (e.g. Pinecone and ChromaDB under "Vector DBs & AI Infrastructure", PostgreSQL, Oracle, MongoDB, Neo4j under "Databases & Cloud Infrastructure"). Furthermore, newly requested skills needed clear, natural categorization:
- **Claude Code**, **Google Antigravity**, and **OpenAI Codex**
- **Spring Boot, Spring MVC & Struts**
- **Google AlloyDB (for PostgreSQL)**

### Decision
Consolidate the technical skills inventory into **5 cohesive domain categories** plus 1 full-span Education & Certifications card:
1. `🤖 Generative AI & Agentic Orchestration` (ADK, LangChain/LangGraph, CrewAI/LlamaIndex, MCP, Production RAG, PEFT, LLM Cost Routing, Context Window Optimization, Prompt Engineering, Agentforce, Frontier/Open LLMs)
2. `⚡ AI Observability, Eval & Guardrails` (LangSmith, Phoenix Arize, Ragas & TruLens, DeepEval & LlamaGuard, Guardrails AI, Weights & Biases, NumPy & Pandas, TDD for LLM Systems)
3. `🗄️ Databases & Vector Stores` (PostgreSQL & MySQL, Google AlloyDB, Oracle & MongoDB, Pinecone Vector DB, ChromaDB & FAISS, Neo4j Graph DB)
4. `💻 Web & Full-Stack Architecture` (TypeScript, JavaScript, Python, Java, Node.js, React/Next/Angular, Spring Boot/Spring MVC/Struts, FastAPI & Flask, GraphQL & REST, SOAP & gRPC, HTML5/CSS3/Webpack, Salesforce LWC & Apex)
5. `☁️ Cloud, DevOps & AI Developer Tools` (Amazon Web Services, Google Cloud Platform, Docker & Containers, Kubernetes, CI/CD, Git & Perforce, Claude Code/Cursor/Windsurf, Google Antigravity & OpenAI Codex)
6. `🎓 Education, Certifications & Achievements` (Academic Degrees, Professional Certifications — full span)

### Rationale
- Unifies all relational, cloud-managed, NoSQL, vector, and graph database technologies into a dedicated database section (`🗄️ Databases & Vector Stores`).
- Elevates AI developer tooling (Claude Code, Cursor, Windsurf, Antigravity, Codex) into the Cloud & DevOps ecosystem.
- Clearly showcases enterprise Java frameworks alongside modern frontend and microservice architectures in Web & Full-Stack.
- Aligns directly with recruiter scannability and modern full-stack / AI engineering evaluation patterns.

### Alternatives Considered
- *Separate "Vector Databases" from "Relational/NoSQL Databases"*: Rejected to prevent scattered database cards and redundant heading overhead.
- *Creating a 6th dedicated card for "AI Developer Tools"*: Rejected because 5 cards + 1 full-width card provides a clean, balanced layout on desktop 2-column grid and mobile single-column.

---

## 2. Public CDN Vector Endpoints for New Skills

### Decision & Verified Endpoints
| Skill / Technology | Target Category | Selected CDN SVG URL |
| :--- | :--- | :--- |
| **Spring Boot, Spring MVC & Struts** | Web & Full-Stack | `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/spring/spring-original.svg` |
| **Google AlloyDB (PostgreSQL)** | Databases & Vector Stores | `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/googlecloud/googlecloud-original.svg` |
| **Claude Code, Cursor & Windsurf** | Cloud, DevOps & AI Dev Tools | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg` |
| **Google Antigravity & OpenAI Codex** | Cloud, DevOps & AI Dev Tools | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg` |

### Rationale
- Devicon and Simple Icons via jsDelivr CDN provide high-performance, version-stable SVG vector assets that scale cleanly at 18x18px without raster artifacts.
- Google Cloud icon is the standard ecosystem representation for AlloyDB managed services.
- Anthropic and Google vector marks accurately represent Claude Code and Google Antigravity environments.

---

## 3. Responsive Layout & CSS Grid Compatibility

### Decision
Utilize the existing `.grid.grid-2` class in `css/styles.css` without requiring custom CSS modifications:
- Cards 1 through 5 flow naturally through the 2-column CSS Grid.
- Card 6 (`Education, Certifications & Achievements`) maintains `style="grid-column: 1 / -1;"` to stretch across both columns.
- On viewports < 768px, `.grid-2` media query already collapses all cards to `grid-template-columns: 1fr`, ensuring zero horizontal overflow or clipping.

### Rationale
- Adheres strictly to Constitution Principle V (Minimal Dependencies & Simplicity) and Principle II (Pure Static Foundation).
