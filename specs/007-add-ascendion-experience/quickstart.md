# Quickstart & Manual Validation Guide: Ascendion Milestone & Salesforce Dates

**Feature**: Add Ascendion Experience & Update Salesforce Dates  
**Branch**: `007-add-ascendion-experience`  
**Date**: 2026-09-10  

## Purpose

This guide outlines manual verification steps for validating the Ascendion career milestone and updated Salesforce dates on `experience.html` in strict adherence to Constitution Principle IV (Zero Automated Testing Policy).

---

## Validation Scenarios

### Scenario 1: Ascendion Milestone Presentation (P1)

1. Open `experience.html` in a web browser (`http://localhost:60213/experience`).
2. Verify the top timeline milestone:
   - **Role Title**: `Lead AI & Forward Deployment Engineer - Enterprise AI Systems`
   - **Company & Location**: `Ascendion • San Francisco Bay Area, CA`
   - **Dates**: `Aug 2026 — Present`
   - **Overview**: Reads the exact overview summary.
   - **Responsibilities**: All 6 structured bullet points render with bold headers.
   - **Tag List**: All 9 tags (`Agentic AI`, `Forward Deployed Systems`, `Multi-Agent Frameworks`, `Advanced RAG`, `Python`, `TypeScript`, `Java`, `Vector DBs`, `AI Observability`) display cleanly.

### Scenario 2: Salesforce Date Update (P2)

1. On `experience.html`, scroll down to the Salesforce milestone.
2. Verify the date badge shows `Jan 2012 — Apr 2026`.
3. Confirm all existing Salesforce responsibilities and tags are preserved without modification.

### Scenario 3: Responsive Visual Alignment (P3)

1. Open Browser DevTools (F12) and toggle device emulation mode.
2. Test viewport at **375px (Mobile)**:
   - Verify timeline markers, line, text wrapping, and tag pills render without horizontal overflow.
3. Test viewport at **768px (Tablet)** and **1200px+ (Desktop)**:
   - Verify timeline header alignment and spacing.
