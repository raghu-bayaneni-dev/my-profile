# Feature Specification: Add Profile Picture

**Feature Branch**: `003-add-profile-pic`

**Created**: 2026-08-22

**Status**: Ready for Planning

**Input**: User description: "Add Profile Pic - Grab the profile picture from the resources folder and update the site with profile picture and add it where ever it looks good."

## Clarifications

### Session 2026-08-22
- Q: What file naming and source convention should the site use for the profile picture in the `resources/` folder? → A: Use direct image uploads placed in `resources/` (e.g. `resources/profile.png` or `resources/profile.jpg`) without extracting from the PDF resume (Option C).
- Q: Which specific pages and sections across the site should feature the profile picture? → A: Hero section on Home page (`index.html`), Contact card on Contact page (`contact.html`), plus a compact avatar thumbnail next to the brand name in the top navigation bar across all pages (Option C).
- Q: What visual styling and framing should be applied to the hero profile picture? → A: Rounded squircle (smooth rectangular rounded corners) with glassmorphism card frame.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Engaging Hero Avatar on Home Page (Priority: P1)

As a site visitor or recruiter landing on the personal portfolio, I want to immediately see a high-resolution, professionally styled profile portrait of the candidate in the hero section alongside their headline and bio so that I can establish a personal connection and associate the candidate's achievements with their authentic identity.

**Why this priority**: A prominent profile image in the hero section creates an immediate visual anchor and makes the portfolio feel personal, welcoming, and complete.

**Independent Test**: Place a profile picture file into `resources/profile.png` (or `.jpg`), navigate to the Home page (`index.html`) in a browser, and verify that a sharp, well-proportioned profile picture renders within a modern squircle glassmorphism container in the hero section.

**Acceptance Scenarios**:

1. **Given** an uploaded profile image in `resources/`, **When** the Home page (`index.html`) loads, **Then** a high-quality profile portrait is prominently displayed in the hero section alongside the headline, title, and bio.
2. **Given** a visitor interacts with the page, **When** they hover or view the hero avatar, **Then** it presents a rounded squircle frame with smooth rounded corners, glassmorphism backdrop blur, and subtle ambient gradient illumination.
3. **Given** different device screen sizes (mobile, tablet, desktop), **When** viewport dimensions change, **Then** the hero squircle picture smoothly adjusts its layout, preserving correct aspect ratio without distortion or cropping essential facial features.

---

### User Story 2 - Profile Picture on Contact Card and Global Navigation (Priority: P2)

As a recruiter or visitor navigating between portfolio pages, I want to see a compact avatar thumbnail integrated alongside the brand name in the top navigation bar across all pages and a complementary portrait on the Contact page card so that the candidate's personal brand remains cohesive throughout the browsing journey.

**Why this priority**: Universal navigation branding and a contact card portrait reinforce identity consistency and build trust across every page.

**Independent Test**: Navigate across all pages (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) and verify the top navigation bar features the compact brand avatar, and the Contact page displays the contact portrait.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to any page on the site, **When** they view the header navigation bar, **Then** a compact avatar thumbnail is rendered cleanly alongside the brand name / logo link.
2. **Given** a visitor navigates to the Contact page (`contact.html`), **When** they view the contact information container, **Then** a dedicated squircle portrait card element is displayed alongside direct communication links.

---

### User Story 3 - Resilient Asset Delivery & Accessible Fallback (Priority: P3)

As a visitor with low-bandwidth connectivity, high-contrast display modes, or assistive technology (screen readers), I want accessible descriptions and resilient image delivery so that the site remains fully accessible, fast-loading, and functional under all browsing conditions.

**Why this priority**: Accessibility and performance ensure every visitor, regardless of device capabilities or assistive tools, experiences a seamless and inclusive website.

**Independent Test**: Inspect the image markup with image loading disabled or before an image is uploaded in `resources/` to verify descriptive alternate text and zero layout shift.

**Acceptance Scenarios**:

1. **Given** an assistive technology tool (e.g., screen reader), **When** encountering the profile picture, **Then** a meaningful and concise `alt` text attribute is read aloud describing the candidate portrait.
2. **Given** a network delay or missing image asset in `resources/`, **When** the image is loading or absent, **Then** layout dimensions are preserved without content jumping (zero layout shift) and an elegant placeholder badge or monogram is presented.

---

### Edge Cases

- **Missing/Unuploaded Image File**: If no image file is present in `resources/profile.png` (or `.jpg`), an accessible visual fallback (such as candidate initials badge or stylized squircle placeholder) displays gracefully without broken image icons.
- **Extreme Viewport Constraints (Very Narrow Mobile Screens)**: On narrow mobile devices (< 360px width), the hero avatar and navigation thumbnail scale down proportionately without breaking header navigation or wrapping unexpectedly.
- **High-DPI / Retina Displays**: The image asset maintains crisp visual clarity without blurriness or pixelation on 2x and 3x device pixel ratio screens.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST support direct image file upload/placement in the `resources/` folder (such as `resources/profile.png` or `resources/profile.jpg`) as the authoritative source for the candidate's profile portrait.
- **FR-002**: The website MUST reference the standardized relative image path from `resources/` across all target pages.
- **FR-003**: The Home page (`index.html`) MUST display the profile portrait prominently within the hero section, integrated cleanly alongside the candidate name, headline, and bio.
- **FR-004**: The Contact page (`contact.html`) MUST integrate candidate portrait imagery to complement contact cards and communication channels.
- **FR-005**: All pages across the site (`index.html`, `experience.html`, `projects.html`, `skills.html`, `contact.html`) MUST display a compact avatar thumbnail alongside the brand title in the top navigation header.
- **FR-006**: All profile picture instances MUST include descriptive, accessible `alt` text (e.g., "Raghu - AI Engineer Profile Photo").
- **FR-007**: The hero and contact profile picture presentation MUST feature a rounded squircle frame (smooth rectangular rounded corners) with glassmorphism card styling and subtle ambient glow effects.
- **FR-008**: Profile image markup MUST include explicit dimension or aspect-ratio constraints to prevent cumulative layout shift (CLS) during page rendering.

### Key Entities

- **Profile Picture Asset**: A direct uploaded raster image file located in `resources/` representing the candidate's professional portrait.
- **Hero Avatar Component**: The primary visual container on the home page hero section holding the portrait, styled with rounded squircle geometry, glassmorphic backdrop filter, and ambient lighting effects.
- **Navigation Brand Avatar**: A compact thumbnail integrated with the site header brand logo/link.
- **Contact Identity Card**: The combined UI module on the contact page showcasing candidate portrait, bio snippet, and direct reach-out options.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors landing on the Home page see the candidate's profile picture rendered in under 500ms on standard broadband connections.
- **SC-002**: 100% of profile picture instances pass accessibility audits with non-empty, descriptive alternate text attributes.
- **SC-003**: Zero layout shift (CLS < 0.05) occurs during profile image loading across all supported screen sizes (320px to 2560px).
- **SC-004**: Visual inspection confirms sharp, undistorted rendering with smooth squircle curvature across mobile, tablet, and desktop display environments.
- **SC-005**: Navigation avatar appears seamlessly in headers across all 5 site pages without displacing mobile hamburger toggles or nav links.

---

## Assumptions

- The candidate provides their profile picture directly by placing an image file into `resources/` (e.g. `resources/profile.png` or `resources/profile.jpg`).
- Modern CSS styling (squircle framing, glowing ambient shadows, glassmorphism card wrapper) will be applied directly via the existing stylesheet (`css/styles.css`) without adding external CSS/JS framework dependencies.
- Standard static web delivery without automated test suites, strictly complying with the project constitution.
