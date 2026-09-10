# Data Model: Expand & Reorganize Technical Skills

**Feature**: `008-expand-technical-skills`  
**Date**: 2026-09-10  
**Status**: Completed  

---

## 1. Conceptual Entities

### Entity: `SkillCategory`
Represents a structured grouping card on the `skills.html` page.

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `id` | String | Semantic identifier for category | `databases-stores` |
| `headingId` | String | HTML ID for accessibility `aria-labelledby` | `db-heading` |
| `iconGlyph` | String | UTF-8 visual emoji indicator | `🗄️` |
| `title` | String | Category display title | `Databases & Vector Stores` |
| `fullSpan` | Boolean | Whether card spans 100% of grid columns | `false` (cards 1-5), `true` (card 6) |
| `skills` | Array<`SkillItem`> | Ordered list of skill badges in this category | `[...]` |

---

### Entity: `SkillItem`
Represents a single interactive skill badge with an embedded vector logo.

| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `label` | String | Non-empty string | Technology / framework name |
| `iconUrl` | String | Valid HTTPS URL to SVG asset | Public CDN vector asset endpoint |
| `width` | Number | Fixed `18` | Rendered icon pixel width |
| `height` | Number | Fixed `18` | Rendered icon pixel height |
| `alt` | String | `""` (empty) | Decorative image attribute for screen readers |
| `ariaHidden`| Boolean | `true` | Hides redundant icon from assistive technology |
| `loading` | String | `"lazy"` | Deferred image loading optimization |

---

## 2. Complete Inventory Specification

### Category 1: `🤖 Generative AI & Agentic Orchestration` (`genai-heading`)
1. `Agent Development Kit (ADK)` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg`
2. `LangChain / LangGraph` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg`
3. `CrewAI & LlamaIndex` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/crewai.svg`
4. `Model Context Protocol (MCP)` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg`
5. `Production-Grade RAG` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/databricks.svg`
6. `PEFT (LoRA & QLoRA)` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg`
7. `LLM Cost-Routing & SLMs` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/fastapi/fastapi-original.svg`
8. `Context Window Optimization` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/speedtest.svg`
9. `Prompt Engineering` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg`
10. `Salesforce Agentforce / Einstein` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/salesforce/salesforce-original.svg`
11. `GPT, Claude, Gemini, Llama` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg`
12. `Mistral & Gemma` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mistralai.svg`

### Category 2: `⚡ AI Observability, Eval & Guardrails` (`ai-eval-heading`)
1. `LangSmith` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg`
2. `Phoenix (Arize)` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/datadog.svg`
3. `Ragas & TruLens` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/speedtest.svg`
4. `DeepEval & LlamaGuard` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg`
5. `Guardrails AI` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/auth0.svg`
6. `Weights & Biases` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/weightsandbiases.svg`
7. `NumPy & Pandas` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/numpy/numpy-original.svg`
8. `TDD for LLM Systems` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/testinglibrary.svg`

### Category 3: `🗄️ Databases & Vector Stores` (`db-heading`)
1. `PostgreSQL & MySQL` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/postgresql/postgresql-original.svg`
2. `Google AlloyDB (PostgreSQL)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/googlecloud/googlecloud-original.svg`
3. `Oracle & MongoDB` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg`
4. `Pinecone Vector DB` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qdrant.svg`
5. `ChromaDB & FAISS` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opensearch.svg`
6. `Neo4j (Graph DB)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/neo4j/neo4j-original.svg`

### Category 4: `💻 Web & Full-Stack Architecture` (`fullstack-heading`)
1. `TypeScript & JavaScript` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/typescript/typescript-original.svg`
2. `Python` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-original.svg`
3. `Java` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/java/java-original.svg`
4. `Node.js` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original.svg`
5. `React, Next.js & Angular` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg`
6. `Spring Boot, Spring MVC & Struts` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/spring/spring-original.svg`
7. `FastAPI & Flask` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/fastapi/fastapi-original.svg`
8. `GraphQL & REST APIs` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/graphql/graphql-plain.svg`
9. `SOAP & gRPC` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/grpc/grpc-original.svg`
10. `HTML5, CSS3 & Webpack` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/html5/html5-original.svg`
11. `LWC & SLDS (Salesforce)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/salesforce/salesforce-original.svg`
12. `Apex (Salesforce)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/salesforce/salesforce-original.svg`

### Category 5: `☁️ Cloud, DevOps & AI Developer Tools` (`cloud-heading`)
1. `Amazon Web Services (AWS)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`
2. `Google Cloud Platform (GCP)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/googlecloud/googlecloud-original.svg`
3. `Docker & Containers` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/docker/docker-original.svg`
4. `Kubernetes (K8s)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/kubernetes/kubernetes-plain.svg`
5. `CI/CD (Maven, Ant, Actions)` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/githubactions/githubactions-original.svg`
6. `Git & Perforce` → `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg`
7. `Claude Code, Cursor & Windsurf` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg`
8. `Google Antigravity & OpenAI Codex` → `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg`

### Category 6: `🎓 Education, Certifications & Achievements` (`edu-heading`)
- Spans full width (`grid-column: 1 / -1`)
- Academic Degrees & Professional Certifications
