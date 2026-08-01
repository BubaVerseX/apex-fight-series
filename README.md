# APEX Fight Series — Marketing Website

Marketing site for **APEX Fight Series**, a combat sports and fitness studio in Tbilisi, Georgia. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Fully static — no backend, no auth, no payments.

## Stack

- **Next.js 16** (App Router) — the brief asked for Next.js 14, but `create-next-app` now scaffolds Next 16 by default; the App Router structure and every convention used here are unchanged, so nothing in the brief is affected.
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css` — there is no `tailwind.config.js`)
- **lucide-react** for icons (a couple of icons, like Instagram, were removed from lucide-react upstream — see `components/icons/`)
- Client-side i18n (EN / KA) via React Context + `localStorage`, no routing library

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project Structure

```
app/                     Routes (App Router). Each route is a thin server
                          component that only sets metadata; actual markup
                          lives in components/pages/*Content.tsx (client
                          components, so they can read the language context).
components/
  Navbar.tsx, Footer.tsx  Site chrome
  PhotoPlaceholder.tsx    Styled "[ Photo: ... ]" placeholder box
  ui/AngularButton.tsx    Shared angular-clip-path button
  icons/InstagramIcon.tsx Hand-drawn Instagram glyph (see note below)
  pages/*Content.tsx      Per-page content, one per route
lib/i18n/
  translations.ts         All EN + KA copy, typed by one Dictionary interface
  context.tsx              LanguageProvider / useLanguage()
public/
  logo.png                 Brand logo (see note below)
  og-image.png              Open Graph share image, generated from the logo
app/icon.png, app/apple-icon.png   Favicon / touch icon (Next.js file convention — no extra config needed)
```

## Placeholder content — replace before launch

This is a fully static informational site built ahead of real business details. Everything below is a placeholder and is labeled as such in the UI or in code comments:

| What | Where | Notes |
|---|---|---|
| **Logo** | `public/logo.png` | Cropped from a screenshot of the studio's own Instagram post (`@apex_fightseries`), since no source logo file was provided. It's fine for layout/color reference but is a compressed, screenshot-quality raster. **Replace with a real, high-resolution, ideally transparent-background PNG or SVG** — the file is referenced directly in `components/Navbar.tsx`, `components/Footer.tsx`, `components/pages/HomeContent.tsx` (hero), and used to generate `app/icon.png`, `app/apple-icon.png`, and `public/og-image.png`. Regenerate those three after swapping the source (see the `PIL` crop/resize snippet in git history, or just redo them in any image editor at 512×512, 180×180, and 1200×630 respectively). |
| **Photo placeholders** | Every `<PhotoPlaceholder />` usage (home, classes grid, about page, coach headshots) | Renders a styled dark box with `[ Photo: <label> ]`. Swap for a real `next/image` once photography exists — component signature is `<PhotoPlaceholder label="..." aspect="video\|square\|portrait\|wide" />`. |
| **Class schedule & descriptions** | `lib/i18n/translations.ts` → `classes.items` (both `en` and `ka`) | Days/times are invented and marked with a visible "placeholder schedule" banner on `/classes`. |
| **Pricing** | `lib/i18n/translations.ts` → `pricing.tiers` | GEL amounts are placeholders; each card shows a "Placeholder Price" badge and the page has a footnote disclaimer. |
| **Coach names & bios** | `lib/i18n/translations.ts` → `about.coaches` | Generic names ("Coach Name One", etc.) and generic bios; `/about` shows an explicit placeholder banner above the grid. |
| **Studio address, phone, email** | `lib/i18n/translations.ts` → `contact.*` and `footer.addressLine`, plus `mailto:`/`tel:` links in `components/Footer.tsx` and `components/pages/ContactContent.tsx` | Address is an invented Tbilisi street address. Instagram handle (`@apex_fightseries`) is real. |
| **Map** | `/contact` | Static styled placeholder box, not a real embed — no Google Maps API key wired up. |
| **Contact form** | `/contact` | Front-end only. `onSubmit` calls `preventDefault()` and does nothing else — there is no backend, email service, or form handler connected. |
| **Testimonial** | `lib/i18n/translations.ts` → `home.testimonialQuote` / `testimonialName` / `testimonialRole` | Invented quote, clearly labeled as placeholder in the copy itself. |
| **Stats strip numbers** | `components/pages/HomeContent.tsx` (hardcoded `500+`, `12`, `6`, `8`) | Not pulled from translations since they're just numbers — update directly in the component. |

Search the codebase for `placeholder` (case-insensitive) to find every reference at once.

## Internationalization

Language state lives in `lib/i18n/context.tsx` (`LanguageProvider` / `useLanguage()`), persisted to `localStorage` under `apex-lang`. All copy is centralized in `lib/i18n/translations.ts` as a single typed `Dictionary`, so adding a new page or string means adding a key to the type and filling in both `en` and `ka`.

Anton and Oswald (the display/condensed fonts) don't include Georgian glyphs, so Georgian text automatically switches to Noto Sans Georgian via a `:lang(ka)` rule in `app/globals.css` — see the comment there if you change fonts.

## Design system notes

- Brand colors, fonts, and the angular/diagonal clip-path utilities (`.btn-angular`, `.clip-card`, `.clip-diagonal-*`, `.slash-accent`, `.bg-grain`) are all defined in `app/globals.css`. There's no `tailwind.config.js` — Tailwind v4 reads the `@theme` block directly.
- `components/ui/AngularButton.tsx` is the one button component used everywhere; it renders a `<Link>` when given `href`, otherwise a `<button>`.

## Known limitations

- `components/icons/InstagramIcon.tsx` is a small hand-written SVG, not from lucide-react — the installed lucide-react version no longer ships brand/social icons.
- No automated tests.
