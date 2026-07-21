# Ember & Stone

A dark, editorial fine-dining website for Ember & Stone, a Chicago steakhouse. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion (`motion/react`), Radix UI primitives, and `lucide-react`.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (design tokens for the dark espresso / warm gold palette)
- `motion` (Framer Motion) for scroll reveals, staggered entrances, and the testimonial slider
- Radix UI (`react-tabs`, `react-select`, `react-slot`) for accessible menu tabs and the reservation form
- `lucide-react` for iconography

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Structure

- `src/components/sections/` — one file per page section (navbar, hero, philosophy, menu, chef feature, private dining, testimonials, reservations, footer)
- `src/components/ui/` — shared primitives (button, gold underline heading, select, grain overlay, scroll-reveal wrapper, image placeholder)
- `src/data/` — menu and testimonial copy

## Photography placeholders

There are no licensed photography assets in this repo, so `ImagePlaceholder` renders a moody gradient + icon stand-in for each photo slot (hero background, philosophy, chef feature, private dining). Swap those for real photography by replacing the `ImagePlaceholder` usage with an `<img>` pointing at your asset — the `caption` prop on each documents the shot it represents.
