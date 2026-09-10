# UI Contracts: Skill Badge & Icon Components

**Feature**: Include Public Icons for Skills  
**Branch**: `006-skill-icons`  
**Date**: 2026-08-29  

## 1. HTML Markup Contract for Skill Badges

### Legacy Markup (Before):
```html
<div class="skill-badge"><span class="skill-dot"></span>TypeScript</div>
```

### New Standard Markup Contract (After):
```html
<div class="skill-badge">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" class="skill-icon" width="18" height="18" loading="lazy" aria-hidden="true">
  <span>TypeScript</span>
</div>
```

### Composite / Multi-Tool Skill Badge Contract:
```html
<div class="skill-badge">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" class="skill-icon" width="18" height="18" loading="lazy" aria-hidden="true">
  <span>React, Next.js &amp; Angular</span>
</div>
```

---

## 2. CSS Styling Contract (`css/styles.css`)

```css
/* Skill Badge Container */
.skill-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--bg-subtle);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 0.5rem 0.75rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.skill-badge:hover {
  background-color: var(--accent-subtle);
  border-color: var(--accent-border);
  color: var(--accent-primary);
  transform: translateY(-1px);
}

/* Public Technology Vector Icon */
.skill-icon {
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  object-fit: contain;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}
```

---

## 3. Responsive Breakpoints & Alignment Contract

| Viewport Width | Grid Columns | Badge Layout Behavior |
| :--- | :--- | :--- |
| **Mobile (<640px)** | 1 Column Category Cards, `auto-fill (minmax(120px, 1fr))` | Badges flex wrap cleanly, icon vertically centered with label |
| **Tablet (640px - 1024px)** | 2 Column Grid | Consistent badge heights across cards |
| **Desktop (1024px+)** | 2 Column Grid with Max Container Width | High-density grid with crisp high-DPI vector rendering |
