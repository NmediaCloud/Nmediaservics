# AI Context & Memory

This file serves as persistent memory and project context for the AI assistant. It ensures that across different sessions, the core project rules, design instructions, and ongoing tasks are easily accessible.

## Project Overview
- **Project Name:** Nmediaservices Responsive Website
- **Tech Stack:** React 19, Vite 8, Tailwind CSS v4, React Router v7.
- **Type:** Single-Page Application (SPA)

## Core Design Rules (The "Digital Architect")
- **Dark Mode Only:** The canvas background is strictly `#121317`. Avoid pure black.
- **No Solid Lines:** 1px solid borders for sectioning are strictly prohibited. Use tonal background shifts (e.g., `#121317` to `#1a1b1f`) to separate content elements.
- **Typography Engine:** Space Grotesk for Headings/Display (Editorial impact) and Inter for Body/Label text (Legibility).
- **Depth & Layers:** Use surface-container nesting to simulate depth. Instead of flat dropshadows, use the "Glass & Gradient" rule with high-blur (e.g., `backdrop-filter: blur(20px)` at 60% opacity) or subtle scaling.
- **Fluid UI:** All interactive elements must bounce/scale slightly on hover/action using a crisp transition curve: `cubic-bezier(0.16, 1, 0.3, 1)`.

## Current Project State
- [x] Initial React/Vite/Tailwind Setup
- [x] Global design tokens and constraints recorded (`DESIGN.md`)
- [x] Project description created (`README.md`)

## Ongoing Tasks & Roadmap
*(Add any current objectives or features you want the AI to focus on here)*
- Ensure mobile/desktop responsiveness (checking `HomeMobile.jsx` vs `HomeDesktop.jsx`).
- Finish wiring up any custom routing in `App.jsx`.

---
*Note to AI Assistant: Always refer to this document for styling philosophy and core guidelines when generating or refactoring code within this project.*
