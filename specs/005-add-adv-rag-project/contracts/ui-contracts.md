# UI Contracts: Advanced RAG Showcase & Spotlight

**Feature**: Add Advanced RAG Project Showcase (`005-add-adv-rag-project`)  
**Date**: 2026-08-28  

## Contract 1: `projects.html` Showcase Card

```html
<!-- Featured Live Portfolio Project: Advanced RAG System -->
<article class="card project-card" style="border-color: var(--accent-border); box-shadow: var(--shadow-md);">
  <div>
    <div class="project-preview" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(79, 70, 229, 0.12));" aria-hidden="true">
      ⚡
    </div>
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
      <span class="badge badge-primary" style="font-size: 0.6875rem; padding: 0.15rem 0.5rem;">🌟 Live Application</span>
    </div>
    <h2 class="project-title">Advanced Production RAG System</h2>
    <div class="project-tagline">Multi-Query Retrieval, Hybrid Search, Reranking, RBAC &amp; Ragas Eval</div>
    <p class="project-description">
      Production-grade Retrieval-Augmented Generation application featuring hybrid dense/sparse retrieval, cross-encoder reranking, contextual query expansion, Role-Based Access Control (RBAC) security boundaries, and Ragas evaluation benchmarking with real-time UI streaming.
    </p>
  </div>
  <div class="project-meta">
    <div class="tag-list">
      <span class="tag tag-accent">Streamlit Live App</span>
      <span class="tag tag-accent">Python</span>
      <span class="tag tag-accent">Advanced RAG</span>
      <span class="tag">Hybrid Search</span>
      <span class="tag">RBAC</span>
      <span class="tag">Ragas Eval</span>
    </div>
    <div class="project-actions">
      <a href="https://my-adv-rag.streamlit.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        🚀 Launch Live Demo
      </a>
      <a href="https://github.com/raghu-bayaneni-dev/my-adv-rag" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        💻 GitHub Repo
      </a>
    </div>
  </div>
</article>
```

---

## Contract 2: `index.html` Landing Page Live Spotlight

```html
<!-- Featured Live Project Spotlight -->
<section class="featured-project-section" style="margin-top: 3.5rem;" aria-labelledby="featured-project-heading">
  <div class="card" style="border: 1px solid var(--accent-border); background: linear-gradient(135deg, rgba(37, 99, 235, 0.04), rgba(79, 70, 229, 0.06)); padding: 2rem;">
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.5rem;">
      <div style="max-width: 650px;">
        <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="badge badge-primary" style="font-size: 0.75rem; padding: 0.2rem 0.6rem;">🌟 Featured Live Demo</span>
          <span class="text-muted" style="font-size: var(--text-xs); font-family: var(--font-family-mono);">Streamlit Cloud</span>
        </div>
        <h2 id="featured-project-heading" style="font-size: var(--text-2xl); font-weight: 700; margin-bottom: 0.5rem;">
          Advanced Production RAG System
        </h2>
        <p class="text-secondary" style="font-size: var(--text-sm); line-height: 1.6; margin-bottom: 1rem;">
          Explore a live, interactive Retrieval-Augmented Generation application featuring hybrid dense/sparse search, cross-encoder reranking, multi-query expansion, RBAC access security, and Ragas evaluation metrics.
        </p>
        <div class="tag-list">
          <span class="tag tag-accent">Streamlit App</span>
          <span class="tag tag-accent">Python</span>
          <span class="tag">Hybrid Retrieval</span>
          <span class="tag">RBAC Security</span>
          <span class="tag">Ragas Eval</span>
        </div>
      </div>
      <div class="btn-group" style="flex-shrink: 0;">
        <a href="https://my-adv-rag.streamlit.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          🚀 Launch Live Demo
        </a>
        <a href="https://github.com/raghu-bayaneni-dev/my-adv-rag" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          💻 GitHub Repo
        </a>
      </div>
    </div>
  </div>
</section>
```
