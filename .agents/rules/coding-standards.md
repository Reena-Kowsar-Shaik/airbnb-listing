# AI Coding Standards & Behavioral Rules

## 1. Pixel-Perfect Design Fidelity
- Maintain exact Airbnb spacing (8pt grid system: 4px, 8px, 16px, 24px, 32px, 48px).
- Match border radiuses: `rounded-2xl` (16px) for cards/images, `rounded-3xl` (24px) for modals and guest favorite badge, `rounded-full` for search pills/avatars/action buttons.
- Match subtle shadow treatments: `shadow-card`, `shadow-airbnb`, `shadow-modal`.

## 2. Component Architecture
- Single Responsibility Principle (SRP) per component.
- Strictly typed TypeScript props with explicit interfaces.
- Decoupled state management between core listing data and presentation layer.

## 3. Micro-Animations & Interactions
- Use Framer Motion for smooth modal entries and image slide transitions.
- Fluid hover states with scale and brightness adjustments (`group-hover:scale-105 group-hover:brightness-90`).
- Interactive feedback for wishlists, copying links, and booking confirmations.
