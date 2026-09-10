# Quickstart & Verification Guide: Expand & Reorganize Technical Skills

**Feature**: `008-expand-technical-skills`  
**Date**: 2026-09-10  
**Status**: Ready for Verification  

---

## 1. Prerequisites
- Local web server serving the project root (e.g., `npx serve . -l 3000` or active daemon server).
- Web browser (Chrome, Safari, Firefox, Edge).

---

## 2. Validation Scenarios

### Scenario 1: Verify 5-Category Layout & Unified Databases
1. Open `http://localhost:60213/skills.html` in browser.
2. Verify the 5 category cards are displayed in order:
   - `🤖 Generative AI & Agentic Orchestration`
   - `⚡ AI Observability, Eval & Guardrails`
   - `🗄️ Databases & Vector Stores`
   - `💻 Web & Full-Stack Architecture`
   - `☁️ Cloud, DevOps & AI Developer Tools`
   - `🎓 Education, Certifications & Achievements` (full span)
3. Under `🗄️ Databases & Vector Stores`, verify all 6 badges:
   - PostgreSQL & MySQL
   - Google AlloyDB (PostgreSQL)
   - Oracle & MongoDB
   - Pinecone Vector DB
   - ChromaDB & FAISS
   - Neo4j (Graph DB)

### Scenario 2: Verify Added Skills & Vector Logos
1. Under `Web & Full-Stack Architecture`, verify `Spring Boot, Spring MVC & Struts` with Spring green leaf logo.
2. Under `Cloud, DevOps & AI Developer Tools`, verify `Claude Code, Cursor & Windsurf` (Anthropic logo) and `Google Antigravity & OpenAI Codex` (Google logo).
3. Open Browser Developer Tools → Network Tab (filter by `Img` / `Fetch/XHR`).
4. Ensure all SVG icons load with HTTP 200 OK and no 404 broken image icons appear.

### Scenario 3: Responsive Viewport Inspection
1. **Desktop Viewport (1200px+)**: Confirm 2-column grid layout with balanced cards.
2. **Tablet Viewport (768px - 1024px)**: Confirm clean 2-column grid rendering without text overflow.
3. **Mobile Viewport (375px - 430px)**: Confirm grid collapses smoothly to 1 column; no horizontal scrollbar or clipped badges.
