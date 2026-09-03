# Design System — MODOLAR

## Direction & Aesthetic World

**Archetype:** Industrial Operations Engineering × High-End Digital B2B (WorkOS × Retool × Linear).
**Philosophy:** Software connected to the physical world (warehouses, conveyors, ERPs, picking, inventory, manufacturing).
Predominantly clean, light, and editorial, grounded by deep MODOLAR Navy sections for strategic impact.

## Color Palette & Tokens

- `--color-navy`: `#132238` (Primary brand color, deep structural surface, headings, navigation, primary buttons)
- `--color-navy-dark`: `#0d1726` (Hero deep gradient stops, deepest contrasts)
- `--color-navy-light`: `#1c304d` (Hover states on dark surfaces, subtle borders on dark)
- `--color-steel`: `#4D6175` (Secondary text, metadata, labels, architectural guide lines)
- `--color-steel-light`: `#8a9ba8` (Subtle metadata, placeholder text, muted states)
- `--color-teal`: `#18A999` (Accent Teal — used strictly with moderation for live connection indicators, status dots, subtle focus rings, flow paths)
- `--color-teal-glow`: `rgba(24, 169, 153, 0.15)` (Subtle node highlight, active input border ring)
- `--color-gray-light`: `#E9EEF3` (Section alternating backgrounds, subtle borders, division lines)
- `--color-gray-surface`: `#F4F7F9` (Muted functional blocks, code/diagram backgrounds)
- `--color-white`: `#FFFFFF` (Predominant background, high-contrast readable surfaces)
- `--border-subtle`: `1px solid #E2E8F0` (Crisp 1px architectural lines)
- `--border-dark`: `1px solid rgba(255, 255, 255, 0.12)` (Crisp dividers on dark backgrounds)

## Typography

- **Primary Font Family:** `Manrope`, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif.
- **Weights:**
  - 400 Regular (Body text, narrative paragraphs)
  - 500 Medium (Secondary labels, metadata, inputs)
  - 600 SemiBold (Subheadings, capability titles, cards, process steps)
  - 700 Bold / 800 ExtraBold (H1, H2 display headlines)
- **Hierarchy:**
  - Display H1: clamp(2.5rem, 5vw + 1rem, 4.25rem) / line-height: 1.08 / letter-spacing: -0.03em
  - Section H2: clamp(2rem, 3.5vw + 0.5rem, 3rem) / line-height: 1.15 / letter-spacing: -0.025em
  - Section H3: clamp(1.25rem, 2vw + 0.25rem, 1.75rem) / line-height: 1.25
  - Body Large: 1.25rem / line-height: 1.6 / max-width: 65ch
  - Body Base: 1rem (16px) / line-height: 1.65 / max-width: 70ch
  - Eyebrow / Label: 0.75rem (12px) - 0.8125rem (13px) / uppercase / letter-spacing: +0.08em / font-weight: 600

## Spatial Composition & Layout

- **Max Container:** `1280px` with fluid responsive padding (`clamp(1.25rem, 4vw, 3rem)`).
- **Section Spacing:** Generous vertical breathing room (`clamp(5rem, 8vw, 8.5rem)`).
- **Borders & Radii:**
  - Buttons: `8px`
  - Form Inputs: `8px`
  - Architecture Containers / Media frames: `12px`
  - Strictly avoid 24px+ excessive capsule pills for content containers.
- **Elevation / Shadows:**
  - No dramatic floating drop shadows.
  - Rely on clean 1px structural borders (`#E9EEF3`), sharp contrasts, and generous whitespace.

## Motion & Micro-interactions

- Subtle, purposeful transitions (200ms - 300ms ease-out).
- Interactive SVG Ecosystem Diagram: Slow linear pulse along SVG connection paths (`#18A999`) simulating real-time data synchronization between Mercado Libre, Odoo, Marketplaces, Internal Systems, and physical Operations.
- Buttons: 1-2px subtle Y-shift on hover with refined background brightness adjustment.
- Full respect for `@media (prefers-reduced-motion: reduce)`.
