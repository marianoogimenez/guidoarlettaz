# Guido Arlettaz - Dentist Website

## Project
- Astro 5.3 + Tailwind CSS 3.4 static site (Spanish, es-AR)
- No JS frameworks — vanilla JS only for interactivity
- Components in `src/components/*.astro`, single page at `src/pages/index.astro`

## Build & Dev
- `npx astro dev --port 4321` — dev server
- `npx astro build` — production build to `dist/`
- Always verify build after component changes

## Design System
- Colors: teal-primary (#0D9488), coral (#F97316), mint (#F0FDFA), warm (#FFF7ED) — defined in `tailwind.config.mjs`
- Fonts: Inter (sans), Playfair Display (serif) — loaded from Google Fonts in Layout.astro
- Section pattern: `py-20 lg:py-28`, `max-w-7xl mx-auto px-4 sm:px-6`
- Header hierarchy: coral uppercase eyebrow → Playfair serif title → slate-500 description

## Conventions
- Scroll animations use IntersectionObserver + CSS @keyframes (no animation libraries)
- Interactive features use vanilla JS in `<script>` blocks, CSS in `<style>` blocks
- Smooth scroll nav links use `data-nav-link` attribute
- Always respect `prefers-reduced-motion` for accessibility

## Content Notes
- Site does NOT have Google Maps reviews — testimonials are site-only, never reference Google reviews
- All content is in Argentine Spanish (voseo, local expressions)
