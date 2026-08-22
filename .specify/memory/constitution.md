<!--
Sync Impact Report:
- Version change: Draft → 1.0.0
- Ratification Date: 2026-08-22
- Last Amended Date: 2026-08-22
- Modified Principles:
  - PRINCIPLE_1: I. Clean, Readable, and Well-Documented Code
  - PRINCIPLE_2: II. Pure Static Foundation (HTML, CSS, JavaScript)
  - PRINCIPLE_3: III. Modern, Responsive Design & UX
  - PRINCIPLE_4: IV. Zero Automated Testing Policy (NON-NEGOTIABLE)
  - PRINCIPLE_5: V. Architectural Simplicity & Minimal Dependencies
- Added Sections:
  - Technology Stack & Constraints
  - Development Workflow & Verification Gates
- Removed Sections: None
- Deferred TODOs: None
-->

# My Profile Site Constitution

## Core Principles

### I. Clean, Readable, and Well-Documented Code
Code MUST be clean, readable, well organized, and accessible to developers of all skill levels. Every file MUST begin with a clear explanation of its purpose, and complex logic or workflows MUST include inline comments explaining data flow and rationale. High readability and maintainability take precedence over brevity or unnecessary abstractions.

### II. Pure Static Foundation (HTML, CSS, JavaScript)
The project MUST remain a static website built with fundamental web technologies: HTML5, CSS3, and Vanilla JavaScript. Complex JavaScript frameworks (e.g., React, Vue, Angular) and heavy client-side runtimes are strictly prohibited. Modern CSS libraries or lightweight styling toolkits may be used to achieve a modern visual style, and simple, focused JavaScript libraries are allowed only when strictly needed for specific features.

### III. Modern, Responsive Design & UX
The user interface MUST be modern, clean, visually engaging, and fully responsive across mobile, tablet, and desktop viewports. Layouts, typography, and color schemes MUST adhere to modern web aesthetics with intuitive navigation and seamless user interactions.

### IV. Zero Automated Testing Policy (NON-NEGOTIABLE)
No automated tests of any kind MUST be written, maintained, or executed (including Unit Tests, Functional Tests, Integration Tests, and End-to-End Tests). This principle explicitly supersedes any default development rules, testing frameworks, or external guidelines to ensure maximum development velocity and zero build overhead. Verification is performed exclusively through manual browser inspection.

### V. Architectural Simplicity & Minimal Dependencies
The codebase MUST maintain a flat, predictable directory structure that is easy to navigate. External dependencies MUST be kept to a strict minimum to eliminate complex build pipelines, minimize bundle size, and allow the site to be served directly by any standard static web server.

## Technology Stack & Constraints

- **Structure**: Semantic HTML5 markup ensuring accessibility and clean document flow.
- **Styling**: Modern CSS3 (Grid, Flexbox, Custom Properties) or vetted lightweight modern CSS libraries for styling.
- **Interactivity**: Plain Vanilla JavaScript (ES6+) for interactive components; no bloated front-end frameworks.
- **Build & Runtime**: Zero required build steps; files can be edited and loaded directly in a web browser.
- **Testing**: Strictly zero test suites or testing harnesses.

## Development Workflow & Verification Gates

- **Iteration Speed**: Direct local static file viewing or lightweight live server preview for instantaneous feedback loops.
- **Documentation**: All key files and functions MUST have descriptive comments explaining their role in the application.
- **Verification Gate**: Visual verification and manual functional validation in browser viewports replace automated test suites.

## Governance

This Constitution is the supreme governing document for the project and supersedes all conflicting instructions, agent prompts, and default practices. Any proposed amendments MUST be documented, versioned, and explicitly approved. All development activities MUST verify compliance with these core principles, particularly the pure static stack constraint and the strict zero-testing mandate.

**Version**: 1.0.0 | **Ratified**: 2026-08-22 | **Last Amended**: 2026-08-22
