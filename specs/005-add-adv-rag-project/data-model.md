# Phase 1: Data Model & Content Structure

**Feature**: Add Advanced RAG Project Showcase (`005-add-adv-rag-project`)  
**Date**: 2026-08-28  

## Entities & Content Structure

### Entity: `PortfolioProjectCard`

Represents a featured engineering project card rendered on `projects.html`.

| Attribute | Type | Description | Value for Advanced RAG |
|---|---|---|---|
| `id` | String | Unique identifier or anchor tag | `project-adv-rag` |
| `badge` | String | Visual status indicator | `🌟 Live Application` |
| `icon` | String | Visual emoji or SVG icon | `⚡` |
| `title` | String | Full formal project title | `Advanced Production RAG System` |
| `tagline` | String | Architectural subtitle | `Multi-Query Retrieval, Hybrid Search, Reranking, RBAC & Ragas Eval` |
| `description` | String | High-level summary of capabilities | Production-grade Retrieval-Augmented Generation application featuring hybrid dense/sparse retrieval, cross-encoder reranking, multi-query expansion, role-based access control (RBAC) security boundaries, and Ragas evaluation benchmarking with real-time UI streaming. |
| `tags` | Array&lt;String&gt; | Filterable / visual technology badges | `['Streamlit Live App', 'Python', 'Advanced RAG', 'Hybrid Search', 'RBAC', 'Ragas Eval']` |
| `primaryAction` | Object | Link to live demo | `{ label: '🚀 Launch Live Demo', url: 'https://my-adv-rag.streamlit.app/', target: '_blank' }` |
| `secondaryAction` | Object | Link to source repository | `{ label: '💻 GitHub Repo', url: 'https://github.com/raghu-bayaneni-dev/my-adv-rag', target: '_blank' }` |

---

### Entity: `LandingPageSpotlight`

Represents the highlighted live demo section rendered on `index.html`.

| Attribute | Type | Description | Value |
|---|---|---|---|
| `badge` | String | Section callout badge | `🌟 Featured Live Demo` |
| `platformTag` | String | Hosting platform identifier | `Streamlit Cloud` |
| `title` | String | Section title | `Advanced Production RAG System` |
| `summary` | String | Concise homepage pitch | Interactive, production-grade RAG pipeline featuring hybrid dense/sparse search, cross-encoder reranking, RBAC multi-tenant isolation, and Ragas evaluation metrics. |
| `tags` | Array&lt;String&gt; | Core highlights | `['Streamlit App', 'Python', 'Hybrid Retrieval', 'RBAC Security', 'Ragas Eval']` |
| `primaryLink` | Object | Live application launcher | `{ label: '🚀 Launch Live Demo', url: 'https://my-adv-rag.streamlit.app/' }` |
| `secondaryLink` | Object | Source code repository | `{ label: '💻 GitHub Repo', url: 'https://github.com/raghu-bayaneni-dev/my-adv-rag' }` |
