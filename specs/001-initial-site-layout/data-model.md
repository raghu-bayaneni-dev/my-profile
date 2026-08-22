# Data Model: Initial Site Layout

**Feature**: `001-initial-site-layout`
**Date**: 2026-08-22

## Conceptual Static Entities

Although this project is implemented as static HTML, the content structure across pages follows consistent entity models:

### 1. Navigation Item
- **`label`** (*string*): Human-readable title (e.g., "About", "Experience", "Projects", "Skills", "Contact").
- **`url`** (*string*): Relative target file (e.g., `index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`).
- **`isActive`** (*boolean*): Indicates if the current page matches the navigation item.

### 2. Profile Summary (About / Hero)
- **`name`** (*string*): Professional's name.
- **`headline`** (*string*): Professional title / role (e.g., "Senior Software Engineer").
- **`bio`** (*string*): Introductory paragraph and focus statement.
- **`location`** (*string*): Current city / remote availability.
- **`highlights`** (*array of strings*): Core specializations or pillars.

### 3. Experience Timeline Item
- **`role`** (*string*): Job title / role name.
- **`company`** (*string*): Organization / client name.
- **`period`** (*string*): Date range (e.g., "2023 — Present").
- **`description`** (*string*): Summary of responsibilities and technical achievements.
- **`skillsUsed`** (*array of strings*): Technologies applied during the role.

### 4. Project Card
- **`title`** (*string*): Project name.
- **`tagline`** (*string*): Brief one-sentence summary.
- **`description`** (*string*): Overview of problem solved, architecture, and impact.
- **`tags`** (*array of strings*): Technology badges (e.g., "TypeScript", "Node.js", "PostgreSQL").
- **`links`** (*object*): Demo and GitHub repository URLs (placeholders).

### 5. Skill Category
- **`category`** (*string*): Classification group (e.g., "Languages", "Frameworks & Web", "Cloud & DevOps", "Databases & Tools").
- **`skills`** (*array of objects*): Individual skill items with name, proficiency level, or icon tag.

### 6. Contact Card
- **`platform`** (*string*): Channel name (e.g., "Email", "LinkedIn", "GitHub", "Resume", "Location").
- **`value`** (*string*): Display text or address (e.g., "developer@example.com").
- **`url`** (*string*): Direct href target (`mailto:`, external URL, or downloadable asset path).
- **`icon`** (*string*): Icon identifier or SVG representation.

### 7. Footer Metadata
- **`copyright`** (*string*): Year and author copyright notice.
- **`siteSummary`** (*string*): Brief closing tagline.
- **`socialLinks`** (*array of Contact Cards*): Quick-access external profile handles.
- **`backToTop`** (*boolean*): Flag enabling smooth back-to-top interaction.
