# Data Model & Component Specifications: Add Profile Picture

## Entity Definitions

### 1. Profile Picture Asset (`resources/profile.jpeg`)
- **Type**: Static Raster Image File (JPEG)
- **Path**: `resources/profile.jpeg`
- **Purpose**: Master visual portrait asset for the portfolio candidate.
- **Attributes**:
  - `src`: `"resources/profile.jpeg"` (relative to HTML files in project root)
  - `alt`: `"Raghu - AI Engineer Profile Photo"`
  - `aspectRatio`: `1:1` (square)
  - `mimeType`: `image/jpeg`

---

## UI Components & Data Contracts

### 1. Hero Squircle Avatar Component (`index.html`)
- **Placement**: Inside `<section class="hero">` within `.hero-container` (side-by-side or stacked on mobile with `.hero-content`).
- **Structure**:
  ```html
  <div class="hero-avatar-wrapper">
    <div class="avatar-squircle-glow"></div>
    <div class="avatar-squircle-frame">
      <img src="resources/profile.jpeg" 
           alt="Raghu - AI Engineer Profile Photo" 
           class="hero-avatar-img" 
           width="280" 
           height="280" 
           loading="eager" />
    </div>
  </div>
  ```
- **Styling Properties**:
  - `border-radius`: `28px` (squircle)
  - `width`: `280px`, `height`: `280px` (desktop), `220px` (tablet), `180px` (mobile)
  - `object-fit`: `cover`
  - `backdrop-filter`: `blur(12px)`
  - `box-shadow`: multi-layer subtle ambient glow

---

### 2. Navigation Brand Avatar Component (All 5 Pages)
- **Placement**: Inside `<a href="index.html" class="nav-brand">` across all HTML pages.
- **Structure**:
  ```html
  <a href="index.html" class="nav-brand">
    <img src="resources/profile.jpeg" 
         alt="Raghu" 
         class="nav-avatar-img" 
         width="36" 
         height="36" 
         loading="eager" />
    <span>Raghu</span>
  </a>
  ```
- **Styling Properties**:
  - `width`: `36px`, `height`: `36px`
  - `border-radius`: `10px` (mini-squircle)
  - `object-fit`: `cover`
  - `border`: `1.5px solid var(--accent-color, #6366f1)`

---

### 3. Contact Portrait Card Component (`contact.html`)
- **Placement**: Inside `<div class="contact-header">` or `<div class="contact-card">`.
- **Structure**:
  ```html
  <div class="contact-avatar-wrapper">
    <img src="resources/profile.jpeg" 
         alt="Raghu - AI Engineer Profile Photo" 
         class="contact-avatar-img" 
         width="160" 
         height="160" 
         loading="lazy" />
  </div>
  ```
- **Styling Properties**:
  - `border-radius`: `20px` (squircle)
  - `width`: `160px`, `height`: `160px`
  - `object-fit`: `cover`
  - `border`: `1px solid var(--border-glass, rgba(255, 255, 255, 0.1))`
