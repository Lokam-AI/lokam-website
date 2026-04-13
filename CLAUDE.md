# CLAUDE.md

## Context

You are generating production-ready UI components from Figma designs for a Next.js (App Router) + Tailwind CSS project.

## Core Rules
* Prioritize clean architecture over visual exactness.
* Do NOT convert Figma literally. Interpret layout logically.
* Avoid fixed pixel values like `w-[1430px]`, `h-[338px]`.
* Use responsive, flexible layouts (`flex`, `grid`, `max-w-*`, `mx-auto`).
* Follow an 8px spacing system (use Tailwind scale).
* Ensure mobile-first responsiveness using `sm`, `md`, `lg` breakpoints.
* No absolute positioning unless strictly necessary.

## Component Guidelines

* Generate ONE component at a time (no full pages).
* Use clean, reusable structure.
* Extract repeated patterns into smaller components if needed.
* Use semantic HTML where possible.

## Styling Rules

* Use Tailwind utility classes only (no inline styles).
* Prefer semantic tokens (e.g., `text-primary`, not random hex).
* Maintain consistent spacing, typography, and alignment.
* Avoid unnecessary wrapper divs.

## Assets

* Use `next/image` for images.
* Assume assets are in `/public`.

## Output Expectations

* Clean, readable, production-quality code.
* Fully responsive.
* No redundant classes or dead code.
* No explanations unless explicitly asked.

## What to Avoid

* Figma auto-generated style code
* Hardcoded widths/heights
* Over-nested div structures
* Non-responsive layouts
