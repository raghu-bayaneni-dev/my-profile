# Phase 1 Data Model: Skills with Public Vector Icons

**Feature**: Include Public Icons for Skills  
**Branch**: `006-skill-icons`  
**Date**: 2026-08-29  

## Entities & Schema Representation

### 1. Skill Item Entity

Represents an individual technical competency rendered as an interactive pill badge.

```text
SkillItem {
  id: string                   // Unique slug identifier (e.g., "langchain", "typescript")
  name: string                 // Display label text (e.g., "TypeScript", "LangChain / LangGraph")
  category_id: string          // Foreign reference to parent SkillCategory
  icon: {
    src: string                // Absolute CDN URL to vector SVG asset
    alt: string                // Empty string "" for decorative presentation
    width: number              // 18 (px)
    height: number             // 18 (px)
    loading: "lazy"            // Browser-native deferred loading
    aria_hidden: true          // Accessible tree exclusion
  }
}
```

### 2. Skill Category Entity

Represents a logical grouping of skill items presented within a category card.

```text
SkillCategory {
  id: string                   // Unique identifier (e.g., "genai", "ai-infra", "fullstack", "cloud")
  title: string                // Category header title (e.g., "Generative AI & Agentic Orchestration")
  heading_id: string           // HTML heading id for aria-labelledby binding
  category_icon: string        // Category emoji glyph (e.g., "🤖", "⚡", "💻", "☁️")
  items: SkillItem[]           // Ordered array of SkillItem instances
}
```

## Validation & Formatting Rules

1. **Icon Aspect Ratio**: All icons must maintain square 1:1 aspect ratio (`width="18" height="18"`).
2. **Accessibility**: Every `<img class="skill-icon">` tag must explicitly declare `alt=""` and `aria-hidden="true"`.
3. **Badge Symmetrical Flow**: Each `.skill-badge` must enforce `display: flex; align-items: center; gap: 0.5rem;` to prevent text-icon baseline mismatch.
4. **Resilience**: If an external SVG fails to load, standard browser image fallback behavior applies and the badge text label remains fully legible and interactive.
