# Phase 0 Research: Public Icons for Technical Skills

**Feature**: Include Public Icons for Skills  
**Branch**: `006-skill-icons`  
**Date**: 2026-08-29  

## Research Questions & Architectural Decisions

### 1. Vector Icon Delivery & CDN Source Strategy

- **Decision**: Deliver SVG vector icons via reputable, fast, globally-distributed public CDNs (**Devicon** and **Simple Icons** via `cdn.jsdelivr.net`).
- **Rationale**:
  - **Devicon** (`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/...`) offers official, multi-color vector brand icons for standard languages, frameworks, databases, and DevOps tools (Python, Java, TypeScript, React, Docker, Kubernetes, PostgreSQL, MongoDB, AWS, GCP, etc.).
  - **Simple Icons** (`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/...`) offers comprehensive vector SVGs for emerging Generative AI and modern AI ecosystems (LangChain, Hugging Face, Anthropic, OpenAI, Mistral, Pinecone, Weights & Biases, etc.).
  - Sourcing via CDN requires **zero build step**, adds **no repository bloat**, and takes advantage of browser CDN edge caching.
- **Alternatives Considered**:
  - *Local SVGs in repo*: Rejected because committing 40+ SVG files adds maintenance overhead and repo bloat when standard CDN endpoints are stable and cached.
  - *Inline SVGs*: Rejected because inlining 40+ large SVG XML blocks directly into HTML would inflate `skills.html` by ~50KB and hurt readability.
  - *Devicon Web Font*: Rejected because font glyphs are monochrome, require font file downloads, and lack modern GenAI tool coverage.

---

### 2. Composite & Multi-Tool Badge Presentation

- **Decision**: For composite badges referencing multiple tools (e.g. "React, Next.js & Angular", "GPT, Claude, Gemini, Llama", "PostgreSQL & MySQL"), display the **single primary/lead technology icon**.
- **Rationale**:
  - Skill badges are compact pills rendered inside a multi-column responsive grid (`grid-template-columns: repeat(auto-fill, minmax(130px, 1fr))`).
  - Stacking multiple icons inside a single badge causes awkward line wrapping on mobile and uneven badge heights.
  - Displaying the lead icon (e.g., React, OpenAI, PostgreSQL, Docker) maintains symmetrical padding, uniform height, and clean visual rhythm.
- **Alternatives Considered**:
  - *Multiple icons per badge*: Rejected due to layout instability and awkward badge stretching on smaller screens.
  - *Splitting all multi-tool badges*: Rejected because keeping composite labels (e.g. "React, Next.js & Angular") reflects broad capability categories without inflating the badge count unnecessarily.

---

### 3. Icon Sizing, Styling & Contrast Harmonization

- **Decision**: Render icons inside a dedicated `.skill-icon` container with fixed dimensions (`18px × 18px`), `object-fit: contain`, `flex-shrink: 0`, and vertical centering.
- **Rationale**:
  - Fixed 18px dimensions match the text line-height perfectly and replace the old 6px `.skill-dot`.
  - Adding `flex-shrink: 0` prevents SVG distortion when text wraps in narrow columns.
  - Using `loading="lazy"` on icon images preserves fast first contentful paint.
  - Setting `alt=""` and `aria-hidden="true"` ensures zero auditory clutter for assistive screen readers.

---

### 4. Comprehensive Skill-to-Icon Mapping Matrix

| Skill Category | Skill Badge Label | Icon Source / Technology | Icon CDN URL |
| :--- | :--- | :--- | :--- |
| **Generative AI** | Agent Development Kit (ADK) | Google / AI Agent | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg` |
| **Generative AI** | LangChain / LangGraph | LangChain | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg` |
| **Generative AI** | CrewAI & LlamaIndex | Robot / AI Agent | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/crewai.svg` |
| **Generative AI** | Model Context Protocol (MCP) | Anthropic | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg` |
| **Generative AI** | Production-Grade RAG | Search / Brain | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/databricks.svg` |
| **Generative AI** | PEFT (LoRA & QLoRA) | Hugging Face | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg` |
| **Generative AI** | LLM Cost-Routing & SLMs | Fast AI / Processing | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastapi.svg` |
| **Generative AI** | Context Window Optimization | Memory / CPU | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expertsexchange.svg` |
| **Generative AI** | Prompt Engineering | OpenAI Sparkle | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg` |
| **Generative AI** | Salesforce Agentforce / Einstein | Salesforce | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg` |
| **Generative AI** | GPT, Claude, Gemini, Llama | OpenAI | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg` |
| **Generative AI** | Mistral & Gemma | Mistral AI | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mistral.svg` |
| **Vector DBs & Observability** | Pinecone Vector DB | Pinecone | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pinecone.svg` |
| **Vector DBs & Observability** | ChromaDB & FAISS | Chroma | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/chromacapital.svg` |
| **Vector DBs & Observability** | LangSmith | LangChain | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg` |
| **Vector DBs & Observability** | Phoenix (Arize) | Arize AI | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/datadog.svg` |
| **Vector DBs & Observability** | Ragas & TruLens | Evaluation Metric | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/speedtest.svg` |
| **Vector DBs & Observability** | DeepEval & LlamaGuard | Meta Llama Guard | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg` |
| **Vector DBs & Observability** | Guardrails AI | Shield / Guardrails | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/auth0.svg` |
| **Vector DBs & Observability** | Weights & Biases | Weights & Biases | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/weightsandbiases/weightsandbiases-original.svg` |
| **Vector DBs & Observability** | NumPy & Pandas | NumPy | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg` |
| **Vector DBs & Observability** | TDD for LLM Systems | Test Check | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/testinglibrary.svg` |
| **Web & Full-Stack** | TypeScript | TypeScript | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg` |
| **Web & Full-Stack** | JavaScript (ES6+) | JavaScript | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg` |
| **Web & Full-Stack** | Python | Python | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg` |
| **Web & Full-Stack** | Java | Java | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg` |
| **Web & Full-Stack** | Node.js | Node.js | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg` |
| **Web & Full-Stack** | React, Next.js & Angular | React | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg` |
| **Web & Full-Stack** | FastAPI & Flask | FastAPI | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg` |
| **Web & Full-Stack** | GraphQL & REST APIs | GraphQL | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg` |
| **Web & Full-Stack** | SOAP & gRPC | gRPC | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg` |
| **Web & Full-Stack** | HTML5, CSS3 & Webpack | HTML5 | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg` |
| **Web & Full-Stack** | LWC & SLDS | Salesforce | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg` |
| **Web & Full-Stack** | Apex (Salesforce) | Salesforce | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg` |
| **Databases & Cloud** | PostgreSQL & MySQL | PostgreSQL | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg` |
| **Databases & Cloud** | Oracle & MongoDB | MongoDB | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg` |
| **Databases & Cloud** | Neo4j (Graph DB) | Neo4j | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg` |
| **Databases & Cloud** | Amazon Web Services (AWS) | AWS | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg` |
| **Databases & Cloud** | Google Cloud Platform (GCP) | Google Cloud | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg` |
| **Databases & Cloud** | Docker & Containers | Docker | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg` |
| **Databases & Cloud** | Kubernetes (K8s) | Kubernetes | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg` |
| **Databases & Cloud** | CI/CD (Maven, Ant, Actions) | GitHub Actions | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg` |
| **Databases & Cloud** | Git & Perforce | Git | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg` |
| **Databases & Cloud** | Cursor, Claude Code, Windsurf | Anthropic Claude | `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg` |
