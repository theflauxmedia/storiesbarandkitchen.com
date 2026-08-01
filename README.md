# Stories Bar & Kitchen

Premium marketing site for [storiesbarandkitchen.com](https://storiesbarandkitchen.com).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Static export → `/out` (Hostinger-ready)

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes /out
```

## Forms

No backend. The **Book a Table** and **Event Enquiry** forms build a structured,
prefilled message from the entered details and open WhatsApp for the selected
outlet (`src/lib/whatsapp.ts`). The guest just presses send.

## Deploy (Hostinger)

1. `npm run build`
2. Upload `/out` to your Hostinger web root

## Photography

Drop optimised WebP images under `public/assets/<outlet-slug>/<category>/` —
the gallery picks them up automatically at build time. Brand-wide shots (food,
drinks) go under `public/assets/_shared/<category>/`. See `public/assets/README.md`.

Curated dish names/categories for the Food & Drinks page live in
`src/data/dishes.ts`; hero/feature image assignments live in `src/data/imagery.ts`.
