# Quickstart Validation Guide: Advanced RAG Showcase

**Feature**: Add Advanced RAG Project Showcase (`005-add-adv-rag-project`)  
**Date**: 2026-08-28  

## Manual Visual Verification Protocol

Per Constitution Principle IV (Zero Automated Testing Policy), this feature is validated exclusively via browser inspection.

### Step 1: Start Local Server
```bash
npm start
```
*Or:*
```bash
npx serve . -l 3000
```

### Step 2: Test `projects.html` Showcase
1. Open `http://localhost:3000/projects.html`.
2. Verify that **Advanced Production RAG System** is displayed as the first project card with a distinct `🌟 Live Application` badge.
3. Check that the tagline and description highlight **Multi-Query Retrieval, Hybrid Search, Reranking, RBAC, and Ragas Eval**.
4. Check that tags include `RBAC`, `Ragas Eval`, `Streamlit Live App`, `Python`, `Advanced RAG`, and `Hybrid Search`.
5. Click **🚀 Launch Live Demo**: Confirm it opens `https://my-adv-rag.streamlit.app/` in a new tab.
6. Click **💻 GitHub Repo**: Confirm it opens `https://github.com/raghu-bayaneni-dev/my-adv-rag` in a new tab.

### Step 3: Test `index.html` Homepage Spotlight
1. Open `http://localhost:3000/index.html`.
2. Scroll below the "Core Engineering Pillars" section.
3. Verify the **Featured Live Demo** spotlight banner is rendered with title, pitch, tags, and action buttons.
4. Verify layout responsiveness across desktop (1200px), tablet (768px), and mobile (375px) viewports using browser devtools.
