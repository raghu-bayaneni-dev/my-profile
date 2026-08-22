# Research: Update From Resume

**Feature**: `002-update-from-resume`
**Date**: 2026-08-22

## Research Findings & Technical Decisions

### 1. Resume Ingestion & Content Strategy
- **Context**: Real candidate resume data is provided via `resources/RaghuAIEng.pdf` covering 15+ years of software and AI engineering experience at Salesforce, BlackRock, Yahoo!, and Prompt Technologies.
- **Decision**: Extract, structure, and directly reflect Raghu Bayaneni's verified technical domains (Generative AI, Agentic Orchestration, Full-Stack Architecture, Enterprise Platforms) across all 5 static HTML pages.
- **Rationale**: Direct mapping from the primary PDF resume maintains 100% fidelity to the candidate's actual background, eliminating placeholder text entirely.
- **Alternatives Considered**: Creating a dynamic CMS or JSON data loader in JavaScript; rejected because Constitution Principle II strictly dictates pure static HTML/CSS/JS without unnecessary runtime complexity.

### 2. Standardized Resume Asset Hosting & Linking
- **Context**: The user uploaded `resources/RaghuAIEng.pdf` and clarified that the public URL convention should be standardized as `resources/resume.pdf` (Option A).
- **Decision**: Copy/synchronize `resources/RaghuAIEng.pdf` to `resources/resume.pdf` so that all site links (`href="resources/resume.pdf"`) remain predictable, persistent, and decoupled from future resume file versions.
- **Rationale**: Ensures external bookmarks, recruiters, and crawlers have a persistent link while preserving the original source file.
- **Alternatives Considered**: Renaming `RaghuAIEng.pdf` directly; rejected to preserve original uploaded file integrity.

### 3. Contact & Social Link Integration
- **Context**: Contact information in `RaghuAIEng.pdf` includes San Francisco Bay Area location, `raghu.bayaneni@gmail.com`, `(209) 597 8323`, and `https://www.linkedin.com/in/raghuramz`.
- **Decision**: Update all contact links, email mailto anchors, LinkedIn anchors, and phone references in `contact.html`, `index.html`, and `site-footer` across all pages.
- **Rationale**: Connects visitors and recruiters directly to the candidate's actual channels.
