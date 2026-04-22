# Homepage Architecture Overview

This portfolio is built as a single long-form homepage with a small set of focused subcomponents.

## Goals

- Present Shreyansh first, not a product screenshot.
- Frame the work as shipped systems work.
- Keep the interaction premium but restrained.
- Make GitHub Pages deployment predictable.

## Core structure

- `app/layout.tsx`: metadata, fonts, shell
- `app/page.tsx`: homepage entry
- `components/home/HomePage.tsx`: page composition
- `lib/portfolio-content.ts`: copy and content model
- `app/globals.css`: visual system and layout styling

## Design principle

The site favors information density, hierarchy, and proof over decorative effects.
