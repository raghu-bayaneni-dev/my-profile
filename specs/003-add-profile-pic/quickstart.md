# Quickstart Validation Guide: Add Profile Picture

## Overview

This guide provides step-by-step manual validation procedures to verify that the candidate's profile picture renders correctly across all target locations, screen sizes, and states.

---

## Prerequisites

1. Profile picture asset exists at `resources/profile.jpeg`.
2. Static server available (e.g. `npx serve .` or opening `index.html` directly in browser).

---

## Manual Verification Steps

### Step 1: Verify Home Page Hero Squircle Avatar
1. Open `index.html` in a web browser.
2. Verify that the candidate's portrait renders in the hero section.
3. Check the rounded squircle framing (smooth rounded corners), glassmorphism border, and subtle ambient glow behind the portrait.
4. Hover over the hero avatar and confirm the subtle elevation and border glow transition.

### Step 2: Verify Global Navigation Header Thumbnail
1. On `index.html`, check the top-left navigation brand link.
2. Confirm the 36px x 36px avatar thumbnail appears alongside the name "Raghu".
3. Navigate to each secondary page:
   - `experience.html`
   - `projects.html`
   - `skills.html`
   - `contact.html`
4. Confirm the nav brand avatar remains present and consistently aligned on every page.

### Step 3: Verify Contact Page Portrait Card
1. Open `contact.html`.
2. Verify the squircle portrait card appears in the contact header/card area above or alongside the reach-out methods.
3. Confirm image scaling and aspect ratio are intact without distortion.

### Step 4: Responsive Viewport Validation
1. Open Developer Tools (F12) and toggle device simulation mode.
2. **Desktop (1440px+)**: Hero avatar displays side-by-side or harmoniously with hero text.
3. **Tablet (768px - 1024px)**: Hero avatar scales proportionately (~220px) without horizontal scroll.
4. **Mobile (375px - 425px)**: Hero avatar centers smoothly (~180px-200px) above bio; navigation avatar thumbnail remains compact and does not overlap the mobile hamburger button.

### Step 5: Accessibility & Performance Validation
1. Right-click each image and inspect element:
   - Verify `alt="Raghu - AI Engineer Profile Photo"` or `alt="Raghu"`.
   - Verify explicit `width` and `height` attributes to ensure zero Cumulative Layout Shift (CLS).
