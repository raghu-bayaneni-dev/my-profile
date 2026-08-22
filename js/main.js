/**
 * ==============================================================================
 * My Profile Site - Main Interactivity Script (js/main.js)
 * ==============================================================================
 * 
 * Purpose:
 *   Lightweight, framework-free Vanilla JavaScript providing essential client-side
 *   interactivity across all static pages:
 *   1. Responsive mobile navigation toggle (drawer open/close state & ARIA attributes)
 *   2. Keyboard accessibility (Escape key closes drawer, focus management)
 *   3. Auto-close drawer on outside click or navigation link selection
 *   4. Smooth back-to-top scroll interaction
 * 
 * Constitution & Architectural Compliance:
 *   - Principle I: Clean, readable, and well-documented with JSDoc headers.
 *   - Principle II: Pure Vanilla JS (ES6+) with zero external dependencies.
 *   - Principle IV: Zero automated test dependencies; manually verified.
 * 
 * Execution Lifecycle:
 *   All initialization is encapsulated inside a 'DOMContentLoaded' listener to
 *   guarantee safe DOM querying without render-blocking script placement.
 * ==============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initBackToTop();
});

/**
 * Initializes the mobile navigation toggle drawer, keyboard listeners,
 * and auto-closing behaviors for smaller viewports (<768px).
 */
function initMobileNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  // Guard clause if header elements are not present on the current page
  if (!navToggle || !siteNav) {
    return;
  }

  /**
   * Toggles the mobile navigation drawer visibility and synchronizes
   * accessibility ARIA state.
   */
  function toggleMenu() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    const nextState = !isExpanded;

    navToggle.setAttribute('aria-expanded', String(nextState));
    siteNav.classList.toggle('nav-open', nextState);
  }

  /**
   * Explicitly closes the mobile navigation drawer.
   */
  function closeMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('nav-open');
  }

  // 1. Toggle button click event
  navToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  // 2. Auto-close menu when clicking any navigation link
  const navLinks = siteNav.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // 3. Auto-close menu when clicking anywhere outside the navigation header
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!siteNav.contains(target) && !navToggle.contains(target)) {
      closeMenu();
    }
  });

  // 4. Accessibility: Close menu when pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (siteNav.classList.contains('nav-open')) {
        closeMenu();
        navToggle.focus();
      }
    }
  });
}

/**
 * Initializes smooth back-to-top scrolling for the footer link button.
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  if (!backToTopBtn) {
    return;
  }

  backToTopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
