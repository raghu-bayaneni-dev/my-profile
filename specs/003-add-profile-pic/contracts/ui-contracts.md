# UI & CSS Class Contract: Add Profile Picture

## CSS Class & HTML Structure Contract

### 1. Global Navigation Header Contract

Applied to `<header>` / `<nav>` in `index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`.

```html
<a href="index.html" class="nav-brand">
  <div class="nav-avatar-frame">
    <img src="resources/profile.jpeg" 
         alt="Raghu" 
         class="nav-avatar-img" 
         width="36" 
         height="36" 
         loading="eager" />
  </div>
  <span class="nav-brand-text">Raghu</span>
</a>
```

### 2. Home Page Hero Avatar Contract

Applied inside `<section class="hero">` in `index.html`.

```html
<div class="hero-avatar-container">
  <div class="hero-avatar-glow" aria-hidden="true"></div>
  <div class="hero-avatar-card">
    <img src="resources/profile.jpeg" 
         alt="Raghu - AI Engineer Profile Photo" 
         class="hero-avatar-img" 
         width="280" 
         height="280" 
         loading="eager" />
  </div>
</div>
```

### 3. Contact Page Portrait Contract

Applied inside `<div class="contact-header">` in `contact.html`.

```html
<div class="contact-avatar-card">
  <img src="resources/profile.jpeg" 
       alt="Raghu - AI Engineer Profile Photo" 
       class="contact-avatar-img" 
       width="160" 
       height="160" 
       loading="lazy" />
</div>
```

---

## CSS Rules Specification (`css/styles.css`)

```css
/* Navigation Brand Avatar */
.nav-avatar-frame {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--accent, #6366f1);
  flex-shrink: 0;
}

.nav-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Hero Squircle Avatar */
.hero-avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.hero-avatar-glow {
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%);
  filter: blur(20px);
  z-index: 0;
  border-radius: 36px;
}

.hero-avatar-card {
  position: relative;
  z-index: 1;
  width: 280px;
  height: 280px;
  border-radius: 28px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.hero-avatar-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.5);
}

.hero-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  display: block;
}

/* Contact Portrait */
.contact-avatar-card {
  width: 160px;
  height: 160px;
  border-radius: 22px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin: 0 auto 1.5rem auto;
}

.contact-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  display: block;
}
```
