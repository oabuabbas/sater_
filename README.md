# SATER — thesater.com

Static site built with Astro. English at `/`, Arabic at `/ar/`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## The rule that matters

**Nothing outside `src/styles/tokens.css` declares a colour, a size or a space.**
Components read semantic tokens (`--bg`, `--fg`, `--fg-dim`, `--edge`, `--accent`);
only a `<Plane>` redefines them. That is what lets the same components render
both language editions and both palette roles without branching.

## The module

The master wordmark is drawn on a pixel grid, so the whole system counts in one
square unit — `--u: 8px`. The letterform, the seam between planes
(`--seam`, a quarter module) and the kashida bar are the same unit at different
scales. Space and type steps are multiples of it.

## Layout

```
src/
  styles/tokens.css     the design system — read this first
  styles/base.css       element defaults + @font-face
  layouts/Base.astro    html shell, meta, hreflang, font preloads
  components/
    Plane.astro         the only thing that flips the palette
    Shelf.astro         seam-joined product grid
    ProductCell.astro   one product; identical frame for every icon
    Kashida.astro       the module bar (سطــــر)
    Nav / Footer / Home
  data/products.ts      every product, once — the single source of truth
  i18n/ui.ts            interface strings; a missing key is a type error
  pages/
    index.astro         /
    ar/index.astro      /ar/
public/
  fonts/                Cairo (OFL) + Roboto Mono (Apache-2.0), subset to woff2
  tam|khamen|zill/      legacy app pages, served verbatim — see below
```

## Arabic

Three things the tokens handle so components do not have to:

- `[lang="ar"], [dir="rtl"]` raises leading and **zeroes letter-spacing** —
  tracking pulls joined Arabic letters apart.
- `--font-mono` lists Cairo after Roboto Mono, because Roboto Mono has no Arabic
  and font fallback is per-glyph.
- Arabic words inside English pages use `<bdi>`, which isolates the run for
  shaping without flipping the element's alignment.

The fonts are subset with `pyftsubset --layout-features='*'`. Dropping that flag
strips the GSUB tables Arabic joining depends on and letters render isolated —
160 KB → 25 KB per face with shaping intact.

## Legacy URLs

`/tam/`, `/khamen/` and `/zill/` (including `privacy.html` and `terms.html`) are
linked from the Play Store listings. They are copied into `public/` and served
byte-for-byte until they are migrated onto the new layout, so those URLs keep
resolving. They are excluded from the generated sitemap.

## Deploying

`.github/workflows/deploy.yml` builds and publishes `dist/`. It assumes this
project sits at the **repository root**. In the repo settings, set
**Pages → Source → GitHub Actions** — the current site is published from the
branch root, and that has to change or the workflow output will be ignored.
`public/CNAME` keeps the `thesater.com` domain.

## Still to do

- Swap the placeholder wordmark in `Home.astro` for the redrawn vector master
  (ink and knockout). The placeholder is already at the final size and spacing.
- Replace `ProductCell`'s placeholder icon frame with the real artwork.
- Build `/tools`, `/play`, `/studio`, `/horizon` and `404`.
- Migrate the legacy app pages onto the layout.
- Replace `public/cover.png` — it is the old share image.
