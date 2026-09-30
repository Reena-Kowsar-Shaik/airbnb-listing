---
name: airbnb-quality
description: Guidelines and automated checklists for evaluating pixel-perfect UI fidelity, state transitions, accessibility, and high-concurrency architecture.
---

# Airbnb UI & Architecture Quality Skill

This skill defines the evaluation standards, design tokens, accessibility rules, and system architecture principles for Airbnb-grade web applications.

## 1. UI Fidelity Checklist
- [x] **Typography & Color Hierarchy**: Use Airbnb Cereal / Plus Jakarta Sans fonts. Brand color `#FF385C`, text `#222222`, muted `#717171`, border `#DDDDDD`.
- [x] **Hero Gallery (5-photo layout)**: Left anchor photo (span 2 cols, 2 rows, rounded left), 4 sub-photos (2x2 grid, rounded right), with floating "Show all photos" trigger.
- [x] **Guest Favorite Badge**: Laurel wreath insignia with verified rating breakdown and review count.
- [x] **Sticky In-Page Navigation Bar**: Activates on scroll past hero gallery with tab links (Photos, Amenities, Reviews, Location) and compact reservation CTA.
- [x] **Interactive Calendar Range Selector**: Dual-month calendar supporting fluid date range selection, nights calculation, and dynamic price updates.
- [x] **Sticky Reservation Card**: Live price breakdown calculation, promotional 10% discount toggle, guest stepper dropdown popover, and confirmation modal.

## 2. Views & Overlays
- [x] **Listing Page**: Full property showcase with all sections and metadata.
- [x] **Photo Tour Modal (Screen 2)**: Full-screen overlay with room categories filter, grid/feed layout, and back navigation.
- [x] **Lightbox Viewer (Screen 3)**: Single photo viewer with slide transitions (Framer Motion), counter (`X / Total`), thumbnail tray, and keyboard arrow navigation (← / → / Escape).

## 3. Accessibility & Keyboard Navigation (WCAG 2.1 AA)
- [x] All modals trap and restore focus with `Escape` key close listener.
- [x] Proper ARIA attributes for dialogs, interactive controls, and buttons.
- [x] Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

## 4. Performance Standards
- Zero layout shift (CLS < 0.05).
- Lazy loading for non-critical images and dynamic modal mounts.
- Optimized bundle splitting with Vite & Tree-shaking.
