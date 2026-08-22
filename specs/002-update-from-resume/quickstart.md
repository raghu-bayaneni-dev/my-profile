# Quickstart & Manual Validation Guide: Update From Resume

**Feature**: `002-update-from-resume`
**Date**: 2026-08-22

## Prerequisites
- Static preview server running via `npm start` (or native browser file access).
- Uploaded resume `resources/RaghuAIEng.pdf` present and standardized as `resources/resume.pdf`.

## Validation Checklist

### 1. Resume Download & Viewing Verification
- [ ] **Home Page Hero**: Click the "View / Download Resume" CTA button. Confirm that `resources/resume.pdf` opens in a new browser tab.
- [ ] **Contact Page**: Click the Resume Card on `contact.html`. Confirm that `resources/resume.pdf` loads without 404 errors.
- [ ] **Footer**: Click "Resume (PDF)" in the footer across any page and confirm link validity.

### 2. Authentic Content Verification Across All 5 Pages
- [ ] **Home / About (`index.html`)**: Confirm Raghu Bayaneni's title ("Lead Staff Engineer | Full-Stack, AI & Forward Deployed Systems"), 15+ years experience bio, and 3 Core Pillars (Generative AI & Agentic Orchestration, System Architecture & Engineering, Engineering Strategy & Forward Deployment).
- [ ] **Experience Page (`experience.html`)**: Confirm chronological work milestones:
  - Salesforce (Lead Technical Staff Engineer - AI Systems & Web Platforms, 2012 — Recent)
  - BlackRock (Senior Software Engineer - Full Stack Web, 2011 — 2012)
  - Yahoo! (Software Engineer - Full Stack Web, 2008 — 2011)
  - Prompt Technologies (Software Engineer - Full Stack Web, 2006 — 2008)
- [ ] **Projects Page (`projects.html`)**: Confirm real featured project cards (Agentforce Gateway, Enterprise RAG Pipeline, LLM Cost-Router, SpecKit Studio, Yahoo APT Platform, Financial Portfolio Portal).
- [ ] **Skills Page (`skills.html`)**: Confirm authentic skill categories (Generative AI & Agentic Orchestration, Vector DBs & AI Data, Web & Full-Stack, Databases & Infrastructure, Education, and Certifications including Stanford ML Specialization & Salesforce AI Agentblazer Champion).
- [ ] **Contact Page (`contact.html`)**: Confirm verified contact channels (`raghu.bayaneni@gmail.com`, `(209) 597 8323`, `linkedin.com/in/raghuramz`, SF Bay Area location, and direct Resume PDF card).
