# Quickstart & Manual Validation Guide: Public Icons for Skills

**Feature**: Include Public Icons for Skills  
**Branch**: `006-skill-icons`  
**Date**: 2026-08-29  

## Purpose

This guide outlines manual verification steps for validating the addition of public technology vector icons across all skill badges on `skills.html` in strict adherence to Constitution Principle IV (Zero Automated Testing Policy).

---

## Prerequisites & Setup

1. A modern web browser (Chrome, Firefox, Safari, or Edge).
2. Local static web server (optional, e.g., `npx -y serve .` or VS Code Live Server / opening `skills.html` directly).

---

## Validation Scenarios

### Scenario 1: Icon Visibility & Brand Fidelity (P1)

1. Open `skills.html` in the browser.
2. Scroll to the **Generative AI & Agentic Orchestration** card:
   - Verify that badges (ADK, LangChain, CrewAI, MCP, PEFT, Prompt Engineering, Agentforce, GPT/Claude/Gemini, Mistral) render crisp vector brand icons.
3. Scroll to **Vector DBs & AI Observability**:
   - Verify Pinecone, ChromaDB, LangSmith, Weights & Biases, NumPy, etc. render their respective logos.
4. Scroll to **Web & Full-Stack Architecture**:
   - Verify TypeScript, JavaScript, Python, Java, Node.js, React, FastAPI, GraphQL, gRPC, HTML5, Salesforce LWC/Apex logos are displayed in authentic colors.
5. Scroll to **Databases & Cloud Infrastructure**:
   - Verify PostgreSQL, MongoDB, Neo4j, AWS, GCP, Docker, Kubernetes, GitHub Actions, Git, Claude/Cursor icons are rendered.

### Scenario 2: Responsive Alignment & Sizing (P2)

1. Open Browser DevTools (F12) and toggle device emulation mode.
2. Test viewport at **375px (iPhone / Mobile)**:
   - Verify all badges wrap cleanly without horizontal scrolling or text clipping.
   - Verify the 18px icons stay vertically aligned with the text.
3. Test viewport at **768px (Tablet / iPad)**:
   - Verify the 2-column grid balances smoothly.
4. Test viewport at **1280px+ (Desktop)**:
   - Verify grid spacing and hover interactions.

### Scenario 3: Hover Interaction & Accessibility (P3)

1. Hover over various skill badges:
   - Verify smooth transition with subtle lift (`translateY(-1px)`) and background accent without icon jitter.
2. Inspect DOM in DevTools:
   - Confirm every `<img class="skill-icon">` includes `alt=""` and `aria-hidden="true"`.
3. Check Network Tab:
   - Confirm all SVG assets load as lightweight vectors with 200 OK status from CDN.
