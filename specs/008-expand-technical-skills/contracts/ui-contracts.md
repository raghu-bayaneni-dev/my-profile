# UI Contracts: Expand & Reorganize Technical Skills

**Feature**: `008-expand-technical-skills`  
**Date**: 2026-09-10  
**Status**: Completed  

---

## 1. Skill Category Card Contract

```html
<section class="card skill-category-card" aria-labelledby="{headingId}" [style="grid-column: 1 / -1;"]>
  <div class="skill-category-header">
    <span class="skill-category-icon" aria-hidden="true">{iconGlyph}</span>
    <h2 id="{headingId}" class="skill-category-title">{categoryTitle}</h2>
  </div>
  <div class="skill-items-grid">
    <!-- Array of SkillItem Badges -->
  </div>
</section>
```

### Invariants
1. `headingId` MUST match the `aria-labelledby` attribute on the containing `<section>`.
2. The category header icon `span` MUST have `aria-hidden="true"`.
3. The items container MUST have the class `skill-items-grid`.

---

## 2. Skill Badge Contract

```html
<div class="skill-badge">
  <img 
    src="{iconUrl}" 
    alt="" 
    class="skill-icon" 
    width="18" 
    height="18" 
    loading="lazy" 
    aria-hidden="true"
  >
  <span>{skillLabel}</span>
</div>
```

### Invariants
1. `img` element MUST precede the `span` element inside `.skill-badge`.
2. `width="18"` and `height="18"` attributes MUST be present explicitly to prevent layout shifts.
3. `alt=""` and `aria-hidden="true"` MUST be set so screen readers do not announce repetitive decorative icon filenames.
4. `loading="lazy"` MUST be set on all badges.
5. All SVG CDN links MUST point to valid, active URLs on jsDelivr / Simple Icons / Devicon.
